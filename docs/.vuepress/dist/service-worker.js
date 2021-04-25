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
    "revision": "dd3799fe07e9466733f470176e2d7bc6"
  },
  {
    "url": "About.html",
    "revision": "db666907d18c1238028d1757a4575c79"
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
    "url": "assets/js/11.1f47a2f5.js",
    "revision": "9e74448fc2b093fa27e48c95b1c920c1"
  },
  {
    "url": "assets/js/12.08ebf092.js",
    "revision": "f415c4c5c2c97889329134cc254e6450"
  },
  {
    "url": "assets/js/13.b6365695.js",
    "revision": "ddd45b981bb0a00652b5f619f8b6a376"
  },
  {
    "url": "assets/js/14.d7607c87.js",
    "revision": "4e12d452e4e9e28776531b9a2e4730bb"
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
    "url": "assets/js/17.9d7672be.js",
    "revision": "76eec52ef60e22b45597ac4f1430c9f7"
  },
  {
    "url": "assets/js/18.af8870dd.js",
    "revision": "c0812f1a363d14c159ccb604543a4752"
  },
  {
    "url": "assets/js/19.8512369f.js",
    "revision": "b13767e83e8e144d732cba4a91294722"
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
    "url": "assets/js/21.26c4741c.js",
    "revision": "559cb286345fd4c10da36b0565be348c"
  },
  {
    "url": "assets/js/22.15945967.js",
    "revision": "98370fed22805ce219bf8dc5859a54a2"
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
    "url": "assets/js/9.a2c74a15.js",
    "revision": "b79b2623323121b8beb5536c4e55c89f"
  },
  {
    "url": "assets/js/app.600a6834.js",
    "revision": "3d385e8d2315eb7291dbae578dff5e3c"
  },
  {
    "url": "category/index.html",
    "revision": "71576d56d492b8febc95be61f5eefa81"
  },
  {
    "url": "egg/index.html",
    "revision": "443202967785e05615c0ea117fc0841e"
  },
  {
    "url": "electron/index.html",
    "revision": "7f968c37d8389d5efc6cc44a2e2f4552"
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
    "revision": "313c3bb2e2676094b56d9ebbbdf9b19a"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "e414009dc4cba185a3745da03f2d45d5"
  },
  {
    "url": "notes/git.html",
    "revision": "52a6524131c36bf02caf17326e4681aa"
  },
  {
    "url": "notes/index.html",
    "revision": "789cbf48205c4ca2343ff48557a8bcdb"
  },
  {
    "url": "notes/nginx.html",
    "revision": "6d2f4600ddc447b1214a8ff589d13f5d"
  },
  {
    "url": "notes/npm.html",
    "revision": "867746d55db482dd0bfcc62ed9b3fa07"
  },
  {
    "url": "notes/vscode.html",
    "revision": "43435c44cce906ff9752df02c17ce89b"
  },
  {
    "url": "tag/index.html",
    "revision": "053a95fb522863665368c65f0ee1788d"
  },
  {
    "url": "uniapp/index.html",
    "revision": "eb1fae68cf017500beaa35fa4876f232"
  },
  {
    "url": "website/index.html",
    "revision": "8e0ada4360eb28dbb31f453f89a562d8"
  },
  {
    "url": "website/package.html",
    "revision": "5a3e4478093581b2d083b0fdc560247f"
  },
  {
    "url": "website/rearend.html",
    "revision": "4819fd46e8c7a5af9afa37a3efc5a73a"
  },
  {
    "url": "website/tools.html",
    "revision": "3e36b4ff736aa5e481c3b8be60526f97"
  },
  {
    "url": "website/webclient.html",
    "revision": "9cdb123be267856d6ebe0e433540f057"
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
