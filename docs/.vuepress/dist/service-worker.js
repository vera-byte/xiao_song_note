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
    "revision": "2b1e52d395d90d9fd36bdfe699e32344"
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
    "url": "assets/js/13.8d12edaf.js",
    "revision": "16db3575758b779a9562d9482af6ac60"
  },
  {
    "url": "assets/js/14.58456378.js",
    "revision": "8b10fbebec9c5de8944ac784c07ac5cf"
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
    "url": "assets/js/18.fcad0ce9.js",
    "revision": "85b0af97d1f679d9ff2b37d6ee2616ea"
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
    "url": "assets/js/20.4fe872e9.js",
    "revision": "ae0a5ca1489bf3de9930a5502916f179"
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
    "url": "assets/js/25.02c555da.js",
    "revision": "4cc7c2ff1400c66e952a33050d549c47"
  },
  {
    "url": "assets/js/26.73ad2e44.js",
    "revision": "aa5d0161a0b0644d298069bc1e433041"
  },
  {
    "url": "assets/js/27.8f34ac2e.js",
    "revision": "f6cb74e88b4f771f56a6bee49c142580"
  },
  {
    "url": "assets/js/28.6f5600c4.js",
    "revision": "c28a384b890e5131d9e411ba0e125619"
  },
  {
    "url": "assets/js/29.f03f4ec2.js",
    "revision": "33f7d40bc9a33fed7ccd0d518dafa669"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.8f00eeff.js",
    "revision": "6877a4fa525aa8cad2173e49874cb06c"
  },
  {
    "url": "assets/js/31.334bc8bb.js",
    "revision": "b9f1548663d691af2abb1dc0ef8f30cf"
  },
  {
    "url": "assets/js/32.0343a836.js",
    "revision": "c2314445161fc198deab6c30eb072ab3"
  },
  {
    "url": "assets/js/33.c2a873ac.js",
    "revision": "5a95a81d1c50e3ed3abdf6a74e54e98b"
  },
  {
    "url": "assets/js/34.80e7132c.js",
    "revision": "0a96f781e0c40dbcb616e8bbec75a63d"
  },
  {
    "url": "assets/js/35.ff635d64.js",
    "revision": "7a6abbfb00b8a888ff7a7c6a4ed7e073"
  },
  {
    "url": "assets/js/36.e37f3257.js",
    "revision": "f8b93a6720b07154565deb3712b3bd12"
  },
  {
    "url": "assets/js/37.6c8a5f43.js",
    "revision": "e826e38666b2d8f8aee146614106d6f4"
  },
  {
    "url": "assets/js/38.a125eb40.js",
    "revision": "e6c84f04c7c566684cf1cbfe4a2ea8db"
  },
  {
    "url": "assets/js/39.a51137f5.js",
    "revision": "46642762e85063f553905ea9a67400b5"
  },
  {
    "url": "assets/js/4.370c35a0.js",
    "revision": "7680c25c9180ae6be0be519a44241235"
  },
  {
    "url": "assets/js/40.752040d3.js",
    "revision": "67b34aebd5567a63b95475382de42a5b"
  },
  {
    "url": "assets/js/41.8863ec47.js",
    "revision": "a712e885d62c8fbc30400b8474cc7f1a"
  },
  {
    "url": "assets/js/42.da5af008.js",
    "revision": "618480bb1e78ccff07d4e46c1f33982e"
  },
  {
    "url": "assets/js/43.b4a949a0.js",
    "revision": "66a5a403e13402d566b1cea08f8ab930"
  },
  {
    "url": "assets/js/44.323222a8.js",
    "revision": "0b7b081b77ce38f9dea4cc949f0f5799"
  },
  {
    "url": "assets/js/45.8c6c952e.js",
    "revision": "6c8cecbbcc69da3f7d9aa1425987aa15"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/6.2806a424.js",
    "revision": "27faba128ce93bfea72c0f459961baae"
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
    "url": "assets/js/app.87c0e342.js",
    "revision": "2026e6d2f32b4b02531725435510609e"
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
    "revision": "2b5ab86afd4ee681789637d54d5b1c6e"
  },
  {
    "url": "category/index.html",
    "revision": "5933c0595fcff84d2b153bdfc9fc85f4"
  },
  {
    "url": "egg/index.html",
    "revision": "d7a06de217470c1ce6cb866c16dddf3d"
  },
  {
    "url": "electron/index.html",
    "revision": "bc6dd4fd4155af06082a1cad8a56eb21"
  },
  {
    "url": "extra/index.html",
    "revision": "c71fcf0490b36ce1f95f3d665af73630"
  },
  {
    "url": "flutter/index.html",
    "revision": "b834d4b9860964abe9ae859926c0c1da"
  },
  {
    "url": "flutter/test.html",
    "revision": "e7f0b34cbc2c733fe3bc4e6d052cb124"
  },
  {
    "url": "guide/changelog.html",
    "revision": "0adeac7003b0a262db3b9cab33957e2d"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "73185d71b2fa362a1b7219b014eccba4"
  },
  {
    "url": "guide/faq.html",
    "revision": "ceedd79248114e462b6226a70c592cd0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ec9d9fd48a5c7efe20a463208305e157"
  },
  {
    "url": "guide/index.html",
    "revision": "9ca1cc76b96db5444da5331c53ddf499"
  },
  {
    "url": "guide/palette.html",
    "revision": "7a66cb7517fa4dfaf59533ca299184dd"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "3574e7d8050e1fd2e25d76a3f03950b9"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "9bb8f3d52270bc02b144a135dbbcd631"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "dc1a4c66f1ed2d3416adc828c582ddcb"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "9887436a98eff9c2b46071468987ca79"
  },
  {
    "url": "index.html",
    "revision": "d9db4ac3f0e617dbf52be4e6142e86c0"
  },
  {
    "url": "js/index.html",
    "revision": "7b737b2c5dba08ac50a8a82936ebcd7e"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "fdef90e43fbb08d71ddcb032f7453c17"
  },
  {
    "url": "messageboard.html",
    "revision": "5c5e5ce61971b60c78a070a5aee58dc1"
  },
  {
    "url": "notes/brew.html",
    "revision": "61a9ab81687440d2f3b44919e27764de"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "47a2319a2916eb039705e7a495cd3646"
  },
  {
    "url": "notes/git.html",
    "revision": "5fc0caea111e1797cb32620c47da5d77"
  },
  {
    "url": "notes/index.html",
    "revision": "d02752506cd10ac32b5753d176f30529"
  },
  {
    "url": "notes/nginx.html",
    "revision": "b1c5cb8b63d2eaa9f9e2f74542ab9996"
  },
  {
    "url": "notes/node.html",
    "revision": "1c474c793aa8953a1699e6e2dd4e59a2"
  },
  {
    "url": "notes/npm.html",
    "revision": "485ba41fc404c3e0da77f10faa989052"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "eb50b2d2428b8b9dd0e907694b0f832d"
  },
  {
    "url": "notes/vscode.html",
    "revision": "6f9700f67816514ef31ee710d2f99fc5"
  },
  {
    "url": "plugin/index.html",
    "revision": "e38d295e0473a1e78288c42053cfeaa1"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "99d560e2b0c394b1b24703388ffea809"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "bf914e9ff37f2da7631fa1999b12b1ac"
  },
  {
    "url": "tag/index.html",
    "revision": "2848fd6d6544d22f723cea7671302906"
  },
  {
    "url": "uniapp/index.html",
    "revision": "6b9771bf5738d3f7446bd3d61dfe3fd4"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "4cd3d9916c9581866450cb11cb1ca8df"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "77e8822c72d7115f9ee17a859c43c480"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "076474c8b2382aeeec3477391fff5668"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "1f5ac939fff570a6605c23b5bb932824"
  },
  {
    "url": "Vera/index.html",
    "revision": "1a2fbcf1dbb80891ef142f8bf83aecb3"
  },
  {
    "url": "website/index.html",
    "revision": "f4b16957d669ec79c92a5eab6b648438"
  },
  {
    "url": "website/package.html",
    "revision": "a3ea73423b09b3dac1b7c33d51a1d7bd"
  },
  {
    "url": "website/rearend.html",
    "revision": "c8647fccff85ad704b0a3757daaea969"
  },
  {
    "url": "website/tools.html",
    "revision": "a9afbb65b3cf37a5e420371a11d49be9"
  },
  {
    "url": "website/webclient.html",
    "revision": "79838e4f563ec5a9cb368cc6e064eef1"
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
