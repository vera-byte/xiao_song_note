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
    "revision": "02253b7f773547980fde3fd9fb282d83"
  },
  {
    "url": "About.html",
    "revision": "bb0bbd54510d0e90e5666b3d9bdeb903"
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
    "url": "assets/js/10.c7c3471e.js",
    "revision": "806a927407b6efd939d0a6dd616d966b"
  },
  {
    "url": "assets/js/11.4036c215.js",
    "revision": "0dd8015939825f1086957a1f825f91fb"
  },
  {
    "url": "assets/js/12.0baf2c85.js",
    "revision": "d277b1641ad32c67d26bdff820bc9b04"
  },
  {
    "url": "assets/js/13.2d568a77.js",
    "revision": "5de29114112b8211bfb65dd0cdaa977f"
  },
  {
    "url": "assets/js/14.f26958b0.js",
    "revision": "c0bff59cedd7a3040fd26d2c259f84ab"
  },
  {
    "url": "assets/js/15.7e0514d3.js",
    "revision": "8cb203c69683d6f3208a438d2f98392c"
  },
  {
    "url": "assets/js/16.55d0a3f1.js",
    "revision": "1310f6fdb22e768eab5a0d9e2bccc884"
  },
  {
    "url": "assets/js/17.f5a920f8.js",
    "revision": "dac5878420537b727666008b76cf97cf"
  },
  {
    "url": "assets/js/18.5cf51e76.js",
    "revision": "171d74cd5315e78631ad4ec070dce1f5"
  },
  {
    "url": "assets/js/19.cdfe3ac7.js",
    "revision": "cdff99d47e03b12b33a174d57002eaca"
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
    "url": "assets/js/21.7da4569c.js",
    "revision": "8d660bb512f615b388d6ca098bc66474"
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
    "url": "assets/js/9.027e5137.js",
    "revision": "f66935182eb50e335cf61d043731dc84"
  },
  {
    "url": "assets/js/app.d0767a9d.js",
    "revision": "acdb53d689727236dfd613e3c9e960b2"
  },
  {
    "url": "category/index.html",
    "revision": "d924a6157bbcc652d9fa9a5de180dd61"
  },
  {
    "url": "egg/index.html",
    "revision": "13acbb9e30c124258f3d484637862220"
  },
  {
    "url": "electron/index.html",
    "revision": "aa7543a90e748a7dfea468ec39d6d6d9"
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
    "revision": "387ff581e656ab66bbd5bf1ef21ad45e"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "38edd7b3180b32fc3965d0d5866085d7"
  },
  {
    "url": "notes/git.html",
    "revision": "ee3b992038ebfefd580d4f029b937e72"
  },
  {
    "url": "notes/index.html",
    "revision": "9dc5c3feaa613e26f075342a2b51f494"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a23cf93c45195db85bdfc08dc8f36fdf"
  },
  {
    "url": "notes/npm.html",
    "revision": "bf38c2888b7ae3ff6522c10aa174e55a"
  },
  {
    "url": "notes/vscode.html",
    "revision": "4620e28f8dab900e9dfb67409dff163f"
  },
  {
    "url": "tag/index.html",
    "revision": "29c406de2ccba6f7ca7608bfd6ce781d"
  },
  {
    "url": "uniapp/index.html",
    "revision": "7f31b289d676f9694f84a66541743722"
  },
  {
    "url": "website/index.html",
    "revision": "f126773eff92e170d8716b342b8f0f40"
  },
  {
    "url": "website/rearend.html",
    "revision": "01874e2cd81c920a40f9d789b214d3b0"
  },
  {
    "url": "website/tools.html",
    "revision": "44016ad894702d663832053b4f5bf33d"
  },
  {
    "url": "website/webclient.html",
    "revision": "3bf5b6a602ab1042d757f9c49e17c5bd"
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
