import { readFile, writeFile } from "node:fs/promises";

const GEOCODE_API_URL = "https://photon.komoot.io/api/";
const NOMINATIM_SEARCH_URL = "https://nominatim.openstreetmap.org/search";
const DEFAULT_MAP_CENTER = [10.7769, 106.7009];

const DELAY_MS = 1100;
const MAX_RETRIES = 2;
const BATCH_SIZE = 10;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function geocodeLocation(query, options = {}) {
  const q = (query || "").trim();
  if (!q) return null;

  const lat = options.lat || DEFAULT_MAP_CENTER[0];
  const lng = options.lng || DEFAULT_MAP_CENTER[1];

  // Try Photon first
  try {
    const url = `${GEOCODE_API_URL}?q=${encodeURIComponent(q)}&lat=${lat}&lon=${lng}&limit=1`;
    const res = await fetch(url, { headers: { "Accept": "application/json" }, signal: AbortSignal.timeout(8000) });
    if (res.ok) {
      const data = await res.json();
      if (data.features && data.features.length > 0) {
        const f = data.features[0];
        const props = f.properties || {};
        const coords = f.geometry?.coordinates || [lng, lat];
        const parts = [
          props.name,
          props.housenumber ? `${props.housenumber} ${props.street || ""}`.trim() : props.street,
          props.district || props.suburb || props.locality,
          props.city || props.state || "TP. Hồ Chí Minh"
        ].filter(Boolean);
        const fullAddress = Array.from(new Set(parts)).join(", ");
        return {
          name: props.name || props.street || q,
          address: fullAddress || q,
          lat: Number(coords[1].toFixed(6)),
          lng: Number(coords[0].toFixed(6)),
          district: props.district || props.suburb || "",
          source: "photon"
        };
      }
    }
  } catch (e) {
    console.warn(`  Photon failed for "${q}": ${e.message}`);
  }

  // Fallback to Nominatim
  try {
    const nomUrl = `${NOMINATIM_SEARCH_URL}?q=${encodeURIComponent(q + ", Hồ Chí Minh, Việt Nam")}&format=json&addressdetails=1&limit=1&countrycodes=vn`;
    const res = await fetch(nomUrl, {
      headers: { "Accept": "application/json", "User-Agent": "EatWithMe-BatchGeocoder/1.0" },
      signal: AbortSignal.timeout(8000)
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const item = data[0];
        return {
          name: item.name || item.display_name?.split(",")[0] || q,
          address: item.display_name,
          lat: Number(parseFloat(item.lat).toFixed(6)),
          lng: Number(parseFloat(item.lon).toFixed(6)),
          district: item.address?.suburb || item.address?.district || "",
          source: "nominatim"
        };
      }
    }
  } catch (e) {
    console.warn(`  Nominatim failed for "${q}": ${e.message}`);
  }

  return null;
}

async function geocodeWithRetry(query, options = {}, retries = MAX_RETRIES) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const result = await geocodeLocation(query, options);
    if (result) return result;
    if (attempt < retries) {
      console.log(`  Retry ${attempt + 1}/${retries} for "${query}"...`);
      await sleep(DELAY_MS * 2);
    }
  }
  return null;
}

async function extractPlacesFromAppJs() {
  const appJs = await readFile("./app.js", "utf8");
  const match = appJs.match(/const defaultPlaces = (\[[\s\S]*?\]);\s*$/m);
  if (!match) throw new Error("Could not find defaultPlaces in app.js");
  return JSON.parse(match[1]);
}

function buildSearchQuery(place) {
  const parts = [];
  if (place.address) parts.push(place.address);
  if (place.district) parts.push(place.district);
  parts.push("TP. HCM");
  return parts.join(", ");
}

async function main() {
  console.log("📍 Batch Geocoding EatWithMe Places\n");

  const places = await extractPlacesFromAppJs();
  console.log(`Found ${places.length} places to geocode\n`);

  const results = [];
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < places.length; i += BATCH_SIZE) {
    const batch = places.slice(i, i + BATCH_SIZE);
    console.log(`\n--- Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(places.length / BATCH_SIZE)} ---`);

    for (const place of batch) {
      const query = buildSearchQuery(place);
      console.log(`[${i + 1}/${places.length}] Geocoding: ${place.name} (${query})`);

      const result = await geocodeWithRetry(query, { lat: place.lat, lng: place.lng });

      if (result) {
        const oldLat = place.lat;
        const oldLng = place.lng;
        const latDiff = Math.abs(result.lat - oldLat);
        const lngDiff = Math.abs(result.lng - oldLng);
        const moved = latDiff > 0.001 || lngDiff > 0.001;

        place.lat = result.lat;
        place.lng = result.lng;
        if (result.district && !place.district.includes(result.district)) {
          place.district = result.district;
        }
        place._geocodeSource = result.source;
        place._geocodeMoved = moved;

        console.log(`  ✓ ${result.source.toUpperCase()}: ${result.lat}, ${result.lng}${moved ? ` (moved ~${(latDiff * 111).toFixed(1)}km)` : " (same)"}`);
        successCount++;
      } else {
        console.log(`  ✗ FAILED - keeping original coordinates`);
        place._geocodeSource = "original";
        place._geocodeMoved = false;
        failCount++;
      }

      results.push(place);
      await sleep(DELAY_MS);
    }

    if (i + BATCH_SIZE < places.length) {
      console.log(`  Pausing between batches...`);
      await sleep(DELAY_MS * 3);
    }
  }

  console.log(`\n✅ Complete: ${successCount} succeeded, ${failCount} failed`);

  // Strip temporary metadata fields
  const cleanResults = results.map(({ _geocodeSource, _geocodeMoved, ...place }) => place);

  // Generate updated app.js
  const appJs = await readFile("./app.js", "utf8");
  const newPlacesJson = JSON.stringify(cleanResults, null, 2);
  const updatedAppJs = appJs.replace(
    /const defaultPlaces = \[[\s\S]*?\];\s*/,
    `const defaultPlaces = ${newPlacesJson};\n`
  );

  await writeFile("./app.js", updatedAppJs);
  console.log("📝 Updated app.js with geocoded coordinates");

  // Also save a backup
  await writeFile("./app.js.geocoded-backup", appJs);
  console.log("💾 Backup saved to app.js.geocoded-backup");
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});