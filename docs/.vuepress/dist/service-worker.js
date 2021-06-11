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
    "revision": "516488925024ccb5569ac72b791cc386"
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
    "url": "assets/js/14.c7c99f4d.js",
    "revision": "7f1796dbab5344718cdbd1fd2adfd3fa"
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
    "url": "assets/js/18.1e5f46e7.js",
    "revision": "26b8c9e89149181e2f89fd6644d6aa8b"
  },
  {
    "url": "assets/js/19.2ae1e7c5.js",
    "revision": "43771e7d94ff31c54e1ba84b6cd0a2ff"
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
    "url": "assets/js/22.afc333d7.js",
    "revision": "ba8d81892ad3cca45ad6f4b42e0f2857"
  },
  {
    "url": "assets/js/23.b8bc5ad1.js",
    "revision": "17161bbe2271f1a6391dfc58c91b6435"
  },
  {
    "url": "assets/js/24.a744d836.js",
    "revision": "f19f38e8dd387f29c2419267c6756c3a"
  },
  {
    "url": "assets/js/25.2ebab503.js",
    "revision": "3baa0ff3fc3dc00de4a0cba817e98cd2"
  },
  {
    "url": "assets/js/26.c3c228ad.js",
    "revision": "aa2bcfe6ddb0c0af81ca87c515f16671"
  },
  {
    "url": "assets/js/27.c33e5558.js",
    "revision": "a8adc21dd93ce7a7941dff5a71aaac14"
  },
  {
    "url": "assets/js/28.2064f964.js",
    "revision": "06e1fdee575b392221c9630dfee0a5d8"
  },
  {
    "url": "assets/js/29.af86167d.js",
    "revision": "d3f2a6349e7d0b70618d4f274c70d3bb"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.eb353eba.js",
    "revision": "9c1a45a94dbf6e6a5bd6f6f107621b25"
  },
  {
    "url": "assets/js/31.77d7c4e6.js",
    "revision": "9ab43af75b06bacb764ace6b61ddf6ac"
  },
  {
    "url": "assets/js/32.8c4b79c5.js",
    "revision": "ca2323ab11fb1ee15ae0eaff21979921"
  },
  {
    "url": "assets/js/33.f922c896.js",
    "revision": "033626fc4c64bd5be7b377a65b7cc1d1"
  },
  {
    "url": "assets/js/34.87a17869.js",
    "revision": "6c5ba3465f49421aa5898d9073253172"
  },
  {
    "url": "assets/js/35.3552f61f.js",
    "revision": "850e829a4f9855564b890c4d4436d43e"
  },
  {
    "url": "assets/js/36.c0431443.js",
    "revision": "926e5659e6c1568977eeff17a98bc983"
  },
  {
    "url": "assets/js/37.d67b4be3.js",
    "revision": "71780fa0c26e3c0fa8788c4e8cea0f0d"
  },
  {
    "url": "assets/js/38.f79ca0d0.js",
    "revision": "6d2d3a28ace2274b3eb0a0287727c0e6"
  },
  {
    "url": "assets/js/39.dd2f75b6.js",
    "revision": "a54b4f44e1659b3914f11b90b35135b5"
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
    "url": "assets/js/41.6acd7219.js",
    "revision": "7275fe70d55e9c154f3021f09c6a6b67"
  },
  {
    "url": "assets/js/42.ec775be2.js",
    "revision": "831a8c1b1b22043c847818a67b7547d6"
  },
  {
    "url": "assets/js/43.634725d5.js",
    "revision": "5e56eeac7b24a4998ab371f0e51630b3"
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
    "url": "assets/js/6.1d269c43.js",
    "revision": "a212bca5a2958819270ecca884cd14e5"
  },
  {
    "url": "assets/js/7.7244ce27.js",
    "revision": "fc43001207d46fe098eb2e6c8941dfc1"
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
    "url": "assets/js/app.2713d7a3.js",
    "revision": "06531d1b0b07f08610db51eb689650f2"
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
    "revision": "a3492aafad8505c81cb354e9181ec2f9"
  },
  {
    "url": "category/index.html",
    "revision": "6323b41fb4d194565fbdeed86fd4e057"
  },
  {
    "url": "egg/index.html",
    "revision": "875f38a5c40e70dd9357cf094cea73e6"
  },
  {
    "url": "electron/index.html",
    "revision": "8d780655f4eef22b39b95dd1e06a276f"
  },
  {
    "url": "extra/index.html",
    "revision": "1fd9f5a0fc830d619a9a50aa2046a8af"
  },
  {
    "url": "flutter/index.html",
    "revision": "9e6d4a8639b1ec94ce7d9d79f992babb"
  },
  {
    "url": "flutter/test.html",
    "revision": "01953302cfdb0a1019c6f2d6b5933b06"
  },
  {
    "url": "guide/changelog.html",
    "revision": "311654c579d34838bd7846aa70fa5c56"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "d0eaf863c33bee697557a57cce948311"
  },
  {
    "url": "guide/faq.html",
    "revision": "347a9cfa092f476e5648e9a9c4754e8f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "50d3f6b5d821b8334a6c3e4c194a0297"
  },
  {
    "url": "guide/index.html",
    "revision": "0fe87e1e3e474c2c036ccd9a45233185"
  },
  {
    "url": "guide/palette.html",
    "revision": "3679ca003d29210ee194cc7d69c9ec2d"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "9708b0c2b669b8d27f636b1b98e38180"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "02ccc2170cf01c9a78e7428696ada253"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "535cc2c3c64df1a2b7f8e426de5b4ede"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "c222725f983bb4ce396118abbd30e540"
  },
  {
    "url": "index.html",
    "revision": "f9932ac385f9f32550c7c5a0d2bfa4e6"
  },
  {
    "url": "js/index.html",
    "revision": "58a822b8ab716a07831dcc9b4aa71d50"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "ae5575ef93d3b35fd53f1e5fe846420c"
  },
  {
    "url": "notes/brew.html",
    "revision": "9e052118cea0f7f88ecd11f1e1672587"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "fc1aeaf4167b1c1821d0921b94190442"
  },
  {
    "url": "notes/git.html",
    "revision": "3c77dbc79835dfe96959306a1169783a"
  },
  {
    "url": "notes/index.html",
    "revision": "844444e80755a7ed2097e83855d4f7eb"
  },
  {
    "url": "notes/nginx.html",
    "revision": "0f9603ca4eb64ec2e976b2492de4594e"
  },
  {
    "url": "notes/node.html",
    "revision": "0cc5db1c7ed5bfc557f081398da6b623"
  },
  {
    "url": "notes/npm.html",
    "revision": "eda74272504e5ccb248c2d094c10b089"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "6c888ee1b78264e2563d3f4c2c390afa"
  },
  {
    "url": "notes/vscode.html",
    "revision": "e4801790cdd495b62bae55dfc7fbbd54"
  },
  {
    "url": "plugin/index.html",
    "revision": "09863e569d39947ebac141d4e85f5736"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "94428070840a99748dbfb98bd40e3323"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "2e4ad43e58fda4dbc312dc410d48fae9"
  },
  {
    "url": "tag/index.html",
    "revision": "2d98a2107f998a4fef5df8a4b0146c3b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "a24a1c75576f2dd0ef8953993ebd9a71"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "1d2f567ca606f8d1027e5d7db77db605"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "b9adcc9227552e9587b7546f0dd295a7"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "1bf7010a82ff2ecfcbddc10d233c5187"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "b8e4ad4b42ff617e8934490937b42d95"
  },
  {
    "url": "Vera/index.html",
    "revision": "afc3a2110fbd81aecd85cf4b2d328181"
  },
  {
    "url": "website/index.html",
    "revision": "7ea1747b7b5b19bfca73e23a001833b5"
  },
  {
    "url": "website/package.html",
    "revision": "2079cba38be2f807e76476954f2e621e"
  },
  {
    "url": "website/rearend.html",
    "revision": "7c663e923663427ff2f27507f3f81030"
  },
  {
    "url": "website/tools.html",
    "revision": "b72644028f4de017dd70555056781e9f"
  },
  {
    "url": "website/webclient.html",
    "revision": "00b81364fc638c21411979c872366436"
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
