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
    "revision": "8bf2c453d2ad169d5821d3026f48b882"
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
    "url": "assets/js/20.d87e57eb.js",
    "revision": "669558434d11ef16d2abb9e21b3ee30f"
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
    "url": "assets/js/23.fe2c88f9.js",
    "revision": "35c9422859c03f2ef41c4090366b748d"
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
    "url": "assets/js/26.a08d2523.js",
    "revision": "76d54042d611344339356367b43e6cc3"
  },
  {
    "url": "assets/js/27.e105bee0.js",
    "revision": "d82940293c1420b1f18e96496ac23f91"
  },
  {
    "url": "assets/js/28.6b6d03ca.js",
    "revision": "2a1501303a1f10fb5ea2df4861d465cc"
  },
  {
    "url": "assets/js/29.49450623.js",
    "revision": "8b0fe858a70eca6059af9bd414099331"
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
    "url": "assets/js/33.4a4df23b.js",
    "revision": "f20a4023d01d3285a49a6b1b29d53e44"
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
    "url": "assets/js/41.81584133.js",
    "revision": "de14b311932be8d34079ac7ad5e47558"
  },
  {
    "url": "assets/js/42.7ecc15d6.js",
    "revision": "7ad99c075807f8bbce3e8f5b6f272574"
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
    "url": "assets/js/6.81b56341.js",
    "revision": "c349e4d7e6f6d0f4c8e58f3ffbf1317e"
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
    "url": "assets/js/app.273455d7.js",
    "revision": "1b3dc047238d51a17e13991079538ef5"
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
    "revision": "7d27f6c0c923b23a56daa591a766fd28"
  },
  {
    "url": "category/index.html",
    "revision": "8939eb7c0701dcbd41d7a57e95d2233e"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "9f8bdf9e3542c7f84b2cb2fc72c54118"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "48c3f34e1ee42fcc30e09644aaf55878"
  },
  {
    "url": "electron/index.html",
    "revision": "8ff4414fa3b93be2601fc8af063e4378"
  },
  {
    "url": "extra/index.html",
    "revision": "51ddb4933d70daef3f60218a726a96c5"
  },
  {
    "url": "flutter/index.html",
    "revision": "ac599acfa5dbd38b6784fc69b74e8a13"
  },
  {
    "url": "flutter/test.html",
    "revision": "470a61c71577c1ab5d0efa24a50109ee"
  },
  {
    "url": "guide/changelog.html",
    "revision": "9da00f55a71801bcf77ad3afa78968eb"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "e19aac6288e002fbeacd5b3c4654ba4c"
  },
  {
    "url": "guide/faq.html",
    "revision": "e3d4136d51236ffea7651ad46f9afadd"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "2a48f1d884b4f559a3140f579305bc6c"
  },
  {
    "url": "guide/index.html",
    "revision": "4fa412f2aef8352f866059f679fa9273"
  },
  {
    "url": "guide/palette.html",
    "revision": "eeebe83cbd523dfb0e5ac63f93d01e6d"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "8401ff73da45704ab3fef8174dedf5c0"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "a8fb6493d7846848c3d2922237947ccb"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "232340b1f098fe3e3e693fbb4b839988"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "07f517c764ea2156878b3d37b9b3093a"
  },
  {
    "url": "index.html",
    "revision": "17fb7d41be3e6b67948facb98a200a36"
  },
  {
    "url": "js/index.html",
    "revision": "6d71e0ca6c6616faaa70928e50c02fdd"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "69ac0a29150052c0af5203b2b15b985f"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "a72b0ebf6dcafb05fa489571790b7fb3"
  },
  {
    "url": "midway/index.html",
    "revision": "fc03c1a39bfdf409de75e1903e755f1c"
  },
  {
    "url": "notes/brew.html",
    "revision": "69e3fe1c91241d907d28b7363c880061"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "100bb2ff1d0fdb91e65ee55bd7642ab1"
  },
  {
    "url": "notes/git.html",
    "revision": "f78b1cc770bfaaaebc4b305909303306"
  },
  {
    "url": "notes/index.html",
    "revision": "9580489794ee90ae727e48562087ef26"
  },
  {
    "url": "notes/nginx.html",
    "revision": "2bf4ad022b2c9fa06978bc633c0604df"
  },
  {
    "url": "notes/node.html",
    "revision": "6fd479b2ee356c455a7ae8e7c6635d74"
  },
  {
    "url": "notes/npm.html",
    "revision": "a3efdb077ff3911aef5e5a8de8ccab92"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "4d7ebae30b87da2bda722c6eb6f525dc"
  },
  {
    "url": "notes/vscode.html",
    "revision": "a5478607a8029421a3d9466db126b295"
  },
  {
    "url": "plugin/index.html",
    "revision": "0ba0736bad32544feceda5d9d6e90465"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "c3a27241432ca0e1a08cdae276660b0b"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "f3898c9e0bf3d724ad3332f990ef55b1"
  },
  {
    "url": "tag/index.html",
    "revision": "a16e48c71c3507ae7264476a1f4d1a08"
  },
  {
    "url": "uniapp/index.html",
    "revision": "39ed8bea6e99f8f00d7b205470fca206"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "5232a58642be9ff2e06215109182794f"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "80eaa5d594aa9c88a7bee3cb7b6188e0"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "f62f14102cdaf484985c00ed1c16b922"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "d11ecbc6aac352bdcbdfbfd5db485aed"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "1b509ea19a3026472402e4b157ef45fa"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "f3f1f1cce34ab26165387a3fb70c6fd7"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "e2f43d740bcace69ea4cceb98e94e198"
  },
  {
    "url": "Vera/index.html",
    "revision": "59f665401b7576ded99c3eeaf440bccd"
  },
  {
    "url": "website/index.html",
    "revision": "c6803fa3bfb3d9a85e90d85f3925eada"
  },
  {
    "url": "website/package.html",
    "revision": "6320a78e61e155871e2099176ede17e1"
  },
  {
    "url": "website/rearend.html",
    "revision": "b4fcd2830cfb8dd870cd886dffdfd414"
  },
  {
    "url": "website/tools.html",
    "revision": "6858e25fd9246b1bb40c06aaa72f4bcb"
  },
  {
    "url": "website/webclient.html",
    "revision": "e68b1f55aebfec0ff1a755ccfe02599d"
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
