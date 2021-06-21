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
    "revision": "36360162780ba80ac917c9fbb4a438b2"
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
    "url": "assets/js/13.1b8b41db.js",
    "revision": "1b0bad4822512f0ac73a8614e2dfe433"
  },
  {
    "url": "assets/js/14.c7c99f4d.js",
    "revision": "7f1796dbab5344718cdbd1fd2adfd3fa"
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
    "url": "assets/js/19.aeb98cc1.js",
    "revision": "b7350fb5685c8fe820862e9f8cc25c27"
  },
  {
    "url": "assets/js/2.4f3480b1.js",
    "revision": "eb323f1b8dc7cae20a7681bb9f453465"
  },
  {
    "url": "assets/js/20.d87e57eb.js",
    "revision": "669558434d11ef16d2abb9e21b3ee30f"
  },
  {
    "url": "assets/js/21.b3ee3eb5.js",
    "revision": "52182752b46e904f6134061a056854b3"
  },
  {
    "url": "assets/js/22.2426ac20.js",
    "revision": "716fa2f058c179b77b8279061f46a4cb"
  },
  {
    "url": "assets/js/23.fbdcfb41.js",
    "revision": "4e6f4dcdc309c789ae32db67765ed404"
  },
  {
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.96c43e83.js",
    "revision": "03e00c0321decd6cc6521172b0bbc45c"
  },
  {
    "url": "assets/js/26.2954807c.js",
    "revision": "f2f687edc00f8bcd72ca47433fb2b3dd"
  },
  {
    "url": "assets/js/27.d296b3e1.js",
    "revision": "ce6e6624dcc77cbbc82a410e83379897"
  },
  {
    "url": "assets/js/28.1dc0192b.js",
    "revision": "f7068a633430d00943fbdd00350ab750"
  },
  {
    "url": "assets/js/29.e41fdc33.js",
    "revision": "66521654905e43f1db06d5eed088eb45"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.943770f9.js",
    "revision": "eaadb812c8b7681218c5251f48e6847a"
  },
  {
    "url": "assets/js/31.a39b7f78.js",
    "revision": "99265c92aeabf8db15fb5539fa897c16"
  },
  {
    "url": "assets/js/32.d82867dc.js",
    "revision": "7dafb74f8d4be01b5ade4237fd8dd109"
  },
  {
    "url": "assets/js/33.7aac49c1.js",
    "revision": "6d54122f48a260446ba5d4664b5f252e"
  },
  {
    "url": "assets/js/34.80e7132c.js",
    "revision": "0a96f781e0c40dbcb616e8bbec75a63d"
  },
  {
    "url": "assets/js/35.ff635d64.js",
    "revision": "7a6abbfb00b8a888ff7a7c6a4ed7e073"
  },
  {
    "url": "assets/js/36.e37f3257.js",
    "revision": "f8b93a6720b07154565deb3712b3bd12"
  },
  {
    "url": "assets/js/37.ecda4083.js",
    "revision": "fb10e625b6158e3f72196618355b1396"
  },
  {
    "url": "assets/js/38.acec057b.js",
    "revision": "31f48436a7e5152882109ff9c018f4e8"
  },
  {
    "url": "assets/js/39.e90804d8.js",
    "revision": "e51e521676a30aaaa68bf3b854502203"
  },
  {
    "url": "assets/js/4.9c9b1c5f.js",
    "revision": "a6ae390077f6a83e76e6476b2f32db50"
  },
  {
    "url": "assets/js/40.e109f186.js",
    "revision": "402a3a244d59cccae642599b5063fa97"
  },
  {
    "url": "assets/js/41.8040f52b.js",
    "revision": "c021bea7b3b5d4def45dc078384d5e50"
  },
  {
    "url": "assets/js/42.871edd8c.js",
    "revision": "0ef33a336209131f5db1010f95de9780"
  },
  {
    "url": "assets/js/43.1738996a.js",
    "revision": "65fd14e2add08448db84cbca17b58d19"
  },
  {
    "url": "assets/js/44.82e7491d.js",
    "revision": "d3953ca473b76ee337b82964908a655a"
  },
  {
    "url": "assets/js/45.dcf3b70b.js",
    "revision": "b3127c56562dfb2b5e0c679e29931707"
  },
  {
    "url": "assets/js/46.17141c10.js",
    "revision": "8c43533fd05eec258026e578db68c6a9"
  },
  {
    "url": "assets/js/47.0561ebe7.js",
    "revision": "d0e844de099b2c96541c325e64e7aec7"
  },
  {
    "url": "assets/js/48.bfb49264.js",
    "revision": "e7f884eeafd33ab070ebc2a2e220bb23"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/6.1d269c43.js",
    "revision": "a212bca5a2958819270ecca884cd14e5"
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
    "url": "assets/js/app.6bfe83cc.js",
    "revision": "1a82536d98eee19b3f3fc8efefb3a118"
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
    "revision": "fe9c6f39f01d833692666e8b02e49627"
  },
  {
    "url": "category/index.html",
    "revision": "2239154e928f94a2437b6062344a7ab5"
  },
  {
    "url": "egg/index.html",
    "revision": "bc4d6f1dffad4d2460546953009fcdbb"
  },
  {
    "url": "electron/index.html",
    "revision": "b9c3de81604b5f3fcf38e9b8065098ac"
  },
  {
    "url": "extra/index.html",
    "revision": "21e572853b30d77ca44805c0547c69dc"
  },
  {
    "url": "flutter/index.html",
    "revision": "c47795dd0b122fb52eb2ee2db2710346"
  },
  {
    "url": "flutter/test.html",
    "revision": "92d2e0920dbb5f17235e3a2af5cbccff"
  },
  {
    "url": "guide/changelog.html",
    "revision": "865a9a6f04f2e10d08e99fcb3254e5f9"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "fdfe6c5087b12bd5dd25b897b6cf1757"
  },
  {
    "url": "guide/faq.html",
    "revision": "28f30fb0d5d55b323e41d94283884136"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "30a12ab7556a6e2b4d6de1bb570a3fd1"
  },
  {
    "url": "guide/index.html",
    "revision": "44d1a067b9cf670c6eccd0eff512e25c"
  },
  {
    "url": "guide/palette.html",
    "revision": "136f46305d669716ea0eb57541b86c5e"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "269e7cfa8ca7c3e422d5dfe1edef0cb5"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "a638fb0f494d65d24fdd82fcd4236a39"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "98325673b0facf5a3bcc6254d2b20bb0"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "88186f98f31d68171adba6b14ef440fe"
  },
  {
    "url": "index.html",
    "revision": "5a2eb3509fbaaff8f909d19d77cdbb9a"
  },
  {
    "url": "js/index.html",
    "revision": "f713f15237dbbe8d3d467e59f860451d"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "e14e2f5d6f3fedc127a3056aeb408415"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "47b187825defec4c7d13ca66836ac314"
  },
  {
    "url": "notes/brew.html",
    "revision": "aeb5e68995d2993e1a956cd11ef0f962"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "fd2bfef5beabe4f814c3bc585e227b1c"
  },
  {
    "url": "notes/git.html",
    "revision": "4f0397668da1da75cffdbac4bff753ec"
  },
  {
    "url": "notes/index.html",
    "revision": "a6fd54e63e1f7fe06830d43e52056b67"
  },
  {
    "url": "notes/nginx.html",
    "revision": "c156c8e920eeecb8ea3ec146498dbd20"
  },
  {
    "url": "notes/node.html",
    "revision": "7a235036dd29bff4d3f2ca3f213a1dca"
  },
  {
    "url": "notes/npm.html",
    "revision": "b38150e437bfa8bc2754a75b09ac1641"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "fb18848a6de9bd2b4eb45ff7a13e7b35"
  },
  {
    "url": "notes/vscode.html",
    "revision": "1df07eea65ad56346d466196037caf77"
  },
  {
    "url": "plugin/index.html",
    "revision": "d28129f2eb5f9296ca29060585cae7c8"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "8862e5127cd903273df1dec64eec7a00"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "6f2ca010f85ee7bba124af41ae3de4ec"
  },
  {
    "url": "tag/index.html",
    "revision": "968d37965fc8c41cadb35f5336e89b00"
  },
  {
    "url": "uniapp/index.html",
    "revision": "9c910848c2297be25f897aa44f052521"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "fe4a7ec00cb44b50521586c92b5a5812"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "1b1d3e5b2b7742262c294e9b95d96dce"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "fe3d3b4ae767c1c439df593e545479a1"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "e8214078e2cafea51500705d8cb6a669"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "860e80bba5b518cca6be68e91a1f1613"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "af7818c8257e363d863d7e1eb76dad09"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "1b969a14783ce89ffa1c6ccd9e2a3b96"
  },
  {
    "url": "Vera/index.html",
    "revision": "ff92dc9814d2cd71161355ae1fd90d48"
  },
  {
    "url": "website/index.html",
    "revision": "3b2d26cdc6fffdebfb5d4fecccc131e1"
  },
  {
    "url": "website/package.html",
    "revision": "3bdc493af50c55ab13c2ae2622f37fb3"
  },
  {
    "url": "website/rearend.html",
    "revision": "0a3796c79a249e0654e74bd9c974fea4"
  },
  {
    "url": "website/tools.html",
    "revision": "9048b456ec13b642f6614c96acd8fade"
  },
  {
    "url": "website/webclient.html",
    "revision": "dbac866c72b3280893eb5b2dbaa04922"
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
