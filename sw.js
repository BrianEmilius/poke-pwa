async function addResourcesToCache(resources) {
	const cache = await caches.open("v1")
	await cache.addAll(resources)
}

self.addEventListener("install", function (event) {
	event.waitUntil(
		addResourcesToCache([
			"/",
			"/index.html",
			"/details.html",
			"/icon.png",
			"/icon144.png",
			"/details.js",
			"/list.js",
			"/style.css",
			"/manifest.json",
			"/sw.js"
		])
	)
})


self.addEventListener("fetch", function (event) {
	console.log("Handling fetch event for", event.request.url)
	
	if (event.request.method !== "GET") return

	event.respondWith(
		(async function () {
			const cache = await caches.open("v1")
			const cachedResponse = await cache.match(event.request)

			if (cachedResponse) {
				event.waitUntil(cache.add(event.request))
				return cachedResponse
			}

			return fetch(event.request)
		})()
	)
})
