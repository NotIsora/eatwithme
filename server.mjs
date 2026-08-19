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
