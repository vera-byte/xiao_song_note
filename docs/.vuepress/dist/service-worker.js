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
    "revision": "159f005726d392b7567ef4c96b88da95"
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
    "url": "assets/js/16.9d1e6ecd.js",
    "revision": "47ea104990ae2814f47090c9b9c7d4f6"
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
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.8441aad7.js",
    "revision": "f8198bf2bc1d80247992f75c6c71ed8f"
  },
  {
    "url": "assets/js/25.749cf2b4.js",
    "revision": "5d5e1a7d031b0e1e0ea3ed2b8446566f"
  },
  {
    "url": "assets/js/26.4039aa9c.js",
    "revision": "e75fd855ab036adba194404273320e7e"
  },
  {
    "url": "assets/js/27.e08fe835.js",
    "revision": "6c8b1305ad3201826e80b815bfb1ea34"
  },
  {
    "url": "assets/js/28.22827e9e.js",
    "revision": "a14e7434b630f303af96960543c89333"
  },
  {
    "url": "assets/js/29.cda15309.js",
    "revision": "0ad98f9ed9488dd773d228627c9a1ad7"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.77447ff1.js",
    "revision": "aed784a0527954f40912fa01866692f6"
  },
  {
    "url": "assets/js/31.7184f202.js",
    "revision": "fdf7b1f2389696ea24d95fd00dd8efe8"
  },
  {
    "url": "assets/js/32.9cd131ad.js",
    "revision": "b97f54e4cd160140052a0345370183d9"
  },
  {
    "url": "assets/js/33.6eaf8365.js",
    "revision": "f1119f4aab19e5fb1a3b4817a17dd3db"
  },
  {
    "url": "assets/js/34.5a8b9907.js",
    "revision": "def085c2b9fc7b79c89704fa25a9bf29"
  },
  {
    "url": "assets/js/35.1ca1c767.js",
    "revision": "853d492f5964aff103938c0e21166ecf"
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
    "url": "assets/js/39.ca2de2de.js",
    "revision": "213a80dc7554cdf3d64eb064efd355d0"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.cb04a7a0.js",
    "revision": "a2a6c094ee666c9c3dd0b367d5b9ff51"
  },
  {
    "url": "assets/js/41.af51f17e.js",
    "revision": "da1a80ef0a433d72ebdd54035b2d8a4a"
  },
  {
    "url": "assets/js/42.929e3f7f.js",
    "revision": "294ef23ecbb7516248b28e86e6d95c77"
  },
  {
    "url": "assets/js/43.10edf05c.js",
    "revision": "2140a65224dc48d1e3edcd3e8a6734c5"
  },
  {
    "url": "assets/js/44.b4ae5b37.js",
    "revision": "b1479d8ccd2b9474957416a2b9ca6184"
  },
  {
    "url": "assets/js/45.030cee93.js",
    "revision": "9de9416699a2d8393b93e479420237ef"
  },
  {
    "url": "assets/js/46.b50bb026.js",
    "revision": "b0147551cd0374aef86ec2905cf32bc2"
  },
  {
    "url": "assets/js/47.25daa5c1.js",
    "revision": "6fac092352dc9ef6a3f41a44c688d573"
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
    "url": "assets/js/7.19cab9a4.js",
    "revision": "7c466c772b3ed5e39f0f81cf2cb86cdc"
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
    "url": "assets/js/app.334f5fda.js",
    "revision": "e642a532f8f4e1bce6abc78d1ee310e7"
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
    "revision": "dd4c4bc96676686992a9d101e16eef4f"
  },
  {
    "url": "category/index.html",
    "revision": "0ca5a0b82df8b09a7f45ecb28699cfb8"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "f5e4e12343acdcd91c2acee19293ae38"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "798aff2e9927867b6dff28599aa239bd"
  },
  {
    "url": "electron/index.html",
    "revision": "60fddace47edfd1a7d8336f122ecaf8b"
  },
  {
    "url": "extra/index.html",
    "revision": "c2469ac47d30a1b35009b8c32cad7012"
  },
  {
    "url": "flutter/index.html",
    "revision": "a1ec797115004830a9c0af32da76e04c"
  },
  {
    "url": "flutter/test.html",
    "revision": "bacbc367f34f50f5ae1108d5e9f9f9ac"
  },
  {
    "url": "guide/changelog.html",
    "revision": "e52341fd9cef09f1f16217196c8c5000"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "5c89c75d59234934afb29188d82e9fc6"
  },
  {
    "url": "guide/faq.html",
    "revision": "9ed9cc567afa3cad963741b2ceaba7b1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "fb7c41909464926f5780a3e1455452f0"
  },
  {
    "url": "guide/index.html",
    "revision": "50a782381c807f7274dda92bfb093d20"
  },
  {
    "url": "guide/palette.html",
    "revision": "c836bccc9b364621a3038c61350a1fb4"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "e8d0a37d603ed1e5eed7ab19b1d390e1"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "73e37fc50e3c0e6bd404e36364ead10c"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "bd6a93d5c339a7b3d4f553ac58e32a64"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "6053f6f931602769212513bcb105798c"
  },
  {
    "url": "index.html",
    "revision": "deb518921c9e231d996e1b058250bdcb"
  },
  {
    "url": "js/index.html",
    "revision": "a29079431dd6975254104ba2d769ba11"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "335d60044590dcebaf5cf35e5988f7ed"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "609ccd670215d7ff6057400f0c5dc01d"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "ca7879a03130a9c6f0a09c81829d1af3"
  },
  {
    "url": "midway/index.html",
    "revision": "19608e6c5283d30f5b6fb0b824054efb"
  },
  {
    "url": "notes/brew.html",
    "revision": "1e0c7ebcede996b1bc404cceb02003b5"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "d4e16412d1318b7bef8f682645e4e07c"
  },
  {
    "url": "notes/git.html",
    "revision": "3623bfd8dd8c8b94d20101684e89dd74"
  },
  {
    "url": "notes/index.html",
    "revision": "08e0a696c038612f403cf06d559e4483"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a95ae78d1dbc1f56aa9feb3acc3e0453"
  },
  {
    "url": "notes/node.html",
    "revision": "bb2ad655ec5c07dd8b40e1f259332aa6"
  },
  {
    "url": "notes/npm.html",
    "revision": "63dd6696b8ef70405d202932705b47dd"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "5c542a625122a1818555bb7b93763bcd"
  },
  {
    "url": "notes/vscode.html",
    "revision": "7511e8286e8c96a0dfd058ac99581399"
  },
  {
    "url": "plugin/index.html",
    "revision": "874806d0f31822068320e357712df7ef"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "95c9e59c0ecb20fe5aceb8a0082a38ad"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "460a9ca245663060d87a757743843b88"
  },
  {
    "url": "tag/index.html",
    "revision": "a9a9007233092c57f4936dd882c77f8b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "74a3ccbee5671bb3edefa23e89609151"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "b0ac638747cb3d0bb422855d2fc97b6c"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "9ad9bb2886d22f7a2c3845c0638351a2"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "ffa2a9371e2b054fabe5b4ccbcf44192"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "9ba83907acb0094df9a9d5ea71313ebd"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "df7f301666a5c8400c97b195c22f02b0"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "e664f678ce3d75ee3f6e218e1ab38e9d"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "2d604f2a62c58cb16010c1c40dfd192b"
  },
  {
    "url": "Vera/index.html",
    "revision": "9056e53062c4081009c7dbff1df4e2af"
  },
  {
    "url": "website/index.html",
    "revision": "6d529be435854692399fa593fce4c9ce"
  },
  {
    "url": "website/package.html",
    "revision": "c02769865624a02bd05251202aae4b5d"
  },
  {
    "url": "website/rearend.html",
    "revision": "053debd6bec4ba3aac26923eb6fe3f9c"
  },
  {
    "url": "website/tools.html",
    "revision": "505adc37f6f965abf5c13696b199c2af"
  },
  {
    "url": "website/webclient.html",
    "revision": "4cd5d7a6f49452a16b519e83c92f5ddc"
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
