// Vercel Serverless Function entry point for EatWithMe API

const memoryStore = {
  users: {},
  tags: {
    "@maianh.foodie": "mai",
    "@quanle.hanoi": "quan",
    "@linh.foodlover": "linh",
    "@minhpham.eat": "minh",
    "@eatwithme": "current_user",
  },
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

function userIdFrom(req) {
  const candidate = String(req.headers["x-eatwithme-user"] || "demo").trim();
  return /^[A-Za-z0-9._-]{1,80}$/.test(candidate) ? candidate : "demo";
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-EatWithMe-User");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
  res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  const host = req.headers.host || "localhost";
  const url = new URL(req.url, `https://${host}`);
  const pathname = url.pathname;

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-EatWithMe-User");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
    res.end();
    return;
  }

  // Health check
  if (pathname === "/api/health" || pathname === "/api/health/") {
    return sendJson(res, 200, { ok: true, service: "eatwithme-vercel-serverless", version: 1 });
  }

  // GeoIP mockup
  if (pathname === "/api/v1/geoip") {
    return sendJson(res, 200, {
      ok: true,
      city: "Hà Nội",
      lat: 21.0285,
      lng: 105.8542,
      country: "VN",
    });
  }

  // Tag Check API
  if (pathname === "/api/v1/tags/check") {
    const raw = (url.searchParams.get("tag") || "").trim().toLowerCase();
    const tag = raw.startsWith("@") ? raw : `@${raw}`;
    const myId = userIdFrom(req);
    const tags = memoryStore.tags || {};
    const taken = Boolean(tags[tag] && tags[tag] !== myId);
    return sendJson(res, 200, { ok: true, tag, available: !taken });
  }

  // Tag Claim API
  if (pathname === "/api/v1/tags/claim" && req.method === "PUT") {
    const body = typeof req.body === "object" ? req.body : JSON.parse(req.body || "{}");
    const raw = String(body.tag || "").trim().toLowerCase();
    const tag = raw.startsWith("@") ? raw : `@${raw}`;
    const myId = userIdFrom(req);
    const tags = memoryStore.tags || {};

    if (tags[tag] && tags[tag] !== myId) {
      return sendJson(res, 409, { ok: false, error: `Tag ${tag} đã có người sử dụng`, available: false });
    }

    for (const [t, u] of Object.entries(tags)) {
      if (u === myId) delete tags[t];
    }
    tags[tag] = myId;

    return sendJson(res, 200, { ok: true, tag, available: true });
  }

  // State Sync API (GET / PUT)
  if (pathname === "/api/v1/state") {
    const userId = userIdFrom(req);
    if (req.method === "GET") {
      const userRecord = memoryStore.users[userId];
      const data = userRecord?.data || defaultUserState();
      return sendJson(res, 200, { data, exists: Boolean(userRecord), updatedAt: userRecord?.updatedAt || null });
    }
    if (req.method === "PUT") {
      const body = typeof req.body === "object" ? req.body : JSON.parse(req.body || "{}");
      const nextData = body.data || body;
      memoryStore.users[userId] = {
        data: nextData,
        updatedAt: new Date().toISOString(),
      };
      return sendJson(res, 200, { data: nextData, updatedAt: memoryStore.users[userId].updatedAt });
    }
  }

  return sendJson(res, 404, { error: "API endpoint not found" });
}
