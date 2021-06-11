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
    "revision": "cb52d5f8e016229da134061d48ea524f"
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
    "url": "assets/js/12.4f0b7e76.js",
    "revision": "53e8ba4b45788b3b2ccec623b938a401"
  },
  {
    "url": "assets/js/13.775076e6.js",
    "revision": "1568b54c1e277e73b3c9137527b158b1"
  },
  {
    "url": "assets/js/14.6abf91c3.js",
    "revision": "8c72c650afee30976750a60554dbae2e"
  },
  {
    "url": "assets/js/15.115c8dbf.js",
    "revision": "07ee7c3489b4b0b0800a3908af75efca"
  },
  {
    "url": "assets/js/16.c23c1485.js",
    "revision": "826129e0053ccdc900e581b21cae76da"
  },
  {
    "url": "assets/js/17.d42610e0.js",
    "revision": "d8edb7bf101b57149204017204f21d9a"
  },
  {
    "url": "assets/js/18.686d50d2.js",
    "revision": "d785fa2a9dc8e49c865cf37499bbda7c"
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
    "url": "assets/js/21.1e29291a.js",
    "revision": "e58fc3eed54aebca5331df36c1ad5870"
  },
  {
    "url": "assets/js/22.cbe08c2b.js",
    "revision": "bd6991a9ed6796278df04d855ddc6117"
  },
  {
    "url": "assets/js/23.0c7ea5ea.js",
    "revision": "91ace1a0478da787b6e1826018c22773"
  },
  {
    "url": "assets/js/24.fc694eab.js",
    "revision": "da8327b9687df7f7c3c0e87910c0f9a8"
  },
  {
    "url": "assets/js/25.0ce35d66.js",
    "revision": "a4f07c98ffc4ea71d29984254401db6f"
  },
  {
    "url": "assets/js/26.2fa918e3.js",
    "revision": "0ae47419ffe9af8eb9f70e0747ef4636"
  },
  {
    "url": "assets/js/27.70b08efb.js",
    "revision": "2360d9590dc0bbafd01aa96ac06cd114"
  },
  {
    "url": "assets/js/28.a54b4b0f.js",
    "revision": "96a1328e845d3d66e423d1679b43f5a3"
  },
  {
    "url": "assets/js/29.0e3e5340.js",
    "revision": "cb8b13452991a41f44dce8e9d88f49e2"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.4e26feeb.js",
    "revision": "313a0a6b0d4972da9b006ff0c4f14c56"
  },
  {
    "url": "assets/js/31.56771ec1.js",
    "revision": "1ed3921f586a29cb8272199daef8654f"
  },
  {
    "url": "assets/js/32.e3ee1ee0.js",
    "revision": "91d0bd91b68198f320f59100b62d138c"
  },
  {
    "url": "assets/js/33.aa73726b.js",
    "revision": "631adaf1ce13896e160315c105bb5104"
  },
  {
    "url": "assets/js/34.f3fb1246.js",
    "revision": "0b4be97b0b5ca704d9a1f28285dcd96e"
  },
  {
    "url": "assets/js/35.35fc3e86.js",
    "revision": "77fbb82b84de80ed2247844ecdd67676"
  },
  {
    "url": "assets/js/36.2a831dc9.js",
    "revision": "88c3c010b9d557acc2001b227c0ad3fe"
  },
  {
    "url": "assets/js/37.28edd502.js",
    "revision": "8e15b77dbb71cff93926c366c8a04f5f"
  },
  {
    "url": "assets/js/38.7cd504b1.js",
    "revision": "09029ff587aa39252fe8c5093cb2d586"
  },
  {
    "url": "assets/js/39.d3b8294b.js",
    "revision": "68d6d427b62700f5d49d101cba2f0636"
  },
  {
    "url": "assets/js/4.7fe303c1.js",
    "revision": "f9754f1c151d7e8bdb7789997d16cc5d"
  },
  {
    "url": "assets/js/40.1732fa0a.js",
    "revision": "72fc89831a31a0be2be7c8887b9b7d6e"
  },
  {
    "url": "assets/js/41.0866afb8.js",
    "revision": "7f349a4f95b8b73cb8828329f983a551"
  },
  {
    "url": "assets/js/42.e5a1c5bb.js",
    "revision": "35036ca764ab768cbe9af60f90c6ef3d"
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
    "url": "assets/js/6.891f4eec.js",
    "revision": "f3329019d51fa65ed5164462d5eb63a3"
  },
  {
    "url": "assets/js/7.a0bd9032.js",
    "revision": "abadb6d0d71d060372bac4df899f8972"
  },
  {
    "url": "assets/js/8.b7391921.js",
    "revision": "d324f0c351832c74ccad90a1142d6e84"
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
    "revision": "cbdc6212fc53e3c59465112fb9271de8"
  },
  {
    "url": "category/index.html",
    "revision": "ff0dc2217d494b448984b8c962fde925"
  },
  {
    "url": "egg/index.html",
    "revision": "77c84bd412e22f8ed1148d011befe194"
  },
  {
    "url": "electron/index.html",
    "revision": "89d64da9c1bca88f6a22b67cc5714be6"
  },
  {
    "url": "extra/index.html",
    "revision": "fb7be05ac526cc359e089d48914b3a40"
  },
  {
    "url": "flutter/index.html",
    "revision": "8c5e2d5d401d7c5ba684ab9fa0c5e67e"
  },
  {
    "url": "flutter/test.html",
    "revision": "5dd75cffb589844f510ece51420ad7c3"
  },
  {
    "url": "guide/changelog.html",
    "revision": "ad19fd989d1b40ea1f4f2b8fa73278fe"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "fae912542bab2b07ea7d3058baf88484"
  },
  {
    "url": "guide/faq.html",
    "revision": "ee23a29636e282f675110135ca063418"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3bf79a7ac8f38dd59ff789f7e2494fb7"
  },
  {
    "url": "guide/index.html",
    "revision": "df5146a758b91f716f9149951eb09b9b"
  },
  {
    "url": "guide/palette.html",
    "revision": "c97c6bab332db51e15724c5de87434c5"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "3a7bd2e15d46f5e752b97e4b9a6539e2"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "777d25c2991fddff4795160eea5eae7d"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "b99524dfaa6f694974869a89f7c6a242"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "676060586fcb33134f15c5fc1409279a"
  },
  {
    "url": "index.html",
    "revision": "c575b5d32023a1540d0df635906244cb"
  },
  {
    "url": "js/index.html",
    "revision": "e941856ca6cf1760ab99c5bf99a46c83"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "ae81145685fc0ecc2af87146592db0c2"
  },
  {
    "url": "notes/brew.html",
    "revision": "9e5c531bef06e52efc3744fb760a2984"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "ddae9984f0ee22ddcd7ebc6e45287603"
  },
  {
    "url": "notes/git.html",
    "revision": "0ac081ba9cae91905882827dbd106df0"
  },
  {
    "url": "notes/index.html",
    "revision": "cd731923c92698001c8479bbe86082c4"
  },
  {
    "url": "notes/nginx.html",
    "revision": "ad0f2033fd9d1f670bf90bc3c0421764"
  },
  {
    "url": "notes/node.html",
    "revision": "736f308a6de9f6b4b128152e10ed8a86"
  },
  {
    "url": "notes/npm.html",
    "revision": "27283f26537c4e3ab8b36f7101a3bed4"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "8825caa05068136dc982c81c9baa6946"
  },
  {
    "url": "notes/vscode.html",
    "revision": "bddf6b17038e1041462802210d63ead4"
  },
  {
    "url": "plugin/index.html",
    "revision": "ca4dc1c180d67b0de8e13f307c3eed9f"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "b9f3f03b1ad36a84bdc9408935fe50c7"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "a5035ccb3ee706edef1d0f37ed98adfa"
  },
  {
    "url": "tag/index.html",
    "revision": "d19fcfc7f16ade474f99163bfc6f3f90"
  },
  {
    "url": "uniapp/index.html",
    "revision": "290fb194e145cf0d45d63e15cfe3a3a0"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "63d7e798fd45f6ea015bedb99bafaed3"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "899c17c1dde7a7180fa0add0f6dd290c"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "d13373507565948a0f0423f1d8767084"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "f36a022789f7c8bdc8681afbfe11761f"
  },
  {
    "url": "Vera/index.html",
    "revision": "c5b26fae1ee5395573871aa06191cdc4"
  },
  {
    "url": "website/index.html",
    "revision": "685b14b0e2c855b0c2eaae990cdc98a1"
  },
  {
    "url": "website/package.html",
    "revision": "3f0695ca92bdf7c1edc76fe83450ce81"
  },
  {
    "url": "website/rearend.html",
    "revision": "e73116983fb9be174e61e4d37339a2e3"
  },
  {
    "url": "website/tools.html",
    "revision": "2a8aa653af7b4f7b5aba4553fd647121"
  },
  {
    "url": "website/webclient.html",
    "revision": "d8aee7becece152f49ad65556d8b5c83"
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
