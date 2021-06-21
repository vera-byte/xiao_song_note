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
    "revision": "1596ebc02c05e911aa11272490fa7893"
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
    "url": "assets/js/12.27d58fc7.js",
    "revision": "d5a70f38d251ab91e9595be53a8b6292"
  },
  {
    "url": "assets/js/13.89715a6b.js",
    "revision": "216edc86cc1c3604132700e102b6a880"
  },
  {
    "url": "assets/js/14.14ead2cc.js",
    "revision": "6f456f3e523735777abe5f4ef7fbe712"
  },
  {
    "url": "assets/js/15.e946a905.js",
    "revision": "292394b0a6e5e2034cf87ecbff9970ee"
  },
  {
    "url": "assets/js/16.9d1e6ecd.js",
    "revision": "47ea104990ae2814f47090c9b9c7d4f6"
  },
  {
    "url": "assets/js/17.080a3714.js",
    "revision": "39214940d282f84a2cc3c1aa88e3bc1d"
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
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.b8a2f5de.js",
    "revision": "a1a2741a76864fb353cbf3c325859278"
  },
  {
    "url": "assets/js/26.a08d2523.js",
    "revision": "76d54042d611344339356367b43e6cc3"
  },
  {
    "url": "assets/js/27.993797ad.js",
    "revision": "8c8fbb7b29104fc2fe9e622bf250166a"
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
    "url": "assets/js/30.ed026072.js",
    "revision": "e1fc563fdb5830b198fde4161860283e"
  },
  {
    "url": "assets/js/31.c83abf8b.js",
    "revision": "067a8cb1c9cce20467b7b5bc3138cdba"
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
    "url": "assets/js/35.d0e088ee.js",
    "revision": "b279abaa4d1933b2134e386bcfabbc52"
  },
  {
    "url": "assets/js/36.a1ebac5d.js",
    "revision": "5b6650cc4f313c72f7bf5fc534d1bd82"
  },
  {
    "url": "assets/js/37.9d975bc6.js",
    "revision": "0749aaa3c753493192ae59afb72f5d71"
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
    "url": "assets/js/40.abf6d8c1.js",
    "revision": "9673e0bf29430bccfb94141ea17440e3"
  },
  {
    "url": "assets/js/41.79be7b61.js",
    "revision": "9bb7ad21cda915aa75e20407058c993b"
  },
  {
    "url": "assets/js/42.7ecc15d6.js",
    "revision": "7ad99c075807f8bbce3e8f5b6f272574"
  },
  {
    "url": "assets/js/43.db4a7846.js",
    "revision": "9d7743a2a0f94dccf92864053c888003"
  },
  {
    "url": "assets/js/44.353a3585.js",
    "revision": "e92d342142f4dad54a64e69e898666fb"
  },
  {
    "url": "assets/js/45.9d6d5b63.js",
    "revision": "c7cef1ab7134f9d62ea178d2c5e33a16"
  },
  {
    "url": "assets/js/46.c1658a9b.js",
    "revision": "51561a24910b2fb14f2b00b8f7e31184"
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
    "url": "assets/js/6.d1426df9.js",
    "revision": "fe297d9414254180acfe8f7c92916d40"
  },
  {
    "url": "assets/js/7.9caa1433.js",
    "revision": "f944aa0f4b00f76e6a60aaaa5ffeb468"
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
    "url": "assets/js/app.d492bfaa.js",
    "revision": "509462e67631522ab944c953b7e4b316"
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
    "revision": "f9465582c13855d3e85bfa4bf9734733"
  },
  {
    "url": "category/index.html",
    "revision": "d6955ee93b992584b5a486369a09dddd"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "a258b134750121123f10a1f321ed3764"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "a103d86cfef4db039fea93acff8f4fee"
  },
  {
    "url": "electron/index.html",
    "revision": "be4d968ff95ef5824190004914fb64dd"
  },
  {
    "url": "extra/index.html",
    "revision": "8073bfaf889f56d9d23cb989412e8e26"
  },
  {
    "url": "flutter/index.html",
    "revision": "981dbd412f0188c9f62b88c8114a3f43"
  },
  {
    "url": "flutter/test.html",
    "revision": "d73b6f3d6cb1962700a84478b32e8f72"
  },
  {
    "url": "guide/changelog.html",
    "revision": "06de88fdae1027e05b6a4a3aa1d32f15"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "db0f6b80c1fff82736af7bef8b7a5a19"
  },
  {
    "url": "guide/faq.html",
    "revision": "66261f367c798567e05c4b098a624d85"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7bc4b0073d147138b9c80470348dd7f1"
  },
  {
    "url": "guide/index.html",
    "revision": "057ffd895e4eb0ddc7bc3f1c58e67fb2"
  },
  {
    "url": "guide/palette.html",
    "revision": "941cf3495e6a41b5b9ddfb5c7c545e96"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "e058b8fd58a461bd18a2cca2a9110568"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "14daf9d3afcbf79adb6f4b07fc93039b"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "719e7a53e459eef71b6cf4d7e2f210ce"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "8ce37805f3256c0a55fbc3d428a326c3"
  },
  {
    "url": "index.html",
    "revision": "ad214521036d3849ff8d4ac80c4914c5"
  },
  {
    "url": "js/index.html",
    "revision": "d7cca52f809f295b66ffcb5b8108d134"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "9af8e8649d24fc38cb95e0bf533bde7c"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "02ed4b8972dcafe09a5aeb4c9773f31a"
  },
  {
    "url": "midway/index.html",
    "revision": "876eea7dcc6df87ebb1093ca5f6bbcbc"
  },
  {
    "url": "notes/brew.html",
    "revision": "fb4fdfd0f454a7f579bf9e7ac771d0d2"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "6f48c2eec8af141a0cac630440453a72"
  },
  {
    "url": "notes/git.html",
    "revision": "2bc60d3dea8f785ab1b28d83e6ccc418"
  },
  {
    "url": "notes/index.html",
    "revision": "8ca9b5cb78ef13c6ec460224f191646f"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a1c0d029a2254b5fee68959f61f4662b"
  },
  {
    "url": "notes/node.html",
    "revision": "42712700392c7c4a573daea46c782fc9"
  },
  {
    "url": "notes/npm.html",
    "revision": "6528c3d2897e7e819110eb4fea67ae90"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "10db42fe45af124c69b3055de5f7e7e7"
  },
  {
    "url": "notes/vscode.html",
    "revision": "d6d224262129aef9e1f0a659dfdc99fb"
  },
  {
    "url": "plugin/index.html",
    "revision": "b45377deedd1a14e8e163d1bdb6c0cd9"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "71742cc4a6d5cd68fb3fb47cda910af8"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "35212a63f2e4adbacdd0bbd4107ec5d8"
  },
  {
    "url": "tag/index.html",
    "revision": "b985d1eb9761660517f9f2501c77e23a"
  },
  {
    "url": "uniapp/index.html",
    "revision": "fabc9a194e50bac8f15d544a84cde442"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "e104b6485a326ec72b77a501c6a71dfa"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "05697f4b983c024fc852db471b3aaf8a"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "fef4836064d2e67d86457c1a33111f77"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "520ebeb7a001b89ad7c783c2b4270ebf"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "9b29e9a6f0069be4c027efb0309ca002"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "2efc77acdff73f7efdc1ea34e6f23125"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "742ddd786d551977480d47f4819daefc"
  },
  {
    "url": "Vera/index.html",
    "revision": "34023cf7ac7be02fdbcdb809e5edb2e8"
  },
  {
    "url": "website/index.html",
    "revision": "257a789f9ab1b9a4f400c52c89f5a105"
  },
  {
    "url": "website/package.html",
    "revision": "35ba952ee8f601030d1c81ebfab007af"
  },
  {
    "url": "website/rearend.html",
    "revision": "03ba9a033eec76a548b65d6f5c5eab69"
  },
  {
    "url": "website/tools.html",
    "revision": "256500903b04519560cebec5fcc8d028"
  },
  {
    "url": "website/webclient.html",
    "revision": "aa7eb6b0898506bfcff42b7fb379aa54"
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
