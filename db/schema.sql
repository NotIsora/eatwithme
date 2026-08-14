CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE app_user (
  id uuid PRIMARY KEY,
  display_name varchar(80) NOT NULL,
  avatar_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE places (
  id bigserial PRIMARY KEY,
  google_place_id text NOT NULL UNIQUE,
  name text,
  address text,
  geom geography(Point, 4326),
  business_status text,
  utc_offset_minutes smallint,
  open_now boolean,
  details_synced_at timestamptz,
  hours_synced_at timestamptz,
  hours_expires_at timestamptz
);

CREATE INDEX places_geom_gix ON places USING GIST (geom);

CREATE TABLE place_hours (
  place_id bigint NOT NULL REFERENCES places(id) ON DELETE CASCADE,
  period_index smallint NOT NULL,
  open_day smallint NOT NULL,
  open_minute smallint NOT NULL,
  close_day smallint,
  close_minute smallint,
  is_24h boolean NOT NULL DEFAULT false,
  PRIMARY KEY (place_id, period_index)
);

CREATE TABLE saved_places (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  place_id bigint NOT NULL REFERENCES places(id) ON DELETE CASCADE,
  note text,
  visibility varchar(16) NOT NULL DEFAULT 'private',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, place_id)
);

CREATE INDEX saved_places_user_created_idx
  ON saved_places(user_id, created_at DESC, id DESC);

CREATE TABLE saved_place_media (
  id uuid PRIMARY KEY,
  saved_place_id uuid NOT NULL REFERENCES saved_places(id) ON DELETE CASCADE,
  object_key text NOT NULL,
  status varchar(16) NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE friendships (
  user_low uuid NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  user_high uuid NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  status varchar(16) NOT NULL DEFAULT 'accepted',
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_low, user_high),
  CHECK (user_low < user_high)
);

CREATE TABLE friend_requests (
  id uuid PRIMARY KEY,
  requester_id uuid NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  recipient_id uuid NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  status varchar(16) NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX pending_friend_request_idx
  ON friend_requests(requester_id, recipient_id)
  WHERE status = 'pending';

CREATE TABLE collections (
  id uuid PRIMARY KEY,
  owner_id uuid NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  name varchar(100) NOT NULL,
  visibility varchar(16) NOT NULL DEFAULT 'private',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE collection_items (
  collection_id uuid NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  place_id bigint NOT NULL REFERENCES places(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (collection_id, place_id)
);

CREATE TABLE shares (
  id uuid PRIMARY KEY,
  sender_id uuid NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  recipient_id uuid NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  place_id bigint REFERENCES places(id),
  collection_id uuid REFERENCES collections(id),
  created_at timestamptz NOT NULL DEFAULT now()
);
