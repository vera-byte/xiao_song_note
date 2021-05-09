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
    "revision": "14795e28a29b6ed75faec1e65855b787"
  },
  {
    "url": "About.html",
    "revision": "f4fbd01d1d2803876f1bdafa784511b6"
  },
  {
    "url": "assets/css/0.styles.9760031d.css",
    "revision": "6bcbd82ffbf6f9873ddebaaac3f9298f"
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
    "url": "assets/js/11.9dc59260.js",
    "revision": "f8712871d797f18123f2e4d7db9c7954"
  },
  {
    "url": "assets/js/12.08ebf092.js",
    "revision": "f415c4c5c2c97889329134cc254e6450"
  },
  {
    "url": "assets/js/13.89ad7415.js",
    "revision": "83c740ca7b0834b3ed5dac3541351287"
  },
  {
    "url": "assets/js/14.2ed947a0.js",
    "revision": "a6608b501c1afa84241896ef05a6ba2a"
  },
  {
    "url": "assets/js/15.ff96a853.js",
    "revision": "695a7ab0376d49c4f5c6c9636d02b55c"
  },
  {
    "url": "assets/js/16.a775fac8.js",
    "revision": "5ba7e81ce6390e0642a4efb44aa91327"
  },
  {
    "url": "assets/js/17.dc50463f.js",
    "revision": "5890a6c9e83847ce59f4408f8e0ee6cd"
  },
  {
    "url": "assets/js/18.359e3c24.js",
    "revision": "3dd2aefff6ec2881955550729cd44179"
  },
  {
    "url": "assets/js/19.6a9c8a35.js",
    "revision": "887659a57c97ff6a45a48585ddbde104"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.f657bd77.js",
    "revision": "847ad05e40185eb7820a55ca068ec5c3"
  },
  {
    "url": "assets/js/21.78a08e60.js",
    "revision": "b2d04e241978acd2ac0cb4e6c55199a2"
  },
  {
    "url": "assets/js/22.040af0d1.js",
    "revision": "2d9580781ffc40e3b1e78e58726cf92b"
  },
  {
    "url": "assets/js/23.e8d312d4.js",
    "revision": "f5def1dabe19c12b17ca19cdff767833"
  },
  {
    "url": "assets/js/24.0dd8692e.js",
    "revision": "5a90bd81fe02ca7a96862e4849ac24e8"
  },
  {
    "url": "assets/js/25.b97772f8.js",
    "revision": "5637cf9610bbc2eca7481cdbf1432271"
  },
  {
    "url": "assets/js/26.43507860.js",
    "revision": "c7e1a133802ec658976f37d974a24c6f"
  },
  {
    "url": "assets/js/27.152ee15c.js",
    "revision": "db7ff234ea7a386f93f47a2254b07b78"
  },
  {
    "url": "assets/js/28.05142e1d.js",
    "revision": "4e1e9a12e5a87edb20cd6c42a3c49da9"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.beb1e27f.js",
    "revision": "4a34d69a3f26448562017e995886e238"
  },
  {
    "url": "assets/js/5.09faa3ad.js",
    "revision": "006d102b959442f8a59f266f28469c6a"
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
    "url": "assets/js/app.951b4451.js",
    "revision": "e091d0bb0b80594c85c7b6741397ce74"
  },
  {
    "url": "category/index.html",
    "revision": "00a6fbe6ba91ed181f37b4b0f2a488ef"
  },
  {
    "url": "egg/index.html",
    "revision": "c06db6d8c98392e1756a0f0755d57cf6"
  },
  {
    "url": "electron/index.html",
    "revision": "4338250c35c6bf3b27f43f4d4bb54bce"
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
    "revision": "e13ddd70f9af58e0274851e4b417efcb"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "2255a0e9eb14788456981854f96531a5"
  },
  {
    "url": "notes/git.html",
    "revision": "286c8bd5badf08a86b6ddd6d8c540dda"
  },
  {
    "url": "notes/index.html",
    "revision": "247f83cd4c962d5b70150332b73afc1d"
  },
  {
    "url": "notes/nginx.html",
    "revision": "1fa97cabaaf92332f0039324757cbc5c"
  },
  {
    "url": "notes/node.html",
    "revision": "e69e8e67da9d5739812985f8c7f42209"
  },
  {
    "url": "notes/npm.html",
    "revision": "d162c752f3826e6ecdd5dd47c0d94fcb"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "a40272a7e19d0e51f6a24e476e9e9d66"
  },
  {
    "url": "notes/vscode.html",
    "revision": "564096469120c292fdd0cf179ab7857b"
  },
  {
    "url": "tag/index.html",
    "revision": "b911aaff8f5145df9fc6791cc45a0b88"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "b1e453b93a9f742cea8d6b707a48be3b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "8c5e206f6bc23b0a493a613bf791a67b"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "bb7e9e7ccf42f20df7f81aba5c9c2a7d"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "2e9ffc555b7997072e11e0b7bba48097"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "ec3fc89a37b672dc7f81fafb442bc26f"
  },
  {
    "url": "website/index.html",
    "revision": "b6047407f6d4125613483cb76216c3d2"
  },
  {
    "url": "website/package.html",
    "revision": "6b44ae0d2e315191cd8254f688e85318"
  },
  {
    "url": "website/rearend.html",
    "revision": "a6615efd9e3fd19677169e851a5d7374"
  },
  {
    "url": "website/tools.html",
    "revision": "56d3cce930131abec00026058c0d5a0a"
  },
  {
    "url": "website/webclient.html",
    "revision": "93baff6ed8144fba194de00ce54f40fb"
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
