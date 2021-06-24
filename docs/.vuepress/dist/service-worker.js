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
    "revision": "0b8bfeda4a8906d4917a722f72254f1e"
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
    "url": "assets/js/14.415aeafa.js",
    "revision": "0b7a40384d88dac0ddc19f10ee6869b2"
  },
  {
    "url": "assets/js/15.e946a905.js",
    "revision": "292394b0a6e5e2034cf87ecbff9970ee"
  },
  {
    "url": "assets/js/16.1806c483.js",
    "revision": "97366708d0f1625471c88fca5cf2e573"
  },
  {
    "url": "assets/js/17.d9b922dd.js",
    "revision": "4df5cda44861bde83bf50457a6250c8f"
  },
  {
    "url": "assets/js/18.83f31237.js",
    "revision": "a1546bc0c20a3326c6a45254355d9677"
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
    "url": "assets/js/22.e520653a.js",
    "revision": "fbbd4a50680827cafdbe70b351f947e9"
  },
  {
    "url": "assets/js/23.a63b91b3.js",
    "revision": "2f5900819c066648fc0a50e69b37b254"
  },
  {
    "url": "assets/js/24.a744d836.js",
    "revision": "f19f38e8dd387f29c2419267c6756c3a"
  },
  {
    "url": "assets/js/25.f22e2241.js",
    "revision": "b6a7b475ba5d4a641721f575b2f41e88"
  },
  {
    "url": "assets/js/26.0f94172a.js",
    "revision": "3e2932e6ca0477d9aafa2e19583ecffe"
  },
  {
    "url": "assets/js/27.e08fe835.js",
    "revision": "6c8b1305ad3201826e80b815bfb1ea34"
  },
  {
    "url": "assets/js/28.ec727ef5.js",
    "revision": "cdaeb7bd6b7904a22963e01f7b2f5892"
  },
  {
    "url": "assets/js/29.849783a0.js",
    "revision": "cef42dbcc27a77993397a95342406b7d"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.ea47f2de.js",
    "revision": "0bc5786ec752b7729aeb2ec77cd70d72"
  },
  {
    "url": "assets/js/31.52326ee9.js",
    "revision": "617bb2add205959282abb42ff50c22be"
  },
  {
    "url": "assets/js/32.33673bea.js",
    "revision": "d487e7f62507908a7463eef39ef871bb"
  },
  {
    "url": "assets/js/33.87ddacbb.js",
    "revision": "4e069141abf42825559662b3e86334b7"
  },
  {
    "url": "assets/js/34.1af7c28c.js",
    "revision": "0e49029db92bace72c91ffe13cf37e55"
  },
  {
    "url": "assets/js/35.31fe1265.js",
    "revision": "ea0f6e27c4d428981039dea49af1f8f6"
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
    "url": "assets/js/38.9021c6da.js",
    "revision": "0db0be55f7dd2d088d5395190d9a7b9c"
  },
  {
    "url": "assets/js/39.ba18f8b8.js",
    "revision": "9a9b468801bbf06bdbffec7d6a73b4f6"
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
    "url": "assets/js/41.af51f17e.js",
    "revision": "da1a80ef0a433d72ebdd54035b2d8a4a"
  },
  {
    "url": "assets/js/42.bb12e053.js",
    "revision": "6d15c0da2f30593c665ddcc05e5d2ac7"
  },
  {
    "url": "assets/js/43.b2cd2451.js",
    "revision": "c98efce8c854d6e8fc707f644dbf065b"
  },
  {
    "url": "assets/js/44.3b35bd04.js",
    "revision": "5459bd49e923e2f2d0eeff46b15eb00e"
  },
  {
    "url": "assets/js/45.ef5e0fe5.js",
    "revision": "282e7478dd88934fd17415f996a8c0fa"
  },
  {
    "url": "assets/js/46.ef4d4b0f.js",
    "revision": "925f1c59cf41a0647c6a7f992b96ccf1"
  },
  {
    "url": "assets/js/47.25daa5c1.js",
    "revision": "6fac092352dc9ef6a3f41a44c688d573"
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
    "url": "assets/js/8.c61d4fc5.js",
    "revision": "dc3d4a6056d48ae86a35c2cc7caa48dc"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.9ac9fcfd.js",
    "revision": "ff4dc0eb01f2b2d824456102988b5290"
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
    "revision": "2b16ba8f4f81510b5bba5daa4cbe5d21"
  },
  {
    "url": "category/index.html",
    "revision": "e3fcec840006da8de4f1f55e3e1b4073"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "6a089b828cea4f6ca4eeeaf4f432f06b"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "423ebd362cf6c258ea7ee310436f67c4"
  },
  {
    "url": "electron/index.html",
    "revision": "889a7accd41779f69bf99e0d2a1ad530"
  },
  {
    "url": "extra/index.html",
    "revision": "8ca2c57ab86d3ca6c34839e7c7970b71"
  },
  {
    "url": "flutter/index.html",
    "revision": "83aca3573da95a7f095f8052f9afaa29"
  },
  {
    "url": "flutter/test.html",
    "revision": "f3195162388a894bc668eb6be0aa6f01"
  },
  {
    "url": "guide/changelog.html",
    "revision": "34318f3b96644803abc10b4b606ef390"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "76b3dabed01d724220cabf4d6cdecdba"
  },
  {
    "url": "guide/faq.html",
    "revision": "6b91d79eff94a769229fccc6ac419aa4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6364b39662a1c58445f61ab24f820666"
  },
  {
    "url": "guide/index.html",
    "revision": "ca2cb5cc3e05835b77b564627adf7661"
  },
  {
    "url": "guide/palette.html",
    "revision": "17234159e9bdebde9d7a4867ba40f75a"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "3bcce7d0fc0c112dd2d0e7c0319fbd07"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "d49aaf127a1e4133de29510e00b2ea1d"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "15d873806f4ae3c4df572d03c3c3d667"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "cbb5dbb22a843209271806ca1aa162bd"
  },
  {
    "url": "index.html",
    "revision": "b71fb2d9b9fb3fe3bb97cc90bd62d9f8"
  },
  {
    "url": "js/index.html",
    "revision": "64de71eb8c1fa0ea51e33a2468c012bf"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "e79ab3619ee14eae4fbf7b69a069af95"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "a5f8c8d38afb78ff759ec77befefbba0"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "8cebf87d5d3740b0817ab06eb529e52f"
  },
  {
    "url": "midway/index.html",
    "revision": "6924ed0cec535f23d4d94bdd00da5209"
  },
  {
    "url": "notes/brew.html",
    "revision": "4c79eed4d251bd30b1d2f25ffdf70db0"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "e0d1f9944a9a4b6e9eac0a5224c04749"
  },
  {
    "url": "notes/git.html",
    "revision": "a477a989817850d6ddaac58f953c59cc"
  },
  {
    "url": "notes/index.html",
    "revision": "fa7836dc4593347a7a4ab0890c238e78"
  },
  {
    "url": "notes/nginx.html",
    "revision": "48cae53031025e54029f3f42d306b2e5"
  },
  {
    "url": "notes/node.html",
    "revision": "0b397c471a4bd29dfb3bb887fb2a25b5"
  },
  {
    "url": "notes/npm.html",
    "revision": "b61464d418223447538cf43d4af24703"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "cdc173fbd68b9c40b88bda1c45ca1eee"
  },
  {
    "url": "notes/vscode.html",
    "revision": "364c656f3713d5696fb37f053a008532"
  },
  {
    "url": "plugin/index.html",
    "revision": "401455dbefe8a85052be775181849f88"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "f15fe30cbe9cb06ec7d65f35a81e700f"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "cb31a74c32507a86da6e7a89a51031a2"
  },
  {
    "url": "tag/index.html",
    "revision": "ebf7345ec5a100784a90a2e55345e4cb"
  },
  {
    "url": "uniapp/index.html",
    "revision": "4e77448ed1a6b1587576f8764d349712"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "57ed56d417167cd4b771b27d8da00be5"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "aa121a8e3746b78fde243cfc6a08af80"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "9fd91f85335e8d53be9d31085e6478a1"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "a6db0881c106bc950ab930f4803646f6"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "34973341f6c66d5c55ad29b777ae797f"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "43ca42a2c6b34b399e26f21a0c24d376"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "2015fc814382c552406cc65f64c56567"
  },
  {
    "url": "Vera/index.html",
    "revision": "e7f10b24f3316e628b772a64c5ae456a"
  },
  {
    "url": "website/index.html",
    "revision": "74cb61de4fbe4cb5df6bb23feb510b12"
  },
  {
    "url": "website/package.html",
    "revision": "ea6e250dfd343ec8c4d64a3ca3ff047c"
  },
  {
    "url": "website/rearend.html",
    "revision": "8173bc40f805ce220b025566ceac143c"
  },
  {
    "url": "website/tools.html",
    "revision": "b9ff30d6ff573670764f8bddff118c25"
  },
  {
    "url": "website/webclient.html",
    "revision": "3092b3921bf70e315c4d5822056c4928"
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
