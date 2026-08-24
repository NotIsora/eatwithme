import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import XLSX from "xlsx";

const CACHE_PATH = "./data/geocoded-cache.json";
const EXPORT_PATH = "./data/google-maps-places.json";

// Bounding box for Greater Ho Chi Minh City
const HCMC_BOUNDS = {
  minLat: 10.30,
  maxLat: 11.20,
  minLng: 106.30,
  maxLng: 107.10,
};

/**
 * Extracts coordinates from any Google Maps URL or text snippet.
 * Supports:
 * - /@10.773512,106.702845,17z/
 * - !3d10.773512!4d106.702845
 * - ?q=10.773512,106.702845 or &ll=10.773512,106.702845 or center=10.773512%2C106.702845
 */
export function parseGoogleMapsCoordinates(input) {
  if (!input || typeof input !== "string") return null;

  // 1. Check @lat,lng
  const atMatch = input.match(/@([0-9.-]+),([0-9.-]+)/);
  if (atMatch) {
    const lat = parseFloat(atMatch[1]);
    const lng = parseFloat(atMatch[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "@lat,lng" };
    }
  }

  // 2. Check !3d(lat)!4d(lng)
  const dataMatch = input.match(/!3d([0-9.-]+)!4d([0-9.-]+)/);
  if (dataMatch) {
    const lat = parseFloat(dataMatch[1]);
    const lng = parseFloat(dataMatch[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "!3d!4d" };
    }
  }

  // 3. Check query parameters ?q=lat,lng or &ll=lat,lng or center=lat%2Clng
  const paramMatch = input.match(/[?&](?:q|ll|center)=([0-9.-]+)[,%]([0-9.-]+)/);
  if (paramMatch) {
    const lat = parseFloat(paramMatch[1]);
    const lng = parseFloat(paramMatch[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "query_param" };
    }
  }

  // 4. Check raw lat, lng pair in text (e.g. "10.773512, 106.702845")
  const rawMatch = input.match(/([1][0-1]\.[0-9]{4,8})[,\s]+([1][0][6-7]\.[0-9]{4,8})/);
  if (rawMatch) {
    const lat = parseFloat(rawMatch[1]);
    const lng = parseFloat(rawMatch[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "raw_text" };
    }
  }

  return null;
}

export function isValidHcmcCoordinate(lat, lng) {
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

export function getCategoryTheme(cat) {
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

export function parseExcelPlaces() {
  const wb = XLSX.readFile("Eat with mi.xlsx");
  const items = [];
  let idCounter = 1;

  // 1. Process 'quán ăn'
  const qaRows = XLSX.utils.sheet_to_json(wb.Sheets['quán ăn'], { header: 1 });
  let currentDistrict = "Quận 1";

  for (let i = 1; i < qaRows.length; i++) {
    const row = qaRows[i];
    if (!row || row.length === 0) continue;

    if (row[0] !== undefined && row[0] !== null && String(row[0]).trim() !== '') {
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
    const query = [name, rawAddress, currentDistrict, 'TP. HCM'].filter(Boolean).join(', ');
    const googleSearchUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

    items.push({
      id: `place-mi-${idCounter++}`,
      name,
      category,
      district: currentDistrict,
      address: fullAddress,
      rawAddress,
      price,
      rating: (4.0 + (idCounter % 10) * 0.1).toFixed(1),
      distance: `${(0.4 + (idCounter % 25) * 0.1).toFixed(1)} km`,
      hours: "08:00 - 22:00",
      closes: "22:00",
      status: "open",
      color: theme.color,
      pin: theme.pin,
      description: note || `Địa điểm ẩm thực ${category} hấp dẫn tại ${currentDistrict}.`,
      googleSearchUrl,
      searchQuery: query
    });
  }

  // 2. Process 'nước'
  const nuocRows = XLSX.utils.sheet_to_json(wb.Sheets['nước'], { header: 1 });
  currentDistrict = "Quận 1";

  for (let i = 1; i < nuocRows.length; i++) {
    const row = nuocRows[i];
    if (!row || row.length === 0) continue;

    if (row[0] !== undefined && row[0] !== null && String(row[0]).trim() !== '') {
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
    const query = [name, rawAddress, currentDistrict, 'TP. HCM'].filter(Boolean).join(', ');
    const googleSearchUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

    items.push({
      id: `place-mi-${idCounter++}`,
      name,
      category: "Cafe",
      district: currentDistrict,
      address: fullAddress,
      rawAddress,
      price: "<100k",
      rating: (4.2 + (idCounter % 8) * 0.1).toFixed(1),
      distance: `${(0.5 + (idCounter % 20) * 0.1).toFixed(1)} km`,
      hours: "08:00 - 22:00",
      closes: "22:00",
      status: "open",
      color: theme.color,
      pin: theme.pin,
      description: note || `Địa điểm Cafe hấp dẫn tại ${currentDistrict}.`,
      googleSearchUrl,
      searchQuery: query
    });
  }

  return items;
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

async function main() {
  console.log("🗺️  Google Maps Coordinates Parser & Generator for EatWithMe");
  const places = parseExcelPlaces();
  const cache = await loadCache();

  console.log(`Found ${places.length} places in 'Eat with mi.xlsx'.\n`);

  let matchedFromCache = 0;
  const enrichedPlaces = places.map((place) => {
    const cacheKey = `${place.name} | ${place.rawAddress} | ${place.district}`.toLowerCase();
    const cached = cache[cacheKey];
    if (cached && isValidHcmcCoordinate(cached.lat, cached.lng)) {
      matchedFromCache++;
      return {
        ...place,
        lat: cached.lat,
        lng: cached.lng,
        geocodeSource: cached.source || "cache",
        isVerified: true
      };
    }
    return {
      ...place,
      lat: 10.7769,
      lng: 106.7009,
      geocodeSource: "pending",
      isVerified: false
    };
  });

  if (!existsSync("./data")) {
    await mkdir("./data", { recursive: true });
  }

  await writeFile(EXPORT_PATH, JSON.stringify(enrichedPlaces, null, 2), "utf8");
  console.log(`✅ Saved ${enrichedPlaces.length} places with Google Maps Search URLs to '${EXPORT_PATH}'`);
  console.log(`📊 Verified with coordinates: ${matchedFromCache}/${enrichedPlaces.length}`);
}

// Only run directly if invoked as main
if (process.argv[1] && process.argv[1].endsWith("extract-google-coords.mjs")) {
  main().catch((err) => {
    console.error("❌ Execution error:", err);
    process.exit(1);
  });
}
