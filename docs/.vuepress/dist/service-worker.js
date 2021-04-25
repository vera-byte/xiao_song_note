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
    "revision": "5a07631268519e2e53ab16c1dd8e827a"
  },
  {
    "url": "About.html",
    "revision": "b726b692fba2cf212ae8bc0826fbbbff"
  },
  {
    "url": "assets/css/0.styles.5ff83213.css",
    "revision": "6d9f0275a51edd04eb5c0a0220c2311f"
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
    "url": "assets/js/10.7abc4dfd.js",
    "revision": "4c80d18ec05b536757e2aef44c6e88d2"
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
    "url": "assets/js/13.80716ee1.js",
    "revision": "9d7ed16f55e8ee5bd36a4f3c8f3db8e5"
  },
  {
    "url": "assets/js/14.6b45c364.js",
    "revision": "5d50e97907c7385612e13ba4a375f582"
  },
  {
    "url": "assets/js/15.e0d41ce5.js",
    "revision": "2c0d48c27bd33ce87c98be7de2610fc9"
  },
  {
    "url": "assets/js/16.83dda819.js",
    "revision": "4e056de6fc27bb2795e2064842c4eb15"
  },
  {
    "url": "assets/js/17.4eb24542.js",
    "revision": "4645865b38af3d1f4d99340adaff33c2"
  },
  {
    "url": "assets/js/18.9fcea992.js",
    "revision": "0ca648444b1a41c11c8b4db9cdd590e5"
  },
  {
    "url": "assets/js/19.1bd2de47.js",
    "revision": "543eaefcc489b85e7d0210929524ce75"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.81be5394.js",
    "revision": "734cf9358c08c06d0256b953cb562538"
  },
  {
    "url": "assets/js/21.295fcfe2.js",
    "revision": "b4e0c27939fffc9e858e19f91a6a09f1"
  },
  {
    "url": "assets/js/22.014a2095.js",
    "revision": "461a41a805db444043d6be6788bc6072"
  },
  {
    "url": "assets/js/23.ff032486.js",
    "revision": "b2e7f183ed10f5c705c336e11aa168f2"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.3c886f31.js",
    "revision": "51e82fe7e95a54bc9b7e1bb6f983ece2"
  },
  {
    "url": "assets/js/5.5e46106a.js",
    "revision": "6b3a82f5d9b99d285b1f3b29b1b76842"
  },
  {
    "url": "assets/js/6.e86e045e.js",
    "revision": "3c02651623c6f53e11d57177197f5b98"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.f832fb39.js",
    "revision": "4921a8fb6d9ffe562c4b48a56d97cefd"
  },
  {
    "url": "category/index.html",
    "revision": "9182bb1227e3dcc878b7f2e720db9e5b"
  },
  {
    "url": "egg/index.html",
    "revision": "3d2437bc4878e12003ad34c9c7a697ea"
  },
  {
    "url": "electron/index.html",
    "revision": "e2c17395a51008d30bf2af591073a27f"
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
    "revision": "1f9413ef03cf754619592133026f4a52"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "c225cc9c2f7494a281f15ecc32229cad"
  },
  {
    "url": "notes/git.html",
    "revision": "fa26b12f58a0d75f398d061b86fafdc3"
  },
  {
    "url": "notes/index.html",
    "revision": "cce1f5246138db604bb55b550d2f0045"
  },
  {
    "url": "notes/nginx.html",
    "revision": "495a38f09d501ae8815b205f5ed2992a"
  },
  {
    "url": "notes/npm.html",
    "revision": "d2e847082c906ddad968485103bfe25d"
  },
  {
    "url": "notes/vscode.html",
    "revision": "f87294bb476886e07d542235f1687e3b"
  },
  {
    "url": "tag/index.html",
    "revision": "255d3e45ef389871921e7f204072024b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "5ccd367052dcb93e9d3e223f77b1f0a7"
  },
  {
    "url": "website/index.html",
    "revision": "339b2e0c521d7cc3e56fb33a2be3db5f"
  },
  {
    "url": "website/package.html",
    "revision": "25a086d47f84c6637c2292c9f43a8b67"
  },
  {
    "url": "website/rearend.html",
    "revision": "d45580622b5495a3a0ec36fe3fcf421a"
  },
  {
    "url": "website/tools.html",
    "revision": "f57514d98f693b9255337033e1febf28"
  },
  {
    "url": "website/webclient.html",
    "revision": "eeb14a7fd94c2adea809656362feaae0"
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
