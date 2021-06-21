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
    "revision": "d3910b34010fb61269a034ba3d6bfd16"
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
    "url": "assets/js/13.89715a6b.js",
    "revision": "216edc86cc1c3604132700e102b6a880"
  },
  {
    "url": "assets/js/14.0fe6a195.js",
    "revision": "4a2cd40a2621fe8eb6761e1ebe61041b"
  },
  {
    "url": "assets/js/15.eee67e7a.js",
    "revision": "22471caf47f4e739d44e3c315d25310c"
  },
  {
    "url": "assets/js/16.1806c483.js",
    "revision": "97366708d0f1625471c88fca5cf2e573"
  },
  {
    "url": "assets/js/17.d7c4ea47.js",
    "revision": "67a4a8c36fa6a43d283f6190a4ee293e"
  },
  {
    "url": "assets/js/18.c2f1d2ee.js",
    "revision": "7b851c31a4c07983ae987d0265d9f6f7"
  },
  {
    "url": "assets/js/19.45efa037.js",
    "revision": "fc3b378c97b310ae0b5cbc59420e6c46"
  },
  {
    "url": "assets/js/2.4f3480b1.js",
    "revision": "eb323f1b8dc7cae20a7681bb9f453465"
  },
  {
    "url": "assets/js/20.b67b1321.js",
    "revision": "3a18e6336fc4ddf30f0becae7d3771ed"
  },
  {
    "url": "assets/js/21.b3ee3eb5.js",
    "revision": "52182752b46e904f6134061a056854b3"
  },
  {
    "url": "assets/js/22.039fb583.js",
    "revision": "7e526cd96930de3b6d6cedd4d1d87664"
  },
  {
    "url": "assets/js/23.a63b91b3.js",
    "revision": "2f5900819c066648fc0a50e69b37b254"
  },
  {
    "url": "assets/js/24.1036e2f4.js",
    "revision": "63b50e77d5442ca4c5f7a8cfc891be2e"
  },
  {
    "url": "assets/js/25.851fc78e.js",
    "revision": "3d7d2b7c0780895270290cd943970d5a"
  },
  {
    "url": "assets/js/26.52a89e8b.js",
    "revision": "e420e9ff7beb597ea17f0906396eb361"
  },
  {
    "url": "assets/js/27.d296b3e1.js",
    "revision": "ce6e6624dcc77cbbc82a410e83379897"
  },
  {
    "url": "assets/js/28.6f5600c4.js",
    "revision": "c28a384b890e5131d9e411ba0e125619"
  },
  {
    "url": "assets/js/29.e4aba5cc.js",
    "revision": "43f204cd30799d5e6542dae525e00d24"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.4bde741c.js",
    "revision": "3e14948355557fbcdea579a1c747c085"
  },
  {
    "url": "assets/js/31.72224c31.js",
    "revision": "9118ab7054f148aac3e56d9fa356e7b8"
  },
  {
    "url": "assets/js/32.c1cba075.js",
    "revision": "630ca793304da8fb2d494c806391a174"
  },
  {
    "url": "assets/js/33.2cce1699.js",
    "revision": "b015bad31b8cd7e510a52629dc74449e"
  },
  {
    "url": "assets/js/34.ed0d42a8.js",
    "revision": "8ef9471fded4656edcbd6877bdf7f744"
  },
  {
    "url": "assets/js/35.08c8c5ad.js",
    "revision": "2ec2ccbc13c5a06f18ce1ccb6a74e5bb"
  },
  {
    "url": "assets/js/36.d7f8e603.js",
    "revision": "ecf91f4a22612fc5cd84164da7f2f013"
  },
  {
    "url": "assets/js/37.99e72579.js",
    "revision": "e750d1b0803f9d9de225a8fd28229d3f"
  },
  {
    "url": "assets/js/38.a125eb40.js",
    "revision": "e6c84f04c7c566684cf1cbfe4a2ea8db"
  },
  {
    "url": "assets/js/39.e90804d8.js",
    "revision": "e51e521676a30aaaa68bf3b854502203"
  },
  {
    "url": "assets/js/4.8bd1cb74.js",
    "revision": "e93743f749de23c6cf69e44f68ac4ae6"
  },
  {
    "url": "assets/js/40.a1091ca4.js",
    "revision": "79f1765f020552c20741fff0984f70fe"
  },
  {
    "url": "assets/js/41.e8cec050.js",
    "revision": "6a9540581f3bc76f2ea3ccb42efe2db0"
  },
  {
    "url": "assets/js/42.63f34e09.js",
    "revision": "c9f901ff08ace77025d4bdc9435fb455"
  },
  {
    "url": "assets/js/43.abbad0d0.js",
    "revision": "ce2b3f2669c827f38be6e7f57de8affa"
  },
  {
    "url": "assets/js/44.201ca9f0.js",
    "revision": "e8a1a95b48f67114112f7ca4e89417ab"
  },
  {
    "url": "assets/js/45.ac460dd3.js",
    "revision": "57aff083553b22e3a01494ca78003d22"
  },
  {
    "url": "assets/js/46.42a26bbf.js",
    "revision": "d4501bcea26fccfedc1db0a7fa4aeaff"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/6.79e579ec.js",
    "revision": "ac5c7db22d3eda2c3adb680ab94effce"
  },
  {
    "url": "assets/js/7.5ca1d5fc.js",
    "revision": "48d3fb6ddfb14b0bffd94533d1edabaf"
  },
  {
    "url": "assets/js/8.822cea0f.js",
    "revision": "e7c4e5c0bba7531f8c2ea79b5b4ab01f"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.5ec2dad4.js",
    "revision": "f2de238351a9b39c71feb96f5a906de6"
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
    "revision": "319b7a20e9feb8c31fd3fb5c0090ca3f"
  },
  {
    "url": "category/index.html",
    "revision": "2edb57bc3e088f8d34ad67003554a960"
  },
  {
    "url": "egg/index.html",
    "revision": "59588c3141a4aab07db1d0cac9fdb74f"
  },
  {
    "url": "electron/index.html",
    "revision": "ed8af1567bd3b2acacbe9c0e55339b54"
  },
  {
    "url": "extra/index.html",
    "revision": "d6f5c3740b2d9a045223b7335159a9fb"
  },
  {
    "url": "flutter/index.html",
    "revision": "dc6e4a1add52ac8cbbd7c588988caf25"
  },
  {
    "url": "flutter/test.html",
    "revision": "5797745e00950b8417ab89792b42a247"
  },
  {
    "url": "guide/changelog.html",
    "revision": "22f45d6dd257c04e8f7c6040e5ffce43"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "794e1cedce43dff9fb8c34772209544f"
  },
  {
    "url": "guide/faq.html",
    "revision": "ff1262c058181e34239128fdab2b5ece"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e21ed0b978bf6d3b0b65e1f774496f99"
  },
  {
    "url": "guide/index.html",
    "revision": "c552c21a5af538cea1b8c9daf1d75fdc"
  },
  {
    "url": "guide/palette.html",
    "revision": "a8c17050e64df9be462579cf6d3c62af"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "bcb91960721ab7d1a2041f4e379df53d"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "e659232988e5ba99c2df1d445f20df90"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "eeb142243a3079b34f1b5e1f85b9ec8a"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "e1493532e001861a2a1163d24b9b10ee"
  },
  {
    "url": "index.html",
    "revision": "291f0a14ee27fc0c002fb12ef580c8e5"
  },
  {
    "url": "js/index.html",
    "revision": "49697a542e41db4227b4eb27a1b97599"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "d8bc209e82a36b80e47b869018f97715"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "c25a186eb2c85b396a5a609d4604a1e2"
  },
  {
    "url": "notes/brew.html",
    "revision": "b45dcb7d2ea768d4db1b79a692f77b9d"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "4a6509154a0852ac9cd3c2510fbe4c61"
  },
  {
    "url": "notes/git.html",
    "revision": "82ce8a7680a1f25251aad4e5d5941650"
  },
  {
    "url": "notes/index.html",
    "revision": "f9238d62654dcb0c000fda827e48cb33"
  },
  {
    "url": "notes/nginx.html",
    "revision": "0de5a9525a53caa26e4973de034f1e8e"
  },
  {
    "url": "notes/node.html",
    "revision": "065b6dc1698f5f7bf76ac014586a4ae1"
  },
  {
    "url": "notes/npm.html",
    "revision": "b4cbebe5da627e6b8c25995ccb7b8331"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "a8064252703af40b4384041f567208d1"
  },
  {
    "url": "notes/vscode.html",
    "revision": "1b595a2f8a9a5f6f9e5d9ccf596ba4aa"
  },
  {
    "url": "plugin/index.html",
    "revision": "5d8e6f8987b6b3931b97992fabe764f3"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "2582fabe3a01bb5cd5a342f2a627964e"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "95a3538ca45fd7302dc342471c20b179"
  },
  {
    "url": "tag/index.html",
    "revision": "89b5a86e27e9da1458e21a2ba6b8273f"
  },
  {
    "url": "uniapp/index.html",
    "revision": "be7dae72a8c899cb044b936dd25fd5b8"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "876291154c34595ec69ed06242d09d0a"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "115d3390fc0bb762df653470b2fdc054"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "221bc695ae7f88976d275bcd5f650a4e"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "a632c1787afbf2109762274db5bc2b56"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "efc5561f6fe3ec5e9272ac603580cf5a"
  },
  {
    "url": "Vera/index.html",
    "revision": "bb4869193cd5c5949020c1f8e43f3e92"
  },
  {
    "url": "website/index.html",
    "revision": "e36b254d5775d1691442d937897f8b56"
  },
  {
    "url": "website/package.html",
    "revision": "9a19a6209bd213be0a2bcdb37305f3ea"
  },
  {
    "url": "website/rearend.html",
    "revision": "2a03687118ab664590feae688c0e24bf"
  },
  {
    "url": "website/tools.html",
    "revision": "900f4ac5bda9bb25f05685a385dcf722"
  },
  {
    "url": "website/webclient.html",
    "revision": "8499da2f5d17d75a74288e2e20231da7"
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
