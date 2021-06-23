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
    "revision": "270c6b2abf2c8ddc0287dab4ffa4b692"
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
    "url": "assets/js/10.bc26f947.js",
    "revision": "6665bbdf8cd3b0ec7914d03fcff32a69"
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
    "url": "assets/js/15.eee67e7a.js",
    "revision": "22471caf47f4e739d44e3c315d25310c"
  },
  {
    "url": "assets/js/16.a36d26f0.js",
    "revision": "d5e97f199bb4ef24bf02ae662be75851"
  },
  {
    "url": "assets/js/17.d9b922dd.js",
    "revision": "4df5cda44861bde83bf50457a6250c8f"
  },
  {
    "url": "assets/js/18.4298ebf8.js",
    "revision": "81a166af845c70567e7241518a308eb1"
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
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.f22e2241.js",
    "revision": "b6a7b475ba5d4a641721f575b2f41e88"
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
    "url": "assets/js/28.8d23097d.js",
    "revision": "969ea5a81dd5d386b1aadedf9dba511d"
  },
  {
    "url": "assets/js/29.6e4b4355.js",
    "revision": "83c1ff7a2cac99e410b77445bd645547"
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
    "url": "assets/js/31.7184f202.js",
    "revision": "fdf7b1f2389696ea24d95fd00dd8efe8"
  },
  {
    "url": "assets/js/32.c96f2d8f.js",
    "revision": "4589fdb51422ef6c16a9a20dc7735eff"
  },
  {
    "url": "assets/js/33.b72f097a.js",
    "revision": "f707eb871e040850f526fef619d9f161"
  },
  {
    "url": "assets/js/34.55f0b874.js",
    "revision": "06ee34e10115c0cfdfe400c0e5845f57"
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
    "url": "assets/js/37.4169c797.js",
    "revision": "c2043cbdf1172da282ac5bfac521caa2"
  },
  {
    "url": "assets/js/38.2103f248.js",
    "revision": "4a46cd9561288f362d4824361fff7f89"
  },
  {
    "url": "assets/js/39.28709788.js",
    "revision": "1fa81edcb3e39181851d434ace4f3d01"
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
    "url": "assets/js/41.2c192f52.js",
    "revision": "64ad96b05c1a421b245fd3c65b2dd36d"
  },
  {
    "url": "assets/js/42.4b428888.js",
    "revision": "5a3779d6cbd036552dda4027bc4aa813"
  },
  {
    "url": "assets/js/43.e7793c59.js",
    "revision": "bf65ca9aad6813f1460cdf8f29e7772b"
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
    "url": "assets/js/6.81e9b9cc.js",
    "revision": "c5ccace3676910b6719331448fe82328"
  },
  {
    "url": "assets/js/7.cda595e9.js",
    "revision": "e8cd0c83f99eb302756e0e6cb66f8bbe"
  },
  {
    "url": "assets/js/8.7cb45502.js",
    "revision": "7670c607252f3cdc4cce9b51b67fb19e"
  },
  {
    "url": "assets/js/9.44468ecf.js",
    "revision": "5f2dd2b53fe9ae116c6e51db9e4bda24"
  },
  {
    "url": "assets/js/app.0f266d6e.js",
    "revision": "b72c6de65e580a77a33c83e72447bc26"
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
    "revision": "0b3a1b1a7b8c88de05d4881c2eb1e851"
  },
  {
    "url": "category/index.html",
    "revision": "64e180c5cd1187af3a03eb79c2b5d65e"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "e1f25f337f833156ef4a4814a38024cb"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "be4af82dda4599ec055423be85c8ea66"
  },
  {
    "url": "electron/index.html",
    "revision": "fc9e173ebb59343b485216065f5709f5"
  },
  {
    "url": "extra/index.html",
    "revision": "6de65a668688e8ce21258f8934f59343"
  },
  {
    "url": "flutter/index.html",
    "revision": "c632aaaac70f31f4ef7b5e5dabc85145"
  },
  {
    "url": "flutter/test.html",
    "revision": "642425f52ed3352018ab7d28bd900d87"
  },
  {
    "url": "guide/changelog.html",
    "revision": "ca25f2b756178b3ef4a6fa0779e22304"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "cb6008ac5b9dea37a3540f7bd264be07"
  },
  {
    "url": "guide/faq.html",
    "revision": "b54c311447bfacedfa65b1566960583b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "078586de87662350c332c66641bd4670"
  },
  {
    "url": "guide/index.html",
    "revision": "c51b6d31c95c731ac4e3a49aade1fd2d"
  },
  {
    "url": "guide/palette.html",
    "revision": "614f804583db34e433883ae0a21edda5"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "5033acc4240826c55ad2f4bacd98220e"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "ffa3919d1dca8dd2d01faeef30f0baca"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "5db3e17f2bceaa330d1c8fba1fa1f2a3"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "b95b1537b2a818e4da54f1e7c766a48b"
  },
  {
    "url": "index.html",
    "revision": "d2d6b67da4d4c5fdd1f519597d0eca56"
  },
  {
    "url": "js/index.html",
    "revision": "9c679a280c155a164f6586e3fa6ddc5a"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "5607473a4eee56a1797c632c98ee147b"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "e3d96218a396260ca6208e2320b9f58f"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "f303f84b659f6e79bf59594927496df3"
  },
  {
    "url": "midway/index.html",
    "revision": "8e30562abc677ec61ae613448be92bdf"
  },
  {
    "url": "notes/brew.html",
    "revision": "39835d80a3f394c494d285f494848531"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "460a8bc5716b5f08cca47c492bb174da"
  },
  {
    "url": "notes/git.html",
    "revision": "3c785f6de378d739aef8a765b9f87ada"
  },
  {
    "url": "notes/index.html",
    "revision": "bf2d59942efe5910a2e065dd04b1dd86"
  },
  {
    "url": "notes/nginx.html",
    "revision": "bc9b08db836351a84985a049c6a95dc8"
  },
  {
    "url": "notes/node.html",
    "revision": "7be55ff85f69f5e1fccc44bcebced94e"
  },
  {
    "url": "notes/npm.html",
    "revision": "f740cea37c8a8537762a17c12cf83993"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "d169b511d96d179c25d9416c2fb64387"
  },
  {
    "url": "notes/vscode.html",
    "revision": "62eab1d65a75f6703e7a7f10872c03ef"
  },
  {
    "url": "plugin/index.html",
    "revision": "26686cfdde4fc58d5042b6e8af63ac1c"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "0e3c9b57b64497797661b5e44ae26204"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "6a8778b102288c29fc96caf288acc0d0"
  },
  {
    "url": "tag/index.html",
    "revision": "269cfe6f107f74069bc3dfc39baed26f"
  },
  {
    "url": "uniapp/index.html",
    "revision": "e4c8eb3d1aa79728e521881c94a7cf0a"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "bc9d25363fd23276d8d7dea7227fb4e8"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "a86293c56887f216ab4a233679240a53"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "493a63bf1a04fbc959637c64a4d5f23a"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "ff8173fe1f2d925aec77c594e019ce7b"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "8c0d77bc5576b2cc337165fe23fa16bc"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "064ffabb26c19e9f3ce6612193e8e03a"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "3ed7284ba62de154df0d7274cad065f2"
  },
  {
    "url": "Vera/index.html",
    "revision": "2066dd403fb8ee0d7a7cc7406b04592c"
  },
  {
    "url": "website/index.html",
    "revision": "64a907a41d349a254f23b1e735f8ad00"
  },
  {
    "url": "website/package.html",
    "revision": "022c1ce08e5799a4ee7608f189005205"
  },
  {
    "url": "website/rearend.html",
    "revision": "12ac158b6a0afd9bdb3cf968aefc213c"
  },
  {
    "url": "website/tools.html",
    "revision": "6971b119ef48b2557a594c9154e130a4"
  },
  {
    "url": "website/webclient.html",
    "revision": "a17c3ea8b298f10a5d31a4fcad22e1a7"
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
