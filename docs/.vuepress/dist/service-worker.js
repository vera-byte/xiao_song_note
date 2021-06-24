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
    "revision": "90efa70988547a659c8c98559880c776"
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
    "url": "assets/js/14.9c6ab598.js",
    "revision": "bc8222297e1b55166956ec0ec7616647"
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
    "url": "assets/js/23.b8bc5ad1.js",
    "revision": "17161bbe2271f1a6391dfc58c91b6435"
  },
  {
    "url": "assets/js/24.a744d836.js",
    "revision": "f19f38e8dd387f29c2419267c6756c3a"
  },
  {
    "url": "assets/js/25.b62160d0.js",
    "revision": "d39c48ce6077ae2af2c72f9aa541df1f"
  },
  {
    "url": "assets/js/26.4039aa9c.js",
    "revision": "e75fd855ab036adba194404273320e7e"
  },
  {
    "url": "assets/js/27.e08fe835.js",
    "revision": "6c8b1305ad3201826e80b815bfb1ea34"
  },
  {
    "url": "assets/js/28.3f1cd242.js",
    "revision": "bce52fc0c199ce75271f10fc9c3f4d16"
  },
  {
    "url": "assets/js/29.3e28d2dd.js",
    "revision": "1aaf510d0378399b4e455588305c9769"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.606f06b2.js",
    "revision": "7cc306a677e412e8e2fc413fceae9dce"
  },
  {
    "url": "assets/js/31.7184f202.js",
    "revision": "fdf7b1f2389696ea24d95fd00dd8efe8"
  },
  {
    "url": "assets/js/32.33673bea.js",
    "revision": "d487e7f62507908a7463eef39ef871bb"
  },
  {
    "url": "assets/js/33.aba0239e.js",
    "revision": "47f2613e3beafc8de3275adac4187750"
  },
  {
    "url": "assets/js/34.08f8d322.js",
    "revision": "43391fd3ceeaeb668be2d252e67dbfed"
  },
  {
    "url": "assets/js/35.31fe1265.js",
    "revision": "ea0f6e27c4d428981039dea49af1f8f6"
  },
  {
    "url": "assets/js/36.bf4840f4.js",
    "revision": "155ae800508790d58fe4085f7f00d5c6"
  },
  {
    "url": "assets/js/37.36890e8a.js",
    "revision": "0c71ede7ba4e3cd40cade9e7ef454e64"
  },
  {
    "url": "assets/js/38.2103f248.js",
    "revision": "4a46cd9561288f362d4824361fff7f89"
  },
  {
    "url": "assets/js/39.f4079444.js",
    "revision": "d340b0914e7eea72b16332de8fde2f87"
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
    "url": "assets/js/41.3e62fe90.js",
    "revision": "ae3c43de5aec2d57da04f0398f623468"
  },
  {
    "url": "assets/js/42.4b428888.js",
    "revision": "5a3779d6cbd036552dda4027bc4aa813"
  },
  {
    "url": "assets/js/43.10edf05c.js",
    "revision": "2140a65224dc48d1e3edcd3e8a6734c5"
  },
  {
    "url": "assets/js/44.3b35bd04.js",
    "revision": "5459bd49e923e2f2d0eeff46b15eb00e"
  },
  {
    "url": "assets/js/45.030cee93.js",
    "revision": "9de9416699a2d8393b93e479420237ef"
  },
  {
    "url": "assets/js/46.ef4d4b0f.js",
    "revision": "925f1c59cf41a0647c6a7f992b96ccf1"
  },
  {
    "url": "assets/js/47.25daa5c1.js",
    "revision": "6fac092352dc9ef6a3f41a44c688d573"
  },
  {
    "url": "assets/js/48.0c32db97.js",
    "revision": "9d6ccde43513503ff98d443e5d4b556f"
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
    "url": "assets/js/6.cbb3a022.js",
    "revision": "04d3bf79895066d9ad3de3309001c9c8"
  },
  {
    "url": "assets/js/7.19cab9a4.js",
    "revision": "7c466c772b3ed5e39f0f81cf2cb86cdc"
  },
  {
    "url": "assets/js/8.7cb45502.js",
    "revision": "7670c607252f3cdc4cce9b51b67fb19e"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.e247f46c.js",
    "revision": "96939e2be0ca806ba556f48f4542be09"
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
    "revision": "42dab757cf02ef2bd7d3426af439685d"
  },
  {
    "url": "category/index.html",
    "revision": "0e05f9d97d84d15350c2f365616a06d0"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "96e3eafd0c6a14aae86273babe2c0236"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "7ed29d6a1c83db6ab96867df225f9bfa"
  },
  {
    "url": "electron/index.html",
    "revision": "e492f0cbb5dd14f7e796b2d17b4af238"
  },
  {
    "url": "extra/index.html",
    "revision": "18359f07f4d7c34182575f5be11da7f5"
  },
  {
    "url": "flutter/index.html",
    "revision": "ede5b5550547614acac4826589eec7ed"
  },
  {
    "url": "flutter/test.html",
    "revision": "2f062b31f58af2464e59dfd9f425c534"
  },
  {
    "url": "guide/changelog.html",
    "revision": "73ee6f48c5f415e146bb1441a5e02481"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "5b0a3df223131b78e5799b10884dc81f"
  },
  {
    "url": "guide/faq.html",
    "revision": "3e6c7be1d6ca12b2a092213f844c54ba"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0553ad6e9ed049a537bcfadc128364d6"
  },
  {
    "url": "guide/index.html",
    "revision": "75166aaea2c27e9e6533042e5601a6a8"
  },
  {
    "url": "guide/palette.html",
    "revision": "d3ffec7dc4fa7eafaccb77b1610593fb"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "20e595ecc5a11253c228c56c8ca34e81"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "11f5a99912b379d6ebfe1f1aa7be6bd4"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "63c30a597e75ebab8823ec873e2d6633"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "c31eaa5792c1f080cb506e698ab00fdd"
  },
  {
    "url": "index.html",
    "revision": "6692dcc4c2c04819aa31e66ceacc5965"
  },
  {
    "url": "js/index.html",
    "revision": "655e9beb2b1d935376fe6eaa0459dca3"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "b13229b36e06c27d6b37434ba255c171"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "2c113f0005a57cfbed269fd6da780a88"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "999eb323ff817484eaad20dbf1bb0065"
  },
  {
    "url": "midway/index.html",
    "revision": "2882f84c8da28c9dc23c8857d3e9a97f"
  },
  {
    "url": "notes/brew.html",
    "revision": "f07f33712f6d0d2809c65c214d1a8fa1"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "9ae62ba6c1841eb5c10f1117d4a9995d"
  },
  {
    "url": "notes/git.html",
    "revision": "bafdb2c91d93a670ab09494c82ed7d4c"
  },
  {
    "url": "notes/index.html",
    "revision": "951036439e73d7ca83121cb096df6268"
  },
  {
    "url": "notes/nginx.html",
    "revision": "669a198aa3c55e5115dfb990ddd81581"
  },
  {
    "url": "notes/node.html",
    "revision": "1315d657bb55f5b784e2b15b06bd1633"
  },
  {
    "url": "notes/npm.html",
    "revision": "b00ba3990d1f277475ab126b6b919ac2"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "f3c9e90851c388a6460645eb3252be26"
  },
  {
    "url": "notes/vscode.html",
    "revision": "ad3f39705a5c7e5f0ad38b7220dde5ea"
  },
  {
    "url": "plugin/index.html",
    "revision": "173e8f7b5daf399a4f154f3bc5a1060b"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "5168162cf24f290e76262b0abf7cb93e"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "3ef9fb20eefd4c05ddea3b82d259fd66"
  },
  {
    "url": "tag/index.html",
    "revision": "890bcf8e499e8f874d048b68c7ee7808"
  },
  {
    "url": "uniapp/index.html",
    "revision": "a32af5ee0f300df0746a64ce9da1f33d"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "c3f380813b8a781299bb19ca016bc271"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "f46514820433a32a639a434972746271"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "696bddfa4b0e7d1151f8e0e64fc366a7"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "b41f5a20d058d812d60c8330ca865c91"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "dd56cd2c9334462ab0b2111e39753f7b"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "4e945fdfd94cb04dd58536071ac129fe"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "56a583d1f5bf684b76468a0726984e18"
  },
  {
    "url": "Vera/index.html",
    "revision": "e197275e28c5b702590d4b8ed7cd9339"
  },
  {
    "url": "website/index.html",
    "revision": "69d2611eea194a0c2480dbf95ad10ae3"
  },
  {
    "url": "website/package.html",
    "revision": "cda258cf45a09ce22ca6fafb778a744c"
  },
  {
    "url": "website/rearend.html",
    "revision": "027793ceccb9c8179e2a62dc5ccf91a2"
  },
  {
    "url": "website/tools.html",
    "revision": "1d121ebcf9d7c0b719d085271657cebd"
  },
  {
    "url": "website/webclient.html",
    "revision": "f3242ef41aed06adc708c7ae0957e45e"
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
