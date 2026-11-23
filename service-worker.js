const CACHE_NAME = 'vtest-pwa-v1.0.0';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './servers.js',
  './config.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function isBypassedUrl(urlObj) {
  const host = urlObj.hostname.toLowerCase();
  const path = urlObj.pathname.toLowerCase();

  if (
    host.includes('speed.cloudflare.com') ||
    path.includes('/__down') ||
    path.includes('/download') ||
    path.includes('/upload') ||
    path.includes('/ping') ||
    path.includes('/api/') ||
    host.includes('ipwho.is') ||
    host.includes('ipapi.co') ||
    host.includes('nominatim.openstreetmap.org')
  ) {
    return true;
  }
  return false;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  let urlObj;
  try {
    urlObj = new URL(req.url);
  } catch {
    return;
  }

  if (isBypassedUrl(urlObj)) {
    return;
  }

  if (urlObj.origin === self.location.origin) {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
          }
          return networkRes;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
  }
});
