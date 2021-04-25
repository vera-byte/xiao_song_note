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
    "revision": "49ab217eb0928fed0568c52439aed573"
  },
  {
    "url": "About.html",
    "revision": "ce74a286825f6ac549159a3d935c0acf"
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
    "url": "assets/js/10.7abc4dfd.js",
    "revision": "4c80d18ec05b536757e2aef44c6e88d2"
  },
  {
    "url": "assets/js/11.ac0b9adb.js",
    "revision": "f05685b1d80b3f27632018a98b762522"
  },
  {
    "url": "assets/js/12.2d8a3b61.js",
    "revision": "8a47c1a695de15fcb338d28c02c86fb0"
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
    "url": "assets/js/17.b272e4be.js",
    "revision": "ac2628d20edb470d212035907e3922ee"
  },
  {
    "url": "assets/js/18.9fcea992.js",
    "revision": "0ca648444b1a41c11c8b4db9cdd590e5"
  },
  {
    "url": "assets/js/19.5e67a2a9.js",
    "revision": "7343beb3cdbe09d4d4fb2f1aedb31e8e"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.c7f538db.js",
    "revision": "6dd48be72d6f88c6f7592d7747adfb5f"
  },
  {
    "url": "category/index.html",
    "revision": "fc54bba869d00922dc23dd71fc1d0e0a"
  },
  {
    "url": "egg/index.html",
    "revision": "f6da195c4f29ad4570182558f2b24a21"
  },
  {
    "url": "electron/index.html",
    "revision": "8482ca17667b17fe1322533fa086c316"
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
    "revision": "816644deeff401834d493f4001919b6b"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "1af9a3aa72ff34dd3a7473152238d78c"
  },
  {
    "url": "notes/git.html",
    "revision": "880d7fccb92e9348a008c84f8393c37d"
  },
  {
    "url": "notes/index.html",
    "revision": "39a2964c186c03ee2150ce780b4f372b"
  },
  {
    "url": "notes/nginx.html",
    "revision": "7dcbdcfd27c223bb036a1cea526ea45b"
  },
  {
    "url": "notes/npm.html",
    "revision": "65f5ff2ed56c128b66071ef83056a828"
  },
  {
    "url": "notes/vscode.html",
    "revision": "4b65625567cbf409190bc8a7446334cc"
  },
  {
    "url": "tag/index.html",
    "revision": "2426be281a9b6289a2efccb3e70a8e95"
  },
  {
    "url": "uniapp/index.html",
    "revision": "ca219fe382c83efd7eb6033d0bb13799"
  },
  {
    "url": "website/index.html",
    "revision": "913b71812b266a93e5e7b8251b61bdf9"
  },
  {
    "url": "website/package.html",
    "revision": "d3d3183cf63dadfa37dfba993fa6456a"
  },
  {
    "url": "website/rearend.html",
    "revision": "0c3b6cc4c9d5121a9ff8065a7bdcbd87"
  },
  {
    "url": "website/tools.html",
    "revision": "d6eac5edccc5f9cbfea1ca1b08c8c1e9"
  },
  {
    "url": "website/webclient.html",
    "revision": "e2b2d0dcf013dcd504b125450cdf15b2"
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
