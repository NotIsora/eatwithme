# ♨ EatWithMe — Food Map & Social Eating App

Một ứng dụng web/PWA mobile-first hiện đại giúp bạn cùng nhóm bạn bè tìm kiếm, lưu trữ, ghim bản đồ và chia sẻ những quán ăn đáng nhớ với hệ thống **Tag cá nhân (@handle) phong cách Instagram**.

Ứng dụng được thiết kế theo kiến trúc **Local-First & Serverless**, bảo đảm hoạt động mượt mà cả khi offline và sẵn sàng triển khai trên **Vercel** hoặc **GitHub Pages** với chi phí 0đ.

---

## 🚀 Trải nghiệm trực tiếp

* **GitHub Pages**: [https://notisora.github.io/eatwithme/](https://notisora.github.io/eatwithme/)
* **Vercel Ready**: Nhập repo vào [Vercel](https://vercel.com/new) để kích hoạt ngay với Serverless APIs.

---

## 🌟 Các tính năng nổi bật

### 1. Hệ thống Tag Cá Nhân (@tag) phong cách Instagram
* **Mỗi người dùng có một `@tag` độc nhất**: Không có 2 tài khoản trùng tag trên hệ thống (Case-insensitive: `@eatwithme`, `@andoan`...).
* **Kiểm tra tính khả dụng thời gian thực (Live Validation)**: Báo ngay khi tag bị trùng hoặc không hợp lệ lúc gõ phím.
* **Tên & Tag mặc định**: Khi chưa điền, hệ thống tự động đặt tên **`Eat with me`** và tag **`@eatwithme`**.
* **Tìm kiếm & Kết bạn thực tế từ máy chủ**: Nhập `@tag` để tra cứu tài khoản thực từ Server API (`/api/v1/users/search`) và kết nối 1-chạm.
* **Sao chép @tag 1-chạm**: Dễ dàng copy tag cá nhân để chia sẻ qua Zalo, Messenger, Instagram.

### 2. Bản đồ & Tự thêm quán ăn
* **Bản đồ tương tác dịu mắt**: Tích hợp Leaflet + CartoDB Positron tông màu nhẹ nhàng, giới hạn mức zoom tối ưu (10 – 18), chỉ hiển thị tên đường và các quán ghim.
* **16 danh mục món ăn trực quan**: Món Việt, Phở, Bún/Mì, Cơm, Lẩu, Nướng, Đồ Hàn, Đồ Nhật, Đồ Âu, Hải sản, Cafe, Trà sữa/Ăn vặt, Chay, Ăn sáng, Đêm/Nhậu, Fastfood.
* **6 phân khúc giá rõ ràng**: `<50k`, `50k-100k`, `100k-200k`, `200k-500k`, `>500k`, `Buffet`.
* **Thêm quán ăn bằng tay**: Nhập tên, chọn dạng món, mức giá, ghi chú và ghim trực tiếp lên tọa độ hiện tại.

### 3. Lưu trữ Cục bộ (Local-First) & Sao lưu 1-Click
* **Bảo vệ dữ liệu bền vững**: Kết hợp `LocalStorage` và `IndexedDB` với cơ chế `navigator.storage.persist()` chống trình duyệt tự động dọn dẹp khi đầy bộ nhớ.
* **Sao lưu & Phục hồi JSON**: Xuất toàn bộ danh sách quán ăn, ghi chú và hồ sơ ra file `.json` hoặc khôi phục lại bất cứ lúc nào.

### 4. Hỗ trợ PWA & Mobile Native (Capacitor)
* Cài đặt trực tiếp lên màn hình chính điện thoại (iOS Safari & Android Chrome) như ứng dụng native.
* Tự động nhận diện và ưu tiên `@capacitor/geolocation` khi đóng gói thành ứng dụng di động.

---

## 🛠 Hướng dẫn chạy và Triển khai

### 1. Chạy trên máy cá nhân (Local Development)

```bash
# Khởi động máy chủ Node.js cục bộ
npm run dev
```

Mở trình duyệt tại [http://localhost:4173](http://localhost:4173). Không cần cài đặt thư viện ngoài, server dùng Node.js built-in `http`.

---

### 2. Triển khai lên Vercel (Khuyên dùng)

Dự án đã tích hợp sẵn file cấu hình [`vercel.json`](vercel.json) và Serverless Functions tại [`api/index.js`](api/index.js):

1. Truy cập **[https://vercel.com/new](https://vercel.com/new)**.
2. Chọn Import repository **`NotIsora/eatwithme`**.
3. Bấm **`Deploy`** (giữ nguyên cấu hình mặc định).

---

### 3. Đóng gói App Di Động với Capacitor

```bash
npm install
npm run build:mobile
npx cap add android   # hoặc: npx cap add ios
npm run cap:sync
npx cap open android  # hoặc: npx cap open ios
```

---

## 📡 Hệ thống Server API Endpoints

Khi chạy qua `server.mjs` hoặc Vercel Serverless Functions (`api/index.js`):

| Phương thức | Endpoint | Mô tả |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Kiểm tra trạng thái hoạt động của máy chủ |
| `GET` | `/api/v1/geoip` | Xác định vị trí địa lý xấp xỉ của người dùng |
| `GET` | `/api/v1/tags/check?tag=@...` | Kiểm tra xem `@tag` đã có người đăng ký chưa |
| `PUT` | `/api/v1/tags/claim` | Đăng ký độc quyền `@tag` cho người dùng |
| `GET` | `/api/v1/users/search?tag=@...` | Tra cứu thông tin người dùng thực tế theo `@tag` |
| `POST` | `/api/v1/users/profile` | Đăng ký / đồng bộ hồ sơ người dùng lên máy chủ |
| `GET` | `/api/v1/users` | Lấy danh sách tài khoản đã đăng ký trên hệ thống |
| `GET` | `/api/v1/state` | Lấy dữ liệu quán ăn đã lưu & ghi chú của người dùng |
| `PUT` | `/api/v1/state` | Đồng bộ dữ liệu quán ăn & ghi chú lên máy chủ |

---

## 📄 Bản quyền & Đóng góp

Dự án được xây dựng với mục tiêu mang lại trải nghiệm khám phá ẩm thực tối giản, mượt mà và kết nối bạn bè tiện lợi nhất. Mọi đóng góp và phản hồi luôn được hoan nghênh!
