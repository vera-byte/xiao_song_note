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
    "revision": "1b4e20ce14056546caa8b31ca025afb0"
  },
  {
    "url": "assets/css/0.styles.c5a1f150.css",
    "revision": "f85ab08fb9adbeb88c0995823147a185"
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
    "url": "assets/js/10.1b401dd9.js",
    "revision": "0d7eb3a875341bf4ae24f997d404a8e9"
  },
  {
    "url": "assets/js/11.4c0e7305.js",
    "revision": "12384fc1a68bf5aeeda65c575f561727"
  },
  {
    "url": "assets/js/12.7043cb0c.js",
    "revision": "190c2395e5b7b7b38bf98202c28eb047"
  },
  {
    "url": "assets/js/13.c37a5990.js",
    "revision": "e9526202cb53e49d4b144412c92237a7"
  },
  {
    "url": "assets/js/14.e171bc2d.js",
    "revision": "da57326a317f2736c4f5db5112689d9f"
  },
  {
    "url": "assets/js/15.643a905b.js",
    "revision": "e815ff5988172c3ec4d2c16168714072"
  },
  {
    "url": "assets/js/16.91555f33.js",
    "revision": "bbb83259be8ee8c8fb4889d666f0a2b8"
  },
  {
    "url": "assets/js/17.d7c4ea47.js",
    "revision": "67a4a8c36fa6a43d283f6190a4ee293e"
  },
  {
    "url": "assets/js/18.31f0e06e.js",
    "revision": "b86c3c9dca43bbdffb2bbd85beb0d967"
  },
  {
    "url": "assets/js/19.c3cac64a.js",
    "revision": "74cc3a1061656151af497f1e24dbc4ec"
  },
  {
    "url": "assets/js/2.9265cb1f.js",
    "revision": "5e463828f39b8c8b047d07a3d3b36a1a"
  },
  {
    "url": "assets/js/20.d87e57eb.js",
    "revision": "669558434d11ef16d2abb9e21b3ee30f"
  },
  {
    "url": "assets/js/21.b78a8066.js",
    "revision": "9aba97eb1678d2a9dbac7aafadafcd2f"
  },
  {
    "url": "assets/js/22.afc333d7.js",
    "revision": "ba8d81892ad3cca45ad6f4b42e0f2857"
  },
  {
    "url": "assets/js/23.120cbab7.js",
    "revision": "a1ce59514687f063ce2ac97d191240d9"
  },
  {
    "url": "assets/js/24.77405ff3.js",
    "revision": "cbee9ac6ca1a2be18b273c158c2f5241"
  },
  {
    "url": "assets/js/25.077d898a.js",
    "revision": "41b823092b4c5231a15c57313dcdc3c0"
  },
  {
    "url": "assets/js/26.3ffa2579.js",
    "revision": "e96660111433e67bd08012f814b39815"
  },
  {
    "url": "assets/js/27.6d6d723b.js",
    "revision": "bf130ae2dbf75c930347fee944b86aad"
  },
  {
    "url": "assets/js/28.70dfb751.js",
    "revision": "ccb485b6a5835cb31abc8810c13b42ef"
  },
  {
    "url": "assets/js/29.d8587528.js",
    "revision": "c750b391268e994654045b1be3ad8438"
  },
  {
    "url": "assets/js/3.4f081cf9.js",
    "revision": "bc84619ba2917d7a895f593b57756152"
  },
  {
    "url": "assets/js/30.5bdbdee4.js",
    "revision": "adaf845c7294fb663e1104232a5dd990"
  },
  {
    "url": "assets/js/31.1abca80b.js",
    "revision": "39d644b2b83f93eec15ac073cec29cb6"
  },
  {
    "url": "assets/js/32.11b71bb9.js",
    "revision": "b91aeb8162dbd0aa52a52a2960281265"
  },
  {
    "url": "assets/js/33.f34134f0.js",
    "revision": "f886279f31435e372d88e50927838bb7"
  },
  {
    "url": "assets/js/34.7b51dcbc.js",
    "revision": "fccff4f208d2362b6cb6d1a7e00b998a"
  },
  {
    "url": "assets/js/35.501b3421.js",
    "revision": "e82e83a5319cd3c8cad58a8ae17ea99a"
  },
  {
    "url": "assets/js/36.3a5134dc.js",
    "revision": "3a73415f20ea3462d4e1128685da1990"
  },
  {
    "url": "assets/js/37.55e4f2d6.js",
    "revision": "ced1542a56d8a1377638a9a13c6949dd"
  },
  {
    "url": "assets/js/38.8e9bf1e0.js",
    "revision": "6d2fb43efaedf19c2a098e1fbacc25f3"
  },
  {
    "url": "assets/js/39.6ec6fa68.js",
    "revision": "97de27072e11c49c01c56725dd5b92ee"
  },
  {
    "url": "assets/js/4.66ae8de4.js",
    "revision": "eac1a8896e810fefa23f61f97ea350c1"
  },
  {
    "url": "assets/js/40.9eef327d.js",
    "revision": "d2da45ae7a7dd85349506ffee3b862c6"
  },
  {
    "url": "assets/js/41.c3a5d0ef.js",
    "revision": "306f6a1d0b0b33cf5440c4f11f700ee6"
  },
  {
    "url": "assets/js/42.fed2d542.js",
    "revision": "360635c454e64d25783c632f4e512e30"
  },
  {
    "url": "assets/js/43.53535985.js",
    "revision": "be92e6965246a831ad2155296366d139"
  },
  {
    "url": "assets/js/44.d01b6e6c.js",
    "revision": "3a1cda30360e176434fe64952b11d5af"
  },
  {
    "url": "assets/js/5.78ee392e.js",
    "revision": "32093022b66f64be2e47774cd63fdc5f"
  },
  {
    "url": "assets/js/6.99cfa99c.js",
    "revision": "3ee9e89091b63fb3fddeb415958c2554"
  },
  {
    "url": "assets/js/7.aea23651.js",
    "revision": "988a9da152bb7a803aa9dafad70efa28"
  },
  {
    "url": "assets/js/8.6664932b.js",
    "revision": "68c8ea72bd11775f75dbf6c194e35aa7"
  },
  {
    "url": "assets/js/9.6fb1ea2d.js",
    "revision": "921c2a63333e99bd2d280855e3f0ca17"
  },
  {
    "url": "assets/js/app.07cb0c8c.js",
    "revision": "dd3533f3829488daecc1140800b28dab"
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
    "revision": "8d65087674afa2bb6d52f248618746cf"
  },
  {
    "url": "category/index.html",
    "revision": "74e71be2d3db68a6e1ce13363f028e17"
  },
  {
    "url": "egg/index.html",
    "revision": "10763b080b1810ae09b9add8b9cede3f"
  },
  {
    "url": "electron/index.html",
    "revision": "23db369e96deb38ac3d727b3a157de82"
  },
  {
    "url": "extra/index.html",
    "revision": "e260f980beca424d5babb9dd4a20ed97"
  },
  {
    "url": "flutter/index.html",
    "revision": "8736d0e7051c94188121b76d32138cec"
  },
  {
    "url": "flutter/test.html",
    "revision": "fb379dc4745a50c81f228b3adb0b86dc"
  },
  {
    "url": "guide/changelog.html",
    "revision": "b339e45aedd33c5af630353a8bba69b1"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "d1592cbe8d2d9dd12307b5eff1eb02b2"
  },
  {
    "url": "guide/faq.html",
    "revision": "06231c2a0f9eddb59fadab86583b2e65"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b247fc66dbec7c06468bb9a194ff96a1"
  },
  {
    "url": "guide/index.html",
    "revision": "f873e20ac61fcf0678066a7ac6365b6d"
  },
  {
    "url": "guide/palette.html",
    "revision": "8ab101885a1b0a53118ae036504d8f34"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "dd287aee77c09514620df5c0a077479f"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "40f03cdefcc41635112430da0e06bf70"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "ea472b00e9b771175b79c780b8e4981c"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "4ef5f9b903c4d7f213f093f9f35a6084"
  },
  {
    "url": "index.html",
    "revision": "08b039869cf383920c8910516a58e06a"
  },
  {
    "url": "js/index.html",
    "revision": "301a83608840580a1e4a08ef26428dd2"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "9ea9d49b631e79e361f4a5964044444e"
  },
  {
    "url": "notes/brew.html",
    "revision": "4c5054a935e9aef6764cb96620653ed4"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "a32502af74320aac77f7f5f511931b59"
  },
  {
    "url": "notes/git.html",
    "revision": "8d9b4f1c284c8edbe467e62cebe94a59"
  },
  {
    "url": "notes/index.html",
    "revision": "6ad62ce59970ebcad9f94f268d8177eb"
  },
  {
    "url": "notes/nginx.html",
    "revision": "16feb7e3914929e78bbeb4639b1f2bb7"
  },
  {
    "url": "notes/node.html",
    "revision": "df5c5a2de6e5c68f2b5b23d83d270066"
  },
  {
    "url": "notes/npm.html",
    "revision": "b8103e47cbc510bb687390a8a66b8396"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "011cd0315ba7400e1068a4ad6dbe5a5d"
  },
  {
    "url": "notes/vscode.html",
    "revision": "024ee2ebdf718f020db04092d44db62b"
  },
  {
    "url": "plugin/index.html",
    "revision": "6492f6133a683f2a757107c261f2d222"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "c3aafdf3afba7969b354da30e3f46845"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "2b599a5b54d277e7dcf38ee1882dc514"
  },
  {
    "url": "tag/index.html",
    "revision": "907990475598059f64c583ef978a2094"
  },
  {
    "url": "uniapp/index.html",
    "revision": "ad4bf9362de6270518b09089e9cec695"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "1a8fb1f55c654ac52b95b4cb6b137139"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "8a1025122154022e875d60215597c3e2"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "8a128ffe386dedf3c925ff0e17b0b0d5"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "a2f0be19ecfcb3553a5aa1c4d95a21ed"
  },
  {
    "url": "Vera/index.html",
    "revision": "50a232895936dc8d1448fb44fa35ff0d"
  },
  {
    "url": "website/index.html",
    "revision": "acc88389583ef74611b1700191aae2e6"
  },
  {
    "url": "website/package.html",
    "revision": "9e22eb2a92aed4ad452831281a1cdb46"
  },
  {
    "url": "website/rearend.html",
    "revision": "17d35a7602a65d2da0ffc2bc4b126dba"
  },
  {
    "url": "website/tools.html",
    "revision": "cbff2b59f0942d4c75cdedb8f0b5f268"
  },
  {
    "url": "website/webclient.html",
    "revision": "ad5c2e5240e57d1d6a9d245ca53b2515"
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
