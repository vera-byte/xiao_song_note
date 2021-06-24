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
    "revision": "30a346e938bdb35f4ebc1941d2442c3b"
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
    "url": "assets/js/18.1e5f46e7.js",
    "revision": "26b8c9e89149181e2f89fd6644d6aa8b"
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
    "url": "assets/js/21.bebb868a.js",
    "revision": "05ac28efebbbe143b042fe74d40e7a2c"
  },
  {
    "url": "assets/js/22.ba4c4f9b.js",
    "revision": "e9036408f608783a7effa2db1b890256"
  },
  {
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.1036e2f4.js",
    "revision": "63b50e77d5442ca4c5f7a8cfc891be2e"
  },
  {
    "url": "assets/js/25.b1030395.js",
    "revision": "ac635e5da571b6625df3e06a51a600fa"
  },
  {
    "url": "assets/js/26.ec3fa656.js",
    "revision": "20b6995159799a9f0fe978ae44c4edb0"
  },
  {
    "url": "assets/js/27.20bc908d.js",
    "revision": "535800559ef806926e1ffbcdfab07d96"
  },
  {
    "url": "assets/js/28.8d23097d.js",
    "revision": "969ea5a81dd5d386b1aadedf9dba511d"
  },
  {
    "url": "assets/js/29.6e4b4355.js",
    "revision": "83c1ff7a2cac99e410b77445bd645547"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.bd0b78a0.js",
    "revision": "c7791bd26430c76dbcb1380646fb72c6"
  },
  {
    "url": "assets/js/31.7184f202.js",
    "revision": "fdf7b1f2389696ea24d95fd00dd8efe8"
  },
  {
    "url": "assets/js/32.33673bea.js",
    "revision": "d487e7f62507908a7463eef39ef871bb"
  },
  {
    "url": "assets/js/33.aba0239e.js",
    "revision": "47f2613e3beafc8de3275adac4187750"
  },
  {
    "url": "assets/js/34.55f0b874.js",
    "revision": "06ee34e10115c0cfdfe400c0e5845f57"
  },
  {
    "url": "assets/js/35.31fe1265.js",
    "revision": "ea0f6e27c4d428981039dea49af1f8f6"
  },
  {
    "url": "assets/js/36.bf4840f4.js",
    "revision": "155ae800508790d58fe4085f7f00d5c6"
  },
  {
    "url": "assets/js/37.c7b4b4ad.js",
    "revision": "cd2fe9cecbe8da20463f34b3a7864baa"
  },
  {
    "url": "assets/js/38.893ae15a.js",
    "revision": "b2dc579511f26fb2011f00ae67794401"
  },
  {
    "url": "assets/js/39.28709788.js",
    "revision": "1fa81edcb3e39181851d434ace4f3d01"
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
    "url": "assets/js/43.10edf05c.js",
    "revision": "2140a65224dc48d1e3edcd3e8a6734c5"
  },
  {
    "url": "assets/js/44.8c32db2e.js",
    "revision": "dbdb82e190889d5db980eb936b33c580"
  },
  {
    "url": "assets/js/45.030cee93.js",
    "revision": "9de9416699a2d8393b93e479420237ef"
  },
  {
    "url": "assets/js/46.3003f62d.js",
    "revision": "2e18bc25a63d540e8aee70733a9c266b"
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
    "url": "assets/js/6.81e9b9cc.js",
    "revision": "c5ccace3676910b6719331448fe82328"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
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
    "url": "assets/js/app.f227f803.js",
    "revision": "021c12fab7ed5b8da7337471dfdfd1ca"
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
    "revision": "d3f1b482561679e5dc6ccd72e2b95778"
  },
  {
    "url": "category/index.html",
    "revision": "2ebf725e993774b29d3e0851ec307cb4"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "81f6904068bfc303add6d0d3afd93b02"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "5bb1bfc34d263edcdbecaccc0f06f36b"
  },
  {
    "url": "electron/index.html",
    "revision": "21291aae762f51b40a33c51c168cadfe"
  },
  {
    "url": "extra/index.html",
    "revision": "95831f59507cdc7d5d5d0f510c7849c9"
  },
  {
    "url": "flutter/index.html",
    "revision": "3dca2da47caa420c29bdba58fafb7048"
  },
  {
    "url": "flutter/test.html",
    "revision": "5f0e2ecefeb5d235b236c82f47845272"
  },
  {
    "url": "guide/changelog.html",
    "revision": "287dd270ac8d2e6d810fa529d9ec2e08"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "8e6a5b5165e493663745fbed2708ff5f"
  },
  {
    "url": "guide/faq.html",
    "revision": "5bf595e8701e3d9f13b4806bbdf67ec4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b78ddf531b3714e31071c0fc755cb3a0"
  },
  {
    "url": "guide/index.html",
    "revision": "e33debc48b897a8534b55233d64e9cc1"
  },
  {
    "url": "guide/palette.html",
    "revision": "47efc2e8daa5f3e6b532694a5fe710ff"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "254a559ae30ea91fe64feee3e462948a"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "9528801661bc96e0da621765cc72e6d6"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "9b2a4c417463ebb7f2b8c0f4a7e1b91c"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "4f116ff3ccec7a1780c6b61e4060298f"
  },
  {
    "url": "index.html",
    "revision": "43b8cc067fb3d6c4ce5498932b3e6647"
  },
  {
    "url": "js/index.html",
    "revision": "b835474d500b7f1e7d820a6ea8726885"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "ac38dba4d5576682f80ad08c60f9ba1f"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "13ca3a0c8f73e8a4433c57a85f04af1b"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "f932343d7a27b9e3a559f02111fd4d9b"
  },
  {
    "url": "midway/index.html",
    "revision": "a4a1e0dfc7e933c3a27d4dabb3bc8f19"
  },
  {
    "url": "notes/brew.html",
    "revision": "962a3ab9967bc2dd4b36bb821d68d6ba"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "8dca7a0ed2adff029a9ede1fb15d577f"
  },
  {
    "url": "notes/git.html",
    "revision": "748396cd237ae6c2e1c6bef1e00a613c"
  },
  {
    "url": "notes/index.html",
    "revision": "e708d29e918a84f8a4001783c0a61dcb"
  },
  {
    "url": "notes/nginx.html",
    "revision": "8836326eb1436d47527f4b803d52a568"
  },
  {
    "url": "notes/node.html",
    "revision": "3a3a326ddbf5ee84011a310dd366dee7"
  },
  {
    "url": "notes/npm.html",
    "revision": "7364007198dbd3f24dcf5e4b9aec2d0c"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "30f954e31aca409e6fcaf336706d43eb"
  },
  {
    "url": "notes/vscode.html",
    "revision": "797925132c0aeeb03ef2a7b9ee960036"
  },
  {
    "url": "plugin/index.html",
    "revision": "b4ff7c47afe45560803cde0940226da5"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "98caee442b966efcd56d784729ed7819"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "3590854969406341a27e4ab9785f526e"
  },
  {
    "url": "tag/index.html",
    "revision": "2fed7884b985ffbaa5477c62e60a1932"
  },
  {
    "url": "uniapp/index.html",
    "revision": "850d0327c97d83ed7da8eb205d3384a8"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "7ccb17dc6562166536a15143f183741f"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "7376a1b6a0cfe9ad99e4f0531c46c904"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "f42c4ae27b472fa792358bfa92148cb1"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "3cad2f4f90cfe46e910ce67fd1503dc8"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "20d847874cb6916d794432bd7190bb9e"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "a5652ceb022975fc8938874c5505b638"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "ce38d0f7b4eebfec3bdc065337ba4cf5"
  },
  {
    "url": "Vera/index.html",
    "revision": "66e8011b97f76e5ae24b779a650cfb0a"
  },
  {
    "url": "website/index.html",
    "revision": "17ff59530f0f3566570e0d27d2becd1f"
  },
  {
    "url": "website/package.html",
    "revision": "c5a556d342d497cdb74f20e440d0ce70"
  },
  {
    "url": "website/rearend.html",
    "revision": "98244e15d95d3b72f3f55299b7a31323"
  },
  {
    "url": "website/tools.html",
    "revision": "59c7f18f7e954f274dd751ce737897ef"
  },
  {
    "url": "website/webclient.html",
    "revision": "85a149f76df59ebd909824ce4da68d30"
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
