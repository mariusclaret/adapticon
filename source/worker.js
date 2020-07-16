const cache_name = "adapticon-6";
const fine_caches = [cache_name];
const static_files = [
    "/background.png",
    "/foreground.png",
    "/icons.json",
    "/index.html",
    "/script.json",
    "/style.css"
];

self.addEventListener("install", function (event) {
    self.skipWaiting();

    event.waitUntil(
        caches.open(cache_name).then(function (cache) {
            return cache.addAll(static_files);
        })
    );
});

self.addEventListener("fetch", function (event) {
    const url = new URL(event.request.url);

    if (url.origin == location.origin) {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            Promise.all(
                keys.map(function (key) {
                    if (!fine_caches.includes(key)) {
                        return caches.delete(key);
                    }
                })
            );
        })
    )
});