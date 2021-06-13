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
    "revision": "b5dac86e16ced2c0a032935a0c9c250b"
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
    "url": "assets/js/14.0fe6a195.js",
    "revision": "4a2cd40a2621fe8eb6761e1ebe61041b"
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
    "url": "assets/js/19.178387ea.js",
    "revision": "0d6fd491009c33941ec62bfa681e18c7"
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
    "url": "assets/js/21.b78a8066.js",
    "revision": "9aba97eb1678d2a9dbac7aafadafcd2f"
  },
  {
    "url": "assets/js/22.816a3f75.js",
    "revision": "c6f693d0d1b376848f9ae52f46453f97"
  },
  {
    "url": "assets/js/23.b8bc5ad1.js",
    "revision": "17161bbe2271f1a6391dfc58c91b6435"
  },
  {
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.3a1572d7.js",
    "revision": "a224e37e73456e8711e5dd813ab1f11b"
  },
  {
    "url": "assets/js/26.3ffa2579.js",
    "revision": "e96660111433e67bd08012f814b39815"
  },
  {
    "url": "assets/js/27.a5ff4c63.js",
    "revision": "c7a5d927564e79b0e1d688d3382b770c"
  },
  {
    "url": "assets/js/28.6427dc24.js",
    "revision": "057f9b4f23a139ecc0fab9b3ff2c5769"
  },
  {
    "url": "assets/js/29.066dcdb0.js",
    "revision": "71244cd02f8735532d8d5ee82e0e648f"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.490deff4.js",
    "revision": "036c712a6e62dcbc4c95affc84f60525"
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
    "url": "assets/js/33.cfae1c4b.js",
    "revision": "40201b29423e47d6f50b2e4f2f0cdaf3"
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
    "url": "assets/js/36.0dfdaced.js",
    "revision": "b9b36922805fffdeb4994fb26566736d"
  },
  {
    "url": "assets/js/37.d67b4be3.js",
    "revision": "71780fa0c26e3c0fa8788c4e8cea0f0d"
  },
  {
    "url": "assets/js/38.27fb806a.js",
    "revision": "d927690b18e8968f96d0b51e7e58ad8f"
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
    "url": "assets/js/42.ec775be2.js",
    "revision": "831a8c1b1b22043c847818a67b7547d6"
  },
  {
    "url": "assets/js/43.634725d5.js",
    "revision": "5e56eeac7b24a4998ab371f0e51630b3"
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
    "url": "assets/js/8.c61d4fc5.js",
    "revision": "dc3d4a6056d48ae86a35c2cc7caa48dc"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.0eff0ee1.js",
    "revision": "44afdf20217bcf3dbf23937c59a5f3fd"
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
    "revision": "f372ab876fa5d47bd0e9ea0e76fbc1f7"
  },
  {
    "url": "category/index.html",
    "revision": "a8cb83bab5fbc673f58268f8d1415447"
  },
  {
    "url": "egg/index.html",
    "revision": "0018ce55dbbb52d5911e3723d23b421c"
  },
  {
    "url": "electron/index.html",
    "revision": "f53999fdc955b4aca1f47fae270aa131"
  },
  {
    "url": "extra/index.html",
    "revision": "e482cd144124ba0c37d098b2f6d793bb"
  },
  {
    "url": "flutter/index.html",
    "revision": "a404383230dfe65d9a389c372db0a87c"
  },
  {
    "url": "flutter/test.html",
    "revision": "1c92e31b29904b74bfa9b542dec1e6b6"
  },
  {
    "url": "guide/changelog.html",
    "revision": "d51fa8435b793840be65adf38394a80d"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "6212a7e165f690f3e56a9b059cc9b3c3"
  },
  {
    "url": "guide/faq.html",
    "revision": "bb3f2c0cceba4755808560af5f5bf89c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8b6a84dea489a32c92a7b0416d024528"
  },
  {
    "url": "guide/index.html",
    "revision": "4c69ce8242c5888c80cd278525aad48a"
  },
  {
    "url": "guide/palette.html",
    "revision": "bdcc709a2b172b1b6ddacf8e559bc2dd"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "596df7ffc44f485878dffd90b0fd7aa4"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "71e5fd309c6582748d50fd9b99b3170e"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "7ce278fca88a568b3ab432b61508fddf"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "bd81492f20dbff9c26e282aa6b6f98dd"
  },
  {
    "url": "index.html",
    "revision": "ea9bfc90500ae0100c526cd1199cd875"
  },
  {
    "url": "js/index.html",
    "revision": "1c1f1a6aea9568df780fde4a61d6dd29"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "fff84938d1da286aea573b4daa2bd093"
  },
  {
    "url": "notes/brew.html",
    "revision": "8e851aacfcce1afb8010b2a01204f402"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "c6e48e5fe7e00fb1c909a331d5aec840"
  },
  {
    "url": "notes/git.html",
    "revision": "8f91204912a56711ab8def4182678205"
  },
  {
    "url": "notes/index.html",
    "revision": "dc0811c66c4604e920ab1579e265c3d9"
  },
  {
    "url": "notes/nginx.html",
    "revision": "38e8c756a65d6b696bac86e76006c18a"
  },
  {
    "url": "notes/node.html",
    "revision": "510b157e3cedbd9a51efde655de4c252"
  },
  {
    "url": "notes/npm.html",
    "revision": "eaa9e52f615e7635d680250c473b1426"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "1fdb9165ad8f5419e565cefc5faff136"
  },
  {
    "url": "notes/vscode.html",
    "revision": "774a3c255d6026260f36df66f433f317"
  },
  {
    "url": "plugin/index.html",
    "revision": "66025077e88d8ce60e364668c64e38e0"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "cb845e033ada509c2c488f85872805a7"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "19cf44ba5a975425f1672433e428eb5b"
  },
  {
    "url": "tag/index.html",
    "revision": "7e62963b578996a812f1fd28f73bef52"
  },
  {
    "url": "uniapp/index.html",
    "revision": "925956e4d9b9941db031878c22ebfc65"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "e9de79de6955d268e7ee92291c681290"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "53dae29b3b55448d77067b5831ce472e"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "aa2fba29e379b6a143c1593ad5e7a1cc"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "bff754b1e53e2d4d302e1dba4e4d4980"
  },
  {
    "url": "Vera/index.html",
    "revision": "3623731e7bd64e7313489b370ba56ab2"
  },
  {
    "url": "website/index.html",
    "revision": "6569db7abc665b198d897b956a1fb165"
  },
  {
    "url": "website/package.html",
    "revision": "ed80b295c88ba6e12d37eb9f7484b992"
  },
  {
    "url": "website/rearend.html",
    "revision": "079528f2ff29e54603f9a9534ae51ceb"
  },
  {
    "url": "website/tools.html",
    "revision": "df57245e045b4722c5e288951308b45f"
  },
  {
    "url": "website/webclient.html",
    "revision": "da37c122805d4105cd241c0da37c4910"
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
