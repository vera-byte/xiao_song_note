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
    "revision": "87557ffc6376db58445a103ec6e27588"
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
    "url": "assets/js/14.415aeafa.js",
    "revision": "0b7a40384d88dac0ddc19f10ee6869b2"
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
    "url": "assets/js/23.a63b91b3.js",
    "revision": "2f5900819c066648fc0a50e69b37b254"
  },
  {
    "url": "assets/js/24.77405ff3.js",
    "revision": "cbee9ac6ca1a2be18b273c158c2f5241"
  },
  {
    "url": "assets/js/25.fdf6e2d6.js",
    "revision": "af346d42c7617c0aee29c6fe6d70c498"
  },
  {
    "url": "assets/js/26.7fcef8e4.js",
    "revision": "be639cf5ab8038a6790ce5f3cc42bc37"
  },
  {
    "url": "assets/js/27.20bc908d.js",
    "revision": "535800559ef806926e1ffbcdfab07d96"
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
    "url": "assets/js/30.77447ff1.js",
    "revision": "aed784a0527954f40912fa01866692f6"
  },
  {
    "url": "assets/js/31.7184f202.js",
    "revision": "fdf7b1f2389696ea24d95fd00dd8efe8"
  },
  {
    "url": "assets/js/32.2c71b35e.js",
    "revision": "0bbafa8bea8d0f06129fa4588c934323"
  },
  {
    "url": "assets/js/33.6eaf8365.js",
    "revision": "f1119f4aab19e5fb1a3b4817a17dd3db"
  },
  {
    "url": "assets/js/34.1b98427e.js",
    "revision": "5802d0fc955620913fd9b8656445ace7"
  },
  {
    "url": "assets/js/35.a6aac769.js",
    "revision": "af8db1535109735a20462a574d9e7ebd"
  },
  {
    "url": "assets/js/36.0ce9d357.js",
    "revision": "578edf86a02ad2cfb302971898b89140"
  },
  {
    "url": "assets/js/37.36890e8a.js",
    "revision": "0c71ede7ba4e3cd40cade9e7ef454e64"
  },
  {
    "url": "assets/js/38.2103f248.js",
    "revision": "4a46cd9561288f362d4824361fff7f89"
  },
  {
    "url": "assets/js/39.f4079444.js",
    "revision": "d340b0914e7eea72b16332de8fde2f87"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.3b4531e3.js",
    "revision": "c72de686561c172469d1654581fe7bb2"
  },
  {
    "url": "assets/js/41.3e62fe90.js",
    "revision": "ae3c43de5aec2d57da04f0398f623468"
  },
  {
    "url": "assets/js/42.841cdb7c.js",
    "revision": "c855a1cc9727d722fec4a5cf76773f84"
  },
  {
    "url": "assets/js/43.10edf05c.js",
    "revision": "2140a65224dc48d1e3edcd3e8a6734c5"
  },
  {
    "url": "assets/js/44.b4ae5b37.js",
    "revision": "b1479d8ccd2b9474957416a2b9ca6184"
  },
  {
    "url": "assets/js/45.ac094a41.js",
    "revision": "f8e6ad689f399460de5a7dc4e1d1792f"
  },
  {
    "url": "assets/js/46.ef4d4b0f.js",
    "revision": "925f1c59cf41a0647c6a7f992b96ccf1"
  },
  {
    "url": "assets/js/47.300c46bf.js",
    "revision": "f8816adc86acd007acf08b846cb0c528"
  },
  {
    "url": "assets/js/48.acf7eef5.js",
    "revision": "756cbddf2c783702a1cc89104c5a9776"
  },
  {
    "url": "assets/js/49.ae6d74a3.js",
    "revision": "16ef27c2d85c0be1e4593b767cccaaae"
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
    "url": "assets/js/app.74fe326b.js",
    "revision": "dc0eb4888600527c159a2cdc497dc288"
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
    "revision": "8c79f5945c6e22f26cb128c1749cf70f"
  },
  {
    "url": "category/index.html",
    "revision": "544de8b92dfe5b5bf916018b495ed2fd"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "5533f5cd9545a3218c922cca1b175ea4"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "7cc32c5793c2e8790948e1dea9b0a810"
  },
  {
    "url": "electron/index.html",
    "revision": "8eb47faeeecf1d9eb937b4c3b85f0b64"
  },
  {
    "url": "extra/index.html",
    "revision": "5e969aa4a9cbcfdb76321a55b85d2979"
  },
  {
    "url": "flutter/index.html",
    "revision": "f3dc6493e7f4b1f1646837157c881529"
  },
  {
    "url": "flutter/test.html",
    "revision": "01a28876f7c12dfc9ec38debd40da026"
  },
  {
    "url": "guide/changelog.html",
    "revision": "f82a78e72ea25efd85d1297446e53a52"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "64e040079b67d2c5067cdf1303757d52"
  },
  {
    "url": "guide/faq.html",
    "revision": "9c1a5a0b52a0073de5c96c7bd6144b6c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7739f8f9a0f65d44cb0491d9cca86529"
  },
  {
    "url": "guide/index.html",
    "revision": "2dce5355b94d13fd7e3168d802215f81"
  },
  {
    "url": "guide/palette.html",
    "revision": "45cf3b0a6c05f1839aa28f81cc642fed"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "6864f4a4e13515cf18cfc38f5c023361"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "6cbda518d61eab0724c370d417ad218e"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "d9f11da2d74a88b3e05aab8f58b5c371"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "b8977d3712398a73a9f4ca933dd9130c"
  },
  {
    "url": "index.html",
    "revision": "0406b7f0986c72f01a1c9c692ad1a6b7"
  },
  {
    "url": "js/index.html",
    "revision": "053ff0bc242e4095d4aae6b2a26bbedc"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "41946c4760cd2d496776bb221d70f802"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "347a8982eef0d6eecbeff1abd6fdf569"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "9deaa816179e21931e20c4a21493b2ab"
  },
  {
    "url": "midway/index.html",
    "revision": "d11f01fbece4f835ac7534dab2399974"
  },
  {
    "url": "notes/brew.html",
    "revision": "8b7d47e3b88bbabf36a378b95effa44d"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "0a2836b5d91e3fe5623719b172c20cc6"
  },
  {
    "url": "notes/git.html",
    "revision": "444816af5dbcc2bcac9d7ada70c14333"
  },
  {
    "url": "notes/index.html",
    "revision": "b3c51fc0c74a5a5ac280bf4134770103"
  },
  {
    "url": "notes/nginx.html",
    "revision": "46ddca2634d7caf48ca5e2491478ad47"
  },
  {
    "url": "notes/node.html",
    "revision": "f894327ada19eb29cb3c2fba650e7267"
  },
  {
    "url": "notes/npm.html",
    "revision": "4d549cca45453a5c179c13a1e01ba97b"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "dace2056ff8896009f0bb1e86f64aa10"
  },
  {
    "url": "notes/vscode.html",
    "revision": "80d51b3c636573cab7ce191880c69928"
  },
  {
    "url": "plugin/index.html",
    "revision": "f62f1a24a8526900ec064b0605cd3a41"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "81e13c31d06c1243b3a66efcc64a32f9"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "b7ddf155d52889448b9c3be7d0317e4f"
  },
  {
    "url": "tag/index.html",
    "revision": "8cf3a88a00651e7d366e43c6d8be29a1"
  },
  {
    "url": "uniapp/index.html",
    "revision": "ae777992107a8dc89f524ba65eb97236"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "e0634c1647f8cc107ce757b98e06d400"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "dbb504230cf70bde0e3f11dfa5a480be"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "9a3ff877c8bca527286d2199fdf17ba5"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "b0d67212e71a3a0db2819e8532f2273a"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "8bbf1b4f7329c4c9ce74bb59084e0299"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "4c302b319f6985e6ef4680ea53ae9440"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "cd67b3e8c560c182e4cf7af59c774b21"
  },
  {
    "url": "Vera/index.html",
    "revision": "361b7d6feb30edd298c6787944c08a70"
  },
  {
    "url": "website/index.html",
    "revision": "90aac60eb7d7a58eba3968cb3f4471fb"
  },
  {
    "url": "website/package.html",
    "revision": "bd30db5f827512a51fcac34aa874adf7"
  },
  {
    "url": "website/rearend.html",
    "revision": "7278b6a30cfc75c79aba427c71942000"
  },
  {
    "url": "website/tools.html",
    "revision": "1179bb4612b475db6e683520e0376fa8"
  },
  {
    "url": "website/webclient.html",
    "revision": "fa97166853533d3156b623becc9eeb2c"
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
