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
    "revision": "663c95001f4854482e516f729cce709c"
  },
  {
    "url": "About.html",
    "revision": "e604cb7fc15e26a0deb97e9c27247e7b"
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
    "url": "assets/js/11.1640907c.js",
    "revision": "84bc03cab640bb076d7dcf01fd6cb110"
  },
  {
    "url": "assets/js/12.fe2aec7d.js",
    "revision": "c1a80f3e45455543c15e330856a85d3f"
  },
  {
    "url": "assets/js/13.80716ee1.js",
    "revision": "9d7ed16f55e8ee5bd36a4f3c8f3db8e5"
  },
  {
    "url": "assets/js/14.87918cc2.js",
    "revision": "c8c159bfa8750dfb5ebad3bbc39950fe"
  },
  {
    "url": "assets/js/15.e0d41ce5.js",
    "revision": "2c0d48c27bd33ce87c98be7de2610fc9"
  },
  {
    "url": "assets/js/16.4ee2b5b0.js",
    "revision": "85785293803d8e3e2ff52270603c0842"
  },
  {
    "url": "assets/js/17.9f807a34.js",
    "revision": "8830193b153e09144fb08b4ab51cc458"
  },
  {
    "url": "assets/js/18.390d756b.js",
    "revision": "b60890a1ab1710ba40814df4fb3f9c63"
  },
  {
    "url": "assets/js/19.c464608b.js",
    "revision": "79333591499b41d03c4b52614a30d8dd"
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
    "url": "assets/js/app.4acfd4ed.js",
    "revision": "1cfad6383b10b50872c3abcc31a81c2f"
  },
  {
    "url": "category/index.html",
    "revision": "cc6fc67740daea2bc2315dbac0257f92"
  },
  {
    "url": "egg/index.html",
    "revision": "5dcfc518ccb0ae5b047ec78fd85d0481"
  },
  {
    "url": "electron/index.html",
    "revision": "5aa25c5c1ff71a70276495c5b1a37ee1"
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
    "revision": "01bf608e5a443cbac6e9aded2cb94947"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "716a291aeaabad44d5e3b5df17b8d744"
  },
  {
    "url": "notes/git.html",
    "revision": "35a963dc8f65521729b467235ab65556"
  },
  {
    "url": "notes/index.html",
    "revision": "4278a1e795c1be7ab03da11cc38706e1"
  },
  {
    "url": "notes/nginx.html",
    "revision": "950a64c998e99ddd3b67d5a118eabc49"
  },
  {
    "url": "notes/npm.html",
    "revision": "f84e014ddbe87694f387c1fcdbbdc257"
  },
  {
    "url": "notes/vscode.html",
    "revision": "fe293b3a3514038040baaa1d6e735503"
  },
  {
    "url": "tag/index.html",
    "revision": "9db21a56d4a45e4fdea3716ac8a4b909"
  },
  {
    "url": "uniapp/index.html",
    "revision": "c26654b6bf04cafbd13d5e2515f632a9"
  },
  {
    "url": "website/index.html",
    "revision": "646c13cc19083e497e3d6dff7d5286d8"
  },
  {
    "url": "website/package.html",
    "revision": "4ef64d120aa0b5c8bb8777bbb2caec43"
  },
  {
    "url": "website/rearend.html",
    "revision": "f0088bfb19ddc15432d5397ca8f35529"
  },
  {
    "url": "website/tools.html",
    "revision": "95ec4e490584edaf11cda6807a6a005f"
  },
  {
    "url": "website/webclient.html",
    "revision": "fc03ac399ce93a01296ec17e580c28e4"
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
