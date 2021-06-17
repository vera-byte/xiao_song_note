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
    "revision": "3b57745b1cd0b99e38fdea77ed8be7f5"
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
    "url": "assets/js/14.58456378.js",
    "revision": "8b10fbebec9c5de8944ac784c07ac5cf"
  },
  {
    "url": "assets/js/15.37f4e7ce.js",
    "revision": "218b7b604efb344f90effeeb3fa46759"
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
    "url": "assets/js/18.fcad0ce9.js",
    "revision": "85b0af97d1f679d9ff2b37d6ee2616ea"
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
    "url": "assets/js/20.4fe872e9.js",
    "revision": "ae0a5ca1489bf3de9930a5502916f179"
  },
  {
    "url": "assets/js/21.b3ee3eb5.js",
    "revision": "52182752b46e904f6134061a056854b3"
  },
  {
    "url": "assets/js/22.816a3f75.js",
    "revision": "c6f693d0d1b376848f9ae52f46453f97"
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
    "url": "assets/js/25.8c09db38.js",
    "revision": "f3ba8862f4be453b541e1fd2dc288a43"
  },
  {
    "url": "assets/js/26.5a2c499d.js",
    "revision": "016b060122e4513a810258237fb54b24"
  },
  {
    "url": "assets/js/27.0299515c.js",
    "revision": "93e3ce875467f7f90052c9b15e89f2ed"
  },
  {
    "url": "assets/js/28.a9a05db8.js",
    "revision": "20840b718bc598c3fe05df339f18a8e1"
  },
  {
    "url": "assets/js/29.e41fdc33.js",
    "revision": "66521654905e43f1db06d5eed088eb45"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.ea93b20f.js",
    "revision": "f2c32ab7ded606537f157c82fac2ed56"
  },
  {
    "url": "assets/js/31.4ddf3d65.js",
    "revision": "29dd46b9e38e8ca922fb69aa1b94c69f"
  },
  {
    "url": "assets/js/32.53a0abdc.js",
    "revision": "99ee042a02a47fda423d74a87605c3d6"
  },
  {
    "url": "assets/js/33.5ea49522.js",
    "revision": "57aa18db0cbca5f00a857f7d6f71921b"
  },
  {
    "url": "assets/js/34.e28e778b.js",
    "revision": "fb0b186ca0da4e2a1f1e2e4dab87d7fc"
  },
  {
    "url": "assets/js/35.bd6d9f29.js",
    "revision": "82e1d19bac7b4bcb4603118dad34eddf"
  },
  {
    "url": "assets/js/36.20d0d820.js",
    "revision": "5e5ad97daa1b3bae636d7ce0f80e5600"
  },
  {
    "url": "assets/js/37.304bcee4.js",
    "revision": "f5cbf32090f7a0079eed17bfd7ab3351"
  },
  {
    "url": "assets/js/38.b4b213c0.js",
    "revision": "c35fd90703c1f6c778b418127f1dd518"
  },
  {
    "url": "assets/js/39.edab5312.js",
    "revision": "404f61949a41a6da480b3022515d1536"
  },
  {
    "url": "assets/js/4.370c35a0.js",
    "revision": "7680c25c9180ae6be0be519a44241235"
  },
  {
    "url": "assets/js/40.bc2d3cad.js",
    "revision": "e17cbcf18e9d5b814ded16bcc1c94a03"
  },
  {
    "url": "assets/js/41.1c02c977.js",
    "revision": "04c0804f65973fa682463bef71af0358"
  },
  {
    "url": "assets/js/42.da5af008.js",
    "revision": "618480bb1e78ccff07d4e46c1f33982e"
  },
  {
    "url": "assets/js/43.1efa3af2.js",
    "revision": "6bbfef2c65e67c7407f68c8a0abc4051"
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
    "url": "assets/js/app.4f5fa8e5.js",
    "revision": "534d098d4af5271a36032889ece07c91"
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
    "revision": "14bf91e4542c8c1e850c8e9ecf89fa1e"
  },
  {
    "url": "category/index.html",
    "revision": "4c3675a1cdb6da2890121b61f767da5a"
  },
  {
    "url": "egg/index.html",
    "revision": "20ed40b75d6c4d99a2293ca75b0d8dbc"
  },
  {
    "url": "electron/index.html",
    "revision": "69d5b799f925a1346f427a1ada0f5a07"
  },
  {
    "url": "extra/index.html",
    "revision": "b789234d95ef144a2ad1838d4d35c9fd"
  },
  {
    "url": "flutter/index.html",
    "revision": "a314ee2e1a378af350ef1ea3314b61ef"
  },
  {
    "url": "flutter/test.html",
    "revision": "b5ee24466be54d60b141831bd13eb093"
  },
  {
    "url": "guide/changelog.html",
    "revision": "efccaa0f24c406efd4ab1292fdb3d0d9"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "05f3e7355e888c81e77a9286d41fded3"
  },
  {
    "url": "guide/faq.html",
    "revision": "5a9db84634964c30d3585fe461fcbca2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "cd99a0fc983d83a75951d35fab6b427a"
  },
  {
    "url": "guide/index.html",
    "revision": "d49ff514bf7fe596469a56e73349366e"
  },
  {
    "url": "guide/palette.html",
    "revision": "a421592cceddd02c6d12a56b519a0323"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "c376cf424254fdfd9b9b1460a2f9dda0"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "fb9665bc3ea20fb00354e4b62c1ab648"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "5989c2c1c101ab49d4796fad888f4b32"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "bc518c57a5d76db43f069d9f99f7c8f8"
  },
  {
    "url": "index.html",
    "revision": "cbc93a8c00ed865cf430ad812763a70f"
  },
  {
    "url": "js/index.html",
    "revision": "6738cbfc6ca1b8a14e1db7bbb998253c"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "4c71ca5af51ad000badf6fd56aa29b94"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "e0ee5f45bd1e3449fc454ce29de5ca49"
  },
  {
    "url": "notes/brew.html",
    "revision": "9f7d6e3d86d921d1eafd90a3195c9c70"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "adad43d57bca5300bdf9db5d31e1b50d"
  },
  {
    "url": "notes/git.html",
    "revision": "1a0ef283913d7474228acfc5d277f781"
  },
  {
    "url": "notes/index.html",
    "revision": "f7bd299385a5011048fc8b728f673bc8"
  },
  {
    "url": "notes/nginx.html",
    "revision": "666c399b959e151b7403bf81056e6a21"
  },
  {
    "url": "notes/node.html",
    "revision": "c8cb404997e44c1bc62b775f4cbefffb"
  },
  {
    "url": "notes/npm.html",
    "revision": "db7dbdc9d41c4484cb84649721e54e76"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "ed73176fae48bcf5a92425019b7de9d0"
  },
  {
    "url": "notes/vscode.html",
    "revision": "6041369e0603796899a758a73dc8c1cb"
  },
  {
    "url": "plugin/index.html",
    "revision": "4a1da84e12d28b0ea472204f3bfae81f"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "c2c1237049025cb930bec1a2aba16c8b"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "0d63302da251590d58e48f6a63a2047e"
  },
  {
    "url": "tag/index.html",
    "revision": "0e478657fabee96578b0968cae264226"
  },
  {
    "url": "uniapp/index.html",
    "revision": "8ea49f67cb732d5c12eab36a284fe1e9"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "05ffbe79edea6a35a859cea08655d40b"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "fce456864803d3aa1c500585bddee729"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "61131fad9112143ab3e4d1d95f927417"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "da326a19f959fb916be88d79a741b9f5"
  },
  {
    "url": "Vera/index.html",
    "revision": "df9e0d489bffd1f592f43e601bfc48fe"
  },
  {
    "url": "website/index.html",
    "revision": "16bbc17d60ffa80b0934fb4958d58566"
  },
  {
    "url": "website/package.html",
    "revision": "cffc40d29e8143e2f06ed9da8f4c9fb9"
  },
  {
    "url": "website/rearend.html",
    "revision": "fb9bbf8282dcc82747bd2dc2c693364b"
  },
  {
    "url": "website/tools.html",
    "revision": "0e21561a3532a34b11bd54fa534bb521"
  },
  {
    "url": "website/webclient.html",
    "revision": "6a037f90724b1a06f114a76f3d601760"
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
