const CACHE_NAME = 'ld-orcamentos-v1';
const urlsToCache = [
  './',
  './index.html',
  './aptos.html',
  './orcamentos.html',
  './empresa.html',
  './equipe.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache se encontrar, senão busca na internet
        return response || fetch(event.request);
      })
  );
});
