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
    "revision": "4eb4720ffc72afc10e33c5769e2d57a5"
  },
  {
    "url": "assets/css/0.styles.cf8ba488.css",
    "revision": "ae60b927ee75b545793dda750c5ccb93"
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
    "url": "assets/js/10.1b401dd9.js",
    "revision": "0d7eb3a875341bf4ae24f997d404a8e9"
  },
  {
    "url": "assets/js/11.4c0e7305.js",
    "revision": "12384fc1a68bf5aeeda65c575f561727"
  },
  {
    "url": "assets/js/12.7043cb0c.js",
    "revision": "190c2395e5b7b7b38bf98202c28eb047"
  },
  {
    "url": "assets/js/13.c37a5990.js",
    "revision": "e9526202cb53e49d4b144412c92237a7"
  },
  {
    "url": "assets/js/14.0114405c.js",
    "revision": "1fa6977624ad45ce77ebd77840ba6dab"
  },
  {
    "url": "assets/js/15.643a905b.js",
    "revision": "e815ff5988172c3ec4d2c16168714072"
  },
  {
    "url": "assets/js/16.91555f33.js",
    "revision": "bbb83259be8ee8c8fb4889d666f0a2b8"
  },
  {
    "url": "assets/js/17.d7c4ea47.js",
    "revision": "67a4a8c36fa6a43d283f6190a4ee293e"
  },
  {
    "url": "assets/js/18.d66ca052.js",
    "revision": "d07e54dc133edf1c6f339ec43e6dbf80"
  },
  {
    "url": "assets/js/19.c3cac64a.js",
    "revision": "74cc3a1061656151af497f1e24dbc4ec"
  },
  {
    "url": "assets/js/2.9265cb1f.js",
    "revision": "5e463828f39b8c8b047d07a3d3b36a1a"
  },
  {
    "url": "assets/js/20.7547816e.js",
    "revision": "4b2f3b6a2184955c80befed1e1fc7fb6"
  },
  {
    "url": "assets/js/21.b4957b18.js",
    "revision": "766b0bcd1f6958f4bd5112cb31f62471"
  },
  {
    "url": "assets/js/22.039fb583.js",
    "revision": "7e526cd96930de3b6d6cedd4d1d87664"
  },
  {
    "url": "assets/js/23.120cbab7.js",
    "revision": "a1ce59514687f063ce2ac97d191240d9"
  },
  {
    "url": "assets/js/24.77405ff3.js",
    "revision": "cbee9ac6ca1a2be18b273c158c2f5241"
  },
  {
    "url": "assets/js/25.51799eca.js",
    "revision": "ba923ab0712fb5749310844d24594063"
  },
  {
    "url": "assets/js/26.701b4a2a.js",
    "revision": "477388211cf431f0fde79595f0ae105f"
  },
  {
    "url": "assets/js/27.6d6d723b.js",
    "revision": "bf130ae2dbf75c930347fee944b86aad"
  },
  {
    "url": "assets/js/28.5e931129.js",
    "revision": "16017e53775acbb6e8ac381c3c927ba9"
  },
  {
    "url": "assets/js/29.72e42e2a.js",
    "revision": "464ef90193ec0dc09b92ebe9545d1069"
  },
  {
    "url": "assets/js/3.4f081cf9.js",
    "revision": "bc84619ba2917d7a895f593b57756152"
  },
  {
    "url": "assets/js/30.c348cc93.js",
    "revision": "ed404e7c820aad46ea19583b1092e209"
  },
  {
    "url": "assets/js/31.7d149a4e.js",
    "revision": "ac293796abf0b01c899286ef9b15e53c"
  },
  {
    "url": "assets/js/32.206d1b46.js",
    "revision": "65c88e70f68fe647c14bff37a2e0d8d9"
  },
  {
    "url": "assets/js/33.68c8a4f5.js",
    "revision": "d5d11c5dda9f3413fb86d9c800cbc2e4"
  },
  {
    "url": "assets/js/34.a22ceea5.js",
    "revision": "72c73d3af8e6df4c5f3e97dc870b271d"
  },
  {
    "url": "assets/js/35.980b42f5.js",
    "revision": "745a8d16ab158bc424c3d6c528c0bf8f"
  },
  {
    "url": "assets/js/36.c0431443.js",
    "revision": "926e5659e6c1568977eeff17a98bc983"
  },
  {
    "url": "assets/js/37.3ff5d86e.js",
    "revision": "ca20848b64a003941cbdfec7c9f5a8a3"
  },
  {
    "url": "assets/js/38.8e9bf1e0.js",
    "revision": "6d2fb43efaedf19c2a098e1fbacc25f3"
  },
  {
    "url": "assets/js/39.6ec6fa68.js",
    "revision": "97de27072e11c49c01c56725dd5b92ee"
  },
  {
    "url": "assets/js/4.66ae8de4.js",
    "revision": "eac1a8896e810fefa23f61f97ea350c1"
  },
  {
    "url": "assets/js/40.9eef327d.js",
    "revision": "d2da45ae7a7dd85349506ffee3b862c6"
  },
  {
    "url": "assets/js/41.c3a5d0ef.js",
    "revision": "306f6a1d0b0b33cf5440c4f11f700ee6"
  },
  {
    "url": "assets/js/42.fed2d542.js",
    "revision": "360635c454e64d25783c632f4e512e30"
  },
  {
    "url": "assets/js/43.53535985.js",
    "revision": "be92e6965246a831ad2155296366d139"
  },
  {
    "url": "assets/js/44.d01b6e6c.js",
    "revision": "3a1cda30360e176434fe64952b11d5af"
  },
  {
    "url": "assets/js/5.78ee392e.js",
    "revision": "32093022b66f64be2e47774cd63fdc5f"
  },
  {
    "url": "assets/js/6.296a2813.js",
    "revision": "9796a7cfafc00953dc2d9f2438a999e0"
  },
  {
    "url": "assets/js/7.bb33cb53.js",
    "revision": "2337bd952f9f41580f2e3ee1f9fee45b"
  },
  {
    "url": "assets/js/8.6664932b.js",
    "revision": "68c8ea72bd11775f75dbf6c194e35aa7"
  },
  {
    "url": "assets/js/9.6fb1ea2d.js",
    "revision": "921c2a63333e99bd2d280855e3f0ca17"
  },
  {
    "url": "assets/js/app.2e19a76f.js",
    "revision": "9b13ffd6ae55f31074f8c732dd10984c"
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
    "revision": "340c0db3bc87ae52aa6256f4a0362fcf"
  },
  {
    "url": "category/index.html",
    "revision": "da49b50f0feb56e66e4251389cab8b26"
  },
  {
    "url": "egg/index.html",
    "revision": "8ad3557410f42c7117b5f9e03b7e6027"
  },
  {
    "url": "electron/index.html",
    "revision": "480927c1f19383aefff2cec8451309bc"
  },
  {
    "url": "extra/index.html",
    "revision": "a107192058dc4c150a9c8dadd5e3160e"
  },
  {
    "url": "flutter/index.html",
    "revision": "0ec46a738dd6a15aa936cf7c8ddce4ff"
  },
  {
    "url": "flutter/test.html",
    "revision": "d9d64e5dc613bf52acf1991b332d9ea4"
  },
  {
    "url": "guide/changelog.html",
    "revision": "4149ea8d03907e8644fa0a5f45c26555"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "ad407000de712d5b73447445facb8c43"
  },
  {
    "url": "guide/faq.html",
    "revision": "852af1fd8bc9c4394f106b665b621f8d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4678ae4ee87aaff4356a2dc99defa09e"
  },
  {
    "url": "guide/index.html",
    "revision": "55ae41927f5f412c59e0ac1c38f8708a"
  },
  {
    "url": "guide/palette.html",
    "revision": "dcb7823eb3f8b40fd3846348f518e03e"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "9e9ef48b0272f14bfce51863b10b059a"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "d578587aef3dcc3e8ff17795dfc66733"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "76e71a57586f302f2b4ca8715f91cb51"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "68e09318e43e29f2f0ffcbd76f42ce68"
  },
  {
    "url": "index.html",
    "revision": "ec398cfe00b064f44d755a2f6e55eb1f"
  },
  {
    "url": "js/index.html",
    "revision": "d8ac36fc32a863b63b7d21eb86bf5cc8"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "0887fce248a964ab21a880259c5ef929"
  },
  {
    "url": "notes/brew.html",
    "revision": "495885a2dd9c77564235e97545fd1582"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "f93ab0bbce85b2fe086e497c05a6e5af"
  },
  {
    "url": "notes/git.html",
    "revision": "8e4004482f9aef648a0f28f2cd52618d"
  },
  {
    "url": "notes/index.html",
    "revision": "bcc54a055d567a75266966e445f6616c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "7648c04cb025118a0ec6041d01f91906"
  },
  {
    "url": "notes/node.html",
    "revision": "0adb7efbf6894c75a48e0f1767649ccc"
  },
  {
    "url": "notes/npm.html",
    "revision": "9de6e0967c79f2c27065e77dc3724d06"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "3e40001d75eb63c5042194047a7db73b"
  },
  {
    "url": "notes/vscode.html",
    "revision": "b398e4ef3e407a6177817e786f17c596"
  },
  {
    "url": "plugin/index.html",
    "revision": "56b24faca630b9a169b195638ad4c9e2"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "f9288ab81b18a062a54fe40de349056c"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "ef9b7387223ba56390b597b9e8d19933"
  },
  {
    "url": "tag/index.html",
    "revision": "2f87b836345e96fd75fd96bc353805c3"
  },
  {
    "url": "uniapp/index.html",
    "revision": "a8c5766ada70befc7d0ebc5e8a9543e5"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "012744cfff954d314b695e758809ace0"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "45ba54eb8c2348a14ca06a90af46ecac"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "d0432747acb0748807fe5c4d6027a197"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "64435f54b76978d422ebb7970877c7fc"
  },
  {
    "url": "Vera/index.html",
    "revision": "fe26e7f9a5ce752ae1442219d94ce7bd"
  },
  {
    "url": "website/index.html",
    "revision": "383cb38b29cc0f98ad5a44eceb84fc94"
  },
  {
    "url": "website/package.html",
    "revision": "56275e6c417843f1083936450ab0ec67"
  },
  {
    "url": "website/rearend.html",
    "revision": "fef684e045918de07847ce3dea862645"
  },
  {
    "url": "website/tools.html",
    "revision": "08770676f973a187151ca871ec4f1588"
  },
  {
    "url": "website/webclient.html",
    "revision": "b89c036315aae116c56bf524f18d096c"
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
