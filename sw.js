const CACHE='count-click-mobile-v2';
const FILES=['./','./index.html','./manifest.webmanifest','./assets/planet.svg','./assets/gem.svg','./assets/coin.svg','./assets/monster.svg','./assets/meteor.svg','./assets/background-space.svg','./assets/background-cavern.svg','./assets/background-meteor.svg','./assets/app-icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{if(response.ok&&new URL(event.request.url).origin===location.origin){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>caches.match('./index.html')))));
