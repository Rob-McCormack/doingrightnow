/* Doing Right Now — light service worker
   HTML: network-first (auto-update when online, cache when offline)
   Icons: cache-first
   Journal data stays in localStorage — this file never touches it.

   Safari (iOS PWA) rejects navigation responses whose `redirected` flag is
   true: "Response served by service worker has redirections".
   doingrightnow.com 307s /DoingRightNow.html → /DoingRightNow, so every
   fetch() of the .html URL is redirected. Strip that flag before we cache
   or return the response.
*/
const CACHE = 'doingrightnow-v3';
const JOURNAL_URLS = ['./DoingRightNow', './DoingRightNow.html'];
const PRECACHE = JOURNAL_URLS.concat([
  './favicon.svg',
  './favicon-16x16.png',
  './images/favicon-32x32.png',
  './images/favicon-48x48.png',
  './images/favicon-180x180.png',
  './images/favicon-192x192.png',
  './images/favicon-512x512.png'
]);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => precacheAll(cache, PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isHTML = event.request.mode === 'navigate'
    || url.pathname.endsWith('.html')
    || url.pathname.endsWith('/')
    || /\/DoingRightNow$/i.test(url.pathname);

  event.respondWith(isHTML ? networkFirst(event.request) : cacheFirst(event.request));
});

async function precacheAll(cache, urls) {
  await Promise.all(urls.map(async (url) => {
    try {
      const response = await fetchClean(url);
      if (response && response.ok) await cache.put(url, response);
    } catch (err) {}
  }));
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const fresh = await fetchClean(request);
    if (fresh && fresh.ok) {
      cache.put(request, fresh.clone());
      return fresh;
    }
    const cached = await matchCached(cache, request);
    if (cached) return cached;
    return fresh;
  } catch (err) {
    const cached = await matchCached(cache, request);
    if (cached) return cached;
    throw err;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return withoutRedirectFlag(cached);
  const fresh = await fetchClean(request);
  if (fresh && fresh.ok) cache.put(request, fresh.clone());
  return fresh;
}

async function matchCached(cache, request) {
  const direct = await cache.match(request);
  if (direct) return withoutRedirectFlag(direct);
  if (request.mode !== 'navigate') return undefined;
  for (const url of JOURNAL_URLS) {
    const fallback = await cache.match(url);
    if (fallback) return withoutRedirectFlag(fallback);
  }
  return undefined;
}

/* Follow redirects, then return a Response Safari will accept for navigation. */
async function fetchClean(request) {
  const init = { redirect: 'follow' };
  const response = typeof request === 'string'
    ? await fetch(request, init)
    : await fetch(new Request(request, init));
  return withoutRedirectFlag(response);
}

async function withoutRedirectFlag(response) {
  if (!response || !response.redirected) return response;
  return new Response(await response.blob(), {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}
