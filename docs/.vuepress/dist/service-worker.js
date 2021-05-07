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
    "revision": "00a33730db37131f33bab2e44dba2a0f"
  },
  {
    "url": "About.html",
    "revision": "d6c9e6b8c9b2b186d2dfe4e8c6bb0dfa"
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
    "url": "assets/js/18.29281fc5.js",
    "revision": "24e9951e94cff5bfe5523be8c16e26e1"
  },
  {
    "url": "assets/js/19.14b21146.js",
    "revision": "4bdf19625177be10047fd6aedee5955c"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.07651e55.js",
    "revision": "4fc0b2c2c27efadceeae85e6d0a97047"
  },
  {
    "url": "assets/js/21.acec6583.js",
    "revision": "a7a01cbe335ca11e2f9bbcdc347dbda3"
  },
  {
    "url": "assets/js/22.9acbd127.js",
    "revision": "9333a14f43c3c7cfa6ef03d96b292769"
  },
  {
    "url": "assets/js/23.67e6140b.js",
    "revision": "2112c16983612c30ceac8d8c80a5a205"
  },
  {
    "url": "assets/js/24.6c28261e.js",
    "revision": "acb0eb3e48042f3ab01515c58f078a35"
  },
  {
    "url": "assets/js/25.29935595.js",
    "revision": "3450b5db48b23c05c1435b26c8b6d32a"
  },
  {
    "url": "assets/js/26.15ffcce4.js",
    "revision": "df32063e3bf0b84b3bafad489447f9f7"
  },
  {
    "url": "assets/js/27.d79ab1bd.js",
    "revision": "d6eb1c61be9ac260e56a6d7597b8bd8e"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.905651e4.js",
    "revision": "a655c3b3e3952821b488c699b78958fd"
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
    "url": "assets/js/app.754733d5.js",
    "revision": "c9e50876197fce74cc5b3ed118dbfdca"
  },
  {
    "url": "category/index.html",
    "revision": "bc8da906607f44aa4dd56fef23f099a4"
  },
  {
    "url": "egg/index.html",
    "revision": "ac1d0b35a8c7d49b7b8ebeea327bd588"
  },
  {
    "url": "electron/index.html",
    "revision": "bf79b853422d1a4549f62a627849576b"
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
    "revision": "1a9a7dbe87c0448a66006f04d6cb1acf"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "0de9a07137c362bd17fe60d0518b1a81"
  },
  {
    "url": "notes/git.html",
    "revision": "908be0f16d48908c898cd1169745275e"
  },
  {
    "url": "notes/index.html",
    "revision": "96c87b8e99512fa05fbaa4a4c7db6669"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a0d95bb41e9c0c40909eefe7fe2cb6b3"
  },
  {
    "url": "notes/node.html",
    "revision": "fb56a04f9749cdf65e7f7ac147f016bf"
  },
  {
    "url": "notes/npm.html",
    "revision": "05bcd08b3031587adb261ad6673e277a"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "661a92297e5b16fb658789f8f696242f"
  },
  {
    "url": "notes/vscode.html",
    "revision": "d7e89f11ad3220a12e90ec114bc00b1e"
  },
  {
    "url": "tag/index.html",
    "revision": "c3a652f81b8a637c0da5faa36ae18d1e"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "303bbac5b5348cf1a6c46e26f895d148"
  },
  {
    "url": "uniapp/index.html",
    "revision": "8f13ca79a3d569ceff5dcee46e51a862"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "c0beb05bee391cf36d423e0aab50c1a3"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "392839582d9c3eda80bebb6d4c00f550"
  },
  {
    "url": "website/index.html",
    "revision": "957695493f39f0bc434492acf23982b2"
  },
  {
    "url": "website/package.html",
    "revision": "ba3048fd5189473e21adcec52c890f4c"
  },
  {
    "url": "website/rearend.html",
    "revision": "55bd8965a05951461556ee938261da75"
  },
  {
    "url": "website/tools.html",
    "revision": "baab739cf6567a91300e6c9239f30d5c"
  },
  {
    "url": "website/webclient.html",
    "revision": "cecb166065c5d087e589e0c67981043e"
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
