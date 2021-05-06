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
    "revision": "c7d28a7285f9e6f61b0a73cdfaaf121c"
  },
  {
    "url": "About.html",
    "revision": "77984f115ce750db6dc415e36fab8bdc"
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
    "url": "assets/js/12.08ebf092.js",
    "revision": "f415c4c5c2c97889329134cc254e6450"
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
    "url": "assets/js/16.42fb2d56.js",
    "revision": "4df75fb4678d042d53c78420714ecbbf"
  },
  {
    "url": "assets/js/17.6cfcb7eb.js",
    "revision": "af70f388b4ac86106162aab4fbb9c9f4"
  },
  {
    "url": "assets/js/18.31f2d100.js",
    "revision": "4f627604dd7495e1ff31eadf22e8b931"
  },
  {
    "url": "assets/js/19.344ca220.js",
    "revision": "f28e9260e194f4e548e7982f003090a8"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.a94d7e80.js",
    "revision": "1c0f5677bfcd53fad0f4756418b7ec94"
  },
  {
    "url": "assets/js/21.a5a47f14.js",
    "revision": "601de7df001c80023f587ea3c141dece"
  },
  {
    "url": "assets/js/22.ac45a41c.js",
    "revision": "0c180645d0dbd29c760e2702357d2e87"
  },
  {
    "url": "assets/js/23.6173ea63.js",
    "revision": "f02e91015e6ca6cc166f6f0750f182ba"
  },
  {
    "url": "assets/js/24.6096bd8e.js",
    "revision": "0d36d20f30118bf0eb83727a32bcc942"
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
    "url": "assets/js/app.cf5b9c27.js",
    "revision": "4753db61a13fe31cde21d2db16cd568e"
  },
  {
    "url": "category/index.html",
    "revision": "a22e66f6726328a4ddafd9cd51261233"
  },
  {
    "url": "egg/index.html",
    "revision": "2aa7a26617831d0a9a86e33113fd9879"
  },
  {
    "url": "electron/index.html",
    "revision": "410bc302947914ff9fd90497a09fe95f"
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
    "revision": "f115733bf29f5cc86da2bd9003b95117"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "14034d3beae67aae23cffafa9a0b436d"
  },
  {
    "url": "notes/git.html",
    "revision": "afc9ce8d643f5ba6ff8b1b37c7c4fc9d"
  },
  {
    "url": "notes/index.html",
    "revision": "74b49b35c484d28f656fc4e8a90a3393"
  },
  {
    "url": "notes/nginx.html",
    "revision": "c06b3c08896def69647292b9ff4aec08"
  },
  {
    "url": "notes/node.html",
    "revision": "dc7dab75d2c812969dac92d32ee49e51"
  },
  {
    "url": "notes/npm.html",
    "revision": "7c304be7ed5ac0d988f89cf2d9f8323f"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "4b376e22cc0216fcbe456567be434e3b"
  },
  {
    "url": "notes/vscode.html",
    "revision": "43ff9c99c8ddb1e2e7e998f5f88f8f85"
  },
  {
    "url": "tag/index.html",
    "revision": "f1aa7231bad28e9c6bac0282cefa6c52"
  },
  {
    "url": "uniapp/index.html",
    "revision": "434319e9f8b914ee8a8cb16930e720c2"
  },
  {
    "url": "website/index.html",
    "revision": "cd357614b46798e7754b68c5ed94cfac"
  },
  {
    "url": "website/package.html",
    "revision": "f274086933de712f18b9a8c1581d615e"
  },
  {
    "url": "website/rearend.html",
    "revision": "5b3971351d27b5cd547f12c9cd79837c"
  },
  {
    "url": "website/tools.html",
    "revision": "b771f36a7d0ba0bbedb15d60a90791c1"
  },
  {
    "url": "website/webclient.html",
    "revision": "382e2a1eaf31e81c3d2563f43d5f0c10"
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
