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
    "revision": "0820e31f74fc798fa6af17b4b94335be"
  },
  {
    "url": "About.html",
    "revision": "a12ae5ed30966e34850e6bf0997cba4f"
  },
  {
    "url": "assets/css/0.styles.5ff83213.css",
    "revision": "6d9f0275a51edd04eb5c0a0220c2311f"
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
    "url": "assets/js/11.ac0b9adb.js",
    "revision": "f05685b1d80b3f27632018a98b762522"
  },
  {
    "url": "assets/js/12.266e412f.js",
    "revision": "8e467baf203ad8a3e8f9b04f238565be"
  },
  {
    "url": "assets/js/13.1a8d266c.js",
    "revision": "f239f02248256c5ee87c1cce72ce1b25"
  },
  {
    "url": "assets/js/14.9de783f8.js",
    "revision": "ed0186ec507e0c2a8b154b6f6ebc9052"
  },
  {
    "url": "assets/js/15.1dc886ad.js",
    "revision": "15471c32a242bd4a11be69c78a13f445"
  },
  {
    "url": "assets/js/16.83dda819.js",
    "revision": "4e056de6fc27bb2795e2064842c4eb15"
  },
  {
    "url": "assets/js/17.4eb24542.js",
    "revision": "4645865b38af3d1f4d99340adaff33c2"
  },
  {
    "url": "assets/js/18.9fcea992.js",
    "revision": "0ca648444b1a41c11c8b4db9cdd590e5"
  },
  {
    "url": "assets/js/19.400c534d.js",
    "revision": "2397758e41fccd434ac64fe8a8c0ead9"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.9dba3bf2.js",
    "revision": "36bad801cd47279783657ed293a6352e"
  },
  {
    "url": "assets/js/21.03c3fd75.js",
    "revision": "bbefa1226d88a5b11eb406a047e4b9dc"
  },
  {
    "url": "assets/js/22.bb0d670e.js",
    "revision": "6f046748a07cd037a2cd8e226eaa805b"
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
    "url": "assets/js/5.5e46106a.js",
    "revision": "6b3a82f5d9b99d285b1f3b29b1b76842"
  },
  {
    "url": "assets/js/6.e86e045e.js",
    "revision": "3c02651623c6f53e11d57177197f5b98"
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
    "url": "assets/js/app.32b73c03.js",
    "revision": "c46788b9ab2849c149307e2dacc2e5b7"
  },
  {
    "url": "category/index.html",
    "revision": "cfb2080482bccaa62237855ccb434a88"
  },
  {
    "url": "egg/index.html",
    "revision": "888b28b080eaf6c764697233762e5933"
  },
  {
    "url": "electron/index.html",
    "revision": "522d89f764e75618efd85fa01adf1e96"
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
    "revision": "26f2e9424dc33934661a67a99eb15144"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "47bec5fde4b5d928c376b91f9c231054"
  },
  {
    "url": "notes/git.html",
    "revision": "798720e9cc08042b4047009a1e79909a"
  },
  {
    "url": "notes/index.html",
    "revision": "4fbd04e789c1cf21d9dcca180f8c0639"
  },
  {
    "url": "notes/nginx.html",
    "revision": "2e8a148687e070ac4aa35dbc4bea954d"
  },
  {
    "url": "notes/npm.html",
    "revision": "f57e71fdcf0c5c74e3e5d255d0d15032"
  },
  {
    "url": "notes/vscode.html",
    "revision": "09cbda9c5f6feae8e8da2a0e514c63aa"
  },
  {
    "url": "tag/index.html",
    "revision": "32ad17c45ef194df2daaa22e25a45214"
  },
  {
    "url": "uniapp/index.html",
    "revision": "3af9839c52078395ecf8c8b4ac191c88"
  },
  {
    "url": "website/index.html",
    "revision": "ee03a99db73e30024dd88eab45d29a33"
  },
  {
    "url": "website/package.html",
    "revision": "d71e5f8210d6254613a5e46a32b93cc5"
  },
  {
    "url": "website/rearend.html",
    "revision": "f65e427c63137959e3a2ee6bf188bf55"
  },
  {
    "url": "website/tools.html",
    "revision": "93e746ec665f4bc90a4eb93987dfb882"
  },
  {
    "url": "website/webclient.html",
    "revision": "04be4d1a60f2a2d29a792fc8248de63e"
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
