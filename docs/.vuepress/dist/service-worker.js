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
    "revision": "724d2f66a3b290870686558b495a8692"
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
    "url": "assets/js/12.fe4fb571.js",
    "revision": "f980ee5002fee3e0c33811b79282db54"
  },
  {
    "url": "assets/js/13.504d44ab.js",
    "revision": "182466f98ee9d6ffb545faf069c7777e"
  },
  {
    "url": "assets/js/14.0fe6a195.js",
    "revision": "4a2cd40a2621fe8eb6761e1ebe61041b"
  },
  {
    "url": "assets/js/15.eee67e7a.js",
    "revision": "22471caf47f4e739d44e3c315d25310c"
  },
  {
    "url": "assets/js/16.05f5f9a1.js",
    "revision": "d5d7612812b520a0b5ee4d8696fd9833"
  },
  {
    "url": "assets/js/17.d9b922dd.js",
    "revision": "4df5cda44861bde83bf50457a6250c8f"
  },
  {
    "url": "assets/js/18.31f0e06e.js",
    "revision": "b86c3c9dca43bbdffb2bbd85beb0d967"
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
    "url": "assets/js/21.bebb868a.js",
    "revision": "05ac28efebbbe143b042fe74d40e7a2c"
  },
  {
    "url": "assets/js/22.ba4c4f9b.js",
    "revision": "e9036408f608783a7effa2db1b890256"
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
    "url": "assets/js/27.d296b3e1.js",
    "revision": "ce6e6624dcc77cbbc82a410e83379897"
  },
  {
    "url": "assets/js/28.42d80a32.js",
    "revision": "0cb24d70636bf1edca977163c6e8193e"
  },
  {
    "url": "assets/js/29.e4aba5cc.js",
    "revision": "43f204cd30799d5e6542dae525e00d24"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.4bde741c.js",
    "revision": "3e14948355557fbcdea579a1c747c085"
  },
  {
    "url": "assets/js/31.b83f1921.js",
    "revision": "7f06308de2fe0793a4ba579d3708b137"
  },
  {
    "url": "assets/js/32.623b2101.js",
    "revision": "0ce88b887131b496405e96cea37b5a25"
  },
  {
    "url": "assets/js/33.c8c1be82.js",
    "revision": "b28d1458f24c23af2988c19355d05c42"
  },
  {
    "url": "assets/js/34.595b45f6.js",
    "revision": "0d2f0f5e4046cfcae26a810218f7efce"
  },
  {
    "url": "assets/js/35.25337823.js",
    "revision": "8550653fa01d0d6b9f53a5548c4baadd"
  },
  {
    "url": "assets/js/36.af5c6382.js",
    "revision": "9cefda6a73f81fa66ed0b8ae1dbd5b9c"
  },
  {
    "url": "assets/js/37.cab81165.js",
    "revision": "8efc494481ab5a7bad5edfdc3222b2cf"
  },
  {
    "url": "assets/js/38.d1647233.js",
    "revision": "f781a338dcff2c1c146f5d6fc01e60c0"
  },
  {
    "url": "assets/js/39.4c4dfe13.js",
    "revision": "b0c5afb0b5027bef1e82ba0389ade040"
  },
  {
    "url": "assets/js/4.8bd1cb74.js",
    "revision": "e93743f749de23c6cf69e44f68ac4ae6"
  },
  {
    "url": "assets/js/40.e14cff7b.js",
    "revision": "07e85b0093c9fdc7fdd86ceb9e948719"
  },
  {
    "url": "assets/js/41.63f4a6aa.js",
    "revision": "f05c516e5d5d00a259cf671913b4fbab"
  },
  {
    "url": "assets/js/42.30f21e27.js",
    "revision": "e290184c003ef1c97d943c6f5956cfd4"
  },
  {
    "url": "assets/js/43.7896ee01.js",
    "revision": "16e6da8acace15ec56701c87e92228fc"
  },
  {
    "url": "assets/js/44.dc1ba239.js",
    "revision": "101d061c44e45e09d0c16e0177695527"
  },
  {
    "url": "assets/js/45.326a297c.js",
    "revision": "e5ab1c9418184c68c439d8e7239001f3"
  },
  {
    "url": "assets/js/46.42a26bbf.js",
    "revision": "d4501bcea26fccfedc1db0a7fa4aeaff"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/6.1d269c43.js",
    "revision": "a212bca5a2958819270ecca884cd14e5"
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
    "url": "assets/js/app.c8e76e04.js",
    "revision": "aec81ea59924fa9203633dea12741140"
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
    "revision": "c39c501627139b98637f279d562ed798"
  },
  {
    "url": "category/index.html",
    "revision": "6942dff1cdae9b1c8174df1a23ab3451"
  },
  {
    "url": "egg/index.html",
    "revision": "a587251e39b057c1ff54b62edaa115b0"
  },
  {
    "url": "electron/index.html",
    "revision": "c3446ddb9f6d6f0e3f00b192ba96a1bf"
  },
  {
    "url": "extra/index.html",
    "revision": "9d300016edb3ade29e7ecc829112e93c"
  },
  {
    "url": "flutter/index.html",
    "revision": "bb9ea6c2671cb983e266c53340751f5b"
  },
  {
    "url": "flutter/test.html",
    "revision": "07de40cf12bde6fb3bfbcc5168b86992"
  },
  {
    "url": "guide/changelog.html",
    "revision": "8a162216912e754137316b4418f076e5"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "ad4b79f19b43043c6a400aea1246e412"
  },
  {
    "url": "guide/faq.html",
    "revision": "64c436b087be7478dc3c8f3bca6fd98b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e7e0f2b52d767ba5234ac599a08c380f"
  },
  {
    "url": "guide/index.html",
    "revision": "257f0de52e49d9b5ab7e5de7c2a1d90e"
  },
  {
    "url": "guide/palette.html",
    "revision": "452ee9d10f3b68551050bce77b3fa497"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "c30450fbc2d5d600163f96852987cfbe"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "43e8b57c3da12a2d63be322a70265890"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "6f9e0bb0a6263abe53bc7b4093bd074c"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "5c2214b03cceb39b2f4968a91927ea3b"
  },
  {
    "url": "index.html",
    "revision": "d70968879f510ddd9a54e933750defa3"
  },
  {
    "url": "js/index.html",
    "revision": "2f6fba07329e755400c74135305873dc"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "ebe6905228a8a73610238d9e07b302ca"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "7e53a1fb85c81730e3d4ac73f77b137c"
  },
  {
    "url": "notes/brew.html",
    "revision": "98877508c48f8ccbe1c2bbc37de6c11f"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "cb106da917e65234203e04e60fcd8ffb"
  },
  {
    "url": "notes/git.html",
    "revision": "d7f889cfc0a2855ca4b7554d0d05c99c"
  },
  {
    "url": "notes/index.html",
    "revision": "e0d70a7ba609f92ba45cfcef9dbd533f"
  },
  {
    "url": "notes/nginx.html",
    "revision": "cb4b9fb6344d63d24cb1bc6507177964"
  },
  {
    "url": "notes/node.html",
    "revision": "434b8994fbdc5bc8dd919c15f41baf3e"
  },
  {
    "url": "notes/npm.html",
    "revision": "a15b8b980d85001458b944e67257bc4f"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "7410155e2a204e5c0904071271acb175"
  },
  {
    "url": "notes/vscode.html",
    "revision": "60b87cd80afca4ba485446dab0bcb4c7"
  },
  {
    "url": "plugin/index.html",
    "revision": "17cd15e3ec5d0f93fcbff9872475f373"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "7e03d39b1ee7ded38d89082ca1ec65ca"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "ed145639deb2e16fc973d96e8ae8f1ee"
  },
  {
    "url": "tag/index.html",
    "revision": "c02a765336ecd322c3f6a44dca0e097d"
  },
  {
    "url": "uniapp/index.html",
    "revision": "5b4cdb5be9eec1ca0ce3a8418c2ba498"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "17c4ef2478a8f75c1f63296554aabf1c"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "6af74b7a9a863870a2a8360fa3395898"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "6c52b1599c0babcbae3e91ff41122f49"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "4fd4dc367d68d71841fcd057f91ea6c9"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "63b1cd13bf26ce5844dd53b7aa35061d"
  },
  {
    "url": "Vera/index.html",
    "revision": "1910e33df3d18a7afdcd9590f129b5f3"
  },
  {
    "url": "website/index.html",
    "revision": "5c11e1e6432f6aea7324906f8f1735e7"
  },
  {
    "url": "website/package.html",
    "revision": "785c8fcbc961d17652c43269cfe40be6"
  },
  {
    "url": "website/rearend.html",
    "revision": "bc4ecdea3355df161918c89b248fb7e0"
  },
  {
    "url": "website/tools.html",
    "revision": "a3b7b9b9e2490d6688d18b9a8685af61"
  },
  {
    "url": "website/webclient.html",
    "revision": "3bd420a072349702c027711dd0ca7081"
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
