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
    "revision": "96741ac21ee2ee83b8f700bf9cc5ecde"
  },
  {
    "url": "About.html",
    "revision": "19c43976696231a7aac967ae9a268da4"
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
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
  },
  {
    "url": "assets/js/12.fe2aec7d.js",
    "revision": "c1a80f3e45455543c15e330856a85d3f"
  },
  {
    "url": "assets/js/13.80716ee1.js",
    "revision": "9d7ed16f55e8ee5bd36a4f3c8f3db8e5"
  },
  {
    "url": "assets/js/14.87918cc2.js",
    "revision": "c8c159bfa8750dfb5ebad3bbc39950fe"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.4ee2b5b0.js",
    "revision": "85785293803d8e3e2ff52270603c0842"
  },
  {
    "url": "assets/js/17.9f807a34.js",
    "revision": "8830193b153e09144fb08b4ab51cc458"
  },
  {
    "url": "assets/js/18.9fcea992.js",
    "revision": "0ca648444b1a41c11c8b4db9cdd590e5"
  },
  {
    "url": "assets/js/19.b5b4ad7c.js",
    "revision": "48f77443b94090b0feb1a1f5a0404b38"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.2afcc3cc.js",
    "revision": "f4b1194bbeb2aaa5854d8db4dd4f11f5"
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
    "url": "assets/js/9.0ad2f765.js",
    "revision": "f20367b9493e331ea24978554b1d3f77"
  },
  {
    "url": "assets/js/app.0703a62c.js",
    "revision": "4f5f65e3c9d7f3cbf1fe20e152b167ef"
  },
  {
    "url": "category/index.html",
    "revision": "0488bb88ddec2ee2d8026e5a7cb70231"
  },
  {
    "url": "egg/index.html",
    "revision": "39ba8dfd05f69353d51ae76b2b6cc9b9"
  },
  {
    "url": "electron/index.html",
    "revision": "cd7a729981af00eb8f106405ff73f6bd"
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
    "revision": "8088d4910e28c5f615af17d56a9ef9e2"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "759c903d8bb1083e31d4788664162177"
  },
  {
    "url": "notes/git.html",
    "revision": "ed945ce47fb51b6bd0b00bb6d56728f5"
  },
  {
    "url": "notes/index.html",
    "revision": "c4226f75fa9218affdc3611096d2721c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "dbe745f1bda9783887177848c192d8cf"
  },
  {
    "url": "notes/npm.html",
    "revision": "dfaf6d9432102b738dca2cb1de7abd28"
  },
  {
    "url": "notes/vscode.html",
    "revision": "0a2e37a5a3113bf1a529a3340d2247bf"
  },
  {
    "url": "tag/index.html",
    "revision": "d1810fc3d8a1d6d12bf001917c883db2"
  },
  {
    "url": "uniapp/index.html",
    "revision": "1b47de3275d8fd0cbabb3df18eb892e1"
  },
  {
    "url": "website/index.html",
    "revision": "4b371ff50b69ea02adf8424982ec7246"
  },
  {
    "url": "website/package.html",
    "revision": "8119823faa422095e14a299887da0a72"
  },
  {
    "url": "website/rearend.html",
    "revision": "cee61a2de4e8160a1eb1715ecbbbd4d6"
  },
  {
    "url": "website/tools.html",
    "revision": "68ddc773ac739b5495849677dca33d99"
  },
  {
    "url": "website/webclient.html",
    "revision": "f1b200c61021b3727829ea7e5060c1bd"
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
