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
    "revision": "4459d9552ef70e39d249068cf0b580a5"
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
    "url": "assets/js/13.c78cfbec.js",
    "revision": "1d3b3411b190bdb3202d630586833f71"
  },
  {
    "url": "assets/js/14.4b74c2a6.js",
    "revision": "8cd3dfcfe16aec71883fc58b75eed9c0"
  },
  {
    "url": "assets/js/15.37f4e7ce.js",
    "revision": "218b7b604efb344f90effeeb3fa46759"
  },
  {
    "url": "assets/js/16.9d1e6ecd.js",
    "revision": "47ea104990ae2814f47090c9b9c7d4f6"
  },
  {
    "url": "assets/js/17.d9b922dd.js",
    "revision": "4df5cda44861bde83bf50457a6250c8f"
  },
  {
    "url": "assets/js/18.31f0e06e.js",
    "revision": "b86c3c9dca43bbdffb2bbd85beb0d967"
  },
  {
    "url": "assets/js/19.178387ea.js",
    "revision": "0d6fd491009c33941ec62bfa681e18c7"
  },
  {
    "url": "assets/js/2.4f3480b1.js",
    "revision": "eb323f1b8dc7cae20a7681bb9f453465"
  },
  {
    "url": "assets/js/20.f1dd5fa9.js",
    "revision": "3dc94e7263ccadc0d14f9fc52a65289d"
  },
  {
    "url": "assets/js/21.bebb868a.js",
    "revision": "05ac28efebbbe143b042fe74d40e7a2c"
  },
  {
    "url": "assets/js/22.e520653a.js",
    "revision": "fbbd4a50680827cafdbe70b351f947e9"
  },
  {
    "url": "assets/js/23.120cbab7.js",
    "revision": "a1ce59514687f063ce2ac97d191240d9"
  },
  {
    "url": "assets/js/24.610c9bcb.js",
    "revision": "50110cca9d595af9cae685d43b3c44bf"
  },
  {
    "url": "assets/js/25.253640c1.js",
    "revision": "d4741ad762e56acddabb0128fe90a67d"
  },
  {
    "url": "assets/js/26.d7e49d87.js",
    "revision": "f4a88b4190d74c9b639a883990b4b317"
  },
  {
    "url": "assets/js/27.6d6d723b.js",
    "revision": "bf130ae2dbf75c930347fee944b86aad"
  },
  {
    "url": "assets/js/28.6427dc24.js",
    "revision": "057f9b4f23a139ecc0fab9b3ff2c5769"
  },
  {
    "url": "assets/js/29.d418eb6d.js",
    "revision": "579f8b4ee5af9143d1cc24f4be5a2869"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.eb353eba.js",
    "revision": "9c1a45a94dbf6e6a5bd6f6f107621b25"
  },
  {
    "url": "assets/js/31.77d7c4e6.js",
    "revision": "9ab43af75b06bacb764ace6b61ddf6ac"
  },
  {
    "url": "assets/js/32.05a9175c.js",
    "revision": "0d1524cf389045a388d0b8b9a0f9e74c"
  },
  {
    "url": "assets/js/33.ffe36cba.js",
    "revision": "8fdd6533a7e43a028cbf234db4bc0448"
  },
  {
    "url": "assets/js/34.ab000672.js",
    "revision": "4d4ceead0d1149d8503548f9a8f3e915"
  },
  {
    "url": "assets/js/35.d063e2d7.js",
    "revision": "bdbed8d0c514fbcae9112b904dd2436f"
  },
  {
    "url": "assets/js/36.22703ff1.js",
    "revision": "dc56c50a3ef716f4f0c93603db12e8e0"
  },
  {
    "url": "assets/js/37.112a89b4.js",
    "revision": "cb981eb71684ee61bd2c2384b9e38791"
  },
  {
    "url": "assets/js/38.324e2187.js",
    "revision": "be643025accdfcccd3f0c31ebc97acda"
  },
  {
    "url": "assets/js/39.4fb529dc.js",
    "revision": "f1c5e7b5ef608595e43421c5a95fb5a5"
  },
  {
    "url": "assets/js/4.713aa854.js",
    "revision": "e0e53f27bc68b4e7a4344aead11e397c"
  },
  {
    "url": "assets/js/40.10936b04.js",
    "revision": "88b4b97d2171f00b105052387920acf3"
  },
  {
    "url": "assets/js/41.6acd7219.js",
    "revision": "7275fe70d55e9c154f3021f09c6a6b67"
  },
  {
    "url": "assets/js/42.3727066e.js",
    "revision": "1bea60d136ef0aff6eae9988a8fd9dc1"
  },
  {
    "url": "assets/js/43.323bf211.js",
    "revision": "02f5c20f424472137ef6513fcce8b586"
  },
  {
    "url": "assets/js/44.a131d420.js",
    "revision": "4679689b6b8abc50efdbdd51c7f6aac1"
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
    "url": "assets/js/app.bc44367f.js",
    "revision": "92d89b8b07f324957b09ebc2b7a6f934"
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
    "revision": "62febda192db1449118dd1705992d857"
  },
  {
    "url": "category/index.html",
    "revision": "107b57ea8007ad8c0059cd0e3117526b"
  },
  {
    "url": "egg/index.html",
    "revision": "6ace2c9bc55cd7afdd0934d79c87e633"
  },
  {
    "url": "electron/index.html",
    "revision": "43fafc253726f64c976706e9cfaabd94"
  },
  {
    "url": "extra/index.html",
    "revision": "9f0d0de82b3103f288919b5eb7fa52ab"
  },
  {
    "url": "flutter/index.html",
    "revision": "ee0c1284aeb45f7d8dd96607456e0b23"
  },
  {
    "url": "flutter/test.html",
    "revision": "27aab4915a78294c2eaa4fab5b63f966"
  },
  {
    "url": "guide/changelog.html",
    "revision": "07d45cae7b39d21d0b87639f2fde3057"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "69d507fed8c74c868747631a9d5fb174"
  },
  {
    "url": "guide/faq.html",
    "revision": "d87e88301adaed86814476baad69902e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "114d1d97035acca97916c8610aa36b42"
  },
  {
    "url": "guide/index.html",
    "revision": "0fe0cf30604d778fde01e61a6fbc1d09"
  },
  {
    "url": "guide/palette.html",
    "revision": "87fb6e1a197a9d007e3bc16ed594b2f6"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "bf99f09887e84e6186f6eec9a8790aee"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "68c7dc32d1ef50e6ec807896551db88e"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "179e2e3fb3d6d60fd33f67619f0c263a"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "16e66b2fe684a0e9fc9534fa2ba3d429"
  },
  {
    "url": "index.html",
    "revision": "cdbf18fd5cefc84733b74681da82702b"
  },
  {
    "url": "js/index.html",
    "revision": "ae8e6e55fb59abf9bcc8cc18e51c8f05"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "03c7cd2c05cfd9d1bcbb861e146ca7aa"
  },
  {
    "url": "notes/brew.html",
    "revision": "22bf9b5b7570e59e4fd34cbe601b11b0"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "8365e67493647c22651c35af7db50911"
  },
  {
    "url": "notes/git.html",
    "revision": "00dda44edf853c5dd492a67abcb46330"
  },
  {
    "url": "notes/index.html",
    "revision": "780fc684b3649a98d1371bc9b23dd428"
  },
  {
    "url": "notes/nginx.html",
    "revision": "7b978a57b191c7ab39062815ba48e8f3"
  },
  {
    "url": "notes/node.html",
    "revision": "7ac7ae5a8ccfe0f3836233c33377dfae"
  },
  {
    "url": "notes/npm.html",
    "revision": "a2dfb46d5ae02e24f5ed839cc6b1335e"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "cd48a5db308969e6edf14b58c4643a24"
  },
  {
    "url": "notes/vscode.html",
    "revision": "f2ba0afd20c15c2ce1536394bdd3d5b4"
  },
  {
    "url": "plugin/index.html",
    "revision": "5c8f8aa6911c7dd04bdbd37ee4242c3f"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "5336fadab646a0670eb0705caeae9e44"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "a1ea103222260f9817527d2eaccd4ea7"
  },
  {
    "url": "tag/index.html",
    "revision": "4c47a1d4ce655b9f61e9d23ad6c9b218"
  },
  {
    "url": "uniapp/index.html",
    "revision": "c9b0d519f976cf0b5d8cf4972487ea87"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "6b4a4f16a86e7bd0164a71f8ef0ab9ea"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "b88f77f155297802c51a3819fb7ed1a7"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "3d4b5bad3a8ea30672eb71eea933570c"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "2b88143bbb4a205a3049090e00a25fac"
  },
  {
    "url": "Vera/index.html",
    "revision": "681c34ec6c46cc9f604b4a4e7fb293a6"
  },
  {
    "url": "website/index.html",
    "revision": "54f82d630c7f7cd8b4ef8f2429840a88"
  },
  {
    "url": "website/package.html",
    "revision": "68da4166d3d06e260d9ce9f7b71c486c"
  },
  {
    "url": "website/rearend.html",
    "revision": "fe76ab231cef80aa186ccfe678224106"
  },
  {
    "url": "website/tools.html",
    "revision": "e96079aaa678ccd2b0a626af277d8aea"
  },
  {
    "url": "website/webclient.html",
    "revision": "399712d50648e808240380e8e36c91f1"
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
