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
    "revision": "9a34fcf3bb3a720942aae86fb62ad2f6"
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
    "url": "assets/js/13.c37a5990.js",
    "revision": "e9526202cb53e49d4b144412c92237a7"
  },
  {
    "url": "assets/js/14.4b74c2a6.js",
    "revision": "8cd3dfcfe16aec71883fc58b75eed9c0"
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
    "url": "assets/js/21.b78a8066.js",
    "revision": "9aba97eb1678d2a9dbac7aafadafcd2f"
  },
  {
    "url": "assets/js/22.afc333d7.js",
    "revision": "ba8d81892ad3cca45ad6f4b42e0f2857"
  },
  {
    "url": "assets/js/23.9f82479e.js",
    "revision": "ea8083bc7052a9970e32b426c85daf01"
  },
  {
    "url": "assets/js/24.1036e2f4.js",
    "revision": "63b50e77d5442ca4c5f7a8cfc891be2e"
  },
  {
    "url": "assets/js/25.02c555da.js",
    "revision": "4cc7c2ff1400c66e952a33050d549c47"
  },
  {
    "url": "assets/js/26.701b4a2a.js",
    "revision": "477388211cf431f0fde79595f0ae105f"
  },
  {
    "url": "assets/js/27.51bef9d4.js",
    "revision": "7c5cd51a7a3ae5ab3f41a8b977cbff9a"
  },
  {
    "url": "assets/js/28.5e931129.js",
    "revision": "16017e53775acbb6e8ac381c3c927ba9"
  },
  {
    "url": "assets/js/29.68729b9f.js",
    "revision": "1ce8e6a024952e11ca98cecc7ce630c1"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.009cd611.js",
    "revision": "84da5ff8355e61e30b372293c3d7ee2d"
  },
  {
    "url": "assets/js/31.689d0402.js",
    "revision": "d2aafccd1cc8b632c50be76f7db95551"
  },
  {
    "url": "assets/js/32.397066fe.js",
    "revision": "d16b0f9ec9768f8a04b9599d78812704"
  },
  {
    "url": "assets/js/33.1659cdab.js",
    "revision": "2d3ce0b01458b946a64bd349e70cece5"
  },
  {
    "url": "assets/js/34.87a17869.js",
    "revision": "6c5ba3465f49421aa5898d9073253172"
  },
  {
    "url": "assets/js/35.2730c43c.js",
    "revision": "2854ee170aacaf1d8fc33c54768f93fc"
  },
  {
    "url": "assets/js/36.22703ff1.js",
    "revision": "dc56c50a3ef716f4f0c93603db12e8e0"
  },
  {
    "url": "assets/js/37.8e5ded74.js",
    "revision": "c408a8a04901da3f426f9c063778a90a"
  },
  {
    "url": "assets/js/38.27fb806a.js",
    "revision": "d927690b18e8968f96d0b51e7e58ad8f"
  },
  {
    "url": "assets/js/39.4fb529dc.js",
    "revision": "f1c5e7b5ef608595e43421c5a95fb5a5"
  },
  {
    "url": "assets/js/4.713aa854.js",
    "revision": "e0e53f27bc68b4e7a4344aead11e397c"
  },
  {
    "url": "assets/js/40.3c831f20.js",
    "revision": "21b9f426357e5144ed93d885ecac3058"
  },
  {
    "url": "assets/js/41.6acd7219.js",
    "revision": "7275fe70d55e9c154f3021f09c6a6b67"
  },
  {
    "url": "assets/js/42.3727066e.js",
    "revision": "1bea60d136ef0aff6eae9988a8fd9dc1"
  },
  {
    "url": "assets/js/43.323bf211.js",
    "revision": "02f5c20f424472137ef6513fcce8b586"
  },
  {
    "url": "assets/js/44.a131d420.js",
    "revision": "4679689b6b8abc50efdbdd51c7f6aac1"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/6.79e579ec.js",
    "revision": "ac5c7db22d3eda2c3adb680ab94effce"
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
    "url": "assets/js/app.b56f74b9.js",
    "revision": "9e3a2e8756491e7c4d7e0b53ae7058db"
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
    "revision": "3096828b85392caefde829dda6c50e16"
  },
  {
    "url": "category/index.html",
    "revision": "5bcb3f08d5ceba47f0bb96ac7fe934ec"
  },
  {
    "url": "egg/index.html",
    "revision": "623f0dbe8bd0674ef2dbee497f5b6428"
  },
  {
    "url": "electron/index.html",
    "revision": "30514e125cd089c97a18a7e10006cd7c"
  },
  {
    "url": "extra/index.html",
    "revision": "4324cf286d5051e9d657a50ef3fcbb2a"
  },
  {
    "url": "flutter/index.html",
    "revision": "44f73335058a409592aa9b817b14632b"
  },
  {
    "url": "flutter/test.html",
    "revision": "967394cd60ea1c44db92da9aa35b9c85"
  },
  {
    "url": "guide/changelog.html",
    "revision": "2d74d46cd1a81c29bbd00e597f7e3758"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "ab5ca70c0c7a6112cf292349cea2379b"
  },
  {
    "url": "guide/faq.html",
    "revision": "0ad6fd31092183c77d5dd0e97fc66992"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9c737e88c2e6a3da795a9a32cfa9fb77"
  },
  {
    "url": "guide/index.html",
    "revision": "ff13dbf0f54ab1c0bbe210cff25dafb3"
  },
  {
    "url": "guide/palette.html",
    "revision": "eaf10ce89238e98c01e54b7c15cd2ced"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "a12a7cba23395fe40762db4d15a702b3"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "09ac2bef0d7c2d23566336ddb9c6b784"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "13b5ee0f268bbfd67d39bbd8b508fcf1"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "2f69f94b50e1a0f3d87beb0c423644ff"
  },
  {
    "url": "index.html",
    "revision": "5b2d2899b2cbba62195d76ce5ffbce54"
  },
  {
    "url": "js/index.html",
    "revision": "7c60a8bf92e52857bfe4a0e24d1e9369"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "1c08f5e9207f2b945330a42a3df7f798"
  },
  {
    "url": "notes/brew.html",
    "revision": "adea70798e5628ec992a990e4cd2cb27"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "2dea4ae3f9077bc92a5ea17f9f0edd1e"
  },
  {
    "url": "notes/git.html",
    "revision": "30001363ca2b082fc25a6de2bf15dc53"
  },
  {
    "url": "notes/index.html",
    "revision": "e2711c0dc4818a2b72cb061b6b0207af"
  },
  {
    "url": "notes/nginx.html",
    "revision": "f537b35b497c13da873e3873c1d046ad"
  },
  {
    "url": "notes/node.html",
    "revision": "3a20704260fdb5e20c24f5b5dbd3cb68"
  },
  {
    "url": "notes/npm.html",
    "revision": "1f6d96cb2035c15996e67cf5b5e898c8"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "47980c6f54537fd808c0db26bae6bb22"
  },
  {
    "url": "notes/vscode.html",
    "revision": "58e77332c508a17391956497ca801c30"
  },
  {
    "url": "plugin/index.html",
    "revision": "a6e48edf5242a09930e5c774d634bc26"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "bd6c9f86b2286647e1181e592897a4ed"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "b1ad8b3ea21a6c1b468e5a0f1fa94440"
  },
  {
    "url": "tag/index.html",
    "revision": "b1a36f149b7bbf706d495b2be17022d6"
  },
  {
    "url": "uniapp/index.html",
    "revision": "f2fb483590194950b6046a93730ac272"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "2ff2cc028c4247f6d11860d426971999"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "e165cc9a37bab008e7a2e73aae0b439a"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "17d9d5bc28a2025afcf84f57bf16ce34"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "880ae9ef07093fad7ae70451c4c74666"
  },
  {
    "url": "Vera/index.html",
    "revision": "722a24f4be8bc1cfbc8c694992b4b5f5"
  },
  {
    "url": "website/index.html",
    "revision": "abec459b04e2f13bbccc5e0855f0198a"
  },
  {
    "url": "website/package.html",
    "revision": "47d5bce7611b8ef9f2fc5d6d9f34e67d"
  },
  {
    "url": "website/rearend.html",
    "revision": "9ce8ac22d74bf97ea97c1e45d0a8bd5e"
  },
  {
    "url": "website/tools.html",
    "revision": "e8906aac09410dc3a9c2b0c92f164673"
  },
  {
    "url": "website/webclient.html",
    "revision": "c8ca5fcb1658bda2fbeadafa36d4557f"
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
