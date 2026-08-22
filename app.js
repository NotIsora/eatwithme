const ICONS = {
  compass: "⌖",
  collections: "▦",
  search: "⌕",
  add: "+",
  share: "↗",
  bookmark: "♡",
  bookmarkFill: "♥",
  trash: "✕",
  more: "⋯",
  close: "×",
  arrow: "→",
  check: "✓",
};

const FOOD_CATEGORIES = [
  { id: "mon-nhat", name: "Món Nhật", bg: "#fde3d0", color: "#b3531b" },
  { id: "mon-au", name: "Món Âu", bg: "#fef0be", color: "#966c0d" },
  { id: "mon-han", name: "Món Hàn", bg: "#dcf4ce", color: "#3d792b" },
  { id: "an-nhanh", name: "Ăn nhanh", bg: "#ebd8f8", color: "#733ea3" },
  { id: "mon-viet", name: "Món Việt", bg: "#cbe5fc", color: "#185ea5" },
  { id: "an-vat", name: "Ăn vặt", bg: "#ffd5cb", color: "#c23f27" },
  { id: "hotpot", name: "Hotpot", bg: "#cce5e8", color: "#236d75" },
  { id: "grill", name: "Grill", bg: "#f5cbe3", color: "#98356f" },
  { id: "hai-san", name: "Hải sản", bg: "#d2edf7", color: "#0f6482" },
  { id: "cafe", name: "Cafe", bg: "#ebdcd0", color: "#6b4226" },
  { id: "dining", name: "Dining", bg: "#ddf3da", color: "#2c6e3b" },
  { id: "banh", name: "Bánh", bg: "#ffffff", color: "#111111", border: "#e5e5e5" },
  { id: "ice-cream", name: "Ice cream", bg: "#a60a0a", color: "#ffffff" },
  { id: "pizza", name: "Pizza", bg: "#ea3899", color: "#ffffff" },
  { id: "mon-trung", name: "Món Trung", bg: "#eed4fc", color: "#7b38a7" },
  { id: "khac", name: "Khác", bg: "#000000", color: "#ffffff" },
];

const PRICE_TIERS = [
  { id: "under-100k", name: "<100k", bg: "#ffd5cc", color: "#c23f27" },
  { id: "under-200k", name: "<200k", bg: "#fdd0b0", color: "#b3531b" },
  { id: "200k-300k", name: "200k-300k", bg: "#c4e3e8", color: "#236d75" },
  { id: "under-500k", name: "<500k", bg: "#feec9e", color: "#966c0d" },
  { id: "500k-800k", name: "500k-800k", bg: "#badbfc", color: "#185ea5" },
  { id: "over-1tr", name: ">1tr", bg: "#d4f3b7", color: "#3d792b" },
];

const defaultPlaces = [
  {
    "id": "place-mi-1",
    "name": "Milo dầm",
    "category": "Ăn vặt",
    "district": "Quận 1",
    "address": "chung cư 42 Tôn Thất Thiệp, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "0.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77081,
    "lng": 106.70363,
    "description": "Địa điểm ẩm thực Ăn vặt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-2",
    "name": "Bột chiên phô mai",
    "category": "Ăn vặt",
    "district": "Quận 1",
    "address": "22 Trần Khắc Chân, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "0.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78888,
    "lng": 106.6922,
    "description": "Địa điểm ẩm thực Ăn vặt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-3",
    "name": "Danbo Ramen",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8a/7b1 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.4",
    "distance": "0.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77918,
    "lng": 106.70556,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-4",
    "name": "Ippudo",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "47 Tôn Thất Tiệp, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.5",
    "distance": "0.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7732,
    "lng": 106.7028,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-5",
    "name": "Hẻm Fast Food",
    "category": "Ăn nhanh",
    "district": "Quận 1",
    "address": "75 Nguyễn Cư Trinh, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.6",
    "distance": "1.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76201,
    "lng": 106.6914,
    "description": "Địa điểm ẩm thực Ăn nhanh hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-6",
    "name": "Japan Eats",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "5/70 Nguyễn Trung Ngạn, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "1.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.78503,
    "lng": 106.70347,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-7",
    "name": "SOKO Cake Bake & Brunch",
    "category": "Bánh",
    "district": "Quận 1",
    "address": "27a Nguyễn Trung Trực\n24 Hồ Tùng Mậu, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.8",
    "distance": "1.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.77431,
    "lng": 106.70532,
    "description": "Địa điểm ẩm thực Bánh hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-8",
    "name": "Gum Fast Food",
    "category": "Ăn nhanh",
    "district": "Quận 1",
    "address": "245/4 Nguyễn Trãi, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.9",
    "distance": "1.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76466,
    "lng": 106.69024,
    "description": "Địa điểm ẩm thực Ăn nhanh hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-9",
    "name": "Home Mì",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "65a CMT8, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.0",
    "distance": "1.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77629,
    "lng": 106.69997,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-10",
    "name": "Nguyên Sinh Bistro",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "141 Trần Đình Xu, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.1",
    "distance": "1.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75952,
    "lng": 106.69047,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-11",
    "name": "Baby Spoon",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "196 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.2",
    "distance": "1.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77722,
    "lng": 106.70414,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-12",
    "name": "Soumaki",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "42 Lý Tự Trọng, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.3",
    "distance": "1.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7779,
    "lng": 106.70114,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-13",
    "name": "Bếp cô Tư - Bánh căn nha trang",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "100/45 Trần Hưng Đạo, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "1.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75639,
    "lng": 106.68493,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-14",
    "name": "Izakaya Kamura",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8a/a14 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.5",
    "distance": "1.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77858,
    "lng": 106.70556,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-15",
    "name": "Ittou Ramen",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8/8 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.6",
    "distance": "2.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77722,
    "lng": 106.70474,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-16",
    "name": "Mì Ý A Hoài",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "55/1 Trần Đình Xu, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.7",
    "distance": "2.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75922,
    "lng": 106.69017,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-17",
    "name": "Nekoya",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "38/10/22G Trần Khắc Chân, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.8",
    "distance": "2.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.78828,
    "lng": 106.6928,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-18",
    "name": "Godmother",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "708 Lê Lợi, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.9",
    "distance": "2.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77286,
    "lng": 106.69527,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-19",
    "name": "Vee Ayy",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "345/84 Trần Hưng Đạo, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.0",
    "distance": "2.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75609,
    "lng": 106.68493,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-20",
    "name": "Trạm Hầm",
    "category": "Grill",
    "district": "Quận 1",
    "address": "68 Sương Nguyệt Anh, Quận 1, TP. HCM",
    "price": "500k-800k",
    "rating": "4.1",
    "distance": "2.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77083,
    "lng": 106.69817,
    "description": "Địa điểm ẩm thực Grill hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-21",
    "name": "Kawabi Izakaya",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8a/3b1 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.2",
    "distance": "2.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77918,
    "lng": 106.70466,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-22",
    "name": "SOLOBOX",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "252 Lý Tự Trọng, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.3",
    "distance": "2.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7779,
    "lng": 106.70114,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-23",
    "name": "Motsunabe Rakutenchi",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8/16 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.4",
    "distance": "2.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77632,
    "lng": 106.70444,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-24",
    "name": "Trần Pizza",
    "category": "Pizza",
    "district": "Quận 1",
    "address": "117/20 Cống Quỳnh, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.5",
    "distance": "0.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76546,
    "lng": 106.69142,
    "description": "Địa điểm ẩm thực Pizza hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-25",
    "name": "Xù Food",
    "category": "Món Hàn",
    "district": "Quận 1",
    "address": "135/30 Trần Hưng Đạo, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.6",
    "distance": "0.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.75669,
    "lng": 106.68553,
    "description": "Địa điểm ẩm thực Món Hàn hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-26",
    "name": "Kaku Izakaya",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "15B/12A Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.7",
    "distance": "0.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77782,
    "lng": 106.70384,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-27",
    "name": "DONG FAN - Sashimi bowl",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "lầu 1, 8/5 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.8",
    "distance": "0.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77782,
    "lng": 106.70474,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-28",
    "name": "WRAP & RUN",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "173/4 Nguyễn Thị Minh Khai, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.9",
    "distance": "0.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7772,
    "lng": 106.6988,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-29",
    "name": "Scoopy Ice Cream",
    "category": "Ice cream",
    "district": "Quận 1",
    "address": "7/12 Nguyễn Tri Phương, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.0",
    "distance": "0.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76175,
    "lng": 106.67084,
    "description": "Địa điểm ẩm thực Ice cream hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-30",
    "name": "Lamie Pizza",
    "category": "Pizza",
    "district": "Quận 1",
    "address": "158/4 Nguyễn Công Trứ, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.1",
    "distance": "1.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77031,
    "lng": 106.70082,
    "description": "Pizza vuông kinda good"
  },
  {
    "id": "place-mi-31",
    "name": "Pizza Belga",
    "category": "Pizza",
    "district": "Quận 1",
    "address": "9A Phan Kế Bính, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.2",
    "distance": "1.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78899,
    "lng": 106.70124,
    "description": "Địa điểm ẩm thực Pizza hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-32",
    "name": "Suizan",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "29 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.3",
    "distance": "1.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77948,
    "lng": 106.70556,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-33",
    "name": "JJ Social Grill",
    "category": "Grill",
    "district": "Quận 1",
    "address": "201 Nguyễn Trãi, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.4",
    "distance": "1.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76556,
    "lng": 106.69114,
    "description": "Địa điểm ẩm thực Grill hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-34",
    "name": "Ramen Oh Hanabi",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "268 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.5",
    "distance": "1.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77782,
    "lng": 106.70444,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-35",
    "name": "iSTEAKS",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "99 Nguyễn Huệ, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.6",
    "distance": "1.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77358,
    "lng": 106.70295,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-36",
    "name": "L’Usine",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "19 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.7",
    "distance": "1.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77812,
    "lng": 106.70414,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-37",
    "name": "ME-TETSU IZAKAYA",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "17/25 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.8",
    "distance": "1.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77632,
    "lng": 106.70444,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-38",
    "name": "Golden Curry",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8/9 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.9",
    "distance": "1.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77662,
    "lng": 106.70414,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-39",
    "name": "Hoa Túc Saigon",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "74/7 Hai Bà Trưng, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.0",
    "distance": "1.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78061,
    "lng": 106.70111,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-40",
    "name": "Tomatito Saigon",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "171 Calmette, Quận 1, TP. HCM",
    "price": ">1tr",
    "rating": "4.1",
    "distance": "2.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76725,
    "lng": 106.69954,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-41",
    "name": "Binloship",
    "category": "Hotpot",
    "district": "Quận 1",
    "address": "37/32 Trần Đình Xu, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.2",
    "distance": "2.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76012,
    "lng": 106.68987,
    "description": "Địa điểm ẩm thực Hotpot hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-42",
    "name": "Shogun 2AM",
    "category": "Grill",
    "district": "Quận 1",
    "address": "212 Đề Thám, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.3",
    "distance": "2.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76642,
    "lng": 106.68956,
    "description": "Địa điểm ẩm thực Grill hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-43",
    "name": "15 grams Homemade kitchen",
    "category": "Món Âu",
    "district": "Quận 1",
    "address": "214/19/24 Nguyễn Văn Nguyễn, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.4",
    "distance": "2.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7756,
    "lng": 106.702,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-44",
    "name": "Ichibanken Ramen",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8a1 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.5",
    "distance": "2.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77722,
    "lng": 106.70474,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-45",
    "name": "Gyumaru",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8/3 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.6",
    "distance": "2.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77662,
    "lng": 106.70414,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-46",
    "name": "Sanuki Shokudo",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8c2 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "2.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77948,
    "lng": 106.70556,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-47",
    "name": "Matsuki Izakaya",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "18 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "2.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77768,
    "lng": 106.70526,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-48",
    "name": "Lẩu bò Triều Châu Wanghenhiu",
    "category": "Hotpot",
    "district": "Quận 1",
    "address": "45 Tôn Thất Thiệp, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "2.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77261,
    "lng": 106.70333,
    "description": "Địa điểm ẩm thực Hotpot hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-49",
    "name": "Kyobashi",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "8a/H3 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "0.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77918,
    "lng": 106.70466,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-50",
    "name": "Gác Nhỏ Izakaya",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "1 Nguyễn Trung Trực, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "0.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77281,
    "lng": 106.70472,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-51",
    "name": "Yakiniku Like",
    "category": "Grill",
    "district": "Quận 1",
    "address": "B3, Vạn Hạnh Mall, Quận 1, TP. HCM",
    "price": "<500k",
    "rating": "4.2",
    "distance": "0.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7788,
    "lng": 106.7004,
    "description": "Địa điểm ẩm thực Grill hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-52",
    "name": "Pazzi",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "7a Nguyễn Thành Ý, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "0.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7788,
    "lng": 106.698,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-53",
    "name": "The Cory",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "Tk10/7 Hẻm Bến Chương Dương, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "0.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7748,
    "lng": 106.6996,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-54",
    "name": "Day By Day Kitchen and Bar",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "4 Phạm Ngũ Lão, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "0.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7764,
    "lng": 106.6996,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-55",
    "name": "Khải Phát Mì Gia",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "83 Yersin, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.6",
    "distance": "1.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7748,
    "lng": 106.7028,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-56",
    "name": "Chef Thiện Bistro",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "158 Pasteur, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "1.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78154,
    "lng": 106.69512,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-57",
    "name": "Bếp Ông Cậu",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "4E Võ Thị Sáu, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "1.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7893,
    "lng": 106.68801,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-58",
    "name": "Amano Pizza",
    "category": "Pizza",
    "district": "Quận 1",
    "address": "200/25 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "1.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77692,
    "lng": 106.70384,
    "description": "Địa điểm ẩm thực Pizza hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-59",
    "name": "Cơm Gà Xối Mỡ",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "31 Lý Tự Trọng, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "1.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7773,
    "lng": 106.70084,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-60",
    "name": "Cơm Gà Xối Mỡ Su Su",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "117/1D Cống Quỳnh, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "1.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76666,
    "lng": 106.69082,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-61",
    "name": "Dogalbi",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "31E Lý Tự Trọng, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "1.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7776,
    "lng": 106.70114,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-62",
    "name": "Ichifuji Udon",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8a/1b1 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "1.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77858,
    "lng": 106.70556,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-63",
    "name": "Ramen Shinsen",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "15/1 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "1.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77782,
    "lng": 106.70444,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-64",
    "name": "Mister Waffle",
    "category": "Bánh",
    "district": "Quận 1",
    "address": "72 Hàm Nghi, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "1.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.7764,
    "lng": 106.7004,
    "description": "Địa điểm ẩm thực Bánh hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-65",
    "name": "Yukichi Ramen",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "8a/2b1 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.6",
    "distance": "2.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77918,
    "lng": 106.70586,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-66",
    "name": "Hanam BBQ",
    "category": "Grill",
    "district": "Quận 1",
    "address": "120 bis Trần Hưng Đạo, Quận 1, TP. HCM",
    "price": ">1tr",
    "rating": "4.7",
    "distance": "2.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75609,
    "lng": 106.68523,
    "description": "Địa điểm ẩm thực Grill hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-67",
    "name": "Okonomiyaki",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "15B11 Lê Thánh Tôn, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.8",
    "distance": "2.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77692,
    "lng": 106.70504,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-68",
    "name": "Quán Bấc",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "36/3 Lê Lợi, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "2.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77376,
    "lng": 106.69527,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-69",
    "name": "Mangetsu",
    "category": "Món Nhật",
    "district": "Quận 1",
    "address": "27 Thái Văn Lung, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "2.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77768,
    "lng": 106.70526,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-70",
    "name": "Mà Má Mìn",
    "category": "Món Trung",
    "district": "Quận 1",
    "address": "150/26 Nguyễn Trãi, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.1",
    "distance": "2.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.76436,
    "lng": 106.69054,
    "description": "Địa điểm ẩm thực Món Trung hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-71",
    "name": "Phở SOL",
    "category": "Món Việt",
    "district": "Quận 1",
    "address": "32 Phạm Hồng Thái, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "2.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7788,
    "lng": 106.7028,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-72",
    "name": "Thung Lũng Sóc",
    "category": "Món Hàn",
    "district": "Quận 1",
    "address": "190 Nguyễn Trãi, Quận 1, TP. HCM",
    "price": "500k-800k",
    "rating": "4.3",
    "distance": "2.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.76436,
    "lng": 106.69114,
    "description": "Địa điểm ẩm thực Món Hàn hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-73",
    "name": "Pin Wei - Bánh cuốn Singapore",
    "category": "Khác",
    "district": "Quận 1",
    "address": "14 Phan Bội Châu, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "2.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77258,
    "lng": 106.69829,
    "description": "Địa điểm ẩm thực Khác hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-74",
    "name": "RingRing",
    "category": "Khác",
    "district": "Quận 1",
    "address": "233/28 Nguyễn Trãi, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.5",
    "distance": "0.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76586,
    "lng": 106.69054,
    "description": "gelato"
  },
  {
    "id": "place-mi-75",
    "name": "POKNAM",
    "category": "Món Hàn",
    "district": "Quận 1",
    "address": "36 Nguyễn Văn Cừ, Quận 1, TP. HCM",
    "price": "200k-300k",
    "rating": "4.6",
    "distance": "0.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7788,
    "lng": 106.698,
    "description": "Địa điểm ẩm thực Món Hàn hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-76",
    "name": "Kampong Chicken House",
    "category": "Món Trung",
    "district": "Quận 1",
    "address": "53 Hồ Tùng Mậu, Quận 1, TP. HCM",
    "price": "<200k",
    "rating": "4.7",
    "distance": "0.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77221,
    "lng": 106.70355,
    "description": "Địa điểm ẩm thực Món Trung hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-77",
    "name": "Bún thịt nướng chợ Bàn Cờ",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "664/14 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "0.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7808,
    "lng": 106.68622,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-78",
    "name": "Bánh mì thịt nướng",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "53 Cao Thắng, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "0.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77655,
    "lng": 106.68663,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-79",
    "name": "Bột chiên chú Thái",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "184/6 Lý Chính Thắng, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "0.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7835,
    "lng": 106.682,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-80",
    "name": "Bánh flan",
    "category": "Ăn vặt",
    "district": "Quận 3",
    "address": "889 Hoàng Sa, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "1.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78984,
    "lng": 106.68384,
    "description": "Địa điểm ẩm thực Ăn vặt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-81",
    "name": "Chamie Steak",
    "category": "Món Âu",
    "district": "Quận 3",
    "address": "58/3 Phạm Ngọc Thạch, Quận 3, TP. HCM",
    "price": "<200k",
    "rating": "4.2",
    "distance": "1.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78407,
    "lng": 106.67983,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-82",
    "name": "Society",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "39C Phạm Ngọc Thạch, Quận 3, TP. HCM",
    "price": "<200k",
    "rating": "4.3",
    "distance": "1.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78467,
    "lng": 106.68013,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-83",
    "name": "Phở gà Kỳ Đồng",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "14/5 Kỳ Đồng, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "1.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78046,
    "lng": 106.68826,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-84",
    "name": "Cừu Non",
    "category": "Món Âu",
    "district": "Quận 3",
    "address": "395 Hoàng Sa, Quận 3, TP. HCM",
    "price": "200k-300k",
    "rating": "4.5",
    "distance": "1.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.79014,
    "lng": 106.68414,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-85",
    "name": "Aoya Ramen",
    "category": "Món Nhật",
    "district": "Quận 3",
    "address": "30 Ngô Thời Nhiệm, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.6",
    "distance": "1.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7827,
    "lng": 106.686,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-86",
    "name": "Blue Bistro",
    "category": "Món Âu",
    "district": "Quận 3",
    "address": "123e4 Trần Quốc Thảo, Quận 3, TP. HCM",
    "price": "<500k",
    "rating": "4.7",
    "distance": "1.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78711,
    "lng": 106.68828,
    "description": "bàn ít nên book page"
  },
  {
    "id": "place-mi-87",
    "name": "Fries Vietnam",
    "category": "Ăn nhanh",
    "district": "Quận 3",
    "address": "4 Rạch Bùng Binh, Quận 3, TP. HCM",
    "price": "<200k",
    "rating": "4.8",
    "distance": "1.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77929,
    "lng": 106.68094,
    "description": "Địa điểm ẩm thực Ăn nhanh hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-88",
    "name": "La Maison",
    "category": "Món Âu",
    "district": "Quận 3",
    "address": "201b Nam Kỳ Khởi Nghĩa, Quận 3, TP. HCM",
    "price": "200k-300k",
    "rating": "4.9",
    "distance": "1.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78858,
    "lng": 106.67991,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-89",
    "name": "Indigo",
    "category": "Món Nhật",
    "district": "Quận 3",
    "address": "232 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "price": "200k-300k",
    "rating": "4.0",
    "distance": "1.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7808,
    "lng": 106.68682,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-90",
    "name": "Cơm tấm Hùng",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "194/2 Võ Văn Tần, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "2.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7778,
    "lng": 106.68689,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-91",
    "name": "Gà Và Nếp",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "hẻm 49 Võ Văn Tần, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "2.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7769,
    "lng": 106.68659,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-92",
    "name": "Bột chiên Đạt Thành",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "277 Võ Văn Tần, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "2.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7775,
    "lng": 106.68659,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-93",
    "name": "Bún bò Huế mỡ nổi Cô Như",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "274/29 Võ Văn Tần, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "2.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7775,
    "lng": 106.68659,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-94",
    "name": "a thăng eatery",
    "category": "Món Âu",
    "district": "Quận 3",
    "address": "47/9 Trần Quốc Toản, Quận 3, TP. HCM",
    "price": "200k-300k",
    "rating": "4.5",
    "distance": "2.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.79109,
    "lng": 106.68754,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-95",
    "name": "hygge eatery",
    "category": "Món Âu",
    "district": "Quận 3",
    "address": "69/3 Cao Thắng, Quận 3, TP. HCM",
    "price": "200k-300k",
    "rating": "4.6",
    "distance": "2.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77745,
    "lng": 106.68753,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-96",
    "name": "Tiệm Mì Mi An",
    "category": "Món Trung",
    "district": "Quận 3",
    "address": "2/24 Cao Thắng, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "2.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77565,
    "lng": 106.68753,
    "description": "Địa điểm ẩm thực Món Trung hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-97",
    "name": "Serotonin Fastfood Club",
    "category": "Ăn nhanh",
    "district": "Quận 3",
    "address": "444/2/1 CMT8, Quận 3, TP. HCM",
    "price": "<200k",
    "rating": "4.8",
    "distance": "2.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77749,
    "lng": 106.70027,
    "description": "Địa điểm ẩm thực Ăn nhanh hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-98",
    "name": "The Donut Club",
    "category": "Ăn vặt",
    "district": "Quận 3",
    "address": "62 Phạm Ngọc Thạch, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "2.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78287,
    "lng": 106.68043,
    "description": "Địa điểm ẩm thực Ăn vặt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-99",
    "name": "Bánh ướt Ban Mê",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "45b Cao Thắng, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "0.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77655,
    "lng": 106.68663,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-100",
    "name": "Sevensens",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "47/3 Phạm Ngọc Thạch, Quận 3, TP. HCM",
    "price": "200k-300k",
    "rating": "4.1",
    "distance": "0.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78467,
    "lng": 106.68013,
    "description": "bar"
  },
  {
    "id": "place-mi-101",
    "name": "ELSOL Meat&Wine",
    "category": "Món Âu",
    "district": "Quận 3",
    "address": "140/2 Võ Thị Sáu, Quận 3, TP. HCM",
    "price": "200k-300k",
    "rating": "4.2",
    "distance": "0.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7902,
    "lng": 106.68891,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-102",
    "name": "Ba Hí",
    "category": "Ăn nhanh",
    "district": "Quận 3",
    "address": "472 Cách mạng tháng 8, Quận 3, TP. HCM",
    "price": "<200k",
    "rating": "4.3",
    "distance": "0.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77659,
    "lng": 106.69967,
    "description": "Địa điểm ẩm thực Ăn nhanh hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-103",
    "name": "Sip999 Kitchen & Bar",
    "category": "Món Âu",
    "district": "Quận 3",
    "address": "100 Trần Quốc Toản, Quận 3, TP. HCM",
    "price": "<500k",
    "rating": "4.4",
    "distance": "0.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.79109,
    "lng": 106.68784,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-104",
    "name": "Phở chua Thành",
    "category": "Món Việt",
    "district": "Quận 3",
    "address": "242/101 Nguyễn Thiện Thuật, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "0.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76821,
    "lng": 106.67952,
    "description": "hỏi a chủ cách ăn"
  },
  {
    "id": "place-mi-105",
    "name": "Beefsteak 100g",
    "category": "Món Âu",
    "district": "Quận 3",
    "address": "2/108 Nguyễn Gia Thiều, Quận 3, TP. HCM",
    "price": "<100k",
    "rating": "4.6",
    "distance": "1.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7835,
    "lng": 106.686,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 3."
  },
  {
    "id": "place-mi-106",
    "name": "Cơm tấm Hồng Calmette",
    "category": "Món Việt",
    "district": "Quận 4",
    "address": "134 Hoàng Diệu, Quận 4, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "1.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75977,
    "lng": 106.70215,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 4."
  },
  {
    "id": "place-mi-107",
    "name": "Phá lấu bò cô Nga",
    "category": "Món Việt",
    "district": "Quận 4",
    "address": "243/37A Tôn Đản, Quận 4, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "1.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76065,
    "lng": 106.70177,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 4."
  },
  {
    "id": "place-mi-108",
    "name": "Flan Ngọc Nga",
    "category": "Ăn vặt",
    "district": "Quận 4",
    "address": "63 đường số 20, Quận 4, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "1.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7602,
    "lng": 106.7036,
    "description": "Địa điểm ẩm thực Ăn vặt hấp dẫn tại Quận 4."
  },
  {
    "id": "place-mi-109",
    "name": "Bún mắm Nga",
    "category": "Món Việt",
    "district": "Quận 4",
    "address": "B122 Nguyễn Thần Hiến, Quận 4, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "1.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.757,
    "lng": 106.7036,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 4."
  },
  {
    "id": "place-mi-110",
    "name": "Mì khô xá xíu Gia Phúc",
    "category": "Món Trung",
    "district": "Quận 4",
    "address": "198B Xóm Chiếu, Quận 4, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "1.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.75641,
    "lng": 106.70692,
    "description": "Địa điểm ẩm thực Món Trung hấp dẫn tại Quận 4."
  },
  {
    "id": "place-mi-111",
    "name": "PLANET B42",
    "category": "Ăn nhanh",
    "district": "Quận 4",
    "address": "288 Khánh Hội, Quận 4, TP. HCM",
    "price": "200k-300k",
    "rating": "4.2",
    "distance": "1.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75643,
    "lng": 106.70462,
    "description": "Địa điểm ẩm thực Ăn nhanh hấp dẫn tại Quận 4."
  },
  {
    "id": "place-mi-112",
    "name": "Béo À Nghen",
    "category": "Hotpot",
    "district": "Quận 4",
    "address": "105c Bến Vân Đồn, Quận 4, TP. HCM",
    "price": "<200k",
    "rating": "4.3",
    "distance": "1.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75702,
    "lng": 106.70384,
    "description": "Địa điểm ẩm thực Hotpot hấp dẫn tại Quận 4."
  },
  {
    "id": "place-mi-113",
    "name": "Ryukyu jain",
    "category": "Món Nhật",
    "district": "Quận 4",
    "address": "262 lô J đường Hoàng Diệu, Quận 4, TP. HCM",
    "price": "200k-300k",
    "rating": "4.4",
    "distance": "1.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.76007,
    "lng": 106.70215,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 4."
  },
  {
    "id": "place-mi-114",
    "name": "Thế Giới Bò",
    "category": "Món Việt",
    "district": "Quận 4",
    "address": "6 Vĩnh Khánh, Quận 4, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "1.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75995,
    "lng": 106.70601,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 4."
  },
  {
    "id": "place-mi-115",
    "name": "Speit MAC AND CHEESE",
    "category": "Ăn nhanh",
    "district": "Quận 5",
    "address": "349/16 Nguyễn Trãi, Quận 5, TP. HCM",
    "price": "<200k",
    "rating": "4.6",
    "distance": "2.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76616,
    "lng": 106.69084,
    "description": "Địa điểm ẩm thực Ăn nhanh hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-116",
    "name": "Sữa đậu nành bạc hà Cẩm Ký",
    "category": "Ăn vặt",
    "district": "Quận 5",
    "address": "712 Nguyễn Trãi, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "2.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76616,
    "lng": 106.69084,
    "description": "Địa điểm ẩm thực Ăn vặt hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-117",
    "name": "Kem cá",
    "category": "Ăn vặt",
    "district": "Quận 5",
    "address": "9A Nguyễn Án, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "2.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7532,
    "lng": 106.6618,
    "description": "Địa điểm ẩm thực Ăn vặt hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-118",
    "name": "Lẩu bò A Ngầu",
    "category": "Hotpot",
    "district": "Quận 5",
    "address": "366 Trần Phú, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "2.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75731,
    "lng": 106.67054,
    "description": "Địa điểm ẩm thực Hotpot hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-119",
    "name": "Phở Lệ",
    "category": "Món Việt",
    "district": "Quận 5",
    "address": "415 Nguyễn Trãi, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "2.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76526,
    "lng": 106.68994,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-120",
    "name": "Papa Lee’s Noodle Kitchen",
    "category": "Món Trung",
    "district": "Quận 5",
    "address": "271 Trần Phú, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "2.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.75641,
    "lng": 106.67024,
    "description": "Địa điểm ẩm thực Món Trung hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-121",
    "name": "Bánh canh cua bà Ba",
    "category": "Món Việt",
    "district": "Quận 5",
    "address": "84/6 Nguyễn Biểu, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "2.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75482,
    "lng": 106.67917,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-122",
    "name": "Hủ Tiếu - Hủ Mì",
    "category": "Món Trung",
    "district": "Quận 5",
    "address": "012 lô A chung cư Xóm Cải, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "2.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7508,
    "lng": 106.665,
    "description": "Địa điểm ẩm thực Món Trung hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-123",
    "name": "Cơm gà Thanh",
    "category": "Món Việt",
    "district": "Quận 5",
    "address": "214/1 Nguyễn Trãi, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "2.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76556,
    "lng": 106.69054,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-124",
    "name": "Mì Bò Duy",
    "category": "Món Trung",
    "district": "Quận 5",
    "address": "684/24 Trần Hưng Đạo, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "0.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.75549,
    "lng": 106.68523,
    "description": "Địa điểm ẩm thực Món Trung hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-125",
    "name": "Pizza 777",
    "category": "Món Âu",
    "district": "Quận 5",
    "address": "4 Ngô Quyền, Quận 5, TP. HCM",
    "price": "200k-300k",
    "rating": "4.6",
    "distance": "0.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75274,
    "lng": 106.65974,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-126",
    "name": "Mì vịt tiềm sủi cảo Sâm Ký",
    "category": "Món Trung",
    "district": "Quận 5",
    "address": "409/12 Nguyễn Trãi, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "0.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.76436,
    "lng": 106.69054,
    "description": "Địa điểm ẩm thực Món Trung hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-127",
    "name": "Bánh cuốn Quảng Đông Hạnh Phúc Ký",
    "category": "Món Trung",
    "district": "Quận 5",
    "address": "699 Nguyễn Trãi, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "0.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.76526,
    "lng": 106.69024,
    "description": "Địa điểm ẩm thực Món Trung hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-128",
    "name": "Happy Place",
    "category": "Món Trung",
    "district": "Quận 5",
    "address": "143 Cao Đạt, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "0.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7508,
    "lng": 106.6634,
    "description": "mì chay"
  },
  {
    "id": "place-mi-129",
    "name": "Osaka",
    "category": "Món Nhật",
    "district": "Quận 5",
    "address": "53 Nguyễn Thời Trung, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "0.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7564,
    "lng": 106.6658,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-130",
    "name": "Bấu sì giùn",
    "category": "Món Việt",
    "district": "Quận 5",
    "address": "245 Trần Bình Trọng, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "1.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7532,
    "lng": 106.665,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 5."
  },
  {
    "id": "place-mi-131",
    "name": "Cơm tấm Ma",
    "category": "Món Việt",
    "district": "Quận 6",
    "address": "178 Hậu Giang, Quận 6, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "1.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75016,
    "lng": 106.65733,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 6."
  },
  {
    "id": "place-mi-132",
    "name": "Anh Minh quán",
    "category": "Món Việt",
    "district": "Quận 6",
    "address": "01R đường 10, Quận 6, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "1.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7465,
    "lng": 106.637,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 6."
  },
  {
    "id": "place-mi-133",
    "name": "Neko Izakaya",
    "category": "Món Việt",
    "district": "Quận 6",
    "address": "291 Bình Tiên, Quận 6, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "1.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.74752,
    "lng": 106.64542,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 6."
  },
  {
    "id": "place-mi-134",
    "name": "Margherí Pizza",
    "category": "Món Âu",
    "district": "Quận 7",
    "address": "Hưng Phước 4/60 Khu P.Mỹ Hưng, Quận 7, TP. HCM",
    "price": "<500k",
    "rating": "4.5",
    "distance": "1.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.734,
    "lng": 106.72,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 7."
  },
  {
    "id": "place-mi-135",
    "name": "Chicken Talk",
    "category": "Món Hàn",
    "district": "Quận 7",
    "address": "502 Lê Văn Lương, Quận 7, TP. HCM",
    "price": "200k-300k",
    "rating": "4.6",
    "distance": "1.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7323,
    "lng": 106.69846,
    "description": "Địa điểm ẩm thực Món Hàn hấp dẫn tại Quận 7."
  },
  {
    "id": "place-mi-136",
    "name": "Mì trộn 30k",
    "category": "Món Việt",
    "district": "Quận 8",
    "address": "169 Âu Dương Lân, Quận 8, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "1.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.74422,
    "lng": 106.67812,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 8."
  },
  {
    "id": "place-mi-137",
    "name": "Hiccup",
    "category": "Món Việt",
    "district": "Quận 8",
    "address": "36 Phong Phú, Quận 8, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "1.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.74385,
    "lng": 106.67215,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 8."
  },
  {
    "id": "place-mi-138",
    "name": "Hủ Tíu Mì Sủi Cảo Phong Phú",
    "category": "Món Việt",
    "district": "Quận 8",
    "address": "24 Phong Phú, Quận 8, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "1.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.74385,
    "lng": 106.67215,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 8."
  },
  {
    "id": "place-mi-139",
    "name": "Osan Food",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "207/37a 3 Tháng 2, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "1.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77093,
    "lng": 106.67305,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-140",
    "name": "Ramen Kimura",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "465 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "2.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77154,
    "lng": 106.67956,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-141",
    "name": "Ốc đêm chú Sinh",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "105-107 Lý Thái Tổ, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "2.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76902,
    "lng": 106.67245,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-142",
    "name": "Xôi Ngọc",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "509 CMT8, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "2.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77689,
    "lng": 106.70027,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-143",
    "name": "Bún đậu Hẻm Đậu",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "153 Tô Hiến Thành, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "2.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77926,
    "lng": 106.67018,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-144",
    "name": "Bún đậu Hảo Quán",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "193/16 Bà Hạt, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "2.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76158,
    "lng": 106.69085,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-145",
    "name": "Quán 79 Nem nướng",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "626 Bà Hạt, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.6",
    "distance": "2.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76188,
    "lng": 106.69085,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-146",
    "name": "Aussie Meat",
    "category": "Món Âu",
    "district": "Quận 10",
    "address": "595/29A3 CMT8, Quận 10, TP. HCM",
    "price": "<200k",
    "rating": "4.7",
    "distance": "2.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77629,
    "lng": 106.69937,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-147",
    "name": "Bún Thái Gàu Vàng",
    "category": "Khác",
    "district": "Quận 10",
    "address": "456 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "2.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77094,
    "lng": 106.67926,
    "description": "Địa điểm ẩm thực Khác hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-148",
    "name": "Xôi khuya người Hoa",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "1143 đường 3/2, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "2.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77153,
    "lng": 106.67275,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-149",
    "name": "Mala Panda",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "764 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "0.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77004,
    "lng": 106.67956,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-150",
    "name": "Bún đậu Phố",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "186 đường 3/2, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "0.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77123,
    "lng": 106.67215,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-151",
    "name": "Xôi Ghẹ 192",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "386 Bà Hạt, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "0.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76188,
    "lng": 106.69145,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-152",
    "name": "Há cảo Ngọc Lan",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "500 Vĩnh Viễn, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "0.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76152,
    "lng": 106.66812,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-153",
    "name": "All in Pao",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "490/1 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "0.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76055,
    "lng": 106.66994,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-154",
    "name": "Mì Thơm",
    "category": "Món Nhật",
    "district": "Quận 10",
    "address": "381 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "price": "<200k",
    "rating": "4.5",
    "distance": "0.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77004,
    "lng": 106.67956,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-155",
    "name": "Bún chả Một góc Hà Nội",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "243/1 Tô Hiến Thành, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.6",
    "distance": "1.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77926,
    "lng": 106.67018,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-156",
    "name": "Cơm tấm Tài",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "476 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "1.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76115,
    "lng": 106.67054,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-157",
    "name": "Bún Bali",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "341 Nguyễn Thượng Hiền, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "1.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77812,
    "lng": 106.68482,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-158",
    "name": "Cơm niêu Hà Đô",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "06 đường số 4 Hado Centrosa, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "1.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7721,
    "lng": 106.6703,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-159",
    "name": "Thái Ship",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "số 3, lô K Sư Vạn Hạnh, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.0",
    "distance": "1.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77004,
    "lng": 106.68016,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-160",
    "name": "Sủi cảo Huy Ngân",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "538 Lý Thái Tổ, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.1",
    "distance": "1.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76902,
    "lng": 106.67245,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-161",
    "name": "Sườn nướng Cẩm Phong",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "145 Vĩnh Viễn, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "1.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76272,
    "lng": 106.66842,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-162",
    "name": "Bún bò chú Vạn",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "hẻm 981 CMT8, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "1.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77659,
    "lng": 106.69967,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-163",
    "name": "WOW Yakiniku",
    "category": "Grill",
    "district": "Quận 10",
    "address": "Vạn Hạnh mall, Quận 10, TP. HCM",
    "price": "200k-300k",
    "rating": "4.4",
    "distance": "1.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7737,
    "lng": 106.6695,
    "description": "Địa điểm ẩm thực Grill hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-164",
    "name": "Yoshinoya",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "285A-285B CMT8, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "1.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77719,
    "lng": 106.70057,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-165",
    "name": "Bánh mì chảo Xuân Lạc",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "172 Hòa Hưng, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.6",
    "distance": "2.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78124,
    "lng": 106.67215,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-166",
    "name": "The Rán",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "339 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "2.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.75995,
    "lng": 106.67114,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-167",
    "name": "Thuận Ký",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "199 Nguyễn Lâm, Quận 10, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "2.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.76022,
    "lng": 106.66572,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-168",
    "name": "Sushi Taco",
    "category": "Khác",
    "district": "Quận 10",
    "address": "642 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "price": "<200k",
    "rating": "4.9",
    "distance": "2.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77184,
    "lng": 106.67986,
    "description": "Địa điểm ẩm thực Khác hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-169",
    "name": "Ẩm Thực Buôn Mê",
    "category": "Món Việt",
    "district": "Quận 10",
    "address": "Tòa nhà Viettel, CMT8, Quận 10, TP. HCM",
    "price": "200k-300k",
    "rating": "4.0",
    "distance": "2.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.77599,
    "lng": 106.70027,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-170",
    "name": "Sushi Cô Chủ Nhỏ",
    "category": "Món Nhật",
    "district": "Quận 10",
    "address": "57 Thành Thái, Quận 10, TP. HCM",
    "price": "200k-300k",
    "rating": "4.1",
    "distance": "2.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7724,
    "lng": 106.6615,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-171",
    "name": "Crimson's",
    "category": "Món Âu",
    "district": "Quận 10",
    "address": "528/10 Điện Biên Phủ, Quận 10, TP. HCM",
    "price": "<200k",
    "rating": "4.2",
    "distance": "2.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.78542,
    "lng": 106.69124,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Quận 10."
  },
  {
    "id": "place-mi-172",
    "name": "Cường Ký Mì Gia",
    "category": "Món Trung",
    "district": "Quận 11",
    "address": "157 Tô Hiến Thành, Quận 11, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "2.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.77956,
    "lng": 106.67048,
    "description": "siêu nhiều chỗ"
  },
  {
    "id": "place-mi-173",
    "name": "The Ox Shack",
    "category": "Ăn nhanh",
    "district": "Phú Nhuận",
    "address": "Phú Nhuận, TP. HCM",
    "price": "<200k",
    "rating": "4.4",
    "distance": "2.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.7984,
    "lng": 106.6795,
    "description": "Địa điểm ẩm thực Ăn nhanh hấp dẫn tại Phú Nhuận."
  },
  {
    "id": "place-mi-174",
    "name": "Fuji Kitchen",
    "category": "Món Nhật",
    "district": "Phú Nhuận",
    "address": "Phú Nhuận, TP. HCM",
    "price": "<200k",
    "rating": "4.5",
    "distance": "0.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.8016,
    "lng": 106.6819,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Phú Nhuận."
  },
  {
    "id": "place-mi-175",
    "name": "Fast Sushi",
    "category": "Món Nhật",
    "district": "Phú Nhuận",
    "address": "12/6 Cù Lao, Phú Nhuận, TP. HCM",
    "price": "200k-300k",
    "rating": "4.6",
    "distance": "0.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.7942,
    "lng": 106.69859,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Phú Nhuận."
  },
  {
    "id": "place-mi-176",
    "name": "Sarangheo",
    "category": "Grill",
    "district": "Gò Vấp",
    "address": "18C Phan Văn Trị, Gò Vấp, TP. HCM",
    "price": "600k-800k",
    "rating": "4.7",
    "distance": "0.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.82602,
    "lng": 106.68542,
    "description": "Địa điểm ẩm thực Grill hấp dẫn tại Gò Vấp."
  },
  {
    "id": "place-mi-177",
    "name": "Bún đậu Ba Anh Em",
    "category": "Món Việt",
    "district": "Gò Vấp",
    "address": "263 Lê Văn Thọ, Gò Vấp, TP. HCM",
    "price": "<200k",
    "rating": "4.8",
    "distance": "0.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.84512,
    "lng": 106.66185,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Gò Vấp."
  },
  {
    "id": "place-mi-178",
    "name": "OH! Chicken",
    "category": "Món Hàn",
    "district": "Bình Thạnh",
    "address": "115 Nguyễn Hữu Cảnh, Bình Thạnh, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "0.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.789,
    "lng": 106.7118,
    "description": "Địa điểm ẩm thực Món Hàn hấp dẫn tại Bình Thạnh."
  },
  {
    "id": "place-mi-179",
    "name": "Panda BBQ",
    "category": "Grill",
    "district": "Tân Bình",
    "address": "63 Phạm Văn Hai, Tân Bình, TP. HCM",
    "price": "200k-300k",
    "rating": "4.0",
    "distance": "0.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.79512,
    "lng": 106.65752,
    "description": "Địa điểm ẩm thực Grill hấp dẫn tại Tân Bình."
  },
  {
    "id": "place-mi-180",
    "name": "Chick and Cheese",
    "category": "Món Hàn",
    "district": "Tân Bình",
    "address": "78 Âu Cơ, Tân Bình, TP. HCM",
    "price": "200k-300k",
    "rating": "4.1",
    "distance": "1.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.78154,
    "lng": 106.64512,
    "description": "Địa điểm ẩm thực Món Hàn hấp dẫn tại Tân Bình."
  },
  {
    "id": "place-mi-181",
    "name": "Apero Bistro & Bar",
    "category": "Món Âu",
    "district": "Thủ Đức",
    "address": "45 Nguyễn Duy Hiệu, Thủ Đức, TP. HCM",
    "price": "200k-300k",
    "rating": "4.2",
    "distance": "1.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.80282,
    "lng": 106.72752,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-182",
    "name": "CHIIK",
    "category": "Món Âu",
    "district": "Thủ Đức",
    "address": "Thủ Đức, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "1.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.8494,
    "lng": 106.7741,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-183",
    "name": "Yukimi Dining",
    "category": "Món Nhật",
    "district": "Thủ Đức",
    "address": "71A Quốc Hương, Thủ Đức, TP. HCM",
    "price": "600k-800k",
    "rating": "4.4",
    "distance": "1.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.80472,
    "lng": 106.7221,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-184",
    "name": "Ăn cơm chưa?",
    "category": "Món Việt",
    "district": "Thủ Đức",
    "address": "1 Lê Thước, Thủ Đức, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "1.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.851,
    "lng": 106.7701,
    "description": "Địa điểm ẩm thực Món Việt hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-185",
    "name": "Cutlet Spring",
    "category": "Món Hàn",
    "district": "Thủ Đức",
    "address": "6A đường số 9, Thủ Đức, TP. HCM",
    "price": "200k-300k",
    "rating": "4.6",
    "distance": "1.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.8494,
    "lng": 106.7741,
    "description": "Địa điểm ẩm thực Món Hàn hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-186",
    "name": "Haeduri",
    "category": "Món Hàn",
    "district": "Thủ Đức",
    "address": "10 Lê Thước, Thủ Đức, TP. HCM",
    "price": "200k-300k",
    "rating": "4.7",
    "distance": "1.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.8462,
    "lng": 106.7701,
    "description": "Địa điểm ẩm thực Món Hàn hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-187",
    "name": "365º Napoli Pizza",
    "category": "Món Âu",
    "district": "Thủ Đức",
    "address": "50 Ngô Quang Huy, Thủ Đức, TP. HCM",
    "price": "<500k",
    "rating": "4.8",
    "distance": "1.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "taco",
    "pin": "coral",
    "lat": 10.80185,
    "lng": 106.72282,
    "description": "Địa điểm ẩm thực Món Âu hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-188",
    "name": "Dotori Dining",
    "category": "Món Nhật",
    "district": "Thủ Đức",
    "address": "28 Thảo Điền, Thủ Đức, TP. HCM",
    "price": "200k-300k",
    "rating": "4.9",
    "distance": "1.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "bun",
    "pin": "red",
    "lat": 10.80223,
    "lng": 106.71917,
    "description": "Địa điểm ẩm thực Món Nhật hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-189",
    "name": "Phủ Phê",
    "category": "Cafe",
    "district": "Quận 1",
    "address": "203/1 Nguyễn Văn Thủ, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "1.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.78512,
    "lng": 106.69752,
    "description": "Địa điểm Cafe hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-190",
    "name": "Things livingroom",
    "category": "Cafe",
    "district": "Quận 1",
    "address": "chung cư 14 Tôn Thất Đạm, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "1.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.77033,
    "lng": 106.70305,
    "description": "Địa điểm Cafe hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-191",
    "name": "Midori",
    "category": "Cafe",
    "district": "Quận 1",
    "address": "230/19 Pasteur, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "1.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.78034,
    "lng": 106.69512,
    "description": "Địa điểm Cafe hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-192",
    "name": "Soo Kafe",
    "category": "Cafe",
    "district": "Quận 1",
    "address": "35 Phan Chu Trinh, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "1.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.77335,
    "lng": 106.69842,
    "description": "Địa điểm Cafe hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-193",
    "name": "Kafka",
    "category": "Cafe",
    "district": "Quận 1",
    "address": "187/15 Điện Biên Phủ, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "1.9 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.78572,
    "lng": 106.69064,
    "description": "Địa điểm Cafe hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-194",
    "name": "Ellie",
    "category": "Cafe",
    "district": "Quận 1",
    "address": "14 Đặng Dung, Quận 1, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "2.0 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.79202,
    "lng": 106.69184,
    "description": "Địa điểm Cafe hấp dẫn tại Quận 1."
  },
  {
    "id": "place-mi-195",
    "name": "Sole Saigon Cafe",
    "category": "Cafe",
    "district": "Quận 5",
    "address": "8 Tiểu La, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.6",
    "distance": "2.1 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.75602,
    "lng": 106.66275,
    "description": "Khá rộng"
  },
  {
    "id": "place-mi-196",
    "name": "THREE O’CLOCK",
    "category": "Cafe",
    "district": "Quận 5",
    "address": "775 Trần Hưng Đạo, Quận 5, TP. HCM",
    "price": "<100k",
    "rating": "4.7",
    "distance": "2.2 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.75549,
    "lng": 106.68583,
    "description": "Siêuuu rộng + mở 24/7"
  },
  {
    "id": "place-mi-197",
    "name": "Chiu Jardin",
    "category": "Cafe",
    "district": "Bình Thạnh",
    "address": "127b/39 Lê Văn Duyệt, Bình Thạnh, TP. HCM",
    "price": "<100k",
    "rating": "4.8",
    "distance": "2.3 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.7954,
    "lng": 106.69919,
    "description": "Địa điểm Cafe hấp dẫn tại Bình Thạnh."
  },
  {
    "id": "place-mi-198",
    "name": "Chạng Vang rooftop",
    "category": "Cafe",
    "district": "Thủ Đức",
    "address": "Thủ Đức, TP. HCM",
    "price": "<100k",
    "rating": "4.9",
    "distance": "2.4 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.8494,
    "lng": 106.7701,
    "description": "Địa điểm Cafe hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-199",
    "name": "Bluish",
    "category": "Cafe",
    "district": "Thủ Đức",
    "address": "15 Trúc Đường, Thủ Đức, TP. HCM",
    "price": "<100k",
    "rating": "4.2",
    "distance": "0.5 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.8486,
    "lng": 106.7749,
    "description": "Địa điểm Cafe hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-200",
    "name": "Trốn",
    "category": "Cafe",
    "district": "Thủ Đức",
    "address": "1 đường số 47, Thủ Đức, TP. HCM",
    "price": "<100k",
    "rating": "4.3",
    "distance": "0.6 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.8486,
    "lng": 106.7741,
    "description": "Địa điểm Cafe hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-201",
    "name": "Have a sip",
    "category": "Cafe",
    "district": "Thủ Đức",
    "address": "Hẻm 28 Thảo Điền, Thủ Đức, TP. HCM",
    "price": "<100k",
    "rating": "4.4",
    "distance": "0.7 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.80133,
    "lng": 106.71887,
    "description": "Địa điểm Cafe hấp dẫn tại Thủ Đức."
  },
  {
    "id": "place-mi-202",
    "name": "Bakes",
    "category": "Cafe",
    "district": "Thủ Đức",
    "address": "16 Thảo Điền, Thủ Đức, TP. HCM",
    "price": "<100k",
    "rating": "4.5",
    "distance": "0.8 km",
    "hours": "08:00 - 22:00",
    "closes": "22:00",
    "status": "open",
    "color": "cafe",
    "pin": "mint",
    "lat": 10.80163,
    "lng": 106.71857,
    "description": "Địa điểm Cafe hấp dẫn tại Thủ Đức."
  }
];
function getSavedStorageKey(user = state?.user) {
  if (user && user.id) return `eatwithme.saved.user_${user.id}`;
  return "eatwithme.saved.guest";
}

function getCustomPlacesKey(user = state?.user) {
  if (user && user.id) return `eatwithme.custom_places.user_${user.id}`;
  return "eatwithme.custom_places.guest";
}

const googleUserKey = "eatwithme.google_user.v1";
const googleClientIdKey = "eatwithme.google_client_id.v1";
const DEFAULT_GOOGLE_CLIENT_ID = "349760544060-qmj5okegmg2i47dvsfs0msgv5nug099p.apps.googleusercontent.com";
const locationStorageKey = "eatwithme.location.v1";

const initialUser = readStorage(googleUserKey, null);
let customPlaces = readStorage(getCustomPlacesKey(initialUser), []);
let places = [...customPlaces, ...defaultPlaces];

function refreshPlaces() {
  customPlaces = readStorage(getCustomPlacesKey(state?.user), []);
  places = [...customPlaces, ...defaultPlaces];
}

const initialSaved = defaultPlaces.map((p) => p.id);
const initialSavedData = readStorage(getSavedStorageKey(initialUser), null);

const state = {
  view: "explore", // "explore" | "saved"
  query: "",
  user: initialUser,
  saved: initialSavedData !== null ? initialSavedData : initialSaved,
  categoryFilter: "all",
  priceFilter: "all",
  openDropdown: null, // "category" | "price" | null
  modal: null,
  toastTimer: null,
  installAvailable: false,
  pendingPlaceDraft: null,
};

function saveLocalState() {
  saveStorage(getSavedStorageKey(state.user), state.saved);
  saveStorage(getCustomPlacesKey(state.user), customPlaces);
}

const DEFAULT_MAP_CENTER = [10.7769, 106.7009];
const MAP_MIN_ZOOM = 11;
const MAP_MAX_ZOOM = 17;
const MAP_DEFAULT_ZOOM = 13;
const MAP_LOCATE_ZOOM = 15;
const CITIES = {
  hanoi: { name: "Hà Nội", center: [21.0285, 105.8542], zoom: MAP_DEFAULT_ZOOM },
  hcm: { name: "TP. HCM", center: [10.7769, 106.7009], zoom: MAP_DEFAULT_ZOOM },
  danang: { name: "Đà Nẵng", center: [16.0544, 108.2022], zoom: MAP_DEFAULT_ZOOM },
};
const MAP_TILE_URL = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
const MAP_LABEL_TILE_URL = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png";
const MAP_TILE_SUBDOMAINS = ["a", "b", "c", "d"];
const MAP_TILE_ATTRIBUTION = "&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\" target=\"_blank\">CARTO</a>";

const FAST_LOCATION_OPTIONS = {
  enableHighAccuracy: false,
  timeout: 600,
  maximumAge: 10 * 60 * 1000,
};
const NATIVE_FAST_LOCATION_OPTIONS = {
  enableHighAccuracy: false,
  timeout: 500,
  maximumAge: 10 * 60 * 1000,
};
const PRECISE_LOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 8000,
  maximumAge: 15000,
};
const NATIVE_PRECISE_LOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 8000,
  maximumAge: 15000,
};
const STALE_THRESHOLD_MS = 10 * 60 * 1000;
const MAX_CACHE_AGE_MS = 24 * 60 * 60 * 1000;

const GEOCODE_API_URL = "https://photon.komoot.io/api/";
const NOMINATIM_SEARCH_URL = "https://nominatim.openstreetmap.org/search";
const NOMINATIM_REVERSE_URL = "https://nominatim.openstreetmap.org/reverse";

const mapState = {
  instance: null,
  userMarker: null,
  accuracyCircle: null,
  savedMarkers: new Map(),
  userPosition: readCachedLocation(),
  isPrecise: false,
  isRefining: false,
  tilesLoaded: false,
  tileCheckTimer: null,
  leafletPromise: null,
  locationPending: false,
  hasLocatedUser: false,
  isPickingLocation: false,
  lastGeocodeResults: [],
};

async function geocodeLocation(query, options = {}) {
  const q = (query || "").trim();
  if (!q) return [];

  const lat = options.lat || (mapState.userPosition ? mapState.userPosition[0] : DEFAULT_MAP_CENTER[0]);
  const lng = options.lng || (mapState.userPosition ? mapState.userPosition[1] : DEFAULT_MAP_CENTER[1]);

  // 1. Try Photon (OpenStreetMap geocoding API)
  try {
    const url = `${GEOCODE_API_URL}?q=${encodeURIComponent(q)}&lat=${lat}&lon=${lng}&limit=6`;
    const res = await fetch(url, { headers: { "Accept": "application/json" }, signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      if (data.features && data.features.length > 0) {
        return data.features.map((f) => {
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
            lat: Number(coords[1].toFixed(5)),
            lng: Number(coords[0].toFixed(5)),
            district: props.district || props.suburb || "",
          };
        });
      }
    }
  } catch {
    // Fallback to Nominatim
  }

  // 2. Fallback to OpenStreetMap Nominatim
  try {
    const nomUrl = `${NOMINATIM_SEARCH_URL}?q=${encodeURIComponent(q + ", Hồ Chí Minh, Việt Nam")}&format=json&addressdetails=1&limit=5&countrycodes=vn`;
    const res = await fetch(nomUrl, {
      headers: { "Accept": "application/json", "User-Agent": "EatWithMeApp/1.0" },
      signal: AbortSignal.timeout(4000)
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data.map((item) => ({
          name: item.name || item.display_name?.split(",")[0] || q,
          address: item.display_name,
          lat: Number(parseFloat(item.lat).toFixed(5)),
          lng: Number(parseFloat(item.lon).toFixed(5)),
          district: item.address?.suburb || item.address?.district || "",
        }));
      }
    }
  } catch {
    //
  }

  return [];
}

async function reverseGeocodeLocation(lat, lng) {
  try {
    const url = `${NOMINATIM_REVERSE_URL}?lat=${lat}&lon=${lng}&format=json&addressdetails=1`;
    const res = await fetch(url, {
      headers: { "Accept": "application/json", "User-Agent": "EatWithMeApp/1.0" },
      signal: AbortSignal.timeout(4000)
    });
    if (res.ok) {
      const data = await res.json();
      const addr = data.address || {};
      const road = addr.road || addr.street || "";
      const houseNumber = addr.house_number || "";
      const suburb = addr.suburb || addr.quarter || addr.district || "";
      const city = addr.city || addr.state || "TP. Hồ Chí Minh";
      const parts = [
        houseNumber ? `${houseNumber} ${road}`.trim() : road,
        suburb,
        city
      ].filter(Boolean);
      return {
        formattedAddress: parts.join(", ") || data.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`,
        district: suburb,
      };
    }
  } catch {
    //
  }
  return {
    formattedAddress: `${lat.toFixed(5)}, ${lng.toFixed(5)}`,
    district: "",
  };
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function readCachedLocation() {
  const cached = readStorage(locationStorageKey, null);
  if (!cached || !Number.isFinite(cached.lat) || !Number.isFinite(cached.lng)) return null;
  const age = Date.now() - (cached.timestamp || 0);
  if (age > MAX_CACHE_AGE_MS) return null;
  return [cached.lat, cached.lng];
}

function isCachedLocationFresh() {
  const cached = readStorage(locationStorageKey, null);
  if (!cached) return false;
  return Boolean(cached.isPrecise) && (Date.now() - (cached.timestamp || 0) < STALE_THRESHOLD_MS);
}

// IndexedDB Persistent Storage for Offline Resilience
const IDB_NAME = "EatWithMeDB";
const IDB_VERSION = 1;
const IDB_STORE = "app_state";

function getIndexedDb() {
  if (!window.indexedDB) return Promise.resolve(null);
  return new Promise((resolve) => {
    const req = indexedDB.open(IDB_NAME, IDB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
}

async function idbSet(key, val) {
  try {
    const db = await getIndexedDb();
    if (!db) return;
    const tx = db.transaction(IDB_STORE, "readwrite");
    tx.objectStore(IDB_STORE).put(val, key);
    return new Promise((resolve) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch {
    /* fallback to localstorage */
  }
}

async function idbGet(key) {
  try {
    const db = await getIndexedDb();
    if (!db) return null;
    const tx = db.transaction(IDB_STORE, "readonly");
    const req = tx.objectStore(IDB_STORE).get(key);
    return new Promise((resolve) => {
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function requestPersistentStorage() {
  if (navigator.storage && navigator.storage.persist) {
    try {
      const isPersisted = await navigator.storage.persisted();
      if (!isPersisted) {
        await navigator.storage.persist();
      }
    } catch {
      /* ignore */
    }
  }
}
requestPersistentStorage();

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    idbSet(key, value);
  } catch {}
}

function exportBackupData() {
  const data = {
    version: 2,
    appName: "EatWithMe",
    exportedAt: new Date().toISOString(),
    user: state.user,
    saved: state.saved,
    customPlaces: readStorage(getCustomPlacesKey(state.user), []),
  };

  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const dateStr = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `EatWithMe-Backup-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Đã xuất file sao lưu dữ liệu (.json) thành công!", "success");
}

function importBackupFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || (typeof data !== "object")) {
        showToast("File sao lưu không đúng định dạng!", "error");
        return;
      }

      if (data.user && typeof data.user === "object") {
        state.user = data.user;
        saveStorage(googleUserKey, state.user);
      }

      if (Array.isArray(data.saved)) {
        state.saved = data.saved;
        saveStorage(getSavedStorageKey(state.user), state.saved);
      }

      if (Array.isArray(data.customPlaces)) {
        saveStorage(getCustomPlacesKey(state.user), data.customPlaces);
        refreshPlaces();
      }

      saveLocalState();
      renderApp();
      showToast("Đã phục hồi dữ liệu từ file thành công!", "success");
    } catch (err) {
      showToast("Lỗi khi đọc file sao lưu: " + err.message, "error");
    }
  };
  reader.readAsText(file);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function icon(name) { return `<span aria-hidden="true">${ICONS[name] || "•"}</span>`; }
function getPlace(id) { return places.find((place) => place.id === id); }
function isSaved(id) { return state.saved.includes(id); }

function initials(name) {
  return (name || "EM").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function avatar(person, extra = "") {
  if (person?.picture) {
    return `<div class="avatar ${extra}"><img src="${escapeHtml(person.picture)}" alt="${escapeHtml(person.name || "User")}" /></div>`;
  }
  const color = person?.color || "green";
  return `<div class="avatar ${color} ${extra}">${escapeHtml(initials(person?.name || "Eat with me"))}</div>`;
}

function statusLabel(place) {
  const isOpen = place.status === "open";
  return `<span class="status ${isOpen ? "open" : "closed"}">${isOpen ? `Đang mở · đóng lúc ${escapeHtml(place.closes)}` : escapeHtml(place.closes)}</span>`;
}

function placePhoto(place) {
  return `<div class="place-photo ${place.color || "bun"}"></div>`;
}

function getCategoryMeta(catName) {
  return FOOD_CATEGORIES.find((c) => c.name.toLowerCase() === (catName || "").toLowerCase()) || {
    name: catName || "Khác",
    bg: "#000000",
    color: "#ffffff",
  };
}

function getPriceMeta(priceName) {
  return PRICE_TIERS.find((p) => p.name === priceName) || {
    name: priceName || "<100k",
    bg: "#ffd5cc",
    color: "#c23f27",
  };
}

function categoryBadge(categoryName) {
  const meta = getCategoryMeta(categoryName);
  return `<span class="food-badge-pill" style="background:${meta.bg};color:${meta.color};${meta.border ? `border:1px solid ${meta.border};` : ""}">${escapeHtml(meta.name)}</span>`;
}

function priceBadge(priceText) {
  const meta = getPriceMeta(priceText);
  return `<span class="food-badge-pill" style="background:${meta.bg};color:${meta.color};">${escapeHtml(meta.name)}</span>`;
}

function trashIconSvg() {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:middle;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
}

function placeCard(place, { compact = false } = {}) {
  const saved = isSaved(place.id);
  return `
    <article class="place-card ${compact ? "compact" : ""}" data-place-id="${place.id}">
      ${placePhoto(place)}
      <div class="place-copy">
        <div style="display:flex;gap:5px;align-items:center;margin-bottom:4px;flex-wrap:wrap;">
          ${categoryBadge(place.category)}
          ${priceBadge(place.price || "<100k")}
          <span style="font-size:11.5px;color:var(--ink-muted);margin-left:auto;font-weight:700;">★ ${escapeHtml(place.rating)}</span>
        </div>
        <h3 data-action="open-place" data-place-id="${place.id}" style="cursor:pointer;">${escapeHtml(place.name)}</h3>
        <p>${escapeHtml(place.address)} · <strong>${escapeHtml(place.distance)}</strong></p>
        ${statusLabel(place)}
      </div>
      <div class="place-actions">
        <button class="round-button ${saved ? "saved delete-btn" : ""}" data-action="toggle-save" data-place-id="${place.id}" title="${saved ? "Xóa khỏi danh sách" : "Lưu quán"}" aria-label="${saved ? "Xóa" : "Lưu"} ${escapeHtml(place.name)}">
          ${saved ? trashIconSvg() : icon("bookmark")}
        </button>
        <button class="round-button" data-action="share-place" data-place-id="${place.id}" aria-label="Chia sẻ ${escapeHtml(place.name)}">${icon("share")}</button>
      </div>
    </article>`;
}

function renderTopbar() {
  const profileName = state.user?.name || "Khách";
  return `
    <header class="topbar">
      <div class="mobile-brand">Eat<span>With</span>Me</div>
      <label class="search-shell" aria-label="Tìm quán ăn">
        <span class="icon">${icon("search")}</span>
        <input id="global-search" class="search-input" type="search" value="${escapeHtml(state.query)}" placeholder="Tìm quán, món ăn hoặc khu vực..." autocomplete="off" />
      </label>
      <div class="top-actions">
        ${state.installAvailable ? `<button class="install-button" data-action="install-app">Cài app</button>` : ""}
        ${
          state.user
            ? `<div class="user-profile-badge" data-action="open-profile" aria-label="Hồ sơ ${escapeHtml(state.user.name)}" title="${escapeHtml(state.user.email || "")}">
                <img src="${escapeHtml(state.user.picture)}" alt="${escapeHtml(state.user.name)}" />
                <span class="user-name">${escapeHtml(state.user.name)}</span>
              </div>
              <button type="button" class="google-login-btn logout-topbar-btn" data-action="logout-user" aria-label="Đăng xuất" style="padding:6px 12px;font-size:12px;color:var(--coral-dark);">
                Đăng xuất
              </button>`
            : `<button type="button" class="google-login-btn" data-action="open-profile" aria-label="Hồ sơ cá nhân">
                ${googleSvgIcon()}
                <span>Hồ sơ</span>
              </button>`
        }
        ${
          !state.user
            ? `<button class="avatar green" data-action="open-profile" aria-label="Hồ sơ cá nhân" style="cursor:pointer;border:0;">${escapeHtml(initials(profileName))}</button>`
            : ""
        }
      </div>
    </header>`;
}

function renderSidebar() {
  const nav = [
    ["explore", "compass", "Khám phá"],
    ["saved", "bookmark", "Quán đã lưu"],
  ];
  const profileName = state.user?.name || "Eat with me";
  const userCaption = state.user?.email ? `<span style="color:var(--herb);font-weight:600;">● Google</span>` : `Dữ liệu lưu trên máy`;
  return `
    <aside class="sidebar">
      <div class="brand"><div class="brand-mark">E</div><div class="brand-name">Eat<span>With</span>Me</div></div>
      <div class="nav-label">Không gian ẩm thực</div>
      <nav class="nav" aria-label="Điều hướng chính">
        ${nav.map(([view, iconName, label]) => `<button class="nav-button ${state.view === view ? "active" : ""}" data-action="navigate" data-view="${view}"><span class="icon">${icon(iconName)}</span><span>${label}</span></button>`).join("")}
      </nav>
      <div class="sidebar-footer">
        <div style="display:flex;align-items:center;gap:6px;">
          <div class="profile-chip" data-action="open-profile" style="cursor:pointer;flex:1;" aria-label="Hồ sơ cá nhân">
            ${avatar(state.user || { name: profileName, color: "green" })}
            <div class="profile-copy">
              <div class="profile-name">${escapeHtml(profileName)}</div>
              <div class="profile-caption">${userCaption}</div>
            </div>
          </div>
          ${
            state.user
              ? `<button type="button" class="round-button" data-action="logout-user" title="Đăng xuất" aria-label="Đăng xuất" style="width:36px;height:36px;font-size:11px;flex-shrink:0;color:var(--coral-dark);">
                  OUT
                </button>`
              : ""
          }
        </div>
      </div>
    </aside>`;
}

function renderMobileTabbar() {
  const nav = [
    ["explore", "compass", "Khám phá"],
    ["saved", "bookmark", "Đã lưu"],
  ];
  return `<nav class="mobile-tabbar" aria-label="Điều hướng trên điện thoại">${nav.map(([view, iconName, label]) => `<button class="mobile-tab ${state.view === view ? "active" : ""}" data-action="navigate" data-view="${view}"><span class="mobile-tab-icon">${icon(iconName)}</span><span>${label}</span></button>`).join("")}</nav>`;
}

function renderMapFallback() {
  let savedPlaces = places.filter((place) => isSaved(place.id));
  if (state.categoryFilter && state.categoryFilter !== "all") {
    savedPlaces = savedPlaces.filter((place) => (place.category || "").toLowerCase() === state.categoryFilter.toLowerCase());
  }
  if (state.priceFilter && state.priceFilter !== "all") {
    savedPlaces = savedPlaces.filter((place) => (place.price || "").toLowerCase() === state.priceFilter.toLowerCase());
  }
  return `<div id="map-fallback" class="map-fallback hidden"><div class="map-surface">${savedPlaces.map((place) => `<button class="map-pin ${place.pin}" data-action="open-place" data-place-id="${place.id}" aria-label="Mở ${escapeHtml(place.name)}"><span>●</span></button>`).join("")}<span class="map-label one">Hai Bà Trưng</span><span class="map-label two">Hoàn Kiếm</span><span class="map-label three">Tràng Tiền</span><span class="map-label four">Phan Bội Châu</span></div></div>`;
}

function renderMap() {
  let saved = places.filter((place) => isSaved(place.id));
  if (state.categoryFilter && state.categoryFilter !== "all") {
    saved = saved.filter((place) => (place.category || "").toLowerCase() === state.categoryFilter.toLowerCase());
  }
  if (state.priceFilter && state.priceFilter !== "all") {
    saved = saved.filter((place) => (place.price || "").toLowerCase() === state.priceFilter.toLowerCase());
  }
  const savedCount = saved.length;
  return `
    <section class="panel map-panel" data-map-shell style="margin-bottom:20px;">
      <div class="map-toolbar">
        <button class="map-chip active" data-action="fit-saved" aria-label="Xem các quán đã lưu">Đã lưu · ${savedCount}</button>
        <button class="map-chip map-locate-chip" data-action="locate-device">${icon("compass")} Định vị tôi</button>
        <button class="map-chip" data-action="open-add-place" style="font-weight:700;color:var(--coral)">${icon("add")} Thêm quán</button>
      </div>
      <div id="leaflet-map" class="leaflet-map" aria-label="Bản đồ các quán đã lưu"></div>
      ${renderMapFallback()}
      <div id="map-location-caption" class="map-location-caption">Đang chuẩn bị bản đồ tương tác…</div>
      <div class="map-legend"><span class="legend-dot"></span>Quán đã lưu <span class="legend-dot herb"></span>Vị trí của bạn</div>
    </section>`;
}

function renderSearchPanel() {
  const query = state.query.trim().toLowerCase();
  if (!query) return "";
  let results = places.filter((place) => `${place.name} ${place.category} ${place.address}`.toLowerCase().includes(query));
  if (state.categoryFilter && state.categoryFilter !== "all") {
    results = results.filter((place) => (place.category || "").toLowerCase() === state.categoryFilter.toLowerCase());
  }
  if (state.priceFilter && state.priceFilter !== "all") {
    results = results.filter((place) => (place.price || "").toLowerCase() === state.priceFilter.toLowerCase());
  }
  return `<section class="panel" style="margin-bottom:22px"><div class="panel-header"><div><h2>Kết quả gần bạn</h2><p>${results.length ? `${results.length} địa điểm phù hợp với “${escapeHtml(state.query)}”` : "Thử tên món, tên quán hoặc một khu vực khác."}</p></div><button class="text-button" data-action="clear-search">Xóa tìm kiếm</button></div>${results.length ? `<div class="place-list">${results.map((place) => placeCard(place, { compact: true })).join("")}</div>` : `<div class="empty-state"><div class="empty-mark">⌕</div><h3>Chưa thấy quán này</h3><p>Bạn có thể bấm nút "Thêm quán" để tự ghim địa điểm này lên bản đồ.</p><button class="primary-button" data-action="open-add-place" style="margin-top:10px">${icon("add")} Thêm quán ngay</button></div>`}</section>`;
}

function renderGsheetFilterBar(savedPlaces) {
  const selectedCategoryObj = FOOD_CATEGORIES.find((c) => c.name.toLowerCase() === (state.categoryFilter || "").toLowerCase());
  const selectedPriceObj = PRICE_TIERS.find((p) => p.name.toLowerCase() === (state.priceFilter || "").toLowerCase());

  return `
    <div class="gsheet-filter-bar">
      <!-- Category Filter Dropdown -->
      <div class="gsheet-dropdown-container">
        <span class="gsheet-filter-title">Loại món:</span>
        <button type="button" class="gsheet-chip-cell ${state.openDropdown === "category" ? "is-focused" : ""}" data-action="toggle-dropdown" data-dropdown="category">
          ${
            selectedCategoryObj
              ? `<span class="gsheet-chip" style="background:${selectedCategoryObj.bg};color:${selectedCategoryObj.color};${selectedCategoryObj.border ? `border:1px solid ${selectedCategoryObj.border};` : ""}">
                  ${escapeHtml(selectedCategoryObj.name)}
                </span>`
              : `<span class="gsheet-chip-neutral">Tất cả món (${savedPlaces.length})</span>`
          }
          <span class="gsheet-cell-arrow">▾</span>
        </button>

        ${
          state.openDropdown === "category"
            ? `
            <div class="gsheet-chip-menu" data-dropdown-menu>
              <div class="gsheet-chip-item ${state.categoryFilter === "all" ? "selected" : ""}" data-action="select-category" data-value="all">
                <span class="gsheet-chip-neutral">Tất cả món (${savedPlaces.length})</span>
              </div>
              ${FOOD_CATEGORIES.map((cat) => {
                const count = savedPlaces.filter((p) => (p.category || "").toLowerCase() === cat.name.toLowerCase()).length;
                return `
                  <div class="gsheet-chip-item ${state.categoryFilter.toLowerCase() === cat.name.toLowerCase() ? "selected" : ""}" data-action="select-category" data-value="${escapeHtml(cat.name)}">
                    <span class="gsheet-chip" style="background:${cat.bg};color:${cat.color};${cat.border ? `border:1px solid ${cat.border};` : ""}">
                      ${escapeHtml(cat.name)}
                    </span>
                    ${count > 0 ? `<span class="gsheet-item-count">(${count})</span>` : ""}
                  </div>`;
              }).join("")}
            </div>`
            : ""
        }
      </div>

      <!-- Price Filter Dropdown -->
      <div class="gsheet-dropdown-container">
        <span class="gsheet-filter-title">Mức giá:</span>
        <button type="button" class="gsheet-chip-cell ${state.openDropdown === "price" ? "is-focused" : ""}" data-action="toggle-dropdown" data-dropdown="price">
          ${
            selectedPriceObj
              ? `<span class="gsheet-chip" style="background:${selectedPriceObj.bg};color:${selectedPriceObj.color};">
                  ${escapeHtml(selectedPriceObj.name)}
                </span>`
              : `<span class="gsheet-chip-neutral">Tất cả giá</span>`
          }
          <span class="gsheet-cell-arrow">▾</span>
        </button>

        ${
          state.openDropdown === "price"
            ? `
            <div class="gsheet-chip-menu" data-dropdown-menu>
              <div class="gsheet-chip-item ${state.priceFilter === "all" ? "selected" : ""}" data-action="select-price" data-value="all">
                <span class="gsheet-chip-neutral">Tất cả giá</span>
              </div>
              ${PRICE_TIERS.map((tier) => {
                const count = savedPlaces.filter((p) => (p.price || "").toLowerCase() === tier.name.toLowerCase()).length;
                return `
                  <div class="gsheet-chip-item ${state.priceFilter.toLowerCase() === tier.name.toLowerCase() ? "selected" : ""}" data-action="select-price" data-value="${escapeHtml(tier.name)}">
                    <span class="gsheet-chip" style="background:${tier.bg};color:${tier.color};">
                      ${escapeHtml(tier.name)}
                    </span>
                    ${count > 0 ? `<span class="gsheet-item-count">(${count})</span>` : ""}
                  </div>`;
              }).join("")}
            </div>`
            : ""
        }
      </div>

      ${
        state.categoryFilter !== "all" || state.priceFilter !== "all"
          ? `<button type="button" class="gsheet-reset-btn" data-action="reset-saved-filters" title="Xóa tất cả bộ lọc">
              <span>×</span> Đặt lại
            </button>`
          : ""
      }
    </div>`;
}

function renderExplore() {
  const savedPlaces = places.filter((place) => isSaved(place.id));
  return `
    <div class="page-title-row">
      <div>
        <div class="eyebrow">Bản đồ ẩm thực cá nhân</div>
        <h1>Khám phá & Bản đồ</h1>
        <p>Ghim các quán bạn yêu thích, tìm kiếm và lọc theo loại món hoặc mức giá.</p>
      </div>
      <button class="primary-button" data-action="open-add-place">${icon("add")} Thêm quán mới</button>
    </div>

    ${renderGsheetFilterBar(savedPlaces)}
    ${renderSearchPanel()}
    ${renderMap()}`;
}

function renderSaved() {
  const savedPlaces = places.filter((place) => isSaved(place.id));
  let filtered = savedPlaces;

  if (state.categoryFilter && state.categoryFilter !== "all") {
    filtered = filtered.filter((place) => (place.category || "").toLowerCase() === state.categoryFilter.toLowerCase());
  }

  if (state.priceFilter && state.priceFilter !== "all") {
    filtered = filtered.filter((place) => (place.price || "").toLowerCase() === state.priceFilter.toLowerCase());
  }

  return `
    <div class="page-title-row">
      <div>
        <div class="eyebrow">Kho lưu trữ ẩm thực</div>
        <h1>Quán đã lưu</h1>
        <p>Những quán bạn muốn quay lại, lưu trữ riêng hoặc tự thêm bằng tay.</p>
      </div>
      <button class="primary-button" data-action="open-add-place">${icon("add")} Thêm quán mới</button>
    </div>

    ${renderGsheetFilterBar(savedPlaces)}

    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Danh sách quán ăn</h2>
          <p>${filtered.length} địa điểm hiển thị ${state.categoryFilter !== "all" || state.priceFilter !== "all" ? `(đã lọc)` : ""}</p>
        </div>
        ${state.categoryFilter !== "all" || state.priceFilter !== "all" ? `<button class="text-button" data-action="reset-saved-filters" style="font-size:12px;color:var(--coral);">Xóa bộ lọc</button>` : ""}
      </div>
      ${
        filtered.length
          ? `<div class="place-list">${filtered.map((place) => placeCard(place)).join("")}</div>`
          : savedPlaces.length === 0
          ? `
          <div class="empty-state">
            <div class="empty-mark">—</div>
            <h3>Danh sách đang trống</h3>
            <p>Hãy lưu địa điểm từ màn hình Khám phá hoặc bấm nút "Thêm quán mới" ở góc trên để tự thêm quán bạn yêu thích.</p>
          </div>`
          : `
          <div class="empty-state">
            <div class="empty-mark">—</div>
            <h3>Không có quán phù hợp bộ lọc</h3>
            <p>Không tìm thấy quán đã lưu nào phù hợp với tùy chọn lọc hiện tại.</p>
            <button class="secondary-button" data-action="reset-saved-filters" style="margin-top:12px;margin-inline:auto;">
              Đặt lại tất cả bộ lọc
            </button>
          </div>`
      }
    </section>

    <section class="panel" style="margin-top:16px;background:rgba(255,255,255,0.48);border:1px dashed var(--line);padding:15px 18px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div>
          <h3 style="font-size:14px;margin:0 0 3px;display:flex;align-items:center;gap:6px;">
            Quản lý dữ liệu lưu trên máy
          </h3>
          <p style="font-size:12px;color:var(--ink-muted);margin:0;">
            Đã lưu ${state.saved.length} quán ăn (${customPlaces.length} quán tự thêm) · Bộ nhớ máy được bảo vệ chống xóa ngầm
          </p>
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
          <button class="secondary-button" data-action="export-backup" style="font-size:12px;padding:7px 13px;">
            ${icon("share")} Sao lưu ra File (.json)
          </button>
          <label class="secondary-button" style="font-size:12px;padding:7px 13px;cursor:pointer;display:inline-flex;align-items:center;gap:5px;margin:0;">
            ${icon("add")} Phục hồi từ File
            <input id="import-backup-input" type="file" accept=".json,application/json" hidden />
          </label>
        </div>
      </div>
    </section>`;
}

function renderMain() {
  const pages = { explore: renderExplore, saved: renderSaved };
  return pages[state.view] ? pages[state.view]() : renderExplore();
}

function renderApp() {
  document.querySelector("#app").innerHTML = `<div class="app-shell">${renderSidebar()}<main class="main">${renderTopbar()}<div id="page-content">${renderMain()}</div></main>${renderMobileTabbar()}</div>`;
  bindAppEvents();
  renderModal();
  if (state.view === "explore") window.setTimeout(initInteractiveMap, 0);
}

function loadLeaflet() {
  if (window.L) return Promise.resolve(window.L);
  if (mapState.leafletPromise) return mapState.leafletPromise;

  mapState.leafletPromise = new Promise((resolve, reject) => {
    if (window.L) { resolve(window.L); return; }

    if (!document.querySelector("link[data-leaflet-css]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.dataset.leafletCss = "true";
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector('script[src*="leaflet.js"]');
    if (existingScript) {
      if (window.L) { resolve(window.L); return; }
      existingScript.addEventListener("load", () => resolve(window.L));
      existingScript.addEventListener("error", () => reject(new Error("Leaflet could not be loaded")));
      const poll = window.setInterval(() => {
        if (window.L) { window.clearInterval(poll); resolve(window.L); }
      }, 30);
      window.setTimeout(() => { window.clearInterval(poll); if (window.L) resolve(window.L); else reject(new Error("Leaflet timeout")); }, 4000);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = () => resolve(window.L);
    script.onerror = () => reject(new Error("Leaflet could not be loaded"));
    document.head.appendChild(script);
  });

  return mapState.leafletPromise;
}

function mapPopupHtml(place) {
  return `<div class="map-popup"><strong>${escapeHtml(place.name)}</strong><span>${escapeHtml(place.address)}</span>${statusLabel(place)}<button class="map-popup-button" data-action="open-place" data-place-id="${place.id}">Mở chi tiết ${icon("arrow")}</button></div>`;
}

function updateMapCaption(message) {
  const caption = document.querySelector("#map-location-caption");
  if (caption) caption.textContent = message;
}

function showMapFallback(message) {
  document.querySelector("#leaflet-map")?.classList.add("hidden");
  document.querySelector("#map-fallback")?.classList.remove("hidden");
  updateMapCaption(message);
}

function savedMarkerIcon(L) {
  return L.divIcon({
    className: "eatwithme-marker-wrap",
    html: '<span class="eatwithme-marker saved-marker">●</span>',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -26],
  });
}

function userMarkerIcon(L, { refining = false, precise = false } = {}) {
  const extraClass = precise ? "precise" : refining ? "refining" : "";
  return L.divIcon({
    className: "eatwithme-marker-wrap",
    html: `<span class="eatwithme-marker user-marker ${extraClass}"><span></span></span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

function buildInteractiveMap(L) {
  const element = document.querySelector("#leaflet-map");
  if (!element) return null;

  if (mapState.instance) mapState.instance.remove();
  if (mapState.tileCheckTimer) window.clearTimeout(mapState.tileCheckTimer);
  mapState.savedMarkers.clear();
  mapState.tilesLoaded = false;

  const map = L.map(element, {
    zoomControl: false,
    preferCanvas: true,
    minZoom: MAP_MIN_ZOOM,
    maxZoom: MAP_MAX_ZOOM,
    zoomSnap: 0.5,
    zoomDelta: 0.5,
  }).setView(DEFAULT_MAP_CENTER, MAP_DEFAULT_ZOOM);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  const tiles = L.tileLayer(MAP_TILE_URL, {
    minZoom: MAP_MIN_ZOOM,
    maxZoom: MAP_MAX_ZOOM,
    subdomains: MAP_TILE_SUBDOMAINS,
    attribution: MAP_TILE_ATTRIBUTION,
  }).addTo(map);
  L.tileLayer(MAP_LABEL_TILE_URL, {
    minZoom: MAP_MIN_ZOOM,
    maxZoom: MAP_MAX_ZOOM,
    subdomains: MAP_TILE_SUBDOMAINS,
    opacity: 0.95,
    zIndex: 2,
  }).addTo(map);
  tiles.once("load", () => {
    mapState.tilesLoaded = true;
    if (mapState.tileCheckTimer) window.clearTimeout(mapState.tileCheckTimer);
  });

  map.on("click", (e) => {
    if (mapState.isPickingLocation) {
      onMapClickPickLocation(e.latlng);
    }
  });

  let saved = places.filter((place) => isSaved(place.id));
  if (state.categoryFilter && state.categoryFilter !== "all") {
    saved = saved.filter((place) => (place.category || "").toLowerCase() === state.categoryFilter.toLowerCase());
  }
  if (state.priceFilter && state.priceFilter !== "all") {
    saved = saved.filter((place) => (place.price || "").toLowerCase() === state.priceFilter.toLowerCase());
  }
  const iconForSaved = savedMarkerIcon(L);
  for (const place of saved) {
    const marker = L.marker([place.lat, place.lng], { icon: iconForSaved })
      .addTo(map)
      .bindPopup(mapPopupHtml(place), { maxWidth: 230 });
    mapState.savedMarkers.set(place.id, marker);
  }

  // Keep map focused on default center unless user requested locate
  if (mapState.hasLocatedUser && mapState.userPosition) {
    map.setView(mapState.userPosition, MAP_LOCATE_ZOOM);
  } else {
    map.setView(DEFAULT_MAP_CENTER, MAP_DEFAULT_ZOOM);
  }

  mapState.instance = map;
  if (mapState.userPosition) {
    const fresh = isCachedLocationFresh();
    mapState.isPrecise = fresh;
    mapState.isRefining = !fresh;
    mapState.userMarker = L.marker(mapState.userPosition, {
      icon: userMarkerIcon(L, { refining: !fresh, precise: fresh }),
    }).addTo(map);
  } else {
    mapState.userMarker = null;
    mapState.isRefining = false;
    mapState.isPrecise = false;
  }

  updateMapCaption(mapState.userPosition
    ? (isCachedLocationFresh() ? "Vị trí của bạn · bản đồ đã sẵn sàng" : "Vị trí gần đây · đang làm mới vị trí…")
    : saved.length ? `${saved.length} quán đã lưu · chạm marker để xem chi tiết` : "Bạn chưa lưu quán nào");
  mapState.tileCheckTimer = window.setTimeout(() => {
    if (mapState.instance === map && !mapState.tilesLoaded) {
      showMapFallback("Không tải được nền bản đồ · đang dùng bản đồ dự phòng");
    }
  }, 5000);
  window.setTimeout(() => map.invalidateSize(), 50);
  return map;
}

let nativeGeolocationPromise = null;

function isNativeCapacitor() {
  return Boolean(window.Capacitor?.isNativePlatform?.());
}

async function loadNativeGeolocation() {
  if (!isNativeCapacitor()) return null;
  if (!nativeGeolocationPromise) {
    nativeGeolocationPromise = import("@capacitor/geolocation")
      .then(({ Geolocation }) => Geolocation)
      .catch(() => null);
  }
  return nativeGeolocationPromise;
}

function normalizeNativeLocationError(error) {
  const message = String(error?.message || error || "").toLowerCase();
  if (message.includes("permission") || message.includes("denied")) return { code: 1 };
  if (message.includes("timeout")) return { code: 3 };
  return { code: 2 };
}

function withLocationTimeout(promise, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject({ code: 3 }), timeoutMs);
    Promise.resolve(promise).then(
      (value) => { window.clearTimeout(timer); resolve(value); },
      (error) => { window.clearTimeout(timer); reject(error); },
    );
  });
}

async function requestFastPosition() {
  if (isNativeCapacitor()) {
    const Geolocation = await loadNativeGeolocation();
    if (!Geolocation) return null;
    try {
      const pos = await withLocationTimeout(
        Geolocation.getCurrentPosition(NATIVE_FAST_LOCATION_OPTIONS),
        600,
      );
      if (pos?.coords) return { position: pos, fast: true };
    } catch {
      // Fast cache miss
    }
    return null;
  }
  if (navigator.geolocation) {
    try {
      const pos = await withLocationTimeout(
        new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, FAST_LOCATION_OPTIONS)),
        600,
      );
      if (pos?.coords) return { position: pos, fast: true };
    } catch {
      // Fallback
    }
  }
  return null;
}

async function requestPrecisePosition(deadlineMs = 3500) {
  if (isNativeCapacitor()) {
    const Geolocation = await loadNativeGeolocation();
    if (!Geolocation) return { error: { code: 2 } };
    try {
      const permissions = await Geolocation.checkPermissions();
      let locationPermission = permissions?.location;
      if (locationPermission === "prompt") {
        locationPermission = (await Geolocation.requestPermissions())?.location;
      }
      if (locationPermission && locationPermission !== "granted") return { error: { code: 1 } };

      const pos = await withLocationTimeout(
        Geolocation.getCurrentPosition(NATIVE_PRECISE_LOCATION_OPTIONS),
        deadlineMs,
      );
      return { position: pos, precise: true };
    } catch (error) {
      return { error: normalizeNativeLocationError(error) };
    }
  }
  if (!navigator.geolocation) return { error: { code: 2 } };
  return new Promise((resolve) => {
    let finished = false;
    const timer = window.setTimeout(() => {
      if (finished) return;
      finished = true;
      resolve({ error: { code: 3 } });
    }, deadlineMs);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (finished) return;
        finished = true;
        window.clearTimeout(timer);
        resolve({ position: pos, precise: true });
      },
      (err) => {
        if (finished) return;
        finished = true;
        window.clearTimeout(timer);
        resolve({ error: err?.code ? err : { code: 2 } });
      },
      PRECISE_LOCATION_OPTIONS,
    );
  });
}

function renderUserMarkerOnMap(point, { refining = false, precise = false, animate = true, accuracy = null } = {}) {
  if (!mapState.instance || !window.L) return;
  mapState.userPosition = point;
  mapState.isRefining = refining;
  mapState.isPrecise = precise;

  if (mapState.userMarker) {
    mapState.userMarker.setLatLng(point);
    mapState.userMarker.setIcon(userMarkerIcon(window.L, { refining, precise }));
  } else {
    mapState.userMarker = window.L.marker(point, {
      icon: userMarkerIcon(window.L, { refining, precise }),
      zIndexOffset: 1000,
    }).addTo(mapState.instance);
  }

  const radius = Number.isFinite(accuracy) ? Math.max(10, Math.min(accuracy, 1200)) : null;
  if (radius && radius < 1200) {
    if (mapState.accuracyCircle) {
      mapState.accuracyCircle.setLatLng(point).setRadius(radius);
    } else {
      mapState.accuracyCircle = window.L.circle(point, {
        radius,
        color: "#2c6a52",
        fillColor: "#2c6a52",
        fillOpacity: 0.12,
        weight: 1.5,
        interactive: false,
      }).addTo(mapState.instance);
    }
  } else if (mapState.accuracyCircle) {
    mapState.accuracyCircle.remove();
    mapState.accuracyCircle = null;
  }

  if (animate) {
    mapState.instance.panTo(point, { animate: true, duration: 0.45 });
  }
}

async function fetchIpLocation() {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 2500);

  try {
    const res = await fetch("https://freeipapi.com/api/json", {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      const data = await res.json();
      if (Number.isFinite(data.latitude) && Number.isFinite(data.longitude)) {
        window.clearTimeout(timer);
        return {
          lat: data.latitude,
          lng: data.longitude,
          city: data.cityName || data.regionName || "Hà Nội",
          source: "ip-freeipapi",
        };
      }
    }
  } catch {
    /* try next */
  }

  try {
    const response = await fetch("https://ipwho.is/", {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      if (Number.isFinite(data.latitude) && Number.isFinite(data.longitude)) {
        window.clearTimeout(timer);
        return {
          lat: data.latitude,
          lng: data.longitude,
          city: data.city || "Khu vực mạng",
          source: "ip-whois",
        };
      }
    }
  } catch {
    /* ignore */
  } finally {
    window.clearTimeout(timer);
  }

  return {
    lat: 10.7769,
    lng: 106.7009,
    city: "TP. Hồ Chí Minh",
    source: "default",
  };
}

function requestGoogleMapsLocation({ onUpdate, maxWaitMs = 8000 } = {}) {
  if (isNativeCapacitor()) {
    return requestPrecisePosition(maxWaitMs);
  }
  if (!navigator.geolocation) {
    return Promise.resolve({ error: { code: 2, message: "Geolocation not supported" } });
  }

  return new Promise((resolve) => {
    let settled = false;
    let bestAccuracy = Infinity;
    let bestCoords = null;
    let watchId = null;
    let fallbackTimeout = null;

    function cleanup() {
      if (watchId !== null) {
        try { navigator.geolocation.clearWatch(watchId); } catch { /* ignore */ }
        watchId = null;
      }
      if (fallbackTimeout) {
        window.clearTimeout(fallbackTimeout);
        fallbackTimeout = null;
      }
    }

    function finish(result) {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(result);
    }

    function tryLowAccuracyFallback() {
      if (settled || bestCoords) return;
      try {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            if (settled) return;
            if (pos?.coords) {
              bestCoords = pos.coords;
              bestAccuracy = pos.coords.accuracy || 100;
              if (typeof onUpdate === "function") onUpdate(pos, { source: "wifi" });
              finish({ position: pos, source: "wifi" });
            }
          },
          (err) => {
            if (settled) return;
            if (!bestCoords) {
              finish({ error: err || { code: 2 } });
            }
          },
          { enableHighAccuracy: false, timeout: 5000, maximumAge: 60000 },
        );
      } catch (e) {
        finish({ error: { code: 2 } });
      }
    }

    fallbackTimeout = window.setTimeout(() => {
      if (bestCoords) {
        finish({ position: { coords: bestCoords }, source: "best-stream" });
      } else {
        tryLowAccuracyFallback();
        window.setTimeout(() => {
          if (!settled) {
            if (bestCoords) finish({ position: { coords: bestCoords }, source: "best-stream" });
            else finish({ error: { code: 3, message: "Timeout" } });
          }
        }, 3000);
      }
    }, 2800);

    try {
      watchId = navigator.geolocation.watchPosition(
        (pos) => {
          if (settled) return;
          const coords = pos?.coords;
          if (!coords) return;
          const accuracy = coords.accuracy || 100;

          if (accuracy < bestAccuracy) {
            bestAccuracy = accuracy;
            bestCoords = coords;
          }

          if (typeof onUpdate === "function") {
            onUpdate(pos, { source: accuracy <= 35 ? "gps" : "wifi" });
          }

          if (accuracy <= 25) {
            finish({ position: pos, source: "gps", precise: true });
          }
        },
        (err) => {
          if (settled) return;
          if (err?.code === 1) {
            finish({ error: err });
            return;
          }
          tryLowAccuracyFallback();
        },
        { enableHighAccuracy: true, timeout: 7000, maximumAge: 10000 },
      );
    } catch {
      tryLowAccuracyFallback();
    }
  });
}

let locationPrefetchPromise = null;

function startLocationPrefetch() {
  if (locationPrefetchPromise) return locationPrefetchPromise;
  locationPrefetchPromise = (async () => {
    try {
      const result = await requestGoogleMapsLocation({
        onUpdate: (pos) => {
          const { latitude, longitude, accuracy } = pos.coords;
          const pt = [latitude, longitude];
          mapState.userPosition = pt;
          mapState.hasLocatedUser = true;
          saveStorage(locationStorageKey, {
            lat: Math.round(pt[0] * 10000) / 10000,
            lng: Math.round(pt[1] * 10000) / 10000,
            accuracy: Math.round(accuracy || 0),
            isPrecise: accuracy <= 50,
            timestamp: Date.now(),
          });
          if (mapState.instance) {
            renderUserMarkerOnMap(pt, {
              refining: accuracy > 35,
              precise: accuracy <= 35,
              animate: true,
              accuracy,
            });
            const label = accuracy <= 30 ? "Vị trí GPS chính xác" : "Vị trí theo Wi-Fi";
            updateMapCaption(`${label} · độ chuẩn ±${Math.round(accuracy || 10)}m`);
          }
        },
      });
      if (result?.position?.coords) return result;
    } catch {
      /* ignore */
    }

    const ip = await fetchIpLocation();
    if (ip && !mapState.hasLocatedUser) {
      const pt = [ip.lat, ip.lng];
      mapState.userPosition = pt;
      saveStorage(locationStorageKey, {
        lat: Math.round(pt[0] * 10000) / 10000,
        lng: Math.round(pt[1] * 10000) / 10000,
        isPrecise: false,
        timestamp: Date.now(),
      });
      if (mapState.instance) {
        renderUserMarkerOnMap(pt, { refining: false, precise: false, animate: true });
        updateMapCaption(`Vị trí khu vực (${escapeHtml(ip.city)})`);
      }
      return { position: { coords: { latitude: ip.lat, longitude: ip.lng } }, fast: true };
    }
    return null;
  })();
  return locationPrefetchPromise;
}

async function locateDevice({ silent = false } = {}) {
  if (!mapState.instance) return;
  if (mapState.locationPending) return;

  mapState.locationPending = true;
  if (!silent) showToast("Đang định vị chuẩn xác…", "success");

  if (mapState.userPosition) {
    renderUserMarkerOnMap(mapState.userPosition, { refining: true, precise: false, animate: !silent });
    updateMapCaption("Đang làm mịn tín hiệu vị trí…");
  } else {
    updateMapCaption("Đang tìm tín hiệu GPS & Wi-Fi…");
  }

  try {
    const streamResult = await requestGoogleMapsLocation({
      onUpdate: (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        const pt = [latitude, longitude];
        mapState.userPosition = pt;
        saveStorage(locationStorageKey, {
          lat: Math.round(pt[0] * 10000) / 10000,
          lng: Math.round(pt[1] * 10000) / 10000,
          accuracy: Math.round(accuracy || 0),
          isPrecise: accuracy <= 50,
          timestamp: Date.now(),
        });
        renderUserMarkerOnMap(pt, {
          refining: accuracy > 35,
          precise: accuracy <= 35,
          animate: true,
          accuracy,
        });
        const label = accuracy <= 30 ? "Vị trí GPS chính xác" : "Vị trí theo Wi-Fi/Mạng";
        updateMapCaption(`${label} · độ chuẩn ±${Math.round(accuracy || 10)}m`);
      },
    });

    if (streamResult?.position?.coords) {
      const { latitude, longitude, accuracy } = streamResult.position.coords;
      const pt = [latitude, longitude];
      mapState.userPosition = pt;
      mapState.hasLocatedUser = true;
      renderUserMarkerOnMap(pt, { refining: false, precise: true, animate: true, accuracy });
      mapState.instance.setView(pt, MAP_LOCATE_ZOOM, { animate: true });
      const label = accuracy <= 30 ? "Vị trí GPS chính xác" : "Vị trí Wi-Fi chuẩn";
      updateMapCaption(`${label} (độ chuẩn ±${Math.round(accuracy || 10)}m) · bản đồ đã sẵn sàng`);
      if (!silent) showToast(`Đã định vị thành công (±${Math.round(accuracy || 10)}m)`, "success");
    } else {
      const err = streamResult?.error;
      const ip = await fetchIpLocation();
      const pt = [ip.lat, ip.lng];
      mapState.userPosition = pt;
      renderUserMarkerOnMap(pt, { refining: false, precise: false, animate: true });
      mapState.instance.setView(pt, MAP_DEFAULT_ZOOM, { animate: true });

      if (err?.code === 1) {
        const msg = "Nhấn biểu tượng cài đặt trên thanh địa chỉ và chọn Cho phép Vị trí để bật GPS";
        updateMapCaption(`Chưa cấp quyền GPS · đang hiển thị khu vực ${escapeHtml(ip.city)}`);
        if (!silent) showToast(msg, "error");
      } else {
        updateMapCaption(`Vị trí khu vực ${escapeHtml(ip.city)} · bản đồ đã sẵn sàng`);
        if (!silent) showToast(`Đã định vị khu vực ${ip.city}`, "success");
      }
    }
  } finally {
    mapState.locationPending = false;
  }
}

async function initInteractiveMap() {
  const element = document.querySelector("#leaflet-map");
  if (!element) return;
  try {
    const L = await loadLeaflet();
    if (!L) throw new Error("Leaflet unavailable");
    buildInteractiveMap(L);
    // Map stays focused on TP. HCM default view unless user taps Locate
  } catch {
    mapState.leafletPromise = null;
    showMapFallback("Không tải được bản đồ online · đang dùng bản đồ dự phòng");
  }
}

function googleSvgIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style="display:inline-block;vertical-align:middle;flex-shrink:0;">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
  </svg>`;
}

function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

function getGoogleClientId() {
  return readStorage(googleClientIdKey, DEFAULT_GOOGLE_CLIENT_ID) || DEFAULT_GOOGLE_CLIENT_ID;
}

function initGoogleAuth() {
  if (!window.google?.accounts?.id) {
    window.addEventListener("load", () => {
      setTimeout(initGoogleAuth, 350);
    }, { once: true });
    return;
  }
  try {
    window.google.accounts.id.initialize({
      client_id: getGoogleClientId(),
      callback: handleGoogleCredentialResponse,
      auto_select: false,
      cancel_on_tap_outside: true,
    });
  } catch (err) {
    console.warn("Google GIS init error:", err);
  }
}

function triggerGooglePrompt() {
  initGoogleAuth();
  if (window.google?.accounts?.id) {
    try {
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          const reason = notification.getNotDisplayedReason?.() || notification.getSkippedReason?.() || "";
          console.info("Google One Tap status:", reason);
        }
      });
    } catch (e) {
      console.warn("Prompt error:", e);
    }
  } else {
    showToast("Đang kết nối Google Identity Services...", "info");
  }
}

function loginDemoGoogleUser() {
  const user = {
    id: "demo-google-user-01",
    name: "An Trần (Google)",
    email: "antran.foodie@gmail.com",
    picture: "https://lh3.googleusercontent.com/a/default-user=s96-c",
    loggedAt: new Date().toISOString(),
  };
  state.user = user;
  saveStorage(googleUserKey, user);
  
  // Dùng dữ liệu của user nếu có, nếu chưa có thì nạp 207 quán mặc định
  const userSaved = readStorage(getSavedStorageKey(user), null);
  if (userSaved !== null) {
    state.saved = userSaved;
  } else {
    state.saved = defaultPlaces.map((p) => p.id);
    saveStorage(getSavedStorageKey(user), state.saved);
  }
  refreshPlaces();
  state.modal = null;
  renderApp();
  showToast(`Chào mừng ${state.user.name} đã đăng nhập!`, "success");
}

function handleGoogleCredentialResponse(response) {
  if (!response?.credential) return;
  const payload = parseJwt(response.credential);
  if (payload && payload.email) {
    const user = {
      id: payload.sub,
      name: payload.name || payload.email.split("@")[0],
      email: payload.email,
      picture: payload.picture || "https://lh3.googleusercontent.com/a/default-user=s96-c",
      loggedAt: new Date().toISOString(),
    };
    state.user = user;
    saveStorage(googleUserKey, user);

    // Dùng dữ liệu của user nếu có, nếu chưa có thì nạp 207 quán mặc định
    const userSaved = readStorage(getSavedStorageKey(user), null);
    if (userSaved !== null) {
      state.saved = userSaved;
    } else {
      state.saved = defaultPlaces.map((p) => p.id);
      saveStorage(getSavedStorageKey(user), state.saved);
    }
    refreshPlaces();
    state.modal = null;
    renderApp();
    showToast(`Chào mừng ${state.user.name}!`, "success");
  }
}
window.handleGoogleCredentialResponse = handleGoogleCredentialResponse;

function logoutUser() {
  state.user = null;
  try {
    localStorage.removeItem(googleUserKey);
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect();
    }
  } catch {}

  // Quay về danh sách quán mặc định khi chưa login
  const guestSaved = readStorage(getSavedStorageKey(null), null);
  state.saved = guestSaved !== null ? guestSaved : defaultPlaces.map((p) => p.id);
  refreshPlaces();
  state.modal = null;
  renderApp();
  showToast("Đã đăng xuất, chuyển về danh sách mặc định", "success");
}

function saveGoogleClientId() {
  const input = document.querySelector("#google-client-id-input");
  const val = input?.value.trim();
  if (!val) {
    showToast("Vui lòng dán Client ID từ Google Cloud Console", "error");
    return;
  }
  saveStorage(googleClientIdKey, val);
  initGoogleAuth();
  showToast("Đã lưu Google Client ID!", "success");
  renderModal();
}

function tryMountGoogleButton() {
  const container = document.querySelector("#google-btn-container");
  if (container && window.google?.accounts?.id) {
    try {
      window.google.accounts.id.renderButton(container, {
        theme: "outline",
        size: "large",
        shape: "pill",
        text: "signin_with",
        logo_alignment: "left",
        width: 280,
      });
    } catch (e) {
      console.warn("Mount Google button error:", e);
    }
  }
}

function saveProfileInfo() {
  const nameInput = document.querySelector("#profile-name-input");
  const newName = nameInput?.value.trim();
  if (!newName) {
    showToast("Vui lòng nhập tên hiển thị", "error");
    nameInput?.focus();
    return;
  }

  state.user = {
    ...(state.user || {}),
    id: state.user?.id || "local-user",
    name: newName,
    email: state.user?.email || null,
    picture: state.user?.picture || null,
  };

  saveStorage(googleUserKey, state.user);
  saveLocalState();
  state.modal = null;
  renderApp();
  showToast("Đã cập nhật tên hiển thị!", "success");
}

function renderProfileModal() {
  const isLogged = Boolean(state.user);
  const profileName = state.user?.name || "Eat with me";

  return `
    <div class="modal-backdrop" data-action="close-modal">
      <article class="modal" role="dialog" aria-modal="true" aria-label="Hồ sơ cá nhân" data-modal-card style="max-width:440px;">
        <div class="modal-content" style="padding:26px 22px;">
          ${
            isLogged && state.user?.picture
              ? `
              <div class="google-user-card">
                <img src="${escapeHtml(state.user.picture)}" alt="${escapeHtml(state.user.name)}" />
                <div style="min-width:0;flex:1;">
                  <h2 style="font-size:18px;margin:0 0 2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(state.user.name)}</h2>
                  <p class="muted" style="font-size:12px;margin:0 0 4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(state.user.email || "")}</p>
                  <span class="google-sync-tag">Đã liên kết Google</span>
                </div>
              </div>`
              : `
              <div style="text-align:center;margin-bottom:18px;">
                <div class="avatar green" style="width:64px;height:64px;font-size:22px;margin:0 auto 10px;display:grid;place-items:center;box-shadow:0 6px 18px rgba(0,0,0,0.08);">
                  ${escapeHtml(initials(profileName))}
                </div>
                <h2 style="font-size:20px;margin:0 0 2px;">${escapeHtml(profileName)}</h2>
                <div class="muted" style="font-size:12px;margin-bottom:10px;">Ứng dụng lưu trữ cá nhân (Local-First)</div>
              </div>`
          }

          <div style="background:var(--paper-soft);border:1px solid var(--line);border-radius:15px;padding:14px;margin-bottom:16px;">
            <div class="form-group" style="margin-bottom:10px;">
              <label for="profile-name-input" style="font-size:12px;font-weight:700;">Tên hiển thị</label>
              <input id="profile-name-input" class="form-input" type="text" value="${escapeHtml(state.user?.name || "")}" placeholder="Eat with me" />
            </div>
            <button type="button" class="primary-button" data-action="save-profile-info" style="width:100%;padding:9px;font-size:12.5px;justify-content:center;">
              Lưu tên hiển thị
            </button>
          </div>

          <!-- Google Auth Section -->
          <div style="background:var(--paper-soft);border:1px solid var(--line);border-radius:15px;padding:14px;margin-bottom:16px;text-align:center;">
            <div style="font-size:12px;font-weight:700;margin-bottom:8px;text-align:left;">Tài khoản Google</div>
            ${
              isLogged
                ? `<button type="button" class="primary-button" data-action="logout-user" style="width:100%;justify-content:center;background:var(--coral);border-color:var(--coral);">
                    Đăng xuất tài khoản
                  </button>`
                : `
                <div id="google-btn-container" style="display:flex;justify-content:center;margin-bottom:8px;"></div>
                <button type="button" class="secondary-button" data-action="demo-google-login" style="width:100%;justify-content:center;font-size:12px;">
                  Đăng nhập thử nghiệm
                </button>`
            }
          </div>

          <div style="background:var(--paper-soft);border:1px solid var(--line);border-radius:15px;padding:14px;margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:9px;">
              <span style="font-size:12px;color:var(--ink-muted);">Bộ nhớ thiết bị:</span>
              <span style="font-size:12px;font-weight:700;color:var(--herb);">● Tự động bảo vệ</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:12px;color:var(--ink-muted);">Quán đã lưu:</span>
              <span style="font-size:12px;font-weight:700;">${state.saved.length} quán</span>
            </div>
          </div>

          <div style="display:grid;gap:8px;margin-bottom:14px;">
            <button type="button" class="secondary-button" data-action="export-backup" style="justify-content:center;display:flex;align-items:center;gap:6px;">
              ${icon("share")} Sao lưu dữ liệu ra file (.json)
            </button>
            <label class="secondary-button" style="justify-content:center;display:flex;align-items:center;gap:6px;cursor:pointer;margin:0;">
              ${icon("add")} Phục hồi dữ liệu từ file
              <input id="modal-import-backup-input" type="file" accept=".json,application/json" hidden />
            </label>
          </div>

          <div style="text-align:center;">
            <button type="button" class="text-button" data-action="close-modal" style="font-size:13px;">Đóng</button>
          </div>
        </div>
      </article>
    </div>`;
}

function renderAddPlaceModal() {
  const draft = state.pendingPlaceDraft || {};
  const currentCoords = [
    draft.lat != null ? draft.lat : (mapState.userPosition ? mapState.userPosition[0] : DEFAULT_MAP_CENTER[0]),
    draft.lng != null ? draft.lng : (mapState.userPosition ? mapState.userPosition[1] : DEFAULT_MAP_CENTER[1]),
  ];
  const initialCat = draft.category || "Món Việt";
  const initialPrice = draft.price || "<100k";

  return `
    <div class="modal-backdrop" data-action="close-modal">
      <article class="modal" role="dialog" aria-modal="true" aria-label="Thêm quán ăn mới" data-modal-card style="max-width:500px;">
        <div class="modal-content">
          <div class="eyebrow">Thêm địa điểm vào kho ẩm thực</div>
          <h2>Thêm quán ăn mới</h2>
          <p class="muted">Kết nối trực tiếp API bản đồ để định vị tọa độ và ghim lên bản đồ.</p>

          <form id="add-place-form" onsubmit="event.preventDefault();" style="display:grid;gap:13px;margin-top:14px;">
            <div class="form-group">
              <label for="new-place-name">Tên quán ăn / Địa điểm <span style="color:var(--coral)">*</span></label>
              <input id="new-place-name" class="form-input" type="text" value="${escapeHtml(draft.name || "")}" placeholder="Ví dụ: Phở Hòa Pasteur, Pizza 4P's, Cơm tấm Cali..." required autofocus />
            </div>

            <div class="picker-section">
              <div class="picker-label-row">
                <label>Dạng đồ ăn <span style="color:var(--coral)">*</span></label>
                <span id="selected-category-badge" class="picker-label-badge">Đang chọn: <strong>${escapeHtml(initialCat)}</strong></span>
              </div>
              <input id="new-place-category" type="hidden" value="${escapeHtml(initialCat)}" />
              <div class="category-pill-grid">
                ${FOOD_CATEGORIES.map((cat) => `
                  <button type="button" class="food-select-pill ${cat.name === initialCat ? "selected" : ""}" data-action="pick-food-category" data-val="${cat.name}" style="background:${cat.bg};color:${cat.color};${cat.border ? `border:1px solid ${cat.border};` : ""}">
                    ${escapeHtml(cat.name)}
                  </button>
                `).join("")}
              </div>
            </div>

            <div class="picker-section">
              <div class="picker-label-row">
                <label>Mức giá tiền <span style="color:var(--coral)">*</span></label>
                <span id="selected-price-badge" class="picker-label-badge">Đang chọn: <strong>${escapeHtml(initialPrice)}</strong></span>
              </div>
              <input id="new-place-price" type="hidden" value="${escapeHtml(initialPrice)}" />
              <div class="price-pill-grid">
                ${PRICE_TIERS.map((tier) => `
                  <button type="button" class="food-select-pill ${tier.name === initialPrice ? "selected" : ""}" data-action="pick-price-tier" data-val="${tier.name}" style="background:${tier.bg};color:${tier.color};">
                    ${escapeHtml(tier.name)}
                  </button>
                `).join("")}
              </div>
            </div>

            <div class="form-group geosearch-container">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <label for="new-place-address">Địa chỉ / Tên đường</label>
                <span id="geocode-status-badge">${draft.lat != null ? `<span class="geosearch-status success">✓ Tọa độ: ${draft.lat}, ${draft.lng}</span>` : ""}</span>
              </div>
              <div class="geosearch-input-row">
                <input id="new-place-address" class="form-input" type="text" value="${escapeHtml(draft.address || "")}" placeholder="Ví dụ: 260C Pasteur, Phường 8, Quận 3" style="flex:1;" />
                <button type="button" id="geosearch-btn" class="geosearch-btn" data-action="geocode-address">
                  ${icon("search")} Định vị API
                </button>
              </div>
              <div id="geosearch-results"></div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div class="form-group">
                <label for="new-place-hours">Giờ mở cửa</label>
                <input id="new-place-hours" class="form-input" type="text" value="${escapeHtml(draft.hours || "07:00 – 22:00")}" placeholder="07:00 – 22:00" />
              </div>
              <div class="form-group">
                <label for="new-place-rating">Đánh giá sao</label>
                <input id="new-place-rating" class="form-input" type="text" value="${escapeHtml(draft.rating || "5.0")}" placeholder="5.0" />
              </div>
            </div>

            <div class="form-group" style="padding:12px;background:var(--paper-soft);border-radius:14px;border:1px solid var(--line);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px;">
                <span style="font-size:12px;font-weight:700;color:var(--ink);">Tọa độ GPS ghim trên bản đồ</span>
                <div style="display:flex;gap:8px;">
                  <button type="button" class="text-button" data-action="pick-location-on-map" style="font-size:11px;font-weight:700;color:var(--herb);">
                    📍 Chọn trên bản đồ
                  </button>
                  <button type="button" class="text-button" data-action="use-my-location" style="font-size:11px;">
                    ${icon("compass")} Vị trí hiện tại
                  </button>
                </div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                <input id="new-place-lat" class="form-input" type="number" step="0.00001" value="${currentCoords[0]}" placeholder="Vĩ độ (Lat)" />
                <input id="new-place-lng" class="form-input" type="number" step="0.00001" value="${currentCoords[1]}" placeholder="Kinh độ (Lng)" />
              </div>
            </div>

            <div class="modal-footer" style="margin-top:10px;">
              <button type="button" class="secondary-button" data-action="close-modal">Hủy</button>
              <button type="button" class="primary-button" data-action="submit-new-place">
                ${icon("check")} Lưu quán ăn
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  `;
}

async function triggerGeocodeAddress() {
  const nameInput = document.querySelector("#new-place-name");
  const addressInput = document.querySelector("#new-place-address");
  const btn = document.querySelector("#geosearch-btn");
  const resultsContainer = document.querySelector("#geosearch-results");
  const statusBadge = document.querySelector("#geocode-status-badge");
  const latInput = document.querySelector("#new-place-lat");
  const lngInput = document.querySelector("#new-place-lng");

  const query = addressInput?.value.trim() || nameInput?.value.trim();
  if (!query) {
    showToast("Vui lòng nhập địa chỉ hoặc tên quán để định vị", "info");
    addressInput?.focus();
    return;
  }

  if (btn) {
    btn.classList.add("loading");
    btn.innerHTML = `${icon("search")} Đang tìm…`;
  }
  if (statusBadge) {
    statusBadge.innerHTML = `<span class="geosearch-status info">Đang kết nối API bản đồ…</span>`;
  }

  try {
    const results = await geocodeLocation(query);
    if (results.length > 0) {
      mapState.lastGeocodeResults = results;
      const best = results[0];
      if (latInput) latInput.value = best.lat;
      if (lngInput) lngInput.value = best.lng;
      if (addressInput && (!addressInput.value || addressInput.value.length < 5)) addressInput.value = best.address;
      if (statusBadge) {
        statusBadge.innerHTML = `<span class="geosearch-status success">✓ Đã định vị: ${best.lat}, ${best.lng}</span>`;
      }
      if (resultsContainer) {
        resultsContainer.innerHTML = `
          <div class="geosearch-dropdown">
            ${results.map((r, i) => `
              <button type="button" class="geosearch-item" data-action="select-geocode-item" data-idx="${i}">
                <div class="geosearch-item-title">
                  <span>${escapeHtml(r.name)}</span>
                  <span style="font-size:10px;color:var(--herb);font-weight:600;">${r.lat}, ${r.lng}</span>
                </div>
                <div class="geosearch-item-sub">${escapeHtml(r.address)}</div>
              </button>
            `).join("")}
          </div>
        `;
      }
      showToast(`Đã tìm thấy vị trí chính xác qua API bản đồ!`, "success");
    } else {
      if (statusBadge) {
        statusBadge.innerHTML = `<span class="geosearch-status" style="background:#fee2e2;color:#991b1b;">Không tìm thấy tọa độ cụ thể</span>`;
      }
      if (resultsContainer) resultsContainer.innerHTML = "";
      showToast("Chưa tìm thấy tọa độ chính xác. Bạn có thể nhấn 'Chọn trên bản đồ'.", "info");
    }
  } catch {
    showToast("Lỗi khi kết nối với API bản đồ", "error");
  } finally {
    if (btn) {
      btn.classList.remove("loading");
      btn.innerHTML = `${icon("search")} Định vị API`;
    }
  }
}

function selectGeocodeItem(idx) {
  const item = mapState.lastGeocodeResults?.[idx];
  if (!item) return;
  const addressInput = document.querySelector("#new-place-address");
  const latInput = document.querySelector("#new-place-lat");
  const lngInput = document.querySelector("#new-place-lng");
  const resultsContainer = document.querySelector("#geosearch-results");
  const statusBadge = document.querySelector("#geocode-status-badge");

  if (addressInput) addressInput.value = item.address;
  if (latInput) latInput.value = item.lat;
  if (lngInput) lngInput.value = item.lng;
  if (statusBadge) {
    statusBadge.innerHTML = `<span class="geosearch-status success">✓ Đã chọn: ${item.lat}, ${item.lng}</span>`;
  }
  if (resultsContainer) resultsContainer.innerHTML = "";
  showToast(`Đã áp dụng tọa độ: ${item.lat}, ${item.lng}`, "success");
}

function startPickLocationOnMap() {
  const nameInput = document.querySelector("#new-place-name");
  const categoryInput = document.querySelector("#new-place-category");
  const addressInput = document.querySelector("#new-place-address");
  const priceInput = document.querySelector("#new-place-price");
  const hoursInput = document.querySelector("#new-place-hours");
  const ratingInput = document.querySelector("#new-place-rating");
  const latInput = document.querySelector("#new-place-lat");
  const lngInput = document.querySelector("#new-place-lng");

  state.pendingPlaceDraft = {
    name: nameInput?.value || "",
    category: categoryInput?.value || "Món Việt",
    address: addressInput?.value || "",
    price: priceInput?.value || "<100k",
    hours: hoursInput?.value || "07:00 – 22:00",
    rating: ratingInput?.value || "5.0",
    lat: latInput?.value ? parseFloat(latInput.value) : null,
    lng: lngInput?.value ? parseFloat(lngInput.value) : null,
  };

  state.modal = null;
  renderModal();

  if (state.view !== "explore") {
    state.view = "explore";
    renderApp();
  }

  mapState.isPickingLocation = true;
  showToast("📍 Hãy chạm vào điểm bất kỳ trên bản đồ để chọn vị trí quán", "info");
}

async function onMapClickPickLocation(latlng) {
  mapState.isPickingLocation = false;
  const lat = Number(latlng.lat.toFixed(5));
  const lng = Number(latlng.lng.toFixed(5));

  showToast("Đang định vị địa chỉ từ API bản đồ…", "info");
  const rev = await reverseGeocodeLocation(lat, lng);

  const draft = state.pendingPlaceDraft || {};
  draft.lat = lat;
  draft.lng = lng;
  if (!draft.address || draft.address.length < 3 || draft.address === "Khu vực của bạn") {
    draft.address = rev.formattedAddress;
  }
  state.pendingPlaceDraft = draft;
  state.modal = { type: "add-place" };
  renderModal();
  showToast(`✓ Đã ghim tọa độ: ${lat}, ${lng}`, "success");
}

function submitNewPlace() {
  const nameInput = document.querySelector("#new-place-name");
  const categoryInput = document.querySelector("#new-place-category");
  const addressInput = document.querySelector("#new-place-address");
  const priceInput = document.querySelector("#new-place-price");
  const hoursInput = document.querySelector("#new-place-hours");
  const ratingInput = document.querySelector("#new-place-rating");
  const latInput = document.querySelector("#new-place-lat");
  const lngInput = document.querySelector("#new-place-lng");

  const name = nameInput?.value.trim();
  if (!name) {
    showToast("Vui lòng nhập tên quán ăn", "error");
    nameInput?.focus();
    return;
  }

  const category = categoryInput?.value.trim() || "Món Việt";
  const address = addressInput?.value.trim() || "Khu vực của bạn";
  const price = priceInput?.value.trim() || "<100k";
  const hours = hoursInput?.value.trim() || "07:00 – 22:00";
  const rating = ratingInput?.value.trim() || "5.0";

  let lat = parseFloat(latInput?.value);
  let lng = parseFloat(lngInput?.value);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    const fallback = mapState.userPosition || DEFAULT_MAP_CENTER;
    lat = fallback[0];
    lng = fallback[1];
  }

  const lowerCat = category.toLowerCase();
  let color = "bun";
  if (lowerCat.includes("cafe") || lowerCat.includes("bánh") || lowerCat.includes("ice cream")) color = "cafe";
  else if (lowerCat.includes("pizza") || lowerCat.includes("món âu") || lowerCat.includes("dining")) color = "taco";
  else if (lowerCat.includes("bún") || lowerCat.includes("phở") || lowerCat.includes("món việt")) color = "bun";
  else if (lowerCat.includes("nướng") || lowerCat.includes("lẩu") || lowerCat.includes("grill") || lowerCat.includes("hotpot")) color = "taco";
  else if (lowerCat.includes("món nhật") || lowerCat.includes("món hàn") || lowerCat.includes("món trung")) color = "pho";

  const newPlace = {
    id: `custom-${Date.now()}`,
    name,
    category,
    price,
    address,
    distance: "Vừa thêm",
    status: "open",
    closes: hours.includes("–") ? hours.split("–")[1].trim() : "22:00",
    rating,
    color,
    pin: "coral",
    lat,
    lng,
    description: `Quán ${name} (${category} · ${price}) do bạn lưu vào danh sách.`,
    hours,
    isCustom: true,
  };

  const existingCustom = readStorage(getCustomPlacesKey(state.user), []);
  existingCustom.unshift(newPlace);
  saveStorage(getCustomPlacesKey(state.user), existingCustom);

  places = [newPlace, ...places.filter((p) => p.id !== newPlace.id)];

  if (!state.saved.includes(newPlace.id)) {
    state.saved.unshift(newPlace.id);
  }

  saveLocalState();
  state.pendingPlaceDraft = null;
  state.modal = null;
  renderModal();

  if (mapState.instance && window.L) {
    const iconForSaved = savedMarkerIcon(window.L);
    const marker = window.L.marker([newPlace.lat, newPlace.lng], { icon: iconForSaved })
      .addTo(mapState.instance)
      .bindPopup(mapPopupHtml(newPlace), { maxWidth: 230 });
    mapState.savedMarkers.set(newPlace.id, marker);
    mapState.instance.setView([newPlace.lat, newPlace.lng], MAP_LOCATE_ZOOM, { animate: true });
    marker.openPopup();
  }

  showToast(`Đã thêm quán “${name}” (${category} · ${price})!`, "success");
  renderApp();
}

function renderModal() {
  const root = document.querySelector("#modal-root");
  if (!state.modal) { root.innerHTML = ""; return; }
  if (state.modal.type === "place") root.innerHTML = renderPlaceModal(state.modal.placeId);
  if (state.modal.type === "share") root.innerHTML = renderShareModal(state.modal.placeId);
  if (state.modal.type === "add-place") root.innerHTML = renderAddPlaceModal();
  if (state.modal.type === "profile") {
    root.innerHTML = renderProfileModal();
    tryMountGoogleButton();
  }
  bindModalEvents();
}

function renderPlaceModal(placeId) {
  const place = getPlace(placeId);
  if (!place) return "";
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <article class="modal" role="dialog" aria-modal="true" aria-label="Chi tiết ${escapeHtml(place.name)}" data-modal-card>
        ${placePhoto(place).replace('place-photo', `modal-hero ${place.color}`)}
        <div class="modal-content">
          <div class="eyebrow" style="display:flex;gap:6px;align-items:center;margin-bottom:8px;flex-wrap:wrap;">
            ${categoryBadge(place.category)}
            ${priceBadge(place.price || "<100k")}
          </div>
          <h2>${escapeHtml(place.name)}</h2>
          <p class="muted">${escapeHtml(place.address)}</p>
          <div class="detail-grid">
            <div class="detail-item"><span>Trạng thái hôm nay</span><strong>${place.status === "open" ? `Đang mở · đóng lúc ${escapeHtml(place.closes)}` : `Đã đóng · ${escapeHtml(place.closes)}`}</strong></div>
            <div class="detail-item"><span>Đánh giá cộng đồng</span><strong>★ ${escapeHtml(place.rating)} · ${escapeHtml(place.distance)}</strong></div>
            <div class="detail-item"><span>Giờ phục vụ</span><strong>${escapeHtml(place.hours)}</strong></div>
          </div>
          <p class="muted" style="font-size:13px">${escapeHtml(place.description)}</p>
          <div class="modal-footer" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <a href="https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}" target="_blank" rel="noopener noreferrer" class="secondary-button" style="display:flex;align-items:center;justify-content:center;gap:6px;text-decoration:none;color:inherit;font-weight:700;">
              ${icon("compass")} Chỉ đường
            </a>
            <button class="secondary-button" data-action="share-place" data-place-id="${place.id}">${icon("share")} Chia sẻ</button>
            <button class="${isSaved(place.id) ? "secondary-button" : "primary-button"}" data-action="toggle-save" data-place-id="${place.id}" style="grid-column:1 / -1;${isSaved(place.id) ? "color:#c53030;border-color:#fca5a5;" : ""}">
              ${isSaved(place.id) ? `${trashIconSvg()} Xóa khỏi danh sách` : `${icon("bookmark")} Lưu quán này`}
            </button>
          </div>
        </div>
      </article>
    </div>`;
}

function renderShareModal(placeId) {
  const place = getPlace(placeId);
  if (!place) return "";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.address}`)}`;
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <article class="modal" role="dialog" aria-modal="true" aria-label="Chia sẻ ${escapeHtml(place.name)}" data-modal-card style="max-width:440px;">
        <div class="modal-content">
          <div class="eyebrow">Chia sẻ địa điểm</div>
          <h2>${escapeHtml(place.name)}</h2>
          <p class="muted">${escapeHtml(place.address)} (${escapeHtml(place.category)} · ${escapeHtml(place.price || "<100k")})</p>
          
          <div style="display:grid;gap:10px;margin:18px 0;">
            <button class="primary-button" data-action="copy-place-info" data-place-id="${place.id}" style="justify-content:center;display:flex;align-items:center;gap:8px;">
              ${icon("share")} Sao chép tên và địa chỉ
            </button>
            <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="secondary-button" style="justify-content:center;display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit;">
              ${icon("compass")} Mở trên Google Maps
            </a>
            ${
              navigator.share
                ? `<button class="secondary-button" data-action="native-share-place" data-place-id="${place.id}" style="justify-content:center;display:flex;align-items:center;gap:8px;">
                    ${icon("share")} Gửi qua ứng dụng khác
                  </button>`
                : ""
            }
          </div>

          <div class="modal-footer">
            <button class="secondary-button" data-action="close-modal" style="width:100%;">Đóng</button>
          </div>
        </div>
      </article>
    </div>`;
}

function copyPlaceInfo(placeId) {
  const place = getPlace(placeId);
  if (!place) return;
  const text = `${place.name} - ${place.address}`;

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Đã sao chép: ${text}`, "success");
    }).catch(() => {
      showToast("Không thể sao chép tự động", "error");
    });
  } else {
    showToast(`Đã chọn: ${place.name}`, "info");
  }
}

async function nativeSharePlace(placeId) {
  const place = getPlace(placeId);
  if (!place || !navigator.share) return;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.address}`)}`;
  try {
    await navigator.share({
      title: place.name,
      text: `${place.name} - ${place.address}`,
      url: mapsUrl,
    });
  } catch {
    /* User cancelled share */
  }
}

function bindAppEvents() {
  const app = document.querySelector("#app");
  app.querySelector("#global-search")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    if (state.view !== "explore") state.view = "explore";
    renderApp();
    const input = document.querySelector("#global-search");
    input?.focus();
    input?.setSelectionRange(state.query.length, state.query.length);
  });
  app.querySelector("#import-backup-input")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importBackupFile(file);
  });
  document.addEventListener("click", (event) => {
    if (state.openDropdown && !event.target.closest(".gsheet-dropdown-container")) {
      state.openDropdown = null;
      renderApp();
    }
  });
  app.addEventListener("click", handleAction);
}

function bindModalEvents() {
  document.querySelector("#modal-root")?.addEventListener("click", handleAction);
  document.querySelector("#modal-import-backup-input")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) {
      importBackupFile(file);
      state.modal = null;
      renderApp();
    }
  });
}

function handleAction(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "close-modal" && target.matches(".modal-backdrop")) {
    if (event.target.closest("[data-modal-card]")) return;
  }
  switch (action) {
    case "navigate": state.view = target.dataset.view; state.query = ""; renderApp(); break;
    case "open-profile": state.modal = { type: "profile" }; renderModal(); break;
    case "save-profile-info": saveProfileInfo(); break;
    case "focus-search": document.querySelector("#global-search")?.focus(); break;
    case "clear-search": state.query = ""; renderApp(); break;
    case "open-place": state.modal = { type: "place", placeId: target.dataset.placeId }; renderModal(); break;
    case "open-add-place": state.modal = { type: "add-place" }; renderModal(); break;
    case "submit-new-place": submitNewPlace(); break;
    case "geocode-address": triggerGeocodeAddress(); break;
    case "select-geocode-item": selectGeocodeItem(Number(target.dataset.idx)); break;
    case "pick-location-on-map": startPickLocationOnMap(); break;
    case "export-backup": exportBackupData(); break;
    case "pick-food-category": {
      const catInput = document.querySelector("#new-place-category");
      const badge = document.querySelector("#selected-category-badge");
      if (catInput) catInput.value = target.dataset.val;
      if (badge) badge.innerHTML = `Đang chọn: <strong>${escapeHtml(target.dataset.val)}</strong>`;
      target.parentElement?.querySelectorAll(".food-select-pill").forEach((btn) => btn.classList.remove("selected"));
      target.classList.add("selected");
      break;
    }
    case "pick-price-tier": {
      const priceInput = document.querySelector("#new-place-price");
      const badge = document.querySelector("#selected-price-badge");
      if (priceInput) priceInput.value = target.dataset.val;
      if (badge) badge.innerHTML = `Đang chọn: <strong>${escapeHtml(target.dataset.val)}</strong>`;
      target.parentElement?.querySelectorAll(".food-select-pill").forEach((btn) => btn.classList.remove("selected"));
      target.classList.add("selected");
      break;
    }
    case "use-my-location": {
      const latIn = document.querySelector("#new-place-lat");
      const lngIn = document.querySelector("#new-place-lng");
      if (mapState.userPosition && latIn && lngIn) {
        latIn.value = mapState.userPosition[0].toFixed(5);
        lngIn.value = mapState.userPosition[1].toFixed(5);
        showToast("Đã lấy tọa độ vị trí hiện tại của bạn", "success");
      } else {
        locateDevice().then(() => {
          if (mapState.userPosition && latIn && lngIn) {
            latIn.value = mapState.userPosition[0].toFixed(5);
            lngIn.value = mapState.userPosition[1].toFixed(5);
            showToast("Đã định vị và cập nhật tọa độ", "success");
          }
        });
      }
      break;
    }
    case "locate-device": initInteractiveMap().then(() => locateDevice()); break;
    case "fit-saved": {
      const saved = places.filter((p) => isSaved(p.id));
      if (saved.length && mapState.instance && window.L) {
        const bounds = window.L.latLngBounds(saved.map((p) => [p.lat, p.lng]));
        mapState.instance.fitBounds(bounds, { padding: [44, 44], maxZoom: 15 });
        showToast("Đã căn chỉnh theo các quán đã lưu", "success");
      }
      break;
    }
    case "toggle-dropdown": {
      const dd = target.dataset.dropdown;
      state.openDropdown = state.openDropdown === dd ? null : dd;
      renderApp();
      break;
    }
    case "select-category": {
      state.categoryFilter = target.dataset.value;
      state.openDropdown = null;
      renderApp();
      break;
    }
    case "select-price": {
      state.priceFilter = target.dataset.value;
      state.openDropdown = null;
      renderApp();
      break;
    }
    case "share-place": state.modal = { type: "share", placeId: target.dataset.placeId }; renderModal(); break;
    case "copy-place-info": copyPlaceInfo(target.dataset.placeId); break;
    case "native-share-place": nativeSharePlace(target.dataset.placeId); break;
    case "toggle-save": toggleSave(target.dataset.placeId); break;
    case "close-modal": state.modal = null; renderModal(); break;
    case "reset-saved-filters": {
      state.categoryFilter = "all";
      state.priceFilter = "all";
      state.openDropdown = null;
      renderApp();
      break;
    }
    case "trigger-google-login": triggerGooglePrompt(); break;
    case "demo-google-login": loginDemoGoogleUser(); break;
    case "logout-user": logoutUser(); break;
    case "save-google-client-id": saveGoogleClientId(); break;
    case "install-app": installApp(); break;
    default: break;
  }
}

function toggleSave(placeId) {
  const place = getPlace(placeId);
  if (!place) return;
  if (isSaved(placeId)) {
    state.saved = state.saved.filter((id) => id !== placeId);
    showToast(`Đã bỏ lưu ${place.name}`, "success");
  } else {
    state.saved = [...state.saved, placeId];
    showToast(`Đã lưu ${place.name}`, "success");
  }
  saveLocalState();
  if (state.modal?.type === "place") renderModal();
  renderApp();
}

async function installApp() {
  if (!window.deferredInstallPrompt) {
    showToast("Trên iPhone: mở Chia sẻ rồi chọn Thêm vào màn hình chính", "success");
    return;
  }
  window.deferredInstallPrompt.prompt();
  await window.deferredInstallPrompt.userChoice;
  window.deferredInstallPrompt = null;
  state.installAvailable = false;
  renderApp();
}

function showToast(message, type = "success") {
  const root = document.querySelector("#toast-root");
  clearTimeout(state.toastTimer);
  root.innerHTML = `<div class="toast ${type}">${escapeHtml(message)}</div>`;
  state.toastTimer = setTimeout(() => { root.innerHTML = ""; }, 2600);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.modal) { state.modal = null; renderModal(); }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  window.deferredInstallPrompt = event;
  state.installAvailable = true;
  renderApp();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => undefined);
  });
}

loadLeaflet().catch(() => undefined);
loadNativeGeolocation().catch(() => undefined);
initGoogleAuth();
renderApp();
startLocationPrefetch();
