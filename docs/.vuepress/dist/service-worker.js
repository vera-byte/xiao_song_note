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
    "revision": "845a564dab1f3ff1b56fe82000af875f"
  },
  {
    "url": "About.html",
    "revision": "f8d84f8ba53affe9979f481f34890880"
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
    "url": "assets/js/11.12789483.js",
    "revision": "dd6e12f0d2c0fb0ad7cceff913b97929"
  },
  {
    "url": "assets/js/12.0baf2c85.js",
    "revision": "d277b1641ad32c67d26bdff820bc9b04"
  },
  {
    "url": "assets/js/13.bdfbdc74.js",
    "revision": "c70f6320d60655b90fc1ba8a9a6bcb5d"
  },
  {
    "url": "assets/js/14.563f9ec9.js",
    "revision": "89ea4209b17a1e4a3f0d12ba9e90a1cf"
  },
  {
    "url": "assets/js/15.7e0514d3.js",
    "revision": "8cb203c69683d6f3208a438d2f98392c"
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
    "url": "assets/js/18.5336c5c3.js",
    "revision": "1ee1f241a11c729002d7af96e74734dd"
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
    "url": "assets/js/20.3c39231a.js",
    "revision": "5def4f539053f2df533c2a4b1e7c9f11"
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
    "url": "assets/js/9.51d9fa68.js",
    "revision": "b42f2a98598565ddc18c2de38732fef8"
  },
  {
    "url": "assets/js/app.96c5b7a0.js",
    "revision": "a03759490c48bad39dac6b240c1d6283"
  },
  {
    "url": "category/index.html",
    "revision": "d71b23aaa870f51d2ebeeeabf26bfc3f"
  },
  {
    "url": "egg/index.html",
    "revision": "78f5896f805a4bea9623a2ce4288d0f8"
  },
  {
    "url": "electron/index.html",
    "revision": "32377a80177531cb5133ded203b62a59"
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
    "revision": "9866861dc292b1d3da9d69c089519070"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "42f73e5231cf86744d8008384a2f7be3"
  },
  {
    "url": "notes/git.html",
    "revision": "373658ffa1a0154f6d0e52a5f7b874ae"
  },
  {
    "url": "notes/index.html",
    "revision": "2042e7ba1c76b67bb58030fce156db7e"
  },
  {
    "url": "notes/nginx.html",
    "revision": "f946e68c6d0df855f028fd0109a86795"
  },
  {
    "url": "notes/npm.html",
    "revision": "b65f00172d214ccadbbd6c1d599e6417"
  },
  {
    "url": "notes/vscode.html",
    "revision": "d825ddf7fd9b3cce10e3da12a5a2d875"
  },
  {
    "url": "tag/index.html",
    "revision": "23ccc8c6787edf9529f3323cfc105476"
  },
  {
    "url": "uniapp/index.html",
    "revision": "ba37cbb759d6c08a776179828c1755e3"
  },
  {
    "url": "website/index.html",
    "revision": "48623e05b2aee9d9f16194f6a8fb55b9"
  },
  {
    "url": "website/rearend.html",
    "revision": "c38ae4dfd74fa42ddfe75a266e60d6e8"
  },
  {
    "url": "website/tools.html",
    "revision": "40eab7713f90f15dbbaacdbc3b292362"
  },
  {
    "url": "website/webclient.html",
    "revision": "7865d63a1d1ebd9eb46e2d9200c99633"
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
