import { createServer } from "node:http";
import { mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";
const dataDir = join(root, "db");
const dataPath = join(dataDir, "runtime-state.json");
const maxBodyBytes = 512 * 1024;
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
};

const defaultUserState = () => ({
  saved: ["bun-cha-huong-lien", "lac-cafe"],
  notes: {},
  collections: [
    { id: "all", name: "Tất cả địa điểm", count: 2 },
    { id: "want", name: "Muốn thử", count: 1 },
    { id: "visited", name: "Đã ăn rồi", count: 1 },
  ],
});

let writeQueue = Promise.resolve();

async function readStore() {
  try {
    const parsed = JSON.parse(await readFile(dataPath, "utf8"));
    if (parsed && typeof parsed === "object" && parsed.users && typeof parsed.users === "object") return parsed;
  } catch {
    // First run or a partially written file: start with an empty store.
  }
  return { version: 1, users: {} };
}

function userIdFrom(request) {
  const candidate = String(request.headers["x-eatwithme-user"] || "demo").trim();
  return /^[A-Za-z0-9._-]{1,80}$/.test(candidate) ? candidate : "demo";
}

function sanitizeState(input) {
  const source = input && typeof input === "object" ? input : {};
  const saved = Array.isArray(source.saved)
    ? [...new Set(source.saved.filter((value) => typeof value === "string" && value.length <= 160))].slice(0, 500)
    : [];
  const notes = {};
  if (source.notes && typeof source.notes === "object" && !Array.isArray(source.notes)) {
    for (const [placeId, note] of Object.entries(source.notes).slice(0, 500)) {
      if (typeof placeId === "string" && typeof note === "string" && placeId.length <= 160) notes[placeId] = note.slice(0, 4000);
    }
  }
  const collections = Array.isArray(source.collections)
    ? source.collections.slice(0, 100).flatMap((collection) => {
      if (!collection || typeof collection !== "object") return [];
      const id = typeof collection.id === "string" ? collection.id.slice(0, 100) : "";
      const name = typeof collection.name === "string" ? collection.name.trim().slice(0, 120) : "";
      const count = Number.isInteger(collection.count) ? Math.max(0, Math.min(collection.count, 500)) : 0;
      return id && name ? [{ id, name, count }] : [];
    })
    : defaultUserState().collections;
  return { saved, notes, collections };
}

async function persistStore(store) {
  await mkdir(dataDir, { recursive: true });
  const temporaryPath = `${dataPath}.${process.pid}.tmp`;
  await writeFile(temporaryPath, JSON.stringify(store, null, 2), "utf8");
  await rename(temporaryPath, dataPath);
}

function queueStoreUpdate(update) {
  writeQueue = writeQueue.catch(() => undefined).then(async () => {
    const store = await readStore();
    update(store);
    await persistStore(store);
  });
  return writeQueue;
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, X-EatWithMe-User",
  });
  response.end(JSON.stringify(payload));
}

async function readJson(request) {
  const chunks = [];
  let length = 0;
  for await (const chunk of request) {
    length += chunk.length;
    if (length > maxBodyBytes) throw Object.assign(new Error("Request body too large"), { status: 413 });
    chunks.push(chunk);
  }
  if (!length) return {};
  try { return JSON.parse(Buffer.concat(chunks).toString("utf8")); }
  catch { throw Object.assign(new Error("Invalid JSON"), { status: 400 }); }
}

async function handleApi(request, response, pathname) {
  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, X-EatWithMe-User",
      "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
    });
    response.end();
    return true;
  }
  if (pathname === "/api/health" && request.method === "GET") {
    sendJson(response, 200, { ok: true, service: "eatwithme-api", version: 1 });
    return true;
  }
  if (pathname === "/api/v1/geoip" && request.method === "GET") {
    sendJson(response, 200, {
      ok: true,
      city: "Hà Nội",
      lat: 21.0285,
      lng: 105.8542,
      country: "VN",
    });
    return true;
  }
  if (pathname === "/api/v1/tags/check" && request.method === "GET") {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const raw = (url.searchParams.get("tag") || "").trim().toLowerCase();
    const tag = raw.startsWith("@") ? raw : `@${raw}`;
    const myId = userIdFrom(request);
    const store = await readStore();
    const tags = store.tags || {};
    const taken = Boolean(tags[tag] && tags[tag] !== myId);
    sendJson(response, 200, { ok: true, tag, available: !taken });
    return true;
  }
  if (pathname === "/api/v1/tags/claim" && request.method === "PUT") {
    const body = await readJson(request);
    const raw = String(body.tag || "").trim().toLowerCase();
    const tag = raw.startsWith("@") ? raw : `@${raw}`;
    const myId = userIdFrom(request);
    const store = await readStore();
    const tags = store.tags || {};
    if (tags[tag] && tags[tag] !== myId) {
      sendJson(response, 409, { ok: false, error: `Tag ${tag} đã có người sử dụng`, available: false });
      return true;
    }
    await queueStoreUpdate((nextStore) => {
      nextStore.tags = nextStore.tags || {};
      for (const [t, u] of Object.entries(nextStore.tags)) {
        if (u === myId) delete nextStore.tags[t];
      }
      nextStore.tags[tag] = myId;
    });
    sendJson(response, 200, { ok: true, tag, available: true });
    return true;
  }
  if (pathname !== "/api/v1/state" || !["GET", "PUT"].includes(request.method)) return false;

  const userId = userIdFrom(request);
  const store = await readStore();
  if (request.method === "GET") {
    const exists = Boolean(store.users[userId]);
    const state = sanitizeState(store.users[userId] || defaultUserState());
    sendJson(response, 200, { data: state, exists, updatedAt: store.users[userId]?.updatedAt || null });
    return true;
  }

  const body = await readJson(request);
  const nextState = sanitizeState(body.data || body);
  await queueStoreUpdate((nextStore) => {
    nextStore.users[userId] = { ...nextState, updatedAt: new Date().toISOString() };
  });
  const latest = await readStore();
  sendJson(response, 200, { data: sanitizeState(latest.users[userId]), updatedAt: latest.users[userId]?.updatedAt || null });
  return true;
}

const server = createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
    if (pathname.startsWith("/api/")) {
      const handled = await handleApi(request, response, pathname);
      if (handled) return;
      sendJson(response, 404, { error: "Not found" });
      return;
    }
    const requested = pathname === "/" ? "/index.html" : pathname;
    const safePath = normalize(join(root, requested));
    if (!safePath.startsWith(root)) {
      response.writeHead(403);
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
    if (request.url?.startsWith("/api/")) sendJson(response, status, { error: error.message || "Server error" });
    else {
      response.writeHead(status);
      response.end(`Server error: ${error.message}`);
    }
  }
});

server.listen(port, host, () => {
  console.log(`EatWithMe MVP running at http://localhost:${port}`);
});
