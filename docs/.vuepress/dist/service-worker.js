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
    "revision": "3a1f866b8d54f0e0444be466f9829e6a"
  },
  {
    "url": "About.html",
    "revision": "053a73183311d159f3b129fadd1e2a89"
  },
  {
    "url": "assets/css/0.styles.1f4c384c.css",
    "revision": "6656d29b6343707ed6db500449a2445f"
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
    "url": "assets/js/10.bd039699.js",
    "revision": "09767bf9ec70c01c0b9503b8f04152e5"
  },
  {
    "url": "assets/js/11.4036c215.js",
    "revision": "0dd8015939825f1086957a1f825f91fb"
  },
  {
    "url": "assets/js/12.dd19eb99.js",
    "revision": "a0b69a16fad4e25cfa83527034ea8cae"
  },
  {
    "url": "assets/js/13.e09008d4.js",
    "revision": "ee53fa7811c198e946bafb88fbe39f0c"
  },
  {
    "url": "assets/js/14.051b4f1a.js",
    "revision": "f8830d43a3fcf9fbfd617d906893f855"
  },
  {
    "url": "assets/js/15.352e3c33.js",
    "revision": "88db733e7eb561e109c92ff34ce07fb1"
  },
  {
    "url": "assets/js/16.cf8a10ae.js",
    "revision": "bf00009742da88e7760d8e2a65ebfb61"
  },
  {
    "url": "assets/js/17.2a3ac7e0.js",
    "revision": "23f8ed2f3abeefddceaf43f49c74d59c"
  },
  {
    "url": "assets/js/18.b9c4ef16.js",
    "revision": "1aa0aa6ca290e68b946e9f1caa5de384"
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
    "url": "assets/js/20.7f375885.js",
    "revision": "aa6214afe2ba041a6faa81ce3425e289"
  },
  {
    "url": "assets/js/21.19889562.js",
    "revision": "cb582ce32bfabff325c38ec57d44188b"
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
    "url": "assets/js/5.931e5c87.js",
    "revision": "eaf309d9e5a84f08524d5d75ed8bfb0f"
  },
  {
    "url": "assets/js/6.199e5db0.js",
    "revision": "8d87f972655bfb31ae12067ad18d5ed9"
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
    "url": "assets/js/app.d60dfe94.js",
    "revision": "0d387ab3224a2b1cc496035bf1fd917a"
  },
  {
    "url": "category/index.html",
    "revision": "a91185f50f1b594ecf6731c5a97fbd59"
  },
  {
    "url": "egg/index.html",
    "revision": "49abe77083df293f14ef443211a04680"
  },
  {
    "url": "electron/index.html",
    "revision": "050259a6903145d5890b47cbb9efe57d"
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
    "revision": "aca44962c608ec92c1aa868d680c75b1"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "b9e8a8e7180b9aa40e7604875a00046c"
  },
  {
    "url": "notes/git.html",
    "revision": "23547ecc14b27e154110a5c393158177"
  },
  {
    "url": "notes/index.html",
    "revision": "e809f24d3c4953a110d0b14d5e3cc795"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a0dfa1141ee9ac63e2d0ecaded4ee2a8"
  },
  {
    "url": "notes/npm.html",
    "revision": "0dd36b4465956070e2be0cf521b605d8"
  },
  {
    "url": "notes/vscode.html",
    "revision": "8f8883e06de2677bf821a7cc04ebfc58"
  },
  {
    "url": "tag/index.html",
    "revision": "80a0bd30844631dfda316c48f036fe9b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "462f6bed26e4384aecc9d648350a3840"
  },
  {
    "url": "website/index.html",
    "revision": "c35c7bda0b819f627f7ffbfc39aa82d9"
  },
  {
    "url": "website/rearend.html",
    "revision": "de82427d6529f996c25f596051939007"
  },
  {
    "url": "website/tools.html",
    "revision": "cd91f66c299244d09b2bfd1ce60a546f"
  },
  {
    "url": "website/webclient.html",
    "revision": "a7911938a6d786688de2aa6dfee35775"
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
