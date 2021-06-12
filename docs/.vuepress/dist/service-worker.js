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
    "revision": "50cb479321fa9aa4807605c5dfd60684"
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
    "url": "assets/js/14.c7c99f4d.js",
    "revision": "7f1796dbab5344718cdbd1fd2adfd3fa"
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
    "url": "assets/js/19.aeb98cc1.js",
    "revision": "b7350fb5685c8fe820862e9f8cc25c27"
  },
  {
    "url": "assets/js/2.4f3480b1.js",
    "revision": "eb323f1b8dc7cae20a7681bb9f453465"
  },
  {
    "url": "assets/js/20.7547816e.js",
    "revision": "4b2f3b6a2184955c80befed1e1fc7fb6"
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
    "url": "assets/js/25.02c555da.js",
    "revision": "4cc7c2ff1400c66e952a33050d549c47"
  },
  {
    "url": "assets/js/26.0b214936.js",
    "revision": "f4ae496c169a1490ca4f3825801a1081"
  },
  {
    "url": "assets/js/27.f31ce669.js",
    "revision": "fcd7a775e09add5ecd8f9d0c09c6cfec"
  },
  {
    "url": "assets/js/28.43bc6c80.js",
    "revision": "5102fa652d6ab33dce6b2c5a305a1e66"
  },
  {
    "url": "assets/js/29.f513878a.js",
    "revision": "ef49e2044a940b4981ceeb973e640187"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.c348cc93.js",
    "revision": "ed404e7c820aad46ea19583b1092e209"
  },
  {
    "url": "assets/js/31.1abca80b.js",
    "revision": "39d644b2b83f93eec15ac073cec29cb6"
  },
  {
    "url": "assets/js/32.05a9175c.js",
    "revision": "0d1524cf389045a388d0b8b9a0f9e74c"
  },
  {
    "url": "assets/js/33.f922c896.js",
    "revision": "033626fc4c64bd5be7b377a65b7cc1d1"
  },
  {
    "url": "assets/js/34.87a17869.js",
    "revision": "6c5ba3465f49421aa5898d9073253172"
  },
  {
    "url": "assets/js/35.3552f61f.js",
    "revision": "850e829a4f9855564b890c4d4436d43e"
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
    "url": "assets/js/38.ff1f059a.js",
    "revision": "00b6a56ede2b35495dbe780301c5490d"
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
    "url": "assets/js/6.79e579ec.js",
    "revision": "ac5c7db22d3eda2c3adb680ab94effce"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
  },
  {
    "url": "assets/js/8.a54ae796.js",
    "revision": "04ebb658e380e5dde1fd10490546e730"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.7c85b8bc.js",
    "revision": "d391f2bf4bc9e168e05c303571a49d11"
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
    "revision": "2a560e18c673cd781fefc4c712cc3997"
  },
  {
    "url": "category/index.html",
    "revision": "979e8d0c125a5a73f246f5569dacbf22"
  },
  {
    "url": "egg/index.html",
    "revision": "9c538c6fb440d5bea85123ae888bd3ce"
  },
  {
    "url": "electron/index.html",
    "revision": "a24e2ecc0aa59f20f2bc10b51178ef1d"
  },
  {
    "url": "extra/index.html",
    "revision": "f91cd0ac4ed4a0eb33074402e74ca4d9"
  },
  {
    "url": "flutter/index.html",
    "revision": "89effac76ca602d5f4d0ffa19d4d500c"
  },
  {
    "url": "flutter/test.html",
    "revision": "d57f39f8c943c7c68f09b9f3bd8be65c"
  },
  {
    "url": "guide/changelog.html",
    "revision": "d99834f7ae496921642fd814b84afee2"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "759f4432d1bb6813bee02900b15e23ba"
  },
  {
    "url": "guide/faq.html",
    "revision": "68c7f98792b9f14d969f9254d2c3cd85"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e7a12909f4239234fceba7b26bb86f7c"
  },
  {
    "url": "guide/index.html",
    "revision": "8f32db854c3d037f935d78c9ee8a9248"
  },
  {
    "url": "guide/palette.html",
    "revision": "20b8cd41142f2f17da4380da3781e289"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "9aa7bb0334ed0a931e031ce2b3999843"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "e9740ee7ebf6e084547f538801d973d9"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "afc3b3f69bbddb688af574cf283b7c99"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "f9d303a76caa3c58f60ed8a467738107"
  },
  {
    "url": "index.html",
    "revision": "f50c93e5ec7bb75b31ee8f22d9da6ff6"
  },
  {
    "url": "js/index.html",
    "revision": "801426b4abb919166b463598b8f40611"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "c58037363652f260b7028611007eee43"
  },
  {
    "url": "notes/brew.html",
    "revision": "0b1ffc4c07924bae7395501ffa4a6e0f"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "7bee0e908eefcf1e31707012c9a45013"
  },
  {
    "url": "notes/git.html",
    "revision": "6bd10bb1792d8f50cd45486904764a98"
  },
  {
    "url": "notes/index.html",
    "revision": "128446ee225584d415c60746c6c3c760"
  },
  {
    "url": "notes/nginx.html",
    "revision": "b02cb0bfe9cf008b8b9b997127fb680c"
  },
  {
    "url": "notes/node.html",
    "revision": "86b88790a756d15aef575076e9778ecb"
  },
  {
    "url": "notes/npm.html",
    "revision": "afc51b620e57460b8a252631c0fcac58"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "0a4498fe36380c23225b7c55de8e9b34"
  },
  {
    "url": "notes/vscode.html",
    "revision": "a8591548135e5f5b3d4ad521289140a9"
  },
  {
    "url": "plugin/index.html",
    "revision": "8e3c24552734ad0a889afbcd6b507c71"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "951408bb83db1c923248bd298132cdae"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "51570080f43bdbe617c1dc12ac703914"
  },
  {
    "url": "tag/index.html",
    "revision": "acd0284247cf3c2818edf3dc7f2025d5"
  },
  {
    "url": "uniapp/index.html",
    "revision": "6bc9a3e562bfb65a604eb3064f4ca163"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "b2d0e3142492fe29547393453688350b"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "4b60686eb16ace2e11a6534c90aaef5a"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "2588f79dd173e3c77a0eb6860f78944b"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "7a8b00fa13513593e1bce3fb381709c8"
  },
  {
    "url": "Vera/index.html",
    "revision": "793360625b6e44095fc1c0bbf01e2536"
  },
  {
    "url": "website/index.html",
    "revision": "dfaba414c53afcc4169d6afd785f313c"
  },
  {
    "url": "website/package.html",
    "revision": "f26003f59490f060b207f61f7682355e"
  },
  {
    "url": "website/rearend.html",
    "revision": "02d7b15e73de0aa29bcc892ba7be273a"
  },
  {
    "url": "website/tools.html",
    "revision": "e750ccc2120adfeee439b311e4798e9b"
  },
  {
    "url": "website/webclient.html",
    "revision": "c8c4ce043bc15e020f98eeabd920a354"
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
