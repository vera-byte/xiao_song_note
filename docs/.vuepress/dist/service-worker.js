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
    "revision": "95890adb4641e253efa43eef421ef432"
  },
  {
    "url": "About.html",
    "revision": "3c3b50cfc0f8371b71ca5cf7c7a6f892"
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
    "url": "assets/js/13.e51c21cb.js",
    "revision": "16ece50a00c4915c16e091811e0acaaa"
  },
  {
    "url": "assets/js/14.0ba2f9d0.js",
    "revision": "9c0e3a991c2977ff5f92d5c8b2ddfb5b"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.75fd0b73.js",
    "revision": "190419fe4cb06465023e02c0d7893dbf"
  },
  {
    "url": "assets/js/17.3e7c9a97.js",
    "revision": "813bda349bd337059beebe2818499a1c"
  },
  {
    "url": "assets/js/18.e7a1aa58.js",
    "revision": "79d441e47c0bc5e422abaa27426f045a"
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
    "url": "assets/js/20.07651e55.js",
    "revision": "4fc0b2c2c27efadceeae85e6d0a97047"
  },
  {
    "url": "assets/js/21.77d097fd.js",
    "revision": "f76cfa0a7b4243a4b3321c4e9a4323da"
  },
  {
    "url": "assets/js/22.9acbd127.js",
    "revision": "9333a14f43c3c7cfa6ef03d96b292769"
  },
  {
    "url": "assets/js/23.919892ab.js",
    "revision": "ba3e30c49f65765536152de59bcb350a"
  },
  {
    "url": "assets/js/24.6c28261e.js",
    "revision": "acb0eb3e48042f3ab01515c58f078a35"
  },
  {
    "url": "assets/js/25.f956a518.js",
    "revision": "a18d69a4a1f9643fdc81ced7b04d552c"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.8e38153d.js",
    "revision": "3f35a80e901ff5dbb4c090b48abeec18"
  },
  {
    "url": "category/index.html",
    "revision": "0947d24878e0fc811668e20859a3cf16"
  },
  {
    "url": "egg/index.html",
    "revision": "b80724308209713f9363909cf4fe0483"
  },
  {
    "url": "electron/index.html",
    "revision": "cc663c2f66b6245fe98cc0048f36230b"
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
    "revision": "87ad6a74946d314a14cd420f4be677dd"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "02c062f06a73509f64e4e41bcb801de7"
  },
  {
    "url": "notes/git.html",
    "revision": "81e86291954637cc132797bfb29eb357"
  },
  {
    "url": "notes/index.html",
    "revision": "cb32cfbe8752e4cd10f8d9335b35ce9a"
  },
  {
    "url": "notes/nginx.html",
    "revision": "d0e00ebc67bc9b15ac3af8e11ceb3b5a"
  },
  {
    "url": "notes/node.html",
    "revision": "e70f26f00beef8efe0ea2e6c69de2938"
  },
  {
    "url": "notes/npm.html",
    "revision": "fcc4f336bb7dbbfb4378e21a08b01cef"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "4be2657d3bfe073b6b37064a5ab35c85"
  },
  {
    "url": "notes/vscode.html",
    "revision": "03a9ba2d26266788dc00cd1d7f0c01aa"
  },
  {
    "url": "tag/index.html",
    "revision": "a85368fdc6d1a97800e6c896604efe76"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "2d089f142c1a73738676a33660917338"
  },
  {
    "url": "uniapp/index.html",
    "revision": "02000880fbfdd4589f4122124cfe61c4"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "78de5f8e4d29b430d4b3f58dacaf87db"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "317912d395dcd5c3e11a0929dc875410"
  },
  {
    "url": "website/index.html",
    "revision": "e8a69d3e4119e9efca5dbc5dd497c1d5"
  },
  {
    "url": "website/package.html",
    "revision": "1b62c4d22cc952484468785c3634ef2d"
  },
  {
    "url": "website/rearend.html",
    "revision": "88060b707b6e733b415e7ddc6b2a05f6"
  },
  {
    "url": "website/tools.html",
    "revision": "d6fce59f4349f16d7e5f3fff56381697"
  },
  {
    "url": "website/webclient.html",
    "revision": "0fe733ca33c946dc64e124aea43f00b2"
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
