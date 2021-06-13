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
    "revision": "93a17d4ea5ad951f986287416d522658"
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
    "url": "assets/js/15.e946a905.js",
    "revision": "292394b0a6e5e2034cf87ecbff9970ee"
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
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.2ebab503.js",
    "revision": "3baa0ff3fc3dc00de4a0cba817e98cd2"
  },
  {
    "url": "assets/js/26.726aca68.js",
    "revision": "f4c82945bbb364e8abfff59b160af109"
  },
  {
    "url": "assets/js/27.6d6d723b.js",
    "revision": "bf130ae2dbf75c930347fee944b86aad"
  },
  {
    "url": "assets/js/28.5e931129.js",
    "revision": "16017e53775acbb6e8ac381c3c927ba9"
  },
  {
    "url": "assets/js/29.e85cf38e.js",
    "revision": "d0b4cfb0a48ede53086ab0feceba6152"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.acf65cc9.js",
    "revision": "178537a7b354aed3954099ae04edf534"
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
    "url": "assets/js/33.68c8a4f5.js",
    "revision": "d5d11c5dda9f3413fb86d9c800cbc2e4"
  },
  {
    "url": "assets/js/34.a95d881b.js",
    "revision": "25bb06a223249bd1015b129b09593374"
  },
  {
    "url": "assets/js/35.3fdd4f5c.js",
    "revision": "d45af7a458bb1dd0bd5129590116d128"
  },
  {
    "url": "assets/js/36.806a3681.js",
    "revision": "ee7d933702df938e77b7d2b2d82b3222"
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
    "url": "assets/js/app.eff39118.js",
    "revision": "c771159d4a5943391cf5244476598cc0"
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
    "revision": "bfb54956b8325ac932182573165a6908"
  },
  {
    "url": "category/index.html",
    "revision": "79f5166cf7a7ab6927a208644fdf1893"
  },
  {
    "url": "egg/index.html",
    "revision": "c4f213742934546d9f339d16d2084642"
  },
  {
    "url": "electron/index.html",
    "revision": "ba13d164beffef7b50618208437c3a7c"
  },
  {
    "url": "extra/index.html",
    "revision": "0f2e54e57bd3553902312894c99045cf"
  },
  {
    "url": "flutter/index.html",
    "revision": "8c17621a3e421679bc19428ccf232faf"
  },
  {
    "url": "flutter/test.html",
    "revision": "34496e04535e3a52523dfcb57d70e357"
  },
  {
    "url": "guide/changelog.html",
    "revision": "cb147298b40d7044cb04b0dbb272eade"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "3c29834f526c723fa05aee4f90ee4264"
  },
  {
    "url": "guide/faq.html",
    "revision": "f7f284bac9d159dbd97255f3b22f6a08"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4b041f4ccd5a3a20408142075aa26679"
  },
  {
    "url": "guide/index.html",
    "revision": "54961d6121454c193e03e1f0c77b10b0"
  },
  {
    "url": "guide/palette.html",
    "revision": "bea1828d7ac2d7cbe0c5cce18b114d88"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "287158a1c5f838a2fc444aa85bce5b74"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "5e9cf66724f9691ca0f6c26dcabd3fe2"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "a4ab9d7018831f035627e81c0ced07b1"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "2bc09bccb7ee1c0faede9521a53db238"
  },
  {
    "url": "index.html",
    "revision": "b6af0215c28d59c6e6f04f4ece0f89aa"
  },
  {
    "url": "js/index.html",
    "revision": "00f6dc74e22a33602525e1e03a832daa"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "b3db76d9fd68cc0da68db8ee6667ac68"
  },
  {
    "url": "notes/brew.html",
    "revision": "afa0ef2e7a833f9e86b20ea504ee5210"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "3b001a186240b5959af03a60a1d00c22"
  },
  {
    "url": "notes/git.html",
    "revision": "0b1ec9ae6d65528b6716650294250362"
  },
  {
    "url": "notes/index.html",
    "revision": "8042e9d9526ec11bea5a62486196b0e7"
  },
  {
    "url": "notes/nginx.html",
    "revision": "ba17443032e6583c77cd7f2a2cbc2183"
  },
  {
    "url": "notes/node.html",
    "revision": "5e483c869e41a36e8444de94a512ab94"
  },
  {
    "url": "notes/npm.html",
    "revision": "e429f1407b6b81854fe5db37c93c697c"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "dafdf10b777b1cfc8f9259b30fe37d25"
  },
  {
    "url": "notes/vscode.html",
    "revision": "db72d57d27437a84d5a4cb071b55c6a5"
  },
  {
    "url": "plugin/index.html",
    "revision": "eb0f50ca77ad0f625f01c6b5931b852b"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "e9063625f8781c7e212a9c9d62b7b686"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "b3521da9619a785753d5ac2e0a1afcfc"
  },
  {
    "url": "tag/index.html",
    "revision": "debd1452155173ef30c6bf739678e522"
  },
  {
    "url": "uniapp/index.html",
    "revision": "6839b78cb96f35b869a046c2634acab3"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "a274f6fa565a30555360033c8a6dae3b"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "f2fdb87cc9d916479ac338d7e0491a07"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "07331948a6fdc65308a3313009824383"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "956ec1252987b8df3fd657ab9c31a35f"
  },
  {
    "url": "Vera/index.html",
    "revision": "6d2b69eea7709007ede6ebe9d6391203"
  },
  {
    "url": "website/index.html",
    "revision": "dc4e62f2526bd7c7a63063576cdfce3c"
  },
  {
    "url": "website/package.html",
    "revision": "65aeadd8e0808afa0b099f36f38f0986"
  },
  {
    "url": "website/rearend.html",
    "revision": "d28b590a7716d97a288dda06006d0290"
  },
  {
    "url": "website/tools.html",
    "revision": "a610526e2744469fd019da1fe1d4d451"
  },
  {
    "url": "website/webclient.html",
    "revision": "92a9f119156cb6469ab936e578a02b39"
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
