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
    "revision": "c53668000781aaef724c8a5cbe86086a"
  },
  {
    "url": "assets/css/0.styles.51e6d2a2.css",
    "revision": "2757b67a7a4a1e968145b65259a57bdb"
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
    "url": "assets/js/13.c78cfbec.js",
    "revision": "1d3b3411b190bdb3202d630586833f71"
  },
  {
    "url": "assets/js/14.0f93a6a6.js",
    "revision": "8955b72b118a7f42a1a159ddc3939685"
  },
  {
    "url": "assets/js/15.4c67e75d.js",
    "revision": "cd4af546075b43b5f8d2ea4f7686e4f4"
  },
  {
    "url": "assets/js/16.1462fa75.js",
    "revision": "95bd8e5007c8ec2748438112b1a83d42"
  },
  {
    "url": "assets/js/17.7b76b468.js",
    "revision": "1a274b7e99f01ff4e010cca7d5ccacc6"
  },
  {
    "url": "assets/js/18.1e5f46e7.js",
    "revision": "26b8c9e89149181e2f89fd6644d6aa8b"
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
    "url": "assets/js/20.b67b1321.js",
    "revision": "3a18e6336fc4ddf30f0becae7d3771ed"
  },
  {
    "url": "assets/js/21.6ecd3bb3.js",
    "revision": "98d1772a512a5e23c408f679446e2814"
  },
  {
    "url": "assets/js/22.e520653a.js",
    "revision": "fbbd4a50680827cafdbe70b351f947e9"
  },
  {
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.9bd6b62f.js",
    "revision": "c501bbef3d61908cfce03cdeac17a540"
  },
  {
    "url": "assets/js/26.2954807c.js",
    "revision": "f2f687edc00f8bcd72ca47433fb2b3dd"
  },
  {
    "url": "assets/js/27.cc529dff.js",
    "revision": "d75bd548f202b3e850bf86d38666a123"
  },
  {
    "url": "assets/js/28.a3c0ac05.js",
    "revision": "0cf2fe2da08cd08ceb806475ea59b7b7"
  },
  {
    "url": "assets/js/29.2231312a.js",
    "revision": "03ad793ee22697c85de82d40327f6409"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.ab51b04e.js",
    "revision": "8f23aca416ab8cc0ffd5a7935804cf18"
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
    "url": "assets/js/34.fb4d12fe.js",
    "revision": "c7d5b05d02e92197fcb52f7862473e61"
  },
  {
    "url": "assets/js/35.5b110848.js",
    "revision": "e11a07c02db6f27726855b1f81fcb7aa"
  },
  {
    "url": "assets/js/36.49f9eca7.js",
    "revision": "c4f149dd969a63d052dd5efa82b4971c"
  },
  {
    "url": "assets/js/37.7cb98802.js",
    "revision": "091a8c479548272af46f46e1ca1d3248"
  },
  {
    "url": "assets/js/38.5ad23b6d.js",
    "revision": "17155c89ec9683f72d17f6d1ce3284e4"
  },
  {
    "url": "assets/js/39.025b3203.js",
    "revision": "b8c7243575a5b00a73ee8ac8cd7b6f31"
  },
  {
    "url": "assets/js/4.fa6ed8fd.js",
    "revision": "ed64aadac9c4bff81317b5f923b2083a"
  },
  {
    "url": "assets/js/40.09acf456.js",
    "revision": "cf1f0154b2f47b8d03cf83fba361ddd8"
  },
  {
    "url": "assets/js/41.4dd791d6.js",
    "revision": "478bfb472f7bceef88987ccc2d8c0236"
  },
  {
    "url": "assets/js/42.8a9dd890.js",
    "revision": "9bee7eeaec51df48ecac54308aa26397"
  },
  {
    "url": "assets/js/43.cf104027.js",
    "revision": "796bdfce00774bbc00fc609a1ac51de5"
  },
  {
    "url": "assets/js/44.2b0e9370.js",
    "revision": "dfb252db4288141eb04e5dc6c4983592"
  },
  {
    "url": "assets/js/45.9d6d5b63.js",
    "revision": "c7cef1ab7134f9d62ea178d2c5e33a16"
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
    "url": "assets/js/6.8ea12b10.js",
    "revision": "889630a1ce5d845d764d0c0adf8d5699"
  },
  {
    "url": "assets/js/7.28b3dd0e.js",
    "revision": "6b96d6daa58f4ca041adcd9131a7ff68"
  },
  {
    "url": "assets/js/8.baafbf4a.js",
    "revision": "681c4fbecff8b8b8a7ed9f2084d77e70"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.3a8436a7.js",
    "revision": "c40d7a8c9df826439da29141a23d2ae3"
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
    "revision": "1b900266e79866c33af75bb116d0bd15"
  },
  {
    "url": "category/index.html",
    "revision": "bdfc1e631298ec180b2dd05ac7fc1dcf"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "ac0a0d9cb5dc7070c84bdd0be4423549"
  },
  {
    "url": "electron/index.html",
    "revision": "b9826c0a3a25deac574ecbe6eb2c1a98"
  },
  {
    "url": "extra/index.html",
    "revision": "1a4e0ea626eb9408a7e0ed53252bd9a6"
  },
  {
    "url": "flutter/index.html",
    "revision": "b289ae1e4ce745c5025c637554832533"
  },
  {
    "url": "flutter/test.html",
    "revision": "a41f1bf14918ca12a30214c43a4296a6"
  },
  {
    "url": "guide/changelog.html",
    "revision": "d08b1ad15667fad21473a88b3857a6a7"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "9d1f5823c2cb931e6342813908e5f43b"
  },
  {
    "url": "guide/faq.html",
    "revision": "be845730e29e62b5b15fec6ed915c948"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "fd78c80df54a84113e76c30183d3fb94"
  },
  {
    "url": "guide/index.html",
    "revision": "e82d5aa61425a4b95edc5c8cba00a232"
  },
  {
    "url": "guide/palette.html",
    "revision": "9649392ec190c58147b92e3c1f6e272b"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "3ddbd5950d941c6fea39f3b9564fd37e"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "bca585d2b9683e44e775fce2a6ad966d"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "024b6886572515cdd5ba37819182ab71"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "d783d5ad16de3cd496f8809c0d617f16"
  },
  {
    "url": "index.html",
    "revision": "1613af78c2c6d14b738bd119a5a5f272"
  },
  {
    "url": "js/index.html",
    "revision": "f6898188d634befc7cb5f3d892b2f813"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "b057256c761956d57b6fea8495cb0bd0"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "8136ce29d19b96902877bc2f80e51b79"
  },
  {
    "url": "midway/index.html",
    "revision": "9d5e1ac9c70c56d2e0aaaccdd9331ae3"
  },
  {
    "url": "notes/brew.html",
    "revision": "e1f82142a1a98e4316fe1f2b6095f8f5"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "b1e756626e5931d8132ff8c8eeff2f9f"
  },
  {
    "url": "notes/git.html",
    "revision": "d7123cca9f20691f7123d482ea93fb77"
  },
  {
    "url": "notes/index.html",
    "revision": "1af07f3c90510574014bdca87b6d90fa"
  },
  {
    "url": "notes/nginx.html",
    "revision": "8e8df5a74b28a3c6e72e52fc286ae696"
  },
  {
    "url": "notes/node.html",
    "revision": "880130be0224be602c623c6426a36ce2"
  },
  {
    "url": "notes/npm.html",
    "revision": "5201ceeb79857a8f8a190f3f84beef74"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "c8b34df399e438f3754988464ad5b896"
  },
  {
    "url": "notes/vscode.html",
    "revision": "15ffeeac4660e501bcf77470b1735121"
  },
  {
    "url": "plugin/index.html",
    "revision": "9ba6ee0d3ae7ca90600cdc58d1749ac5"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "21bacf42103088242f50267390a5d335"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "3c92d932b6dac6591152489f17453582"
  },
  {
    "url": "tag/index.html",
    "revision": "67023b572a73218b947b87c20e9f0a3b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "f5f184898d4880e9a906d08db7f482b4"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "df61a87db37ba62b14f6aafbec29306f"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "33d8ba2ecace6a7104fd4e9663cc5672"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "949cb91ad246bc16cf71c2ef231f418d"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "f47e60a800b5ccb63eea7d0c1aedc2f3"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "ba1ca488d45f4acc4fca5f549bfb1c4c"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "ec3e986734b8db25213ae2518755d905"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "edbb14dd4940e239b8f73296febc463b"
  },
  {
    "url": "Vera/index.html",
    "revision": "bcc8badb54680e8eb22b926555624ef2"
  },
  {
    "url": "website/index.html",
    "revision": "3c9206b56ea41a10be1e7195048eea62"
  },
  {
    "url": "website/package.html",
    "revision": "934775f77b0fec453c769596a1cb69b1"
  },
  {
    "url": "website/rearend.html",
    "revision": "b654529b62ee76ff3b173b49fa72a356"
  },
  {
    "url": "website/tools.html",
    "revision": "a5179ae5e3dfbf584b3e29aff667933a"
  },
  {
    "url": "website/webclient.html",
    "revision": "af0fce1619c6c048c5ad6a7f53eadc94"
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
