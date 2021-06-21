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
    "revision": "8f0c3cf3a044b10292cd036cebefa824"
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
    "url": "assets/js/17.d618ee3a.js",
    "revision": "333f8bf627cd7652320f5eeb32de097f"
  },
  {
    "url": "assets/js/18.c2f1d2ee.js",
    "revision": "7b851c31a4c07983ae987d0265d9f6f7"
  },
  {
    "url": "assets/js/19.c3cac64a.js",
    "revision": "74cc3a1061656151af497f1e24dbc4ec"
  },
  {
    "url": "assets/js/2.4f3480b1.js",
    "revision": "eb323f1b8dc7cae20a7681bb9f453465"
  },
  {
    "url": "assets/js/20.d87e57eb.js",
    "revision": "669558434d11ef16d2abb9e21b3ee30f"
  },
  {
    "url": "assets/js/21.1f51015f.js",
    "revision": "e51eaddcca758a185783ddd45fb813c6"
  },
  {
    "url": "assets/js/22.afc333d7.js",
    "revision": "ba8d81892ad3cca45ad6f4b42e0f2857"
  },
  {
    "url": "assets/js/23.fe2c88f9.js",
    "revision": "35c9422859c03f2ef41c4090366b748d"
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
    "url": "assets/js/31.528c5df6.js",
    "revision": "db5b64772d96974535207579f7d54aad"
  },
  {
    "url": "assets/js/32.291bc07c.js",
    "revision": "4683762c541d58261f213489ac4eb337"
  },
  {
    "url": "assets/js/33.3845a9bf.js",
    "revision": "63cf458f65acd71804e6e405bb487661"
  },
  {
    "url": "assets/js/34.dd0048e6.js",
    "revision": "635c55ca774ac69d8d0f51d79487dff9"
  },
  {
    "url": "assets/js/35.5b110848.js",
    "revision": "e11a07c02db6f27726855b1f81fcb7aa"
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
    "url": "assets/js/41.4dd791d6.js",
    "revision": "478bfb472f7bceef88987ccc2d8c0236"
  },
  {
    "url": "assets/js/42.6e274835.js",
    "revision": "006dd8a9405f8091a74d76d9be7e6438"
  },
  {
    "url": "assets/js/43.5dfea87b.js",
    "revision": "8fda07c5b06dccaeaae02aaf6dfb10da"
  },
  {
    "url": "assets/js/44.353a3585.js",
    "revision": "e92d342142f4dad54a64e69e898666fb"
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
    "url": "assets/js/47.3a17da56.js",
    "revision": "c654aba042864f03673a514167597e95"
  },
  {
    "url": "assets/js/48.43f38398.js",
    "revision": "0e7a622fd4c65a9490f8d723ede8858c"
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
    "url": "assets/js/6.3527113d.js",
    "revision": "c99c348ae78e710692fa484fc9ea4f67"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
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
    "url": "assets/js/app.d3113621.js",
    "revision": "0c5845f14434144e84a52af9ca08c879"
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
    "revision": "283be1d6928f1f47451e4bf0cc80ba1a"
  },
  {
    "url": "category/index.html",
    "revision": "4c3af217141cef69244ec1e4e42dd69c"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "286db1c52e08fd8c3c48c4c344bcca8b"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "7b8193712c03b5fc57251f079524199e"
  },
  {
    "url": "electron/index.html",
    "revision": "49e9bc056ad2840c90538e62e80420d4"
  },
  {
    "url": "extra/index.html",
    "revision": "879251c89c16a2a3a309d2162abc33c7"
  },
  {
    "url": "flutter/index.html",
    "revision": "a05bea8f3d76484bca28851e4422e0e2"
  },
  {
    "url": "flutter/test.html",
    "revision": "1b8a43620fdcdebecf1486c355c230f7"
  },
  {
    "url": "guide/changelog.html",
    "revision": "c728d3d6d4b184ed59cebea563a4bdfc"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "44e296c5802d3c57a2952c4534c00520"
  },
  {
    "url": "guide/faq.html",
    "revision": "a40990c7564ab21f8b131a712e7a9cc9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "78010edf784b85af8de85558ce6ac0c3"
  },
  {
    "url": "guide/index.html",
    "revision": "631601f8f671fdf0a860ec406b92867b"
  },
  {
    "url": "guide/palette.html",
    "revision": "b12ddf01fe8a85c956acf36f0e80d9bf"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "e80d1553b081b8bcbfa35489b91e897b"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "2df0f4bf6fb17ed5804aba3315e252d0"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "7d369651b3ab6961bbe12d3a0d67c43d"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "3426891d0d3864bd03525403e4dc2d37"
  },
  {
    "url": "index.html",
    "revision": "a3173d93296e6c8a9ac62bce7698dd2b"
  },
  {
    "url": "js/index.html",
    "revision": "19c455db12871665131c2a0fe19aa618"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "c617f97eddbca9f5e8225b1470579f89"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "4ada2acec5ac217cc8e07937617c0ea4"
  },
  {
    "url": "midway/index.html",
    "revision": "820d20a843a159672d1bb0585c22d070"
  },
  {
    "url": "notes/brew.html",
    "revision": "2bfade37abd631614671835b5576d477"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "dd5707201b477a5078eeb22b257c9e3a"
  },
  {
    "url": "notes/git.html",
    "revision": "b23e157cbdda4fd1e1beb29104bb6c9e"
  },
  {
    "url": "notes/index.html",
    "revision": "93334eb2371b14f9f64498b405504d9c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "05e8a78ffa3c9bb12959a3f2043bbd06"
  },
  {
    "url": "notes/node.html",
    "revision": "75482454aacda9bd5b97ec90d9f4855e"
  },
  {
    "url": "notes/npm.html",
    "revision": "6260c4937095abaedb304b80abc64bb3"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "1df18a314d8ac2e75edfd3cf6affe2a6"
  },
  {
    "url": "notes/vscode.html",
    "revision": "5cae5ab7499656776aec9cf09d24e991"
  },
  {
    "url": "plugin/index.html",
    "revision": "3512531e38b7cf9849d5adefea537a21"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "73333563bcf8f2707921f82167163fe4"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "425938538404191ada491a43c6d61963"
  },
  {
    "url": "tag/index.html",
    "revision": "4f99ea710fe443dce403f151c270077b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "3d4274cd5bae1c495388bb59c6586174"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "0590df3b1ecd886f0289190faffafca6"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "2b843b9f97a3ace8438b45457dec597f"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "f833b236d88dd862cf608ba441725d7b"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "a46201ed676af5e0739e160630298485"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "ffc555b36164bd9e65b751a27ae0e624"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "478fb406b9ff9b117e27beef90b6e753"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "617218dac867561ca948fd09bd33ab95"
  },
  {
    "url": "Vera/index.html",
    "revision": "98a9a59f035a51dda876928cc6e80e26"
  },
  {
    "url": "website/index.html",
    "revision": "a702b82f64e62422bf3cdeb8a542ad1c"
  },
  {
    "url": "website/package.html",
    "revision": "2cef990089e18c519c5668698bf571f3"
  },
  {
    "url": "website/rearend.html",
    "revision": "6e8c85f7227dc38ccfe3a59796025879"
  },
  {
    "url": "website/tools.html",
    "revision": "41d5c98cb784ae717fbd26f6e2edef5a"
  },
  {
    "url": "website/webclient.html",
    "revision": "03597d4c79bbb506334b179810e454b0"
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
