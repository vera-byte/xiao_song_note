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
    "revision": "15c2204e19c4c540ab0b958bdb9e3381"
  },
  {
    "url": "About.html",
    "revision": "d320a08cf345e8e1c6707aa1c2aaa6a6"
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
    "url": "assets/js/11.1f47a2f5.js",
    "revision": "9e74448fc2b093fa27e48c95b1c920c1"
  },
  {
    "url": "assets/js/12.08ebf092.js",
    "revision": "f415c4c5c2c97889329134cc254e6450"
  },
  {
    "url": "assets/js/13.d49a2a60.js",
    "revision": "abf784f0eced57cbdb1398b3151c8fb8"
  },
  {
    "url": "assets/js/14.486c076f.js",
    "revision": "3d049af2feb4983388fff602fd85e80c"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.42fb2d56.js",
    "revision": "4df75fb4678d042d53c78420714ecbbf"
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
    "url": "assets/js/19.344ca220.js",
    "revision": "f28e9260e194f4e548e7982f003090a8"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.1f2a4149.js",
    "revision": "0a2e0816227be4f081b73ae53682ac73"
  },
  {
    "url": "assets/js/21.e8888a74.js",
    "revision": "2866e6091b0c9565fa166a0a4ad1763c"
  },
  {
    "url": "assets/js/22.06881b5b.js",
    "revision": "890b7a4ab0e68f9690541a909d7a21b3"
  },
  {
    "url": "assets/js/23.69ab07de.js",
    "revision": "e13d88efbf52cb3a3dd090b7a76a4a6e"
  },
  {
    "url": "assets/js/24.2c66a9f4.js",
    "revision": "29df25fa596696765a24631703a6674b"
  },
  {
    "url": "assets/js/25.56a55e7d.js",
    "revision": "e6aa6ebd0f4306b5e4bd27d56105d4fb"
  },
  {
    "url": "assets/js/26.3800ef9f.js",
    "revision": "e877fdd267b756d335f72047b50a7a90"
  },
  {
    "url": "assets/js/27.494cb8d4.js",
    "revision": "46ab32760e35bcbd04d329a1a8438aa4"
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
    "url": "assets/js/4.f63a562c.js",
    "revision": "0b38160439f7ff9b43e79abdd67d129e"
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
    "url": "assets/js/app.c92e0de1.js",
    "revision": "8a8b1fb051303f88dda2734434e0874f"
  },
  {
    "url": "category/index.html",
    "revision": "308d0fb6fc7b7e64e7836da358ada027"
  },
  {
    "url": "egg/index.html",
    "revision": "92f300d9003265789dd6506490daa3f2"
  },
  {
    "url": "electron/index.html",
    "revision": "8e8963982b18134118bb0dcc8ff56d8c"
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
    "revision": "306c13cafa87afb4205cd7cc4a5efc85"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "3c5953b2854b81acfab428f93e1722dc"
  },
  {
    "url": "notes/git.html",
    "revision": "0060d6c47032a0eacd62dc1efe555fb4"
  },
  {
    "url": "notes/index.html",
    "revision": "47b3f958404153c61d4b9c9b3a133040"
  },
  {
    "url": "notes/nginx.html",
    "revision": "8d0be275b2268cddbcef4b245f360697"
  },
  {
    "url": "notes/node.html",
    "revision": "0fc37037d5a686b170a270a4ca24fcf2"
  },
  {
    "url": "notes/npm.html",
    "revision": "3ed41a484a2e69c3c570902cb60b5752"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "e64e2fd2152871beae49661af1f3b9a0"
  },
  {
    "url": "notes/vscode.html",
    "revision": "96ff9a8109cbe65e89bde3aa71372e4c"
  },
  {
    "url": "tag/index.html",
    "revision": "a91eaca0baf9972a05da8a71b55d67d7"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "ea4c51e390a67aa922132beb7351c14b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "a9a985efb6062354045eedf7334577ec"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "cacb2c412590984cbbd2ea6781bb3829"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "8879a426b257b436b615e7d3824d3993"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "b77c1b0642f26b77b1ebcc904af08fbb"
  },
  {
    "url": "website/index.html",
    "revision": "95664cd9433fdc5bcdb8ad4d34a01d24"
  },
  {
    "url": "website/package.html",
    "revision": "4eea9a5db53afdd38ae8e638554aa141"
  },
  {
    "url": "website/rearend.html",
    "revision": "52e47c8ff28b01f152b4b669801ad8e0"
  },
  {
    "url": "website/tools.html",
    "revision": "4e41804b46a086f8233c94c8c9f524c2"
  },
  {
    "url": "website/webclient.html",
    "revision": "d0240262260f3a56bf699555c975a0d6"
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
