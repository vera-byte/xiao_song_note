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
    "revision": "1d7bfb54390f6aae51aaabcd91ee7d7e"
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
    "url": "assets/js/14.415aeafa.js",
    "revision": "0b7a40384d88dac0ddc19f10ee6869b2"
  },
  {
    "url": "assets/js/15.643a905b.js",
    "revision": "e815ff5988172c3ec4d2c16168714072"
  },
  {
    "url": "assets/js/16.9d1e6ecd.js",
    "revision": "47ea104990ae2814f47090c9b9c7d4f6"
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
    "url": "assets/js/20.260d9196.js",
    "revision": "4b280fbec7cbc991a42125caae105483"
  },
  {
    "url": "assets/js/21.b97fcc39.js",
    "revision": "2f6146799d5f52d51dac8e15ee14219c"
  },
  {
    "url": "assets/js/22.2426ac20.js",
    "revision": "716fa2f058c179b77b8279061f46a4cb"
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
    "url": "assets/js/25.851fc78e.js",
    "revision": "3d7d2b7c0780895270290cd943970d5a"
  },
  {
    "url": "assets/js/26.52a89e8b.js",
    "revision": "e420e9ff7beb597ea17f0906396eb361"
  },
  {
    "url": "assets/js/27.184eb71b.js",
    "revision": "888a70111faf0158d487011fb2758e24"
  },
  {
    "url": "assets/js/28.02b933c2.js",
    "revision": "4eb67473b7c9230c3886ec938cec70d5"
  },
  {
    "url": "assets/js/29.2231312a.js",
    "revision": "03ad793ee22697c85de82d40327f6409"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.1573cc99.js",
    "revision": "2aa2af6004e6073537eb60dd854c60c5"
  },
  {
    "url": "assets/js/31.c83abf8b.js",
    "revision": "067a8cb1c9cce20467b7b5bc3138cdba"
  },
  {
    "url": "assets/js/32.f4488e96.js",
    "revision": "9252852507c0b0bf57e8dd703b346296"
  },
  {
    "url": "assets/js/33.f1f2b888.js",
    "revision": "2a97d3aeeecdda384bd3058157f27658"
  },
  {
    "url": "assets/js/34.fb4d12fe.js",
    "revision": "c7d5b05d02e92197fcb52f7862473e61"
  },
  {
    "url": "assets/js/35.26a6e2e3.js",
    "revision": "fc145c4d05c9ce56a5ac4702b4513dae"
  },
  {
    "url": "assets/js/36.da64f9d2.js",
    "revision": "208e3606f9eb65b45ec716d8263d1c2a"
  },
  {
    "url": "assets/js/37.57d1a27f.js",
    "revision": "aef265e054eba6ffcff31d12f1b32ce4"
  },
  {
    "url": "assets/js/38.8a5b24f3.js",
    "revision": "f8741486c9af816867f782491455e8b3"
  },
  {
    "url": "assets/js/39.557f70cc.js",
    "revision": "b1a460367c205710b507a8d96995ad3b"
  },
  {
    "url": "assets/js/4.fa6ed8fd.js",
    "revision": "ed64aadac9c4bff81317b5f923b2083a"
  },
  {
    "url": "assets/js/40.7e8fbcd7.js",
    "revision": "0e1cf626626106284b80a6699c56b2fe"
  },
  {
    "url": "assets/js/41.4dd791d6.js",
    "revision": "478bfb472f7bceef88987ccc2d8c0236"
  },
  {
    "url": "assets/js/42.6e274835.js",
    "revision": "006dd8a9405f8091a74d76d9be7e6438"
  },
  {
    "url": "assets/js/43.5dfea87b.js",
    "revision": "8fda07c5b06dccaeaae02aaf6dfb10da"
  },
  {
    "url": "assets/js/44.353a3585.js",
    "revision": "e92d342142f4dad54a64e69e898666fb"
  },
  {
    "url": "assets/js/45.9d6d5b63.js",
    "revision": "c7cef1ab7134f9d62ea178d2c5e33a16"
  },
  {
    "url": "assets/js/46.1b6add3c.js",
    "revision": "a980448c9b6c9d4a2886a4b478c3ef1d"
  },
  {
    "url": "assets/js/47.efce2342.js",
    "revision": "f290ad0b7af2c7f091dffcb111a7ebfb"
  },
  {
    "url": "assets/js/48.3e1f4b33.js",
    "revision": "26f4945def558836ff5a8a695298a3bd"
  },
  {
    "url": "assets/js/49.95650c83.js",
    "revision": "c958f3298615b92829a8d547b0081828"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/6.c06b8623.js",
    "revision": "1b54054ea76493aaddf93989c40aa147"
  },
  {
    "url": "assets/js/7.7244ce27.js",
    "revision": "fc43001207d46fe098eb2e6c8941dfc1"
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
    "url": "assets/js/app.36dd5ed9.js",
    "revision": "11fac9c31ba0e74a93aff80aec620de3"
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
    "revision": "d8be94e48eef59f82e491a70a5f61903"
  },
  {
    "url": "category/index.html",
    "revision": "1d8346d29aa88dbba31a473433aad21d"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "20dc20185e82113cd4a4bbf00512c699"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "e608fdd36070bec6719e0d3646cb3be8"
  },
  {
    "url": "electron/index.html",
    "revision": "4f340250e2bea9ad7e76d75fb07c716f"
  },
  {
    "url": "extra/index.html",
    "revision": "6bbc64c0b13bfd36388728ebb5bfada9"
  },
  {
    "url": "flutter/index.html",
    "revision": "eaf44672df0e90239be94c9612db99ba"
  },
  {
    "url": "flutter/test.html",
    "revision": "6efc24ff1e43cba450001489f35880f5"
  },
  {
    "url": "guide/changelog.html",
    "revision": "c7171a21d9bd55d37faf4ed932a54e4c"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "52fcc955f0929d619f8710bfd093722f"
  },
  {
    "url": "guide/faq.html",
    "revision": "0fee75f1f586d46f2a30d8846fa346a9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "246983fd906fba5982fe8396ff2d1747"
  },
  {
    "url": "guide/index.html",
    "revision": "2973a1e44be6457a7d77749f6921863b"
  },
  {
    "url": "guide/palette.html",
    "revision": "bbcaf19ac5e50545a3b760a0757d8815"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "cc4bf672dd73c58f810452e3395bf0d9"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "dbb7747a55c30a0ae11f380589724190"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "c47b1221f600d0d82b0232c80842710c"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "7ba84b2a1b69fd871464195d583933a9"
  },
  {
    "url": "index.html",
    "revision": "cd90cd9ba4a0aeade4d570722866bad6"
  },
  {
    "url": "js/index.html",
    "revision": "1f4bce0b0c6d338dcaf08df5708fc9c6"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "80e8e42e9082251d5d231b4c5d66278f"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "731c7e864311f4f3579009647e384b04"
  },
  {
    "url": "midway/index.html",
    "revision": "9937326612338dc836d1a65c83b3e46b"
  },
  {
    "url": "notes/brew.html",
    "revision": "b73092811a44092225391bdeea5ab02a"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "b34d025412a995c1f18733ac7ca66bf4"
  },
  {
    "url": "notes/git.html",
    "revision": "a2377bfa76684bd31daf5417683f52f9"
  },
  {
    "url": "notes/index.html",
    "revision": "5d5bf2c6f5200703ed702382a73a91fa"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a512f7dab64c54254ae921e715cf9fd1"
  },
  {
    "url": "notes/node.html",
    "revision": "963e65f0c7be9a617896ad2ac6d6f5ae"
  },
  {
    "url": "notes/npm.html",
    "revision": "6d8b794dbd2db93913605815d3ebd8db"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "fe3e92a3265ceb8e30acf156f0b05b32"
  },
  {
    "url": "notes/vscode.html",
    "revision": "a6880f65ed9967c91f4a642352e536d3"
  },
  {
    "url": "plugin/index.html",
    "revision": "d017e82af434850bb4fd625b3191fcd1"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "98b9e1a95105d10c18704d3410d120c9"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "a14173ff038861c2c56824ce19162b68"
  },
  {
    "url": "tag/index.html",
    "revision": "5c66902d1ed67a01227f87c72716719e"
  },
  {
    "url": "uniapp/index.html",
    "revision": "f2e4c91b9130b74fd5588ed266932d08"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "86ce981e0eee2f43d323ac8eb4ce4a4e"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "eeea06fbb9b13b4335428f2a47647554"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "0842431892465b5dff79a78205011dbb"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "1e76682ba795671eec62607d0c8c9fb5"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "14df4033481ffbbc2d049ba3d48aa987"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "b30d2a1ff8c8dadb7a8f7c86c32f41ee"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "e69745631721117cde5500cccf38234b"
  },
  {
    "url": "Vera/index.html",
    "revision": "ddb4457b9b660f0ea2ab607ace16309f"
  },
  {
    "url": "website/index.html",
    "revision": "5e811fb79da32df883af69ad56cedb40"
  },
  {
    "url": "website/package.html",
    "revision": "3ef5641dcae07036659fd10c0a436dad"
  },
  {
    "url": "website/rearend.html",
    "revision": "b34e4ba5561cc2a734e8d4412787bfb6"
  },
  {
    "url": "website/tools.html",
    "revision": "97031236c494a4e3493ecff4efcc95fd"
  },
  {
    "url": "website/webclient.html",
    "revision": "a2ed4be4e07d18015572934358d0bcf1"
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
