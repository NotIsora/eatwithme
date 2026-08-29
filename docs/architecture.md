# EatWithMe — production wiring

## Architecture & Map Design

EatWithMe is a 100% local-first personal food map app. It requires **zero map API keys** for runtime map rendering and place discovery:

1. **Map Tiles:** OpenStreetMap Standard (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`) with automatic fallback to Local Canvas Offline Renderer (`Offline Canvas Mode`) rendered via Leaflet 1.9.4. Zero API key required.
2. **Keyless Geocoding Engine:** Multi-tier geocoding pipeline (`scripts/import-excel-geocode.mjs` and client fallbacks) using Photon OSM (with Saigon proximity bias), Nominatim, and ESRI ArcGIS.
3. **Manual Coordinates:** Direct Google Maps URL coordinate parser and update endpoint (`/api/save-place` in `server.mjs`) used by `scripts/verify-google-maps.html`.

## API contract

### MVP shared state API

The local server exposes a small cross-platform state API so the browser/PWA and Capacitor shell execute the same persistence path:

| Method | Endpoint | Mục đích |
| --- | --- | --- |
| GET | `/api/health` | Kiểm tra API có sẵn |
| GET | `/api/v1/state` | Đọc saved places, notes và collections của thiết bị |
| PUT | `/api/v1/state` | Ghi snapshot state đã được validate và giới hạn kích thước |
| POST | `/api/save-place` | Cập nhật tọa độ từ Google Maps URL cho địa điểm |

The demo server identifies a client with `X-EatWithMe-User` and persists state atomically in `db/runtime-state.json`. This is deliberately a transport/persistence adapter for the MVP, not an authentication system.

## Privacy and moderation

- Mặc định collection và saved place là private.
- Có block/report; hủy kết bạn phải thu hồi quyền share.
- Signed URL cho media, strip EXIF, giới hạn số ảnh/quán.
- Cho phép export và xóa toàn bộ dữ liệu tài khoản.
