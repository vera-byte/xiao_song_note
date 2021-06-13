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
    "revision": "4ca277dea02d9c1c2cd970d086e88f14"
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
    "url": "assets/js/12.fe4fb571.js",
    "revision": "f980ee5002fee3e0c33811b79282db54"
  },
  {
    "url": "assets/js/13.504d44ab.js",
    "revision": "182466f98ee9d6ffb545faf069c7777e"
  },
  {
    "url": "assets/js/14.e171bc2d.js",
    "revision": "da57326a317f2736c4f5db5112689d9f"
  },
  {
    "url": "assets/js/15.37f4e7ce.js",
    "revision": "218b7b604efb344f90effeeb3fa46759"
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
    "url": "assets/js/23.fbdcfb41.js",
    "revision": "4e6f4dcdc309c789ae32db67765ed404"
  },
  {
    "url": "assets/js/24.a744d836.js",
    "revision": "f19f38e8dd387f29c2419267c6756c3a"
  },
  {
    "url": "assets/js/25.51799eca.js",
    "revision": "ba923ab0712fb5749310844d24594063"
  },
  {
    "url": "assets/js/26.b5839766.js",
    "revision": "dfab37ec4cff96e864b77f382b58a0d1"
  },
  {
    "url": "assets/js/27.8f34ac2e.js",
    "revision": "f6cb74e88b4f771f56a6bee49c142580"
  },
  {
    "url": "assets/js/28.6d3caaa7.js",
    "revision": "08080c4192b0b563feb0607d15ad727e"
  },
  {
    "url": "assets/js/29.f03f4ec2.js",
    "revision": "33f7d40bc9a33fed7ccd0d518dafa669"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.09cc8489.js",
    "revision": "dd81fe7f765e45180dd4ee2081335089"
  },
  {
    "url": "assets/js/31.f8e075bc.js",
    "revision": "c2d21378bc89d895f037f3db5e73dd01"
  },
  {
    "url": "assets/js/32.0343a836.js",
    "revision": "c2314445161fc198deab6c30eb072ab3"
  },
  {
    "url": "assets/js/33.8977ec69.js",
    "revision": "36d6848c033e290b355f1edd32333811"
  },
  {
    "url": "assets/js/34.80e7132c.js",
    "revision": "0a96f781e0c40dbcb616e8bbec75a63d"
  },
  {
    "url": "assets/js/35.bd6d9f29.js",
    "revision": "82e1d19bac7b4bcb4603118dad34eddf"
  },
  {
    "url": "assets/js/36.f97e386f.js",
    "revision": "f7dffbba7b0df29f72a8c6e9949b944f"
  },
  {
    "url": "assets/js/37.6c8a5f43.js",
    "revision": "e826e38666b2d8f8aee146614106d6f4"
  },
  {
    "url": "assets/js/38.5a67529d.js",
    "revision": "8fced2f1a7a5c06b3089641e8a941480"
  },
  {
    "url": "assets/js/39.3fad06c0.js",
    "revision": "b6763272231887abbd008c798b884ac0"
  },
  {
    "url": "assets/js/4.370c35a0.js",
    "revision": "7680c25c9180ae6be0be519a44241235"
  },
  {
    "url": "assets/js/40.e14cff7b.js",
    "revision": "07e85b0093c9fdc7fdd86ceb9e948719"
  },
  {
    "url": "assets/js/41.1c02c977.js",
    "revision": "04c0804f65973fa682463bef71af0358"
  },
  {
    "url": "assets/js/42.81369188.js",
    "revision": "1bbb3b0c7f7bd097ff99df0c4bcdd1e9"
  },
  {
    "url": "assets/js/43.6347996b.js",
    "revision": "fd7f85b91a53a638d9311e5ad0e53724"
  },
  {
    "url": "assets/js/44.323222a8.js",
    "revision": "0b7b081b77ce38f9dea4cc949f0f5799"
  },
  {
    "url": "assets/js/45.8c6c952e.js",
    "revision": "6c8cecbbcc69da3f7d9aa1425987aa15"
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
    "url": "assets/js/7.7244ce27.js",
    "revision": "fc43001207d46fe098eb2e6c8941dfc1"
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
    "url": "assets/js/app.3222ce51.js",
    "revision": "7c8556da57f7a796aea077674db97247"
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
    "revision": "a0db79ee0d45e4fd0640b2a14a481cf7"
  },
  {
    "url": "category/index.html",
    "revision": "c892fe915a76b29208f36a3a90b9cd89"
  },
  {
    "url": "egg/index.html",
    "revision": "9806399f3bb42024f469b7f240348d5e"
  },
  {
    "url": "electron/index.html",
    "revision": "93813d1ffa619e9173bf410c2fd928fa"
  },
  {
    "url": "extra/index.html",
    "revision": "c8ba04f7d444473506877d0ef0eb5697"
  },
  {
    "url": "flutter/index.html",
    "revision": "be50bb20644b2da0ce0c54220fead147"
  },
  {
    "url": "flutter/test.html",
    "revision": "b74bea020e3136930a50b011819fc472"
  },
  {
    "url": "guide/changelog.html",
    "revision": "c498d397890b1ae87d7c4b697ba4d23c"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "82017ebb41fbaa4e574ae374523bdd7d"
  },
  {
    "url": "guide/faq.html",
    "revision": "ae522149a78c8e313dea350c7734636c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1b6a61fa598656fe59937c677681f585"
  },
  {
    "url": "guide/index.html",
    "revision": "b77a02f4a6c4799f5672141e270ec655"
  },
  {
    "url": "guide/palette.html",
    "revision": "5364103f265e855b49930ddc3b5c1672"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "342b306b4903026f7a7669f232aa748a"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "c6c8efe107930e26499ecabeec94b37c"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "c410c6f91405733d5218069218ec9eac"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "0126fc032431f2dcb0fd35ef384cfd17"
  },
  {
    "url": "index.html",
    "revision": "9da261c4d353da4925ba01d5d5e0e192"
  },
  {
    "url": "js/index.html",
    "revision": "880aa30310bbb8788f43595853a62784"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "eeb0f4bbef4258a074cdfc6a3cc881b0"
  },
  {
    "url": "messageboard.html",
    "revision": "9460e1049098b76ce5041a7a1fb55f8d"
  },
  {
    "url": "notes/brew.html",
    "revision": "4630ef071a8b5130d48bf5c870bacf3a"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "08032500398167556c4ea8d41529d0cd"
  },
  {
    "url": "notes/git.html",
    "revision": "c4a504d1e0d86b3cb3bde359a6979958"
  },
  {
    "url": "notes/index.html",
    "revision": "5839e60e0c6c5fecd72551bcc2b02708"
  },
  {
    "url": "notes/nginx.html",
    "revision": "71581b6ef160a6e3e2941f8396fdd56f"
  },
  {
    "url": "notes/node.html",
    "revision": "585721c1fdae9d55021db8bd279f49fd"
  },
  {
    "url": "notes/npm.html",
    "revision": "478a8494d3f46085dc4d274268984ef4"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "0979ed877b80dbd5d9e812b085006a70"
  },
  {
    "url": "notes/vscode.html",
    "revision": "7d50a5f5aaec5b77bdef47bf34ce6046"
  },
  {
    "url": "plugin/index.html",
    "revision": "bb7ac10cc25b5ed4dd571e591d65ae8b"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "a7e978cf09fa97ae2e7c179540b579e6"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "27a426be997c045ee172fc210775e0ef"
  },
  {
    "url": "tag/index.html",
    "revision": "3d8fb0592fbf4750e880b901c3e2ef8d"
  },
  {
    "url": "uniapp/index.html",
    "revision": "5047b80f1c2f65e83761e697a32b8369"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "fc7e37e1107af4205bc55432b0070ffd"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "1b894ed02464dd3309431ee54e860a09"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "9054d301ef12e68b9d63bbef3bb714b8"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "0be0c5df3b2fa14427967729a43e83da"
  },
  {
    "url": "Vera/index.html",
    "revision": "cca03042da023fd5d82ff4a690bac7c2"
  },
  {
    "url": "website/index.html",
    "revision": "9a9fbc4397b46ccb0dd935dc196ccf74"
  },
  {
    "url": "website/package.html",
    "revision": "c7be95488b28523452d4a640b7f1adff"
  },
  {
    "url": "website/rearend.html",
    "revision": "777fe4680aaf535f1388f29854693540"
  },
  {
    "url": "website/tools.html",
    "revision": "82e937ecaf35711ddb44c6c8ac0a317b"
  },
  {
    "url": "website/webclient.html",
    "revision": "4de34c99744ed6208823d3f6dc8bc7d2"
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
