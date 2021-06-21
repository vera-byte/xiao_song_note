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
    "revision": "7adfe5226261cf6bbe23e201fad04e2b"
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
    "url": "assets/js/14.9fb783a9.js",
    "revision": "2a4df1eca2de4fdac1252a5e54a6797b"
  },
  {
    "url": "assets/js/15.37f4e7ce.js",
    "revision": "218b7b604efb344f90effeeb3fa46759"
  },
  {
    "url": "assets/js/16.9d1e6ecd.js",
    "revision": "47ea104990ae2814f47090c9b9c7d4f6"
  },
  {
    "url": "assets/js/17.d9b922dd.js",
    "revision": "4df5cda44861bde83bf50457a6250c8f"
  },
  {
    "url": "assets/js/18.83f31237.js",
    "revision": "a1546bc0c20a3326c6a45254355d9677"
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
    "url": "assets/js/20.7547816e.js",
    "revision": "4b2f3b6a2184955c80befed1e1fc7fb6"
  },
  {
    "url": "assets/js/21.768f0488.js",
    "revision": "da62b8e2cf6b13d91de3092d159c3f03"
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
    "url": "assets/js/29.46a88a64.js",
    "revision": "9e39cb5759046f65420363502f2f6463"
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
    "url": "assets/js/32.857cfc6e.js",
    "revision": "f17838e6b4117f995b748d443e6293b7"
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
    "url": "assets/js/6.4c4f7022.js",
    "revision": "e550e4c82cbf39cb0e606d09d68df538"
  },
  {
    "url": "assets/js/7.19cab9a4.js",
    "revision": "7c466c772b3ed5e39f0f81cf2cb86cdc"
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
    "url": "assets/js/app.ea307f93.js",
    "revision": "7f9e4698df6883d8d3f575869a5a710b"
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
    "revision": "d7072ab829bf9f495aceeef3187dc826"
  },
  {
    "url": "category/index.html",
    "revision": "8d80a593f143d55d88281fca39f27a23"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "94103c2b22322c1110c4737a55c6bbc3"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "f43b58bb03ae65d3bcda1358d6cea3c2"
  },
  {
    "url": "electron/index.html",
    "revision": "aedbde7ba88f71caec37b80ea916684a"
  },
  {
    "url": "extra/index.html",
    "revision": "ceb0c328854768f15f27dde5f56eea98"
  },
  {
    "url": "flutter/index.html",
    "revision": "37208dc6aecf2baa2d509aa199eaa698"
  },
  {
    "url": "flutter/test.html",
    "revision": "6b549d206ea072138819057d28539c5e"
  },
  {
    "url": "guide/changelog.html",
    "revision": "ea6b273f38e4aa0e7ca1842a000f9d3e"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "94aa9ad3bc26bed852da9b43b49ddfe0"
  },
  {
    "url": "guide/faq.html",
    "revision": "487240894357508fd3d9bce8c6c653da"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "686127d3f5c232f552a744801e464730"
  },
  {
    "url": "guide/index.html",
    "revision": "fb553017851b65f9a58fea08a56d48e5"
  },
  {
    "url": "guide/palette.html",
    "revision": "fb7456f519cce4f58bef0fca29e07047"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "930ecd621394cba171d45b42173b57b2"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "d0211b4c36bdd6c5977c58f584824562"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "02969105392498d8874b2f2c1c9567e1"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "f2f9d507427cc84dfa19eed85f273d71"
  },
  {
    "url": "index.html",
    "revision": "7a2b8e3347ebbbae4f235c9e61a10913"
  },
  {
    "url": "js/index.html",
    "revision": "cdb605e0d8b924b218b2d917c57f0d9f"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "18fc6cc823f460747c92f4986ed5985c"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "a33d19ef1f074645d5a3b32404613dbc"
  },
  {
    "url": "midway/index.html",
    "revision": "cc389a6d40c40bad5731ed2e173719c3"
  },
  {
    "url": "notes/brew.html",
    "revision": "b2097d585ee7b5398a1aee0eb91e6279"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "02d0eeffc35308d99db72de736662936"
  },
  {
    "url": "notes/git.html",
    "revision": "4c4ebccc2c5e7941d77be2c972d68a09"
  },
  {
    "url": "notes/index.html",
    "revision": "39c44cb917ab0da9a9f780a22475f39c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "11dc994ea0309f80a0a41c18b6f234ec"
  },
  {
    "url": "notes/node.html",
    "revision": "64ce25341d12d0d7bf6f936fca703fa2"
  },
  {
    "url": "notes/npm.html",
    "revision": "273936f9a8da09c74c5d9c621fdcc0bb"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "ebfc5073cd2886a66c3e5c6f061e0391"
  },
  {
    "url": "notes/vscode.html",
    "revision": "42546812a7f7ae905ca004b0f690c379"
  },
  {
    "url": "plugin/index.html",
    "revision": "50c56d643c02ec126b2546cc6d80f43a"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "09116020a1b8deb22d38a1f62aeada5a"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "2895bf3bcd80c26a3df7f557e0b71643"
  },
  {
    "url": "tag/index.html",
    "revision": "0c6fb70b9524b771b9b87ddabc825a22"
  },
  {
    "url": "uniapp/index.html",
    "revision": "58f68b221b3e25b491db5825fc67c872"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "7520257030c4e8203013dfb5c3a27895"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "a3744f6182d24b6d0c6066fa30caa6ac"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "33157d52703359fa815b64550c794bc1"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "13987305b5a8ab67c911635631b5fc75"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "9bfd53f4e2fdc46c2367932a6b92f4d0"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "362b292838955447de294853a3dca02c"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "f906fa2ccd42f8eccc185ab1f2bb28a4"
  },
  {
    "url": "Vera/index.html",
    "revision": "6a6f1711a0cb1d42405b119dc5aef167"
  },
  {
    "url": "website/index.html",
    "revision": "a487329bf0582cad4175fbdb88c53d41"
  },
  {
    "url": "website/package.html",
    "revision": "232e7d06def2175e70460f689859e59c"
  },
  {
    "url": "website/rearend.html",
    "revision": "535d6d4d24a756615db4d698c1174b99"
  },
  {
    "url": "website/tools.html",
    "revision": "87076b28276aca9f0ab2fa5221a894af"
  },
  {
    "url": "website/webclient.html",
    "revision": "8f8c3c71528f65bc262f93cd15b1cb9c"
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
