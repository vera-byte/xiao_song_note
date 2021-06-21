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
    "revision": "ce29af2e712865291efb372162fba63f"
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
    "url": "assets/js/12.fe4fb571.js",
    "revision": "f980ee5002fee3e0c33811b79282db54"
  },
  {
    "url": "assets/js/13.43970ac1.js",
    "revision": "090562863b6332387c50f63e4b5d8068"
  },
  {
    "url": "assets/js/14.9fb783a9.js",
    "revision": "2a4df1eca2de4fdac1252a5e54a6797b"
  },
  {
    "url": "assets/js/15.4c67e75d.js",
    "revision": "cd4af546075b43b5f8d2ea4f7686e4f4"
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
    "url": "assets/js/19.aeb98cc1.js",
    "revision": "b7350fb5685c8fe820862e9f8cc25c27"
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
    "url": "assets/js/22.4b49ac11.js",
    "revision": "ddede3f62f482370ba02629382ec091f"
  },
  {
    "url": "assets/js/23.b8bc5ad1.js",
    "revision": "17161bbe2271f1a6391dfc58c91b6435"
  },
  {
    "url": "assets/js/24.8441aad7.js",
    "revision": "f8198bf2bc1d80247992f75c6c71ed8f"
  },
  {
    "url": "assets/js/25.96c43e83.js",
    "revision": "03e00c0321decd6cc6521172b0bbc45c"
  },
  {
    "url": "assets/js/26.5a2c499d.js",
    "revision": "016b060122e4513a810258237fb54b24"
  },
  {
    "url": "assets/js/27.64a56655.js",
    "revision": "2a3f4e1d33a7ff64f9e69ab4b99a795f"
  },
  {
    "url": "assets/js/28.fa54c0ab.js",
    "revision": "00c85f11f47a77f8bc188bc7c1df0bbb"
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
    "url": "assets/js/32.25b3a805.js",
    "revision": "2823e049890ea45dfd2667964bd42d5a"
  },
  {
    "url": "assets/js/33.4a4df23b.js",
    "revision": "f20a4023d01d3285a49a6b1b29d53e44"
  },
  {
    "url": "assets/js/34.dd0048e6.js",
    "revision": "635c55ca774ac69d8d0f51d79487dff9"
  },
  {
    "url": "assets/js/35.5b110848.js",
    "revision": "e11a07c02db6f27726855b1f81fcb7aa"
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
    "url": "assets/js/44.90ca3b4a.js",
    "revision": "6d9ce2a5cc2724117dc6179134a923ba"
  },
  {
    "url": "assets/js/45.750a6555.js",
    "revision": "53bd1fefb047fe8f9de3de7d1ddbbab9"
  },
  {
    "url": "assets/js/46.1b6add3c.js",
    "revision": "a980448c9b6c9d4a2886a4b478c3ef1d"
  },
  {
    "url": "assets/js/47.efce2342.js",
    "revision": "f290ad0b7af2c7f091dffcb111a7ebfb"
  },
  {
    "url": "assets/js/48.3e1f4b33.js",
    "revision": "26f4945def558836ff5a8a695298a3bd"
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
    "url": "assets/js/6.f9a9a57f.js",
    "revision": "bb560cdcbbd17bc4721f78557efd3d1f"
  },
  {
    "url": "assets/js/7.5ca1d5fc.js",
    "revision": "48d3fb6ddfb14b0bffd94533d1edabaf"
  },
  {
    "url": "assets/js/8.7cb45502.js",
    "revision": "7670c607252f3cdc4cce9b51b67fb19e"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.9129e23d.js",
    "revision": "6d798b2e8c1d10fc01989485d743eca7"
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
    "revision": "f871db056ca4a3c5b2ab41a2d3837981"
  },
  {
    "url": "category/index.html",
    "revision": "ed0f5055701d164ed11821c5e76f3798"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "5d5c61bea4be5d50bc5dee6deaece9b0"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "add0a7c38dc3df60ddcf085330aa0dd7"
  },
  {
    "url": "electron/index.html",
    "revision": "1dee52272f869084147a78bf31e3ce0e"
  },
  {
    "url": "extra/index.html",
    "revision": "491a4e85055770795c66e9211313e5e6"
  },
  {
    "url": "flutter/index.html",
    "revision": "24dbce02874af934efcb0f27aec45c33"
  },
  {
    "url": "flutter/test.html",
    "revision": "29c9bd3547ed68e7b6088d86dd3ca28e"
  },
  {
    "url": "guide/changelog.html",
    "revision": "39018fd28097ada9afb1b40fc3956db0"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "c47f3f6262f929d5ca08f1e84befc51f"
  },
  {
    "url": "guide/faq.html",
    "revision": "5b34239aade7d6204568d41d42aa471b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5084e05f3669211e082cb1d33fc34dd7"
  },
  {
    "url": "guide/index.html",
    "revision": "0e091fe8a3c16259c1d0013612c81cbe"
  },
  {
    "url": "guide/palette.html",
    "revision": "6d8ac70b8df3b67c3db33fc0855aaf29"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "105346c1778973967472613ff52bdd2a"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "63e32e711523843e49d41876365e8dc0"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "2b92b30f456a298646dc6e5cd7203345"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "c4c97b9594019be3b6d5eb0e84568561"
  },
  {
    "url": "index.html",
    "revision": "368179deee2b36c3799ffbeb911f769c"
  },
  {
    "url": "js/index.html",
    "revision": "1df91c50ec00ca6c2a1fd2aee00901bb"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "744a84dc545738c21c630f94c3a4b0fd"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "bc20046c134fd1ed8b486459104e71c5"
  },
  {
    "url": "midway/index.html",
    "revision": "2ad9b3d157da8d2becd84026b75750f6"
  },
  {
    "url": "notes/brew.html",
    "revision": "ee999b233e0cb456360ba62b6dd482a2"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "f441bec36991e296f22407277e02cf0e"
  },
  {
    "url": "notes/git.html",
    "revision": "593e36c9430ee20b483bf77a7b0f636a"
  },
  {
    "url": "notes/index.html",
    "revision": "425e59a270a2110695e363c0874338b7"
  },
  {
    "url": "notes/nginx.html",
    "revision": "011b6a195358f0320abebb15e502edaf"
  },
  {
    "url": "notes/node.html",
    "revision": "c95ba240fc0497d1c6ca0f667bc83b36"
  },
  {
    "url": "notes/npm.html",
    "revision": "011a98797c3d65e1433db24e4d023ecf"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "f4c82fc0f8bc6ce712abc83a05d1f795"
  },
  {
    "url": "notes/vscode.html",
    "revision": "4265f85bd532e4d2457f0e0d6128b3d3"
  },
  {
    "url": "plugin/index.html",
    "revision": "9d8ff1cbbecaee1b6ebebf4e19a7151a"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "823b0e297bee3ecd0a551add8bf0aa1f"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "003754c599c2616e8009cd67c4fd586a"
  },
  {
    "url": "tag/index.html",
    "revision": "c4b348b1ba72491415334b0f410acd29"
  },
  {
    "url": "uniapp/index.html",
    "revision": "9e529406a02582e41da8124495c63ab9"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "b784481a5b6c2ca88fc5a0bfa686c825"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "3395210a2543158e7a8063c0bfd14dea"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "913c89910f41de463c4d4f77baeddb08"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "33ee6629fedf7acaab81d647cc754ff5"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "56fbd37987fe2f74799a640981363ac8"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "d5c7ea56a39420e2a814a0c03bfa30c7"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "f082097e969668c3f1bddd9577fca7f0"
  },
  {
    "url": "Vera/index.html",
    "revision": "116e72cfe7f5c3ec2e17cb9262ae5248"
  },
  {
    "url": "website/index.html",
    "revision": "9ad6699bccdea7249e1ecc396ade0dc1"
  },
  {
    "url": "website/package.html",
    "revision": "729140c8f1251d7101ff7a4721e50a47"
  },
  {
    "url": "website/rearend.html",
    "revision": "56a6c364b2d849258d73c2924a30618e"
  },
  {
    "url": "website/tools.html",
    "revision": "a8060ad8c70d665860ba9b9790a54bbc"
  },
  {
    "url": "website/webclient.html",
    "revision": "667be8ad5188ecc07d7bbff2566a9f07"
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
