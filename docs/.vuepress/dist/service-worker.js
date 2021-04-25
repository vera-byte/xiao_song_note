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
    "revision": "dfe0b6099af3d13cff002a29182a411f"
  },
  {
    "url": "About.html",
    "revision": "c948136112dd9be5fbc5dcae03293ecb"
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
    "url": "assets/js/10.7abc4dfd.js",
    "revision": "4c80d18ec05b536757e2aef44c6e88d2"
  },
  {
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
  },
  {
    "url": "assets/js/12.08ebf092.js",
    "revision": "f415c4c5c2c97889329134cc254e6450"
  },
  {
    "url": "assets/js/13.80716ee1.js",
    "revision": "9d7ed16f55e8ee5bd36a4f3c8f3db8e5"
  },
  {
    "url": "assets/js/14.6b45c364.js",
    "revision": "5d50e97907c7385612e13ba4a375f582"
  },
  {
    "url": "assets/js/15.3ceecfa6.js",
    "revision": "deabeb52d9772bffaab519dd62e9daaa"
  },
  {
    "url": "assets/js/16.a0fbceda.js",
    "revision": "7136d44dcbebfbe2260005d792a13788"
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
    "url": "assets/js/19.ba2deda9.js",
    "revision": "a16caf092f58a373a687fed789ea8235"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.2afcc3cc.js",
    "revision": "f4b1194bbeb2aaa5854d8db4dd4f11f5"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.591063d6.js",
    "revision": "6c9a715aa9b2fd761c840dee32624788"
  },
  {
    "url": "category/index.html",
    "revision": "59fd187efc1fa9d60fea7cb2317db17a"
  },
  {
    "url": "egg/index.html",
    "revision": "a523382934e345e1c93c42b2b9f4f45a"
  },
  {
    "url": "electron/index.html",
    "revision": "86523f48c9b328861c39491ed6103752"
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
    "revision": "6d9e8989aba1cde1e5c77d25157a211e"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "d9209f700a72f202ba3dde27f7e7168a"
  },
  {
    "url": "notes/git.html",
    "revision": "3b75315672198caa4580ff040baa2125"
  },
  {
    "url": "notes/index.html",
    "revision": "14def58eb74d528af1597c6210f1f2dc"
  },
  {
    "url": "notes/nginx.html",
    "revision": "e4e093bea2a960d9156b97e1e22123c6"
  },
  {
    "url": "notes/npm.html",
    "revision": "45402525b5a13a793ca9b3c8a7ff4af5"
  },
  {
    "url": "notes/vscode.html",
    "revision": "459c63f755481f3c5e2154a6b2d3ca88"
  },
  {
    "url": "tag/index.html",
    "revision": "44891f7e4246524ef21b770c37bfeb79"
  },
  {
    "url": "uniapp/index.html",
    "revision": "96028d77ff990f79ef62fd27b61884d6"
  },
  {
    "url": "website/index.html",
    "revision": "9f5e02820f28d13ee9745f2580402f83"
  },
  {
    "url": "website/package.html",
    "revision": "c1bb8c9fd52b07b0ef801db98a337ddf"
  },
  {
    "url": "website/rearend.html",
    "revision": "48bee76f7ab35c6685ed44629b3331b4"
  },
  {
    "url": "website/tools.html",
    "revision": "ab6e6c1dd6d419ed19d638fb491a277a"
  },
  {
    "url": "website/webclient.html",
    "revision": "f1d713ae4c3e4a2fd8aed83e74d2f871"
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
