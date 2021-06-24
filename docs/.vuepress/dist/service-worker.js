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
    "revision": "dcfec21149232c0764354b5ada1f8c8c"
  },
  {
    "url": "assets/css/0.styles.bb9de519.css",
    "revision": "da81fd809bde50f14f3ab57b1d50201b"
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
    "url": "assets/js/10.7cdc7cdf.js",
    "revision": "f6c32ae50720681869ae6ea09635ec38"
  },
  {
    "url": "assets/js/11.cf075863.js",
    "revision": "29e7743a27d0d9bfe232188280e4c231"
  },
  {
    "url": "assets/js/12.fb9709e3.js",
    "revision": "bc1bd89c7a02a4a48b0ffe535309a489"
  },
  {
    "url": "assets/js/13.c37a5990.js",
    "revision": "e9526202cb53e49d4b144412c92237a7"
  },
  {
    "url": "assets/js/14.14ead2cc.js",
    "revision": "6f456f3e523735777abe5f4ef7fbe712"
  },
  {
    "url": "assets/js/15.643a905b.js",
    "revision": "e815ff5988172c3ec4d2c16168714072"
  },
  {
    "url": "assets/js/16.a36d26f0.js",
    "revision": "d5e97f199bb4ef24bf02ae662be75851"
  },
  {
    "url": "assets/js/17.09d00f6a.js",
    "revision": "b1c85ef19089d6dd9c7bc0e73a0b425c"
  },
  {
    "url": "assets/js/18.83f31237.js",
    "revision": "a1546bc0c20a3326c6a45254355d9677"
  },
  {
    "url": "assets/js/19.a0c7bc37.js",
    "revision": "aa2ceeb02639ef130c5c5fc887c774bd"
  },
  {
    "url": "assets/js/2.4f3480b1.js",
    "revision": "eb323f1b8dc7cae20a7681bb9f453465"
  },
  {
    "url": "assets/js/20.260d9196.js",
    "revision": "4b280fbec7cbc991a42125caae105483"
  },
  {
    "url": "assets/js/21.768f0488.js",
    "revision": "da62b8e2cf6b13d91de3092d159c3f03"
  },
  {
    "url": "assets/js/22.726d9c4e.js",
    "revision": "cc051e1478050f753c3250fe36ea5d75"
  },
  {
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.1ab85e4e.js",
    "revision": "858abfe2c803188150278b60e1e926cc"
  },
  {
    "url": "assets/js/26.3091af55.js",
    "revision": "d9c4d69f7a63c440c048408d825fc6a2"
  },
  {
    "url": "assets/js/27.20bc908d.js",
    "revision": "535800559ef806926e1ffbcdfab07d96"
  },
  {
    "url": "assets/js/28.ec727ef5.js",
    "revision": "cdaeb7bd6b7904a22963e01f7b2f5892"
  },
  {
    "url": "assets/js/29.aa3d338d.js",
    "revision": "85759c58a2b24e85dabe024ad88bd990"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.606f06b2.js",
    "revision": "7cc306a677e412e8e2fc413fceae9dce"
  },
  {
    "url": "assets/js/31.4cb4efdb.js",
    "revision": "f29402e2f5c35b43231ea97640df7ea8"
  },
  {
    "url": "assets/js/32.50d74255.js",
    "revision": "a9e9903a47048af9757de74c7e2c934b"
  },
  {
    "url": "assets/js/33.87ddacbb.js",
    "revision": "4e069141abf42825559662b3e86334b7"
  },
  {
    "url": "assets/js/34.5a8b9907.js",
    "revision": "def085c2b9fc7b79c89704fa25a9bf29"
  },
  {
    "url": "assets/js/35.1ca1c767.js",
    "revision": "853d492f5964aff103938c0e21166ecf"
  },
  {
    "url": "assets/js/36.24d31a9d.js",
    "revision": "d32e7b8a0f6051bdb0756716eb3056eb"
  },
  {
    "url": "assets/js/37.b855ceb1.js",
    "revision": "4f7f70ea403c750ead251b9b43107958"
  },
  {
    "url": "assets/js/38.2103f248.js",
    "revision": "4a46cd9561288f362d4824361fff7f89"
  },
  {
    "url": "assets/js/39.28709788.js",
    "revision": "1fa81edcb3e39181851d434ace4f3d01"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.678c6efe.js",
    "revision": "d4fb063d2a495f6d836e7e104e89984f"
  },
  {
    "url": "assets/js/41.3e62fe90.js",
    "revision": "ae3c43de5aec2d57da04f0398f623468"
  },
  {
    "url": "assets/js/42.841cdb7c.js",
    "revision": "c855a1cc9727d722fec4a5cf76773f84"
  },
  {
    "url": "assets/js/43.c2b044cd.js",
    "revision": "3e6c08026eb325904c3efb396651e7a7"
  },
  {
    "url": "assets/js/44.ec5e0f9a.js",
    "revision": "2ff3c40a19f34c71eeea4997a899420c"
  },
  {
    "url": "assets/js/45.ac094a41.js",
    "revision": "f8e6ad689f399460de5a7dc4e1d1792f"
  },
  {
    "url": "assets/js/46.efd63572.js",
    "revision": "68fc1c3a83757d5c46eed997174a2d28"
  },
  {
    "url": "assets/js/47.f54f6740.js",
    "revision": "3659230d4712a1f62fd75dadf129ec72"
  },
  {
    "url": "assets/js/48.0c32db97.js",
    "revision": "9d6ccde43513503ff98d443e5d4b556f"
  },
  {
    "url": "assets/js/49.1f789a03.js",
    "revision": "d06baf358ba1d6a8506bf8b28013a1ca"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/50.284fa57f.js",
    "revision": "43206de85c340bdcc5aa6954a6087bfe"
  },
  {
    "url": "assets/js/6.81e9b9cc.js",
    "revision": "c5ccace3676910b6719331448fe82328"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
  },
  {
    "url": "assets/js/8.8ff52719.js",
    "revision": "d81dc01a16a03074fb59841649015cc2"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.cff0f84c.js",
    "revision": "df21adf8e10b118ee7b995edee3892d2"
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
    "revision": "8944f9b8ec9da894493c3412f6f73900"
  },
  {
    "url": "category/index.html",
    "revision": "58df024be35304cbf27e51769f9cd365"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "783ceb8600f51bfdec458de00dbd93fe"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "7c15fac4c4f4bd9f5ee0b4f2e3974f64"
  },
  {
    "url": "electron/index.html",
    "revision": "f159863e37e356245408afa229a858c7"
  },
  {
    "url": "extra/index.html",
    "revision": "c63be7c12923547513c3b94853ff5e43"
  },
  {
    "url": "flutter/index.html",
    "revision": "2c8b18c0e62f35793167e073bcaa03ca"
  },
  {
    "url": "flutter/test.html",
    "revision": "a88bbf44f49b142dadb20c5d4795836f"
  },
  {
    "url": "guide/changelog.html",
    "revision": "71ab634cf11df9e0a5349f1375d991d3"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "af675af4726116ad3cc4857372fc7144"
  },
  {
    "url": "guide/faq.html",
    "revision": "7232c396647895cbf4f490d011d81674"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b939b63ad286ea066c367f90a30c2e1f"
  },
  {
    "url": "guide/index.html",
    "revision": "baf18732f17af6aac4064d41066dcea0"
  },
  {
    "url": "guide/palette.html",
    "revision": "5ce95bca11c6835943bdea7457a2b242"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "82e628e26f160560a728d2bd4e62800b"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "383cc34bc345740c150c2b0bb6522a22"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "efabfe67e8963f370d70111ef0f77e0c"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "fb6cb9a9366cf12d69ed283f388a41b0"
  },
  {
    "url": "index.html",
    "revision": "450eb1a45fd0c0e76128acd139fda7f2"
  },
  {
    "url": "js/index.html",
    "revision": "b29bdbcb324b27f6221736dd6a8eb1ea"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "5fcb2f845970faca79ca498b0f18b92a"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "2d83a762534d5e6b4f3d496c051389c9"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "b069c1ee256208a3c9dc96790732b7fd"
  },
  {
    "url": "midway/index.html",
    "revision": "aff8b13484ee5bc1046c93d5b30e3c13"
  },
  {
    "url": "notes/brew.html",
    "revision": "161539bdf74541c9d43bfb43c93db17f"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "48c2d616b7ea2c64574e580be29e0aad"
  },
  {
    "url": "notes/git.html",
    "revision": "0f10afdcd70e8de0723306f4b0f453cd"
  },
  {
    "url": "notes/index.html",
    "revision": "5cc494b6fcd22453a18437aa7b65121a"
  },
  {
    "url": "notes/nginx.html",
    "revision": "baeb2836f6990ca5d717574779f8548a"
  },
  {
    "url": "notes/node.html",
    "revision": "29668c467c7f57bf09589e46e800561e"
  },
  {
    "url": "notes/npm.html",
    "revision": "d6ce608fa856cae5b122d189b45665f6"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "e65e46cb5b3c3a342138ebc37285a8da"
  },
  {
    "url": "notes/vscode.html",
    "revision": "3e014ede62e43074e3ba8125a8292a92"
  },
  {
    "url": "plugin/index.html",
    "revision": "60888016961d4e3feefac0d9a64ab640"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "41d3a03caabdcc17061d89800876df72"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "f91f4e2d3d4d590ae8b5eeb62756ddbd"
  },
  {
    "url": "tag/index.html",
    "revision": "757aa7ed9296cb2b5885e030c1c5b9a8"
  },
  {
    "url": "uniapp/index.html",
    "revision": "bca37319f1f9cf817b7cc31088bc23bd"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "12c07c82d4e22949898ee64396371473"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "f5dc65861ea84c5e0daacfabddadf3dd"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "6441185b5009984636859ab9c3830701"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "4f3e4676314f1fcaa947352163354362"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "14a90c1506e5206f3cea09e7d2b4b137"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "7e37fdb0d84f281d47f9e051507b85a6"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "6f49fbd426bcad19322b2368311e5604"
  },
  {
    "url": "Vera/index.html",
    "revision": "e9d2bd54e2c2874e6fbcd3ce22c19f50"
  },
  {
    "url": "website/index.html",
    "revision": "9f6b8e060b5b2073012399d22c9b6330"
  },
  {
    "url": "website/package.html",
    "revision": "7c9b4bc51d72ee8435f4712f30211a49"
  },
  {
    "url": "website/rearend.html",
    "revision": "54f643c1340d28b6940c755f4b71e701"
  },
  {
    "url": "website/tools.html",
    "revision": "552dae52381789e5cd165efdea3817ab"
  },
  {
    "url": "website/webclient.html",
    "revision": "20fd0c8a0ea9ec341583a1320f6b5216"
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
