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
    "revision": "e9da48ebddddbe613e3d7f6f089cf536"
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
    "url": "assets/js/14.9c6ab598.js",
    "revision": "bc8222297e1b55166956ec0ec7616647"
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
    "url": "assets/js/19.aeb98cc1.js",
    "revision": "b7350fb5685c8fe820862e9f8cc25c27"
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
    "url": "assets/js/21.768f0488.js",
    "revision": "da62b8e2cf6b13d91de3092d159c3f03"
  },
  {
    "url": "assets/js/22.b420dd19.js",
    "revision": "f80d2de8b77fad0b0da7536964462207"
  },
  {
    "url": "assets/js/23.9f82479e.js",
    "revision": "ea8083bc7052a9970e32b426c85daf01"
  },
  {
    "url": "assets/js/24.8441aad7.js",
    "revision": "f8198bf2bc1d80247992f75c6c71ed8f"
  },
  {
    "url": "assets/js/25.75188129.js",
    "revision": "7e3174bca383d65f7ecbb1d1b6c7b36e"
  },
  {
    "url": "assets/js/26.7fcef8e4.js",
    "revision": "be639cf5ab8038a6790ce5f3cc42bc37"
  },
  {
    "url": "assets/js/27.807ae768.js",
    "revision": "e33275ac3f5837a49332cd44b48f4f96"
  },
  {
    "url": "assets/js/28.8d23097d.js",
    "revision": "969ea5a81dd5d386b1aadedf9dba511d"
  },
  {
    "url": "assets/js/29.9faab774.js",
    "revision": "1382d2550cebcfb3e9283c5691670fc0"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.606f06b2.js",
    "revision": "7cc306a677e412e8e2fc413fceae9dce"
  },
  {
    "url": "assets/js/31.941856b1.js",
    "revision": "90dd7dc1c2fa0dab8593098823a3a858"
  },
  {
    "url": "assets/js/32.7908583c.js",
    "revision": "4765270cad1ca5843fc574fae908d86e"
  },
  {
    "url": "assets/js/33.b72f097a.js",
    "revision": "f707eb871e040850f526fef619d9f161"
  },
  {
    "url": "assets/js/34.5a8b9907.js",
    "revision": "def085c2b9fc7b79c89704fa25a9bf29"
  },
  {
    "url": "assets/js/35.3c11663f.js",
    "revision": "9c1ef34f280b32072562ead918bd6ca0"
  },
  {
    "url": "assets/js/36.bf4840f4.js",
    "revision": "155ae800508790d58fe4085f7f00d5c6"
  },
  {
    "url": "assets/js/37.c7b4b4ad.js",
    "revision": "cd2fe9cecbe8da20463f34b3a7864baa"
  },
  {
    "url": "assets/js/38.9021c6da.js",
    "revision": "0db0be55f7dd2d088d5395190d9a7b9c"
  },
  {
    "url": "assets/js/39.d712b786.js",
    "revision": "ff5090cc4b8954375e509c277074c161"
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
    "url": "assets/js/41.3e62fe90.js",
    "revision": "ae3c43de5aec2d57da04f0398f623468"
  },
  {
    "url": "assets/js/42.bb12e053.js",
    "revision": "6d15c0da2f30593c665ddcc05e5d2ac7"
  },
  {
    "url": "assets/js/43.5cb53f0a.js",
    "revision": "67221313124f46f6c26a10041ac346aa"
  },
  {
    "url": "assets/js/44.b4ae5b37.js",
    "revision": "b1479d8ccd2b9474957416a2b9ca6184"
  },
  {
    "url": "assets/js/45.b92eef3e.js",
    "revision": "4379d12e0104eb0642699f7641118153"
  },
  {
    "url": "assets/js/46.62c51c7c.js",
    "revision": "ebd9cc81bec68830c46e0800c6c2f6a0"
  },
  {
    "url": "assets/js/47.1ae54848.js",
    "revision": "ec251bd2c80a614e87ece92a27546667"
  },
  {
    "url": "assets/js/48.a371b087.js",
    "revision": "0efa2b6807059b4617c101470fb01b6d"
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
    "url": "assets/js/6.cbb3a022.js",
    "revision": "04d3bf79895066d9ad3de3309001c9c8"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
  },
  {
    "url": "assets/js/8.9f07041d.js",
    "revision": "cecc0455b53e3e9d6bd334fc1e569e41"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.6e249cab.js",
    "revision": "318730b30a78c750ea126b798e09a890"
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
    "revision": "b2d8fd21582855ee27127c23c6f48b5b"
  },
  {
    "url": "category/index.html",
    "revision": "2c4bbee20a6d1078c018205ae16561e9"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "e460f711d3207c2c0c791cbff0d249e9"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "642db4b90fecbb18755103fbd6968d02"
  },
  {
    "url": "electron/index.html",
    "revision": "8d3747f6220d7d110fa0758852d51bb7"
  },
  {
    "url": "extra/index.html",
    "revision": "9c6a840012e28a07352ce1cb8d77a5e6"
  },
  {
    "url": "flutter/index.html",
    "revision": "4d4df1571b01c2806494226873cba252"
  },
  {
    "url": "flutter/test.html",
    "revision": "cb86ebabbdd1ff1b1393d3019053e234"
  },
  {
    "url": "guide/changelog.html",
    "revision": "afc50e127da227c072bc794cb91498bd"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "62ad8c6692897189587fa07e3a43603d"
  },
  {
    "url": "guide/faq.html",
    "revision": "ef12a7e58f7ad6b0a5c94bd32809ae27"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "823184de670bb297f8f7b977439691c3"
  },
  {
    "url": "guide/index.html",
    "revision": "f1dadd4802809bed4ccc8bab5f181080"
  },
  {
    "url": "guide/palette.html",
    "revision": "cd219fc0c8c64375f48bbaa7d5c38744"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "130eb2570c12328827e11421501e44c0"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "b208ab9f3a7786e287bf990d97812bf5"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "0419c41b0033ea1a678099475ef5827c"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "b56aa61616d6dd728524e743c15893c4"
  },
  {
    "url": "index.html",
    "revision": "e45532b09a66fbd625d9742aa103a018"
  },
  {
    "url": "js/index.html",
    "revision": "c3bfe70fba23bf6638387c9fa467985c"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "6a3f31a065ac51b8e984bb5aa9f3c7ab"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "931ffb3a808a7a2c72aca137a543934b"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "48612eecc407f0554a8e3a30cb42fed0"
  },
  {
    "url": "midway/index.html",
    "revision": "aef1ed178934e2d6115fed3c1c6a0dd8"
  },
  {
    "url": "notes/brew.html",
    "revision": "d49c53e216532f60807b4989c44a3dd8"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "770ce38242ea7a5c51825b8190b76f1b"
  },
  {
    "url": "notes/git.html",
    "revision": "65f7f194e14ab43e4661861a48c597d3"
  },
  {
    "url": "notes/index.html",
    "revision": "fbe2e81840feb3980ab361636bfd656e"
  },
  {
    "url": "notes/nginx.html",
    "revision": "9dae12aa3830dba69df20191ff41a6e1"
  },
  {
    "url": "notes/node.html",
    "revision": "bc1abed2581b1b4f57237baf33fb1a7f"
  },
  {
    "url": "notes/npm.html",
    "revision": "e7688678e21e47561d9ba716e1aba5b6"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "97b7b57572fac9a8bebd46b7a73513a7"
  },
  {
    "url": "notes/vscode.html",
    "revision": "83ca6b04d470f1984012ecd40fe0b169"
  },
  {
    "url": "plugin/index.html",
    "revision": "e0db162ace779706261634993c543553"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "0cea2412e0713af2b9a05299a41d6b5e"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "469675b1bd258d6ca493ce198e0c28d3"
  },
  {
    "url": "tag/index.html",
    "revision": "5b474a16e79f69bcb2d1b2d927e213b3"
  },
  {
    "url": "uniapp/index.html",
    "revision": "779f81996541c2a2a03c45be1869e65f"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "de91e0ce7dfec03dc2c9ff74d4f95e7a"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "db59358eb6fe910bcc3f541558907686"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "6de898f5d640ddd92cf8d6f1fc1c887a"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "aef9dcb1d3d2a16896f5940453176502"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "4b89b2aa3175177329b92da0ef0ca20b"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "0cbf314bdef27e470c6be099b862f910"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "9ceee6ce1e7062888d08195fa93a0b45"
  },
  {
    "url": "Vera/index.html",
    "revision": "64378714f19fd291726ceff999c794f3"
  },
  {
    "url": "website/index.html",
    "revision": "ade4c7445dd8c84ef375683ce84a65f2"
  },
  {
    "url": "website/package.html",
    "revision": "4257ea8b4e700e8f100556fb14041a31"
  },
  {
    "url": "website/rearend.html",
    "revision": "1ef79fb5599fc19ae9b7b30ca79a6bf1"
  },
  {
    "url": "website/tools.html",
    "revision": "a7eb2b244d2a52761ae50e5791c76288"
  },
  {
    "url": "website/webclient.html",
    "revision": "c81475619dacf04e107ba44d3ee4e71e"
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
