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
    "revision": "6c3e8ff03bbfa6acc09b0f4f6fc6b801"
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
    "url": "assets/js/14.e171bc2d.js",
    "revision": "da57326a317f2736c4f5db5112689d9f"
  },
  {
    "url": "assets/js/15.37f4e7ce.js",
    "revision": "218b7b604efb344f90effeeb3fa46759"
  },
  {
    "url": "assets/js/16.a36d26f0.js",
    "revision": "d5e97f199bb4ef24bf02ae662be75851"
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
    "url": "assets/js/21.b78a8066.js",
    "revision": "9aba97eb1678d2a9dbac7aafadafcd2f"
  },
  {
    "url": "assets/js/22.afc333d7.js",
    "revision": "ba8d81892ad3cca45ad6f4b42e0f2857"
  },
  {
    "url": "assets/js/23.9f82479e.js",
    "revision": "ea8083bc7052a9970e32b426c85daf01"
  },
  {
    "url": "assets/js/24.1036e2f4.js",
    "revision": "63b50e77d5442ca4c5f7a8cfc891be2e"
  },
  {
    "url": "assets/js/25.2ebab503.js",
    "revision": "3baa0ff3fc3dc00de4a0cba817e98cd2"
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
    "url": "assets/js/28.6f5600c4.js",
    "revision": "c28a384b890e5131d9e411ba0e125619"
  },
  {
    "url": "assets/js/29.89aba866.js",
    "revision": "e3c1314eeb352d6d8216dc83e17985ca"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.4bde741c.js",
    "revision": "3e14948355557fbcdea579a1c747c085"
  },
  {
    "url": "assets/js/31.334bc8bb.js",
    "revision": "b9f1548663d691af2abb1dc0ef8f30cf"
  },
  {
    "url": "assets/js/32.0343a836.js",
    "revision": "c2314445161fc198deab6c30eb072ab3"
  },
  {
    "url": "assets/js/33.2cce1699.js",
    "revision": "b015bad31b8cd7e510a52629dc74449e"
  },
  {
    "url": "assets/js/34.d88cba63.js",
    "revision": "8de3a5d6557830076e2d5810bda42f82"
  },
  {
    "url": "assets/js/35.61236f49.js",
    "revision": "e42490543aaeb6d2ab7102e71c74d19d"
  },
  {
    "url": "assets/js/36.d7f8e603.js",
    "revision": "ecf91f4a22612fc5cd84164da7f2f013"
  },
  {
    "url": "assets/js/37.6c8a5f43.js",
    "revision": "e826e38666b2d8f8aee146614106d6f4"
  },
  {
    "url": "assets/js/38.f1d34e96.js",
    "revision": "c6670067bf3bc1d0d7132f570b51dfb4"
  },
  {
    "url": "assets/js/39.73eac3a1.js",
    "revision": "e4502d4ec06621d8bfe71ce14c8da10f"
  },
  {
    "url": "assets/js/4.370c35a0.js",
    "revision": "7680c25c9180ae6be0be519a44241235"
  },
  {
    "url": "assets/js/40.a1091ca4.js",
    "revision": "79f1765f020552c20741fff0984f70fe"
  },
  {
    "url": "assets/js/41.cc0d4695.js",
    "revision": "5b40e78f4264c7730e8d0d57b966279d"
  },
  {
    "url": "assets/js/42.da5af008.js",
    "revision": "618480bb1e78ccff07d4e46c1f33982e"
  },
  {
    "url": "assets/js/43.b4a949a0.js",
    "revision": "66a5a403e13402d566b1cea08f8ab930"
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
    "url": "assets/js/app.934e29b6.js",
    "revision": "70e77f8187c33fafc39be21ad5f53edc"
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
    "revision": "44d687673f4452a3c1c79c8da8d63e75"
  },
  {
    "url": "category/index.html",
    "revision": "b4f6eac9ca3b64fa3d0f071991c830b2"
  },
  {
    "url": "egg/index.html",
    "revision": "db36278eabcdd7cdc3a31641d9a5ad45"
  },
  {
    "url": "electron/index.html",
    "revision": "58e5557645f95a950d1ae1a03a1a9ba9"
  },
  {
    "url": "extra/index.html",
    "revision": "054b2ab0692e6591a8ea65720d762708"
  },
  {
    "url": "flutter/index.html",
    "revision": "42d4f04c11149ad24c31623aab363f50"
  },
  {
    "url": "flutter/test.html",
    "revision": "d2b83b080487189027954b44f53b0580"
  },
  {
    "url": "guide/changelog.html",
    "revision": "e7a49101353928500c578cf7341c9da4"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "ccf58a9bf217e25adccfe3121c9a5c29"
  },
  {
    "url": "guide/faq.html",
    "revision": "02f0db70463940af4a0d1b1e3bc23b38"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ec31ae51796c65245d7fa0a6a338e803"
  },
  {
    "url": "guide/index.html",
    "revision": "7aba1772791acb666f5a30a9a5f0376d"
  },
  {
    "url": "guide/palette.html",
    "revision": "b2c039101a93eb553b73ce9da1391da6"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "3aa471bc57d4b0e7896439f54d809750"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "f4146b0e990f3fde5cc2b6e67db10914"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "c429d1037e53504896c191c9eda90bca"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "aea8f4b6f79643073823299d765d88fd"
  },
  {
    "url": "index.html",
    "revision": "76963d7e642c8350454e52eb187e2dd4"
  },
  {
    "url": "js/index.html",
    "revision": "2174db078401a7610c798166161cc81f"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "621eec0512a4ad195b62a679b9aa9154"
  },
  {
    "url": "messageboard.html",
    "revision": "203b5cc23c119a1623d2018c631e3a6c"
  },
  {
    "url": "notes/brew.html",
    "revision": "412b3b2835743c1da54d4ea51f8dfdc0"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "5cb7de3e652690a3c57e886c4d9fba86"
  },
  {
    "url": "notes/git.html",
    "revision": "19d5551d354caac62ce4a474383979d6"
  },
  {
    "url": "notes/index.html",
    "revision": "897f69162db390d177a3e4f4a5800ec4"
  },
  {
    "url": "notes/nginx.html",
    "revision": "7d097ab59e6870c7d561bd940aaf6319"
  },
  {
    "url": "notes/node.html",
    "revision": "e64735b2e3c955217a59fd2f83cbcddb"
  },
  {
    "url": "notes/npm.html",
    "revision": "290746028658c4ed915cd6234305a0e4"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "c5f3ceca5fccee1e4f7d6d48008dc8ab"
  },
  {
    "url": "notes/vscode.html",
    "revision": "01b5b98287002df1ceddafd8f46f5e15"
  },
  {
    "url": "plugin/index.html",
    "revision": "db5992a3af61e533c657c02c2e63cdd3"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "31bde973d2403bc3b12fc45e7d53aca9"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "e5e1259a24aebf57cbbdb819f7d3d021"
  },
  {
    "url": "tag/index.html",
    "revision": "51d6c2d8004241b62101d931addb05f8"
  },
  {
    "url": "uniapp/index.html",
    "revision": "73c0994f79efc4ccabb5b25ae1c1ce20"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "c925e0d2286a490bc2d0b09bb52d3cae"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "a7c0fd81f67274182b2b12ef3c76d9fa"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "e14f797b54e7a46221e6a7bf5fd025c4"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "b7c78435dfb756c3323d5bf8d08d0b6b"
  },
  {
    "url": "Vera/index.html",
    "revision": "73c1c98e1fe059342d78beb75a737535"
  },
  {
    "url": "website/index.html",
    "revision": "5a98b47a40f0afb01cb6c8be74026083"
  },
  {
    "url": "website/package.html",
    "revision": "2575cf63313d184c3e1699daf95c9bff"
  },
  {
    "url": "website/rearend.html",
    "revision": "666876c666385e9a440f4a4bed493c1c"
  },
  {
    "url": "website/tools.html",
    "revision": "f6b53c3682f642ccb069623dd5482a13"
  },
  {
    "url": "website/webclient.html",
    "revision": "086472055e499c53794fede919765945"
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
