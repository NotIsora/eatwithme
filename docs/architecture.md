# EatWithMe — production wiring

## API contract

### MVP shared state API

The local server exposes a small cross-platform state API so the browser/PWA and Capacitor shell execute the same persistence path:

| Method | Endpoint | Mục đích |
| --- | --- | --- |
| GET | `/api/health` | Kiểm tra API có sẵn |
| GET | `/api/v1/state` | Đọc saved places, notes và collections của thiết bị |
| PUT | `/api/v1/state` | Ghi snapshot state đã được validate và giới hạn kích thước |

The demo server identifies a client with `X-EatWithMe-User` and persists state atomically in `db/runtime-state.json`. This is deliberately a transport/persistence adapter for the MVP, not an authentication system; production should replace it with JWT + PostgreSQL/RLS while keeping the client contract.

| Method | Endpoint | Mục đích |
| --- | --- | --- |
| GET | `/v1/places/autocomplete?input=&sessionToken=` | Proxy Autocomplete (New) |
| GET | `/v1/places/search?lat=&lng=&radius=` | Tìm trong cache/PostGIS, fallback Google |
| GET | `/v1/places/:googlePlaceId` | Place detail, stale-while-revalidate |
| GET/POST | `/v1/saved-places` | Danh sách cá nhân |
| PATCH/DELETE | `/v1/saved-places/:id` | Note, visibility, xóa |
| POST | `/v1/saved-places/:id/media/presign` | Signed upload URL |
| POST | `/v1/saved-places/:id/media/complete` | Finalize ảnh đã upload |
| GET/POST | `/v1/collections` | Collection của người dùng |
| POST/DELETE | `/v1/collections/:id/items` | Thêm/xóa địa điểm |
| GET | `/v1/friends` | Danh sách bạn bè |
| POST/PATCH | `/v1/friend-requests` | Gửi và xử lý lời mời |
| POST/GET | `/v1/shares` | Chia sẻ một quán/collection |

Các list API dùng cursor `(created_at, id)` thay vì offset. Backend cần JWT + RLS, rate limit theo user/IP và kiểm tra quyền ở cả service lẫn database.

## Google Places sync

Backend chỉ lấy field mask tối thiểu:

```text
id,displayName,formattedAddress,location,businessStatus,
utcOffsetMinutes,regularOpeningHours,currentOpeningHours
```

Đọc `hours_expires_at` trước. Nếu còn hạn thì trả cache; nếu hết hạn thì trả dữ liệu cũ và đưa job sync vào queue. Chỉ đồng bộ synchronously khi địa điểm chưa từng có dữ liệu hoặc người dùng yêu cầu refresh.

`regularOpeningHours.periods` được chuẩn hóa thành các dòng `place_hours`; `currentOpeningHours.openNow` có TTL ngắn hơn vì đây là trạng thái tại thời điểm truy vấn. Google Place ID có thể lưu lâu dài, còn dữ liệu nội dung Google cần được lưu và refresh theo điều khoản hiện hành.

## Cost and reliability guardrails

- Debounce autocomplete 250–300 ms, tối thiểu 2–3 ký tự.
- Một session token cho mỗi chuỗi autocomplete → chọn địa điểm.
- Field mask, cache Redis, single-flight theo `google_place_id`.
- Quota/ngày, budget alert, circuit breaker cho 429/5xx.
- Lazy-load map SDK; không geocode lại khi Places đã trả tọa độ.
- Ảnh người dùng resize thành thumbnail + medium + original, giới hạn MIME/kích thước.
- Log `google_sku`, `cache_hit`, latency, status code và chi phí ước tính.

## Privacy and moderation

- Mặc định collection và saved place là private.
- Có block/report; hủy kết bạn phải thu hồi quyền share.
- Signed URL cho media, strip EXIF, giới hạn số ảnh/quán.
- Cho phép export và xóa toàn bộ dữ liệu tài khoản.
