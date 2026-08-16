# EatWithMe MVP

Một prototype mobile-first cho việc tìm, lưu và chia sẻ những quán ăn đáng nhớ. Repo có dữ liệu mock để khám phá UX ngay cả khi chưa cấu hình Google Maps API, đồng thời có backend state tối giản để browser/PWA và app Capacitor dùng cùng một API.

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

### Native location với Capacitor

`app.js` tự ưu tiên `@capacitor/geolocation` khi chạy trong Android/iOS shell. Khi mở bằng trình duyệt, app vẫn dùng Geolocation API và cache-first như trước.

```bash
npm install
npm run build:mobile
npx cap add android
npm run cap:sync
npx cap open android
```

Android cần Android Studio/SDK. iOS cần macOS/Xcode và thêm `NSLocationWhenInUseUsageDescription` vào `Info.plist`. Chỉ chạy `npx cap add android` hoặc `npx cap add ios` một lần cho mỗi nền tảng; các lần sau dùng `npm run cap:sync`.

## Những gì đã có trong MVP

- Khám phá với search input, kết quả gần bạn và bản đồ tương tác tối giản.
- Bản đồ Leaflet/Esri World Light Gray, chỉ nhấn mạnh đường và tên đường; marker cho các quán đã lưu và định vị thiết bị bằng Geolocation API.
- Place detail với địa chỉ, rating, trạng thái mở cửa và giờ đóng cửa.
- Lưu/bỏ lưu quán, ghi chú và collections qua backend state; `localStorage` là cache/offline fallback.
- Bộ sưu tập, filter “đang mở”, tạo collection mới.
- Ghi chú riêng và flow thêm ảnh (hiện chỉ mô phỏng upload).
- Bạn bè, activity feed, lời mời và hộp thư.
- Chia sẻ một quán cho nhiều bạn bè.
- Responsive mobile layout, keyboard focus và reduced-motion support.

### Backend dùng chung cho browser và mobile

Khi chạy `npm run dev`, Node server phục vụ cả giao diện và các endpoint:

```text
GET /api/health
GET /api/v1/state
PUT /api/v1/state
```

Saved places, ghi chú và collections được lưu bền vững trong `db/runtime-state.json` (file này đã được `.gitignore`). Mỗi browser/thiết bị có một `X-EatWithMe-User` riêng để dữ liệu không bị trộn. Frontend dùng API trước và tự động rơi về `localStorage` khi offline hoặc API chưa được deploy.

Để app Capacitor gọi cùng backend, đặt URL API có thể truy cập được trước khi build (HTTPS khi chạy production):

```js
window.EATWITHME_API_BASE = "https://api.example.com/api";
```

Nếu không thể sửa file build, có thể đặt cùng giá trị một lần trong DevTools của app: `localStorage.setItem("eatwithme.api-base.v1", "https://api.example.com/api")` rồi tải lại.

Browser chạy từ `http://localhost:4173` tự dùng `http://localhost:4173/api`, nên không cần cấu hình thêm.

### Lưu ý về vị trí và bản đồ

- Bản đồ hiển thị ngay theo các quán đã lưu; định vị đọc cache cục bộ tức thì, prefetch song song với lúc tải Leaflet và có deadline cứng khoảng 2,7 giây. Vị trí gần đây được lưu cục bộ tối đa 30 phút; nút “Định vị tôi” cho phép thử lại.
- Geolocation cần `localhost` hoặc HTTPS. Khi mở trên điện thoại bằng IP nội bộ dạng `http://192.168...`, bản đồ vẫn có thể xem nhưng trình duyệt có thể chặn vị trí.
- Nền bản đồ dùng Esri World Light Gray Base/Reference và có attribution; production nên kiểm tra chính sách tile/traffic phù hợp.
- Có thể làm bản đồ offline bằng PMTiles/MBTiles (đóng gói một vùng địa lý và phục vụ tile local), nhưng file sẽ lớn và phải tự cập nhật dữ liệu/giấy phép. MVP hiện dùng tile online để giữ bundle nhỏ.

## Nối backend thật

Prototype này cố ý tách phần UI khỏi Google API. Khi đưa vào production:

1. Thay data mock trong `app.js` bằng các endpoint REST trong tài liệu kiến trúc.
2. Gọi Google Places API (New) qua backend, không đưa server key vào browser.
3. Dùng PostgreSQL + PostGIS cho `places`, `saved_places`, `friendships`, `collections` và `shares`.
4. Dùng object storage cho ảnh, signed upload URL, resize WebP/AVIF và quét MIME.
5. Thêm Redis cache, request coalescing, rate limit và worker đồng bộ `currentOpeningHours` theo TTL.

Tài liệu schema và API nằm ở [`docs/architecture.md`](docs/architecture.md).
