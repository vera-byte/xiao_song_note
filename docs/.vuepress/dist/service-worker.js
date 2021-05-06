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
    "revision": "b4b0aaac1cd0f6e6e643fe9bbb6d953f"
  },
  {
    "url": "About.html",
    "revision": "7bb269320bbb15a21327f137980c68db"
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
    "url": "assets/js/10.986f205c.js",
    "revision": "87170068bb9c1a40e1852240d7d72234"
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
    "url": "assets/js/13.5e7e4474.js",
    "revision": "a59bfd5962e445b929ff4bfa7932ef88"
  },
  {
    "url": "assets/js/14.6caed945.js",
    "revision": "4ffe2809f09d545ae6d94d836fa42b79"
  },
  {
    "url": "assets/js/15.ff96a853.js",
    "revision": "695a7ab0376d49c4f5c6c9636d02b55c"
  },
  {
    "url": "assets/js/16.5b19c77b.js",
    "revision": "889c04f8422e4373175e70683edb812b"
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
    "url": "assets/js/20.1e8ce098.js",
    "revision": "6ba426580a49b80ab5211482d0c41560"
  },
  {
    "url": "assets/js/21.1e324102.js",
    "revision": "bb171e9dd248954243c970b9d828f0d8"
  },
  {
    "url": "assets/js/22.48ed204b.js",
    "revision": "a057f1bf8c9cb20824a3c27719c5af82"
  },
  {
    "url": "assets/js/23.d083e334.js",
    "revision": "9bc44daee87fc3e3b05a965ee2857113"
  },
  {
    "url": "assets/js/24.910f79c0.js",
    "revision": "028eed539b379c69b7a817cbb3a08047"
  },
  {
    "url": "assets/js/25.c9e4e5d5.js",
    "revision": "744558f732516ef4614f77e583124517"
  },
  {
    "url": "assets/js/26.b5cd22ab.js",
    "revision": "10d20167cb7c63ab7d66ac28c21d0426"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.b2dd4006.js",
    "revision": "fe395b7bd2ea0e7c868b024a2a7d139d"
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
    "url": "assets/js/app.b3712229.js",
    "revision": "f52443193faf9a8428cc9fd216a22975"
  },
  {
    "url": "category/index.html",
    "revision": "2ea42c0d09634e56b2e8578f4a84c94d"
  },
  {
    "url": "egg/index.html",
    "revision": "9a25d2f7c80e2f07ada008dcbe52d868"
  },
  {
    "url": "electron/index.html",
    "revision": "601429902f44d5235fa0ddf0a0d83348"
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
    "revision": "8c2c57168208af9be0ff3a0b6363eb80"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "4267ed50ae69eac90afcbeec92dfab14"
  },
  {
    "url": "notes/git.html",
    "revision": "4ec46cf8c38699743d10edd5c03d7e7a"
  },
  {
    "url": "notes/index.html",
    "revision": "4e0f5043251edeace7b55c96c0f7ee0e"
  },
  {
    "url": "notes/nginx.html",
    "revision": "d390d2c72ca0350bdeb7f35fd1a4ef57"
  },
  {
    "url": "notes/node.html",
    "revision": "718bd0e5f9fce6086785da177d26d3c2"
  },
  {
    "url": "notes/npm.html",
    "revision": "bf6d0d31f3164b842d0bc6a66f27d1e0"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "b2a95e87ea976f96be560a8fc61923c1"
  },
  {
    "url": "notes/vscode.html",
    "revision": "f6c97e5648170eff2a2d9112bb40ef65"
  },
  {
    "url": "tag/index.html",
    "revision": "374fa455cd1824c7e6d1a4cdd031f289"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "58ebd18c8302515c7a6652d328fc5ff7"
  },
  {
    "url": "uniapp/index.html",
    "revision": "3fd156890e2df86a4d1ace00d81a6e18"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "68068602caa8280099f0f73c917b2f9f"
  },
  {
    "url": "website/index.html",
    "revision": "eb98903ed6693e18a535f733515d2058"
  },
  {
    "url": "website/package.html",
    "revision": "bc2caaa455b666f023b41b9d2c0b18b9"
  },
  {
    "url": "website/rearend.html",
    "revision": "cf9e78b89d0f88a535510fa0215e24cf"
  },
  {
    "url": "website/tools.html",
    "revision": "a8d83e96590194f48e49f4ed14d2ca30"
  },
  {
    "url": "website/webclient.html",
    "revision": "de5cd3a3327f1b15f79e625a37b3a1a8"
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
