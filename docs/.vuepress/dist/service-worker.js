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
    "revision": "e360184056f68bab79301c58a2abda2b"
  },
  {
    "url": "About.html",
    "revision": "e9b81bddae25aaeef0ac020f235230cd"
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
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
  },
  {
    "url": "assets/js/12.f06337c1.js",
    "revision": "03794b518f5b966ce55cc68fdab9103e"
  },
  {
    "url": "assets/js/13.e51c21cb.js",
    "revision": "16ece50a00c4915c16e091811e0acaaa"
  },
  {
    "url": "assets/js/14.486c076f.js",
    "revision": "3d049af2feb4983388fff602fd85e80c"
  },
  {
    "url": "assets/js/15.0180e547.js",
    "revision": "da3e50b35ddcb209acf041f443e4634f"
  },
  {
    "url": "assets/js/16.5b19c77b.js",
    "revision": "889c04f8422e4373175e70683edb812b"
  },
  {
    "url": "assets/js/17.514faf42.js",
    "revision": "80fcda31acac41d7b965136dd1c02c88"
  },
  {
    "url": "assets/js/18.32eb0e3d.js",
    "revision": "d6d9de7894fdd193dab5c1639dfd4370"
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
    "url": "assets/js/20.0b2851b7.js",
    "revision": "ec759a9463be39ac7cd6e0c695e08e47"
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
    "url": "assets/js/24.6c28261e.js",
    "revision": "acb0eb3e48042f3ab01515c58f078a35"
  },
  {
    "url": "assets/js/25.f956a518.js",
    "revision": "a18d69a4a1f9643fdc81ced7b04d552c"
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
    "url": "assets/js/9.892cfdd5.js",
    "revision": "5efb292ac5581ce5c5df189e7616c9df"
  },
  {
    "url": "assets/js/app.859a6fc8.js",
    "revision": "243f18ac61f0187771f2bf0b5459a44b"
  },
  {
    "url": "category/index.html",
    "revision": "97de8e20c53290bfa4fba9ef66a9669a"
  },
  {
    "url": "egg/index.html",
    "revision": "39a29c79651286d4820d8beb56bf356e"
  },
  {
    "url": "electron/index.html",
    "revision": "44392ba37b1961a9ad75e2dc0cc92245"
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
    "revision": "388d329aab81e9c13ffc662101e7e054"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "d9d375dd60d013121d2a5f3626dc9e0a"
  },
  {
    "url": "notes/git.html",
    "revision": "9bac70af1be9cc49bb901e08d6747757"
  },
  {
    "url": "notes/index.html",
    "revision": "ff9ed060bbca492c1f6124231427338c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "752528085d488458b2b8620dff392ee4"
  },
  {
    "url": "notes/node.html",
    "revision": "d85ab9f0195458e7f26f1ccfddd881e6"
  },
  {
    "url": "notes/npm.html",
    "revision": "3a28ed18d3de767d39ce078c5b9d787e"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "264bb6d50a730d3f69acc03055b1828f"
  },
  {
    "url": "notes/vscode.html",
    "revision": "75b5c3f4882d75a9de12dd76a23b55ab"
  },
  {
    "url": "tag/index.html",
    "revision": "b2b3302ec666d9ec109583d9d552c8b6"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "47fb34ae714b79ef082910189b707a33"
  },
  {
    "url": "uniapp/index.html",
    "revision": "b0aeb5d199224251533a697cc812b967"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "c904ad3f968436b86759a582fbc94aeb"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "65ba9da4eeac3f225961e9d035f00ac6"
  },
  {
    "url": "website/index.html",
    "revision": "18a150d3e1bb43bbad45fc12fb1519db"
  },
  {
    "url": "website/package.html",
    "revision": "5ea73819a6fb38c175530ade5726cbd6"
  },
  {
    "url": "website/rearend.html",
    "revision": "cefed5b6503f157c3581db9a29c29e69"
  },
  {
    "url": "website/tools.html",
    "revision": "b4cc91a140e098560a5f1c1ebf31a81e"
  },
  {
    "url": "website/webclient.html",
    "revision": "475ecc997d9d9c26820f439a90561fe8"
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
