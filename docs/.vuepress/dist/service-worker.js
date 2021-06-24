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
    "revision": "c6862ba185db67a24dbcdd6c8e0be015"
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
    "url": "assets/js/18.d66ca052.js",
    "revision": "d07e54dc133edf1c6f339ec43e6dbf80"
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
    "url": "assets/js/20.f1dd5fa9.js",
    "revision": "3dc94e7263ccadc0d14f9fc52a65289d"
  },
  {
    "url": "assets/js/21.768f0488.js",
    "revision": "da62b8e2cf6b13d91de3092d159c3f03"
  },
  {
    "url": "assets/js/22.ba4c4f9b.js",
    "revision": "e9036408f608783a7effa2db1b890256"
  },
  {
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.8441aad7.js",
    "revision": "f8198bf2bc1d80247992f75c6c71ed8f"
  },
  {
    "url": "assets/js/25.749cf2b4.js",
    "revision": "5d5e1a7d031b0e1e0ea3ed2b8446566f"
  },
  {
    "url": "assets/js/26.0f94172a.js",
    "revision": "3e2932e6ca0477d9aafa2e19583ecffe"
  },
  {
    "url": "assets/js/27.e08fe835.js",
    "revision": "6c8b1305ad3201826e80b815bfb1ea34"
  },
  {
    "url": "assets/js/28.ec727ef5.js",
    "revision": "cdaeb7bd6b7904a22963e01f7b2f5892"
  },
  {
    "url": "assets/js/29.3e28d2dd.js",
    "revision": "1aaf510d0378399b4e455588305c9769"
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
    "url": "assets/js/31.25c685fc.js",
    "revision": "1b39513f925c56904f901fecac98d2e2"
  },
  {
    "url": "assets/js/32.c50226f8.js",
    "revision": "2f6a38b8aca5b78b64c975c92168287f"
  },
  {
    "url": "assets/js/33.aba0239e.js",
    "revision": "47f2613e3beafc8de3275adac4187750"
  },
  {
    "url": "assets/js/34.1b98427e.js",
    "revision": "5802d0fc955620913fd9b8656445ace7"
  },
  {
    "url": "assets/js/35.31fe1265.js",
    "revision": "ea0f6e27c4d428981039dea49af1f8f6"
  },
  {
    "url": "assets/js/36.3c1a9c2d.js",
    "revision": "66bfec097884be55b1d6edcfb71f3639"
  },
  {
    "url": "assets/js/37.180bcdf6.js",
    "revision": "38abca4b59f65c07edac89c7efd47d6a"
  },
  {
    "url": "assets/js/38.9021c6da.js",
    "revision": "0db0be55f7dd2d088d5395190d9a7b9c"
  },
  {
    "url": "assets/js/39.e3ea94a1.js",
    "revision": "fed1246da3be13ac4a379eae01f661c9"
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
    "url": "assets/js/42.273e26ec.js",
    "revision": "1aeeeaeb3dfe5fb9d16f0f08fbc3ad48"
  },
  {
    "url": "assets/js/43.e7793c59.js",
    "revision": "bf65ca9aad6813f1460cdf8f29e7772b"
  },
  {
    "url": "assets/js/44.deb8ed83.js",
    "revision": "26faf043dce5b6668c90acac796a0d1c"
  },
  {
    "url": "assets/js/45.ef5e0fe5.js",
    "revision": "282e7478dd88934fd17415f996a8c0fa"
  },
  {
    "url": "assets/js/46.62c51c7c.js",
    "revision": "ebd9cc81bec68830c46e0800c6c2f6a0"
  },
  {
    "url": "assets/js/47.23db6897.js",
    "revision": "2217a80f5e9123f9ac0cbfc322780eec"
  },
  {
    "url": "assets/js/48.a371b087.js",
    "revision": "0efa2b6807059b4617c101470fb01b6d"
  },
  {
    "url": "assets/js/49.a33a8b05.js",
    "revision": "38fdc04e3f4f5392156d45ac15caec50"
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
    "url": "assets/js/8.822cea0f.js",
    "revision": "e7c4e5c0bba7531f8c2ea79b5b4ab01f"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.5282e88d.js",
    "revision": "9d7e18f74fef1b418488ed3700ebabd2"
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
    "revision": "b869ceb59e70c6edb61e31a27be6321d"
  },
  {
    "url": "category/index.html",
    "revision": "199d04f078c4dfb75dca72e4c8ba9498"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "c54d459255926d9ee623e32242013a39"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "dd884f5d0920c65c1f2a7d6c24eff379"
  },
  {
    "url": "electron/index.html",
    "revision": "2f30d0f9c63df95400459d4a1b953bda"
  },
  {
    "url": "extra/index.html",
    "revision": "3c79f945f8bf7a3f3901de54c524a47e"
  },
  {
    "url": "flutter/index.html",
    "revision": "44c11451d39f447c0ba325c497ee83ea"
  },
  {
    "url": "flutter/test.html",
    "revision": "61f44d63d036c0a2b249b3f34fed3f12"
  },
  {
    "url": "guide/changelog.html",
    "revision": "7fa4ba8cd074fc4978a14d34e0e10f28"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "2ad759f0df1c7f55b37ad39cdd5ded97"
  },
  {
    "url": "guide/faq.html",
    "revision": "e09afd54c100083b060952b350b1e1b4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "af230595f804513c3825a7ca55875424"
  },
  {
    "url": "guide/index.html",
    "revision": "a3df3cc1b05b3a3617b32cd802598443"
  },
  {
    "url": "guide/palette.html",
    "revision": "38fd8ca636c22af31a26abb934704f26"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "cc673f65c284a3fd49c2abe5edaf5f1f"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "9d1998320ce21d7f776648a7cbd86749"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "5335011030624b3a40d1b2bdecd13fd3"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "5dd7cb92fd70b74ae11716c00f50b559"
  },
  {
    "url": "index.html",
    "revision": "2eccbc19ac4a538c0a44fc654ff33a6e"
  },
  {
    "url": "js/index.html",
    "revision": "0b1cc1dab79202fc52ea766911742232"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "2247aa964a37295d52bd5f97ff848ed1"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "452293ec0e44d2f446e7e20ac77c6456"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "fb4fe97c37aaacbf8fd6187072ee8c25"
  },
  {
    "url": "midway/index.html",
    "revision": "1faa9f81acc69f257e56ee3d9483b7b6"
  },
  {
    "url": "notes/brew.html",
    "revision": "272edad5f653a1558b26f9f4c1fb666d"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "2b821176e21f1a0a649892614ee04ae4"
  },
  {
    "url": "notes/git.html",
    "revision": "9386a1e4be96c250590393ca1495f389"
  },
  {
    "url": "notes/index.html",
    "revision": "bd6f6e4b3ff9bd38469bbe2aecffada2"
  },
  {
    "url": "notes/nginx.html",
    "revision": "d7abce7061a0d658c8be59620b773cd9"
  },
  {
    "url": "notes/node.html",
    "revision": "b011b37a771d0e4613fba72224532218"
  },
  {
    "url": "notes/npm.html",
    "revision": "9818b2701dee7fdf38e72a3a1f6d0f9e"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "28f170c051fb9dd09511997ed9315834"
  },
  {
    "url": "notes/vscode.html",
    "revision": "02fffebf4ad0c99e8befc9c1d5c62588"
  },
  {
    "url": "plugin/index.html",
    "revision": "5adc43156f215fb31806388205968edc"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "ab04ab4885fc4df1296d1d45504df2b0"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "88313c3701768cb33fc00aaefcd86aaf"
  },
  {
    "url": "tag/index.html",
    "revision": "4383b7f87f15ccf41dd4eed6be451f6d"
  },
  {
    "url": "uniapp/index.html",
    "revision": "73de939d885a74e78a867ab34d8e01e2"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "99de5e32918d184ced1fecaf2e1705e7"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "85acb2be9e9c3c7b87b71729382850af"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "86163c7d1d90f7636323a74731f3dc2f"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "28bb7982c875e631f49232a89e200a0b"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "dde45215be6d7c88ed4409df931a145b"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "1218645b755af9bc3d59946df8307ebd"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "b7ffc0274a03b527ef85e3c7eb2f90a2"
  },
  {
    "url": "Vera/index.html",
    "revision": "318d1a9b2becb922e35c27570ef10d7c"
  },
  {
    "url": "website/index.html",
    "revision": "ebe463eb5ae9dcf6190c63e1a254bf97"
  },
  {
    "url": "website/package.html",
    "revision": "205d612096cf759038440e5fdc11f8f4"
  },
  {
    "url": "website/rearend.html",
    "revision": "d0fd285111e7c584fa5460d0c3b6fb79"
  },
  {
    "url": "website/tools.html",
    "revision": "29c3aaaa703da58f3af9349558b4c5fe"
  },
  {
    "url": "website/webclient.html",
    "revision": "89e9e5ad3763642804a57e05c8d92587"
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
