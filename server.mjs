import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
};

const server = createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
    const requested = pathname === "/" ? "/index.html" : pathname;
    const safePath = normalize(join(root, requested));

    if (!safePath.startsWith(root)) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Forbidden");
      return;
    }

    let filePath = safePath;
    try {
      const fileStat = await stat(filePath);
      if (fileStat.isDirectory()) filePath = join(filePath, "index.html");
    } catch {
      filePath = join(root, "index.html");
    }

    // API endpoint to save manual geocode updates
    if (request.method === "POST" && pathname === "/api/save-place") {
      let body = "";
      request.on("data", chunk => body += chunk);
      request.on("end", async () => {
        try {
          const { id, lat, lng, source } = JSON.parse(body);
          if (!id || typeof lat !== "number" || typeof lng !== "number") {
            response.writeHead(400, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ error: "Invalid params" }));
            return;
          }

          // Update data/google-maps-places.json
          const placesPath = join(root, "data", "google-maps-places.json");
          const placesData = JSON.parse(await readFile(placesPath, "utf8"));
          const item = placesData.find(p => p.id === id);
          if (item) {
            item.lat = lat;
            item.lng = lng;
            item.geocodeSource = source || "manual_url";
            item.isVerified = true;
            await writeFile(placesPath, JSON.stringify(placesData, null, 2), "utf8");
          }

          // Update data/geocoded-cache.json
          const cachePath = join(root, "data", "geocoded-cache.json");
          let cache = {};
          try { cache = JSON.parse(await readFile(cachePath, "utf8")); } catch {}
          if (item) {
            const cacheKey = `${item.name} | ${item.rawAddress} | ${item.district}`.toLowerCase();
            cache[cacheKey] = { lat, lng, source: source || "manual_url" };
            await writeFile(cachePath, JSON.stringify(cache, null, 2), "utf8");
          }

          // Update app.js defaultPlaces array
          const appJsPath = join(root, "app.js");
          const appJsText = await readFile(appJsPath, "utf8");
          const cleanPlaces = placesData.map(({ googleSearchUrl, searchQuery, rawAddress, isVerified, geocodeSource, ...rest }) => rest);
          const updatedAppJs = appJsText.replace(
            /const defaultPlaces = \[[\s\S]*?\];\s*/,
            `const defaultPlaces = ${JSON.stringify(cleanPlaces, null, 2)};\n`
          );
          await writeFile(appJsPath, updatedAppJs, "utf8");

          response.writeHead(200, { "Content-Type": "application/json" });
          response.end(JSON.stringify({ success: true, id, lat, lng }));
        } catch (e) {
          response.writeHead(500, { "Content-Type": "application/json" });
          response.end(JSON.stringify({ error: e.message }));
        }
      });
      return;
    }

    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mime[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(body);
  } catch (error) {
    const status = Number(error?.status) || 500;
    response.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(`Server error: ${error.message}`);
  }
});

server.listen(port, host, () => {
  console.log(`EatWithMe (Local-First) running at http://localhost:${port}`);
});
