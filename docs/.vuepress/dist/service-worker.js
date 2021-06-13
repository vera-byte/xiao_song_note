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
    "revision": "dc7ff85e18ffb99588cf6b4883b51f50"
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
    "url": "assets/js/14.58456378.js",
    "revision": "8b10fbebec9c5de8944ac784c07ac5cf"
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
    "url": "assets/js/17.1ceba2d7.js",
    "revision": "b804808358183d81c5dba620b140f5bd"
  },
  {
    "url": "assets/js/18.31f0e06e.js",
    "revision": "b86c3c9dca43bbdffb2bbd85beb0d967"
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
    "url": "assets/js/20.2ede7fdd.js",
    "revision": "c26f835e1a6f4e65b63275c3b431b085"
  },
  {
    "url": "assets/js/21.768f0488.js",
    "revision": "da62b8e2cf6b13d91de3092d159c3f03"
  },
  {
    "url": "assets/js/22.e520653a.js",
    "revision": "fbbd4a50680827cafdbe70b351f947e9"
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
    "url": "assets/js/25.813c4eb2.js",
    "revision": "f70a5f8b176de7d5de63f60cd10a45a2"
  },
  {
    "url": "assets/js/26.0b214936.js",
    "revision": "f4ae496c169a1490ca4f3825801a1081"
  },
  {
    "url": "assets/js/27.c33e5558.js",
    "revision": "a8adc21dd93ce7a7941dff5a71aaac14"
  },
  {
    "url": "assets/js/28.6427dc24.js",
    "revision": "057f9b4f23a139ecc0fab9b3ff2c5769"
  },
  {
    "url": "assets/js/29.ccb62a14.js",
    "revision": "5d7ad3a29de258c279acdaffc3c5b366"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.3d4d5acd.js",
    "revision": "5d8273c5028f32d17b45a00b1684e538"
  },
  {
    "url": "assets/js/31.77d7c4e6.js",
    "revision": "9ab43af75b06bacb764ace6b61ddf6ac"
  },
  {
    "url": "assets/js/32.8c4b79c5.js",
    "revision": "ca2323ab11fb1ee15ae0eaff21979921"
  },
  {
    "url": "assets/js/33.1659cdab.js",
    "revision": "2d3ce0b01458b946a64bd349e70cece5"
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
    "url": "assets/js/36.0dfdaced.js",
    "revision": "b9b36922805fffdeb4994fb26566736d"
  },
  {
    "url": "assets/js/37.d67b4be3.js",
    "revision": "71780fa0c26e3c0fa8788c4e8cea0f0d"
  },
  {
    "url": "assets/js/38.f79ca0d0.js",
    "revision": "6d2d3a28ace2274b3eb0a0287727c0e6"
  },
  {
    "url": "assets/js/39.dd2f75b6.js",
    "revision": "a54b4f44e1659b3914f11b90b35135b5"
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
    "url": "assets/js/6.1d269c43.js",
    "revision": "a212bca5a2958819270ecca884cd14e5"
  },
  {
    "url": "assets/js/7.9caa1433.js",
    "revision": "f944aa0f4b00f76e6a60aaaa5ffeb468"
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
    "url": "assets/js/app.770b7c58.js",
    "revision": "3ddf7d833360ed401f7b0eb2e78e61f8"
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
    "revision": "0541210aa200ac3b8d39f020fdeaa5a9"
  },
  {
    "url": "category/index.html",
    "revision": "8c86bb62007ec17e8bf1d0f4e84ba0f8"
  },
  {
    "url": "egg/index.html",
    "revision": "1daccbc76d9823d3d737cbeda1491349"
  },
  {
    "url": "electron/index.html",
    "revision": "70c7aa7797ef4043011f60819e35ae10"
  },
  {
    "url": "extra/index.html",
    "revision": "0ad7c86a25c6f3c6256c7b7dc4e92c7a"
  },
  {
    "url": "flutter/index.html",
    "revision": "9cd404e852b1b93db5e3fdada7934530"
  },
  {
    "url": "flutter/test.html",
    "revision": "106b6b63f5dab73ad953353cbc930c07"
  },
  {
    "url": "guide/changelog.html",
    "revision": "c79365fd38dac65d2a07578eb7d4fb5f"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "fc4d6b8eeca22d78be30117c86f36c7a"
  },
  {
    "url": "guide/faq.html",
    "revision": "82ee3238a7cfa3a33c2f2a8629c94886"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "36a785a0dee4d70ef385b4c33c679cc4"
  },
  {
    "url": "guide/index.html",
    "revision": "a0589a2445cb3bb89433d33aef65232b"
  },
  {
    "url": "guide/palette.html",
    "revision": "7b6eedd3232b181f2528f49a9813e288"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "4b724424bfa9262c5ce658a9320c0e37"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "f1248f7ed4984926ef1c7483052c60cf"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "47f6d93096fd378dde5c5b052c7a2e2b"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "82bd71fa267f4ba34fc831604255e65f"
  },
  {
    "url": "index.html",
    "revision": "2e42c3398088870680206a4ddfd578f6"
  },
  {
    "url": "js/index.html",
    "revision": "3312d6c9f11b2604d285a538ab96dbf7"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "418ee02f991496692743d29a80bbbbf9"
  },
  {
    "url": "notes/brew.html",
    "revision": "58c2fd3a01b4e5add581818c01344073"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "0914f775f91ebab982f8a9f6292df100"
  },
  {
    "url": "notes/git.html",
    "revision": "853693b4f6d4724e526cd67287a7d32d"
  },
  {
    "url": "notes/index.html",
    "revision": "8c54fd6243a3346cb0e4a493f872974d"
  },
  {
    "url": "notes/nginx.html",
    "revision": "0472698356d7079d54439311d2fd023e"
  },
  {
    "url": "notes/node.html",
    "revision": "4d9b7f143fcaf23c421e890a66f20f8a"
  },
  {
    "url": "notes/npm.html",
    "revision": "2452c70725b85ac06025cb803e3f0fc6"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "d4d2ac839e54c80ebe6c511d97b8ec28"
  },
  {
    "url": "notes/vscode.html",
    "revision": "7734988b0f643612dd14c2ba3b7f411f"
  },
  {
    "url": "plugin/index.html",
    "revision": "5efc019dff10ecff3a218f395471790e"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "a3d7d1aee91aa97a8779c58442828357"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "81521c38ec56edc097dd20097b5d67be"
  },
  {
    "url": "tag/index.html",
    "revision": "591ad48c231d4e1d4cee15997a707027"
  },
  {
    "url": "uniapp/index.html",
    "revision": "525f31f0c3cfc00514fe8b373bc3710b"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "f28835feecf97a0ec474b27d1876081b"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "210a549d217d3ded6a8937c23708fa31"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "e9995252cd4a82562d8725d30209fc4f"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "a6b2158843e1cc0df3b5ae03b7295785"
  },
  {
    "url": "Vera/index.html",
    "revision": "8ed138c4022916cc4c4e27361075961a"
  },
  {
    "url": "website/index.html",
    "revision": "080ff2beb6cd9c7ccb2aa8a1017978ff"
  },
  {
    "url": "website/package.html",
    "revision": "362d6d7d65df2b66cc9b1592da6bb715"
  },
  {
    "url": "website/rearend.html",
    "revision": "4b62bbbd34d0fe26ed0c29745abc01d4"
  },
  {
    "url": "website/tools.html",
    "revision": "e6753eef85e4b9b785da4795b3a17394"
  },
  {
    "url": "website/webclient.html",
    "revision": "fe955ac168d9bf36bc5a42d2d8f71357"
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
