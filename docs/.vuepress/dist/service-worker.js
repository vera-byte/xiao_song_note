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
    "revision": "6c4aa7e8999ed5d59e09b0ddd5f3f2a5"
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
    "url": "assets/js/12.7043cb0c.js",
    "revision": "190c2395e5b7b7b38bf98202c28eb047"
  },
  {
    "url": "assets/js/13.504d44ab.js",
    "revision": "182466f98ee9d6ffb545faf069c7777e"
  },
  {
    "url": "assets/js/14.c7c99f4d.js",
    "revision": "7f1796dbab5344718cdbd1fd2adfd3fa"
  },
  {
    "url": "assets/js/15.e946a905.js",
    "revision": "292394b0a6e5e2034cf87ecbff9970ee"
  },
  {
    "url": "assets/js/16.9d1e6ecd.js",
    "revision": "47ea104990ae2814f47090c9b9c7d4f6"
  },
  {
    "url": "assets/js/17.080a3714.js",
    "revision": "39214940d282f84a2cc3c1aa88e3bc1d"
  },
  {
    "url": "assets/js/18.7d4087d9.js",
    "revision": "5a35e76f514ab849acb3dce52ea77661"
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
    "url": "assets/js/21.b78a8066.js",
    "revision": "9aba97eb1678d2a9dbac7aafadafcd2f"
  },
  {
    "url": "assets/js/22.afc333d7.js",
    "revision": "ba8d81892ad3cca45ad6f4b42e0f2857"
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
    "url": "assets/js/25.086b0a41.js",
    "revision": "24ed9bfdab177a5343cf882b9705fa1b"
  },
  {
    "url": "assets/js/26.c3c228ad.js",
    "revision": "aa2bcfe6ddb0c0af81ca87c515f16671"
  },
  {
    "url": "assets/js/27.51bef9d4.js",
    "revision": "7c5cd51a7a3ae5ab3f41a8b977cbff9a"
  },
  {
    "url": "assets/js/28.2064f964.js",
    "revision": "06e1fdee575b392221c9630dfee0a5d8"
  },
  {
    "url": "assets/js/29.21d720ec.js",
    "revision": "3fdca77d40a9e7968e897567c813d891"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.c348cc93.js",
    "revision": "ed404e7c820aad46ea19583b1092e209"
  },
  {
    "url": "assets/js/31.c08ea46d.js",
    "revision": "d0fc9b3e8e976756eab34b34ad87c66e"
  },
  {
    "url": "assets/js/32.8c4b79c5.js",
    "revision": "ca2323ab11fb1ee15ae0eaff21979921"
  },
  {
    "url": "assets/js/33.68c8a4f5.js",
    "revision": "d5d11c5dda9f3413fb86d9c800cbc2e4"
  },
  {
    "url": "assets/js/34.7b51dcbc.js",
    "revision": "fccff4f208d2362b6cb6d1a7e00b998a"
  },
  {
    "url": "assets/js/35.d063e2d7.js",
    "revision": "bdbed8d0c514fbcae9112b904dd2436f"
  },
  {
    "url": "assets/js/36.806a3681.js",
    "revision": "ee7d933702df938e77b7d2b2d82b3222"
  },
  {
    "url": "assets/js/37.d67b4be3.js",
    "revision": "71780fa0c26e3c0fa8788c4e8cea0f0d"
  },
  {
    "url": "assets/js/38.324e2187.js",
    "revision": "be643025accdfcccd3f0c31ebc97acda"
  },
  {
    "url": "assets/js/39.61157257.js",
    "revision": "86165cf5b4832625cbaf5babd37e0510"
  },
  {
    "url": "assets/js/4.713aa854.js",
    "revision": "e0e53f27bc68b4e7a4344aead11e397c"
  },
  {
    "url": "assets/js/40.10936b04.js",
    "revision": "88b4b97d2171f00b105052387920acf3"
  },
  {
    "url": "assets/js/41.28ce0fa7.js",
    "revision": "f80e283be1753e541c3f3d7b1b100112"
  },
  {
    "url": "assets/js/42.805a7425.js",
    "revision": "acbff8850f70ed5447cd12ba08e0b3fa"
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
    "url": "assets/js/7.9caa1433.js",
    "revision": "f944aa0f4b00f76e6a60aaaa5ffeb468"
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
    "url": "assets/js/app.7c4cb047.js",
    "revision": "f9443741402d207e10c99b56ec0b8b94"
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
    "revision": "edc4314c32715b37fb1cfce6dbd0f5df"
  },
  {
    "url": "category/index.html",
    "revision": "38ec33de53313e660fcb1c2182b80060"
  },
  {
    "url": "egg/index.html",
    "revision": "c855c63f42cc938b8a32842a27581898"
  },
  {
    "url": "electron/index.html",
    "revision": "e24864ce043f5614b484331b3eb0056d"
  },
  {
    "url": "extra/index.html",
    "revision": "76061ccb880824d64a73bbaec6173e0c"
  },
  {
    "url": "flutter/index.html",
    "revision": "57e1807d40628217220efcbf740f2163"
  },
  {
    "url": "flutter/test.html",
    "revision": "d08f5b3994250add20cd860244826bf5"
  },
  {
    "url": "guide/changelog.html",
    "revision": "4cb0d1a7fae587b0b28f985d4db2b033"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "ec53266739f8b1900de36785f4360681"
  },
  {
    "url": "guide/faq.html",
    "revision": "c9310651b65bd307f8c7f28151f4a261"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "54aba19540411a8f8e1a2cc32815509a"
  },
  {
    "url": "guide/index.html",
    "revision": "6a4549f96c2648fe5ba75c58157e9ec3"
  },
  {
    "url": "guide/palette.html",
    "revision": "b17cb789af762b64646b542ebefd708e"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "e65dbadc89cab9560ac673322132e40a"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "24c073ffcddee9c1e8e8e06bc1bdceb7"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "c0993ff8b192ac2fe821e463c6a82f9a"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "954b0d1a80da7774378f869f3d25275d"
  },
  {
    "url": "index.html",
    "revision": "7f431f2ce61a9dff1fdf7e67767c4c12"
  },
  {
    "url": "js/index.html",
    "revision": "6894edae3ced9aa6e46bdaadb5db0044"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "6b67c9a41c722cd251cf9d3205870529"
  },
  {
    "url": "notes/brew.html",
    "revision": "c80c598421dff201fe858d2c11a0527b"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "283980bf52f7481a3b921580e57a12e3"
  },
  {
    "url": "notes/git.html",
    "revision": "4f106d8b2468f9b802cc83416bd8bf3c"
  },
  {
    "url": "notes/index.html",
    "revision": "9827f57c852ee3047510eb71477af9bb"
  },
  {
    "url": "notes/nginx.html",
    "revision": "c4cba9327d4b9b6de74798617c2d97f4"
  },
  {
    "url": "notes/node.html",
    "revision": "e20a328cc6062c980f1fa68e151f1328"
  },
  {
    "url": "notes/npm.html",
    "revision": "385a6fbd6af66f4e0b6420c5450b2a9f"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "10d70199ee78569b57aab6447c488ff0"
  },
  {
    "url": "notes/vscode.html",
    "revision": "b20abe586fb244c18a1621c3e7cc6d2e"
  },
  {
    "url": "plugin/index.html",
    "revision": "a0bdaabf0da40f0dca9bcebd133168a7"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "75c1eab841b89b438f8ef36076a0cf15"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "c213c43365f70a0d1a16fd6a1f97e9f9"
  },
  {
    "url": "tag/index.html",
    "revision": "06035f0f0cf67988adeca3c52d154916"
  },
  {
    "url": "uniapp/index.html",
    "revision": "e95db3df6abd2eee58667c83821b0809"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "f8f9d702a4f90c7fb09034cd27098331"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "ea6319f414b5a03800d013a4f1b5cce4"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "9cd896133c80b0cfe3fe5331186de85d"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "87c83d6ddaeb98ec24ddfc3e35192007"
  },
  {
    "url": "Vera/index.html",
    "revision": "bd21ad9dd991dc6a87febb9fbf00c174"
  },
  {
    "url": "website/index.html",
    "revision": "a1b45d161f34e82b24b413b886013721"
  },
  {
    "url": "website/package.html",
    "revision": "00da33370e5850cc943bf58a53587142"
  },
  {
    "url": "website/rearend.html",
    "revision": "88e28c0b4679ff28b17bdd0d9ca5d467"
  },
  {
    "url": "website/tools.html",
    "revision": "41d9fd8496027d64ede5867a815d171b"
  },
  {
    "url": "website/webclient.html",
    "revision": "43edfa3353c4ab242d2d19dea33b2ff7"
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
