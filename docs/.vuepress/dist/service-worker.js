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
    "revision": "350c0a3d744082a38b1f0fc8ad994ad2"
  },
  {
    "url": "assets/css/0.styles.c02df9c9.css",
    "revision": "f9aa362c13a6afb51eaad8fc37598686"
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
    "url": "assets/js/10.33e2e5cd.js",
    "revision": "fdd96bf4a475b564699d3363bd3d9a01"
  },
  {
    "url": "assets/js/11.072c2c4f.js",
    "revision": "bd01abcc43b9edbb7fcf9d0e520ea201"
  },
  {
    "url": "assets/js/12.46adf2d2.js",
    "revision": "76332aece19302f47abf718c0341be1f"
  },
  {
    "url": "assets/js/13.fa5e0bc7.js",
    "revision": "6de60407b596bdefe038d1dfc5c51a94"
  },
  {
    "url": "assets/js/14.d8ea1af0.js",
    "revision": "446025afd89ba81ba7cbe5844adbcd27"
  },
  {
    "url": "assets/js/15.5f6c4978.js",
    "revision": "2c02c368b76f737a58fb5a0fc39a5001"
  },
  {
    "url": "assets/js/16.c23c1485.js",
    "revision": "826129e0053ccdc900e581b21cae76da"
  },
  {
    "url": "assets/js/17.2d035c9d.js",
    "revision": "19f1f5d041648f55a0deb60c474bf8cb"
  },
  {
    "url": "assets/js/18.c9b5bfb6.js",
    "revision": "0b78e659300fa9e222b4a948526cb8a4"
  },
  {
    "url": "assets/js/19.e4f55916.js",
    "revision": "50b12cf423c8fddfad5225ce9a14f20c"
  },
  {
    "url": "assets/js/2.60c139d6.js",
    "revision": "7f1482f3782f9ae1111f3793f8f6effb"
  },
  {
    "url": "assets/js/20.fb9bc978.js",
    "revision": "f6444af01be5d414cbe25594ff9a8053"
  },
  {
    "url": "assets/js/21.89e2d232.js",
    "revision": "6337d995ba6c072c4348fd25f4678315"
  },
  {
    "url": "assets/js/22.7150d3ba.js",
    "revision": "db075267120435f77d66b690e53c576f"
  },
  {
    "url": "assets/js/23.c8514928.js",
    "revision": "abf09285451180b2e200e31dad71c9fd"
  },
  {
    "url": "assets/js/24.82e3f245.js",
    "revision": "65cd01d63b2b740c6e202d821750028c"
  },
  {
    "url": "assets/js/25.529a43da.js",
    "revision": "e58552326557e594386193251c58a280"
  },
  {
    "url": "assets/js/26.953275b3.js",
    "revision": "e1f4fda790540a1f26e8a63bea86a5c1"
  },
  {
    "url": "assets/js/27.3385debc.js",
    "revision": "f7d6776614f4d7a3ab9745283925517d"
  },
  {
    "url": "assets/js/28.1fb8589d.js",
    "revision": "0bc7b59c8ecb8c9f50f13a8ab2d17083"
  },
  {
    "url": "assets/js/29.2177b69d.js",
    "revision": "f90e9982fe567cffa220c5a707912531"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.f2c4786f.js",
    "revision": "839a2a18126697584d74b5d9cdf6e556"
  },
  {
    "url": "assets/js/31.cdf43cae.js",
    "revision": "4827272c63668706815f0316d97bca79"
  },
  {
    "url": "assets/js/32.d4298c1c.js",
    "revision": "05da97462c3d75929728ca5556121903"
  },
  {
    "url": "assets/js/33.c7ba0c1a.js",
    "revision": "6c6ca1b064d80a10220c72547005257a"
  },
  {
    "url": "assets/js/34.2e30dcc6.js",
    "revision": "a57136d48d6495fb4e6fe43bab9ba22e"
  },
  {
    "url": "assets/js/35.96e16542.js",
    "revision": "eca87373db71275cfe4bb2a893af2cb4"
  },
  {
    "url": "assets/js/36.d7c69215.js",
    "revision": "8ba2f205cf0f6f833252b184f9443322"
  },
  {
    "url": "assets/js/37.680b7b24.js",
    "revision": "75010323f39965539a9e8f4b2d0bf375"
  },
  {
    "url": "assets/js/38.259005d3.js",
    "revision": "c3d42f42536db82e7b27e2ff8065c7ac"
  },
  {
    "url": "assets/js/39.1ba391b9.js",
    "revision": "a09babdb228ca5d2b3341a2a0eff29de"
  },
  {
    "url": "assets/js/4.7fe303c1.js",
    "revision": "f9754f1c151d7e8bdb7789997d16cc5d"
  },
  {
    "url": "assets/js/40.52f796ea.js",
    "revision": "509ff2fb432bb4dd556c174ff1cc965e"
  },
  {
    "url": "assets/js/41.d57d0d35.js",
    "revision": "af2d18d010c5530e022e267fb294a7a7"
  },
  {
    "url": "assets/js/42.a5bfe4f1.js",
    "revision": "0f692bba9c321a6be24b7d89dd5f639d"
  },
  {
    "url": "assets/js/43.161c0c63.js",
    "revision": "3e8eb864276948b549b77953c89fe917"
  },
  {
    "url": "assets/js/44.94d249d2.js",
    "revision": "8d3bac3df908060af271f821d557b6e2"
  },
  {
    "url": "assets/js/5.6f496986.js",
    "revision": "c0cfcd7fb7c237e41a93601a2e0349f6"
  },
  {
    "url": "assets/js/6.0ac6ea6a.js",
    "revision": "311d40135920987b2cbaa6250e39cc0f"
  },
  {
    "url": "assets/js/7.873e01e3.js",
    "revision": "fa3a3f54d262b91a5f206f5ff361cca7"
  },
  {
    "url": "assets/js/8.401a05c1.js",
    "revision": "bca557ef158dbdbe8a37163ebff766c3"
  },
  {
    "url": "assets/js/9.a812423c.js",
    "revision": "588b0b868f196bbe9e4faa0f8ce58ef0"
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
    "revision": "a2d0ec3a4cdbc681cdad7b3175e1c5ab"
  },
  {
    "url": "category/index.html",
    "revision": "a20810bcd205efd9b1662f02e90c34b7"
  },
  {
    "url": "egg/index.html",
    "revision": "9a24e284b106f97ecce33f420cef0221"
  },
  {
    "url": "electron/index.html",
    "revision": "308e609615fac5529b97df8a156e1756"
  },
  {
    "url": "extra/index.html",
    "revision": "ae10969587c46254d2e54c1d30119490"
  },
  {
    "url": "flutter/index.html",
    "revision": "c40cb7bdd2e9262c13fa22be50eeeee0"
  },
  {
    "url": "flutter/test.html",
    "revision": "2f696396e4bb979febc69f9aaa7a36e5"
  },
  {
    "url": "guide/changelog.html",
    "revision": "626298ffddb639fe561102888b6d4216"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "0533cd55e96fbebd1ef415947a3ac68e"
  },
  {
    "url": "guide/faq.html",
    "revision": "133b97a69896af25e13c8540da170ae7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3e1be7761c689de549a826bcc6b276f2"
  },
  {
    "url": "guide/index.html",
    "revision": "f7133b31ac01f4995a7f3e25a5bd817e"
  },
  {
    "url": "guide/palette.html",
    "revision": "5608f94ea86b9923409f5e8d99fc9aab"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "8a77af0562f4ce1977d8f305642545d5"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "957301b15f250ff3d6a9a04febd0b068"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "bffa45e68d3b09ca352192d2bc1fe76f"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "d82385a9adeff548c8c8cf31789a622f"
  },
  {
    "url": "index.html",
    "revision": "b67e7f6eb470c5be9b833112570019c6"
  },
  {
    "url": "js/index.html",
    "revision": "3b21d39a1d7a68fcecdf7fe4b0293e1a"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "a19a5a8356c7b3dc57437d932b4ada3f"
  },
  {
    "url": "notes/brew.html",
    "revision": "5f6cec470bd3a395690a37f3ad5783ae"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "692a285fd1e06ca5312d065844264b48"
  },
  {
    "url": "notes/git.html",
    "revision": "969d918f73fbc6325d3eeae516374244"
  },
  {
    "url": "notes/index.html",
    "revision": "4ee048e8f372f9ffe5c0866d512679df"
  },
  {
    "url": "notes/nginx.html",
    "revision": "3f9f98137de2ed11980fcbf8734cb3ad"
  },
  {
    "url": "notes/node.html",
    "revision": "4a1ef63fb40a9f3abe23aee966597e6a"
  },
  {
    "url": "notes/npm.html",
    "revision": "357ab24ddb0929397007239d4c421a9b"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "ed741998c91002637a90f4b3c85a0336"
  },
  {
    "url": "notes/vscode.html",
    "revision": "e4fdf905eb7d92236c8d4d8489dbd168"
  },
  {
    "url": "plugin/index.html",
    "revision": "179f4ab414d03fdc02f14026c4b92ecd"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "b08afb3f49002f1d091ed0a4c6fad7e7"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "b98e27cdc6a509ea1fb0030439404f4a"
  },
  {
    "url": "tag/index.html",
    "revision": "6ff692ce74c3fcf434378e83f410676c"
  },
  {
    "url": "uniapp/index.html",
    "revision": "72f082520648068cc10cf31dc6e812b4"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "b188a0ab8ea43f6a32688efd08f38961"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "cee89b6d4fcd66bb6c071c0b74e336a0"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "7c6c193996fa7b70dca7e8c69ca5ba23"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "7e97609518abb8e27da3423b83ec8f7a"
  },
  {
    "url": "Vera/index.html",
    "revision": "a03befe4d4b9186fdbaefb7014768ad0"
  },
  {
    "url": "website/index.html",
    "revision": "82ce3443babb84bc6c54bce4f5141786"
  },
  {
    "url": "website/package.html",
    "revision": "0ef0fc086f4373b458e842aafdc20b8b"
  },
  {
    "url": "website/rearend.html",
    "revision": "086dc7d8d969a1bb7d18ab316e452b74"
  },
  {
    "url": "website/tools.html",
    "revision": "d3592211428bf0836ff868ca420e5ed5"
  },
  {
    "url": "website/webclient.html",
    "revision": "2b56f6126165ce13b69044be652a0662"
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
