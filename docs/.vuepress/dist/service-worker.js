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
    "revision": "1410b47c813b915a0b74b13b1eebd84a"
  },
  {
    "url": "About.html",
    "revision": "5c2af9070999ef1560bf2fddd879659f"
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
    "url": "assets/js/13.c32756ed.js",
    "revision": "2eaf7a7308e4ada021e36d2c8bc115ca"
  },
  {
    "url": "assets/js/14.486c076f.js",
    "revision": "3d049af2feb4983388fff602fd85e80c"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.e0611705.js",
    "revision": "d8ad7a143273b0a56eb5753e880561e0"
  },
  {
    "url": "assets/js/17.dc50463f.js",
    "revision": "5890a6c9e83847ce59f4408f8e0ee6cd"
  },
  {
    "url": "assets/js/18.3a34dad4.js",
    "revision": "c64868cba270e124c9d7811edfef9581"
  },
  {
    "url": "assets/js/19.01f406cd.js",
    "revision": "e1b4ff41640907ddee9c4a818486a0f0"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.5e2b8d62.js",
    "revision": "02615f95cc67f281d99d4ea0c74cf3c1"
  },
  {
    "url": "assets/js/21.1737bdb4.js",
    "revision": "94a1fe99ef725737641aabe52e711f47"
  },
  {
    "url": "assets/js/22.e6064936.js",
    "revision": "5f90487273397825498a741cf4e539cc"
  },
  {
    "url": "assets/js/23.255a43a8.js",
    "revision": "f7d4fda8af976d511348b89ea329d8d7"
  },
  {
    "url": "assets/js/24.a9689770.js",
    "revision": "7c490d8d7de5472b1a4195bb70003587"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.7a18389e.js",
    "revision": "7e0be230600155c4313508c8228cbd3a"
  },
  {
    "url": "category/index.html",
    "revision": "9d9f698bd45ec5b1f782feb86b30eaf1"
  },
  {
    "url": "egg/index.html",
    "revision": "5cbda64f6f0335ea6fe7fc315da61bb2"
  },
  {
    "url": "electron/index.html",
    "revision": "1c7992be713cacb5c86297d748772c6c"
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
    "revision": "1fc2dc1895c4397b22074d2de1da9042"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "f626f1a761ef6ab33cf88ffd669b23a1"
  },
  {
    "url": "notes/git.html",
    "revision": "3385efa0f0011aee0785a3078cad5a70"
  },
  {
    "url": "notes/index.html",
    "revision": "2c85f647eb10e89677024feb83a57832"
  },
  {
    "url": "notes/nginx.html",
    "revision": "b81d4052c9c418d62c6ae4b3257804c8"
  },
  {
    "url": "notes/node.html",
    "revision": "ed9604e812ca5b3023c4dcbb171f800b"
  },
  {
    "url": "notes/npm.html",
    "revision": "e46b9d4fd16d9c7c27a10a9e59039adc"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "0686bb981b3512c2713ec80750f3b1fa"
  },
  {
    "url": "notes/vscode.html",
    "revision": "4ad06376993cd56448ecdb3c3658f050"
  },
  {
    "url": "tag/index.html",
    "revision": "d2b22569f1eaaaf7931e746ab5650298"
  },
  {
    "url": "uniapp/index.html",
    "revision": "498ecc9cea5199c6e0be43d6dc32e714"
  },
  {
    "url": "website/index.html",
    "revision": "b76db3044e864f1e65e83f1af7dc4a69"
  },
  {
    "url": "website/package.html",
    "revision": "d0ee9a5a9d2e61ee1b93a0efb015f4cb"
  },
  {
    "url": "website/rearend.html",
    "revision": "6be8b0bed5456211bc49d265e8b2e528"
  },
  {
    "url": "website/tools.html",
    "revision": "88e1e436aff4d78a66284952b5d3f9af"
  },
  {
    "url": "website/webclient.html",
    "revision": "e35183575120bfccef80594c7fffa991"
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
