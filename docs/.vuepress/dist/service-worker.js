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
    "revision": "aea78b15f4d0e4885665004f4796dcfc"
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
    "url": "assets/js/13.8d12edaf.js",
    "revision": "16db3575758b779a9562d9482af6ac60"
  },
  {
    "url": "assets/js/14.c7c99f4d.js",
    "revision": "7f1796dbab5344718cdbd1fd2adfd3fa"
  },
  {
    "url": "assets/js/15.a5a7b9b3.js",
    "revision": "9f0ac3674e6b480551d6ef112d8d2274"
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
    "url": "assets/js/18.fcad0ce9.js",
    "revision": "85b0af97d1f679d9ff2b37d6ee2616ea"
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
    "url": "assets/js/20.4fe872e9.js",
    "revision": "ae0a5ca1489bf3de9930a5502916f179"
  },
  {
    "url": "assets/js/21.b97fcc39.js",
    "revision": "2f6146799d5f52d51dac8e15ee14219c"
  },
  {
    "url": "assets/js/22.ba4c4f9b.js",
    "revision": "e9036408f608783a7effa2db1b890256"
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
    "url": "assets/js/26.d2e9ad5c.js",
    "revision": "aa89304f3c85005bff5ba4113dde74bb"
  },
  {
    "url": "assets/js/27.51bef9d4.js",
    "revision": "7c5cd51a7a3ae5ab3f41a8b977cbff9a"
  },
  {
    "url": "assets/js/28.43bc6c80.js",
    "revision": "5102fa652d6ab33dce6b2c5a305a1e66"
  },
  {
    "url": "assets/js/29.839a6314.js",
    "revision": "9e0b144f2939927d70fb137d8971079f"
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
    "url": "assets/js/31.983d822f.js",
    "revision": "8f7d94c1014e9423859cdc4578cd78f1"
  },
  {
    "url": "assets/js/32.8c4b79c5.js",
    "revision": "ca2323ab11fb1ee15ae0eaff21979921"
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
    "url": "assets/js/35.3552f61f.js",
    "revision": "850e829a4f9855564b890c4d4436d43e"
  },
  {
    "url": "assets/js/36.c0431443.js",
    "revision": "926e5659e6c1568977eeff17a98bc983"
  },
  {
    "url": "assets/js/37.3ff5d86e.js",
    "revision": "ca20848b64a003941cbdfec7c9f5a8a3"
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
    "url": "assets/js/40.ed96a593.js",
    "revision": "1d27e92839b68504f0c45dfae0883d21"
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
    "url": "assets/js/43.a02f3b9f.js",
    "revision": "8e01cb3d25721b89546a005578168fab"
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
    "url": "assets/js/8.7cb45502.js",
    "revision": "7670c607252f3cdc4cce9b51b67fb19e"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.a414d1dd.js",
    "revision": "2ef3d912395c655d210101a591cfc312"
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
    "revision": "dc925fa1b9428aea1a9a400c19a39c05"
  },
  {
    "url": "category/index.html",
    "revision": "dc31f30c7ce5ccaa7f73a5c075d688d5"
  },
  {
    "url": "egg/index.html",
    "revision": "3ddb57bcbf7e71e59bcba459a443c7a6"
  },
  {
    "url": "electron/index.html",
    "revision": "15190cea872147e5849c42bc5ccfe170"
  },
  {
    "url": "extra/index.html",
    "revision": "b12334984e8b8498245f5265faddc139"
  },
  {
    "url": "flutter/index.html",
    "revision": "afaba373244216dbba7e697ce573f83b"
  },
  {
    "url": "flutter/test.html",
    "revision": "746682033a60d9dca71560cfd41c91f0"
  },
  {
    "url": "guide/changelog.html",
    "revision": "e063adc6d677df5ae0b36e5df4caea2c"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "394433b0db66ff6dd2f693fac4eb6f77"
  },
  {
    "url": "guide/faq.html",
    "revision": "fbfa73b2b963ad0fcb2f3161059fc3a1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "40b64606f4994eada4575fcc6cc2ef8d"
  },
  {
    "url": "guide/index.html",
    "revision": "e077a8e7491b3a63c74f975af6535111"
  },
  {
    "url": "guide/palette.html",
    "revision": "f09137bd005b058f2ec4efe69223cb03"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "6cb17b97ac031daa17b6fdf2844d52b8"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "f390edb766f06db1cdf12f55a73b159f"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "10a5511458fac500d2beef51a6bd7998"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "815d0c0f3e4906a0ea8cb40157aa26d4"
  },
  {
    "url": "index.html",
    "revision": "88ac34faafd68a049ce2ebc92a660050"
  },
  {
    "url": "js/index.html",
    "revision": "d4c09d2345f16142c09ce54d2b78b70f"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "0e8bc00e5fbd3af96f42c98ce5c83b90"
  },
  {
    "url": "notes/brew.html",
    "revision": "306afcdd116b095862c580bf92f68d0f"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "36e0be54974e68bfefe597b276927437"
  },
  {
    "url": "notes/git.html",
    "revision": "ffd9fa3cc3ba07dfd18f45e4e965047d"
  },
  {
    "url": "notes/index.html",
    "revision": "0038a296f85e07fe6e541d0c7a7e2402"
  },
  {
    "url": "notes/nginx.html",
    "revision": "3bf507b60755f6d2099c70260bcd0a8a"
  },
  {
    "url": "notes/node.html",
    "revision": "2b19cc4a36636e5919b106af432b104c"
  },
  {
    "url": "notes/npm.html",
    "revision": "c57d89362c504d1c09cbbca5aa23ad98"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "c407f774e8cbd6f309f9d9cec4fa082b"
  },
  {
    "url": "notes/vscode.html",
    "revision": "5d40eef359a2de9c3827e16d8b1b7944"
  },
  {
    "url": "plugin/index.html",
    "revision": "e01fc523eb33002fac49a79b6f275abe"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "84443c2e892095c8486f8f19e121f4af"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "187a72acd72ddeda40c106dcdb247565"
  },
  {
    "url": "tag/index.html",
    "revision": "644158686bdfcbc4408950bdac684192"
  },
  {
    "url": "uniapp/index.html",
    "revision": "2936ef62b5cd0fe84b3bc75202fea631"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "23b556a05a0103667cfea9c26b0bb921"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "887940e5f82d0d76a13f9cb69e41fb05"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "4747ced6ec74fc8276b38f86a66d7ca1"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "75e47ac6c66569b23cf7c0f1bf2844c3"
  },
  {
    "url": "Vera/index.html",
    "revision": "e2b6580f9eb1ed81a6b8b5899bba3ca0"
  },
  {
    "url": "website/index.html",
    "revision": "4f7034165660fbfbe050d60871912b84"
  },
  {
    "url": "website/package.html",
    "revision": "8869ca0ca2e54515eee42303acd0cdb8"
  },
  {
    "url": "website/rearend.html",
    "revision": "a5ac0237f7729421583519c6b71b0969"
  },
  {
    "url": "website/tools.html",
    "revision": "bdcdcc049e111e92dfdd708ed72cb944"
  },
  {
    "url": "website/webclient.html",
    "revision": "409ad1013436785230f3a9643ef69d60"
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
