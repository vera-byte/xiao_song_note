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
    "revision": "4fdf9a8163aa9bd0f892733530e1a6be"
  },
  {
    "url": "About.html",
    "revision": "acdc984e0848cdfd64d22c7819aa0562"
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
    "url": "assets/js/11.863e526a.js",
    "revision": "c067d69b915e55345f165a7f2dfde439"
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
    "url": "assets/js/14.5a3f66d4.js",
    "revision": "02597f588f26637db70e40266570b539"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.a0fbceda.js",
    "revision": "7136d44dcbebfbe2260005d792a13788"
  },
  {
    "url": "assets/js/17.b272e4be.js",
    "revision": "ac2628d20edb470d212035907e3922ee"
  },
  {
    "url": "assets/js/18.9fcea992.js",
    "revision": "0ca648444b1a41c11c8b4db9cdd590e5"
  },
  {
    "url": "assets/js/19.c7a1cc28.js",
    "revision": "ecd78b034ffbad8353a45d09c8aa4a22"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.81be5394.js",
    "revision": "734cf9358c08c06d0256b953cb562538"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.8a98c01c.js",
    "revision": "bd97540e5498e8d0705a635cfb74ff08"
  },
  {
    "url": "category/index.html",
    "revision": "19bc6d61065838f065c266c72e658b71"
  },
  {
    "url": "egg/index.html",
    "revision": "44b84532f810d503e19a866e98574a0d"
  },
  {
    "url": "electron/index.html",
    "revision": "8eaeadb0d1d51fbb62a7609377f7083b"
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
    "revision": "d3fcdf9545da0a152aa81c0a43fed912"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "473338671d22b3608aeae6363011b14b"
  },
  {
    "url": "notes/git.html",
    "revision": "3cab8adee730824637cd60e05fda91e2"
  },
  {
    "url": "notes/index.html",
    "revision": "97d0ddb50e2a2cf998afdb4ea2e38972"
  },
  {
    "url": "notes/nginx.html",
    "revision": "9dcc96f061bbb834cae716ae012ab086"
  },
  {
    "url": "notes/npm.html",
    "revision": "20813af4d6a3e67f495c6b01c715a3e3"
  },
  {
    "url": "notes/vscode.html",
    "revision": "0874d84bffb96e7613a7a41ee4647e55"
  },
  {
    "url": "tag/index.html",
    "revision": "b5ce93912b06fd71d684aa5bd36aa45e"
  },
  {
    "url": "uniapp/index.html",
    "revision": "106c9d6c1578b0119b057dd8b54aeabe"
  },
  {
    "url": "website/index.html",
    "revision": "0a1d82e0c69f43fdea36ed18fc876a57"
  },
  {
    "url": "website/package.html",
    "revision": "983007158ac25f9928d37191e71c17bf"
  },
  {
    "url": "website/rearend.html",
    "revision": "5a22b30e3b5dc615e6da723d27151fae"
  },
  {
    "url": "website/tools.html",
    "revision": "ce6450faceaf37be5021e81a414a3c04"
  },
  {
    "url": "website/webclient.html",
    "revision": "b7b9c3151cac94916f6292a8a899c28a"
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
