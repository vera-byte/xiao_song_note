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
    "revision": "dd6dd1fc799f5d29deb0cc21af8d64e2"
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
    "url": "assets/js/14.82ccd473.js",
    "revision": "075ed2a10941f0d4da251f073c226986"
  },
  {
    "url": "assets/js/15.37f4e7ce.js",
    "revision": "218b7b604efb344f90effeeb3fa46759"
  },
  {
    "url": "assets/js/16.a36d26f0.js",
    "revision": "d5e97f199bb4ef24bf02ae662be75851"
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
    "url": "assets/js/23.92a0eca3.js",
    "revision": "a86c72b0ee475143772db0260e0a8799"
  },
  {
    "url": "assets/js/24.a744d836.js",
    "revision": "f19f38e8dd387f29c2419267c6756c3a"
  },
  {
    "url": "assets/js/25.851fc78e.js",
    "revision": "3d7d2b7c0780895270290cd943970d5a"
  },
  {
    "url": "assets/js/26.52a89e8b.js",
    "revision": "e420e9ff7beb597ea17f0906396eb361"
  },
  {
    "url": "assets/js/27.64a56655.js",
    "revision": "2a3f4e1d33a7ff64f9e69ab4b99a795f"
  },
  {
    "url": "assets/js/28.02b933c2.js",
    "revision": "4eb67473b7c9230c3886ec938cec70d5"
  },
  {
    "url": "assets/js/29.d57c8801.js",
    "revision": "79aab68382fa27e2e4a9f4fd7cad3c68"
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
    "url": "assets/js/31.be092bcb.js",
    "revision": "ccb1e5e836a12831c366313258e2ef05"
  },
  {
    "url": "assets/js/32.f4488e96.js",
    "revision": "9252852507c0b0bf57e8dd703b346296"
  },
  {
    "url": "assets/js/33.529a52a9.js",
    "revision": "bcd086301311fb29d48e3dd961063aed"
  },
  {
    "url": "assets/js/34.4170b673.js",
    "revision": "00dca8ed4e37c2d28863253b3316eff5"
  },
  {
    "url": "assets/js/35.a5c908f1.js",
    "revision": "98ec206f6bfed07feae1077bf6f6a45c"
  },
  {
    "url": "assets/js/36.da64f9d2.js",
    "revision": "208e3606f9eb65b45ec716d8263d1c2a"
  },
  {
    "url": "assets/js/37.57d1a27f.js",
    "revision": "aef265e054eba6ffcff31d12f1b32ce4"
  },
  {
    "url": "assets/js/38.8a5b24f3.js",
    "revision": "f8741486c9af816867f782491455e8b3"
  },
  {
    "url": "assets/js/39.557f70cc.js",
    "revision": "b1a460367c205710b507a8d96995ad3b"
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
    "url": "assets/js/41.366a18b1.js",
    "revision": "6232a64e2030c2467ff3464d8dc6fa4b"
  },
  {
    "url": "assets/js/42.6e274835.js",
    "revision": "006dd8a9405f8091a74d76d9be7e6438"
  },
  {
    "url": "assets/js/43.3fce67dc.js",
    "revision": "0e321fa361280dc401314e50ef8a8a88"
  },
  {
    "url": "assets/js/44.2b0e9370.js",
    "revision": "dfb252db4288141eb04e5dc6c4983592"
  },
  {
    "url": "assets/js/45.0f027aad.js",
    "revision": "0c8282bc446b2e3e312d80b97e7633c3"
  },
  {
    "url": "assets/js/46.ce2a1740.js",
    "revision": "b96242a2d8566d5cbd56384821e03fa7"
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
    "url": "assets/js/6.8c5766ab.js",
    "revision": "ef43bb050e1c719f691a38bfacf80326"
  },
  {
    "url": "assets/js/7.19cab9a4.js",
    "revision": "7c466c772b3ed5e39f0f81cf2cb86cdc"
  },
  {
    "url": "assets/js/8.1d240589.js",
    "revision": "ba173ee47f65dddaba02476cfffbff86"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.676e0f1e.js",
    "revision": "5979b27eb3033c8f64995314cd3242d9"
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
    "revision": "eca06c0568c82a05f37cd2975c107fb7"
  },
  {
    "url": "category/index.html",
    "revision": "46447c19ac0501e8148db0c486ede23a"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "6003138743ff3cab57d73bba87fc7686"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "d07ec305114c08ce3509bc73cd7c3a2a"
  },
  {
    "url": "electron/index.html",
    "revision": "bc9340dc54fd10556e975731cf6197f6"
  },
  {
    "url": "extra/index.html",
    "revision": "453e39ca212b1ddf63a576bd389a9906"
  },
  {
    "url": "flutter/index.html",
    "revision": "ca0ff351a14556853fb625d63e8ffd08"
  },
  {
    "url": "flutter/test.html",
    "revision": "856cb0dc739589b22ad0ce10e184c20b"
  },
  {
    "url": "guide/changelog.html",
    "revision": "e7d38b774412ee0f92dd09797e55b2e7"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "1510218eb10026af620f2f68999ea7f1"
  },
  {
    "url": "guide/faq.html",
    "revision": "45e07ddc1491682fdf308952c0d3f1d4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "89f8784a338e38d462730683158814f0"
  },
  {
    "url": "guide/index.html",
    "revision": "f9faa82e5715945089906603c1f6bf36"
  },
  {
    "url": "guide/palette.html",
    "revision": "9a008fd0b5b9bac1831a95db8136b97e"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "65d33503e9deba43d644064242d4018a"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "7a21cded7c428915fc407c696d2b7857"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "1f2a7000e1bc6e6b5b8a71b84353d7db"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "4833d30fd9192521c7fa81f4ebb78bc5"
  },
  {
    "url": "index.html",
    "revision": "a55e59b8fdfa9cd57a9deadea932ff49"
  },
  {
    "url": "js/index.html",
    "revision": "cb36f8a0a582a5d3c35076b6ce4fb71b"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "5ae681cbc4144b71786a42e3ba7fd9bc"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "e78018e6b5b1b26dca48aa153b86f099"
  },
  {
    "url": "midway/index.html",
    "revision": "9128867bab566dd7af7883b78f65bea7"
  },
  {
    "url": "notes/brew.html",
    "revision": "ce419f4ec9d05c4f8747b4424444e0f9"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "2c417c55854efffe7475acef007ab85f"
  },
  {
    "url": "notes/git.html",
    "revision": "72b7145700fe348c96e65500130f419d"
  },
  {
    "url": "notes/index.html",
    "revision": "28a615b4d2d1af1aed942d34dd4b0707"
  },
  {
    "url": "notes/nginx.html",
    "revision": "7b53d5aa765963a4a351c4f3a10c7097"
  },
  {
    "url": "notes/node.html",
    "revision": "0086bf81d707c1269ae0035a0724021a"
  },
  {
    "url": "notes/npm.html",
    "revision": "417bed2d77da77da0201da633eea1bc4"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "ed90073b7f34f6b96f53d5045e6c4e7c"
  },
  {
    "url": "notes/vscode.html",
    "revision": "b5a3de3e2575c07d0f719be7d7797c6d"
  },
  {
    "url": "plugin/index.html",
    "revision": "c98af31eeaf5747fa3cf5403b2bb609e"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "da4179dc4848735ab5116d74626f9baa"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "c4ab4d2e484775871837899763fe1768"
  },
  {
    "url": "tag/index.html",
    "revision": "186bd9be659d121854114f6e69809864"
  },
  {
    "url": "uniapp/index.html",
    "revision": "08022b0c87c4834f5b218a93837e37d1"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "6867ec405a169c3a21b672b7296ccb0a"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "048a7235ebfb9e5a20a7c7db86026c3d"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "6fbcf0d0697eb5871915059b97ec668f"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "3198f70baeaf9a56972e222b50f27c49"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "9300bdc4d664b7700fef3a128035e9a3"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "f9af1d7ab61987c872a2caa2fc221930"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "42b548b469291c85b3e764504322e5a9"
  },
  {
    "url": "Vera/index.html",
    "revision": "f0f31c55066872b911075539de5518f8"
  },
  {
    "url": "website/index.html",
    "revision": "03c970fd7e3ddef66fb414f2302c7021"
  },
  {
    "url": "website/package.html",
    "revision": "4e320a69c8301a643136b5bc4162c0fa"
  },
  {
    "url": "website/rearend.html",
    "revision": "bfdd2aab3b366e1a932810e8ea44830f"
  },
  {
    "url": "website/tools.html",
    "revision": "2e00016942ec48ee3b98b9d7e684f27e"
  },
  {
    "url": "website/webclient.html",
    "revision": "50355f478807d83584c34df929138afe"
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
