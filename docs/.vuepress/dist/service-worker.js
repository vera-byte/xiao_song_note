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
    "revision": "ef67db8a8eefefd8ecfd27030861b50a"
  },
  {
    "url": "About.html",
    "revision": "192f92d23dc773e2ccbb688662c497bd"
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
    "url": "assets/js/10.7abc4dfd.js",
    "revision": "4c80d18ec05b536757e2aef44c6e88d2"
  },
  {
    "url": "assets/js/11.93a2fa2f.js",
    "revision": "d9fac0c2877c5ead9c389859501f32f7"
  },
  {
    "url": "assets/js/12.672e7319.js",
    "revision": "e8185f8381e0586278daac5ca34a9fe4"
  },
  {
    "url": "assets/js/13.79fbdd04.js",
    "revision": "8b6d9c9bf28c8f0e4837239b3e4494c7"
  },
  {
    "url": "assets/js/14.95118642.js",
    "revision": "634449c85f4faa3c7c228323b1e4e28c"
  },
  {
    "url": "assets/js/15.68c4d3fa.js",
    "revision": "b75111f1428a1d012056460521c4a643"
  },
  {
    "url": "assets/js/16.17ca5041.js",
    "revision": "ceb4928dab8f4f19d828b1b27c324db4"
  },
  {
    "url": "assets/js/17.3c893140.js",
    "revision": "0387959b1d777f52951e252a7b640a74"
  },
  {
    "url": "assets/js/18.57232f6e.js",
    "revision": "80a8422b960a2f86e15aaa1d71ee85f3"
  },
  {
    "url": "assets/js/19.b6f6690b.js",
    "revision": "79e0f861987c749e4705a9816ef50bcf"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.e4e452b7.js",
    "revision": "ba68f7537d1f645beb41d5ed31d4fe85"
  },
  {
    "url": "assets/js/21.f89c7b40.js",
    "revision": "d07478b11e188935f3b8f35d8b3e512b"
  },
  {
    "url": "assets/js/22.a9192d6d.js",
    "revision": "e96d9c3ccb1ba9a0ad717b0380950918"
  },
  {
    "url": "assets/js/23.5635aec3.js",
    "revision": "71cac6294e284f07e6bdf67489ae30e3"
  },
  {
    "url": "assets/js/24.fa4b4906.js",
    "revision": "fd1e3483165d6274ed60ce7a25b96fb1"
  },
  {
    "url": "assets/js/25.d06e107c.js",
    "revision": "6c52107390df2a1ccaf2c1d98661423c"
  },
  {
    "url": "assets/js/26.7e26d6cf.js",
    "revision": "7d4f2a9f0d592015e79e694370409627"
  },
  {
    "url": "assets/js/27.92857e49.js",
    "revision": "63c29d359a4320c115fb5c01c1d2fb30"
  },
  {
    "url": "assets/js/28.711674ec.js",
    "revision": "4035151c550e6f48a2e47c9c5d9a5f47"
  },
  {
    "url": "assets/js/29.927f94a8.js",
    "revision": "9a834fc4f914604fb9959a69b864a724"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/30.c73132df.js",
    "revision": "ea35c28577fb8ab6a004b0e7f6bfd249"
  },
  {
    "url": "assets/js/4.7bf2046a.js",
    "revision": "8a992d2b61c29a3f2452ff9fcc44a281"
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
    "url": "assets/js/app.071cf0c6.js",
    "revision": "17211071c2a81a3fafe6a642f846f8e5"
  },
  {
    "url": "category/index.html",
    "revision": "fd4e96ddbba6b502e82d5ae334acc33d"
  },
  {
    "url": "egg/index.html",
    "revision": "1f6e5e4fd2778d7dc7abfb446bb5072e"
  },
  {
    "url": "electron/index.html",
    "revision": "3c2a747b31a9857269b07b0d23845989"
  },
  {
    "url": "flutter/index.html",
    "revision": "ad7fdc995d32bb03a0747e01f65c47e9"
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
    "revision": "0153969031b64345676548ea077a1185"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "3cca672d63dbb42c49ff4da19005cd21"
  },
  {
    "url": "notes/git.html",
    "revision": "4e8726c039a3eea0bbad901fdb3d38b3"
  },
  {
    "url": "notes/index.html",
    "revision": "a06e2644fbfcde67a767c9e044c069f8"
  },
  {
    "url": "notes/nginx.html",
    "revision": "6f8eb4c10e5a2c22ab34cada254e964a"
  },
  {
    "url": "notes/node.html",
    "revision": "06830ee0b02fde28d5b5f9eaf029ae72"
  },
  {
    "url": "notes/npm.html",
    "revision": "4c87ef20a199fea191ec51246ab610e0"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "3767f3a1cf05a6947a7b79aee61c5afa"
  },
  {
    "url": "notes/vscode.html",
    "revision": "22e26347e61b4bf281f6bfb0a779473a"
  },
  {
    "url": "tag/index.html",
    "revision": "fd7749e9d239ed8737b2bbfbed33dba8"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "965cce0e1480eb3135ebe7d2e2a0eba4"
  },
  {
    "url": "uniapp/index.html",
    "revision": "1bc4c358cca5eab493192f848f67a1ef"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "19b857d5601f18e7ee2f59505c5cfc98"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "55ba4baeca508dced1aae78368bd3d86"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "8e3c01af4f83514fdfc2fb2aed0ed96a"
  },
  {
    "url": "Vera/index.html",
    "revision": "48d2cc415d5ba6b874ee3e54deabf152"
  },
  {
    "url": "website/index.html",
    "revision": "8d05deb24c882de973e41da1caea616f"
  },
  {
    "url": "website/package.html",
    "revision": "e43447089b6370d38e816b51e12ec1a3"
  },
  {
    "url": "website/rearend.html",
    "revision": "5d71d216633a7adec5f0add9af80a2b2"
  },
  {
    "url": "website/tools.html",
    "revision": "728e2bce043f150821622c05f0efe647"
  },
  {
    "url": "website/webclient.html",
    "revision": "5cc7f943dd0d6820d292f3950e12b1ee"
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
