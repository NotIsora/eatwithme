# EatWithMe MVP

Một prototype mobile-first cho việc tìm, lưu và chia sẻ những quán ăn đáng nhớ. Repo hiện chạy độc lập bằng dữ liệu mock để có thể khám phá UX ngay cả khi chưa cấu hình Google Maps API.

## Chạy local

```bash
npm run dev
```

Mở [http://localhost:4173](http://localhost:4173).

Không cần cài dependency: server dùng Node.js built-in `http` và frontend là HTML/CSS/JavaScript thuần.

## Cài trên điện thoại

Đây là PWA có `manifest.webmanifest`, service worker và mobile bottom navigation.

- Android/Chrome: mở URL → chọn “Install app”/“Add to Home screen”.
- iPhone/Safari: mở URL → Share → “Add to Home Screen”.
- Để xem từ thiết bị khác trong cùng Wi-Fi, lấy IPv4 bằng `ipconfig` rồi mở `http://<IP-máy-tính>:4173`. Service worker/install PWA trên điện thoại cần HTTPS, vì vậy môi trường production nên deploy lên Vercel/Cloudflare Pages hoặc domain HTTPS.

Nếu cần phát hành App Store/Google Play, có thể dùng Capacitor để đóng gói chính frontend này thành native shell; API/database không phải viết lại.

## Những gì đã có trong MVP

- Khám phá với search input, kết quả gần bạn và bản đồ trực quan dạng mock.
- Bản đồ tương tác Leaflet/OpenStreetMap, marker cho các quán đã lưu và định vị thiết bị bằng Geolocation API.
- Place detail với địa chỉ, rating, trạng thái mở cửa và giờ đóng cửa.
- Lưu/bỏ lưu quán, persistence bằng `localStorage`.
- Bộ sưu tập, filter “đang mở”, tạo collection mới.
- Ghi chú riêng và flow thêm ảnh (hiện chỉ mô phỏng upload).
- Bạn bè, activity feed, lời mời và hộp thư.
- Chia sẻ một quán cho nhiều bạn bè.
- Responsive mobile layout, keyboard focus và reduced-motion support.

### Lưu ý về vị trí và bản đồ

- Trình duyệt sẽ hỏi quyền vị trí khi mở màn hình Khám phá; nút “Định vị tôi” cho phép thử lại.
- Geolocation cần `localhost` hoặc HTTPS. Khi mở trên điện thoại bằng IP nội bộ dạng `http://192.168...`, bản đồ vẫn có thể xem nhưng trình duyệt có thể chặn vị trí.
- Bản đồ dùng tile OpenStreetMap qua Leaflet và có attribution; production nên kiểm tra chính sách tile/traffic phù hợp.

## Nối backend thật

Prototype này cố ý tách phần UI khỏi Google API. Khi đưa vào production:

1. Thay data mock trong `app.js` bằng các endpoint REST trong tài liệu kiến trúc.
2. Gọi Google Places API (New) qua backend, không đưa server key vào browser.
3. Dùng PostgreSQL + PostGIS cho `places`, `saved_places`, `friendships`, `collections` và `shares`.
4. Dùng object storage cho ảnh, signed upload URL, resize WebP/AVIF và quét MIME.
5. Thêm Redis cache, request coalescing, rate limit và worker đồng bộ `currentOpeningHours` theo TTL.

Tài liệu schema và API nằm ở [`docs/architecture.md`](docs/architecture.md).
