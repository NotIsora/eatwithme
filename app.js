const ICONS = {
  compass: "⌖",
  collections: "▦",
  search: "⌕",
  add: "+",
  share: "↗",
  bookmark: "♡",
  bookmarkFill: "♥",
  more: "⋯",
  close: "×",
  arrow: "→",
  check: "✓",
  copy: "📋",
  mapPin: "📍",
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
    id: "bun-cha-huong-lien",
    lat: 21.0209,
    lng: 105.8490,
    name: "Bún chả Hương Liên",
    category: "Món Việt",
    price: "<100k",
    address: "24 Lê Văn Hưu, Hai Bà Trưng",
    distance: "1,2 km",
    status: "open",
    closes: "22:00",
    rating: "4.6",
    color: "bun",
    pin: "p1",
    description: "Một bữa trưa gọn gàng, thơm mùi than nướng và luôn đáng để ghé lại.",
    hours: "10:00 – 22:00",
  },
  {
    id: "pizza-4ps-trang-tien",
    lat: 21.0258,
    lng: 105.8540,
    name: "Pizza 4P’s Tràng Tiền",
    category: "Pizza",
    price: "200k-300k",
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
    category: "Cafe",
    price: "<100k",
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
    category: "Món Việt",
    price: "<200k",
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
    category: "Món Việt",
    price: "<200k",
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

const customPlacesKey = "eatwithme.custom_places.v1";
let customPlaces = readStorage(customPlacesKey, []);
let places = [...customPlaces, ...defaultPlaces];

function refreshPlaces() {
  customPlaces = readStorage(customPlacesKey, []);
  places = [...customPlaces, ...defaultPlaces];
}

const initialSaved = [defaultPlaces[0].id, defaultPlaces[1].id];
const storageKey = "eatwithme.saved.v1";
const locationStorageKey = "eatwithme.location.v1";
const googleUserKey = "eatwithme.google_user.v1";
const googleClientIdKey = "eatwithme.google_client_id.v1";
const DEFAULT_GOOGLE_CLIENT_ID = "349760544060-qmj5okegmg2i47dvsfs0msgv5nug099p.apps.googleusercontent.com";

const state = {
  view: "explore", // "explore" | "saved"
  query: "",
  user: readStorage(googleUserKey, null),
  saved: readStorage(storageKey, initialSaved),
  savedFilter: "all",
  modal: null,
  toastTimer: null,
  installAvailable: false,
};

function saveLocalState() {
  saveStorage(storageKey, state.saved);
}

const DEFAULT_MAP_CENTER = [21.0278, 105.8342];
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
};

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
    customPlaces: readStorage(customPlacesKey, []),
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

      if (Array.isArray(data.saved)) {
        state.saved = data.saved;
        saveStorage(storageKey, state.saved);
      }

      if (Array.isArray(data.customPlaces)) {
        saveStorage(customPlacesKey, data.customPlaces);
        refreshPlaces();
      }

      if (data.user && typeof data.user === "object") {
        state.user = data.user;
        saveStorage(googleUserKey, state.user);
      }

      saveLocalState();
      renderApp();
      showToast("Đã phục hồi dữ liệu từ file thành công! 🎉", "success");
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

function placeCard(place, { compact = false } = {}) {
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
        <button class="round-button ${isSaved(place.id) ? "saved" : ""}" data-action="toggle-save" data-place-id="${place.id}" aria-label="${isSaved(place.id) ? "Bỏ lưu" : "Lưu"} ${escapeHtml(place.name)}">${icon(isSaved(place.id) ? "bookmarkFill" : "bookmark")}</button>
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
      <div class="brand"><div class="brand-mark">♨</div><div class="brand-name">Eat<span>With</span>Me</div></div>
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
                  ⎋
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

function renderHero() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">Hôm nay ăn gì?</div>
        <h1>Đi tìm một nơi<br /><em>đáng nhớ.</em></h1>
        <p>Gom những quán bạn yêu, những món bạn muốn thử và những hương vị tuyệt vời nhất.</p>
        <div class="hero-actions">
          <button class="primary-button" data-action="focus-search">Tìm quán gần bạn ${icon("arrow")}</button>
          <button class="secondary-button" data-action="navigate" data-view="saved">Mở quán đã lưu (${state.saved.length})</button>
        </div>
      </div>
      <div class="hero-aside">
        <div class="eyebrow">Bản đồ ẩm thực cá nhân</div>
        <h3>Lưu lại từng quán ăn bạn yêu thích.</h3>
        <p>Đã lưu ${state.saved.length} quán ăn. Bạn có thể tự ghim thêm địa điểm vào kho ẩm thực.</p>
        <div style="display:flex;gap:8px;margin-top:14px;">
          <button class="secondary-button" data-action="open-add-place" style="font-size:12.5px;padding:8px 14px;">
            ${icon("add")} Thêm quán mới
          </button>
        </div>
      </div>
    </section>`;
}

function renderMapFallback() {
  const savedPlaces = places.filter((place) => isSaved(place.id));
  return `<div id="map-fallback" class="map-fallback hidden"><div class="map-surface">${savedPlaces.map((place) => `<button class="map-pin ${place.pin}" data-action="open-place" data-place-id="${place.id}" aria-label="Mở ${escapeHtml(place.name)}"><span>●</span></button>`).join("")}<span class="map-label one">Hai Bà Trưng</span><span class="map-label two">Hoàn Kiếm</span><span class="map-label three">Tràng Tiền</span><span class="map-label four">Phan Bội Châu</span></div></div>`;
}

function renderMap() {
  const savedCount = places.filter((place) => isSaved(place.id)).length;
  return `
    <section class="panel map-panel" data-map-shell style="margin-bottom:20px;">
      <div class="map-toolbar">
        <button class="map-chip active" data-action="fit-saved" aria-label="Xem các quán đã lưu">Đã lưu · ${savedCount}</button>
        <button class="map-chip map-locate-chip" data-action="locate-device">${icon("compass")} Định vị tôi</button>
        <button class="map-chip" data-action="open-add-place" style="font-weight:700;color:var(--coral)">${icon("add")} Thêm quán</button>
        <button class="map-chip" data-action="switch-city" data-city="hanoi">Hà Nội</button>
        <button class="map-chip" data-action="switch-city" data-city="hcm">TP. HCM</button>
        <button class="map-chip" data-action="switch-city" data-city="danang">Đà Nẵng</button>
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
  const results = places.filter((place) => `${place.name} ${place.category} ${place.address}`.toLowerCase().includes(query));
  return `<section class="panel" style="margin-bottom:22px"><div class="panel-header"><div><h2>Kết quả gần bạn</h2><p>${results.length ? `${results.length} địa điểm phù hợp với “${escapeHtml(state.query)}”` : "Thử tên món, tên quán hoặc một khu vực khác."}</p></div><button class="text-button" data-action="clear-search">Xóa tìm kiếm</button></div>${results.length ? `<div class="place-list">${results.map((place) => placeCard(place, { compact: true })).join("")}</div>` : `<div class="empty-state"><div class="empty-mark">⌕</div><h3>Chưa thấy quán này</h3><p>Bạn có thể bấm nút "Thêm quán" để tự ghim địa điểm này lên bản đồ.</p><button class="primary-button" data-action="open-add-place" style="margin-top:10px">${icon("add")} Thêm quán ngay</button></div>`}</section>`;
}

function renderExplore() {
  return `${renderHero()}${renderSearchPanel()}${renderMap()}`;
}

function renderSaved() {
  const savedPlaces = places.filter((place) => isSaved(place.id));
  let filtered = savedPlaces;
  if (state.savedFilter === "open") {
    filtered = savedPlaces.filter((place) => place.status === "open");
  } else if (state.savedFilter === "custom") {
    filtered = savedPlaces.filter((place) => place.isCustom);
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
    <div class="filter-row">
      <button class="filter ${state.savedFilter === "all" ? "active" : ""}" data-action="saved-filter" data-filter="all">Tất cả (${savedPlaces.length})</button>
      <button class="filter ${state.savedFilter === "open" ? "active" : ""}" data-action="saved-filter" data-filter="open">Đang mở</button>
      <button class="filter ${state.savedFilter === "custom" ? "active" : ""}" data-action="saved-filter" data-filter="custom">Tự thêm</button>
    </div>
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Danh sách quán ăn</h2>
          <p>${filtered.length} địa điểm đã lưu</p>
        </div>
      </div>
      ${
        filtered.length
          ? `<div class="place-list">${filtered.map((place) => placeCard(place)).join("")}</div>`
          : `
          <div class="empty-state">
            <div class="empty-mark">♨</div>
            <h3>Danh sách đang trống</h3>
            <p>Hãy lưu địa điểm từ màn hình Khám phá hoặc bấm nút "Thêm quán mới" ở góc trên để tự thêm quán bạn yêu thích.</p>
          </div>`
      }
    </section>

    <section class="panel" style="margin-top:16px;background:rgba(255,255,255,0.48);border:1px dashed var(--line);padding:15px 18px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div>
          <h3 style="font-size:14px;margin:0 0 3px;display:flex;align-items:center;gap:6px;">
            <span>💾</span> Quản lý dữ liệu lưu trên máy
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

  const saved = places.filter((place) => isSaved(place.id));
  const iconForSaved = savedMarkerIcon(L);
  for (const place of saved) {
    const marker = L.marker([place.lat, place.lng], { icon: iconForSaved })
      .addTo(map)
      .bindPopup(mapPopupHtml(place), { maxWidth: 230 });
    mapState.savedMarkers.set(place.id, marker);
  }

  const points = saved.map((place) => [place.lat, place.lng]);
  if (mapState.userPosition) points.push(mapState.userPosition);
  if (points.length > 1) {
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [44, 44], maxZoom: 15 });
  } else if (points.length === 1) {
    map.setView(points[0], MAP_LOCATE_ZOOM);
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
    lat: 21.0285,
    lng: 105.8542,
    city: "Hà Nội",
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
        const msg = "Nhấn biểu tượng 🔒 trên thanh địa chỉ và chọn Cho phép Vị trí để bật GPS";
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
    if (!mapState.hasLocatedUser) locateDevice({ silent: true });
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
  state.user = {
    id: "demo-google-user-01",
    name: "An Trần (Google)",
    email: "antran.foodie@gmail.com",
    picture: "https://lh3.googleusercontent.com/a/default-user=s96-c",
    loggedAt: new Date().toISOString(),
  };
  saveStorage(googleUserKey, state.user);
  saveLocalState();
  state.modal = null;
  renderApp();
  showToast(`Chào mừng ${state.user.name} đã đăng nhập!`, "success");
}

function handleGoogleCredentialResponse(response) {
  if (!response?.credential) return;
  const payload = parseJwt(response.credential);
  if (payload && payload.email) {
    state.user = {
      id: payload.sub,
      name: payload.name || payload.email.split("@")[0],
      email: payload.email,
      picture: payload.picture || "https://lh3.googleusercontent.com/a/default-user=s96-c",
      loggedAt: new Date().toISOString(),
    };
    saveStorage(googleUserKey, state.user);
    saveLocalState();
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
  saveLocalState();
  state.modal = null;
  renderApp();
  showToast("Đã đăng xuất tài khoản thành công", "success");
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
                  <span class="google-sync-tag">✓ Đã liên kết Google</span>
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
                    ⎋ Đăng xuất tài khoản
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
  const currentCoords = mapState.userPosition || DEFAULT_MAP_CENTER;
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <article class="modal" role="dialog" aria-modal="true" aria-label="Thêm quán ăn mới" data-modal-card style="max-width:480px;">
        <div class="modal-content">
          <div class="eyebrow">Thêm địa điểm vào kho ẩm thực</div>
          <h2>Thêm quán ăn mới</h2>
          <p class="muted">Chọn dạng đồ ăn và mức giá phù hợp để ghim lên bản đồ.</p>

          <form id="add-place-form" onsubmit="event.preventDefault();" style="display:grid;gap:13px;margin-top:14px;">
            <div class="form-group">
              <label for="new-place-name">Tên quán ăn / Địa điểm <span style="color:var(--coral)">*</span></label>
              <input id="new-place-name" class="form-input" type="text" placeholder="Ví dụ: Phở Bát Đàn, Sushi Kei, Pizza 4P's..." required autofocus />
            </div>

            <div class="picker-section">
              <div class="picker-label-row">
                <label>Dạng đồ ăn <span style="color:var(--coral)">*</span></label>
                <span id="selected-category-badge" class="picker-label-badge">Đang chọn: <strong>Món Việt</strong></span>
              </div>
              <input id="new-place-category" type="hidden" value="Món Việt" />
              <div class="category-pill-grid">
                ${FOOD_CATEGORIES.map((cat, idx) => `
                  <button type="button" class="food-select-pill ${idx === 4 ? "selected" : ""}" data-action="pick-food-category" data-val="${cat.name}" style="background:${cat.bg};color:${cat.color};${cat.border ? `border:1px solid ${cat.border};` : ""}">
                    ${escapeHtml(cat.name)}
                  </button>
                `).join("")}
              </div>
            </div>

            <div class="picker-section">
              <div class="picker-label-row">
                <label>Mức giá tiền <span style="color:var(--coral)">*</span></label>
                <span id="selected-price-badge" class="picker-label-badge">Đang chọn: <strong>&lt;100k</strong></span>
              </div>
              <input id="new-place-price" type="hidden" value="<100k" />
              <div class="price-pill-grid">
                ${PRICE_TIERS.map((tier, idx) => `
                  <button type="button" class="food-select-pill ${idx === 0 ? "selected" : ""}" data-action="pick-price-tier" data-val="${tier.name}" style="background:${tier.bg};color:${tier.color};">
                    ${escapeHtml(tier.name)}
                  </button>
                `).join("")}
              </div>
            </div>

            <div class="form-group">
              <label for="new-place-address">Địa chỉ / Khu vực</label>
              <input id="new-place-address" class="form-input" type="text" placeholder="Ví dụ: 49 Bát Đàn, Hoàn Kiếm, Hà Nội" />
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div class="form-group">
                <label for="new-place-hours">Giờ mở cửa</label>
                <input id="new-place-hours" class="form-input" type="text" value="07:00 – 22:00" placeholder="07:00 – 22:00" />
              </div>
              <div class="form-group">
                <label for="new-place-rating">Đánh giá sao</label>
                <input id="new-place-rating" class="form-input" type="text" value="5.0" placeholder="5.0" />
              </div>
            </div>

            <div class="form-group" style="padding:10px;background:var(--paper-soft);border-radius:12px;border:1px solid var(--line);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:12px;font-weight:700;color:var(--ink);">Tọa độ ghim trên bản đồ</span>
                <button type="button" class="text-button" data-action="use-my-location" style="font-size:11px;">
                  ${icon("compass")} Vị trí hiện tại
                </button>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                <input id="new-place-lat" class="form-input" type="number" step="0.0001" value="${currentCoords[0]}" placeholder="Vĩ độ (Lat)" />
                <input id="new-place-lng" class="form-input" type="number" step="0.0001" value="${currentCoords[1]}" placeholder="Kinh độ (Lng)" />
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

  const existingCustom = readStorage(customPlacesKey, []);
  existingCustom.unshift(newPlace);
  saveStorage(customPlacesKey, existingCustom);

  places = [newPlace, ...places.filter((p) => p.id !== newPlace.id)];

  if (!state.saved.includes(newPlace.id)) {
    state.saved.unshift(newPlace.id);
  }

  saveLocalState();

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
          <div class="modal-footer">
            <button class="secondary-button" data-action="share-place" data-place-id="${place.id}">${icon("share")} Chia sẻ</button>
            <button class="primary-button" data-action="toggle-save" data-place-id="${place.id}">${isSaved(place.id) ? `${icon("bookmarkFill")} Đã lưu` : `${icon("bookmark")} Lưu quán`}</button>
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
              ${icon("copy")} Sao chép thông tin quán
            </button>
            <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="secondary-button" style="justify-content:center;display:flex;align-items:center;gap:8px;text-decoration:none;color:inherit;">
              ${icon("mapPin")} Mở trên Google Maps
            </a>
            ${
              navigator.share
                ? `<button class="secondary-button" data-action="native-share-place" data-place-id="${place.id}" style="justify-content:center;display:flex;align-items:center;gap:8px;">
                    ${icon("share")} Gửi qua Zalo, Tin nhắn...
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
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.address}`)}`;
  const text = `🍜 ${place.name}\n📍 Địa chỉ: ${place.address}\n🏷️ Loại món: ${place.category} · Giá: ${place.price || "<100k"}\n⏰ Giờ mở: ${place.hours}\n⭐ Đánh giá: ★${place.rating}\n🗺️ Bản đồ: ${mapsUrl}`;

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Đã sao chép thông tin ${place.name}!`, "success");
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
      text: `Gợi ý quán ăn ngon: ${place.name} - ${place.address} (${place.category})`,
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
    case "switch-city": {
      const cityKey = target.dataset.city;
      const city = CITIES[cityKey];
      if (city && mapState.instance) {
        mapState.instance.setView(city.center, city.zoom, { animate: true });
        updateMapCaption(`Khu vực: ${city.name}`);
        showToast(`Đã chuyển sang ${city.name}`, "success");
      }
      break;
    }
    case "fit-saved": {
      const saved = places.filter((p) => isSaved(p.id));
      if (saved.length && mapState.instance && window.L) {
        const bounds = window.L.latLngBounds(saved.map((p) => [p.lat, p.lng]));
        mapState.instance.fitBounds(bounds, { padding: [44, 44], maxZoom: 15 });
        showToast("Đã căn chỉnh theo các quán đã lưu", "success");
      }
      break;
    }
    case "share-place": state.modal = { type: "share", placeId: target.dataset.placeId }; renderModal(); break;
    case "copy-place-info": copyPlaceInfo(target.dataset.placeId); break;
    case "native-share-place": nativeSharePlace(target.dataset.placeId); break;
    case "toggle-save": toggleSave(target.dataset.placeId); break;
    case "close-modal": state.modal = null; renderModal(); break;
    case "saved-filter": state.savedFilter = target.dataset.filter; renderApp(); break;
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
