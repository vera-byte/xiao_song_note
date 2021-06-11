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
    "revision": "c4902241d869e24acd3467c7f27300ff"
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
    "url": "assets/js/12.27d58fc7.js",
    "revision": "d5a70f38d251ab91e9595be53a8b6292"
  },
  {
    "url": "assets/js/13.89715a6b.js",
    "revision": "216edc86cc1c3604132700e102b6a880"
  },
  {
    "url": "assets/js/14.f4757a27.js",
    "revision": "f392c7204b9aa70ccd5de0cd47579a25"
  },
  {
    "url": "assets/js/15.eee67e7a.js",
    "revision": "22471caf47f4e739d44e3c315d25310c"
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
    "url": "assets/js/20.233f5e89.js",
    "revision": "52bf245f36cfd42da2378447d52fddc4"
  },
  {
    "url": "assets/js/21.b97fcc39.js",
    "revision": "2f6146799d5f52d51dac8e15ee14219c"
  },
  {
    "url": "assets/js/22.4b49ac11.js",
    "revision": "ddede3f62f482370ba02629382ec091f"
  },
  {
    "url": "assets/js/23.120cbab7.js",
    "revision": "a1ce59514687f063ce2ac97d191240d9"
  },
  {
    "url": "assets/js/24.a744d836.js",
    "revision": "f19f38e8dd387f29c2419267c6756c3a"
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
    "url": "assets/js/29.72e42e2a.js",
    "revision": "464ef90193ec0dc09b92ebe9545d1069"
  },
  {
    "url": "assets/js/3.4f081cf9.js",
    "revision": "bc84619ba2917d7a895f593b57756152"
  },
  {
    "url": "assets/js/30.b6e52265.js",
    "revision": "cbe1365c19a8416364a4de4e9f711d4d"
  },
  {
    "url": "assets/js/31.74356238.js",
    "revision": "a283eff20ae9555581ede55ee6e158e1"
  },
  {
    "url": "assets/js/32.206d1b46.js",
    "revision": "65c88e70f68fe647c14bff37a2e0d8d9"
  },
  {
    "url": "assets/js/33.f922c896.js",
    "revision": "033626fc4c64bd5be7b377a65b7cc1d1"
  },
  {
    "url": "assets/js/34.a81cf1f9.js",
    "revision": "620a63c113e990fb7e79713c1ec5163f"
  },
  {
    "url": "assets/js/35.3fdd4f5c.js",
    "revision": "d45af7a458bb1dd0bd5129590116d128"
  },
  {
    "url": "assets/js/36.1679cb4b.js",
    "revision": "4d42bb7f715c3c7e77a932519efa5e75"
  },
  {
    "url": "assets/js/37.8a235e95.js",
    "revision": "599da5f4b89ee3386cfdbdef32e3ccb5"
  },
  {
    "url": "assets/js/38.ff1f059a.js",
    "revision": "00b6a56ede2b35495dbe780301c5490d"
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
    "url": "assets/js/app.939fec2e.js",
    "revision": "c5cd8fa960c98401918ca1c1d15c980e"
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
    "revision": "7b7acd087766a9f2419b30607e0a3da9"
  },
  {
    "url": "category/index.html",
    "revision": "947bc8c7d951d2d5bb54158e8fb18631"
  },
  {
    "url": "egg/index.html",
    "revision": "c3ece352702bd1f5e484d11079c72275"
  },
  {
    "url": "electron/index.html",
    "revision": "7f570ad18db8b060c984f4cd18afc6b6"
  },
  {
    "url": "extra/index.html",
    "revision": "eba16b24ff0908a27c9990710d3a3ae2"
  },
  {
    "url": "flutter/index.html",
    "revision": "1aae33a97895b391fbf3b4855718e46e"
  },
  {
    "url": "flutter/test.html",
    "revision": "12e04c3a5d7c9762bdbd7113bb120237"
  },
  {
    "url": "guide/changelog.html",
    "revision": "f57c16e67ad3d24718fe08cddb587517"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "f6d1ded1c1c9c8aeb4ac0efe07733c06"
  },
  {
    "url": "guide/faq.html",
    "revision": "ab8cefb7f901a6ae0e936e96c2b521ff"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "311c023cf71025b3e55ab720df902c71"
  },
  {
    "url": "guide/index.html",
    "revision": "17ff07d0dab7f4abd064daf95c8c21e6"
  },
  {
    "url": "guide/palette.html",
    "revision": "7e9a48a9def0e8e3faf745ec2bfe6f37"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "53193854a2dfc21d616292ebb5056e78"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "b8997630067995bdf1e0bb453f90e59f"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "a2dbb66934dcac023fffce71ab790ed9"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "c0af7a70dda66386acb88dbccc72d207"
  },
  {
    "url": "index.html",
    "revision": "173ec49e43f58cd55d431ad61dabe017"
  },
  {
    "url": "js/index.html",
    "revision": "511ada32a40ffdaa1c2e257816078f3f"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "b4620878cc457bca08444154eef4978e"
  },
  {
    "url": "notes/brew.html",
    "revision": "c151ef4960b39d86842317908ab1c0ad"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "a23c30a4ec8b63c6a33f869956647fb2"
  },
  {
    "url": "notes/git.html",
    "revision": "b380eed7e0773bcfb9c4a75f279cba2e"
  },
  {
    "url": "notes/index.html",
    "revision": "34d91373d783dc75dbe13b3ed645226a"
  },
  {
    "url": "notes/nginx.html",
    "revision": "b7739923457a6503b6778120d70048b9"
  },
  {
    "url": "notes/node.html",
    "revision": "822069638437ea9d950bcfc6c5a7588f"
  },
  {
    "url": "notes/npm.html",
    "revision": "12946a8ac690830482f4aa58f04f99fa"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "c3a448c34c21c9a45453c76de54f68c8"
  },
  {
    "url": "notes/vscode.html",
    "revision": "f45c6d31675ddde442b5d7ea954eb76b"
  },
  {
    "url": "plugin/index.html",
    "revision": "cf5f5e2bdf446515171795711bd61609"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "3d9efcfa79668cf894b2de88cb282114"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "70d531e75fd8563fc866fd162d7af162"
  },
  {
    "url": "tag/index.html",
    "revision": "e6f26f207f4c4e8cb3a30a2fb8022582"
  },
  {
    "url": "uniapp/index.html",
    "revision": "744d8759af256a50e93c061a1270f95f"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "6350404521d9b680c91978b7beba047d"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "44768f516db5971cdc3d1463acde11a2"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "4c39ad0446da215851ab8a9feb932c71"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "ddec70969f6d252921f0c937897de8e8"
  },
  {
    "url": "Vera/index.html",
    "revision": "6c8641c6cd206f26dfcbf9ea17e7d554"
  },
  {
    "url": "website/index.html",
    "revision": "c200f64025ee6108d574472e329583e9"
  },
  {
    "url": "website/package.html",
    "revision": "f7db06fbb30154eb7430d83abf361539"
  },
  {
    "url": "website/rearend.html",
    "revision": "715a3913c547659041a924bab863dfaa"
  },
  {
    "url": "website/tools.html",
    "revision": "7bdc232cc643654063aa3604f6b020ab"
  },
  {
    "url": "website/webclient.html",
    "revision": "fd0fcad7f5caef2eec85fd05a31a611f"
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
