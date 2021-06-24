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
    "revision": "0d3fb9bbe3bbe441cc11129cb4739e71"
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
    "url": "assets/js/15.e946a905.js",
    "revision": "292394b0a6e5e2034cf87ecbff9970ee"
  },
  {
    "url": "assets/js/16.9d1e6ecd.js",
    "revision": "47ea104990ae2814f47090c9b9c7d4f6"
  },
  {
    "url": "assets/js/17.080a3714.js",
    "revision": "39214940d282f84a2cc3c1aa88e3bc1d"
  },
  {
    "url": "assets/js/18.c2f1d2ee.js",
    "revision": "7b851c31a4c07983ae987d0265d9f6f7"
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
    "url": "assets/js/20.b67b1321.js",
    "revision": "3a18e6336fc4ddf30f0becae7d3771ed"
  },
  {
    "url": "assets/js/21.b3ee3eb5.js",
    "revision": "52182752b46e904f6134061a056854b3"
  },
  {
    "url": "assets/js/22.7d229426.js",
    "revision": "a175268b59a2a064dde907cfe80cab4c"
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
    "url": "assets/js/25.b1030395.js",
    "revision": "ac635e5da571b6625df3e06a51a600fa"
  },
  {
    "url": "assets/js/26.2b8d1dfd.js",
    "revision": "8c868d3136d8dfcd3267e1d437dcf026"
  },
  {
    "url": "assets/js/27.b66ae79f.js",
    "revision": "61e75997619379eb4874589a2e369bd4"
  },
  {
    "url": "assets/js/28.8d23097d.js",
    "revision": "969ea5a81dd5d386b1aadedf9dba511d"
  },
  {
    "url": "assets/js/29.2391797a.js",
    "revision": "761951cfe0f0c19f2ec0cb6d8acf045c"
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
    "url": "assets/js/31.7184f202.js",
    "revision": "fdf7b1f2389696ea24d95fd00dd8efe8"
  },
  {
    "url": "assets/js/32.2c71b35e.js",
    "revision": "0bbafa8bea8d0f06129fa4588c934323"
  },
  {
    "url": "assets/js/33.b72f097a.js",
    "revision": "f707eb871e040850f526fef619d9f161"
  },
  {
    "url": "assets/js/34.e16f5610.js",
    "revision": "77fc2722b3dbddbc2b6a43bf295300ae"
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
    "url": "assets/js/37.36890e8a.js",
    "revision": "0c71ede7ba4e3cd40cade9e7ef454e64"
  },
  {
    "url": "assets/js/38.893ae15a.js",
    "revision": "b2dc579511f26fb2011f00ae67794401"
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
    "url": "assets/js/40.3b4531e3.js",
    "revision": "c72de686561c172469d1654581fe7bb2"
  },
  {
    "url": "assets/js/41.3e62fe90.js",
    "revision": "ae3c43de5aec2d57da04f0398f623468"
  },
  {
    "url": "assets/js/42.273e26ec.js",
    "revision": "1aeeeaeb3dfe5fb9d16f0f08fbc3ad48"
  },
  {
    "url": "assets/js/43.a2e0d28f.js",
    "revision": "c6bdcd04c727dea0cb37c18f53a0624b"
  },
  {
    "url": "assets/js/44.ec5e0f9a.js",
    "revision": "2ff3c40a19f34c71eeea4997a899420c"
  },
  {
    "url": "assets/js/45.030cee93.js",
    "revision": "9de9416699a2d8393b93e479420237ef"
  },
  {
    "url": "assets/js/46.efd63572.js",
    "revision": "68fc1c3a83757d5c46eed997174a2d28"
  },
  {
    "url": "assets/js/47.1ae54848.js",
    "revision": "ec251bd2c80a614e87ece92a27546667"
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
    "url": "assets/js/6.f45cd49a.js",
    "revision": "fe8220966fbec031045573307addc415"
  },
  {
    "url": "assets/js/7.cda595e9.js",
    "revision": "e8cd0c83f99eb302756e0e6cb66f8bbe"
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
    "url": "assets/js/app.b52d4e08.js",
    "revision": "b6645fc2fd4be777d7d3f3f59332cab7"
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
    "revision": "9917cd3d5d1470196fd37fe029dfbf7a"
  },
  {
    "url": "category/index.html",
    "revision": "6f77129d5a3a2c76e9d5b9ada549e046"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "aff3e3f804a71f372b754b2107793b2a"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "5c9ec05d889556a538568a3134f6d934"
  },
  {
    "url": "electron/index.html",
    "revision": "d90d6780f8bcf4e07acd5407ac6c4529"
  },
  {
    "url": "extra/index.html",
    "revision": "28c46b9503e419be7dc58988550a98d2"
  },
  {
    "url": "flutter/index.html",
    "revision": "5b40e43e2336f5688f4c473f57572bf5"
  },
  {
    "url": "flutter/test.html",
    "revision": "77d1d7eb45b878a1a8122bad2813a456"
  },
  {
    "url": "guide/changelog.html",
    "revision": "897bc69b00fc2edf3dbe44185ad19a51"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "74eddc4233c58702efd470a50eb2fd19"
  },
  {
    "url": "guide/faq.html",
    "revision": "c84175e271fa91cc4ffc95d4a47fb450"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9ac16ff06f0d75b72ac78706970715ee"
  },
  {
    "url": "guide/index.html",
    "revision": "d596074d463e92b656bafec4d20614bf"
  },
  {
    "url": "guide/palette.html",
    "revision": "6ba459afe71a8708e43f463dc49b0319"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "e39472a9b99329070a862052d02015ac"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "35d54af5c3ac80304395593cc115672e"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "a49b935a897685bbb0d08ae013095261"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "f15bf6aa769a7bc83b8557fbba2d4ff3"
  },
  {
    "url": "index.html",
    "revision": "77351274496c6f349c3189f1a3111cfd"
  },
  {
    "url": "js/index.html",
    "revision": "d0f6cb4705fcabfe235c607f0649c7c8"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "dde42b8f9459df4be56134dc0cb9dd1c"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "98a224230eab438956a4725900bb8537"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "7ce9e1078c79e0155b0a2cd1472e0a21"
  },
  {
    "url": "midway/index.html",
    "revision": "739b79bbc62d38f680296b01a6e59436"
  },
  {
    "url": "notes/brew.html",
    "revision": "1b219e8737a1973f240c9e9b6ec53f7b"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "5598af99f5f26f2e5639a4c5f7154d28"
  },
  {
    "url": "notes/git.html",
    "revision": "94a59232899239ba64cd414f85719f75"
  },
  {
    "url": "notes/index.html",
    "revision": "2ebeb2a1815660f67b1bec421dcd8ef9"
  },
  {
    "url": "notes/nginx.html",
    "revision": "23de90e8f0246599b91927eac9726a2b"
  },
  {
    "url": "notes/node.html",
    "revision": "098614c8418fcd6337c573f86cf108ba"
  },
  {
    "url": "notes/npm.html",
    "revision": "f9fcfbef4148e0266943e275424bc156"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "4c0b5fc7a7fef85e82bc9498ad19c289"
  },
  {
    "url": "notes/vscode.html",
    "revision": "8869baa79f869df03320b3957afedfc2"
  },
  {
    "url": "plugin/index.html",
    "revision": "672b64861322807aee2a26d871929822"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "7b87f637fc5f68e25c10aa2946c59e2c"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "a4cd260494850d42ab77172f0c6d4ee0"
  },
  {
    "url": "tag/index.html",
    "revision": "91947d39d6f6fe57fa89aab5824e037e"
  },
  {
    "url": "uniapp/index.html",
    "revision": "3cf027d12b7eb757974852865e904fa2"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "952c020e28aac68504541089d8609bf9"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "d93e6709534d0d258bbe3b23b5c95c58"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "8c1eada929320dc0fda1056c53455992"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "f4ae115d8887616f0d4b95942078a0e7"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "7a9f18111f6261af82414fff6fa5897f"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "d4096611621bf979b52efd6b2a93d902"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "963c49fceeebb3e103eee8fd1bb67602"
  },
  {
    "url": "Vera/index.html",
    "revision": "2c93aef8c5656ca2e678a5dbf72e311c"
  },
  {
    "url": "website/index.html",
    "revision": "6aed581ee7f711a35fa1a1ba817f2d21"
  },
  {
    "url": "website/package.html",
    "revision": "fd1efa0a4e55b1734d8fd2c021063149"
  },
  {
    "url": "website/rearend.html",
    "revision": "bd71b7a3c74a9870fb78a4a3d61831c4"
  },
  {
    "url": "website/tools.html",
    "revision": "59c2cd04abaf00368559162ea158c49c"
  },
  {
    "url": "website/webclient.html",
    "revision": "1bf2872bb19f80a4c2ebc1c1fc9f6e2b"
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
