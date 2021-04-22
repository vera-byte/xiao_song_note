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
    "revision": "12db0e6798dcabb85468045e2d708adf"
  },
  {
    "url": "About.html",
    "revision": "ccedebe4eaa39090422d5e9bea856842"
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
    "url": "assets/js/10.f2be4b47.js",
    "revision": "859fff98ba6dc2415eaac0d218e452e1"
  },
  {
    "url": "assets/js/11.5619e29c.js",
    "revision": "bad9604d3205f796f6f953856241d552"
  },
  {
    "url": "assets/js/12.efc9277e.js",
    "revision": "24fbfb084a2e6d758e03068d64b7ef4c"
  },
  {
    "url": "assets/js/13.947af085.js",
    "revision": "71cb901e34e9a1af6af2bd1ea7345807"
  },
  {
    "url": "assets/js/14.051b4f1a.js",
    "revision": "f8830d43a3fcf9fbfd617d906893f855"
  },
  {
    "url": "assets/js/15.5b300bbb.js",
    "revision": "67451ae27931c5e1b069fb4bb9e11b2e"
  },
  {
    "url": "assets/js/16.0df9f5cd.js",
    "revision": "3ae97f606e75124f12db192249a5c9a4"
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
    "url": "assets/js/19.988cffe8.js",
    "revision": "4115f1c9821223f5e1aa6d4a68f6e62f"
  },
  {
    "url": "assets/js/2.179600ff.js",
    "revision": "3e50929d5d6bfe51882aeee65154e364"
  },
  {
    "url": "assets/js/20.5be2b909.js",
    "revision": "0f2bf230aed1fbc98dbb4fe7e33484ef"
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
    "url": "assets/js/9.e444c9a8.js",
    "revision": "c2c48fba7bcba47b9783a620e501a90d"
  },
  {
    "url": "assets/js/app.e3d87b5f.js",
    "revision": "49bfa68ef1b68976cd1e1a7ff444573e"
  },
  {
    "url": "category/index.html",
    "revision": "a079e4796925c859f5005cba8b2862a7"
  },
  {
    "url": "egg/index.html",
    "revision": "8476d6a27c799c19a60db0ed398c1562"
  },
  {
    "url": "electron/index.html",
    "revision": "917989eaf15f8e37548a088b80acffc5"
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
    "revision": "f99ee88fc98097c37d27913a5adce48d"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "19c06e112ef1d0d2d1c60d9743b9605e"
  },
  {
    "url": "notes/git.html",
    "revision": "356f167b6e70de4f21c7691ddc78766d"
  },
  {
    "url": "notes/index.html",
    "revision": "f667cfd267d41a2ac9bd471dc5891ca6"
  },
  {
    "url": "notes/nginx.html",
    "revision": "70571e050e5015259088026e59a75a79"
  },
  {
    "url": "notes/npm.html",
    "revision": "f8622e8b4ab1ac23bf4731e05f34acfa"
  },
  {
    "url": "notes/vscode.html",
    "revision": "6f1f2076ecfd1417e880368f49b95c4b"
  },
  {
    "url": "tag/index.html",
    "revision": "61bb83cc17777897275951cb46bfd29f"
  },
  {
    "url": "uniapp/index.html",
    "revision": "3805c5afef4694bc495ff727b7e20f22"
  },
  {
    "url": "website/index.html",
    "revision": "4c26e76e2c8fdc1ba95067fb59f09f9c"
  },
  {
    "url": "website/rearend.html",
    "revision": "677ddf23f35df0e5f27726d15e555097"
  },
  {
    "url": "website/tools.html",
    "revision": "0d0f5289880775aa2cd9c75c8e3fab44"
  },
  {
    "url": "website/webclient.html",
    "revision": "14071034537899112bdbef4e282236c1"
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
