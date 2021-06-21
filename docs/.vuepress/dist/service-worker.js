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
    "revision": "6c83f84346ca915e9353b9380be43897"
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
    "url": "assets/js/14.0fe6a195.js",
    "revision": "4a2cd40a2621fe8eb6761e1ebe61041b"
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
    "url": "assets/js/20.14692a1d.js",
    "revision": "cda7ce8075b53363b3c5a4966c198a4d"
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
    "url": "assets/js/23.fe2c88f9.js",
    "revision": "35c9422859c03f2ef41c4090366b748d"
  },
  {
    "url": "assets/js/24.8441aad7.js",
    "revision": "f8198bf2bc1d80247992f75c6c71ed8f"
  },
  {
    "url": "assets/js/25.1aa6540c.js",
    "revision": "82e146975fceb4eace0464c2abdc441a"
  },
  {
    "url": "assets/js/26.5a2c499d.js",
    "revision": "016b060122e4513a810258237fb54b24"
  },
  {
    "url": "assets/js/27.2e0f56d8.js",
    "revision": "dac1644f70da099a063ba7b47d3948fb"
  },
  {
    "url": "assets/js/28.42d80a32.js",
    "revision": "0cb24d70636bf1edca977163c6e8193e"
  },
  {
    "url": "assets/js/29.89aba866.js",
    "revision": "e3c1314eeb352d6d8216dc83e17985ca"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.ea93b20f.js",
    "revision": "f2c32ab7ded606537f157c82fac2ed56"
  },
  {
    "url": "assets/js/31.083e47fe.js",
    "revision": "68f171ab2426910e0a965181ca199dd6"
  },
  {
    "url": "assets/js/32.b36901ee.js",
    "revision": "df45dc3c4c3b036dc27b4a81819b05f7"
  },
  {
    "url": "assets/js/33.2cce1699.js",
    "revision": "b015bad31b8cd7e510a52629dc74449e"
  },
  {
    "url": "assets/js/34.91bf5481.js",
    "revision": "5ab10e090b77d8b7866bce90a623f6ef"
  },
  {
    "url": "assets/js/35.d65306cf.js",
    "revision": "010da33bb21557b5cad919e6abe17cb9"
  },
  {
    "url": "assets/js/36.5ebb9004.js",
    "revision": "32203365321fd088353bec2cdd823eda"
  },
  {
    "url": "assets/js/37.304bcee4.js",
    "revision": "f5cbf32090f7a0079eed17bfd7ab3351"
  },
  {
    "url": "assets/js/38.f1d34e96.js",
    "revision": "c6670067bf3bc1d0d7132f570b51dfb4"
  },
  {
    "url": "assets/js/39.eb40160c.js",
    "revision": "f81589c4aedb332220a2cad11d09a8ed"
  },
  {
    "url": "assets/js/4.dc6a372d.js",
    "revision": "449f9288e9800b77b63f92596609fd91"
  },
  {
    "url": "assets/js/40.2e91a805.js",
    "revision": "7d52a3204ce14c58c4820b9bd14b6d4f"
  },
  {
    "url": "assets/js/41.e8cec050.js",
    "revision": "6a9540581f3bc76f2ea3ccb42efe2db0"
  },
  {
    "url": "assets/js/42.372e93ad.js",
    "revision": "071067654a534f704c6b930bb017533a"
  },
  {
    "url": "assets/js/43.fed93877.js",
    "revision": "c98b87c3c4ea3ee74bac620cb83215c3"
  },
  {
    "url": "assets/js/44.f73e95d4.js",
    "revision": "cc10326fbfd5005eb52365383f44e5ef"
  },
  {
    "url": "assets/js/45.9221d309.js",
    "revision": "dfd927eb71f4649adee270a86aff77bc"
  },
  {
    "url": "assets/js/46.ce812038.js",
    "revision": "f09a97621b9553f8a417336332d57314"
  },
  {
    "url": "assets/js/47.d7da6ecb.js",
    "revision": "ce3ffef9144b878a768bd0cae0b04716"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/6.2806a424.js",
    "revision": "27faba128ce93bfea72c0f459961baae"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
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
    "url": "assets/js/app.8797a9dd.js",
    "revision": "a73c80bbc06ae4dba33971834104b060"
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
    "revision": "053aa796abbee288772004e65b2e058d"
  },
  {
    "url": "category/index.html",
    "revision": "d156473f6e6b66f4f919d0439209763e"
  },
  {
    "url": "egg/index.html",
    "revision": "4a203910520dc001fcb6d8234d667b20"
  },
  {
    "url": "electron/index.html",
    "revision": "3c2fd1457a174c455241f9130f9dae46"
  },
  {
    "url": "extra/index.html",
    "revision": "3e75cf15aacb496045d386f079b145e8"
  },
  {
    "url": "flutter/index.html",
    "revision": "4897293b2dba7d4dc5bd9c13d61dd521"
  },
  {
    "url": "flutter/test.html",
    "revision": "4fc77118983c32b70872d25ca70e161b"
  },
  {
    "url": "guide/changelog.html",
    "revision": "db1edc6e597b382df6cac0eb84d2b8c6"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "4bdd75e7bfcb7f78a0fcb10841580656"
  },
  {
    "url": "guide/faq.html",
    "revision": "b33580bfd8079f01a717ed0bea9763a3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "829bbe8f59d14b4533379253511ac43c"
  },
  {
    "url": "guide/index.html",
    "revision": "d55db9e203309caca4fdc198af66ab39"
  },
  {
    "url": "guide/palette.html",
    "revision": "0d6c114cf637d2e0eecf88a076c01682"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "893ca24b1c0a32bb629d2dacef41a30a"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "6c122f4fc3488277c0a96ec9f78261e6"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "e188f95e8a9974c9744960004c459bb0"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "59a4c44ab3fa94d4887029cf12d7591c"
  },
  {
    "url": "index.html",
    "revision": "37816e8047b87b6853d37234ce7372da"
  },
  {
    "url": "js/index.html",
    "revision": "0cea968ddacaaf3c701a3e6a8f522595"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "9b13de4d646295e4b57dafbe00d53837"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "50699eac0168d3e963fb293fb61c7ab6"
  },
  {
    "url": "notes/brew.html",
    "revision": "b1ccc06c1754d68743d3ac603d027fca"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "eadee30404b86eba15e93bcaa2782638"
  },
  {
    "url": "notes/git.html",
    "revision": "af7779fd9ccb3419a6c9fa032c867482"
  },
  {
    "url": "notes/index.html",
    "revision": "52301334c61f5534b1a9e82cb7a8c051"
  },
  {
    "url": "notes/nginx.html",
    "revision": "c5c20ef2cae4bf64bf4db841d54e947a"
  },
  {
    "url": "notes/node.html",
    "revision": "08edd6df61df4b06675b8e02d8cbd5e6"
  },
  {
    "url": "notes/npm.html",
    "revision": "579ba413a2aeb7e98173a69ae6749ed8"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "5da98fdc7f584514d5eff098d9d802b6"
  },
  {
    "url": "notes/vscode.html",
    "revision": "ef1d4f30fa023a166dcde9f8591640bd"
  },
  {
    "url": "plugin/index.html",
    "revision": "0f68251cfe4813fd84eaf54bde547c3a"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "d59779af1b6ca74459e0931f1d0f8ec7"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "d85e512fd1ad22183d7dd50d82da855f"
  },
  {
    "url": "tag/index.html",
    "revision": "2c62fc4a02f30582250cfca08d3c69b6"
  },
  {
    "url": "uniapp/index.html",
    "revision": "a8a08cf9a8c65628799a9a36960f66b1"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "276cf952c345df8f5cfc490103b97cfe"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "cfc625f2061afd5f13a243cab075dd12"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "4d926ab7d70e68bb913ff0fcda031ccc"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "595cb0ceee973af9879b24136b24dc90"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "cd0170f4ce04965b4afb4fe4a3bdb9d8"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "2ff88793e76ae6a0500181ee88a1f768"
  },
  {
    "url": "Vera/index.html",
    "revision": "a673e09ecb456758f4367e303c220186"
  },
  {
    "url": "website/index.html",
    "revision": "8356ad53414da8cd66508b71069bba7f"
  },
  {
    "url": "website/package.html",
    "revision": "444e361850fcb31c51822c56d361a4bb"
  },
  {
    "url": "website/rearend.html",
    "revision": "726899382da2b2a72bbf2315916a70e4"
  },
  {
    "url": "website/tools.html",
    "revision": "00d6ea7ba3547dcc8a65f5a6cad5809a"
  },
  {
    "url": "website/webclient.html",
    "revision": "dabfea728993e12a29222ac675873963"
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
