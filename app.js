const ICONS = {
  compass: "⌖",
  collections: "▦",
  friends: "♧",
  inbox: "✉",
  search: "⌕",
  bell: "◌",
  add: "+",
  share: "↗",
  bookmark: "♡",
  bookmarkFill: "♥",
  more: "⋯",
  close: "×",
  arrow: "→",
  check: "✓",
};

const places = [
  {
    id: "bun-cha-huong-lien",
    lat: 21.0209,
    lng: 105.8490,
    name: "Bún chả Hương Liên",
    category: "Món Việt · bún chả",
    address: "24 Lê Văn Hưu, Hai Bà Trưng",
    distance: "1,2 km",
    status: "open",
    closes: "22:00",
    rating: "4.6",
    color: "bun",
    pin: "p1",
    description: "Một bữa trưa gọn gàng, thơm mùi than nướng và luôn đáng để rủ thêm một người bạn.",
    hours: "10:00 – 22:00",
  },
  {
    id: "pizza-4ps-trang-tien",
    lat: 21.0258,
    lng: 105.8540,
    name: "Pizza 4P’s Tràng Tiền",
    category: "Pizza · Ý hiện đại",
    address: "43 Tràng Tiền, Hoàn Kiếm",
    distance: "2,4 km",
    status: "open",
    closes: "22:30",
    rating: "4.8",
    color: "taco",
    pin: "p2",
    description: "Bánh pizza lên men tự nhiên, phô mai kéo sợi và một góc ban công nhìn ra phố.",
    hours: "11:00 – 22:30",
  },
  {
    id: "lac-cafe",
    lat: 21.0252,
    lng: 105.8546,
    name: "Lạc Cà Phê",
    category: "Cà phê · yên tĩnh",
    address: "12 Ngõ Tràng Tiền, Hoàn Kiếm",
    distance: "2,7 km",
    status: "closed",
    closes: "Mở lại 07:30",
    rating: "4.5",
    color: "cafe",
    pin: "p3",
    description: "Một chiếc bàn bên cửa sổ, cà phê rang vừa và đủ yên để viết vài dòng.",
    hours: "07:30 – 21:30",
  },
  {
    id: "quan-an-ngon",
    lat: 21.0243,
    lng: 105.8419,
    name: "Quán Ăn Ngon",
    category: "Món Việt · gia đình",
    address: "18 Phan Bội Châu, Hoàn Kiếm",
    distance: "3,1 km",
    status: "open",
    closes: "21:45",
    rating: "4.4",
    color: "bun",
    pin: "p4",
    description: "Thực đơn nhiều vùng miền trong một không gian sân vườn dễ ngồi lâu.",
    hours: "09:00 – 21:45",
  },
  {
    id: "bep-me-in",
    lat: 21.0290,
    lng: 105.8540,
    name: "Bếp Mẹ Ỉn",
    category: "Món Việt · cơm nhà",
    address: "136 Hàng Trống, Hoàn Kiếm",
    distance: "2,0 km",
    status: "open",
    closes: "22:00",
    rating: "4.7",
    color: "taco",
    pin: "p5",
    description: "Mâm cơm nhà miền Nam, nhiều rau thơm và phần ăn vừa đủ để gọi thêm món.",
    hours: "10:30 – 22:00",
  },
];

const friends = [
  { id: "mai", name: "Mai Anh", initials: "MA", caption: "đã lưu 18 quán", color: "green" },
  { id: "quan", name: "Quân Lê", initials: "QL", caption: "đã lưu 9 quán", color: "" },
  { id: "linh", name: "Linh Nguyễn", initials: "LN", caption: "đã lưu 24 quán", color: "green" },
  { id: "minh", name: "Minh Phạm", initials: "MP", caption: "đã lưu 7 quán", color: "" },
];

const activities = [
  { friend: friends[0], place: places[1], time: "12 phút trước", text: "đã lưu" },
  { friend: friends[1], place: places[2], time: "1 giờ trước", text: "đã chia sẻ" },
  { friend: friends[2], place: places[0], time: "hôm qua", text: "đã lưu" },
];

const initialSaved = [places[0].id, places[2].id];
const storageKey = "eatwithme.saved.v1";
const notesKey = "eatwithme.notes.v1";

const state = {
  view: "explore",
  query: "",
  saved: readStorage(storageKey, initialSaved),
  notes: readStorage(notesKey, {}),
  photoPreviews: {},
  selectedCollection: "all",
  savedFilter: "all",
  modal: null,
  toastTimer: null,
  selectedShareFriends: new Set(),
  installAvailable: false,
  collections: [
    { id: "all", name: "Tất cả địa điểm", count: 2 },
    { id: "want", name: "Muốn thử", count: 1 },
    { id: "visited", name: "Đã ăn rồi", count: 1 },
  ],
};

const DEFAULT_MAP_CENTER = [21.0278, 105.8342];
const MAP_TILE_URL = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}";
const MAP_LABEL_TILE_URL = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}";
const MAP_TILE_ATTRIBUTION = "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ";
const FAST_LOCATION_OPTIONS = {
  enableHighAccuracy: false,
  timeout: 2500,
  maximumAge: 900000,
};
const mapState = {
  instance: null,
  userMarker: null,
  userPosition: null,
  savedMarkers: new Map(),
  leafletPromise: null,
  hasLocatedUser: false,
  tilesLoaded: false,
  tileCheckTimer: null,
};

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* demo mode */ }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name) { return `<span aria-hidden="true">${ICONS[name] || "•"}</span>`; }
function getPlace(id) { return places.find((place) => place.id === id); }
function isSaved(id) { return state.saved.includes(id); }
function initials(name) { return name.split(" ").map((word) => word[0]).slice(-2).join("").toUpperCase(); }

function avatar(person, extra = "") {
  return `<span class="avatar ${person.color || ""} ${extra}" aria-hidden="true">${escapeHtml(person.initials || initials(person.name))}</span>`;
}

function statusLabel(place) {
  return place.status === "open"
    ? `<span class="status">Đang mở · đóng ${escapeHtml(place.closes)}</span>`
    : `<span class="status closed">Đã đóng · ${escapeHtml(place.closes)}</span>`;
}

function placePhoto(place) {
  return `<div class="place-photo ${place.color}" aria-hidden="true"></div>`;
}

function placeCard(place, { compact = false } = {}) {
  return `
    <article class="place-card ${compact ? "compact" : ""}" data-place-id="${place.id}">
      ${placePhoto(place)}
      <div class="place-copy">
        <h3>${escapeHtml(place.name)}</h3>
        <p>${escapeHtml(place.category)} · ${escapeHtml(place.distance)}</p>
        ${statusLabel(place)}
      </div>
      <div class="place-actions">
        <button class="round-button ${isSaved(place.id) ? "saved" : ""}" data-action="toggle-save" data-place-id="${place.id}" aria-label="${isSaved(place.id) ? "Bỏ lưu" : "Lưu"} ${escapeHtml(place.name)}">${icon(isSaved(place.id) ? "bookmarkFill" : "bookmark")}</button>
        <button class="round-button" data-action="share-place" data-place-id="${place.id}" aria-label="Chia sẻ ${escapeHtml(place.name)}">${icon("share")}</button>
      </div>
    </article>`;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="mobile-brand">Eat<span>With</span>Me</div>
      <label class="search-shell" aria-label="Tìm quán ăn">
        <span class="icon">${icon("search")}</span>
        <input id="global-search" class="search-input" type="search" value="${escapeHtml(state.query)}" placeholder="Tìm quán, món ăn hoặc khu vực..." autocomplete="off" />
      </label>
      <div class="top-actions">
        ${state.installAvailable ? `<button class="install-button" data-action="install-app">Cài app</button>` : ""}
        <button class="icon-button" data-action="open-inbox" aria-label="Mở thông báo">${icon("bell")}<span class="notification-dot"></span></button>
        <div class="avatar green" aria-label="Trang cá nhân của An">AN</div>
      </div>
    </header>`;
}

function renderSidebar() {
  const nav = [
    ["explore", "compass", "Khám phá"],
    ["saved", "collections", "Bộ sưu tập"],
    ["friends", "friends", "Bạn bè"],
    ["inbox", "inbox", "Hộp thư"],
  ];
  return `
    <aside class="sidebar">
      <div class="brand"><div class="brand-mark">♨</div><div class="brand-name">Eat<span>With</span>Me</div></div>
      <div class="nav-label">Không gian của bạn</div>
      <nav class="nav" aria-label="Điều hướng chính">
        ${nav.map(([view, iconName, label]) => `<button class="nav-button ${state.view === view ? "active" : ""}" data-action="navigate" data-view="${view}"><span class="icon">${icon(iconName)}</span><span>${label}</span></button>`).join("")}
      </nav>
      <div class="sidebar-footer"><div class="profile-chip">${avatar({ initials: "AN", color: "green" })}<div class="profile-copy"><div class="profile-name">An Trần</div><div class="profile-caption">Hà Nội · foodie chậm</div></div></div></div>
    </aside>`;
}

function renderMobileTabbar() {
  const nav = [
    ["explore", "compass", "Khám phá"],
    ["saved", "collections", "Đã lưu"],
    ["friends", "friends", "Bạn bè"],
    ["inbox", "inbox", "Hộp thư"],
  ];
  return `<nav class="mobile-tabbar" aria-label="Điều hướng trên điện thoại">${nav.map(([view, iconName, label]) => `<button class="mobile-tab ${state.view === view ? "active" : ""}" data-action="navigate" data-view="${view}"><span class="mobile-tab-icon">${icon(iconName)}</span><span>${label}</span></button>`).join("")}</nav>`;
}

function renderHero() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">Hôm nay ăn gì?</div>
        <h1>Đi tìm một nơi<br /><em>đáng nhớ.</em></h1>
        <p>Gom những quán bạn yêu, những món bạn muốn thử và những lời rủ rê không nên bỏ lỡ.</p>
        <div class="hero-actions"><button class="primary-button" data-action="focus-search">Tìm quán gần bạn ${icon("arrow")}</button><button class="secondary-button" data-action="navigate" data-view="saved">Mở bộ sưu tập</button></div>
      </div>
      <div class="hero-aside"><div class="eyebrow">Bản đồ bạn bè</div><h3>Mai vừa lưu một chỗ hẹn cuối tuần.</h3><p>Khám phá những nơi đang được nhóm bạn của bạn nhắc đến nhiều nhất.</p><div class="mini-avatars">${friends.slice(0, 3).map((friend) => avatar(friend)).join("")}<span>+ 2 người bạn</span></div></div>
    </section>`;
}

function renderStats() {
  return `<section class="stat-row"><div class="stat-card"><div><div class="stat-value">${state.saved.length}</div><div class="stat-label">quán đã lưu</div></div><div class="stat-trend">+2 tháng này</div></div><div class="stat-card"><div><div class="stat-value">4</div><div class="stat-label">người bạn</div></div><div class="stat-trend">+1 mới</div></div><div class="stat-card"><div><div class="stat-value">7</div><div class="stat-label">lời rủ rê</div></div><div class="stat-trend">đang chờ bạn</div></div></section>`;
}

function renderMapFallback() {
  const savedPlaces = places.filter((place) => isSaved(place.id));
  return `<div id="map-fallback" class="map-fallback hidden"><div class="map-surface">${savedPlaces.map((place) => `<button class="map-pin ${place.pin}" data-action="open-place" data-place-id="${place.id}" aria-label="Mở ${escapeHtml(place.name)}"><span>●</span></button>`).join("")}<span class="map-label one">Hai Bà Trưng</span><span class="map-label two">Hoàn Kiếm</span><span class="map-label three">Tràng Tiền</span><span class="map-label four">Phan Bội Châu</span></div></div>`;
}

// This definition intentionally sits after the original mock-map function.
// Function declarations are hoisted; the latest one is used by renderExplore.
function renderMap() {
  const savedCount = places.filter((place) => isSaved(place.id)).length;
  return `<section class="panel map-panel" data-map-shell><div class="map-toolbar"><button class="map-chip active">Đã lưu · ${savedCount}</button><button class="map-chip map-locate-chip" data-action="locate-device">${icon("compass")} Định vị tôi</button></div><div id="leaflet-map" class="leaflet-map" aria-label="Bản đồ các quán đã lưu"></div>${renderMapFallback()}<div id="map-location-caption" class="map-location-caption">Đang chuẩn bị bản đồ tương tác…</div><div class="map-legend"><span class="legend-dot"></span>Quán đã lưu <span class="legend-dot herb"></span>Vị trí của bạn</div></section>`;
}

function renderActivity() {
  return `<section class="panel"><div class="panel-header"><div><h2>Bạn bè đang ăn gì</h2><p>Những gợi ý mới nhất từ nhóm của bạn</p></div><button class="text-button" data-action="navigate" data-view="friends">Xem tất cả ${icon("arrow")}</button></div><div class="friend-feed">${activities.map((activity) => `<div class="friend-card">${avatar(activity.friend)}<div class="friend-text"><strong>${escapeHtml(activity.friend.name)}</strong> ${activity.text} <strong>${escapeHtml(activity.place.name)}</strong><div class="friend-meta">${escapeHtml(activity.time)} · ${escapeHtml(activity.place.category)}</div></div>${placePhoto(activity.place).replace('place-photo', 'friend-thumb')}</div>`).join("")}</div></section>`;
}

function renderSearchPanel() {
  const query = state.query.trim().toLowerCase();
  if (!query) return "";
  const results = places.filter((place) => `${place.name} ${place.category} ${place.address}`.toLowerCase().includes(query));
  return `<section class="panel" style="margin-bottom:22px"><div class="panel-header"><div><h2>Kết quả gần bạn</h2><p>${results.length ? `${results.length} địa điểm phù hợp với “${escapeHtml(state.query)}”` : "Thử tên món, tên quán hoặc một khu vực khác."}</p></div><button class="text-button" data-action="clear-search">Xóa tìm kiếm</button></div>${results.length ? `<div class="place-list">${results.map((place) => placeCard(place, { compact: true })).join("")}</div>` : `<div class="empty-state"><div class="empty-mark">⌕</div><h3>Chưa thấy quán này</h3><p>EatWithMe sẽ gợi ý thêm khi bạn kết nối Google Places API.</p></div>`}</section>`;
}

function renderExplore() {
  return `${renderHero()}${renderSearchPanel()}${renderStats()}<section class="content-grid">${renderMap()}${renderActivity()}</section>`;
}

function renderCollections() {
  return `<div class="collection-list">${state.collections.map((collection) => `<button class="collection-item ${state.selectedCollection === collection.id ? "active" : ""}" data-action="select-collection" data-collection-id="${collection.id}"><span class="collection-name">${escapeHtml(collection.name)}</span><span class="collection-count">${collection.id === "all" ? state.saved.length : collection.count} địa điểm</span></button>`).join("")}<button class="collection-add" data-action="new-collection">${icon("add")} Tạo collection</button></div>`;
}

function renderSaved() {
  const savedPlaces = places.filter((place) => isSaved(place.id));
  const filtered = state.savedFilter === "open" ? savedPlaces.filter((place) => place.status === "open") : savedPlaces;
  return `<div class="page-title-row"><div><div class="eyebrow">Kho lưu trữ của An</div><h1>Bộ sưu tập</h1><p>Những nơi bạn muốn quay lại, hoặc chưa kịp ghé lần đầu.</p></div><button class="primary-button" data-action="new-collection">${icon("add")} Tạo collection</button></div><div class="filter-row"><button class="filter ${state.savedFilter === "all" ? "active" : ""}" data-action="saved-filter" data-filter="all">Tất cả</button><button class="filter ${state.savedFilter === "open" ? "active" : ""}" data-action="saved-filter" data-filter="open">Đang mở</button><button class="filter" data-action="saved-filter" data-filter="friends">Bạn bè đã lưu</button></div><div class="saved-layout"><section>${renderCollections()}</section><section class="panel"><div class="panel-header"><div><h2>${state.selectedCollection === "all" ? "Tất cả địa điểm" : "Những nơi nên ghé"}</h2><p>${filtered.length} quán trong bộ sưu tập</p></div><button class="text-button" data-action="focus-search">+ Thêm địa điểm</button></div>${filtered.length ? `<div class="place-list">${filtered.map((place) => placeCard(place)).join("")}</div>` : `<div class="empty-state"><div class="empty-mark">♡</div><h3>Bộ sưu tập đang trống</h3><p>Hãy lưu một địa điểm từ màn hình Khám phá.</p></div>`}</section></div>`;
}

function renderFriends() {
  return `<div class="page-title-row"><div><div class="eyebrow">Những người cùng khẩu vị</div><h1>Bạn bè</h1><p>Chia sẻ một quán hay cả một buổi hẹn.</p></div><button class="primary-button" data-action="invite-friend">${icon("add")} Thêm bạn</button></div><div class="friends-layout"><section class="panel"><div class="panel-header"><div><h2>Nhóm của bạn</h2><p>4 người bạn đang kết nối</p></div><button class="text-button" data-action="invite-friend">Mời bằng link ${icon("share")}</button></div><div class="friend-list-large">${friends.map((friend) => `<div class="person-row">${avatar(friend)}<div class="person-copy"><strong>${escapeHtml(friend.name)}</strong><span>${escapeHtml(friend.caption)}</span></div><button class="secondary-button" data-action="view-friend" data-friend-id="${friend.id}">Xem quán</button></div>`).join("")}</div></section><aside class="invite-card"><div class="eyebrow" style="color:#ffd5c4">Rủ thêm một người</div><h3>Quán ngon hơn khi có người để tag.</h3><p>Gửi lời mời, chia sẻ một list và hẹn ngày đi ăn.</p><button class="secondary-button" data-action="invite-friend">Sao chép link mời ${icon("share")}</button></aside></div>`;
}

function renderInbox() {
  const notifications = [
    { person: friends[0], title: "Mai Anh đã chia sẻ một quán với bạn", body: "Pizza 4P’s Tràng Tiền · 12 phút trước", unread: true, placeId: places[1].id },
    { person: friends[1], title: "Quân Lê đã gửi lời mời kết bạn", body: "1 giờ trước", unread: true },
    { person: friends[2], title: "Linh Nguyễn vừa lưu cùng một quán", body: "Bún chả Hương Liên · hôm qua", unread: false, placeId: places[0].id },
  ];
  return `<div class="page-title-row"><div><div class="eyebrow">Bạn không bỏ lỡ gì cả</div><h1>Hộp thư</h1><p>Lời mời, lời rủ rê và những địa điểm được gửi đến bạn.</p></div><button class="secondary-button" data-action="mark-read">Đánh dấu đã đọc</button></div><section class="panel"><div class="inbox-list">${notifications.map((item) => `<div class="notification ${item.unread ? "unread" : ""}">${avatar(item.person)}<div><p><strong>${escapeHtml(item.title)}</strong></p><small>${escapeHtml(item.body)}</small></div>${item.unread ? '<span class="dot"></span>' : ''}${item.placeId ? `<button class="round-button" data-action="open-place" data-place-id="${item.placeId}" aria-label="Mở địa điểm">${icon("arrow")}</button>` : ""}</div>`).join("")}</div></section>`;
}

function renderMain() {
  const pages = { explore: renderExplore, saved: renderSaved, friends: renderFriends, inbox: renderInbox };
  return pages[state.view]();
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
    if (!document.querySelector("link[data-leaflet-css]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.dataset.leafletCss = "true";
      document.head.appendChild(link);
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

function userMarkerIcon(L) {
  return L.divIcon({
    className: "eatwithme-marker-wrap",
    html: '<span class="eatwithme-marker user-marker"><span></span></span>',
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

  const map = L.map(element, { zoomControl: false, preferCanvas: true }).setView(DEFAULT_MAP_CENTER, 13);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  const tiles = L.tileLayer(MAP_TILE_URL, {
    maxZoom: 19,
    attribution: MAP_TILE_ATTRIBUTION,
  }).addTo(map);
  L.tileLayer(MAP_LABEL_TILE_URL, {
    maxZoom: 19,
    opacity: 0.92,
  }).addTo(map);
  tiles.once("load", () => {
    mapState.tilesLoaded = true;
    if (mapState.tileCheckTimer) window.clearTimeout(mapState.tileCheckTimer);
  });

  const saved = places.filter((place) => isSaved(place.id));
  const iconForSaved = savedMarkerIcon(L);
  for (const place of saved) {
    const marker = L.marker([place.lat, place.lng], { icon: iconForSaved })
      .addTo(map)
      .bindPopup(mapPopupHtml(place), { maxWidth: 230 });
    mapState.savedMarkers.set(place.id, marker);
  }

  if (saved.length > 1) {
    const bounds = L.latLngBounds(saved.map((place) => [place.lat, place.lng]));
    map.fitBounds(bounds, { padding: [44, 44], maxZoom: 14 });
  } else if (saved.length === 1) {
    map.setView([saved[0].lat, saved[0].lng], 14);
  }

  mapState.instance = map;
  if (mapState.userPosition) {
    mapState.userMarker = L.marker(mapState.userPosition, { icon: userMarkerIcon(L) }).addTo(map);
  } else {
    mapState.userMarker = null;
  }
  updateMapCaption(saved.length ? `${saved.length} quán đã lưu · chạm marker để xem chi tiết` : "Bạn chưa lưu quán nào");
  mapState.tileCheckTimer = window.setTimeout(() => {
    if (mapState.instance === map && !mapState.tilesLoaded) {
      showMapFallback("Không tải được nền bản đồ · đang dùng bản đồ dự phòng");
    }
  }, 5000);
  window.setTimeout(() => map.invalidateSize(), 50);
  return map;
}

function locateDevice({ silent = false } = {}) {
  if (!mapState.instance) return;
  if (!navigator.geolocation) {
    updateMapCaption("Trình duyệt này chưa hỗ trợ định vị");
    if (!silent) showToast("Thiết bị chưa hỗ trợ định vị", "error");
    return;
  }

  updateMapCaption("Đang lấy vị trí nhanh · bản đồ vẫn sẵn sàng…");
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const position = [coords.latitude, coords.longitude];
      mapState.userPosition = position;
      if (mapState.userMarker) mapState.userMarker.setLatLng(position);
      else mapState.userMarker = window.L.marker(position, { icon: userMarkerIcon(window.L) }).addTo(mapState.instance);
      mapState.instance.setView(position, 14, { animate: true });
      mapState.hasLocatedUser = true;
      updateMapCaption("Vị trí của bạn · quán đã lưu được ghim trên bản đồ");
      if (!silent) showToast("Đã định vị thiết bị", "success");
    },
    (error) => {
      const messages = {
        1: "Bạn chưa cấp quyền vị trí cho trình duyệt",
        2: "Chưa xác định được vị trí thiết bị",
        3: "Định vị mất quá nhiều thời gian",
      };
      const message = messages[error.code] || "Không thể định vị thiết bị";
      updateMapCaption(`${message} · đang hiển thị khu vực mặc định`);
      if (!silent) showToast(message, "error");
    },
    FAST_LOCATION_OPTIONS,
  );
}

async function initInteractiveMap() {
  const element = document.querySelector("#leaflet-map");
  if (!element) return;
  try {
    const L = await loadLeaflet();
    if (!L) throw new Error("Leaflet unavailable");
    buildInteractiveMap(L);
    if (!mapState.hasLocatedUser) locateDevice({ silent: true });
  } catch {
    mapState.leafletPromise = null;
    showMapFallback("Không tải được bản đồ online · đang dùng bản đồ dự phòng");
  }
}

function renderModal() {
  const root = document.querySelector("#modal-root");
  if (!state.modal) { root.innerHTML = ""; return; }
  if (state.modal.type === "place") root.innerHTML = renderPlaceModal(state.modal.placeId);
  if (state.modal.type === "share") root.innerHTML = renderShareModal(state.modal.placeId);
  if (state.modal.type === "note") root.innerHTML = renderNoteModal(state.modal.placeId);
  bindModalEvents();
}

function renderPlaceModal(placeId) {
  const place = getPlace(placeId);
  const note = state.notes[place.id] || "";
  return `<div class="modal-backdrop" data-action="close-modal"><article class="modal" role="dialog" aria-modal="true" aria-label="Chi tiết ${escapeHtml(place.name)}" data-modal-card>${placePhoto(place).replace('place-photo', `modal-hero ${place.color}`)}<div class="modal-content"><div class="eyebrow">Place detail · cập nhật 4 phút trước</div><h2>${escapeHtml(place.name)}</h2><p class="muted">${escapeHtml(place.address)} · ${escapeHtml(place.category)}</p><div class="detail-grid"><div class="detail-item"><span>Trạng thái hôm nay</span><strong>${place.status === "open" ? `Đang mở · đóng lúc ${escapeHtml(place.closes)}` : `Đã đóng · ${escapeHtml(place.closes)}`}</strong></div><div class="detail-item"><span>Đánh giá cộng đồng</span><strong>★ ${escapeHtml(place.rating)} · ${escapeHtml(place.distance)}</strong></div><div class="detail-item"><span>Giờ thường lệ</span><strong>${escapeHtml(place.hours)}</strong></div></div><p class="muted" style="font-size:13px">${escapeHtml(place.description)}</p><div class="modal-footer"><button class="secondary-button" data-action="open-note" data-place-id="${place.id}">${note ? "Sửa ghi chú" : "Thêm ghi chú"}</button><button class="secondary-button" data-action="share-place" data-place-id="${place.id}">${icon("share")} Chia sẻ</button><button class="primary-button" data-action="toggle-save" data-place-id="${place.id}">${isSaved(place.id) ? `${icon("bookmarkFill")} Đã lưu` : `${icon("bookmark")} Lưu quán`}</button></div></div></article></div>`;
}

function renderNoteModal(placeId) {
  const place = getPlace(placeId);
  const preview = state.photoPreviews[place.id] ? `<div style="margin-top:12px"><img src="${state.photoPreviews[place.id]}" alt="Ảnh xem trước" style="width:100%;height:150px;object-fit:cover;border-radius:14px;border:1px solid var(--line)" /></div>` : "";
  return `<div class="modal-backdrop" data-action="close-modal"><article class="modal" role="dialog" aria-modal="true" aria-label="Ghi chú cho ${escapeHtml(place.name)}" data-modal-card><div class="modal-content"><div class="eyebrow">Ghi chú riêng</div><h2>${escapeHtml(place.name)}</h2><p class="muted">Ghi lại điều bạn muốn nhớ cho lần sau.</p><textarea id="note-input" rows="5" style="width:100%;resize:vertical;border:1px solid var(--line);border-radius:14px;padding:13px;color:var(--ink);background:var(--paper-soft);font:inherit" placeholder="Ví dụ: gọi bàn ngoài hiên, thử thêm món...">${escapeHtml(state.notes[place.id] || "")}</textarea>${preview}<label class="secondary-button" style="display:inline-flex;align-items:center;gap:8px;margin-top:12px;cursor:pointer">＋ Thêm ảnh thực tế<input id="photo-input" type="file" accept="image/*" hidden /></label><div class="modal-footer" style="margin-top:18px"><button class="secondary-button" data-action="close-modal">Hủy</button><button class="primary-button" data-action="save-note" data-place-id="${place.id}">Lưu ghi chú</button></div></div></article></div>`;
}

function renderShareModal(placeId) {
  const place = getPlace(placeId);
  return `<div class="modal-backdrop" data-action="close-modal"><article class="modal" role="dialog" aria-modal="true" aria-label="Chia sẻ ${escapeHtml(place.name)}" data-modal-card><div class="modal-content"><div class="eyebrow">Gửi một lời rủ rê</div><h2>Chia sẻ ${escapeHtml(place.name)}</h2><p class="muted">Chọn người bạn muốn rủ đi cùng.</p><div class="share-list">${friends.map((friend) => `<button class="share-person ${state.selectedShareFriends.has(friend.id) ? "selected" : ""}" data-action="toggle-share-friend" data-friend-id="${friend.id}">${avatar(friend)}<span>${escapeHtml(friend.name)}</span><span class="check">${icon("check")}</span></button>`).join("")}</div><div class="modal-footer"><button class="secondary-button" data-action="close-modal">Hủy</button><button class="primary-button" data-action="confirm-share" data-place-id="${place.id}">Gửi lời rủ rê ${icon("share")}</button></div></div></article></div>`;
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
  app.addEventListener("click", handleAction);
}

function bindModalEvents() {
  document.querySelector("#modal-root")?.addEventListener("click", handleAction);
  document.querySelector("#photo-input")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
      showToast("Chọn ảnh dưới 5 MB", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      state.photoPreviews[state.modal.placeId] = reader.result;
      renderModal();
      showToast("Ảnh đã thêm vào bản nháp", "success");
    };
    reader.readAsDataURL(file);
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
    case "open-inbox": state.view = "inbox"; renderApp(); break;
    case "focus-search": document.querySelector("#global-search")?.focus(); break;
    case "clear-search": state.query = ""; renderApp(); break;
    case "open-place": state.modal = { type: "place", placeId: target.dataset.placeId }; renderModal(); break;
    case "locate-device": initInteractiveMap().then(() => locateDevice()); break;
    case "share-place": state.modal = { type: "share", placeId: target.dataset.placeId }; state.selectedShareFriends = new Set(); renderModal(); break;
    case "toggle-save": toggleSave(target.dataset.placeId); break;
    case "open-note": state.modal = { type: "note", placeId: target.dataset.placeId }; renderModal(); break;
    case "save-note": saveNote(target.dataset.placeId); break;
    case "close-modal": state.modal = null; renderModal(); break;
    case "toggle-share-friend":
      if (state.selectedShareFriends.has(target.dataset.friendId)) state.selectedShareFriends.delete(target.dataset.friendId);
      else state.selectedShareFriends.add(target.dataset.friendId);
      renderModal();
      break;
    case "confirm-share": confirmShare(target.dataset.placeId); break;
    case "saved-filter": state.savedFilter = target.dataset.filter; renderApp(); break;
    case "select-collection": state.selectedCollection = target.dataset.collectionId; renderApp(); break;
    case "new-collection": createCollection(); break;
    case "invite-friend": showToast("Đã sao chép link mời bạn bè", "success"); break;
    case "view-friend": showToast("Đang mở collection của bạn bè", "success"); break;
    case "mark-read": showToast("Đã đánh dấu tất cả là đã đọc", "success"); break;
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
  saveStorage(storageKey, state.saved);
  if (state.modal?.type === "place") renderModal();
  renderApp();
}

function saveNote(placeId) {
  const input = document.querySelector("#note-input");
  state.notes[placeId] = input?.value.trim() || "";
  saveStorage(notesKey, state.notes);
  state.modal = { type: "place", placeId };
  showToast("Đã lưu ghi chú riêng", "success");
  renderModal();
}

function confirmShare(placeId) {
  const count = state.selectedShareFriends.size;
  if (!count) { showToast("Chọn ít nhất một người bạn", "error"); return; }
  const place = getPlace(placeId);
  state.modal = null;
  showToast(`Đã gửi ${count} lời rủ đến ${place.name}`, "success");
  renderModal();
}

function createCollection() {
  const name = window.prompt("Tên collection mới");
  if (!name?.trim()) return;
  const id = `collection-${Date.now()}`;
  state.collections.push({ id, name: name.trim(), count: 0 });
  state.selectedCollection = id;
  state.view = "saved";
  showToast(`Đã tạo collection “${name.trim()}”`, "success");
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
    navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  });
}

renderApp();
