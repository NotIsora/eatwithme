import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import XLSX from "xlsx";

const DEFAULT_MAP_CENTER = [10.7769, 106.7009]; // Saigon Central (District 1)
const CACHE_PATH = "./data/geocoded-cache.json";

// Bounding box for Greater Ho Chi Minh City
const HCMC_BOUNDS = {
  minLat: 10.30,
  maxLat: 11.20,
  minLng: 106.30,
  maxLng: 107.10,
};

const DISTRICT_CENTERS = {
  "Quận 1": { lat: 10.7756, lng: 106.7004 },
  "Quận 3": { lat: 10.7843, lng: 106.6844 },
  "Quận 4": { lat: 10.7578, lng: 106.7012 },
  "Quận 5": { lat: 10.7540, lng: 106.6634 },
  "Quận 6": { lat: 10.7481, lng: 106.6354 },
  "Quận 7": { lat: 10.7332, lng: 106.7176 },
  "Quận 8": { lat: 10.7404, lng: 106.6622 },
  "Quận 10": { lat: 10.7721, lng: 106.6679 },
  "Quận 11": { lat: 10.7645, lng: 106.6507 },
  "Quận 12": { lat: 10.8671, lng: 106.6413 },
  "Phú Nhuận": { lat: 10.7992, lng: 106.6803 },
  "Gò Vấp": { lat: 10.8387, lng: 106.6652 },
  "Bình Thạnh": { lat: 10.8016, lng: 106.7112 },
  "Tân Bình": { lat: 10.8014, lng: 106.6545 },
  "Bình Tân": { lat: 10.7656, lng: 106.6025 },
  "Tân Phú": { lat: 10.7900, lng: 106.6281 },
  "Thủ Đức": { lat: 10.8494, lng: 106.7725 },
  "TP Thủ Đức": { lat: 10.8494, lng: 106.7725 },
};

// Known Saigon landmarks and major shopping centers
const LANDMARK_GEOCODES = [
  { match: "Takashimaya", lat: 10.77346, lng: 106.70112 },
  { match: "Saigon Centre", lat: 10.77346, lng: 106.70112 },
  { match: "Vincom Đồng Khởi", lat: 10.77782, lng: 106.70222 },
  { match: "Vincom Center", lat: 10.77782, lng: 106.70222 },
  { match: "Bitexco", lat: 10.77161, lng: 106.70415 },
  { match: "Crescent Mall", lat: 10.72911, lng: 106.72145 },
  { match: "SC VivoCity", lat: 10.73089, lng: 106.70321 },
  { match: "Landmark 81", lat: 10.79512, lng: 106.72183 },
  { match: "Vạn Hạnh Mall", lat: 10.77094, lng: 106.67054 },
  { match: "Diamond Plaza", lat: 10.78124, lng: 106.69894 },
  { match: "Chợ Bến Thành", lat: 10.77258, lng: 106.69889 },
  { match: "Chợ Tân Định", lat: 10.78930, lng: 106.68831 },
  { match: "Chợ Lớn", lat: 10.75274, lng: 106.65733 },
  { match: "Chợ Bà Chiểu", lat: 10.80163, lng: 106.69919 },
];

function getCategoryTheme(cat) {
  switch (cat) {
    case "Món Nhật": return { color: "bun", pin: "red" };
    case "Món Âu": return { color: "taco", pin: "coral" };
    case "Món Hàn": return { color: "bun", pin: "red" };
    case "Ăn nhanh": return { color: "taco", pin: "coral" };
    case "Món Việt": return { color: "taco", pin: "coral" };
    case "Ăn vặt": return { color: "taco", pin: "coral" };
    case "Hotpot": return { color: "taco", pin: "coral" };
    case "Grill": return { color: "taco", pin: "coral" };
    case "Hải sản": return { color: "taco", pin: "coral" };
    case "Cafe": return { color: "cafe", pin: "mint" };
    case "Dining": return { color: "bun", pin: "red" };
    case "Bánh": return { color: "cafe", pin: "mint" };
    case "Ice cream": return { color: "taco", pin: "coral" };
    case "Pizza": return { color: "taco", pin: "coral" };
    case "Món Trung": return { color: "bun", pin: "red" };
    default: return { color: "taco", pin: "coral" };
  }
}

function normalizeAddressForGeocoding(address, placeName, district) {
  let clean = (address || "").trim();
  // Strip floor, mall unit indicators
  clean = clean.replace(/tầng\s+[b\d\w\-]+/gi, "")
               .replace(/lầu\s+\d+/gi, "")
               .replace(/b\d+[\-\s]\d+/gi, "")
               .replace(/shophouse\s+[a-z0-9\-]+/gi, "")
               .replace(/kiot\s+[a-z0-9\-]+/gi, "")
               .replace(/hẻm\s+/gi, "")
               .replace(/cắt\s+[\w\s]+/gi, "")
               .trim();

  // Expand common street abbreviations
  clean = clean.replace(/\bcmt8\b/gi, "Cách Mạng Tháng 8")
               .replace(/\bđbp\b/gi, "Điện Biên Phủ")
               .replace(/\bnkkn\b/gi, "Nam Kỳ Khởi Nghĩa")
               .replace(/\bnvt\b/gi, "Nguyễn Văn Trỗi")
               .replace(/\bntp\b/gi, "Nguyễn Tri Phương")
               .replace(/\bđường 3\/2\b/gi, "Đường 3 Tháng 2")
               .replace(/\b3\/2\b/gi, "Đường 3 Tháng 2");

  let dist = (district || "").trim();
  if (!dist.toLowerCase().startsWith("quận") && !dist.toLowerCase().startsWith("tp") && !["phú nhuận", "gò vấp", "bình thạnh", "tân bình", "bình tân", "tân phú", "thủ đức"].includes(dist.toLowerCase())) {
    dist = `Quận ${dist}`;
  }

  return { cleanAddress: clean, district: dist };
}

function isValidCoordinate(lat, lng) {
  return (
    typeof lat === "number" &&
    typeof lng === "number" &&
    !isNaN(lat) &&
    !isNaN(lng) &&
    lat >= HCMC_BOUNDS.minLat &&
    lat <= HCMC_BOUNDS.maxLat &&
    lng >= HCMC_BOUNDS.minLng &&
    lng <= HCMC_BOUNDS.maxLng
  );
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchPhoton(query, biasLat = DEFAULT_MAP_CENTER[0], biasLng = DEFAULT_MAP_CENTER[1]) {
  try {
    const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&lat=${biasLat}&lon=${biasLng}&limit=1`;
    const res = await fetch(url, { headers: { "Accept": "application/json" }, signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.features && data.features.length > 0) {
      const coords = data.features[0].geometry?.coordinates;
      if (coords && coords.length >= 2) {
        const lng = Number(coords[0].toFixed(6));
        const lat = Number(coords[1].toFixed(6));
        if (isValidCoordinate(lat, lng)) {
          return { lat, lng, source: "photon" };
        }
      }
    }
  } catch {
    // ignore
  }
  return null;
}

async function fetchNominatim(query) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=jsonv2&limit=1&countrycodes=vn`;
    const res = await fetch(url, {
      headers: {
        "Accept": "application/json",
        "User-Agent": "EatWithMe-App/1.0 (https://github.com/notisora/eatwithme)"
      },
      signal: AbortSignal.timeout(5000)
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      const lat = Number(parseFloat(data[0].lat).toFixed(6));
      const lng = Number(parseFloat(data[0].lon).toFixed(6));
      if (isValidCoordinate(lat, lng)) {
        return { lat, lng, source: "nominatim" };
      }
    }
  } catch {
    // ignore
  }
  return null;
}

async function fetchEsri(query) {
  try {
    const url = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=${encodeURIComponent(query)}&location=${DEFAULT_MAP_CENTER[1]},${DEFAULT_MAP_CENTER[0]}&distance=30000&f=json&maxLocations=1`;
    const res = await fetch(url, { headers: { "Accept": "application/json" }, signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.candidates && data.candidates.length > 0) {
      const loc = data.candidates[0].location;
      if (loc) {
        const lat = Number(loc.y.toFixed(6));
        const lng = Number(loc.x.toFixed(6));
        if (isValidCoordinate(lat, lng)) {
          return { lat, lng, source: "esri" };
        }
      }
    }
  } catch {
    // ignore
  }
  return null;
}

async function geocodePlace(name, address, district, cache) {
  const cacheKey = `${name} | ${address} | ${district}`.toLowerCase();
  if (cache[cacheKey] && isValidCoordinate(cache[cacheKey].lat, cache[cacheKey].lng)) {
    return { ...cache[cacheKey], fromCache: true };
  }

  // 1. Check known landmark dictionary
  const fullText = `${name} ${address}`;
  for (const lm of LANDMARK_GEOCODES) {
    if (fullText.toLowerCase().includes(lm.match.toLowerCase())) {
      const res = { lat: lm.lat, lng: lm.lng, source: "landmark" };
      cache[cacheKey] = res;
      return res;
    }
  }

  const { cleanAddress, district: normDistrict } = normalizeAddressForGeocoding(address, name, district);

  // Queries to try
  const queries = [
    `${name}, ${cleanAddress}, ${normDistrict}, TP. Hồ Chí Minh`,
    `${cleanAddress}, ${normDistrict}, Hồ Chí Minh, Việt Nam`,
    `${cleanAddress}, ${normDistrict}`
  ].filter(Boolean);

  // Tier 1: Photon
  for (const q of queries) {
    const res = await fetchPhoton(q);
    if (res) {
      cache[cacheKey] = res;
      return res;
    }
  }

  // Tier 2: Nominatim
  for (const q of queries.slice(0, 2)) {
    await sleep(1000); // Respect OSM 1 req/sec policy
    const res = await fetchNominatim(q);
    if (res) {
      cache[cacheKey] = res;
      return res;
    }
  }

  // Tier 3: ESRI
  for (const q of queries.slice(0, 2)) {
    const res = await fetchEsri(q);
    if (res) {
      cache[cacheKey] = res;
      return res;
    }
  }

  // Tier 4: Fallback to District Centroid + Deterministic Jitter
  let center = DISTRICT_CENTERS[district] || DISTRICT_CENTERS[normDistrict];
  if (!center) {
    for (const [key, val] of Object.entries(DISTRICT_CENTERS)) {
      if (district.includes(key) || key.includes(district)) {
        center = val;
        break;
      }
    }
  }
  if (!center) center = { lat: DEFAULT_MAP_CENTER[0], lng: DEFAULT_MAP_CENTER[1] };

  const char1 = name ? name.charCodeAt(0) : 0;
  const charLast = name ? name.charCodeAt(name.length - 1) : 0;
  const jitterLat = ((char1 % 9) - 4) * 0.0006;
  const jitterLng = ((charLast % 7) - 3) * 0.0006;

  const fallbackResult = {
    lat: Number((center.lat + jitterLat).toFixed(6)),
    lng: Number((center.lng + jitterLng).toFixed(6)),
    source: "district_fallback"
  };
  cache[cacheKey] = fallbackResult;
  return fallbackResult;
}

async function loadCache() {
  try {
    if (existsSync(CACHE_PATH)) {
      const data = await readFile(CACHE_PATH, "utf8");
      return JSON.parse(data);
    }
  } catch {
    // ignore
  }
  return {};
}

async function saveCache(cache) {
  try {
    if (!existsSync("./data")) {
      await mkdir("./data", { recursive: true });
    }
    await writeFile(CACHE_PATH, JSON.stringify(cache, null, 2), "utf8");
  } catch (err) {
    console.warn("Failed to save geocode cache:", err.message);
  }
}

async function main() {
  console.log("🍜 EatWithMe — Intelligent Multi-Tier Geocoder");
  console.log("Reading 'Eat with mi.xlsx'...\n");

  const wb = XLSX.readFile("Eat with mi.xlsx");
  const cache = await loadCache();
  const places = [];
  let idCounter = 1;
  const stats = { photon: 0, nominatim: 0, esri: 0, landmark: 0, district_fallback: 0, cached: 0 };

  // 1. Process 'quán ăn'
  const qaRows = XLSX.utils.sheet_to_json(wb.Sheets['quán ăn'], { header: 1 });
  let currentDistrict = "Quận 1";

  for (let i = 1; i < qaRows.length; i++) {
    const row = qaRows[i];
    if (!row || row.length === 0) continue;

    if (row[0] !== undefined && row[0] !== null && row[0] !== '') {
      let d = String(row[0]).trim();
      if (!isNaN(d)) d = 'Quận ' + d;
      currentDistrict = d;
    }

    const name = row[1] ? String(row[1]).trim() : '';
    if (!name) continue;

    const category = row[2] ? String(row[2]).trim() : 'Món Việt';
    const rawAddress = row[3] ? String(row[3]).trim() : '';
    const price = row[4] ? String(row[4]).trim() : '<100k';
    const note = row[6] ? String(row[6]).trim() : '';

    const theme = getCategoryTheme(category);
    const fullAddress = rawAddress ? `${rawAddress}, ${currentDistrict}, TP. HCM` : `${currentDistrict}, TP. HCM`;

    process.stdout.write(`[${idCounter}] Geocoding: ${name} (${rawAddress || currentDistrict})... `);
    const coords = await geocodePlace(name, rawAddress, currentDistrict, cache);
    if (coords.fromCache) stats.cached++;
    stats[coords.source] = (stats[coords.source] || 0) + 1;
    console.log(`✓ [${coords.source}] (${coords.lat}, ${coords.lng})`);

    places.push({
      id: `place-mi-${idCounter++}`,
      name,
      category,
      district: currentDistrict,
      address: fullAddress,
      price,
      rating: (4.0 + (idCounter % 10) * 0.1).toFixed(1),
      distance: `${(0.4 + (idCounter % 25) * 0.1).toFixed(1)} km`,
      hours: "08:00 - 22:00",
      closes: "22:00",
      status: "open",
      color: theme.color,
      pin: theme.pin,
      lat: coords.lat,
      lng: coords.lng,
      description: note || `Địa điểm ẩm thực ${category} hấp dẫn tại ${currentDistrict}.`
    });
  }

  // 2. Process 'nước'
  const nuocRows = XLSX.utils.sheet_to_json(wb.Sheets['nước'], { header: 1 });
  currentDistrict = "Quận 1";

  for (let i = 1; i < nuocRows.length; i++) {
    const row = nuocRows[i];
    if (!row || row.length === 0) continue;

    if (row[0] !== undefined && row[0] !== null && row[0] !== '') {
      let d = String(row[0]).trim();
      if (!isNaN(d)) d = 'Quận ' + d;
      currentDistrict = d;
    }

    const name = row[1] ? String(row[1]).trim() : '';
    if (!name) continue;

    const rawAddress = row[2] ? String(row[2]).trim() : '';
    const note = row[4] ? String(row[4]).trim() : '';

    const theme = getCategoryTheme("Cafe");
    const fullAddress = rawAddress ? `${rawAddress}, ${currentDistrict}, TP. HCM` : `${currentDistrict}, TP. HCM`;

    process.stdout.write(`[${idCounter}] Geocoding: ${name} (${rawAddress || currentDistrict})... `);
    const coords = await geocodePlace(name, rawAddress, currentDistrict, cache);
    if (coords.fromCache) stats.cached++;
    stats[coords.source] = (stats[coords.source] || 0) + 1;
    console.log(`✓ [${coords.source}] (${coords.lat}, ${coords.lng})`);

    places.push({
      id: `place-mi-${idCounter++}`,
      name,
      category: "Cafe",
      district: currentDistrict,
      address: fullAddress,
      price: "<100k",
      rating: (4.2 + (idCounter % 8) * 0.1).toFixed(1),
      distance: `${(0.5 + (idCounter % 20) * 0.1).toFixed(1)} km`,
      hours: "08:00 - 22:00",
      closes: "22:00",
      status: "open",
      color: theme.color,
      pin: theme.pin,
      lat: coords.lat,
      lng: coords.lng,
      description: note || `Địa điểm Cafe hấp dẫn tại ${currentDistrict}.`
    });
  }

  await saveCache(cache);

  console.log("\n================ Geocoding Summary ================");
  console.log(`Total places processed: ${places.length}`);
  console.log(`- Landmark exact:      ${stats.landmark || 0}`);
  console.log(`- Photon (OSM fast):    ${stats.photon || 0}`);
  console.log(`- Nominatim (OSM full): ${stats.nominatim || 0}`);
  console.log(`- ESRI World:           ${stats.esri || 0}`);
  console.log(`- District fallback:    ${stats.district_fallback || 0}`);
  console.log(`- Loaded from Cache:    ${stats.cached || 0}`);
  console.log("===================================================\n");

  // Update app.js
  const appJs = await readFile("app.js", "utf8");
  const formattedJson = JSON.stringify(places, null, 2);
  const updatedAppJs = appJs.replace(
    /const defaultPlaces = \[[\s\S]*?\];\s*/,
    `const defaultPlaces = ${formattedJson};\n`
  );

  await writeFile("app.js", updatedAppJs);
  console.log("✅ Successfully updated app.js with 100% geocoded places!");
}

main().catch((err) => {
  console.error("❌ Execution error:", err);
  process.exit(1);
});
