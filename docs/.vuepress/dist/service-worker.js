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
    "revision": "f3be801bfbe9c47b75b6656d5907ba70"
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
    "url": "assets/js/20.260d9196.js",
    "revision": "4b280fbec7cbc991a42125caae105483"
  },
  {
    "url": "assets/js/21.768f0488.js",
    "revision": "da62b8e2cf6b13d91de3092d159c3f03"
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
    "url": "assets/js/25.b1030395.js",
    "revision": "ac635e5da571b6625df3e06a51a600fa"
  },
  {
    "url": "assets/js/26.0f94172a.js",
    "revision": "3e2932e6ca0477d9aafa2e19583ecffe"
  },
  {
    "url": "assets/js/27.b66ae79f.js",
    "revision": "61e75997619379eb4874589a2e369bd4"
  },
  {
    "url": "assets/js/28.d7b88cca.js",
    "revision": "bc0ef29d9cec1c995db8016a926f3e60"
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
    "url": "assets/js/31.52326ee9.js",
    "revision": "617bb2add205959282abb42ff50c22be"
  },
  {
    "url": "assets/js/32.42d40583.js",
    "revision": "0e3fdaa3bb30dc4c1f317b72afb748c8"
  },
  {
    "url": "assets/js/33.74cfb038.js",
    "revision": "103d80a10f9c5760932a7eff1bab0351"
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
    "url": "assets/js/37.c7b4b4ad.js",
    "revision": "cd2fe9cecbe8da20463f34b3a7864baa"
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
    "url": "assets/js/40.3b4531e3.js",
    "revision": "c72de686561c172469d1654581fe7bb2"
  },
  {
    "url": "assets/js/41.2c192f52.js",
    "revision": "64ad96b05c1a421b245fd3c65b2dd36d"
  },
  {
    "url": "assets/js/42.ef62d46b.js",
    "revision": "59f8188a59e752023307094513ce43a8"
  },
  {
    "url": "assets/js/43.e7793c59.js",
    "revision": "bf65ca9aad6813f1460cdf8f29e7772b"
  },
  {
    "url": "assets/js/44.b4ae5b37.js",
    "revision": "b1479d8ccd2b9474957416a2b9ca6184"
  },
  {
    "url": "assets/js/45.030cee93.js",
    "revision": "9de9416699a2d8393b93e479420237ef"
  },
  {
    "url": "assets/js/46.b50bb026.js",
    "revision": "b0147551cd0374aef86ec2905cf32bc2"
  },
  {
    "url": "assets/js/47.1ae54848.js",
    "revision": "ec251bd2c80a614e87ece92a27546667"
  },
  {
    "url": "assets/js/48.acf7eef5.js",
    "revision": "756cbddf2c783702a1cc89104c5a9776"
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
    "url": "assets/js/7.9caa1433.js",
    "revision": "f944aa0f4b00f76e6a60aaaa5ffeb468"
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
    "url": "assets/js/app.fff97df5.js",
    "revision": "5422efecafc2cd3dc7f8e4e9f81b54bb"
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
    "revision": "c9a0575d68bce35c3133c3748078f579"
  },
  {
    "url": "category/index.html",
    "revision": "d8e751ea19daf82e03884b5459625c0d"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "dc6c9ea179980b355c9806230d342dc9"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "45741ac11333a0141e7e0f5dc62589b0"
  },
  {
    "url": "electron/index.html",
    "revision": "edaf87843838f8271fc6013f6c25e4b3"
  },
  {
    "url": "extra/index.html",
    "revision": "23d33e4a3f7665c811c5512f466efac0"
  },
  {
    "url": "flutter/index.html",
    "revision": "508ba8769406228dd41947def46635fe"
  },
  {
    "url": "flutter/test.html",
    "revision": "6f252ad61e9ae84c0f1ca39fdf051e28"
  },
  {
    "url": "guide/changelog.html",
    "revision": "76db7fc7060941293760407c47ae674d"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "791845dc2e4ee026e80e4ed0429922b8"
  },
  {
    "url": "guide/faq.html",
    "revision": "0411ecbdaff22deaf427cf67941b2919"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "95bc58e16c9087bcfb8bd193dead8e1b"
  },
  {
    "url": "guide/index.html",
    "revision": "cd59233c6d745ff30f14e09726104b3f"
  },
  {
    "url": "guide/palette.html",
    "revision": "0ed5c6dfd1ff6ba5b3fe193ed5654c9d"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "29a5f893430837be0849c5ede01da7ab"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "8b48dcf913901938da5d6be3d07ff1ea"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "c93b6117bc60188d8677106a3d9328e8"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "39f5b99b0da637f3a515e77cf41a883a"
  },
  {
    "url": "index.html",
    "revision": "8208b7978b7df12a39a7dd98d634216f"
  },
  {
    "url": "js/index.html",
    "revision": "fa9737a727278dc7b51ca0cf679878b8"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "34254e02850109c4e85b00c542e61011"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "b5816dd3f025316676138a46655fd106"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "9a9fb1fec5e070e67a6788a1e7b4b983"
  },
  {
    "url": "midway/index.html",
    "revision": "72ec8f8132b59617da216981ab7cafbe"
  },
  {
    "url": "notes/brew.html",
    "revision": "55dd28a9eb2f308002534235f1b73b24"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "8bc4d92734378f8ea75637eb09e30a25"
  },
  {
    "url": "notes/git.html",
    "revision": "875efa835d949421cafe844eaaf58935"
  },
  {
    "url": "notes/index.html",
    "revision": "63f3b05c9d889f4a6e0e8f0714bd514c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "18046890fbf52db62e368c85e614c513"
  },
  {
    "url": "notes/node.html",
    "revision": "17ac6547620d3ebd9d409939cf51dcb3"
  },
  {
    "url": "notes/npm.html",
    "revision": "1d6954fe543f7f4712bb9dac6b86a59f"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "ea39c3d0795fd0bffaecd92c2c690475"
  },
  {
    "url": "notes/vscode.html",
    "revision": "f2609ab36ccc4b16d4cd30ab9d12d163"
  },
  {
    "url": "plugin/index.html",
    "revision": "faf210cc4b6e6af12a85bc46cea54288"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "c3c1bd23fcd69fe5cbb6c3b48ec81c16"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "c325e114b9e023652e36f1c8f8c21659"
  },
  {
    "url": "tag/index.html",
    "revision": "b93e79b77d866a1eadb3ada16be210e1"
  },
  {
    "url": "uniapp/index.html",
    "revision": "203320499395ba1243f2583c7dfcf892"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "6c33c48c876a7547bc9fb6b61c8a8b60"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "f0e4bd21535586e1cdc0d2bbdc77845a"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "9f18cd2495e9ff2fe7f1e17514cb596b"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "04f56f89c06b197555f967e6231757ce"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "379ff5ea36ac13f652b5cd6715e30c93"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "abbb209db86d5c40acb8acf013e5e415"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "fb08552c5e904a21fc4cf1337fe53e53"
  },
  {
    "url": "Vera/index.html",
    "revision": "65e7531e68e45cf984f9be25f3269725"
  },
  {
    "url": "website/index.html",
    "revision": "84655294259d2cd1c13ad671ae63f4ec"
  },
  {
    "url": "website/package.html",
    "revision": "760a0627265b44bb557a6aaf2b449c1f"
  },
  {
    "url": "website/rearend.html",
    "revision": "7c3061e10db8fc67b79d504b00c8dc7d"
  },
  {
    "url": "website/tools.html",
    "revision": "9e9f102decf2620939b9fd4f8f2516a6"
  },
  {
    "url": "website/webclient.html",
    "revision": "787376daef0a5bfe8ac885e0cba1409f"
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
