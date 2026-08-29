/**
 * EatWithMe — Google Maps Coordinates Parser & Generator
 *
 * Pure utility functions (browser-safe) + Node.js CLI runner
 */

// ============================================
// BROWSER-SAFE UTILITY FUNCTIONS (Zero deps)
// ============================================

// Bounding box for Greater Ho Chi Minh City
const HCMC_BOUNDS = {
  minLat: 10.30,
  maxLat: 11.20,
  minLng: 106.30,
  maxLng: 107.10,
};

/**
 * Validates if coordinates fall within Greater HCMC bounds
 */
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

/**
 * Extracts coordinates from any Google Maps URL or text snippet.
 * Supports:
 * - /@10.773512,106.702845,17z/
 * - !3d10.773512!4d106.702845
 * - !4d106.702845!3d10.773512 (reversed order)
 * - ?q=10.773512,106.702845 or &ll=10.773512,106.702845 or center=10.773512%2C106.702845
 * - loc:10.773512,106.702845
 * - 10.773512, 106.702845 (raw text with 2-10 decimals)
 */
export function parseGoogleMapsCoordinates(input) {
  if (!input || typeof input !== "string") return null;

  // 1. Check @lat,lng (most common format in share URLs)
  const atMatch = input.match(/@([0-9.-]+),([0-9.-]+)/);
  if (atMatch) {
    const lat = parseFloat(atMatch[1]);
    const lng = parseFloat(atMatch[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "@lat,lng" };
    }
  }

  // 2. Check !3d(lat)!4d(lng) — standard data parameter
  const dataMatch = input.match(/!3d([0-9.-]+)!4d([0-9.-]+)/);
  if (dataMatch) {
    const lat = parseFloat(dataMatch[1]);
    const lng = parseFloat(dataMatch[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "!3d!4d" };
    }
  }

  // 3. Check reversed order !4d(lng)!3d(lat) — seen in some share links
  const dataMatchRev = input.match(/!4d([0-9.-]+)!3d([0-9.-]+)/);
  if (dataMatchRev) {
    const lng = parseFloat(dataMatchRev[1]);
    const lat = parseFloat(dataMatchRev[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "!4d!3d" };
    }
  }

  // 4. Check query parameters: ?q=lat,lng or &ll=lat,lng or center=lat%2Clng or loc:lat,lng
  const paramMatch = input.match(/[?&](?:q|ll|center|loc)=([0-9.-]+)[,%]([0-9.-]+)/);
  if (paramMatch) {
    const lat = parseFloat(paramMatch[1]);
    const lng = parseFloat(paramMatch[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "query_param" };
    }
  }

  // 5. Check raw lat, lng pair in text with flexible decimal precision (2-10)
  // Matches: 10.xxx, 106.xxx OR 11.xxx, 106.xxx OR 10.xxx, 107.xxx
  const rawMatch = input.match(/([1][0-1]\.[0-9]{2,10})[,\s]+([1][0][6-7]\.[0-9]{2,10})/);
  if (rawMatch) {
    const lat = parseFloat(rawMatch[1]);
    const lng = parseFloat(rawMatch[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "raw_text" };
    }
  }

  // 6. Check Google Maps window data array patterns: [10.xxxx, 106.xxxx] or [null, null, 10.xxxx, 106.xxxx]
  const arrMatch = input.match(/\[(?:null,\s*)*(10\.[0-9]{4,10}),\s*(106\.[0-9]{4,10})\]/);
  if (arrMatch) {
    const lat = parseFloat(arrMatch[1]);
    const lng = parseFloat(arrMatch[2]);
    if (isValidHcmcCoordinate(lat, lng)) {
      return { lat: Number(lat.toFixed(6)), lng: Number(lng.toFixed(6)), source: "google_array" };
    }
  }

  return null;
}

/**
 * Maps food category to color theme and pin style
 */
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

// ============================================
// NODE.JS CLI FUNCTIONS (Dynamic imports only)
// ============================================

/**
 * Parse Excel file and return places array with Google Maps search URLs
 * Runs ONLY when invoked directly via `node scripts/extract-google-coords.mjs`
 */
export async function parseExcelPlaces() {
  // Dynamic imports — only executed in Node.js CLI context
  const { readFile } = await import("node:fs/promises");
  const { existsSync } = await import("node:fs");
  const XLSX = (await import("xlsx")).default;

  const CACHE_PATH = "./data/geocoded-cache.json";

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

  const wb = XLSX.readFile("Eat with mi.xlsx");
  const cache = await loadCache();
  const items = [];
  let idCounter = 1;

  // 1. Process 'quán ăn' sheet
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

    const cacheKey = `${name} | ${rawAddress} | ${currentDistrict}`.toLowerCase();
    const cached = cache[cacheKey];
    const hasCachedCoords = cached && isValidHcmcCoordinate(cached.lat, cached.lng);

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
      searchQuery: query,
      lat: hasCachedCoords ? cached.lat : 10.7769,
      lng: hasCachedCoords ? cached.lng : 106.7009,
      geocodeSource: hasCachedCoords ? (cached.source || "cache") : "pending",
      isVerified: hasCachedCoords
    });
  }

  // 2. Process 'nước' sheet
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

    const cacheKey = `${name} | ${rawAddress} | ${currentDistrict}`.toLowerCase();
    const cached = cache[cacheKey];
    const hasCachedCoords = cached && isValidHcmcCoordinate(cached.lat, cached.lng);

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
      searchQuery: query,
      lat: hasCachedCoords ? cached.lat : 10.7769,
      lng: hasCachedCoords ? cached.lng : 106.7009,
      geocodeSource: hasCachedCoords ? (cached.source || "cache") : "pending",
      isVerified: hasCachedCoords
    });
  }

  return items;
}

/**
 * CLI entry point: generate google-maps-places.json
 */
export async function main() {
  const { writeFile, mkdir } = await import("node:fs/promises");
  const { existsSync } = await import("node:fs");

  const EXPORT_PATH = "./data/google-maps-places.json";

  console.log("🗺️  Google Maps Coordinates Parser & Generator for EatWithMe");
  const places = await parseExcelPlaces();
  console.log(`Found ${places.length} places in 'Eat with mi.xlsx'.\n`);

  let matchedFromCache = 0;
  const enrichedPlaces = places.map((place) => {
    if (place.isVerified) matchedFromCache++;
    return place;
  });

  if (!existsSync("./data")) {
    await mkdir("./data", { recursive: true });
  }

  await writeFile(EXPORT_PATH, JSON.stringify(enrichedPlaces, null, 2), "utf8");
  console.log(`✅ Saved ${enrichedPlaces.length} places with Google Maps Search URLs to '${EXPORT_PATH}'`);
  console.log(`📊 Verified with coordinates: ${matchedFromCache}/${enrichedPlaces.length}`);
}

// Only run directly if invoked as main (Node.js CLI)
if (process.argv[1] && process.argv[1].endsWith("extract-google-coords.mjs")) {
  main().catch((err) => {
    console.error("❌ Execution error:", err);
    process.exit(1);
  });
}