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
    "revision": "32a09c98872deae6e0218bf28fcd017c"
  },
  {
    "url": "About.html",
    "revision": "208793ea3245b67a75595be5f2b53280"
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
    "url": "assets/js/12.f06337c1.js",
    "revision": "03794b518f5b966ce55cc68fdab9103e"
  },
  {
    "url": "assets/js/13.987c34bb.js",
    "revision": "081d4e1959819a2a29f893ede74a5539"
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
    "url": "assets/js/17.e6269558.js",
    "revision": "ba93d1af8b11f0a42385e6a5d48f7172"
  },
  {
    "url": "assets/js/18.e7a1aa58.js",
    "revision": "79d441e47c0bc5e422abaa27426f045a"
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
    "url": "assets/js/20.40acbb8a.js",
    "revision": "c21fdf1944302ec5bb86928c12a00e2a"
  },
  {
    "url": "assets/js/21.27d8d938.js",
    "revision": "595fc27ce9dcf14a90b1a64b446096bb"
  },
  {
    "url": "assets/js/22.dda28792.js",
    "revision": "44374de83553db826860dbe0bac1472b"
  },
  {
    "url": "assets/js/23.7d757a41.js",
    "revision": "71efdf33b83420f4a57a6b4e3f840914"
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
    "url": "assets/js/26.f981028a.js",
    "revision": "047c2b1d227532ffb587fbec6bab426c"
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
    "url": "assets/js/app.2df6c2fa.js",
    "revision": "34a50a6e4ed82f763a5a049832f612ea"
  },
  {
    "url": "category/index.html",
    "revision": "d2ad64b20843b48074a7ce8151bc17b4"
  },
  {
    "url": "egg/index.html",
    "revision": "41dd960419a2f69e3b3741c17bc3a271"
  },
  {
    "url": "electron/index.html",
    "revision": "4b97f3522fd77fe7f7a7de0feccb4af1"
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
    "revision": "6c8c8f8b18bd63f0c651e86c11836d24"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "50f2a0d8eaa7e8acab5b1f5e1760a09e"
  },
  {
    "url": "notes/git.html",
    "revision": "43469e7f187b806c0eedd622ff9783f8"
  },
  {
    "url": "notes/index.html",
    "revision": "d6aa050adb1738bc5ac456795999c91d"
  },
  {
    "url": "notes/nginx.html",
    "revision": "669d4afbc9ad334254c510a214f5df0e"
  },
  {
    "url": "notes/node.html",
    "revision": "296eb1ecd1a2bc3ad4bc4233d43e740b"
  },
  {
    "url": "notes/npm.html",
    "revision": "892159fcc09df24428a82aee9826713b"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "0f1c48127e8dee6032aef3b5a05bb31f"
  },
  {
    "url": "notes/vscode.html",
    "revision": "510eab9debd851f03ae6ed2b993244f5"
  },
  {
    "url": "tag/index.html",
    "revision": "24ef913ca60fd4a22741b132036e8392"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "81d2c3b1178d1121c65b1f0d0ef8e775"
  },
  {
    "url": "uniapp/index.html",
    "revision": "31b09fec4326020a7d72118024927ae9"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "530f1699704475f1f4dea8538e3f87d7"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "532762d729eff126515579b9ecad4314"
  },
  {
    "url": "website/index.html",
    "revision": "09ac60b471ca31eaf5a8706528d3b72e"
  },
  {
    "url": "website/package.html",
    "revision": "4355a21a250b557bab997c11399f7bca"
  },
  {
    "url": "website/rearend.html",
    "revision": "d592d952d10b3b4adf3d6915aef293e0"
  },
  {
    "url": "website/tools.html",
    "revision": "8387111bb587642396b55e6af8176da6"
  },
  {
    "url": "website/webclient.html",
    "revision": "1a4ca915076d79d842c534560c702f25"
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
