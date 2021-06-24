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
    "revision": "822848e77e03c6cb0734dcdc4fc1daed"
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
    "url": "assets/js/14.14ead2cc.js",
    "revision": "6f456f3e523735777abe5f4ef7fbe712"
  },
  {
    "url": "assets/js/15.eee67e7a.js",
    "revision": "22471caf47f4e739d44e3c315d25310c"
  },
  {
    "url": "assets/js/16.91555f33.js",
    "revision": "bbb83259be8ee8c8fb4889d666f0a2b8"
  },
  {
    "url": "assets/js/17.080a3714.js",
    "revision": "39214940d282f84a2cc3c1aa88e3bc1d"
  },
  {
    "url": "assets/js/18.31f0e06e.js",
    "revision": "b86c3c9dca43bbdffb2bbd85beb0d967"
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
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.f22e2241.js",
    "revision": "b6a7b475ba5d4a641721f575b2f41e88"
  },
  {
    "url": "assets/js/26.4039aa9c.js",
    "revision": "e75fd855ab036adba194404273320e7e"
  },
  {
    "url": "assets/js/27.e08fe835.js",
    "revision": "6c8b1305ad3201826e80b815bfb1ea34"
  },
  {
    "url": "assets/js/28.b700e75c.js",
    "revision": "385a8fe67c80331706b4a6c82bb48d21"
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
    "url": "assets/js/30.ce74b9a1.js",
    "revision": "d3f971aeaa3138bbac97626c140d89d0"
  },
  {
    "url": "assets/js/31.25c685fc.js",
    "revision": "1b39513f925c56904f901fecac98d2e2"
  },
  {
    "url": "assets/js/32.50d74255.js",
    "revision": "a9e9903a47048af9757de74c7e2c934b"
  },
  {
    "url": "assets/js/33.b72f097a.js",
    "revision": "f707eb871e040850f526fef619d9f161"
  },
  {
    "url": "assets/js/34.e16f5610.js",
    "revision": "77fc2722b3dbddbc2b6a43bf295300ae"
  },
  {
    "url": "assets/js/35.31fe1265.js",
    "revision": "ea0f6e27c4d428981039dea49af1f8f6"
  },
  {
    "url": "assets/js/36.24d31a9d.js",
    "revision": "d32e7b8a0f6051bdb0756716eb3056eb"
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
    "url": "assets/js/39.f4079444.js",
    "revision": "d340b0914e7eea72b16332de8fde2f87"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.963d57b0.js",
    "revision": "ccade69a9c16aba3579324f2c018dd61"
  },
  {
    "url": "assets/js/41.af51f17e.js",
    "revision": "da1a80ef0a433d72ebdd54035b2d8a4a"
  },
  {
    "url": "assets/js/42.273e26ec.js",
    "revision": "1aeeeaeb3dfe5fb9d16f0f08fbc3ad48"
  },
  {
    "url": "assets/js/43.b2cd2451.js",
    "revision": "c98efce8c854d6e8fc707f644dbf065b"
  },
  {
    "url": "assets/js/44.ec5e0f9a.js",
    "revision": "2ff3c40a19f34c71eeea4997a899420c"
  },
  {
    "url": "assets/js/45.ef5e0fe5.js",
    "revision": "282e7478dd88934fd17415f996a8c0fa"
  },
  {
    "url": "assets/js/46.efd63572.js",
    "revision": "68fc1c3a83757d5c46eed997174a2d28"
  },
  {
    "url": "assets/js/47.1ae54848.js",
    "revision": "ec251bd2c80a614e87ece92a27546667"
  },
  {
    "url": "assets/js/48.0c32db97.js",
    "revision": "9d6ccde43513503ff98d443e5d4b556f"
  },
  {
    "url": "assets/js/49.1f789a03.js",
    "revision": "d06baf358ba1d6a8506bf8b28013a1ca"
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
    "url": "assets/js/7.7244ce27.js",
    "revision": "fc43001207d46fe098eb2e6c8941dfc1"
  },
  {
    "url": "assets/js/8.8ff52719.js",
    "revision": "d81dc01a16a03074fb59841649015cc2"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.a37b3c6c.js",
    "revision": "1cd17717348eca0879872db16e3f3e92"
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
    "revision": "39afc446901d7f4a5fc3e9d8234c5af9"
  },
  {
    "url": "category/index.html",
    "revision": "05a8bbfae13f62b603da5714b0552fb0"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "d9b8f1f4a63b0216006ba689a5f143ef"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "e870ff09636eb6f03f6079a9ebc10c27"
  },
  {
    "url": "electron/index.html",
    "revision": "4e7591be878f2b18ab0a066374e35f55"
  },
  {
    "url": "extra/index.html",
    "revision": "49a493ab5700d00909b69900348b40f8"
  },
  {
    "url": "flutter/index.html",
    "revision": "79446cbae22c04db7e116b4cc74bcde7"
  },
  {
    "url": "flutter/test.html",
    "revision": "6a530867d544f26771ed42649b64f088"
  },
  {
    "url": "guide/changelog.html",
    "revision": "e4e0b846256789c2d93899eac1c5b442"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "05b3dda115406f20890fd1a1f6c90423"
  },
  {
    "url": "guide/faq.html",
    "revision": "7185f2c9fbb1082592861f77205f9f4c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4d5aaeb7bc8b5b0b216f6090980f05ae"
  },
  {
    "url": "guide/index.html",
    "revision": "fae7fa5e10a94469355b47838cb42ebb"
  },
  {
    "url": "guide/palette.html",
    "revision": "7e9e623cd3327293cf04593faf2bfa45"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "e0816f303a6b5081c522a85f0419d21d"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "f955047ca9affc5259ca1ec3b756694c"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "0ed5afe8dd9b6176b6509b07e2fbe918"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "4a42f38b638bae0ee43de899d2c91e82"
  },
  {
    "url": "index.html",
    "revision": "57632aae127745a3b62a32415f3d7086"
  },
  {
    "url": "js/index.html",
    "revision": "074e12ded1947598549ed780eb79ba77"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "4e861e920d929f6d6eec53c939687793"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "5085a41d5296bc083b747f35c4785f67"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "6597a6d6066e4ebe430caace00ecf289"
  },
  {
    "url": "midway/index.html",
    "revision": "5e86ee3201d7b453d15deea38f025caa"
  },
  {
    "url": "notes/brew.html",
    "revision": "fc7da938cbb3f3c0ecd1a39d206d85fb"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "fad4a8898299eca27d710cd23c665155"
  },
  {
    "url": "notes/git.html",
    "revision": "c2f09c6dd5ff8c4fc9efc36547345ac9"
  },
  {
    "url": "notes/index.html",
    "revision": "5429a7407c6c2e446d406dd603b16e57"
  },
  {
    "url": "notes/nginx.html",
    "revision": "57273c5bc9dc5064d4180f258b30667d"
  },
  {
    "url": "notes/node.html",
    "revision": "f258410192bfff3e1d746a2ef550fc6b"
  },
  {
    "url": "notes/npm.html",
    "revision": "1ab67f792de5b36605d7296ec8b0dde4"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "7ae85c40b3ce018f694adc4aa1119b52"
  },
  {
    "url": "notes/vscode.html",
    "revision": "51eccafb41f22d80cf93867b939e447c"
  },
  {
    "url": "plugin/index.html",
    "revision": "31cbda9189fd84d18d5cabd6c4fb33c6"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "4f1a5f860a8b01b40c36cffb69d93ff1"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "f7ba306341c7aad42c77fba3d45fd077"
  },
  {
    "url": "tag/index.html",
    "revision": "2fd31ad14ddfbe7770551d8488692b9e"
  },
  {
    "url": "uniapp/index.html",
    "revision": "394f069fd72f4a83ad959d08020dfcd3"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "7f6f74b121501153b222176407013a2a"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "66c57ce1772dd088b27e93c9f6d85001"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "4fdbc0dbadb6fac82cdf12e707d7f969"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "3121c556de3370f7be5bef3c270f433c"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "608a3e6a5e16418312d15456829b4603"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "3ea7fdfd838be055ba8d28130794135e"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "3568e11e18d20ee16294e117b70f9622"
  },
  {
    "url": "Vera/index.html",
    "revision": "f36b5eb7c06a1c265cb477ed1008402d"
  },
  {
    "url": "website/index.html",
    "revision": "f485b4ae4aecf315d89c7ce12467d69a"
  },
  {
    "url": "website/package.html",
    "revision": "0f49df480e4d51936feca679ce32708f"
  },
  {
    "url": "website/rearend.html",
    "revision": "55eeb610cd76a437459621e780a9ab3c"
  },
  {
    "url": "website/tools.html",
    "revision": "1a8f05e803d45ad8f794500fdfe960ef"
  },
  {
    "url": "website/webclient.html",
    "revision": "55fe9ac2bf485d8b41a3a80fac056c3e"
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
