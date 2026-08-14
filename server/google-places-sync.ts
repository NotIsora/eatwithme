import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const fieldMask = [
  "id",
  "displayName",
  "formattedAddress",
  "location",
  "businessStatus",
  "utcOffsetMinutes",
  "regularOpeningHours",
  "currentOpeningHours",
].join(",");

type DayTime = { day?: number; time?: string };
type Period = { open?: DayTime; close?: DayTime };
type PlaceDetails = {
  id?: string;
  displayName?: { text?: string };
  formattedAddress?: string;
  location?: { latitude?: number; longitude?: number };
  businessStatus?: string;
  utcOffsetMinutes?: number;
  regularOpeningHours?: { periods?: Period[] };
  currentOpeningHours?: { openNow?: boolean };
};

const toMinute = (value?: string) => {
  if (!value || !/^\d{4}$/.test(value)) return null;
  const hour = Number(value.slice(0, 2));
  const minute = Number(value.slice(2, 4));
  return hour < 24 && minute < 60 ? hour * 60 + minute : null;
};

export async function syncGooglePlace(googlePlaceId: string) {
  const key = process.env.GOOGLE_MAPS_SERVER_KEY;
  if (!key || !/^[A-Za-z0-9_-]{5,200}$/.test(googlePlaceId)) {
    throw new Error("Invalid Google Places configuration");
  }

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(googlePlaceId)}`,
    {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": fieldMask,
      },
      signal: AbortSignal.timeout(4000),
    },
  );

  if (!response.ok) throw new Error(`Google Places returned ${response.status}`);
  const place = (await response.json()) as PlaceDetails;
  const id = place.id ?? googlePlaceId;
  const periods = place.regularOpeningHours?.periods ?? [];
  const rows = periods.flatMap((period, periodIndex) => {
    const openDay = period.open?.day;
    const openMinute = toMinute(period.open?.time);
    if (openDay == null || openMinute == null) return [];
    return [{
      periodIndex,
      openDay,
      openMinute,
      closeDay: period.close?.day ?? null,
      closeMinute: toMinute(period.close?.time),
      is24h: !period.close,
    }];
  });

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const result = await client.query<{ id: number }>(
      `
      INSERT INTO places (
        google_place_id, name, address, geom, business_status,
        utc_offset_minutes, open_now, details_synced_at
      ) VALUES (
        $1, $2, $3,
        CASE WHEN $4 THEN ST_SetSRID(ST_MakePoint($6, $5), 4326)::geography END,
        $7, $8, $9, now()
      )
      ON CONFLICT (google_place_id) DO UPDATE SET
        name = COALESCE(EXCLUDED.name, places.name),
        address = COALESCE(EXCLUDED.address, places.address),
        geom = COALESCE(EXCLUDED.geom, places.geom),
        business_status = COALESCE(EXCLUDED.business_status, places.business_status),
        utc_offset_minutes = COALESCE(EXCLUDED.utc_offset_minutes, places.utc_offset_minutes),
        open_now = COALESCE(EXCLUDED.open_now, places.open_now),
        details_synced_at = now()
      RETURNING id
      `,
      [
        id,
        place.displayName?.text ?? null,
        place.formattedAddress ?? null,
        place.location?.latitude != null && place.location?.longitude != null,
        place.location?.latitude ?? null,
        place.location?.longitude ?? null,
        place.businessStatus ?? null,
        place.utcOffsetMinutes ?? null,
        place.currentOpeningHours?.openNow ?? null,
      ],
    );

    const dbId = result.rows[0].id;
    if (place.regularOpeningHours) {
      await client.query("DELETE FROM place_hours WHERE place_id = $1", [dbId]);
      if (rows.length) {
        await client.query(
          `
          INSERT INTO place_hours (
            place_id, period_index, open_day, open_minute,
            close_day, close_minute, is_24h
          )
          SELECT $1, x.* FROM unnest(
            $2::smallint[], $3::smallint[], $4::smallint[],
            $5::smallint[], $6::smallint[], $7::boolean[]
          ) AS x(period_index, open_day, open_minute, close_day, close_minute, is_24h)
          `,
          [
            dbId,
            rows.map((row) => row.periodIndex),
            rows.map((row) => row.openDay),
            rows.map((row) => row.openMinute),
            rows.map((row) => row.closeDay),
            rows.map((row) => row.closeMinute),
            rows.map((row) => row.is24h),
          ],
        );
      }
      await client.query(
        `UPDATE places SET hours_synced_at = now(), hours_expires_at = now() + interval '10 minutes' WHERE id = $1`,
        [dbId],
      );
    }

    await client.query("COMMIT");
    return { dbId, googlePlaceId: id, openNow: place.currentOpeningHours?.openNow ?? null };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}
