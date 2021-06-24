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
    "revision": "7f1fd4a75b45036e15925531ca43831f"
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
    "url": "assets/js/13.89715a6b.js",
    "revision": "216edc86cc1c3604132700e102b6a880"
  },
  {
    "url": "assets/js/14.415aeafa.js",
    "revision": "0b7a40384d88dac0ddc19f10ee6869b2"
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
    "url": "assets/js/20.7547816e.js",
    "revision": "4b2f3b6a2184955c80befed1e1fc7fb6"
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
    "url": "assets/js/23.1f480ed5.js",
    "revision": "bf7bb964f26c8615e9c6d97e981942f0"
  },
  {
    "url": "assets/js/24.381e5e85.js",
    "revision": "4a96ed55fc6aa43a19b8a0967757a7c0"
  },
  {
    "url": "assets/js/25.749cf2b4.js",
    "revision": "5d5e1a7d031b0e1e0ea3ed2b8446566f"
  },
  {
    "url": "assets/js/26.2b8d1dfd.js",
    "revision": "8c868d3136d8dfcd3267e1d437dcf026"
  },
  {
    "url": "assets/js/27.cf480a50.js",
    "revision": "8cbe620ad82866d504b9cfa763e647d8"
  },
  {
    "url": "assets/js/28.d6b1c8aa.js",
    "revision": "35425813135560e7b1d599b9110a47d6"
  },
  {
    "url": "assets/js/29.cda15309.js",
    "revision": "0ad98f9ed9488dd773d228627c9a1ad7"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.bd0b78a0.js",
    "revision": "c7791bd26430c76dbcb1380646fb72c6"
  },
  {
    "url": "assets/js/31.7184f202.js",
    "revision": "fdf7b1f2389696ea24d95fd00dd8efe8"
  },
  {
    "url": "assets/js/32.2c71b35e.js",
    "revision": "0bbafa8bea8d0f06129fa4588c934323"
  },
  {
    "url": "assets/js/33.44160e86.js",
    "revision": "1e58fa9b66c26c61fcbc5a2d1abfeeb8"
  },
  {
    "url": "assets/js/34.5a8b9907.js",
    "revision": "def085c2b9fc7b79c89704fa25a9bf29"
  },
  {
    "url": "assets/js/35.1ca1c767.js",
    "revision": "853d492f5964aff103938c0e21166ecf"
  },
  {
    "url": "assets/js/36.24d31a9d.js",
    "revision": "d32e7b8a0f6051bdb0756716eb3056eb"
  },
  {
    "url": "assets/js/37.b855ceb1.js",
    "revision": "4f7f70ea403c750ead251b9b43107958"
  },
  {
    "url": "assets/js/38.9021c6da.js",
    "revision": "0db0be55f7dd2d088d5395190d9a7b9c"
  },
  {
    "url": "assets/js/39.ba18f8b8.js",
    "revision": "9a9b468801bbf06bdbffec7d6a73b4f6"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.3b4531e3.js",
    "revision": "c72de686561c172469d1654581fe7bb2"
  },
  {
    "url": "assets/js/41.ffb753b3.js",
    "revision": "9c59d75575292847065607f91a5fbe5f"
  },
  {
    "url": "assets/js/42.a7b5b8bb.js",
    "revision": "65b14ebeb42963ea3e9af68e7a6504d9"
  },
  {
    "url": "assets/js/43.b2cd2451.js",
    "revision": "c98efce8c854d6e8fc707f644dbf065b"
  },
  {
    "url": "assets/js/44.8d232609.js",
    "revision": "d092d29bec59ec4f36ff341e6e159c56"
  },
  {
    "url": "assets/js/45.c9b3780d.js",
    "revision": "751730587bc86f3b09ce8740f2c1ed2b"
  },
  {
    "url": "assets/js/46.b50bb026.js",
    "revision": "b0147551cd0374aef86ec2905cf32bc2"
  },
  {
    "url": "assets/js/47.1ae54848.js",
    "revision": "ec251bd2c80a614e87ece92a27546667"
  },
  {
    "url": "assets/js/48.e752c7c4.js",
    "revision": "87e9a228b3625c57f0826bb0914eacfa"
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
    "url": "assets/js/6.f45cd49a.js",
    "revision": "fe8220966fbec031045573307addc415"
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
    "url": "assets/js/app.74ac9f46.js",
    "revision": "88bdef2ba13ef481796bded71e7e834b"
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
    "revision": "02672f9d97cfdfd1a4acd6425bd6988f"
  },
  {
    "url": "category/index.html",
    "revision": "361af541af032c9c5633f096e90b5722"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "ff6602a37a0bf12bba42822f175103bd"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "f9fcfe19a3901462d90c0ec7a42da032"
  },
  {
    "url": "electron/index.html",
    "revision": "c935a8703f005e473e47d86b7c78025a"
  },
  {
    "url": "extra/index.html",
    "revision": "78f7a5cb50151d63713f7846ea60e081"
  },
  {
    "url": "flutter/index.html",
    "revision": "ce18538fde270a251cc23a69f06c7ca6"
  },
  {
    "url": "flutter/test.html",
    "revision": "499ad64abddb6fc1f5c6066ed696a44c"
  },
  {
    "url": "guide/changelog.html",
    "revision": "f82b8d0c18f4fe5d3fa210203c6ffa36"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "75d49a7a1dd09d25451cc4d8135afc20"
  },
  {
    "url": "guide/faq.html",
    "revision": "5af74731c20a9a2eb1139e4f09256d6b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d6b0d5be073c4d43b1119d0aa234ddcb"
  },
  {
    "url": "guide/index.html",
    "revision": "17fd1c9768022976ba9afc3eee90963c"
  },
  {
    "url": "guide/palette.html",
    "revision": "e74c15fe555867e4f6be32f156a8aebe"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "96747fad8be6d2d22036cc186989fbd7"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "353ab159e5fe2accfb3a403b66f4e371"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "c01a7919c271e756445427cfdd98af14"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "c6bebce1e427561347c8e4456ffbc7be"
  },
  {
    "url": "index.html",
    "revision": "b789cec57434fee96cd27b6541b8ec9f"
  },
  {
    "url": "js/index.html",
    "revision": "863e946827c04926c9ed8a93504c54fe"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "d1b42be44064c4e78eec1690f10d1354"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "ab9761e292c68a8eec04d7315afff396"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "56ec5674a2350c7f5071a65e0abe1895"
  },
  {
    "url": "midway/index.html",
    "revision": "26f3911e521c21748cdf56e97bb8a2b3"
  },
  {
    "url": "notes/brew.html",
    "revision": "79b89cf21c581c813247388bc47a2730"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "8dbd8833bf9d95255b490fac91745da8"
  },
  {
    "url": "notes/git.html",
    "revision": "e2229daf20f5424e7ee34a52a88d296b"
  },
  {
    "url": "notes/index.html",
    "revision": "8a8835090e7fdf721d5b91601a0d1850"
  },
  {
    "url": "notes/nginx.html",
    "revision": "6625e8c111c5f4426aec7efd418a090c"
  },
  {
    "url": "notes/node.html",
    "revision": "90ed48d2692a5bc568ea3dcd843beb37"
  },
  {
    "url": "notes/npm.html",
    "revision": "1ec92187645a689e5d81dbdc0faafc58"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "657b76bee450e678d2d2c1ec84874c23"
  },
  {
    "url": "notes/vscode.html",
    "revision": "48b972cf56e499db77718329582395fc"
  },
  {
    "url": "plugin/index.html",
    "revision": "19282595a798cfd7baffb30d34eb5591"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "8110dba37ef2f95f17be3bbc7a32fe9b"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "23f8e5bc3668d1a75694336da662d597"
  },
  {
    "url": "tag/index.html",
    "revision": "02941b913e4e6024b5f0eabbc0bf8b07"
  },
  {
    "url": "uniapp/index.html",
    "revision": "cf5482b545ef5eed5f30acdf36e9fbf5"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "06eadeb9de8cf6cc6e9462bc275c8191"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "d9bec50e57cefee9d3bee9a0a7af2206"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "bb36b9d578eb8a70e0bd69dc76b84e55"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "375a81a6921833fc82a4339da5183e3b"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "f3804c61066b7909ec0d0eebe2f748bc"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "8f0509f7d13cc25948252937f27e15e8"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "b6ad0e9c467162a312f1fc719d147b74"
  },
  {
    "url": "Vera/index.html",
    "revision": "41c8042e1f9895d8a82f97dc7615f5ed"
  },
  {
    "url": "website/index.html",
    "revision": "d4b97d477d85898bdedef8e6e425d6b3"
  },
  {
    "url": "website/package.html",
    "revision": "f5184e03485bc1c72f1d8da75959e392"
  },
  {
    "url": "website/rearend.html",
    "revision": "e75d1c70298f769852aa8c5ee5ea91c3"
  },
  {
    "url": "website/tools.html",
    "revision": "5692a1b9d4b28280140bb0f80349dca9"
  },
  {
    "url": "website/webclient.html",
    "revision": "95f583ac66a6d09d7c67f72f892375eb"
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
