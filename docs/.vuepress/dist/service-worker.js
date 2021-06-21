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
    "revision": "b3251960c89dd6a098adb40dc7a19c3c"
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
    "url": "assets/js/14.c7c99f4d.js",
    "revision": "7f1796dbab5344718cdbd1fd2adfd3fa"
  },
  {
    "url": "assets/js/15.eee67e7a.js",
    "revision": "22471caf47f4e739d44e3c315d25310c"
  },
  {
    "url": "assets/js/16.1806c483.js",
    "revision": "97366708d0f1625471c88fca5cf2e573"
  },
  {
    "url": "assets/js/17.d618ee3a.js",
    "revision": "333f8bf627cd7652320f5eeb32de097f"
  },
  {
    "url": "assets/js/18.c2f1d2ee.js",
    "revision": "7b851c31a4c07983ae987d0265d9f6f7"
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
    "url": "assets/js/21.b3ee3eb5.js",
    "revision": "52182752b46e904f6134061a056854b3"
  },
  {
    "url": "assets/js/22.e520653a.js",
    "revision": "fbbd4a50680827cafdbe70b351f947e9"
  },
  {
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.77405ff3.js",
    "revision": "cbee9ac6ca1a2be18b273c158c2f5241"
  },
  {
    "url": "assets/js/25.afa06fba.js",
    "revision": "f87ef4a00979922fa9888042634c57b8"
  },
  {
    "url": "assets/js/26.a08d2523.js",
    "revision": "76d54042d611344339356367b43e6cc3"
  },
  {
    "url": "assets/js/27.d296b3e1.js",
    "revision": "ce6e6624dcc77cbbc82a410e83379897"
  },
  {
    "url": "assets/js/28.6f5600c4.js",
    "revision": "c28a384b890e5131d9e411ba0e125619"
  },
  {
    "url": "assets/js/29.e4aba5cc.js",
    "revision": "43f204cd30799d5e6542dae525e00d24"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.943770f9.js",
    "revision": "eaadb812c8b7681218c5251f48e6847a"
  },
  {
    "url": "assets/js/31.083e47fe.js",
    "revision": "68f171ab2426910e0a965181ca199dd6"
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
    "url": "assets/js/34.ed0d42a8.js",
    "revision": "8ef9471fded4656edcbd6877bdf7f744"
  },
  {
    "url": "assets/js/35.ff635d64.js",
    "revision": "7a6abbfb00b8a888ff7a7c6a4ed7e073"
  },
  {
    "url": "assets/js/36.e37f3257.js",
    "revision": "f8b93a6720b07154565deb3712b3bd12"
  },
  {
    "url": "assets/js/37.304bcee4.js",
    "revision": "f5cbf32090f7a0079eed17bfd7ab3351"
  },
  {
    "url": "assets/js/38.68773981.js",
    "revision": "49cbe0ebf140627175bfc1cf6edd3d66"
  },
  {
    "url": "assets/js/39.e90804d8.js",
    "revision": "e51e521676a30aaaa68bf3b854502203"
  },
  {
    "url": "assets/js/4.9c9b1c5f.js",
    "revision": "a6ae390077f6a83e76e6476b2f32db50"
  },
  {
    "url": "assets/js/40.97a5ed5a.js",
    "revision": "bf4f4b76cb7ff422b66f7194fd375fe2"
  },
  {
    "url": "assets/js/41.1fcf3a35.js",
    "revision": "ab210760b3cee1344a7ab3c811df3d75"
  },
  {
    "url": "assets/js/42.978d3596.js",
    "revision": "f58790b9a67bdf712e68f35d47ad36ff"
  },
  {
    "url": "assets/js/43.1738996a.js",
    "revision": "65fd14e2add08448db84cbca17b58d19"
  },
  {
    "url": "assets/js/44.1a936c07.js",
    "revision": "b316121f109e97ebda82eec4a0e1885b"
  },
  {
    "url": "assets/js/45.c3b91ae7.js",
    "revision": "5746ee692cc5b42e80bce39ce9e0012e"
  },
  {
    "url": "assets/js/46.cc9acea3.js",
    "revision": "ddd7d00757294628b4c9b44e859cfc22"
  },
  {
    "url": "assets/js/47.0561ebe7.js",
    "revision": "d0e844de099b2c96541c325e64e7aec7"
  },
  {
    "url": "assets/js/48.bfb49264.js",
    "revision": "e7f884eeafd33ab070ebc2a2e220bb23"
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
    "url": "assets/js/7.7244ce27.js",
    "revision": "fc43001207d46fe098eb2e6c8941dfc1"
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
    "url": "assets/js/app.d3e19db6.js",
    "revision": "f8ae789d4b2efcc6656575c8ec76f790"
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
    "revision": "1a8741747018028dc96b017d90e3a4ed"
  },
  {
    "url": "category/index.html",
    "revision": "85239fc68b89587a20265536b5a16494"
  },
  {
    "url": "egg/index.html",
    "revision": "3032b69cd47973bdaddc2dd3dd1515d5"
  },
  {
    "url": "electron/index.html",
    "revision": "1cb6f19e6c597bc4e39051841bb00617"
  },
  {
    "url": "extra/index.html",
    "revision": "6d5c101066a74d833fd8f4678b1d506b"
  },
  {
    "url": "flutter/index.html",
    "revision": "b74bb39f8d446ef34abca24fa7326b44"
  },
  {
    "url": "flutter/test.html",
    "revision": "cc5a3c2d5bdb03e39086d71034089d37"
  },
  {
    "url": "guide/changelog.html",
    "revision": "91dd461d971780ce0b2631d372eb0285"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "b7b73e74c244eb1d531896794180b54d"
  },
  {
    "url": "guide/faq.html",
    "revision": "9dcf9570b87eea48447b23c2a307fae1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aa56a8aa9e1af13b1b8478e1515b447d"
  },
  {
    "url": "guide/index.html",
    "revision": "ce9332d0572f74abcd6eadc0e5cb7e4d"
  },
  {
    "url": "guide/palette.html",
    "revision": "ffb713e6a99107ca8027e269306bb183"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "1fdd2a712b641a885dcf75b963ffccf4"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "009d16c88a036e06e2e61063497a0e9f"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "c7b106a74a09ef4599ac816d740c52d8"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "2c7efee8a5935d44051ae79da96258cc"
  },
  {
    "url": "index.html",
    "revision": "abf2792839fe205c51880cd2a6d4c6ce"
  },
  {
    "url": "js/index.html",
    "revision": "a9d8e4d9dd3086380eba531407ea312e"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "c834aa93c0e1af9c47b40cbace9718b5"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "c34dcf25415f28505394437d599ba375"
  },
  {
    "url": "notes/brew.html",
    "revision": "33fe7710c1151791757c90e97a52f27c"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "d57113a614c6b8d85d9500a28c8fefff"
  },
  {
    "url": "notes/git.html",
    "revision": "92f79233c8a3285b0d155d7c1c09d254"
  },
  {
    "url": "notes/index.html",
    "revision": "8d4e428a07cf52f2596fac6e78bdecd4"
  },
  {
    "url": "notes/nginx.html",
    "revision": "7470dfb49d66b12f39831b0b4302cb15"
  },
  {
    "url": "notes/node.html",
    "revision": "cf8d0bb8927dea197973e116ab664401"
  },
  {
    "url": "notes/npm.html",
    "revision": "a6701a929bf1dcc24a8974943c563aac"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "7c3fe2a8d36daa3d2f05f42615972070"
  },
  {
    "url": "notes/vscode.html",
    "revision": "68f58f5bc727add442dc93930cf7d989"
  },
  {
    "url": "plugin/index.html",
    "revision": "eb04e08b35238b5067382409ce58d36a"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "1e44f071269c503ad3667c3437a602a0"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "0128d094c8cfd149ca8050d0ed0906cb"
  },
  {
    "url": "tag/index.html",
    "revision": "fddcb47cc45f56305dc2dd13015117e0"
  },
  {
    "url": "uniapp/index.html",
    "revision": "bbd51a45b8d0145087ee16928cda5fe0"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "dd1ecf63a664b82f1940ca4380c6724b"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "9cf1874f7ef97ab82102fcbc44eec6b7"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "775ff28005ea0a8cbb7c974d3547c8ef"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "eca022632126764b04706ee1c59a6764"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "375f0c8b75fbed62e115b3a069f350ae"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "27c4e224ebf176c9e4310c19fa2f7d8b"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "a73d5f76c274d9b3e2eaf7ddf5651adf"
  },
  {
    "url": "Vera/index.html",
    "revision": "4f54d3f57ed40be64d20f7d0b294fdf0"
  },
  {
    "url": "website/index.html",
    "revision": "6a323727b8c4ab1f0cac81a28ccf8cff"
  },
  {
    "url": "website/package.html",
    "revision": "abf9fcbd7f88b76e560d248aaabc298d"
  },
  {
    "url": "website/rearend.html",
    "revision": "a6baa405dd66e6a06d36d813559d4fea"
  },
  {
    "url": "website/tools.html",
    "revision": "88b235840f2a18dc54f7aec72f9cffe5"
  },
  {
    "url": "website/webclient.html",
    "revision": "6cc2aa0a4e5aa74c7f493f799f3f4ef9"
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
