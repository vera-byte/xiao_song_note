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
    "revision": "0da90cf0dd2d4a13f56e5e57e3d6bcbd"
  },
  {
    "url": "About.html",
    "revision": "934e8525689c86ce70e26b8ec48a58af"
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
    "url": "assets/js/10.6e91c46c.js",
    "revision": "99ba9bc3db3490383d98d5eb761b839a"
  },
  {
    "url": "assets/js/11.9dc59260.js",
    "revision": "f8712871d797f18123f2e4d7db9c7954"
  },
  {
    "url": "assets/js/12.fe2aec7d.js",
    "revision": "c1a80f3e45455543c15e330856a85d3f"
  },
  {
    "url": "assets/js/13.7416dfc2.js",
    "revision": "7cc84476d98735926ba14374d9e313c1"
  },
  {
    "url": "assets/js/14.9de783f8.js",
    "revision": "ed0186ec507e0c2a8b154b6f6ebc9052"
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
    "url": "assets/js/17.b272e4be.js",
    "revision": "ac2628d20edb470d212035907e3922ee"
  },
  {
    "url": "assets/js/18.d56b9d56.js",
    "revision": "3392155d1547312df0d1e583a545a05a"
  },
  {
    "url": "assets/js/19.4a1b91f9.js",
    "revision": "8cc528c973020f2b63bcada8a78bc1fe"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.c7d3c0d0.js",
    "revision": "c555d7aca69e4bc260adaf50cb765106"
  },
  {
    "url": "assets/js/21.295fcfe2.js",
    "revision": "b4e0c27939fffc9e858e19f91a6a09f1"
  },
  {
    "url": "assets/js/22.014a2095.js",
    "revision": "461a41a805db444043d6be6788bc6072"
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
    "url": "assets/js/9.892cfdd5.js",
    "revision": "5efb292ac5581ce5c5df189e7616c9df"
  },
  {
    "url": "assets/js/app.a7d947ef.js",
    "revision": "e1164dec680f12b335c64e44ce9b8987"
  },
  {
    "url": "category/index.html",
    "revision": "55cad4f428b92ba834843c922400ef94"
  },
  {
    "url": "egg/index.html",
    "revision": "300f34c242458c64bfa5e6e4392f6098"
  },
  {
    "url": "electron/index.html",
    "revision": "15426bcfefbf2b88a4588f22ca654a5c"
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
    "revision": "0df5cea0d77c40f53ea3d497435dd831"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "6f03b50de4cf1b9da0261a0570687477"
  },
  {
    "url": "notes/git.html",
    "revision": "ebe17eb39dabe9cfa77e6fd54e79d819"
  },
  {
    "url": "notes/index.html",
    "revision": "f8c5ebb80a5216da68cd1252b7fe4aef"
  },
  {
    "url": "notes/nginx.html",
    "revision": "0396f0d464bad1b80ef08d90cde927da"
  },
  {
    "url": "notes/npm.html",
    "revision": "63e0afe9ece6224fbb3f8cafe00fd928"
  },
  {
    "url": "notes/vscode.html",
    "revision": "06c9c35739448346a0ebf421e011af0a"
  },
  {
    "url": "tag/index.html",
    "revision": "6e375b8be1c79e2e07614aa44511bc53"
  },
  {
    "url": "uniapp/index.html",
    "revision": "13fc2ac9556fe39a6d5e4ffd9ebceacc"
  },
  {
    "url": "website/index.html",
    "revision": "949baad52d7958b219209a197acb241c"
  },
  {
    "url": "website/package.html",
    "revision": "7eb44d1d6402e18b95c857613305699f"
  },
  {
    "url": "website/rearend.html",
    "revision": "43578d34d8dca87d59f8334cc57261ed"
  },
  {
    "url": "website/tools.html",
    "revision": "9ed50f692821b98ea67a2c163d330824"
  },
  {
    "url": "website/webclient.html",
    "revision": "b1c7c1306387323be84e8d8d2147e050"
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
