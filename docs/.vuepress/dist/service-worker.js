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
    "revision": "492100ad143a3083013c650d49f3629b"
  },
  {
    "url": "About.html",
    "revision": "1f6c9f01550d2d2156496efa5b6f161e"
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
    "url": "assets/js/10.197cf1fa.js",
    "revision": "aebc475f6eaed5b8b7311a270303990f"
  },
  {
    "url": "assets/js/11.863e526a.js",
    "revision": "c067d69b915e55345f165a7f2dfde439"
  },
  {
    "url": "assets/js/12.2d8a3b61.js",
    "revision": "8a47c1a695de15fcb338d28c02c86fb0"
  },
  {
    "url": "assets/js/13.88ddcf7c.js",
    "revision": "9d5a152ea9122c6013fc7ff46741841e"
  },
  {
    "url": "assets/js/14.bda6d818.js",
    "revision": "270071fff662c2722319a03432139b8a"
  },
  {
    "url": "assets/js/15.ff96a853.js",
    "revision": "695a7ab0376d49c4f5c6c9636d02b55c"
  },
  {
    "url": "assets/js/16.e952bf27.js",
    "revision": "097d5e1ff348d0e9af2fe6e736ce5c5f"
  },
  {
    "url": "assets/js/17.4eb24542.js",
    "revision": "4645865b38af3d1f4d99340adaff33c2"
  },
  {
    "url": "assets/js/18.af8870dd.js",
    "revision": "c0812f1a363d14c159ccb604543a4752"
  },
  {
    "url": "assets/js/19.93eb39b9.js",
    "revision": "82d843fdac6f5f8cde974c941063af98"
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
    "url": "assets/js/21.aa2c270d.js",
    "revision": "4f4dd514f6b482a8c978939b268e1b07"
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
    "url": "assets/js/9.5a15916e.js",
    "revision": "41e431dc5b8780d57ac71a4bbe1c6de4"
  },
  {
    "url": "assets/js/app.6d5d7fd3.js",
    "revision": "bc505a8f2edf08402df5fdb4330f4944"
  },
  {
    "url": "category/index.html",
    "revision": "07b99c2edcaa6773f43e8d9fcf1d45cb"
  },
  {
    "url": "egg/index.html",
    "revision": "69e0a133a265564f00d521eefea8fd07"
  },
  {
    "url": "electron/index.html",
    "revision": "dce75ae0f6050a3b02275b301bf7e69b"
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
    "revision": "ad68efb4a5b29f1c8fc117a4ffbc79a0"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "50ddfc2c132b0db606fe923628a3e078"
  },
  {
    "url": "notes/git.html",
    "revision": "2120c23bd47b8a117fecf2aa09daf203"
  },
  {
    "url": "notes/index.html",
    "revision": "3979bb45b003f9d085d1a9f7b50d77b2"
  },
  {
    "url": "notes/nginx.html",
    "revision": "634fbd6c6d18e71a986ceb277e4b08ab"
  },
  {
    "url": "notes/npm.html",
    "revision": "e14aae1694a2cf18cf671edd0aff3d8d"
  },
  {
    "url": "notes/vscode.html",
    "revision": "e9e8c7736cc201566b3a15a8b833ca50"
  },
  {
    "url": "tag/index.html",
    "revision": "a54d61806092a3f83689a793ffdf4d22"
  },
  {
    "url": "uniapp/index.html",
    "revision": "785722f98f583c1305c8aadb094b94c1"
  },
  {
    "url": "website/index.html",
    "revision": "806e553f6485e64bd927a6ccec77727d"
  },
  {
    "url": "website/package.html",
    "revision": "78b1623de680de8888a818c5a89b4aa4"
  },
  {
    "url": "website/rearend.html",
    "revision": "45f78a13947d2d035d9fd3aaf71cb0fd"
  },
  {
    "url": "website/tools.html",
    "revision": "d1c23532ffe36e9b0f81ae8a74676d89"
  },
  {
    "url": "website/webclient.html",
    "revision": "f48807a245a704efe078031286667082"
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
