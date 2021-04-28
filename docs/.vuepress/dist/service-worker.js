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
    "revision": "1ef69921aa50b050c125e96fba5949e4"
  },
  {
    "url": "About.html",
    "revision": "bf89e5ec3e926918a4eb81a01d55bb0c"
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
    "url": "assets/js/11.1640907c.js",
    "revision": "84bc03cab640bb076d7dcf01fd6cb110"
  },
  {
    "url": "assets/js/12.266e412f.js",
    "revision": "8e467baf203ad8a3e8f9b04f238565be"
  },
  {
    "url": "assets/js/13.6c1a7965.js",
    "revision": "68e7bdb6f9de00d257a2ab7948b63112"
  },
  {
    "url": "assets/js/14.67c94977.js",
    "revision": "dde0cd3bb4a1177e84fd2001d205b4f5"
  },
  {
    "url": "assets/js/15.e0d41ce5.js",
    "revision": "2c0d48c27bd33ce87c98be7de2610fc9"
  },
  {
    "url": "assets/js/16.ff8c15dd.js",
    "revision": "de9582ae3e5cd621b6b98726980e9673"
  },
  {
    "url": "assets/js/17.dc50463f.js",
    "revision": "5890a6c9e83847ce59f4408f8e0ee6cd"
  },
  {
    "url": "assets/js/18.31f2d100.js",
    "revision": "4f627604dd7495e1ff31eadf22e8b931"
  },
  {
    "url": "assets/js/19.25f515a9.js",
    "revision": "f43bbd4fbdb2cd1d54b77193877f1a90"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.440452c0.js",
    "revision": "f0f03d49220ec3d82c2ea483293b2016"
  },
  {
    "url": "assets/js/21.46512f3f.js",
    "revision": "e5ffa6179f6866b842e4cf8c6a9edb64"
  },
  {
    "url": "assets/js/22.33b15eb5.js",
    "revision": "659084679b16c5f58e6a368b4d2e9871"
  },
  {
    "url": "assets/js/23.df9e9766.js",
    "revision": "6e524e88a2c83c99dcaa864241d68e2d"
  },
  {
    "url": "assets/js/24.2d94abc3.js",
    "revision": "d772bf97e27408b6977ae45c0b3da76e"
  },
  {
    "url": "assets/js/25.5fbbc176.js",
    "revision": "b6901aec46923e843f7dc60aa2169046"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.df9681b5.js",
    "revision": "ea60694c0e9701a870d72479c285db8a"
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
    "url": "assets/js/9.a2c74a15.js",
    "revision": "b79b2623323121b8beb5536c4e55c89f"
  },
  {
    "url": "assets/js/app.e5ca5b6b.js",
    "revision": "ecf42362d16d8c02833da2d98a9f2980"
  },
  {
    "url": "category/index.html",
    "revision": "0d92f8c41e4bea0afeeb34fb80310ee4"
  },
  {
    "url": "egg/index.html",
    "revision": "e1d51dbeb1e97103cb8a707d1a37532c"
  },
  {
    "url": "electron/index.html",
    "revision": "17ad2703d4eaa88659beaa39b2671f05"
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
    "revision": "d18ec69855d3bd967a047c465d402c10"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "2feea2ccf4c68774b4ab3751ad3dd3c1"
  },
  {
    "url": "notes/git.html",
    "revision": "8ff1c15447bf791927bab112609db943"
  },
  {
    "url": "notes/index.html",
    "revision": "93eaa3af2cdff2c7522c21f11d26ab70"
  },
  {
    "url": "notes/nginx.html",
    "revision": "4c9946d5dad39b90966245a8aaf4b49c"
  },
  {
    "url": "notes/node.html",
    "revision": "8a2f7d0766d0a795fd798d8a61f638ff"
  },
  {
    "url": "notes/npm.html",
    "revision": "f3c0ba47535d143c5ea04977c601a2aa"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "487680109076c2f248c890e948de6384"
  },
  {
    "url": "notes/vscode.html",
    "revision": "2a0daf47573295005bf1c73768b6368f"
  },
  {
    "url": "tag/index.html",
    "revision": "86fe6023a9cc4b53caa0b360cd1904bf"
  },
  {
    "url": "uniapp/index.html",
    "revision": "eee26eb42926bc03642c10d65d1a55b8"
  },
  {
    "url": "website/index.html",
    "revision": "53ad33f60eb8b0d2564c4a61d61a5cc3"
  },
  {
    "url": "website/package.html",
    "revision": "0d3a59497103b2e1538f791ef9379c0c"
  },
  {
    "url": "website/rearend.html",
    "revision": "b0703e411922d9e36e64c8e418ebc2ad"
  },
  {
    "url": "website/tools.html",
    "revision": "e3e29848b10fa4fae3a6f27158802a2c"
  },
  {
    "url": "website/webclient.html",
    "revision": "f7500906fdc53dbe7a4200d04acf4b96"
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
