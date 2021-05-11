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
    "revision": "a4fd9c8f80e672f8e97f3ddc30854b26"
  },
  {
    "url": "About.html",
    "revision": "209171d4a5a90070f03ec0d8a1b26f94"
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
    "url": "assets/js/11.e65e7f7e.js",
    "revision": "bd32b3a0a49d5faddfc579d3e6718fd6"
  },
  {
    "url": "assets/js/12.281e485b.js",
    "revision": "fbea38bf0b44457f54694289129fc1ea"
  },
  {
    "url": "assets/js/13.79fbdd04.js",
    "revision": "8b6d9c9bf28c8f0e4837239b3e4494c7"
  },
  {
    "url": "assets/js/14.330b5807.js",
    "revision": "533bd5ebb550a40184a622e28d44db22"
  },
  {
    "url": "assets/js/15.a3e87efe.js",
    "revision": "56cae39e6cee0aab112835c2c18ed61c"
  },
  {
    "url": "assets/js/16.b26891bd.js",
    "revision": "6fc9e63375aa60fd049894824c8b0f2a"
  },
  {
    "url": "assets/js/17.38e33a28.js",
    "revision": "322d6c954ff9e86364952dd203b47a9d"
  },
  {
    "url": "assets/js/18.043b15cb.js",
    "revision": "a31d4a5a85f0d854072aca5eaf4c2752"
  },
  {
    "url": "assets/js/19.7cc6b0a1.js",
    "revision": "325920136cfd7153c42f46a70b86014d"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.99b3d045.js",
    "revision": "6c96e7b7d110c8bc7a41fe02c238db7c"
  },
  {
    "url": "assets/js/21.a2b4235c.js",
    "revision": "4618143ed0fcb2f50948bccb5e7ab56a"
  },
  {
    "url": "assets/js/22.0b2f21b9.js",
    "revision": "4aadcd111c91e3000b1bd89c5f02580a"
  },
  {
    "url": "assets/js/23.6adcf521.js",
    "revision": "52174c3147bbc3f6804a26df82f2f9b1"
  },
  {
    "url": "assets/js/24.22f686b1.js",
    "revision": "164524c53ebb1e2f62575999a1648b54"
  },
  {
    "url": "assets/js/25.114f97d6.js",
    "revision": "491099aa17ed34c96049d1209c08bc46"
  },
  {
    "url": "assets/js/26.0e6a8bc0.js",
    "revision": "9b87f7c601c0e3042deb7b89ad6abcde"
  },
  {
    "url": "assets/js/27.08e02f06.js",
    "revision": "a8b814fcc9b044c56a3183efb8496c19"
  },
  {
    "url": "assets/js/28.eb8845ee.js",
    "revision": "e5e3bf60f58305daae7d2de6f9416f72"
  },
  {
    "url": "assets/js/29.d7580405.js",
    "revision": "31e1d147768c1ab2e36a675038bd1e6c"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.21c5168b.js",
    "revision": "cfd73facb32abc03e6d7caaea118b5c5"
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
    "url": "assets/js/app.0795a02e.js",
    "revision": "180fb28301d43681bce49effdcb1e6c6"
  },
  {
    "url": "category/index.html",
    "revision": "56844be2caf72254276eaa919ad5d0bb"
  },
  {
    "url": "egg/index.html",
    "revision": "0d27f865f9d60443c7e4c988de791212"
  },
  {
    "url": "electron/index.html",
    "revision": "3a960759f0c2c509f0aaf23f4f4dcd89"
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
    "revision": "80ab3297f8706ca03204f1acc6bf29c2"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "ea662ce6487ed7f2ce09bbbf488221ed"
  },
  {
    "url": "notes/git.html",
    "revision": "2ce9610b22d6e224671cbb457655abd8"
  },
  {
    "url": "notes/index.html",
    "revision": "cd904e0f6bd0df060b8667c354502151"
  },
  {
    "url": "notes/nginx.html",
    "revision": "399679dee1f5a518166c6f67afc215a6"
  },
  {
    "url": "notes/node.html",
    "revision": "380f084d4db122046dee5f86adf35be6"
  },
  {
    "url": "notes/npm.html",
    "revision": "9d0917f4443d5bb452a3635f98512893"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "332b6ae0b9cbdb47331f54a79ba8d655"
  },
  {
    "url": "notes/vscode.html",
    "revision": "76a6592ac071a9bcda603f9f9ca0b336"
  },
  {
    "url": "tag/index.html",
    "revision": "9369440f6288cc8d3cd1763297b75d71"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "1b5669acfcd02266f2adba28635681a5"
  },
  {
    "url": "uniapp/index.html",
    "revision": "62484400885338d21cc43f10057cc6e5"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "d55eb69b2aede4748deef4f32e3f7bf2"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "386e448f620771c31502351c93f3bff9"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "035cefc08aa27da8f2f529fafcdb3112"
  },
  {
    "url": "Vera/index.html",
    "revision": "fbcfe310a8f046377298f8f5126730c8"
  },
  {
    "url": "website/index.html",
    "revision": "72407c513c24ca7f5017ea4fcf6d09df"
  },
  {
    "url": "website/package.html",
    "revision": "be16086f01c634c53e540e2196ea8fa8"
  },
  {
    "url": "website/rearend.html",
    "revision": "865069c7e02b6e23c9750397fd4815ca"
  },
  {
    "url": "website/tools.html",
    "revision": "2ea1e3b103362743e7c175c9de6b98f3"
  },
  {
    "url": "website/webclient.html",
    "revision": "596c9ac48fcd32e70900bf90214a4246"
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
