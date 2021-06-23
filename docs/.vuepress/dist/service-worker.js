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
    "revision": "b487b460da8a2bf64266ebe6d05760b6"
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
    "url": "assets/js/12.7043cb0c.js",
    "revision": "190c2395e5b7b7b38bf98202c28eb047"
  },
  {
    "url": "assets/js/13.504d44ab.js",
    "revision": "182466f98ee9d6ffb545faf069c7777e"
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
    "url": "assets/js/18.83f31237.js",
    "revision": "a1546bc0c20a3326c6a45254355d9677"
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
    "url": "assets/js/20.260d9196.js",
    "revision": "4b280fbec7cbc991a42125caae105483"
  },
  {
    "url": "assets/js/21.b97fcc39.js",
    "revision": "2f6146799d5f52d51dac8e15ee14219c"
  },
  {
    "url": "assets/js/22.7d229426.js",
    "revision": "a175268b59a2a064dde907cfe80cab4c"
  },
  {
    "url": "assets/js/23.120cbab7.js",
    "revision": "a1ce59514687f063ce2ac97d191240d9"
  },
  {
    "url": "assets/js/24.a744d836.js",
    "revision": "f19f38e8dd387f29c2419267c6756c3a"
  },
  {
    "url": "assets/js/25.749cf2b4.js",
    "revision": "5d5e1a7d031b0e1e0ea3ed2b8446566f"
  },
  {
    "url": "assets/js/26.3091af55.js",
    "revision": "d9c4d69f7a63c440c048408d825fc6a2"
  },
  {
    "url": "assets/js/27.b66ae79f.js",
    "revision": "61e75997619379eb4874589a2e369bd4"
  },
  {
    "url": "assets/js/28.8d23097d.js",
    "revision": "969ea5a81dd5d386b1aadedf9dba511d"
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
    "url": "assets/js/30.77447ff1.js",
    "revision": "aed784a0527954f40912fa01866692f6"
  },
  {
    "url": "assets/js/31.15eedf15.js",
    "revision": "0c47aaf1d9c8fa1c17a2fedf79b69e0d"
  },
  {
    "url": "assets/js/32.35035fa1.js",
    "revision": "e218fc4ea470510769da66f61101328e"
  },
  {
    "url": "assets/js/33.74cfb038.js",
    "revision": "103d80a10f9c5760932a7eff1bab0351"
  },
  {
    "url": "assets/js/34.7b69ee4c.js",
    "revision": "d0d033c68b308ebb27401438c34dc6cf"
  },
  {
    "url": "assets/js/35.31fe1265.js",
    "revision": "ea0f6e27c4d428981039dea49af1f8f6"
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
    "url": "assets/js/39.f4079444.js",
    "revision": "d340b0914e7eea72b16332de8fde2f87"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.a4badb8a.js",
    "revision": "391d8174e487f7508221f8911dcdae34"
  },
  {
    "url": "assets/js/41.af51f17e.js",
    "revision": "da1a80ef0a433d72ebdd54035b2d8a4a"
  },
  {
    "url": "assets/js/42.a7b5b8bb.js",
    "revision": "65b14ebeb42963ea3e9af68e7a6504d9"
  },
  {
    "url": "assets/js/43.10edf05c.js",
    "revision": "2140a65224dc48d1e3edcd3e8a6734c5"
  },
  {
    "url": "assets/js/44.1d426cb7.js",
    "revision": "871b0a6ecf59eebf1f2062bf00a659ac"
  },
  {
    "url": "assets/js/45.ef5e0fe5.js",
    "revision": "282e7478dd88934fd17415f996a8c0fa"
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
    "url": "assets/js/6.f45cd49a.js",
    "revision": "fe8220966fbec031045573307addc415"
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
    "url": "assets/js/app.65f7c199.js",
    "revision": "e3b872efff831fdc63b92bccb4717ae7"
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
    "revision": "e5b0986e3ffad43dd3a6ff3059a8eaf9"
  },
  {
    "url": "category/index.html",
    "revision": "348fd46029ac909ef22707e730f856e7"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "05ee2d9bcb3a64c798fa8197ae9245c5"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "d091cbc375fde475d6152a9a22736d1a"
  },
  {
    "url": "electron/index.html",
    "revision": "36d3f07b45c4827f1decf6660743bea1"
  },
  {
    "url": "extra/index.html",
    "revision": "24b999e341288b75af308af93b665256"
  },
  {
    "url": "flutter/index.html",
    "revision": "c2280c7da3686001ca01aa7bed0cee13"
  },
  {
    "url": "flutter/test.html",
    "revision": "4267c4c5ba748ec46976c0f7647f860c"
  },
  {
    "url": "guide/changelog.html",
    "revision": "2a7a7b44aa7aa4983715facbe4abc229"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "05b135074a0ebd450efa41d346cbbd96"
  },
  {
    "url": "guide/faq.html",
    "revision": "757987aa73673dd0e0468a1c724c370f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0dbd42e7bac67c22beb8e9e7f3d4ff22"
  },
  {
    "url": "guide/index.html",
    "revision": "40b94e599a7faa771fd3a227a2186056"
  },
  {
    "url": "guide/palette.html",
    "revision": "aefec7e0d24c7854de672b9be41bd288"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "5e7712f1e6f2fd905692943c2a5363e9"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "4bb030f23ac9b3bb37c2ea86e3619669"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "709360b6f0fc34484c02bc2212b71000"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "72f40a059b73dc671516bf2a47079af0"
  },
  {
    "url": "index.html",
    "revision": "eaee6b675b474795590e7cddd82cce9d"
  },
  {
    "url": "js/index.html",
    "revision": "9155374f299792f147221b68815481d5"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "3b8fce5e0b71a53786db9f61ca776aa2"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "db3ec23ad7d1d399dbb20895976d5a3e"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "a3e85d855bc1f6fc30fcd2e9721bf432"
  },
  {
    "url": "midway/index.html",
    "revision": "4dfa88242540a67e644283e93591a2cd"
  },
  {
    "url": "notes/brew.html",
    "revision": "fcc31d4b2c03c1e816f6b88d0b11662c"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "2d842f3b385366bd80f327fa1d3cf207"
  },
  {
    "url": "notes/git.html",
    "revision": "f8ff00609a471400c921477d6e98db07"
  },
  {
    "url": "notes/index.html",
    "revision": "483ae5e08504ae506f4e72413cae6bf1"
  },
  {
    "url": "notes/nginx.html",
    "revision": "19f817cf8c0ca2c2b2809dd7b82e5499"
  },
  {
    "url": "notes/node.html",
    "revision": "c02f1f26d61b42688388b5fcec4dbdda"
  },
  {
    "url": "notes/npm.html",
    "revision": "b8eadd6c574cbff3f4d7c43e601cbb5c"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "156b13d6dc888d04e60447999db832f4"
  },
  {
    "url": "notes/vscode.html",
    "revision": "945142418fdcfd12dd330ed2ba03ba58"
  },
  {
    "url": "plugin/index.html",
    "revision": "bce55f56528b9610ca2c2edafe7dc896"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "f45eb4ce8c0791d3d63dc676f95eab2c"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "641f5de68e6f50e9d2b26016b8bd919a"
  },
  {
    "url": "tag/index.html",
    "revision": "b3502212647181d25a63a074b495cfc8"
  },
  {
    "url": "uniapp/index.html",
    "revision": "e3aada00cf67966b043d6e7f1467e0fe"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "da1a2d2af989052798b9ad193b59c89b"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "a9c1b8365efda1be327193770b37f2b9"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "425a86888681dfc136653c7f3bb2e478"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "f6c8390e4d46cd2f037fbad96af50003"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "69c221187c147519a0a33c9dd236b238"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "e6063429e524ccb6b1ec3704cf3242d0"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "0aa2ef9bd8855782bfc08bcf62107a28"
  },
  {
    "url": "Vera/index.html",
    "revision": "a3f111839ec78d8d91e848a301523e7f"
  },
  {
    "url": "website/index.html",
    "revision": "5559a49ccc0fdb2b032032c551b19bdc"
  },
  {
    "url": "website/package.html",
    "revision": "3b584598c4528a36eab363d0819f2556"
  },
  {
    "url": "website/rearend.html",
    "revision": "b887f717bd4f20cbdc00a7aa981e490b"
  },
  {
    "url": "website/tools.html",
    "revision": "1a52a0bb1202b551a39e25b614563ccc"
  },
  {
    "url": "website/webclient.html",
    "revision": "0d4d02406519a96c6e35fa86603269c8"
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
