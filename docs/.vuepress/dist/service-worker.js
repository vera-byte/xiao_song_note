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
    "revision": "9584fc25dc9ba6c577fd7e3632ba4762"
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
    "url": "assets/js/14.82ccd473.js",
    "revision": "075ed2a10941f0d4da251f073c226986"
  },
  {
    "url": "assets/js/15.37f4e7ce.js",
    "revision": "218b7b604efb344f90effeeb3fa46759"
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
    "url": "assets/js/20.b67b1321.js",
    "revision": "3a18e6336fc4ddf30f0becae7d3771ed"
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
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.f22e2241.js",
    "revision": "b6a7b475ba5d4a641721f575b2f41e88"
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
    "url": "assets/js/28.8d23097d.js",
    "revision": "969ea5a81dd5d386b1aadedf9dba511d"
  },
  {
    "url": "assets/js/29.849783a0.js",
    "revision": "cef42dbcc27a77993397a95342406b7d"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.ea47f2de.js",
    "revision": "0bc5786ec752b7729aeb2ec77cd70d72"
  },
  {
    "url": "assets/js/31.15eedf15.js",
    "revision": "0c47aaf1d9c8fa1c17a2fedf79b69e0d"
  },
  {
    "url": "assets/js/32.4a58cbf3.js",
    "revision": "ac21337ce281f7f215691f682f236f78"
  },
  {
    "url": "assets/js/33.fd3f94bd.js",
    "revision": "3007e39023bdcf4acc9af737104ed854"
  },
  {
    "url": "assets/js/34.55f0b874.js",
    "revision": "06ee34e10115c0cfdfe400c0e5845f57"
  },
  {
    "url": "assets/js/35.7c0fe38c.js",
    "revision": "16879b65ca4b247c686710a71fd434bc"
  },
  {
    "url": "assets/js/36.24d31a9d.js",
    "revision": "d32e7b8a0f6051bdb0756716eb3056eb"
  },
  {
    "url": "assets/js/37.93761ccf.js",
    "revision": "8a15ddd3d58d0b59440456abc14ca80a"
  },
  {
    "url": "assets/js/38.9021c6da.js",
    "revision": "0db0be55f7dd2d088d5395190d9a7b9c"
  },
  {
    "url": "assets/js/39.ba18f8b8.js",
    "revision": "9a9b468801bbf06bdbffec7d6a73b4f6"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.678c6efe.js",
    "revision": "d4fb063d2a495f6d836e7e104e89984f"
  },
  {
    "url": "assets/js/41.2c192f52.js",
    "revision": "64ad96b05c1a421b245fd3c65b2dd36d"
  },
  {
    "url": "assets/js/42.a7b5b8bb.js",
    "revision": "65b14ebeb42963ea3e9af68e7a6504d9"
  },
  {
    "url": "assets/js/43.a2e0d28f.js",
    "revision": "c6bdcd04c727dea0cb37c18f53a0624b"
  },
  {
    "url": "assets/js/44.1d426cb7.js",
    "revision": "871b0a6ecf59eebf1f2062bf00a659ac"
  },
  {
    "url": "assets/js/45.6aa1f0b6.js",
    "revision": "a415218792c01402e503863f61f31ee1"
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
    "url": "assets/js/app.9cdf75a3.js",
    "revision": "da99061aebd91938d2954b22707d0613"
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
    "revision": "d00659fcebde79418f10c9114585de2b"
  },
  {
    "url": "category/index.html",
    "revision": "dd1cf16d5621acbeef53be5a7f4780d0"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "451dd32488242934f5f2bf1d0b5fbc1d"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "674ad7dad5692b83c97ba2fdfa004fc3"
  },
  {
    "url": "electron/index.html",
    "revision": "895f7fc2ba0bbd468a8ded1e6e52a0b4"
  },
  {
    "url": "extra/index.html",
    "revision": "d79a97dfa72e00463413923b2be63552"
  },
  {
    "url": "flutter/index.html",
    "revision": "7a151fc0dc3df7ab8fb23374209c34c6"
  },
  {
    "url": "flutter/test.html",
    "revision": "866af85b697b352db5447fbe7d6d29b2"
  },
  {
    "url": "guide/changelog.html",
    "revision": "be6d6b8c07585c6c069185226983c38d"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "cc69dfd94160981c0ccc56305ef6723c"
  },
  {
    "url": "guide/faq.html",
    "revision": "27104d5a62911f0204eaa88e9c1d0129"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "97789cdd936d49585ddc335f0d7da58c"
  },
  {
    "url": "guide/index.html",
    "revision": "89b00ed0a6a89001bc127e4add0bd804"
  },
  {
    "url": "guide/palette.html",
    "revision": "65df98dc350086f44289c87b66a8c347"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "572252f454845d21c10c53338d69c579"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "5efdb41f74a5375823d53b0da6e6a363"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "5432c947689e36d212339707a658ccb5"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "d81c00a3b7a0520e3d12b916bc36ae1b"
  },
  {
    "url": "index.html",
    "revision": "2407d91fdac45f6ca3e548a88c8e30c4"
  },
  {
    "url": "js/index.html",
    "revision": "416b6121f790fe04b1199938456ae20d"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "e706c2455a9fbd4920b3336974016a90"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "47731170fdf12646bdbf605b06ca1709"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "1c6f90b71d416801b13ba1e1917c53d8"
  },
  {
    "url": "midway/index.html",
    "revision": "baf9a3f3bce2814fb558ec342ce7f430"
  },
  {
    "url": "notes/brew.html",
    "revision": "1d2e1199571b3b85ac433093b2382ce5"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "5f63025d6fd190e1dbf5848730326c6d"
  },
  {
    "url": "notes/git.html",
    "revision": "1a4080d51d53775b301b5036b8965d1a"
  },
  {
    "url": "notes/index.html",
    "revision": "51a61ec7b70f0d9ed8d6bb87a0608921"
  },
  {
    "url": "notes/nginx.html",
    "revision": "db80f9553edc16644f99953763827442"
  },
  {
    "url": "notes/node.html",
    "revision": "a0828638ce54e89790ddf09e254f3e08"
  },
  {
    "url": "notes/npm.html",
    "revision": "63d01158735d08480b436bb9b0a48f0a"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "fbd1caacd183de0b54807c5c3998e429"
  },
  {
    "url": "notes/vscode.html",
    "revision": "205e9cd8693af2620fd9bb0eea9a496c"
  },
  {
    "url": "plugin/index.html",
    "revision": "53db76dd8691ceaa5b45e89b5564593a"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "2b47299d483802d47c8d53af17558431"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "76c58ae5b0b3329c90377ac1ff497ae5"
  },
  {
    "url": "tag/index.html",
    "revision": "d0340651a110efadfdae6e682a69ba4d"
  },
  {
    "url": "uniapp/index.html",
    "revision": "dce218099606fd23b7a881c4ac6351c8"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "ab990c15a1309a2ecae36ad6d067ced6"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "8572b664cdde516af6f237646305cfb9"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "64467929de2a581545a5d54fd503bff0"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "82ec0b681adda964e96f60acd869ec7f"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "21d4390302a1df8eea4ce4d385121329"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "a65978fd661a81fcf6de3de2598a7a0e"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "2560bcfeab8ec430988b638fa21212c8"
  },
  {
    "url": "Vera/index.html",
    "revision": "f24110914ca53b524b14985620177d90"
  },
  {
    "url": "website/index.html",
    "revision": "7ef1cb0c1e699944d739e6f8cc5b6511"
  },
  {
    "url": "website/package.html",
    "revision": "ac8c494af261b81da919ca9008a2812e"
  },
  {
    "url": "website/rearend.html",
    "revision": "bdce0fabb543752f8bcd93fca2704498"
  },
  {
    "url": "website/tools.html",
    "revision": "7df0326e69f61d4279d0f34b24001ce7"
  },
  {
    "url": "website/webclient.html",
    "revision": "443a7feedd5d9ae5c2cb9c85d8826ff8"
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
