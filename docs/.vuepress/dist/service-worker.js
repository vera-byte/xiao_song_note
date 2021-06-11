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
    "revision": "494ef7bb6d57b109f877162f7ee8d85e"
  },
  {
    "url": "assets/css/0.styles.c5a1f150.css",
    "revision": "f85ab08fb9adbeb88c0995823147a185"
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
    "url": "assets/js/10.1b401dd9.js",
    "revision": "0d7eb3a875341bf4ae24f997d404a8e9"
  },
  {
    "url": "assets/js/11.4c0e7305.js",
    "revision": "12384fc1a68bf5aeeda65c575f561727"
  },
  {
    "url": "assets/js/12.dae5746f.js",
    "revision": "c38dfaf8ab28d6c135309bcc622b873a"
  },
  {
    "url": "assets/js/13.c37a5990.js",
    "revision": "e9526202cb53e49d4b144412c92237a7"
  },
  {
    "url": "assets/js/14.0fe6a195.js",
    "revision": "4a2cd40a2621fe8eb6761e1ebe61041b"
  },
  {
    "url": "assets/js/15.18570b15.js",
    "revision": "bb1d0f9e8dc763f6993b9b154977985a"
  },
  {
    "url": "assets/js/16.1806c483.js",
    "revision": "97366708d0f1625471c88fca5cf2e573"
  },
  {
    "url": "assets/js/17.d7c4ea47.js",
    "revision": "67a4a8c36fa6a43d283f6190a4ee293e"
  },
  {
    "url": "assets/js/18.d66ca052.js",
    "revision": "d07e54dc133edf1c6f339ec43e6dbf80"
  },
  {
    "url": "assets/js/19.c3cac64a.js",
    "revision": "74cc3a1061656151af497f1e24dbc4ec"
  },
  {
    "url": "assets/js/2.9265cb1f.js",
    "revision": "5e463828f39b8c8b047d07a3d3b36a1a"
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
    "url": "assets/js/22.4b49ac11.js",
    "revision": "ddede3f62f482370ba02629382ec091f"
  },
  {
    "url": "assets/js/23.120cbab7.js",
    "revision": "a1ce59514687f063ce2ac97d191240d9"
  },
  {
    "url": "assets/js/24.518e1cfd.js",
    "revision": "a0c6a395e02f7cf059eb3a31456b6278"
  },
  {
    "url": "assets/js/25.253640c1.js",
    "revision": "d4741ad762e56acddabb0128fe90a67d"
  },
  {
    "url": "assets/js/26.04bbd843.js",
    "revision": "fd8d006045b5bccd95890ce8cd8f4646"
  },
  {
    "url": "assets/js/27.295d7a42.js",
    "revision": "75ca043044af86efd376b7eb39c71737"
  },
  {
    "url": "assets/js/28.70dfb751.js",
    "revision": "ccb485b6a5835cb31abc8810c13b42ef"
  },
  {
    "url": "assets/js/29.093d088a.js",
    "revision": "98d2a35298dee317506d23f90a6d719d"
  },
  {
    "url": "assets/js/3.4f081cf9.js",
    "revision": "bc84619ba2917d7a895f593b57756152"
  },
  {
    "url": "assets/js/30.79ab8152.js",
    "revision": "24b11100c7338bf6d19d4e7418fe8415"
  },
  {
    "url": "assets/js/31.74356238.js",
    "revision": "a283eff20ae9555581ede55ee6e158e1"
  },
  {
    "url": "assets/js/32.8c4b79c5.js",
    "revision": "ca2323ab11fb1ee15ae0eaff21979921"
  },
  {
    "url": "assets/js/33.86ba69b3.js",
    "revision": "ac0b9628c3a99d7c051fd9252a4912e6"
  },
  {
    "url": "assets/js/34.a95d881b.js",
    "revision": "25bb06a223249bd1015b129b09593374"
  },
  {
    "url": "assets/js/35.501b3421.js",
    "revision": "e82e83a5319cd3c8cad58a8ae17ea99a"
  },
  {
    "url": "assets/js/36.1679cb4b.js",
    "revision": "4d42bb7f715c3c7e77a932519efa5e75"
  },
  {
    "url": "assets/js/37.3ff5d86e.js",
    "revision": "ca20848b64a003941cbdfec7c9f5a8a3"
  },
  {
    "url": "assets/js/38.ff1f059a.js",
    "revision": "00b6a56ede2b35495dbe780301c5490d"
  },
  {
    "url": "assets/js/39.825b9a47.js",
    "revision": "b3f8bd51b0b296e37f2622f95d336a4f"
  },
  {
    "url": "assets/js/4.66ae8de4.js",
    "revision": "eac1a8896e810fefa23f61f97ea350c1"
  },
  {
    "url": "assets/js/40.ed96a593.js",
    "revision": "1d27e92839b68504f0c45dfae0883d21"
  },
  {
    "url": "assets/js/41.28ce0fa7.js",
    "revision": "f80e283be1753e541c3f3d7b1b100112"
  },
  {
    "url": "assets/js/42.342d0875.js",
    "revision": "0b41ab96841239b1e37b9764baaa72bc"
  },
  {
    "url": "assets/js/43.8f69f9a8.js",
    "revision": "20877b051e40620a3340f45f95a7fa07"
  },
  {
    "url": "assets/js/44.d01b6e6c.js",
    "revision": "3a1cda30360e176434fe64952b11d5af"
  },
  {
    "url": "assets/js/5.78ee392e.js",
    "revision": "32093022b66f64be2e47774cd63fdc5f"
  },
  {
    "url": "assets/js/6.ab19b6ab.js",
    "revision": "31a60ed69fc028d0ff2e0f657a291d39"
  },
  {
    "url": "assets/js/7.aea23651.js",
    "revision": "988a9da152bb7a803aa9dafad70efa28"
  },
  {
    "url": "assets/js/8.6664932b.js",
    "revision": "68c8ea72bd11775f75dbf6c194e35aa7"
  },
  {
    "url": "assets/js/9.6fb1ea2d.js",
    "revision": "921c2a63333e99bd2d280855e3f0ca17"
  },
  {
    "url": "assets/js/app.b4330024.js",
    "revision": "b85799d91b1ecd77e7b7f52894280902"
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
    "revision": "5ae0b6c206d369d6514ccd4e93f3b26d"
  },
  {
    "url": "category/index.html",
    "revision": "6d5aaba15bd3ecf5fafa104365b5c5d0"
  },
  {
    "url": "egg/index.html",
    "revision": "671050136f69ebd563e642697060a20e"
  },
  {
    "url": "electron/index.html",
    "revision": "4ac0cf1b15c3bae8e9ced9972b51916a"
  },
  {
    "url": "extra/index.html",
    "revision": "5a09e710408acf1c1d358ed07cfd273e"
  },
  {
    "url": "flutter/index.html",
    "revision": "33e7cb8303df702746b69a8c08951037"
  },
  {
    "url": "flutter/test.html",
    "revision": "6e7a8d7f50840c9b979f890af660295b"
  },
  {
    "url": "guide/changelog.html",
    "revision": "b992195d31b29a9ff97780cfa601ce62"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "bb600617e6e680c966a2e3aec2dccd2f"
  },
  {
    "url": "guide/faq.html",
    "revision": "77df766c68e64389a47298eb3373a75b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3b16be49fe89629b8ace6d1df3cbd8c7"
  },
  {
    "url": "guide/index.html",
    "revision": "8bed2725dc09bab99521304779172368"
  },
  {
    "url": "guide/palette.html",
    "revision": "3459e843ef348e45f4612f2837c8453b"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "1da0bd24e209f8cbd5ddf7e96fa92964"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "3446c30498d9206845649de5e5c79df9"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "f226138d0b8101d193f9c0dc30417642"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "d4ed3861b0cfa6e4612fb63c5a9b6273"
  },
  {
    "url": "index.html",
    "revision": "166010d512613596cb2b04be0035ffdf"
  },
  {
    "url": "js/index.html",
    "revision": "3f0e011431922481fdc11a0219229134"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "51b273c7ae5222fc725881d366efd1d3"
  },
  {
    "url": "notes/brew.html",
    "revision": "82baf4856647f59a5131e56c59792b56"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "12bfc4ab61b7ed60f63905204779ecfe"
  },
  {
    "url": "notes/git.html",
    "revision": "b53242782b36e6dbf2b6ca046ef68341"
  },
  {
    "url": "notes/index.html",
    "revision": "5b5eb0d4fba3e516a3a2ceb6177f8469"
  },
  {
    "url": "notes/nginx.html",
    "revision": "720c5806e2f4b75783dc26a5951feaf1"
  },
  {
    "url": "notes/node.html",
    "revision": "dc496576b4124552e2850ccbb2452b3e"
  },
  {
    "url": "notes/npm.html",
    "revision": "15cf920847c7d4d4c769bddc054a4a5d"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "ca6e81a67bf3c57b827647343eba7b6e"
  },
  {
    "url": "notes/vscode.html",
    "revision": "9d41249cc9d9d332e6cb1f82734360bc"
  },
  {
    "url": "plugin/index.html",
    "revision": "972477d269f4f6bff10cbd7a1f4e933d"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "e5ef8973dd17df1bbf58abadbf887236"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "a46470dd9517e29a0c7bc4d5ca44046e"
  },
  {
    "url": "tag/index.html",
    "revision": "4042b1af3c316f4c3ca2f95e1847db71"
  },
  {
    "url": "uniapp/index.html",
    "revision": "dfa5fbdfdddd5c1474a9b13559f65855"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "39a7aaf7570b0f19dbf67adaed1f7520"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "1031914fc0ec240324ff5032c6992608"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "dab09c9eec420958c7c16b0fc9f4a12f"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "e92ff7e1dc112f2c10150f298335ec2d"
  },
  {
    "url": "Vera/index.html",
    "revision": "1dbdfeddb5b24db688d11e6b7cae9d03"
  },
  {
    "url": "website/index.html",
    "revision": "d1639bb809af07d278246a9b29e4c185"
  },
  {
    "url": "website/package.html",
    "revision": "f0107fd2896a2eabeaef1bd91de97626"
  },
  {
    "url": "website/rearend.html",
    "revision": "d42d43fecea28055da05ba3cf49dce6e"
  },
  {
    "url": "website/tools.html",
    "revision": "e3122896d544821b81bdf962742f743e"
  },
  {
    "url": "website/webclient.html",
    "revision": "183e65247bf6babc253f38c734e4d1df"
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
