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
    "revision": "2bb47121fd69faeb3bda18bf130b6f79"
  },
  {
    "url": "About.html",
    "revision": "477932f51b4e8e8acda9e996ada83e5d"
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
    "url": "assets/js/10.6e91c46c.js",
    "revision": "99ba9bc3db3490383d98d5eb761b839a"
  },
  {
    "url": "assets/js/11.51709d37.js",
    "revision": "0d2c2ca9202cca0183b5ea2aa56ec1a1"
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
    "url": "assets/js/14.1097b38a.js",
    "revision": "769cdecad93b6526b71b69a60220cb73"
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
    "url": "assets/js/18.32eb0e3d.js",
    "revision": "d6d9de7894fdd193dab5c1639dfd4370"
  },
  {
    "url": "assets/js/19.b50c2d6a.js",
    "revision": "e658ce3e90664f37ad102163a5760c47"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.440452c0.js",
    "revision": "f0f03d49220ec3d82c2ea483293b2016"
  },
  {
    "url": "assets/js/21.46512f3f.js",
    "revision": "e5ffa6179f6866b842e4cf8c6a9edb64"
  },
  {
    "url": "assets/js/22.33b15eb5.js",
    "revision": "659084679b16c5f58e6a368b4d2e9871"
  },
  {
    "url": "assets/js/23.dde2d44f.js",
    "revision": "c611a1418ac8b64e432cd1f3197a4d84"
  },
  {
    "url": "assets/js/24.327c2a40.js",
    "revision": "61fc7de74fd07d250a767d1dc3b8553d"
  },
  {
    "url": "assets/js/25.5fbbc176.js",
    "revision": "b6901aec46923e843f7dc60aa2169046"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.df9681b5.js",
    "revision": "ea60694c0e9701a870d72479c285db8a"
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
    "url": "assets/js/app.809ce3a3.js",
    "revision": "2a94c9d8be426c9bdb844a50c17fd401"
  },
  {
    "url": "category/index.html",
    "revision": "e134880d60bcf56759c427f7ecf0048a"
  },
  {
    "url": "egg/index.html",
    "revision": "e8d1ce73f69dfcdd0df003efa866f07f"
  },
  {
    "url": "electron/index.html",
    "revision": "b7e2749862840e64719645968699fff5"
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
    "revision": "e8662e4be42f2eb33a175d7a6fb5a7aa"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "43b8efbe93d06a70bf4ae36e89f18e0a"
  },
  {
    "url": "notes/git.html",
    "revision": "24237baa4abe7b4c349cc2c38a000294"
  },
  {
    "url": "notes/index.html",
    "revision": "7f4c03f79423681ad0ab205b2b7780ce"
  },
  {
    "url": "notes/nginx.html",
    "revision": "eac77b2c57e58231ae9353ba72b3c54b"
  },
  {
    "url": "notes/node.html",
    "revision": "d1b5bf24b929f42655e2ce8a22ebc44c"
  },
  {
    "url": "notes/npm.html",
    "revision": "7dc344cbf88a72b4c1f8abd5cdcf47b4"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "fe75768f1569ba8dc8b1ad658758f25e"
  },
  {
    "url": "notes/vscode.html",
    "revision": "5c648f04184688b61b1e1f9b0bc090da"
  },
  {
    "url": "tag/index.html",
    "revision": "148b519010be7398acaaa9cab182b042"
  },
  {
    "url": "uniapp/index.html",
    "revision": "bca13f53f6b9b13506be8f5ff0aa3474"
  },
  {
    "url": "website/index.html",
    "revision": "69de69f93ac092adce9cae9410c362b7"
  },
  {
    "url": "website/package.html",
    "revision": "998410631ca1f1e5bc485b9bc6029d53"
  },
  {
    "url": "website/rearend.html",
    "revision": "99462d6a98f877287cb9202195b8420c"
  },
  {
    "url": "website/tools.html",
    "revision": "54258758e3cbd4835ccdd5ca4da5d259"
  },
  {
    "url": "website/webclient.html",
    "revision": "07d97f374e33ecf0e3f7abe9323174b1"
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
