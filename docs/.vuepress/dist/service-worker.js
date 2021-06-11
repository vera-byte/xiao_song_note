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
    "revision": "b0d3e430583355d2d2788130a7c18e69"
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
    "url": "assets/js/13.89715a6b.js",
    "revision": "216edc86cc1c3604132700e102b6a880"
  },
  {
    "url": "assets/js/14.c7c99f4d.js",
    "revision": "7f1796dbab5344718cdbd1fd2adfd3fa"
  },
  {
    "url": "assets/js/15.643a905b.js",
    "revision": "e815ff5988172c3ec4d2c16168714072"
  },
  {
    "url": "assets/js/16.91555f33.js",
    "revision": "bbb83259be8ee8c8fb4889d666f0a2b8"
  },
  {
    "url": "assets/js/17.1ceba2d7.js",
    "revision": "b804808358183d81c5dba620b140f5bd"
  },
  {
    "url": "assets/js/18.1e5f46e7.js",
    "revision": "26b8c9e89149181e2f89fd6644d6aa8b"
  },
  {
    "url": "assets/js/19.719cd31d.js",
    "revision": "f5c3e46c76e1601d20516473330d8ea1"
  },
  {
    "url": "assets/js/2.9265cb1f.js",
    "revision": "5e463828f39b8c8b047d07a3d3b36a1a"
  },
  {
    "url": "assets/js/20.b67b1321.js",
    "revision": "3a18e6336fc4ddf30f0becae7d3771ed"
  },
  {
    "url": "assets/js/21.b97fcc39.js",
    "revision": "2f6146799d5f52d51dac8e15ee14219c"
  },
  {
    "url": "assets/js/22.039fb583.js",
    "revision": "7e526cd96930de3b6d6cedd4d1d87664"
  },
  {
    "url": "assets/js/23.a63b91b3.js",
    "revision": "2f5900819c066648fc0a50e69b37b254"
  },
  {
    "url": "assets/js/24.eb40536f.js",
    "revision": "ee4c75b3ebb52b86a5712968ea80b398"
  },
  {
    "url": "assets/js/25.02c555da.js",
    "revision": "4cc7c2ff1400c66e952a33050d549c47"
  },
  {
    "url": "assets/js/26.905031ca.js",
    "revision": "2dafbe8346078e0c5e92df065681c7e4"
  },
  {
    "url": "assets/js/27.6d6d723b.js",
    "revision": "bf130ae2dbf75c930347fee944b86aad"
  },
  {
    "url": "assets/js/28.5e931129.js",
    "revision": "16017e53775acbb6e8ac381c3c927ba9"
  },
  {
    "url": "assets/js/29.29948ee2.js",
    "revision": "a06379040d1b75e4f44843b93d4e9534"
  },
  {
    "url": "assets/js/3.4f081cf9.js",
    "revision": "bc84619ba2917d7a895f593b57756152"
  },
  {
    "url": "assets/js/30.5bdbdee4.js",
    "revision": "adaf845c7294fb663e1104232a5dd990"
  },
  {
    "url": "assets/js/31.74356238.js",
    "revision": "a283eff20ae9555581ede55ee6e158e1"
  },
  {
    "url": "assets/js/32.11b71bb9.js",
    "revision": "b91aeb8162dbd0aa52a52a2960281265"
  },
  {
    "url": "assets/js/33.237fd108.js",
    "revision": "6779a7fee43e0aed1e344b963b560cc5"
  },
  {
    "url": "assets/js/34.ab000672.js",
    "revision": "4d4ceead0d1149d8503548f9a8f3e915"
  },
  {
    "url": "assets/js/35.3fdd4f5c.js",
    "revision": "d45af7a458bb1dd0bd5129590116d128"
  },
  {
    "url": "assets/js/36.1679cb4b.js",
    "revision": "4d42bb7f715c3c7e77a932519efa5e75"
  },
  {
    "url": "assets/js/37.d67b4be3.js",
    "revision": "71780fa0c26e3c0fa8788c4e8cea0f0d"
  },
  {
    "url": "assets/js/38.8e9bf1e0.js",
    "revision": "6d2fb43efaedf19c2a098e1fbacc25f3"
  },
  {
    "url": "assets/js/39.2d2ba41b.js",
    "revision": "1d16c56987cdfe0ee69452df9618d68b"
  },
  {
    "url": "assets/js/4.66ae8de4.js",
    "revision": "eac1a8896e810fefa23f61f97ea350c1"
  },
  {
    "url": "assets/js/40.5905592f.js",
    "revision": "9b955a2a2e7cb65fcd6984732dda8ea2"
  },
  {
    "url": "assets/js/41.28ce0fa7.js",
    "revision": "f80e283be1753e541c3f3d7b1b100112"
  },
  {
    "url": "assets/js/42.fed2d542.js",
    "revision": "360635c454e64d25783c632f4e512e30"
  },
  {
    "url": "assets/js/43.53535985.js",
    "revision": "be92e6965246a831ad2155296366d139"
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
    "url": "assets/js/6.99cfa99c.js",
    "revision": "3ee9e89091b63fb3fddeb415958c2554"
  },
  {
    "url": "assets/js/7.aea23651.js",
    "revision": "988a9da152bb7a803aa9dafad70efa28"
  },
  {
    "url": "assets/js/8.7a76ec5c.js",
    "revision": "d7aa36e0c1f87d41244e67cf3f4b92de"
  },
  {
    "url": "assets/js/9.6fb1ea2d.js",
    "revision": "921c2a63333e99bd2d280855e3f0ca17"
  },
  {
    "url": "assets/js/app.5efb06d7.js",
    "revision": "656d7c0e3c5689b115780be6f365b046"
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
    "revision": "2e14b4fed4f0a1ab6e0790ede3e19372"
  },
  {
    "url": "category/index.html",
    "revision": "a1883f64b6b2dbf5c5a2572c9e432000"
  },
  {
    "url": "egg/index.html",
    "revision": "b0885f932de391852d2c9bc2988a4efa"
  },
  {
    "url": "electron/index.html",
    "revision": "5561fb8ab32c5f6db943ef37b909bab1"
  },
  {
    "url": "extra/index.html",
    "revision": "917fca0b3b2feac292c48cf2caf7dc60"
  },
  {
    "url": "flutter/index.html",
    "revision": "38bfdbc9d06eff7bc299442a0b3b4062"
  },
  {
    "url": "flutter/test.html",
    "revision": "93a1a0c5d6c5e9d8246e8814ecdca229"
  },
  {
    "url": "guide/changelog.html",
    "revision": "4fbea0c39095284c96f481ae24de482a"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "b664fed334da04daa84f88730a81a205"
  },
  {
    "url": "guide/faq.html",
    "revision": "78e1c0fe98065eea967b6bba02fd9d12"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a12b4ae4af7d67527e8f066d380b18f0"
  },
  {
    "url": "guide/index.html",
    "revision": "37c865415aec955fbab1ab39c0029a53"
  },
  {
    "url": "guide/palette.html",
    "revision": "8979a7d806cfe3370fac22315ee50146"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "f22e15750b2931e435dcf4cb4c3fcbeb"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "b16d2e81db772ed725d0ff1c515e4e3f"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "f0343653ea8be8070a628d41304bf58f"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "292d3acabfeba396e29c70a2a3a3bf79"
  },
  {
    "url": "index.html",
    "revision": "74ffc1b8f6aa65fff8c1b5b667b79458"
  },
  {
    "url": "js/index.html",
    "revision": "ad0bb15efa24f47a348fc92d6da84cd7"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "d55d5dd5527f8a78ade4ff50f2be7974"
  },
  {
    "url": "notes/brew.html",
    "revision": "b6a0c47a105b1a28869ef0c76cd7ec69"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "1e8f59a85258fb37176b3148063a1300"
  },
  {
    "url": "notes/git.html",
    "revision": "67bdc006f15bd945b3f5195ef9e63939"
  },
  {
    "url": "notes/index.html",
    "revision": "e8baed2e4c951cf07979a7b686314b22"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a9ba12eb71808f6a8daafe6e7f8b0d68"
  },
  {
    "url": "notes/node.html",
    "revision": "b5745c1d11e3729ca39c5097abcbd12f"
  },
  {
    "url": "notes/npm.html",
    "revision": "bbcbe81b94853cd14b7ac4f8cb4cef73"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "e4177670c637360aa9f9cd6e1049faac"
  },
  {
    "url": "notes/vscode.html",
    "revision": "20265a45feae55aba5a5742ef3c2e78c"
  },
  {
    "url": "plugin/index.html",
    "revision": "14df09e2a8a558bf7464883dc376742d"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "f22c4a92b2c47fe62cf022326df9a719"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "1d23d3299d64972522a4ef9fa1e68451"
  },
  {
    "url": "tag/index.html",
    "revision": "2fd709795425fd42ce42dacd4c18a9e0"
  },
  {
    "url": "uniapp/index.html",
    "revision": "90b0f1b842c559942d570a49547ea08d"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "97ea1eba21d494056de085d24711686e"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "2492754b88facc5bb612132fc093676c"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "ff62ad394f45f77da52604d8da06ae34"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "8b048e19316bf82d540c55fdd13e496a"
  },
  {
    "url": "Vera/index.html",
    "revision": "29d7a6110f80a85cec47309fb9d125b1"
  },
  {
    "url": "website/index.html",
    "revision": "759e6fbd8e52fa08c7b62b94bc84ab35"
  },
  {
    "url": "website/package.html",
    "revision": "5f939b2c84a89530889a52444858face"
  },
  {
    "url": "website/rearend.html",
    "revision": "ef01d692d76c677c1e93a985ae65d4fe"
  },
  {
    "url": "website/tools.html",
    "revision": "d2b88ec5b9a452b9753b76728ba794e1"
  },
  {
    "url": "website/webclient.html",
    "revision": "2f8c4cbf88ff6b77c7c5d6fc8fd4d388"
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
