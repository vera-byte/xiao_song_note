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
    "revision": "77326d1dc6b457f526dc26d18c2de53a"
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
    "url": "assets/js/20.b67b1321.js",
    "revision": "3a18e6336fc4ddf30f0becae7d3771ed"
  },
  {
    "url": "assets/js/21.b3ee3eb5.js",
    "revision": "52182752b46e904f6134061a056854b3"
  },
  {
    "url": "assets/js/22.039fb583.js",
    "revision": "7e526cd96930de3b6d6cedd4d1d87664"
  },
  {
    "url": "assets/js/23.b8bc5ad1.js",
    "revision": "17161bbe2271f1a6391dfc58c91b6435"
  },
  {
    "url": "assets/js/24.8441aad7.js",
    "revision": "f8198bf2bc1d80247992f75c6c71ed8f"
  },
  {
    "url": "assets/js/25.9bd6b62f.js",
    "revision": "c501bbef3d61908cfce03cdeac17a540"
  },
  {
    "url": "assets/js/26.1a4628e3.js",
    "revision": "24ccd9c607b1e9244b915c3b08e6c30a"
  },
  {
    "url": "assets/js/27.879a590d.js",
    "revision": "8ac577212f874d2891e5a5bd18862bbb"
  },
  {
    "url": "assets/js/28.a3c0ac05.js",
    "revision": "0cf2fe2da08cd08ceb806475ea59b7b7"
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
    "url": "assets/js/30.21b711d8.js",
    "revision": "89b7b83450487f93ea13e01a2d2f1175"
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
    "url": "assets/js/34.4170b673.js",
    "revision": "00dca8ed4e37c2d28863253b3316eff5"
  },
  {
    "url": "assets/js/35.26a6e2e3.js",
    "revision": "fc145c4d05c9ce56a5ac4702b4513dae"
  },
  {
    "url": "assets/js/36.98e5998b.js",
    "revision": "6f9d1d551dfb881d7d0ee29b652ade0d"
  },
  {
    "url": "assets/js/37.d7932913.js",
    "revision": "8188acfe8ef550d8b464bfcbdde8e415"
  },
  {
    "url": "assets/js/38.abe4bcb0.js",
    "revision": "7237186936ec40226ff1858876b85f21"
  },
  {
    "url": "assets/js/39.9cf94957.js",
    "revision": "82aa0222f7175eaab3fd069bd310620c"
  },
  {
    "url": "assets/js/4.fa6ed8fd.js",
    "revision": "ed64aadac9c4bff81317b5f923b2083a"
  },
  {
    "url": "assets/js/40.8a8ffdb7.js",
    "revision": "00de4b2e2db54bd12b5f505d9a230456"
  },
  {
    "url": "assets/js/41.81584133.js",
    "revision": "de14b311932be8d34079ac7ad5e47558"
  },
  {
    "url": "assets/js/42.6acee073.js",
    "revision": "db67c2a6a09d5c5ddeb495fba0f1d6e1"
  },
  {
    "url": "assets/js/43.0783d6b7.js",
    "revision": "cb7167c0417ba041e59528f9b06bc0bf"
  },
  {
    "url": "assets/js/44.96648ffc.js",
    "revision": "5b64f51567c061dc61586ac64ac99f9a"
  },
  {
    "url": "assets/js/45.750a6555.js",
    "revision": "53bd1fefb047fe8f9de3de7d1ddbbab9"
  },
  {
    "url": "assets/js/46.c1658a9b.js",
    "revision": "51561a24910b2fb14f2b00b8f7e31184"
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
    "url": "assets/js/6.bc370dde.js",
    "revision": "fd999f3bb54cf53c05ca0c2707f7b81d"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
  },
  {
    "url": "assets/js/8.822cea0f.js",
    "revision": "e7c4e5c0bba7531f8c2ea79b5b4ab01f"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.707d9cbb.js",
    "revision": "8f5b184d9a34bfdfffd7c3c8446b23ec"
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
    "revision": "9c573fcf23a7ecae309fd7e3d22516b7"
  },
  {
    "url": "category/index.html",
    "revision": "67860fdfadf375186fd2ed9322f0911c"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "42712f45f7000e4b089db876ffc60bb7"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "72792d3e3ca4f6c79dda4c215f68d4d2"
  },
  {
    "url": "electron/index.html",
    "revision": "750cff6705b4d5686236cf0dd22483a2"
  },
  {
    "url": "extra/index.html",
    "revision": "b0bcabf85684343a574236647eb6672d"
  },
  {
    "url": "flutter/index.html",
    "revision": "0d870514d7f98f6b88f77f3d154a5391"
  },
  {
    "url": "flutter/test.html",
    "revision": "0942f22d6048ece4dc96d8ba68d64137"
  },
  {
    "url": "guide/changelog.html",
    "revision": "6c9aff39842f28245122c219dc0b3376"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "6ce411ff10ae2c0ff64b4e9b569c7afd"
  },
  {
    "url": "guide/faq.html",
    "revision": "5e9465ef32d4bd0daee8469c06a93eee"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1fcda82a9fb47bc11585f22377a61c14"
  },
  {
    "url": "guide/index.html",
    "revision": "aecab0d0489a6cd662c20ebb47dd63b5"
  },
  {
    "url": "guide/palette.html",
    "revision": "dec01a2ffb057787e40ecde379528a15"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "eb5e7abde53c3836d04f455ae37861e7"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "53df7eb99c29d0fa1658112b9b255e19"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "ed56bb937cc93822c365a0e9b4057542"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "5de9e994f1485ddfbd6c1b43f28ba013"
  },
  {
    "url": "index.html",
    "revision": "37a7183df4666b408dcc401eee76955f"
  },
  {
    "url": "js/index.html",
    "revision": "6de1a3b5c50065d92c2682522b440f4a"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "80ef9a9f01716cbc6605680fc0f2469e"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "7a889e38cb9bd72291e723a480814110"
  },
  {
    "url": "midway/index.html",
    "revision": "c48a7680127827295fd7fb92f83bdcef"
  },
  {
    "url": "notes/brew.html",
    "revision": "43d16fe7ea97069665da03ede3b4494f"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "d0029975ec0c8f84b3406c037010bbc2"
  },
  {
    "url": "notes/git.html",
    "revision": "74ce0cb177e4e2ef699f3d09efb6c2d1"
  },
  {
    "url": "notes/index.html",
    "revision": "ad5510eba13c7f4a19b2e18e39acf825"
  },
  {
    "url": "notes/nginx.html",
    "revision": "0643d14a2a4f93aed3d6be886f401b3d"
  },
  {
    "url": "notes/node.html",
    "revision": "4e8ac7d54cef23f511c6bd390cab7762"
  },
  {
    "url": "notes/npm.html",
    "revision": "f6c2896b604c2d5de953d7a30042ba36"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "6842b35f22440b8a1d24f30fdfa7122d"
  },
  {
    "url": "notes/vscode.html",
    "revision": "f9d9d5af853c0d924ce6030f06525545"
  },
  {
    "url": "plugin/index.html",
    "revision": "86c8bd195d84b5fbec0faa91052665d0"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "93fbcae40fa7509c7c5bc60a3a326815"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "acd9fe17e2cb8df2adb756e479144836"
  },
  {
    "url": "tag/index.html",
    "revision": "89b2b922d37fa2997fa0c577a8014f95"
  },
  {
    "url": "uniapp/index.html",
    "revision": "bffd5f93bfd9abc3d4c3733f9204933f"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "33df71c776fc0fa8c8bdfcc60cdf8146"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "b287c723d0407ddac11d248535da371a"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "af1c40ab12e80c5fb7926876ece51c5f"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "e436945df02b5469bb2c7dc4f1486d51"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "de87d6099af1f1523e92e3b112d8d5b7"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "c11af22e1318ce044418d72d9259efd2"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "95b0047db21c4eb183f926e862596547"
  },
  {
    "url": "Vera/index.html",
    "revision": "a95545b56df1e2fb087d3a585dc8855c"
  },
  {
    "url": "website/index.html",
    "revision": "2b411596d068ddd1b1acf48adace0591"
  },
  {
    "url": "website/package.html",
    "revision": "0e9b466d8922e4c16599651c90ffc7d6"
  },
  {
    "url": "website/rearend.html",
    "revision": "c1e2fc2c0b5ecd20b365fa86a8c385e9"
  },
  {
    "url": "website/tools.html",
    "revision": "356f82342218371ebb590e99907bdcb0"
  },
  {
    "url": "website/webclient.html",
    "revision": "bc3ce2f95106d8a49bb8f3618a04f118"
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
