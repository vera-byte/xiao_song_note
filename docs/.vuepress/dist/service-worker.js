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
    "revision": "91aa0e698300e2cf8af95989650a9254"
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
    "url": "assets/js/13.60390fcb.js",
    "revision": "bcd37ce921824564920c5766f76c36d4"
  },
  {
    "url": "assets/js/14.6abf91c3.js",
    "revision": "8c72c650afee30976750a60554dbae2e"
  },
  {
    "url": "assets/js/15.576df1bb.js",
    "revision": "2b15f76fe0b41ef689a5f9d3ecd56cde"
  },
  {
    "url": "assets/js/16.73b95179.js",
    "revision": "ba7b44466285de4fc24a73e8451b966d"
  },
  {
    "url": "assets/js/17.91881c76.js",
    "revision": "2b4d59f57b39e241e317ec49b0255f98"
  },
  {
    "url": "assets/js/18.6f8c8f89.js",
    "revision": "dcb2d00012b57fe849f8c5fbd3984596"
  },
  {
    "url": "assets/js/19.1259a16e.js",
    "revision": "e802ea982789b61fc3cfce9430e269df"
  },
  {
    "url": "assets/js/2.4d5c24b7.js",
    "revision": "7f1482f3782f9ae1111f3793f8f6effb"
  },
  {
    "url": "assets/js/20.f97adc9a.js",
    "revision": "0a929113e8cc2eed3aa58a5be8ff79eb"
  },
  {
    "url": "assets/js/21.1e29291a.js",
    "revision": "e58fc3eed54aebca5331df36c1ad5870"
  },
  {
    "url": "assets/js/22.6f90b05e.js",
    "revision": "52cb17f1ff64b0764df658e7d315cfa4"
  },
  {
    "url": "assets/js/23.3c46fa9b.js",
    "revision": "c0aff523d5907c5e2f17172c6bb4a6ea"
  },
  {
    "url": "assets/js/24.82e3f245.js",
    "revision": "65cd01d63b2b740c6e202d821750028c"
  },
  {
    "url": "assets/js/25.fbcba7b5.js",
    "revision": "1951c3a17c024a72a145731e4a784b6d"
  },
  {
    "url": "assets/js/26.a6414035.js",
    "revision": "861f8324ca712659df884bc16b2660ad"
  },
  {
    "url": "assets/js/27.bdba1943.js",
    "revision": "1ef7b26c634f6882477b4e1e087b5acb"
  },
  {
    "url": "assets/js/28.6d664e13.js",
    "revision": "9f3e994cc3c19f82d29ad6da2b4d79b9"
  },
  {
    "url": "assets/js/29.e071aaf6.js",
    "revision": "af37d1001b4d2fa1932652416c4dc319"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.84ca0c43.js",
    "revision": "e2ea71ed8c019ca9ad1ad45103023507"
  },
  {
    "url": "assets/js/31.1d640cc1.js",
    "revision": "67d839e01a1ecb469cb9eba783f93783"
  },
  {
    "url": "assets/js/32.d6d4ff0c.js",
    "revision": "bb0e5aaaf70e4343141eb1260826266d"
  },
  {
    "url": "assets/js/33.bdba6829.js",
    "revision": "894c8e291fcdb64046b1aa2d7274951a"
  },
  {
    "url": "assets/js/34.8b765513.js",
    "revision": "e9e8244e91987690a8b0cddcac6ff3a1"
  },
  {
    "url": "assets/js/35.c920dbe4.js",
    "revision": "9c42751c9b28b9fc973b8a10c0a60875"
  },
  {
    "url": "assets/js/36.3c24639a.js",
    "revision": "e1b558138b73003ca59f9e396607fd01"
  },
  {
    "url": "assets/js/37.7dc0d1de.js",
    "revision": "efdbac55ac016313e01c62ba7e6d4cbc"
  },
  {
    "url": "assets/js/38.ad25b3c9.js",
    "revision": "93f2faa87339022bea94ee9b2de73435"
  },
  {
    "url": "assets/js/39.4e004b72.js",
    "revision": "0f592c776733c8d47f2dc505a626a30d"
  },
  {
    "url": "assets/js/4.57e0addb.js",
    "revision": "22f8e6ebbd35c533777c435222e667d7"
  },
  {
    "url": "assets/js/40.a87a73eb.js",
    "revision": "47b7688483fe0bc4c576bb8b0ec95c24"
  },
  {
    "url": "assets/js/41.b7860671.js",
    "revision": "b7b95a29e0fef8205fe8d37879d4703d"
  },
  {
    "url": "assets/js/42.a7b8e939.js",
    "revision": "bca57b0101c90ca4f92c1370da2ea78b"
  },
  {
    "url": "assets/js/5.6f496986.js",
    "revision": "c0cfcd7fb7c237e41a93601a2e0349f6"
  },
  {
    "url": "assets/js/6.0d019ec6.js",
    "revision": "70543c9540f0d7c0d7d293241a468038"
  },
  {
    "url": "assets/js/7.bb50e923.js",
    "revision": "bdb984a3d54046ade14a08bb765e3bca"
  },
  {
    "url": "assets/js/8.b7391921.js",
    "revision": "d324f0c351832c74ccad90a1142d6e84"
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
    "revision": "a4a91d90403c0092cc1236656d14fe57"
  },
  {
    "url": "category/index.html",
    "revision": "9d819b1011417ff7fe4d93120a0f1a36"
  },
  {
    "url": "egg/index.html",
    "revision": "ab8c6060796823838ea643277d1938c8"
  },
  {
    "url": "electron/index.html",
    "revision": "2767d4663763b7f3870d64541d849fa5"
  },
  {
    "url": "extra/index.html",
    "revision": "71ea5e47839405ae14f96a0f7ed3e248"
  },
  {
    "url": "flutter/index.html",
    "revision": "7c7638bfbee71fb6664ae9b53be5481a"
  },
  {
    "url": "flutter/test.html",
    "revision": "049d7ebbe10bbb24f12f5522e4c3141d"
  },
  {
    "url": "guide/changelog.html",
    "revision": "6b247bd094bebb2d47dccbaa12616051"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "1e48974a62e605a83a163d2a3b4eb079"
  },
  {
    "url": "guide/faq.html",
    "revision": "38d41c98836896684be0b0247d3cc8ee"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1f72b4d1db1416b5d1d1482552414592"
  },
  {
    "url": "guide/index.html",
    "revision": "e500359b79b5b1cf775331d568c45306"
  },
  {
    "url": "guide/palette.html",
    "revision": "9157cdd6ca3b3cd723f2d85252756f8b"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "a6b91ca2339ea56af111120b8c67c0c7"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "9b816f78d2509deec7941ea1880e07ae"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "161679af68546a2f4c649c9ec3f33a57"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "4999f3b598d742d0e0cc7fb3b15a4ce9"
  },
  {
    "url": "index.html",
    "revision": "477ff9c1c6c9ca6f11f5c50212fe08c3"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "a2d256a99ec9a4d02a30f906b5f37e8c"
  },
  {
    "url": "notes/git.html",
    "revision": "aaadb8d57b4d45245569df9ee0257d16"
  },
  {
    "url": "notes/index.html",
    "revision": "9a7b02f4791152ce9b48e7cc8af08253"
  },
  {
    "url": "notes/nginx.html",
    "revision": "24e2a4f4b4dfd6bc44762b60e50163ca"
  },
  {
    "url": "notes/node.html",
    "revision": "d9168e2b368d3080818b77a1cbe241d1"
  },
  {
    "url": "notes/npm.html",
    "revision": "833cd2d163fba0d83f2e7073bb4b4d3c"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "fa8e5c643a66e5566625c5f3270546fa"
  },
  {
    "url": "notes/vscode.html",
    "revision": "8a1d812ec0f2a7ae59a7537ad60ed823"
  },
  {
    "url": "plugin/index.html",
    "revision": "2f2d49292105f948661ebbbe7d0e6a7a"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "76afae2055841eed03e98760c03b62d4"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "e1cdbfe88c28be75cf931b9af8e2377a"
  },
  {
    "url": "tag/index.html",
    "revision": "b86b44f50f6aa9d45caf351c2566fc83"
  },
  {
    "url": "uniapp/index.html",
    "revision": "0122cab3a09939acb9732ec68f3bdd34"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "f3e40f5c9439638658f8356a5ac5da2d"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "f573facc551df72f8a7681243b2cfe9e"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "46ab7721677c888f9fac915547675474"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "80b9bef1433b8467eceed034eed20e66"
  },
  {
    "url": "Vera/index.html",
    "revision": "fb5c4d02c78eea5bf1379e4ce22ca892"
  },
  {
    "url": "website/index.html",
    "revision": "8783df3a97c061f0f1bd79e2b970f670"
  },
  {
    "url": "website/package.html",
    "revision": "37d2f1474c372235d027947cdeb48faa"
  },
  {
    "url": "website/rearend.html",
    "revision": "984f047a0e65578f0c0bfaadc3ce58b3"
  },
  {
    "url": "website/tools.html",
    "revision": "8a92747c5a7572fd0807362f12c315db"
  },
  {
    "url": "website/webclient.html",
    "revision": "cf7f7a108b2172912753670732dd57f9"
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
