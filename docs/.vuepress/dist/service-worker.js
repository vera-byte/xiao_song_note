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
    "revision": "df23fed82fbd3a4e4c7d955442239964"
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
    "url": "assets/js/12.fe4fb571.js",
    "revision": "f980ee5002fee3e0c33811b79282db54"
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
    "url": "assets/js/15.e946a905.js",
    "revision": "292394b0a6e5e2034cf87ecbff9970ee"
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
    "url": "assets/js/18.c2f1d2ee.js",
    "revision": "7b851c31a4c07983ae987d0265d9f6f7"
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
    "url": "assets/js/21.b97fcc39.js",
    "revision": "2f6146799d5f52d51dac8e15ee14219c"
  },
  {
    "url": "assets/js/22.ba4c4f9b.js",
    "revision": "e9036408f608783a7effa2db1b890256"
  },
  {
    "url": "assets/js/23.a63b91b3.js",
    "revision": "2f5900819c066648fc0a50e69b37b254"
  },
  {
    "url": "assets/js/24.a744d836.js",
    "revision": "f19f38e8dd387f29c2419267c6756c3a"
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
    "url": "assets/js/27.d8ecb2e6.js",
    "revision": "78c3b09f5b1642cd3e63c30748bb1bd4"
  },
  {
    "url": "assets/js/28.42d80a32.js",
    "revision": "0cb24d70636bf1edca977163c6e8193e"
  },
  {
    "url": "assets/js/29.e4aba5cc.js",
    "revision": "43f204cd30799d5e6542dae525e00d24"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.943770f9.js",
    "revision": "eaadb812c8b7681218c5251f48e6847a"
  },
  {
    "url": "assets/js/31.4ddf3d65.js",
    "revision": "29dd46b9e38e8ca922fb69aa1b94c69f"
  },
  {
    "url": "assets/js/32.d82867dc.js",
    "revision": "7dafb74f8d4be01b5ade4237fd8dd109"
  },
  {
    "url": "assets/js/33.2cce1699.js",
    "revision": "b015bad31b8cd7e510a52629dc74449e"
  },
  {
    "url": "assets/js/34.d88cba63.js",
    "revision": "8de3a5d6557830076e2d5810bda42f82"
  },
  {
    "url": "assets/js/35.d65306cf.js",
    "revision": "010da33bb21557b5cad919e6abe17cb9"
  },
  {
    "url": "assets/js/36.e37f3257.js",
    "revision": "f8b93a6720b07154565deb3712b3bd12"
  },
  {
    "url": "assets/js/37.304bcee4.js",
    "revision": "f5cbf32090f7a0079eed17bfd7ab3351"
  },
  {
    "url": "assets/js/38.68773981.js",
    "revision": "49cbe0ebf140627175bfc1cf6edd3d66"
  },
  {
    "url": "assets/js/39.eb40160c.js",
    "revision": "f81589c4aedb332220a2cad11d09a8ed"
  },
  {
    "url": "assets/js/4.9c9b1c5f.js",
    "revision": "a6ae390077f6a83e76e6476b2f32db50"
  },
  {
    "url": "assets/js/40.3809d13c.js",
    "revision": "4e0003a08991a00fb4722e78fd26fe9b"
  },
  {
    "url": "assets/js/41.f77b6d46.js",
    "revision": "209953fd396f87e786e5d34f36d16575"
  },
  {
    "url": "assets/js/42.4c170611.js",
    "revision": "39290f6388bc2a344fc4bdd6e3fe2691"
  },
  {
    "url": "assets/js/43.755ea999.js",
    "revision": "c1b8d0d6ffc033a0ba17ce3b107364db"
  },
  {
    "url": "assets/js/44.5615da21.js",
    "revision": "647681b0ec77a6bfb07feaec5a0e5f81"
  },
  {
    "url": "assets/js/45.b0b352cc.js",
    "revision": "7203e0391a2f719a6d5c0dca3d1ed0bd"
  },
  {
    "url": "assets/js/46.b93e1141.js",
    "revision": "6309c96864f4af0c3e7c3ecaedba6b9f"
  },
  {
    "url": "assets/js/47.0561ebe7.js",
    "revision": "d0e844de099b2c96541c325e64e7aec7"
  },
  {
    "url": "assets/js/48.bfb49264.js",
    "revision": "e7f884eeafd33ab070ebc2a2e220bb23"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/6.d1426df9.js",
    "revision": "fe297d9414254180acfe8f7c92916d40"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
  },
  {
    "url": "assets/js/8.a54ae796.js",
    "revision": "04ebb658e380e5dde1fd10490546e730"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.8b49e971.js",
    "revision": "a82cf6340b41f45992784dd92d483345"
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
    "revision": "4c158965c935f1471fd0cfe715573bcd"
  },
  {
    "url": "category/index.html",
    "revision": "c763aaca99c1e285b6373e78bc811d7e"
  },
  {
    "url": "egg/index.html",
    "revision": "cbb502fa0f3cb99a37922d6b875d7ecd"
  },
  {
    "url": "electron/index.html",
    "revision": "66fc21ac408231409cc39e9af7bc48db"
  },
  {
    "url": "extra/index.html",
    "revision": "102425a9c6cc5d41b1ec14d9918a7e35"
  },
  {
    "url": "flutter/index.html",
    "revision": "03da2a3afe943d07b9991888152f4bfb"
  },
  {
    "url": "flutter/test.html",
    "revision": "e82309e0aefb3c6aefa6fc02ea25c2f4"
  },
  {
    "url": "guide/changelog.html",
    "revision": "b10f8dc1434d0e5ea558949799283160"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "3fc824148c1ab7bedbc9e8d8c6a23b78"
  },
  {
    "url": "guide/faq.html",
    "revision": "d9d4c37a04a16abb2bbdff37dcd6736d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "480963bd5cb9da8f7278107d2ccda605"
  },
  {
    "url": "guide/index.html",
    "revision": "0751fb0e68cc46a33550ea4025b6c584"
  },
  {
    "url": "guide/palette.html",
    "revision": "35774cf22254c29ad77b73a1d08f1f52"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "10c5168cf5b30eb7b3238bcc8328819a"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "dccabef215af5a5be10889de080ec393"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "208a35f40924dad0fb642783658e6519"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "97ad237032aeeb67e22d0c161d8aa722"
  },
  {
    "url": "index.html",
    "revision": "da159d2d7dd81198814288ca7fca1da3"
  },
  {
    "url": "js/index.html",
    "revision": "d26c1941aef293bddf306bb808062b33"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "a7e92c9f14f4d90dc7a8c75a55e560f2"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "c59bfc893e758067f5b77edb898e1359"
  },
  {
    "url": "notes/brew.html",
    "revision": "38c307822cac102d9ca8c473440f7111"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "22b2c536b3f01c6c439798e334a2abad"
  },
  {
    "url": "notes/git.html",
    "revision": "db00732c33de5383180cf0b3c9d4aede"
  },
  {
    "url": "notes/index.html",
    "revision": "83d80298e8b759b1ecfab3ca2c0e98c2"
  },
  {
    "url": "notes/nginx.html",
    "revision": "0850610bbaafc32323a6dac55ac8068a"
  },
  {
    "url": "notes/node.html",
    "revision": "557e79fdcdc6db3e24d5181f4cdc2ac0"
  },
  {
    "url": "notes/npm.html",
    "revision": "d0122f5cbf166bc2f169d43f38024fc9"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "1544cb0841e15345838adce459d8e576"
  },
  {
    "url": "notes/vscode.html",
    "revision": "de999f2819ee679f76177505f0eebe4f"
  },
  {
    "url": "plugin/index.html",
    "revision": "2165b728749d0b46645ecc4156389f72"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "c0bd6ffa987da3275747538821d5cba1"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "d433932ccf895d33e9c5358798bb108f"
  },
  {
    "url": "tag/index.html",
    "revision": "a54a9d08c0daffa4059d5f3909be1fad"
  },
  {
    "url": "uniapp/index.html",
    "revision": "5cc4ef946f615ba660908bbd9efde640"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "df5ec7f081781f62747ccd78ec530751"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "8e4c7764a4f97f15726d3305bb202459"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "c7102aec1136fe2ccd9bbb380f14b031"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "a3420970baa70662abb5ccf412bb9d5a"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "f2d42579733d53979d580ca9acd14846"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "1e578a99a9a0fa2a8b53e640311b6705"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "4bc57ca2632bf84af27602b861ac0816"
  },
  {
    "url": "Vera/index.html",
    "revision": "9753084db887de78274832ef88123397"
  },
  {
    "url": "website/index.html",
    "revision": "62adc789b6ed9e5d74cf8acf1e88dacb"
  },
  {
    "url": "website/package.html",
    "revision": "016e80ec631d8fdcf97678da8b7462af"
  },
  {
    "url": "website/rearend.html",
    "revision": "6ed4b289a072231631e280c29262b692"
  },
  {
    "url": "website/tools.html",
    "revision": "d3165a392c15f6d81d98a03985fe6c3a"
  },
  {
    "url": "website/webclient.html",
    "revision": "8ebbc7ba0184a9de417accc1cf577c83"
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
