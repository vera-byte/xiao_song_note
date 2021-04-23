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
    "revision": "4c6a3eebe76ee9106202a0118eb2043c"
  },
  {
    "url": "About.html",
    "revision": "a23717dc83581f2a92aefc17d385e7e9"
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
    "url": "assets/js/10.21f4b9d4.js",
    "revision": "336ff2ca87e0564e3cf06c3a5048c7a6"
  },
  {
    "url": "assets/js/11.51709d37.js",
    "revision": "0d2c2ca9202cca0183b5ea2aa56ec1a1"
  },
  {
    "url": "assets/js/12.f06337c1.js",
    "revision": "03794b518f5b966ce55cc68fdab9103e"
  },
  {
    "url": "assets/js/13.c39ae9ee.js",
    "revision": "550b301b477b1f4bb2f82c014700514a"
  },
  {
    "url": "assets/js/14.c6364427.js",
    "revision": "57c31061af7399dc459c0c617aa58c79"
  },
  {
    "url": "assets/js/15.0180e547.js",
    "revision": "da3e50b35ddcb209acf041f443e4634f"
  },
  {
    "url": "assets/js/16.e952bf27.js",
    "revision": "097d5e1ff348d0e9af2fe6e736ce5c5f"
  },
  {
    "url": "assets/js/17.dd5b121e.js",
    "revision": "2305f88552e3e639c6ed8e2c06c7a918"
  },
  {
    "url": "assets/js/18.9fcea992.js",
    "revision": "0ca648444b1a41c11c8b4db9cdd590e5"
  },
  {
    "url": "assets/js/19.771aa9fa.js",
    "revision": "4f325944a7fa4eb019da1b39b5edb342"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.202e581e.js",
    "revision": "b65addedfe44506157af5619f30aafdb"
  },
  {
    "url": "assets/js/21.6127a66d.js",
    "revision": "d71957456d5ba8ed8ec09c30bc35c630"
  },
  {
    "url": "assets/js/22.9bb5e32a.js",
    "revision": "3633e6549eeb8a7be2a5831df1c76399"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.4ea23b0a.js",
    "revision": "bed99249981df37236a2470cc6e89fdf"
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
    "url": "assets/js/app.918c79b4.js",
    "revision": "66a8cd1df86e23d4507863d9f4b0ec9b"
  },
  {
    "url": "category/index.html",
    "revision": "355192fe6494590aaa95359dcec61ca2"
  },
  {
    "url": "egg/index.html",
    "revision": "808b02d4a12b8995d6f5ff89ffe672af"
  },
  {
    "url": "electron/index.html",
    "revision": "1cdcaaef558eb47cb0389765abc6d943"
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
    "revision": "4041f5713aba3e8e06ff1951292c66bf"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "01690c371ee3e9e9a15cb0e524a324b5"
  },
  {
    "url": "notes/git.html",
    "revision": "bc2c2d927f79d0e588a74c0b884c9d7e"
  },
  {
    "url": "notes/index.html",
    "revision": "7afd1a1e466d3cab2896af2ac0262f34"
  },
  {
    "url": "notes/nginx.html",
    "revision": "285800571c89c772c3c7dd3bf0d53946"
  },
  {
    "url": "notes/npm.html",
    "revision": "49e07e6710e59b865b638e7bbbb986a6"
  },
  {
    "url": "notes/vscode.html",
    "revision": "909319c6451f820e10953748946858e5"
  },
  {
    "url": "tag/index.html",
    "revision": "a652c8b4b1f78947ffa3b7be55be4769"
  },
  {
    "url": "uniapp/index.html",
    "revision": "f989564c608d6d53da21fc2e7b2a7e78"
  },
  {
    "url": "website/index.html",
    "revision": "74cf9f8424c6b2d921b7de2b6dc767b4"
  },
  {
    "url": "website/rearend.html",
    "revision": "5f68abe641ea325eaf58d02fe8be168b"
  },
  {
    "url": "website/tools.html",
    "revision": "fc2da883bb6ff6c73e8d08750b2e5643"
  },
  {
    "url": "website/webclient.html",
    "revision": "137fd3cab0f3d442539e5d3ada41601b"
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
