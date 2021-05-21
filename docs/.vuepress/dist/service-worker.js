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
    "revision": "ccd8f84344fa20ca6e2e56f51a97e82b"
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
    "url": "assets/js/10.6d56cdcb.js",
    "revision": "910633be3eaf33b9858bb9e29d18aff7"
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
    "url": "assets/js/14.55ea35e7.js",
    "revision": "b670eeae56a6c28218f2be88e3bbbdae"
  },
  {
    "url": "assets/js/15.115c8dbf.js",
    "revision": "07ee7c3489b4b0b0800a3908af75efca"
  },
  {
    "url": "assets/js/16.9b099755.js",
    "revision": "e0c2b1bae224d143a7d93862faa96995"
  },
  {
    "url": "assets/js/17.d42610e0.js",
    "revision": "d8edb7bf101b57149204017204f21d9a"
  },
  {
    "url": "assets/js/18.6f8c8f89.js",
    "revision": "dcb2d00012b57fe849f8c5fbd3984596"
  },
  {
    "url": "assets/js/19.1259a16e.js",
    "revision": "e802ea982789b61fc3cfce9430e269df"
  },
  {
    "url": "assets/js/2.b926a4ec.js",
    "revision": "7f1482f3782f9ae1111f3793f8f6effb"
  },
  {
    "url": "assets/js/20.f97adc9a.js",
    "revision": "0a929113e8cc2eed3aa58a5be8ff79eb"
  },
  {
    "url": "assets/js/21.c0a9c9e4.js",
    "revision": "e19be4d92b1cb30173bbb59f0e8e57f6"
  },
  {
    "url": "assets/js/22.7150d3ba.js",
    "revision": "db075267120435f77d66b690e53c576f"
  },
  {
    "url": "assets/js/23.3c46fa9b.js",
    "revision": "c0aff523d5907c5e2f17172c6bb4a6ea"
  },
  {
    "url": "assets/js/24.82e3f245.js",
    "revision": "65cd01d63b2b740c6e202d821750028c"
  },
  {
    "url": "assets/js/25.efafafa1.js",
    "revision": "c32dedb552f6deeed63ed83121ddc5ba"
  },
  {
    "url": "assets/js/26.71c88722.js",
    "revision": "db57182b1eacfc67dcbb2d06262d5898"
  },
  {
    "url": "assets/js/27.19c31946.js",
    "revision": "964b8b4bc8ed479c9aab5444cbf4983a"
  },
  {
    "url": "assets/js/28.160fc1f5.js",
    "revision": "05cffb308d35d1693de47367cee57064"
  },
  {
    "url": "assets/js/29.36cbed58.js",
    "revision": "120ab2978c6690e78f622d7d77503f08"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.74747283.js",
    "revision": "692b000cfcc59434de78a9edcdf7f5e3"
  },
  {
    "url": "assets/js/31.dce2d66d.js",
    "revision": "4533aca1b9795a75aac6aa9fc168143c"
  },
  {
    "url": "assets/js/32.c8ccde5f.js",
    "revision": "bc9bcbcbc53831bbbf5015de7870f7c2"
  },
  {
    "url": "assets/js/33.c5903211.js",
    "revision": "a5f5ff4454ee5c5c117a68946d05d016"
  },
  {
    "url": "assets/js/34.8b765513.js",
    "revision": "e9e8244e91987690a8b0cddcac6ff3a1"
  },
  {
    "url": "assets/js/35.07b54fa8.js",
    "revision": "f66756ec017e5d76af1a9f2f6454e2cd"
  },
  {
    "url": "assets/js/36.87c2707e.js",
    "revision": "9676c0beace4fc347a7a67bf9140b7bd"
  },
  {
    "url": "assets/js/37.cbc9ef78.js",
    "revision": "9839be795fa455a96dc9e865bc04f689"
  },
  {
    "url": "assets/js/38.85809af8.js",
    "revision": "084c2f07b378787a3f93d7e7decbbf5f"
  },
  {
    "url": "assets/js/39.a49fec1f.js",
    "revision": "8fbb335ecd84052a7de23e0bb73c9dd7"
  },
  {
    "url": "assets/js/4.57e0addb.js",
    "revision": "22f8e6ebbd35c533777c435222e667d7"
  },
  {
    "url": "assets/js/40.a87a73eb.js",
    "revision": "47b7688483fe0bc4c576bb8b0ec95c24"
  },
  {
    "url": "assets/js/41.b7860671.js",
    "revision": "b7b95a29e0fef8205fe8d37879d4703d"
  },
  {
    "url": "assets/js/42.a7b8e939.js",
    "revision": "bca57b0101c90ca4f92c1370da2ea78b"
  },
  {
    "url": "assets/js/5.6f496986.js",
    "revision": "c0cfcd7fb7c237e41a93601a2e0349f6"
  },
  {
    "url": "assets/js/6.c7f7bc0b.js",
    "revision": "e892a855423d373a4569e03d43798b9c"
  },
  {
    "url": "assets/js/7.0667e226.js",
    "revision": "62b8bf72b43c1963886a019cf91b3233"
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
    "revision": "40e5b52330f183cee3adee216c505c88"
  },
  {
    "url": "category/index.html",
    "revision": "3f89af5b7d5739ed88cbfb4b1d7b1145"
  },
  {
    "url": "egg/index.html",
    "revision": "bd34980913e21874df0c3621c81fc016"
  },
  {
    "url": "electron/index.html",
    "revision": "edfa685d01319e07604fb7218d5764f7"
  },
  {
    "url": "extra/index.html",
    "revision": "a23a2441c7c2187aa96017dfc2396c27"
  },
  {
    "url": "flutter/index.html",
    "revision": "b90c1822d7d8130d88d6252336f06ac5"
  },
  {
    "url": "flutter/test.html",
    "revision": "bd9392bad056b1aa22650884855d072d"
  },
  {
    "url": "guide/changelog.html",
    "revision": "ec8a05d32796b0457f9674406c5c6351"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "7e842b5d37ebe2aca86c0131f4a766a5"
  },
  {
    "url": "guide/faq.html",
    "revision": "df641ed1ad709f41dba0f4e742c1b5bf"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3159736ca8c64750b46f78c30e266ed0"
  },
  {
    "url": "guide/index.html",
    "revision": "bb2e63d52ab4cf9f53c6fa1748ece0b9"
  },
  {
    "url": "guide/palette.html",
    "revision": "a1059d519695c59fddc6e92f9723e8f6"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "3398907223407c082e45b33bf3d539a3"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "1091c2f39621b9bf776cf99465c5eeec"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "03ff68e053c45b3b181698749501ff8c"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "58aeb8959c6fe65369990ee03602dc25"
  },
  {
    "url": "index.html",
    "revision": "99f6a7f288e2453ba2a1278d55b4d84e"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "120e2cd6aadefcff51a40f0be8288f47"
  },
  {
    "url": "notes/git.html",
    "revision": "2061117207a18f158474f19dbd48883d"
  },
  {
    "url": "notes/index.html",
    "revision": "56292b4f34632e1bde67577bc92d91bc"
  },
  {
    "url": "notes/nginx.html",
    "revision": "941c41af5841c2ec5acfe80f9cabe1cf"
  },
  {
    "url": "notes/node.html",
    "revision": "8b0f8d5959d684e432b6e7ba60358d2c"
  },
  {
    "url": "notes/npm.html",
    "revision": "d76be8c6157c25794429090543c60835"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "547d0f90e7ada4e5afc6cfdfc933fd41"
  },
  {
    "url": "notes/vscode.html",
    "revision": "4b8ece5f69989414bac99f73fc899e89"
  },
  {
    "url": "plugin/index.html",
    "revision": "997c03727b4b5c31cb8c3e0617b5460e"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "6252430badf615b37def260524e0bfc4"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "16923caa9df5f21857a7f67d2e2ecac7"
  },
  {
    "url": "tag/index.html",
    "revision": "0618702febd2e3dc18bd911752e2e7e7"
  },
  {
    "url": "uniapp/index.html",
    "revision": "330cc6dc283cdacb526da22a56cbbf3d"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "455485918081bfcff86014099a94f5ff"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "b2a3bbe9ba59fce5d8bb39082f0ed955"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "91af89f0ecb3fa570670479ff14cdf59"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "b4f2912310c5cc467f529a34782e479b"
  },
  {
    "url": "Vera/index.html",
    "revision": "6838ab0503a81508d72a1153bdbd81b8"
  },
  {
    "url": "website/index.html",
    "revision": "56ccfbcd3e26f33bc16669db542c6517"
  },
  {
    "url": "website/package.html",
    "revision": "b7c3ca32a54f832b511e1b4c89cb9151"
  },
  {
    "url": "website/rearend.html",
    "revision": "9084fb08bf71ca03152be7f80e9abd90"
  },
  {
    "url": "website/tools.html",
    "revision": "ef63d5084386a4c7a2c51d8d5e447751"
  },
  {
    "url": "website/webclient.html",
    "revision": "53e46b354d19f075300cac6cb408a7a1"
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
