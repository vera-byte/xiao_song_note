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
    "revision": "f26cd999e7d6021ba58258c72cefdab9"
  },
  {
    "url": "About.html",
    "revision": "42e0d3cbdfb8cb6b63ce6b592756e5a4"
  },
  {
    "url": "assets/css/0.styles.204ca79c.css",
    "revision": "02438da548ff7707509d06b919708320"
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
    "url": "assets/js/10.6da2c69b.js",
    "revision": "933be505b727eaf5e68f204e12bb2cf8"
  },
  {
    "url": "assets/js/11.4036c215.js",
    "revision": "0dd8015939825f1086957a1f825f91fb"
  },
  {
    "url": "assets/js/12.49162663.js",
    "revision": "9073a6d1fabb9f4482b7ad277471298d"
  },
  {
    "url": "assets/js/13.b2305354.js",
    "revision": "062a12b41ee636e3f89ff6506beb63c1"
  },
  {
    "url": "assets/js/14.051b4f1a.js",
    "revision": "f8830d43a3fcf9fbfd617d906893f855"
  },
  {
    "url": "assets/js/15.ee2111bd.js",
    "revision": "9a293eb88c07c7853b45186628c29bb7"
  },
  {
    "url": "assets/js/16.f51c31a5.js",
    "revision": "7ca81fa1714a110e8b6d0e00fcaff76d"
  },
  {
    "url": "assets/js/17.a1e1a804.js",
    "revision": "20dd2b4017d422d9d3d256178ffa8092"
  },
  {
    "url": "assets/js/18.a6bbe5ec.js",
    "revision": "8e684141f456037607076e5f42931640"
  },
  {
    "url": "assets/js/19.92c31c1b.js",
    "revision": "b26ad8af3c48a049108fd3cbc0b66cd1"
  },
  {
    "url": "assets/js/2.179600ff.js",
    "revision": "3e50929d5d6bfe51882aeee65154e364"
  },
  {
    "url": "assets/js/20.7d9f1f38.js",
    "revision": "06c5662ed9cbdea9b3d020903c1f43d3"
  },
  {
    "url": "assets/js/21.8fb3889c.js",
    "revision": "cb7e0f31a4b934871c7c7a8f83d8e52a"
  },
  {
    "url": "assets/js/22.c5f39475.js",
    "revision": "300a53338368c6796517131b2ae596a2"
  },
  {
    "url": "assets/js/3.68e87797.js",
    "revision": "f6bb1634ad75e33bc1dc30781ddf6590"
  },
  {
    "url": "assets/js/4.bed2d8d2.js",
    "revision": "3f8139760e963d9c6f626370f8f2ef00"
  },
  {
    "url": "assets/js/5.9e4134d1.js",
    "revision": "b6833ece2b864b45314ee40aedbf8946"
  },
  {
    "url": "assets/js/6.5bfcac76.js",
    "revision": "3c30601ea0d363e89607b216dae396de"
  },
  {
    "url": "assets/js/7.38cf579a.js",
    "revision": "df3f75ab5183e439a7993824ca8acb24"
  },
  {
    "url": "assets/js/8.7f3bd16a.js",
    "revision": "110b977eaf009925fc7cb5abf5d80960"
  },
  {
    "url": "assets/js/9.1d7d2680.js",
    "revision": "575f2abc1f7a2492b0d1125fcbfb87c0"
  },
  {
    "url": "assets/js/app.2d4e7030.js",
    "revision": "8451edeac75071408631b2f2f08e81d4"
  },
  {
    "url": "category/index.html",
    "revision": "7e3ca7c15e919b6f2df6f004d076f7e6"
  },
  {
    "url": "egg/index.html",
    "revision": "22029a745dbf115b9da5653cf783c6b8"
  },
  {
    "url": "electron/index.html",
    "revision": "74fbd6cbec77c5b766084c50fbbfec71"
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
    "revision": "54ac57852e2f1d2df027ffa109e6edca"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "8dead4ca1df69558eab9ddef351c5d2d"
  },
  {
    "url": "notes/git.html",
    "revision": "c74057f73e469fe998fadab98f98765e"
  },
  {
    "url": "notes/index.html",
    "revision": "983c55013d06c90e828b283abfc2ea23"
  },
  {
    "url": "notes/nginx.html",
    "revision": "91da5fee021fc30478e6d99867df8eb0"
  },
  {
    "url": "notes/npm.html",
    "revision": "422afaf0a049677f14e3efc2000f6e1a"
  },
  {
    "url": "notes/vscode.html",
    "revision": "acbb0d6cffd894f23da68e6f1f0f3dc1"
  },
  {
    "url": "tag/index.html",
    "revision": "242e7b96e2daba4d5d599767b313d090"
  },
  {
    "url": "uniapp/index.html",
    "revision": "c93addb3a681d19b1bf4ab6c062889bd"
  },
  {
    "url": "website/index.html",
    "revision": "773f55d494a55b3839d7b8c3e8f07bba"
  },
  {
    "url": "website/rearend.html",
    "revision": "6726541b9570b11da2b9a966c26643b6"
  },
  {
    "url": "website/tools.html",
    "revision": "c4a58191cc4f7819fba545e4d1fc6a9e"
  },
  {
    "url": "website/webclient.html",
    "revision": "b9d849aa5d2218389e3e78042deb19da"
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
