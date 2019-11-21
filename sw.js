importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09480a3145cb8f62920b.js",
    "revision": "8d76167e90db90ef59e9953b6318058b"
  },
  {
    "url": "/_nuxt/0d3b5575a18365da4beb.js",
    "revision": "c7dbbccbaf7263ec98181cb0f5e1fb87"
  },
  {
    "url": "/_nuxt/1e85ed4e9ae144ca2e31.js",
    "revision": "0695aa3aeb0a48d7570446339b80a05c"
  },
  {
    "url": "/_nuxt/363a8aa92442218e5342.js",
    "revision": "096ee2f84945017ab13a30d8703456e1"
  },
  {
    "url": "/_nuxt/7da85b995d381bba13c2.js",
    "revision": "fede607fef6450d859a2bd86d1a9182f"
  },
  {
    "url": "/_nuxt/944232f80c9884c11c31.js",
    "revision": "735619da4f327146200e4280e0f03170"
  },
  {
    "url": "/_nuxt/a8a192cbe12f13e3c877.js",
    "revision": "5fcb39ab8efc92fce27762e87da3ffc1"
  },
  {
    "url": "/_nuxt/b03887fe32ae94ca47fa.js",
    "revision": "0de7bcde62fead0bdeb1e18a6a9a954b"
  },
  {
    "url": "/_nuxt/bfcc98eb44ec63273ec7.js",
    "revision": "ba52b9c2203e0e2fdadc7becd70d59f3"
  },
  {
    "url": "/_nuxt/c54777bdbefdffb7c0be.js",
    "revision": "bf24261b9279c8e722873bc00fab0a0e"
  },
  {
    "url": "/_nuxt/d876e515ad7ea7b8402c.js",
    "revision": "85c5feaf7cd70cfe3e1f2d0c82777199"
  },
  {
    "url": "/_nuxt/e2279aec5d51a7990d23.js",
    "revision": "ad7e565e3ddfeaa42abd72afa1c39eed"
  },
  {
    "url": "/_nuxt/e52a9c843a610f51f89d.js",
    "revision": "a00279fdd2e61455d4e31d839f9317f3"
  }
], {
  "cacheId": "personal",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
