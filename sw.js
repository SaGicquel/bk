const CACHE_NAME = 'bk-cache-v3';
const APP_SCOPE = '/bk/';
const APP_SHELL = [
  '/bk/',
  '/bk/index.html',
  '/bk/manifest.webmanifest',
  '/bk/icon-192.png',
  '/bk/icon-512.png',
  '/bk/apple-touch-icon-180.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// La page peut demander au nouveau SW de prendre la main immédiatement
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Navigation / app shell => network first for fast updates
  if (
    req.mode === 'navigate' ||
    url.pathname === '/bk' ||
    url.pathname === '/bk/' ||
    url.pathname.endsWith('/index.html')
  ) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('/bk/index.html', copy));
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          return cached || caches.match('/bk/index.html');
        })
    );
    return;
  }

  // Static assets => stale-while-revalidate style
  event.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req)
        .then(res => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
