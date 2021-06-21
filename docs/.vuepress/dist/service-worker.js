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
    "revision": "c7d8fcd705933d4f12f291f4b0f149e8"
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
    "url": "assets/js/14.2b9a8490.js",
    "revision": "7fb2217609c5b05adf527b667ac16b09"
  },
  {
    "url": "assets/js/15.37f4e7ce.js",
    "revision": "218b7b604efb344f90effeeb3fa46759"
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
    "url": "assets/js/18.1e5f46e7.js",
    "revision": "26b8c9e89149181e2f89fd6644d6aa8b"
  },
  {
    "url": "assets/js/19.178387ea.js",
    "revision": "0d6fd491009c33941ec62bfa681e18c7"
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
    "url": "assets/js/22.afc333d7.js",
    "revision": "ba8d81892ad3cca45ad6f4b42e0f2857"
  },
  {
    "url": "assets/js/23.b8bc5ad1.js",
    "revision": "17161bbe2271f1a6391dfc58c91b6435"
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
    "url": "assets/js/27.993797ad.js",
    "revision": "8c8fbb7b29104fc2fe9e622bf250166a"
  },
  {
    "url": "assets/js/28.7e695a92.js",
    "revision": "3cd635fcae76f4a0842d298ea45604ef"
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
    "url": "assets/js/30.6e411b13.js",
    "revision": "294e0c96c7e8fea32a4a01b8d140623a"
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
    "url": "assets/js/33.f1f2b888.js",
    "revision": "2a97d3aeeecdda384bd3058157f27658"
  },
  {
    "url": "assets/js/34.fb4d12fe.js",
    "revision": "c7d5b05d02e92197fcb52f7862473e61"
  },
  {
    "url": "assets/js/35.26a6e2e3.js",
    "revision": "fc145c4d05c9ce56a5ac4702b4513dae"
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
    "url": "assets/js/6.79e579ec.js",
    "revision": "ac5c7db22d3eda2c3adb680ab94effce"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
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
    "url": "assets/js/app.79923b6a.js",
    "revision": "277db2678789b508a04ede836d5b8cb0"
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
    "revision": "3de3b4a99a4c29ebd62e2865d1dfb84d"
  },
  {
    "url": "category/index.html",
    "revision": "f8bdcf8e601e9a36e948805a69dce7f0"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "6d8de3f611c2a4c36c1ace8dc9fd3ea6"
  },
  {
    "url": "electron/index.html",
    "revision": "5c8e35eaa2cff5c5026a7cf3223b8754"
  },
  {
    "url": "extra/index.html",
    "revision": "d3503e49c0b9759e57595b4407997cd2"
  },
  {
    "url": "flutter/index.html",
    "revision": "66e7c7d4774b05cd1447f03e47a88adf"
  },
  {
    "url": "flutter/test.html",
    "revision": "c5745bbfadb654930fe3684ea9059090"
  },
  {
    "url": "guide/changelog.html",
    "revision": "dc96383bf4c39dbeb125a7839ecd6b2f"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "d83aced1b40bc2aa036022e5e8f67338"
  },
  {
    "url": "guide/faq.html",
    "revision": "fd5c05b9c00ca16ecb7291bad94388de"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0f7a5c092852d6f2770a060bc47400fd"
  },
  {
    "url": "guide/index.html",
    "revision": "0baf127299716f882dcf3aff1ef26e60"
  },
  {
    "url": "guide/palette.html",
    "revision": "7746386597fbb05b8f46dfcf82c3865b"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "f6986fda8339107d622044274917f293"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "0cd717b23343bed18077ade936531f51"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "aea98452dd7cd79cc71580337cd5d465"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "eb75dd551739b7d9218e506b5fd0bd03"
  },
  {
    "url": "index.html",
    "revision": "28db371f903506688ee6ee97bb6f033a"
  },
  {
    "url": "js/index.html",
    "revision": "8c6b094a7a84100daab8f5e8a1c0d124"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "667d96f37ffbddfe4910edbfa2e87018"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "caba3fbca07f709f714c8f5c5a81f01a"
  },
  {
    "url": "midway/index.html",
    "revision": "6daf74fcc6835aec4979614b8978a86c"
  },
  {
    "url": "notes/brew.html",
    "revision": "972dcb851d66a968e103487324946580"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "337df7b615f6b646f283df027b94e7c2"
  },
  {
    "url": "notes/git.html",
    "revision": "57bb754f51c16bc0d25ec549437807ee"
  },
  {
    "url": "notes/index.html",
    "revision": "890581bb48dbd12b3662edc872de35d9"
  },
  {
    "url": "notes/nginx.html",
    "revision": "990cef3ff2a49ad2e8e0f4b48543ff68"
  },
  {
    "url": "notes/node.html",
    "revision": "1350a105d8f8368c9b12ba62cffae68b"
  },
  {
    "url": "notes/npm.html",
    "revision": "ab1b7b0b8aebc78a2c19f63e618804c0"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "054ba6bb1d80531392e1ba6e82ccfa41"
  },
  {
    "url": "notes/vscode.html",
    "revision": "ea80cf7e7bb87416c87f542d367b8502"
  },
  {
    "url": "plugin/index.html",
    "revision": "ab9399a4242e71b7a1944d102557df09"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "efe3cb53fb072abfe35887a25dbae77a"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "39ff439c78dc2014a011de2c800046df"
  },
  {
    "url": "tag/index.html",
    "revision": "3b05f9bd917fef3a68145696289cf16a"
  },
  {
    "url": "uniapp/index.html",
    "revision": "a1cea3d055c7aa425407906cb4d76ff2"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "2c979772d65b156847c6e6db36d55691"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "a5de221a0dc5b486c836d4dbafd5aabd"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "07d694e7ea9d8be6947a9b7a82597041"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "a9d70fe64b379c33638f9fc61e4dcedb"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "0a16b791ac68c06f656b30260a200c91"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "f01f7955d17b4a23d2ed44119d4aa617"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "305e79cb9ad6604aac47281ebc207d88"
  },
  {
    "url": "Vera/index.html",
    "revision": "8147992bc647e74cc8c6f054ad73f4a9"
  },
  {
    "url": "website/index.html",
    "revision": "c8533800f6e484ac34422df793bd16d2"
  },
  {
    "url": "website/package.html",
    "revision": "a4b85fdb0fbefe39f643ebb5fe721438"
  },
  {
    "url": "website/rearend.html",
    "revision": "21ff4a07ac049a8a0ba67bf151aeecc6"
  },
  {
    "url": "website/tools.html",
    "revision": "f08269480c691861b24c7abf9b3bc91a"
  },
  {
    "url": "website/webclient.html",
    "revision": "392e1dfb9c07523d4fc0b2f7a5b83164"
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
