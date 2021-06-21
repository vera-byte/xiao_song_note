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
    "revision": "1cd904da4a44e23a683fde5e33e3b971"
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
    "url": "assets/js/13.c37a5990.js",
    "revision": "e9526202cb53e49d4b144412c92237a7"
  },
  {
    "url": "assets/js/14.14ead2cc.js",
    "revision": "6f456f3e523735777abe5f4ef7fbe712"
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
    "url": "assets/js/21.bebb868a.js",
    "revision": "05ac28efebbbe143b042fe74d40e7a2c"
  },
  {
    "url": "assets/js/22.039fb583.js",
    "revision": "7e526cd96930de3b6d6cedd4d1d87664"
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
    "url": "assets/js/25.21abaeca.js",
    "revision": "53ae72e6e4c2a04720bc14e28a0d10a8"
  },
  {
    "url": "assets/js/26.a08d2523.js",
    "revision": "76d54042d611344339356367b43e6cc3"
  },
  {
    "url": "assets/js/27.993797ad.js",
    "revision": "8c8fbb7b29104fc2fe9e622bf250166a"
  },
  {
    "url": "assets/js/28.7e695a92.js",
    "revision": "3cd635fcae76f4a0842d298ea45604ef"
  },
  {
    "url": "assets/js/29.d59dc8fe.js",
    "revision": "4f1be4165ea7572eb6bc66b5ca7b583b"
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
    "url": "assets/js/31.74020b52.js",
    "revision": "5c0fee962fe0edcdc5f798e19147bec7"
  },
  {
    "url": "assets/js/32.857cfc6e.js",
    "revision": "f17838e6b4117f995b748d443e6293b7"
  },
  {
    "url": "assets/js/33.ba5ecd5f.js",
    "revision": "1e2878925c2ab108474d1fa6380718f8"
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
    "url": "assets/js/36.49f9eca7.js",
    "revision": "c4f149dd969a63d052dd5efa82b4971c"
  },
  {
    "url": "assets/js/37.9d975bc6.js",
    "revision": "0749aaa3c753493192ae59afb72f5d71"
  },
  {
    "url": "assets/js/38.8a5b24f3.js",
    "revision": "f8741486c9af816867f782491455e8b3"
  },
  {
    "url": "assets/js/39.da83e59f.js",
    "revision": "a72264f6cb7012de0790223acd82aacc"
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
    "url": "assets/js/41.81584133.js",
    "revision": "de14b311932be8d34079ac7ad5e47558"
  },
  {
    "url": "assets/js/42.6acee073.js",
    "revision": "db67c2a6a09d5c5ddeb495fba0f1d6e1"
  },
  {
    "url": "assets/js/43.0783d6b7.js",
    "revision": "cb7167c0417ba041e59528f9b06bc0bf"
  },
  {
    "url": "assets/js/44.353a3585.js",
    "revision": "e92d342142f4dad54a64e69e898666fb"
  },
  {
    "url": "assets/js/45.5076d71a.js",
    "revision": "8b833ecd4271f3b5b6b745e2e2d61a7e"
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
    "url": "assets/js/6.1bf7465d.js",
    "revision": "344cd50e37d849abec0da6345e59344e"
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
    "url": "assets/js/app.070f1bf2.js",
    "revision": "3ad5f8b6ea69083a4113a74f76550690"
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
    "revision": "1a5c44747564f2c0c5cd03f7d1da76d7"
  },
  {
    "url": "category/index.html",
    "revision": "c7d0d7eced86b9c893bdffca6508325e"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "32ef9ec250389b0d0d9a3d3721d8f1e4"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "7b67d67e18183b73834ca5635ba1b522"
  },
  {
    "url": "electron/index.html",
    "revision": "cc86ea04b0286175719657b8292a14af"
  },
  {
    "url": "extra/index.html",
    "revision": "57b73fb7f844042bdde0b8d3aeb2f953"
  },
  {
    "url": "flutter/index.html",
    "revision": "d0bcad2cafbbc22d4a4cd26f7721a2c1"
  },
  {
    "url": "flutter/test.html",
    "revision": "019f53fdafc119d6c9297aa01f05b62c"
  },
  {
    "url": "guide/changelog.html",
    "revision": "9442675bfe767cd3d461840720207a65"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "1e6e68402fb1855e98d97c245404e236"
  },
  {
    "url": "guide/faq.html",
    "revision": "9b7c6ccb39095ab2dffb36aea418bb63"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "51f657440e380e63c6e9518bd79ba4ab"
  },
  {
    "url": "guide/index.html",
    "revision": "f17c73ec30c2d105ee9ef7cae9a99a9c"
  },
  {
    "url": "guide/palette.html",
    "revision": "b91fb85f58a9ba92df594ce92415f9d9"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "9b04435386d4e52d75ebe8413a07f625"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "d95a6d35948369a1651ddfcf55ccdece"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "0a9ffbcb6df6f2a49e3167560158afc5"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "48011d93289c826fc99499854d3733ad"
  },
  {
    "url": "index.html",
    "revision": "220c8e06a63d74b01be90c486a09dbd0"
  },
  {
    "url": "js/index.html",
    "revision": "dbd35c353dd8a71cc69ca35e2e13453d"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "349c417e336c140f49ca90e967d071fd"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "fc81350a4eafccc1d7a40fe93411736e"
  },
  {
    "url": "midway/index.html",
    "revision": "b52b68179a2e5efdfa110aae5f1dfa4f"
  },
  {
    "url": "notes/brew.html",
    "revision": "5db71786c9069464b99026c229c28197"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "77789afc3f7287bd5da7ae486f5ea92a"
  },
  {
    "url": "notes/git.html",
    "revision": "c8c86fc041cf02cf3edcca6db30d9fec"
  },
  {
    "url": "notes/index.html",
    "revision": "6c53bcc51b556c93cc728fcb1a9dbd6a"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a918cd3c33a778176a8fe83ac38b15af"
  },
  {
    "url": "notes/node.html",
    "revision": "25059b59702488f6b97e223151bef54a"
  },
  {
    "url": "notes/npm.html",
    "revision": "6b2f584f961520fd36b361fe08d41d22"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "eb1875c40eda8771c063f6f77a50f43d"
  },
  {
    "url": "notes/vscode.html",
    "revision": "826045edb9e1e9921dadf0451bfe0e02"
  },
  {
    "url": "plugin/index.html",
    "revision": "f0ae24ed37342bb241ddc7037b382b2a"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "1fe272242eb7098d7143abc86c415309"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "faf6289c15dae7c87a94028f66767388"
  },
  {
    "url": "tag/index.html",
    "revision": "75718c2962db73eb7146328b1faaffc7"
  },
  {
    "url": "uniapp/index.html",
    "revision": "6e7d16c060463489fdc9eadf6e7404b0"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "fb1eb7755328c82e9ac5308d4ed7f078"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "43f0fad4a7c78bae9eeba92f381f0491"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "ae3d584c09120844489e8200fe28fa9d"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "6b087c72ba832e51196da82943a366be"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "c8dd601e39cab3109fc110105c0f3791"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "4ae62b6164d5ee0dfda9f63a2e9652f4"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "ed3735e719d01f5b4830891454288836"
  },
  {
    "url": "Vera/index.html",
    "revision": "9661c2c9dbadbc6cdd8157952a203dec"
  },
  {
    "url": "website/index.html",
    "revision": "eaadb0d91395b5e680faef42f5da58a9"
  },
  {
    "url": "website/package.html",
    "revision": "97996f464f48f1247f6e7749e1505e7e"
  },
  {
    "url": "website/rearend.html",
    "revision": "730861b0d26513dc7a322a353b7eb8e1"
  },
  {
    "url": "website/tools.html",
    "revision": "898ee2c18439d8e2993338fb57373707"
  },
  {
    "url": "website/webclient.html",
    "revision": "247482cbd52e43c99b87f3843811e8a2"
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
