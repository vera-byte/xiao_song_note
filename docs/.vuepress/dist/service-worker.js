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
    "revision": "48c21c88aea7f21d9721a562948a4ffe"
  },
  {
    "url": "assets/css/0.styles.c02df9c9.css",
    "revision": "f9aa362c13a6afb51eaad8fc37598686"
  },
  {
    "url": "assets/css/pray.css",
    "revision": "ebf6cba991811c8f4d9841187335c9b0"
  },
  {
    "url": "assets/html/vscode/mac.html",
    "revision": "b5df510c230822915800c1c3e278e6e2"
  },
  {
    "url": "assets/html/vscode/windows.html",
    "revision": "baec1f2bfd3068f08515f92a32fd4caf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.33e2e5cd.js",
    "revision": "fdd96bf4a475b564699d3363bd3d9a01"
  },
  {
    "url": "assets/js/11.072c2c4f.js",
    "revision": "bd01abcc43b9edbb7fcf9d0e520ea201"
  },
  {
    "url": "assets/js/12.46adf2d2.js",
    "revision": "76332aece19302f47abf718c0341be1f"
  },
  {
    "url": "assets/js/13.0296a845.js",
    "revision": "0abd76dc60c9fe33cac995de1af0f72b"
  },
  {
    "url": "assets/js/14.8d97003e.js",
    "revision": "73befc54010bfb8f08cbc266d8a57d43"
  },
  {
    "url": "assets/js/15.4099772c.js",
    "revision": "fa35b816eca62838039eb6d835956910"
  },
  {
    "url": "assets/js/16.73b95179.js",
    "revision": "ba7b44466285de4fc24a73e8451b966d"
  },
  {
    "url": "assets/js/17.27e5e621.js",
    "revision": "a22698821ee47ca4aeeb7abae273b910"
  },
  {
    "url": "assets/js/18.c9b5bfb6.js",
    "revision": "0b78e659300fa9e222b4a948526cb8a4"
  },
  {
    "url": "assets/js/19.e4f55916.js",
    "revision": "50b12cf423c8fddfad5225ce9a14f20c"
  },
  {
    "url": "assets/js/2.4d5c24b7.js",
    "revision": "7f1482f3782f9ae1111f3793f8f6effb"
  },
  {
    "url": "assets/js/20.1f916594.js",
    "revision": "c3ef00fa260ee5552cdeeecc076446b5"
  },
  {
    "url": "assets/js/21.17cbf5ba.js",
    "revision": "07ff68bf6baaffcd68925e2fe4aba4b9"
  },
  {
    "url": "assets/js/22.5aec31ed.js",
    "revision": "2b98e5a5dabf2f9fd886b777508a22fa"
  },
  {
    "url": "assets/js/23.0c7ea5ea.js",
    "revision": "91ace1a0478da787b6e1826018c22773"
  },
  {
    "url": "assets/js/24.dd36cdbc.js",
    "revision": "74ddf4f037e1b1db076ca5bc3fb1e3d3"
  },
  {
    "url": "assets/js/25.1349403b.js",
    "revision": "6fb37f9a21b493e2b1b59cb8dc5030bf"
  },
  {
    "url": "assets/js/26.1ca26a67.js",
    "revision": "240c240783a87ccc1ad14259b7ee46dc"
  },
  {
    "url": "assets/js/27.373dad79.js",
    "revision": "36802a0febef57fac3b351aa96336bfc"
  },
  {
    "url": "assets/js/28.ad1bdff9.js",
    "revision": "27cbfd48d1c8a800b3aad941907dab6b"
  },
  {
    "url": "assets/js/29.815a3c65.js",
    "revision": "c9f24d6df78b97d619929e41f6e504a1"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.0d141a96.js",
    "revision": "271ed5eef28aa1939bb51658021c64a5"
  },
  {
    "url": "assets/js/31.ba802c12.js",
    "revision": "428c2dea70d768c2beb358a1d1575b66"
  },
  {
    "url": "assets/js/32.3e34f4ad.js",
    "revision": "b963e08c1a696cc564ca03c58c57a335"
  },
  {
    "url": "assets/js/33.072f8ac4.js",
    "revision": "d93549f0a0ec11c25b748bdee0599ca1"
  },
  {
    "url": "assets/js/34.ac75860a.js",
    "revision": "8a3d81e05744b68f2be6944a651c250f"
  },
  {
    "url": "assets/js/35.79c5481e.js",
    "revision": "21b8488e72470e03c7915a1f9212cff9"
  },
  {
    "url": "assets/js/36.120d0f18.js",
    "revision": "fe9d0b396b8d7b47603bf2cc50f475b9"
  },
  {
    "url": "assets/js/37.18b2221e.js",
    "revision": "99f05e0df6dd56a86c3be2dbb7693ef7"
  },
  {
    "url": "assets/js/38.f752acf9.js",
    "revision": "0d7f8004d8a36c7bdd94ba65cff4c2c4"
  },
  {
    "url": "assets/js/39.dd6a74a7.js",
    "revision": "09cd23ab4ca24638a561a4c14adffbf6"
  },
  {
    "url": "assets/js/4.a669b0be.js",
    "revision": "e39f5e5b4906a3eff38bd789fdf2bedc"
  },
  {
    "url": "assets/js/40.dbd14d51.js",
    "revision": "6209cb8cb13c7859f6c974f98a5b1119"
  },
  {
    "url": "assets/js/41.adba80a2.js",
    "revision": "f712e2c17f3223e4680ebe4721522bae"
  },
  {
    "url": "assets/js/42.5bc073b1.js",
    "revision": "972d44034c42459f7b05f10cd53b8d59"
  },
  {
    "url": "assets/js/43.9f070c56.js",
    "revision": "3aff60ab0bda499c182dbba7c5ddfd7c"
  },
  {
    "url": "assets/js/5.6f496986.js",
    "revision": "c0cfcd7fb7c237e41a93601a2e0349f6"
  },
  {
    "url": "assets/js/6.0ac6ea6a.js",
    "revision": "311d40135920987b2cbaa6250e39cc0f"
  },
  {
    "url": "assets/js/7.bb50e923.js",
    "revision": "bdb984a3d54046ade14a08bb765e3bca"
  },
  {
    "url": "assets/js/8.b89b043a.js",
    "revision": "aabe13b57667b9984fe7cff7e057172c"
  },
  {
    "url": "assets/js/9.a812423c.js",
    "revision": "588b0b868f196bbe9e4faa0f8ce58ef0"
  },
  {
    "url": "assets/js/pray.js",
    "revision": "90476c35cdeb16bab0d8d111181629ea"
  },
  {
    "url": "assets/js/push.js",
    "revision": "349bc0dd86143bc85446bc5646706c1f"
  },
  {
    "url": "assets/logo.gif",
    "revision": "da16c0d8dbb602f333da1b4ba1a3141d"
  },
  {
    "url": "case/index.html",
    "revision": "cc1f78c21372d7498690a57b8c98feda"
  },
  {
    "url": "category/index.html",
    "revision": "cfe15cf8142a993d9d92b5a00e4a4f01"
  },
  {
    "url": "egg/index.html",
    "revision": "e62d2c6db1968f319fcad719a2e78cf2"
  },
  {
    "url": "electron/index.html",
    "revision": "26e6b0656bdce9c209443e95c2a76ee7"
  },
  {
    "url": "extra/index.html",
    "revision": "ab75bbbef043486a2dcc020a7d7c1c7e"
  },
  {
    "url": "flutter/index.html",
    "revision": "ef3359d2315a1ae18f8a7fe66a7d8ce2"
  },
  {
    "url": "flutter/test.html",
    "revision": "0fedc5c4bc79d3f4c4e9fef606c8d3e5"
  },
  {
    "url": "guide/changelog.html",
    "revision": "d085e9c79bb1287299cf71c44a0dd44b"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "abb91d16db2738d6ca8324f54266830f"
  },
  {
    "url": "guide/faq.html",
    "revision": "ea057397cd16601cc283df2692a72fc9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "85c6598e0799ccda00ed58a7680efff9"
  },
  {
    "url": "guide/index.html",
    "revision": "ac2279183a17085a11d7b3c116a5e955"
  },
  {
    "url": "guide/palette.html",
    "revision": "ded8928fd404e7919e44212a90b3baa0"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "9947e51a05c169f4264f11a29e939204"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "ecd1d4e115fa12a910e00bb606c5cdc4"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "9a04ad1dcd710c76ed09e480d27c6249"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "f9029b6380240876c1ddfe77ffa5c895"
  },
  {
    "url": "index.html",
    "revision": "19b34801c041ff30636ee0989e4e9a00"
  },
  {
    "url": "js/index.html",
    "revision": "23fe1f71ae1d431988bbdeb712fe7e7d"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "1ca7bc293fe781465ba16a0e4b007f4b"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "0fb0f3ecad5870bbea52c2ab58c10320"
  },
  {
    "url": "notes/git.html",
    "revision": "839ff39de79f2b47cbdc8d19a327c926"
  },
  {
    "url": "notes/index.html",
    "revision": "033ef38e1ece45456049041c7abaa9f1"
  },
  {
    "url": "notes/nginx.html",
    "revision": "312141076838aabad8b63466c535fae5"
  },
  {
    "url": "notes/node.html",
    "revision": "9befd9e0bd0a0e952e2c188f6c9c5ba9"
  },
  {
    "url": "notes/npm.html",
    "revision": "649dd02dcde9e1b059eda774f9fc4d67"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "c08d2ed1c6d5d3fc4a455f013e7b4e50"
  },
  {
    "url": "notes/vscode.html",
    "revision": "5763605f6cef3011880f013a0c14970b"
  },
  {
    "url": "plugin/index.html",
    "revision": "eee88702dbe8e127f7e3e9df84ef73d6"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "91a55912a0e37c0f62e558fe169b4a4e"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "d7712f8aab4288823478f1cbdd0bc401"
  },
  {
    "url": "tag/index.html",
    "revision": "18f2fa4e34d51527d7d48c51bfce2800"
  },
  {
    "url": "uniapp/index.html",
    "revision": "acb5d95f0b2dd63b312955855d2321d8"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "766b5e7bf6f1a24117eb0ccf6ffb776e"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "5d6f46b1229a0f44b10c13abb709e00f"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "b319a81249c9e64a614e1fa4b94c5446"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "aec25f0cc02129225798f81352d6634f"
  },
  {
    "url": "Vera/index.html",
    "revision": "e9cb59c99af34ceb5636ef5ef0b158bc"
  },
  {
    "url": "website/index.html",
    "revision": "e2d56d643431657d43dfd1e5875346d1"
  },
  {
    "url": "website/package.html",
    "revision": "188cde32305473520586e7055c18e96c"
  },
  {
    "url": "website/rearend.html",
    "revision": "218a37d1a80cbe56fc246032618a83c8"
  },
  {
    "url": "website/tools.html",
    "revision": "78108d05ac60e8b1b30c5028e0788dfd"
  },
  {
    "url": "website/webclient.html",
    "revision": "54046fda09afd293802619ca87cfb75e"
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
