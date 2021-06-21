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
    "revision": "def98783c6d4e90cb4d742207700e64f"
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
    "url": "assets/js/14.fe53e799.js",
    "revision": "3cd1028084f1c78b03c6eb888cea9434"
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
    "url": "assets/js/18.83f31237.js",
    "revision": "a1546bc0c20a3326c6a45254355d9677"
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
    "url": "assets/js/20.260d9196.js",
    "revision": "4b280fbec7cbc991a42125caae105483"
  },
  {
    "url": "assets/js/21.b78a8066.js",
    "revision": "9aba97eb1678d2a9dbac7aafadafcd2f"
  },
  {
    "url": "assets/js/22.90f7f434.js",
    "revision": "d873430ae4321fcc4686bfa9a4f9903f"
  },
  {
    "url": "assets/js/23.fe2c88f9.js",
    "revision": "35c9422859c03f2ef41c4090366b748d"
  },
  {
    "url": "assets/js/24.1036e2f4.js",
    "revision": "63b50e77d5442ca4c5f7a8cfc891be2e"
  },
  {
    "url": "assets/js/25.9bd6b62f.js",
    "revision": "c501bbef3d61908cfce03cdeac17a540"
  },
  {
    "url": "assets/js/26.5a2c499d.js",
    "revision": "016b060122e4513a810258237fb54b24"
  },
  {
    "url": "assets/js/27.cc529dff.js",
    "revision": "d75bd548f202b3e850bf86d38666a123"
  },
  {
    "url": "assets/js/28.6b6d03ca.js",
    "revision": "2a1501303a1f10fb5ea2df4861d465cc"
  },
  {
    "url": "assets/js/29.46a88a64.js",
    "revision": "9e39cb5759046f65420363502f2f6463"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.1573cc99.js",
    "revision": "2aa2af6004e6073537eb60dd854c60c5"
  },
  {
    "url": "assets/js/31.c83abf8b.js",
    "revision": "067a8cb1c9cce20467b7b5bc3138cdba"
  },
  {
    "url": "assets/js/32.f4488e96.js",
    "revision": "9252852507c0b0bf57e8dd703b346296"
  },
  {
    "url": "assets/js/33.4a4df23b.js",
    "revision": "f20a4023d01d3285a49a6b1b29d53e44"
  },
  {
    "url": "assets/js/34.4170b673.js",
    "revision": "00dca8ed4e37c2d28863253b3316eff5"
  },
  {
    "url": "assets/js/35.26a6e2e3.js",
    "revision": "fc145c4d05c9ce56a5ac4702b4513dae"
  },
  {
    "url": "assets/js/36.da64f9d2.js",
    "revision": "208e3606f9eb65b45ec716d8263d1c2a"
  },
  {
    "url": "assets/js/37.57d1a27f.js",
    "revision": "aef265e054eba6ffcff31d12f1b32ce4"
  },
  {
    "url": "assets/js/38.8a5b24f3.js",
    "revision": "f8741486c9af816867f782491455e8b3"
  },
  {
    "url": "assets/js/39.557f70cc.js",
    "revision": "b1a460367c205710b507a8d96995ad3b"
  },
  {
    "url": "assets/js/4.fa6ed8fd.js",
    "revision": "ed64aadac9c4bff81317b5f923b2083a"
  },
  {
    "url": "assets/js/40.7e8fbcd7.js",
    "revision": "0e1cf626626106284b80a6699c56b2fe"
  },
  {
    "url": "assets/js/41.4dd791d6.js",
    "revision": "478bfb472f7bceef88987ccc2d8c0236"
  },
  {
    "url": "assets/js/42.6e274835.js",
    "revision": "006dd8a9405f8091a74d76d9be7e6438"
  },
  {
    "url": "assets/js/43.5dfea87b.js",
    "revision": "8fda07c5b06dccaeaae02aaf6dfb10da"
  },
  {
    "url": "assets/js/44.8d19bc97.js",
    "revision": "4335c1261e7570f572a62c04926f8be5"
  },
  {
    "url": "assets/js/45.750a6555.js",
    "revision": "53bd1fefb047fe8f9de3de7d1ddbbab9"
  },
  {
    "url": "assets/js/46.c5d2d33d.js",
    "revision": "e514b9d01e0230b9dadbed55c903efb1"
  },
  {
    "url": "assets/js/47.b1373d80.js",
    "revision": "8e8ae89fa877f2948820e23fdeccbd97"
  },
  {
    "url": "assets/js/48.63ecec3e.js",
    "revision": "c13700d858e45310b2957b71b451c627"
  },
  {
    "url": "assets/js/49.95650c83.js",
    "revision": "c958f3298615b92829a8d547b0081828"
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
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
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
    "url": "assets/js/app.2df9141a.js",
    "revision": "a2a03203cbcae680e7c8693af730b2cd"
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
    "revision": "83c0fec37dfb263cef37be736728a4c9"
  },
  {
    "url": "category/index.html",
    "revision": "99474275d3a722b40db14d565141c425"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "40b178f5ea5538ef90074a3e9d6dc60e"
  },
  {
    "url": "electron/index.html",
    "revision": "313b982fd9aa1bcc35e7a747d214df8d"
  },
  {
    "url": "extra/index.html",
    "revision": "167e077b05f84065fc3b4fc4c8ff6a9f"
  },
  {
    "url": "flutter/index.html",
    "revision": "6ba02d050d8c81369000c657185d0017"
  },
  {
    "url": "flutter/test.html",
    "revision": "80ffdf857d2f0b923c846c1e0074124d"
  },
  {
    "url": "guide/changelog.html",
    "revision": "ad7fa70723a1aa5ccecf64d6ad0b08a3"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "2f8818575305886ee78eb40558cb542a"
  },
  {
    "url": "guide/faq.html",
    "revision": "13d6479ce0c90334af979677ef0dd371"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b2d0c9886999ec770977059535d73279"
  },
  {
    "url": "guide/index.html",
    "revision": "e953462eac5fd6a8e386f87a415394d1"
  },
  {
    "url": "guide/palette.html",
    "revision": "2338fbc2b5f816b8ca91288847ea3ffb"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "83967ede29fad9bbc91592e89ab5c2b2"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "789a9bac90d6977e4366b0e4b81c54a4"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "fcff426e76e7e7a1812a0fcf6885836d"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "8cdd8e21daecba2017662b09d5519c4d"
  },
  {
    "url": "index.html",
    "revision": "499693537d50bd3a46ffda3e56f48acc"
  },
  {
    "url": "js/index.html",
    "revision": "ca1e2ba6a07fed44f4e74f9506eae093"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "eac4181742dc2d45ead4cff3c290ed13"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "f5555ac26ae5bf7fad1f80b6bc9cb49b"
  },
  {
    "url": "midway/index.html",
    "revision": "bf5ef9d42bbeec536232d7231bcae433"
  },
  {
    "url": "notes/brew.html",
    "revision": "0784fa41ba3034a85de634dac1bf489e"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "0509dbb4b3a57013a45728c08d3f2ad9"
  },
  {
    "url": "notes/git.html",
    "revision": "52951fbaaeb034d0d92bc4402a082870"
  },
  {
    "url": "notes/index.html",
    "revision": "e17f33fc70641b627131996c4d527060"
  },
  {
    "url": "notes/nginx.html",
    "revision": "22aa2eb3ede2d5f0f550a5b9a74866ed"
  },
  {
    "url": "notes/node.html",
    "revision": "134b6b511fe50076884e2559b31f8da9"
  },
  {
    "url": "notes/npm.html",
    "revision": "577b189b836dc78b3ea5b0eece1c13b3"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "076b5fa57f495b5930cce1df1de02dea"
  },
  {
    "url": "notes/vscode.html",
    "revision": "95ad1c9040db09c73b2d7045c100331f"
  },
  {
    "url": "plugin/index.html",
    "revision": "407c6bfa1e203eec311f4d1ee22ac8ba"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "bd6a6dddcd25d5c286852e76561f9a37"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "4f9bd4510a5ed36893e7a6833fad1be3"
  },
  {
    "url": "tag/index.html",
    "revision": "aae2b237fb5e34935e5997acd7b80efd"
  },
  {
    "url": "uniapp/index.html",
    "revision": "0ba4c37418171b97091faeb7e7e9c920"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "06dee9e7e466d31209fb45fe7dd62566"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "6d0d36356ae99d7bc9ae2daf810179ff"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "cee6ec2cc5fc2d21c9293377c7e16c8b"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "fff490ab689a8fc87d438790510f35cb"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "c50d9748654c887cc5fa3c94175aed9f"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "8c14b3a7a0acf63554fb0911b416a602"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "1cf1553be0b4c015c53654f6a6c52bf7"
  },
  {
    "url": "Vera/index.html",
    "revision": "b09db05b0bbaa00b373f6bfdcfb7efd3"
  },
  {
    "url": "website/index.html",
    "revision": "a593d06b471b124eb72393385673f2eb"
  },
  {
    "url": "website/package.html",
    "revision": "77f33cf2045d9deb520682c6c2f3847e"
  },
  {
    "url": "website/rearend.html",
    "revision": "8cba314bd9204520cb46843711faa6a4"
  },
  {
    "url": "website/tools.html",
    "revision": "4cf9085dd5c1426ab61c6de3642fd4e8"
  },
  {
    "url": "website/webclient.html",
    "revision": "f322b929b9fd25868d117116c9af0bbe"
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
