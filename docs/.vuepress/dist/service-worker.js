/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f46708a16669612582fad166355459d8"
  },
  {
    "url": "About.html",
    "revision": "d3df60f14a15a10fd25b5e6c47ea405b"
  },
  {
    "url": "assets/css/0.styles.0ea9ec4a.css",
    "revision": "0bb3c5fba32e1cea0173e1a20686c583"
  },
  {
    "url": "assets/img/logo.gif",
    "revision": "da16c0d8dbb602f333da1b4ba1a3141d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.986f205c.js",
    "revision": "87170068bb9c1a40e1852240d7d72234"
  },
  {
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
  },
  {
    "url": "assets/js/12.08ebf092.js",
    "revision": "f415c4c5c2c97889329134cc254e6450"
  },
  {
    "url": "assets/js/13.c32756ed.js",
    "revision": "2eaf7a7308e4ada021e36d2c8bc115ca"
  },
  {
    "url": "assets/js/14.b7510dfc.js",
    "revision": "143ad8d403018b76eaff10757b971ebd"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.42fb2d56.js",
    "revision": "4df75fb4678d042d53c78420714ecbbf"
  },
  {
    "url": "assets/js/17.3cc17eef.js",
    "revision": "df66f2f26124037bf046a17a0506f838"
  },
  {
    "url": "assets/js/18.90b640bb.js",
    "revision": "ba45b5cddc1ad73bddda7ba7bc051700"
  },
  {
    "url": "assets/js/19.6a9c8a35.js",
    "revision": "887659a57c97ff6a45a48585ddbde104"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.21e6c68d.js",
    "revision": "88af563ed5059abee7277006ca11a21e"
  },
  {
    "url": "assets/js/21.49686d0e.js",
    "revision": "41fd3e0360f7affea29fcc4cafaad2d2"
  },
  {
    "url": "assets/js/22.2bccdda1.js",
    "revision": "d8bba11c073168a231ac913f15e31486"
  },
  {
    "url": "assets/js/23.41063fc9.js",
    "revision": "f094cce9139e407651a7ef941a15addb"
  },
  {
    "url": "assets/js/24.adaded40.js",
    "revision": "64a434e9b82a1fdc770094ef961be013"
  },
  {
    "url": "assets/js/25.c9e4e5d5.js",
    "revision": "744558f732516ef4614f77e583124517"
  },
  {
    "url": "assets/js/26.b5cd22ab.js",
    "revision": "10d20167cb7c63ab7d66ac28c21d0426"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.b2dd4006.js",
    "revision": "fe395b7bd2ea0e7c868b024a2a7d139d"
  },
  {
    "url": "assets/js/5.e0a0fda5.js",
    "revision": "6d272b9fc157dd0c80a34648fcb35132"
  },
  {
    "url": "assets/js/6.cf47de03.js",
    "revision": "6270f0954235fb0f3e56e11cca26d041"
  },
  {
    "url": "assets/js/7.93656afc.js",
    "revision": "39a2049c8983604b41201c97b8b5c780"
  },
  {
    "url": "assets/js/8.e053df84.js",
    "revision": "638bb3d8bf3ef327a7b7b65e1b3324c9"
  },
  {
    "url": "assets/js/9.892cfdd5.js",
    "revision": "5efb292ac5581ce5c5df189e7616c9df"
  },
  {
    "url": "assets/js/app.b9c310c9.js",
    "revision": "45f9fa3522a1196fd056eeb7143e5cf3"
  },
  {
    "url": "category/index.html",
    "revision": "a9bb509a61a0c25a093a98912883e1e2"
  },
  {
    "url": "egg/index.html",
    "revision": "bcf94a1aa9fc811faf47d09131704141"
  },
  {
    "url": "electron/index.html",
    "revision": "bec8cae04666590e182ca67d465e12b9"
  },
  {
    "url": "html/vscode/mac.html",
    "revision": "b5df510c230822915800c1c3e278e6e2"
  },
  {
    "url": "html/vscode/windows.html",
    "revision": "baec1f2bfd3068f08515f92a32fd4caf"
  },
  {
    "url": "index.html",
    "revision": "7a187f77524f9eedc9d0343088c8b7b1"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "246bdac0dea375206dc20b00725ab919"
  },
  {
    "url": "notes/git.html",
    "revision": "cce603271114a1e917731d1929b36061"
  },
  {
    "url": "notes/index.html",
    "revision": "729df567edfa363486381b3a3a809071"
  },
  {
    "url": "notes/nginx.html",
    "revision": "9d59ed20f8c43d02c3eb2a1913caa9d7"
  },
  {
    "url": "notes/node.html",
    "revision": "4204f8300dc74e6e8a9d60f3f9d78f49"
  },
  {
    "url": "notes/npm.html",
    "revision": "e11b8c9e9269cb9c0614e4cba1ca6033"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "855304992d884184db77f1cca5830350"
  },
  {
    "url": "notes/vscode.html",
    "revision": "b9264d8595596c98ee378c8201c67cf0"
  },
  {
    "url": "tag/index.html",
    "revision": "24abe25e49d3d6317d3dadaee48569fc"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "36a8dfcc5c773be2a793482d74469d88"
  },
  {
    "url": "uniapp/index.html",
    "revision": "aea92325195a6790ad9ecb804834b2c3"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "3da94c900081a6276ae3d4d47bedb1c8"
  },
  {
    "url": "website/index.html",
    "revision": "14a3be8ad97853d9dfda591c03585b09"
  },
  {
    "url": "website/package.html",
    "revision": "27d3099f16754fae0ed5a9838677e8d6"
  },
  {
    "url": "website/rearend.html",
    "revision": "a7b1246067a0a621a82406ed3478d6c5"
  },
  {
    "url": "website/tools.html",
    "revision": "37709529dbbdc316b7128282f99175d8"
  },
  {
    "url": "website/webclient.html",
    "revision": "dfdb59f36e4d8ec0dacd5a4e7745d955"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
