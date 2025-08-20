// Define o nome do cache
const CACHE_NAME = 'post-it-inteligente-cache-v1';

// Lista dos ficheiros essenciais para a aplicação funcionar offline
const urlsToCache = [
  './', // Alteração aqui: garante que a página inicial é guardada em cache
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Evento de Instalação: Guarda os ficheiros em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de Fetch: Interceta os pedidos à rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se o ficheiro existir em cache, retorna-o
        if (response) {
          return response;
        }
        // Caso contrário, vai à rede buscar o ficheiro
        return fetch(event.request);
      }
    )
  );
});