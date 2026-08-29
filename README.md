# EatWithMe — Bản Đồ Ẩm Thực Cá Nhân (Local-First Food Map)

Một ứng dụng web/PWA mobile-first hiện đại giúp bạn tìm kiếm, lưu trữ, ghim bản đồ và quản lý những quán ăn yêu thích của riêng mình.

Ứng dụng được thiết kế theo kiến trúc **100% Local-First & Offline-First**, toàn bộ dữ liệu được lưu trữ an toàn ngay trên thiết bị của bạn, không phụ thuộc vào máy chủ trung gian và sẵn sàng triển khai trên **Vercel** hoặc **GitHub Pages** với chi phí 0đ.

---

## Trải nghiệm trực tiếp

* **GitHub Pages**: [https://notisora.github.io/eatwithme/](https://notisora.github.io/eatwithme/)
* **Vercel**: Tự động triển khai dưới dạng static web/PWA app không cần serverless functions.

---

## Các tính năng nổi bật

### 1. Bản đồ ẩm thực tương tác (Zero API Key & Local Offline Map)
* **Bản đồ tương tác dịu mắt & 100% Offline**: Tích hợp Leaflet với bộ sinh canvas tile cục bộ (Offline Canvas Mode), hoạt động mượt mà không cần API key và hoàn toàn không phụ thuộc vào kết nối mạng hay tile server bên thứ ba.
* **16 danh mục món ăn trực quan**: Món Nhật, Món Âu, Món Hàn, Ăn nhanh, Món Việt, Ăn vặt, Hotpot, Grill, Hải sản, Cafe, Dining, Bánh, Ice cream, Pizza, Món Trung, Khác.
* **6 phân khúc giá rõ ràng**: `<100k`, `<200k`, `200k-300k`, `<500k`, `500k-800k`, `>1tr`.
* **Thêm quán ăn bằng tay**: Nhập tên, chọn dạng món, mức giá và ghim trực tiếp theo tọa độ GPS hiện tại hoặc nhập thủ công.

### 2. Lưu trữ Cục bộ (Local-First) & Sao lưu 1-Click
* **Bảo vệ dữ liệu bền vững**: Kết hợp `LocalStorage` và `IndexedDB` với cơ chế `navigator.storage.persist()` chống trình duyệt tự động dọn dẹp khi đầy bộ nhớ.
* **Sao lưu & Phục hồi JSON**: Xuất toàn bộ danh sách quán ăn và hồ sơ ra file `.json` hoặc khôi phục lại bất cứ lúc nào trên mọi thiết bị.
* **Quyền riêng tư tối đa**: Không gửi dữ liệu quán ăn của bạn lên bất kỳ máy chủ bên thứ ba nào.

### 3. Chia sẻ nhanh chóng
* **Sao chép thông tin quán 1-chạm**: Tự động sao chép tên quán và địa chỉ vào clipboard để gửi qua Zalo, Messenger, SMS...
* **Mở trực tiếp trên Google Maps**: Xem chỉ đường tức thì với một chạm.
* **Hỗ trợ Web Share API**: Chia sẻ trực tiếp qua bảng chia sẻ của hệ điều hành.

### 4. Hỗ trợ PWA & Mobile Native (Capacitor)
* Cài đặt trực tiếp lên màn hình chính điện thoại (iOS Safari & Android Chrome) như ứng dụng native.
* Tự động nhận diện và ưu tiên `@capacitor/geolocation` khi đóng gói thành ứng dụng di động.

---

## Hướng dẫn chạy và Triển khai

### 1. Chạy trên máy cá nhân (Local Development)

```bash
# Khởi động máy chủ Node.js cục bộ
npm run dev
```

Mở trình duyệt tại [http://localhost:4173](http://localhost:4173). Không cần cài đặt thư viện ngoài, server dùng Node.js built-in `http`.

---

### 2. Triển khai lên Vercel / GitHub Pages

Chỉ cần push mã nguồn lên GitHub:
* Đối với **GitHub Pages**: Đã tích hợp sẵn GitHub Actions tự động build và deploy.
* Đối với **Vercel**: Import repo vào Vercel, ứng dụng sẽ chạy ngay dưới dạng static SPA.

---

### 3. Đóng gói App Di Động với Capacitor

```bash
npm install
npm run build:mobile
npx cap add android   # hoặc: npx cap add ios
npm run cap:sync
npx cap open android  # hoặc: npx cap open ios
```
