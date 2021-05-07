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
    "revision": "95871da4cb72adfe313ad8c21b13c7eb"
  },
  {
    "url": "About.html",
    "revision": "261bb096ff3b842d8f4b9b0c852dc542"
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
    "url": "assets/js/11.1f47a2f5.js",
    "revision": "9e74448fc2b093fa27e48c95b1c920c1"
  },
  {
    "url": "assets/js/12.266e412f.js",
    "revision": "8e467baf203ad8a3e8f9b04f238565be"
  },
  {
    "url": "assets/js/13.4d6decbf.js",
    "revision": "57573de7794f0a4e1c91cb58cbf8de45"
  },
  {
    "url": "assets/js/14.2ed947a0.js",
    "revision": "a6608b501c1afa84241896ef05a6ba2a"
  },
  {
    "url": "assets/js/15.e0d41ce5.js",
    "revision": "2c0d48c27bd33ce87c98be7de2610fc9"
  },
  {
    "url": "assets/js/16.42fb2d56.js",
    "revision": "4df75fb4678d042d53c78420714ecbbf"
  },
  {
    "url": "assets/js/17.e6269558.js",
    "revision": "ba93d1af8b11f0a42385e6a5d48f7172"
  },
  {
    "url": "assets/js/18.e7a1aa58.js",
    "revision": "79d441e47c0bc5e422abaa27426f045a"
  },
  {
    "url": "assets/js/19.25f515a9.js",
    "revision": "f43bbd4fbdb2cd1d54b77193877f1a90"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.c42f9be2.js",
    "revision": "dccc4a9835b5d92fac788bf86d01c140"
  },
  {
    "url": "assets/js/21.386840e8.js",
    "revision": "44e507a84341150388620c9be44f3130"
  },
  {
    "url": "assets/js/22.1068e1a3.js",
    "revision": "41a2eb938fb38cfc32e737981dcc8d3f"
  },
  {
    "url": "assets/js/23.919892ab.js",
    "revision": "ba3e30c49f65765536152de59bcb350a"
  },
  {
    "url": "assets/js/24.7ee4aa40.js",
    "revision": "010a7e1e27d7d78a08006df5cab54729"
  },
  {
    "url": "assets/js/25.28ae50c3.js",
    "revision": "a1f393fae77fede946cb8ab3aa2e38a3"
  },
  {
    "url": "assets/js/26.15ffcce4.js",
    "revision": "df32063e3bf0b84b3bafad489447f9f7"
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
    "url": "assets/js/app.2d3f44ff.js",
    "revision": "1cbbaab778ac8c94e4456dd9d3509f49"
  },
  {
    "url": "category/index.html",
    "revision": "43f0d8cfcc13339c799d69641a392be1"
  },
  {
    "url": "egg/index.html",
    "revision": "2232d4b6ecb809c331e7c30c404ed6af"
  },
  {
    "url": "electron/index.html",
    "revision": "7bf60159becc11df1a56855475ab3b1e"
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
    "revision": "2f6326b3e92d50cca676cbb6a4c96b1e"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "c931594c1d3de2ad1b1b5784309e16f1"
  },
  {
    "url": "notes/git.html",
    "revision": "a451d0db7f672a9bc3487083c4c2a11a"
  },
  {
    "url": "notes/index.html",
    "revision": "9914d70d8842c4f1197821ecd51176cf"
  },
  {
    "url": "notes/nginx.html",
    "revision": "bda1b185cba1fe8366573f75f1e31fbc"
  },
  {
    "url": "notes/node.html",
    "revision": "42ff22cb636398c5a52202a4a2538238"
  },
  {
    "url": "notes/npm.html",
    "revision": "979cb37ba382bc9bb0498feceff427d9"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "e7c3068db11dbe5d9c7bd6151ddaf8ee"
  },
  {
    "url": "notes/vscode.html",
    "revision": "e8074a3d06f19a250c65c0884f54141a"
  },
  {
    "url": "tag/index.html",
    "revision": "13a5322e4a822d5edca65414d50bbd61"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "276a08b168eb77142edb4a4fa41ec7fa"
  },
  {
    "url": "uniapp/index.html",
    "revision": "2d5630ed44e3de554eaafb524ada26a8"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "687bbdea636c1d663f20a3b310de69fa"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "d8f40c959c2997c59c4f23ac26ee1545"
  },
  {
    "url": "website/index.html",
    "revision": "697dccb95256f5e38e7ff5c62eabc78b"
  },
  {
    "url": "website/package.html",
    "revision": "ca72f9b3fc255ec6542bea95966dd527"
  },
  {
    "url": "website/rearend.html",
    "revision": "a53123eefbd399cf5e3c5a0743480efd"
  },
  {
    "url": "website/tools.html",
    "revision": "e9909068ade4cc34bbf046ad25bb7573"
  },
  {
    "url": "website/webclient.html",
    "revision": "10e30cdd5ddfef5fc8d17f0387ed55cb"
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
