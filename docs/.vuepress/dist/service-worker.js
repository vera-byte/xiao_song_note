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
    "revision": "7c46c6e480696fe628053561356e31fc"
  },
  {
    "url": "About.html",
    "revision": "9f54615879b4866aaccd70feb40742c7"
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
    "url": "assets/js/10.b6b18b80.js",
    "revision": "7d14de354a68acd5a99f3a6873250684"
  },
  {
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
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
    "url": "assets/js/14.b7510dfc.js",
    "revision": "143ad8d403018b76eaff10757b971ebd"
  },
  {
    "url": "assets/js/15.ff96a853.js",
    "revision": "695a7ab0376d49c4f5c6c9636d02b55c"
  },
  {
    "url": "assets/js/16.75fd0b73.js",
    "revision": "190419fe4cb06465023e02c0d7893dbf"
  },
  {
    "url": "assets/js/17.3e191a67.js",
    "revision": "e2279951d4f0b6730dc970895c183e43"
  },
  {
    "url": "assets/js/18.90b640bb.js",
    "revision": "ba45b5cddc1ad73bddda7ba7bc051700"
  },
  {
    "url": "assets/js/19.344ca220.js",
    "revision": "f28e9260e194f4e548e7982f003090a8"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.9ad5e1f1.js",
    "revision": "78406a742c7818930c39480a31a87ae9"
  },
  {
    "url": "assets/js/21.e33e2f98.js",
    "revision": "7d90c4b6714d6e962ae6ee7d3018307d"
  },
  {
    "url": "assets/js/22.567321fd.js",
    "revision": "15f424417085ad5762cabd495c68086d"
  },
  {
    "url": "assets/js/23.abc84364.js",
    "revision": "0f9f6a062aef03257c354a2c21dfa956"
  },
  {
    "url": "assets/js/24.179a2fb9.js",
    "revision": "21423ee71915a4b348c8dec3e91f55d0"
  },
  {
    "url": "assets/js/25.29935595.js",
    "revision": "3450b5db48b23c05c1435b26c8b6d32a"
  },
  {
    "url": "assets/js/26.e85e7912.js",
    "revision": "04fd32acfd39391b40dffbf35f3c476b"
  },
  {
    "url": "assets/js/27.d79ab1bd.js",
    "revision": "d6eb1c61be9ac260e56a6d7597b8bd8e"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.905651e4.js",
    "revision": "a655c3b3e3952821b488c699b78958fd"
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
    "url": "assets/js/app.88ca1604.js",
    "revision": "01c9488c7427378c9e495c46998df4e4"
  },
  {
    "url": "category/index.html",
    "revision": "35630229d680ed929aed32061cbeaefb"
  },
  {
    "url": "egg/index.html",
    "revision": "b77e497c98bab03536c1c611504f3091"
  },
  {
    "url": "electron/index.html",
    "revision": "4f33765c8cf5708c3e1b6d93ff80ac72"
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
    "revision": "fddcabad3c461f87ed6fc6ebe9eb086f"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "d4aac4b6148ececc7542c0bbdc418802"
  },
  {
    "url": "notes/git.html",
    "revision": "1569a665d7409d6909a99840d423a73c"
  },
  {
    "url": "notes/index.html",
    "revision": "ab46213941c88be833d0b96d14058747"
  },
  {
    "url": "notes/nginx.html",
    "revision": "f5d576b8d7a2035ba85483c7226d9965"
  },
  {
    "url": "notes/node.html",
    "revision": "1e20ac066c0dc3e5c31bfaf7c902c587"
  },
  {
    "url": "notes/npm.html",
    "revision": "45281c1849b0ef23fdaf79c9c08c58e9"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "ddf40e0890008ec0c1b1c9ea30b19b1c"
  },
  {
    "url": "notes/vscode.html",
    "revision": "94868f2ab515eb12ffc9b694c389cb08"
  },
  {
    "url": "tag/index.html",
    "revision": "ff9009871ae43268b9231cc68dc0220d"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "0cd311843cc9c767f5d52d588836889d"
  },
  {
    "url": "uniapp/index.html",
    "revision": "6830befab2cd51d0d9f0c80154689e16"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "f3f316c94c3bd1bed89c42cd39fbea3f"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "f8326d895f1f1bc53f8c5685826599ea"
  },
  {
    "url": "website/index.html",
    "revision": "2e89710b396e969b23c270f3caffb10b"
  },
  {
    "url": "website/package.html",
    "revision": "efc4b00d188c968a0f0dff3111307525"
  },
  {
    "url": "website/rearend.html",
    "revision": "3ae3293a83c02e2fa36b4ca3b6f1ceb6"
  },
  {
    "url": "website/tools.html",
    "revision": "b47946fc003c76a7cdf62108a48ed508"
  },
  {
    "url": "website/webclient.html",
    "revision": "72b73ebba491a4aff78020d1a1da7b9c"
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
