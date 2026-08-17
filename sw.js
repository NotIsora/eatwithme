// Bump this whenever the app shell changes so an older cached app.js cannot
// hide newly shipped features such as the interactive map.
const CACHE_NAME = "eatwithme-shell-v18";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
];
const NETWORK_FIRST_PATHS = new Set([
  "",
  "/",
  "index.html",
  "/index.html",
  "styles.css",
  "/styles.css",
  "app.js",
  "/app.js",
  "sw.js",
  "/sw.js",
]);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
    )),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  // State is server-authoritative; never serve or persist API responses from the app shell cache.
  if (requestUrl.pathname.startsWith("/api/")) {
    event.respondWith(fetch(event.request));
    return;
  }
  if (NETWORK_FIRST_PATHS.has(requestUrl.pathname)) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response.ok && requestUrl.origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.match(event.request).then((cached) => cached || caches.match(requestUrl.pathname))),
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then((response) => {
        if (response.ok && requestUrl.origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => cached);
      return cached || network;
    }),
  );
});
