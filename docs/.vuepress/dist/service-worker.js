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
    "revision": "44f90b11527af77302591e360dade676"
  },
  {
    "url": "assets/css/0.styles.c02df9c9.css",
    "revision": "f9aa362c13a6afb51eaad8fc37598686"
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
    "url": "assets/js/10.33e2e5cd.js",
    "revision": "fdd96bf4a475b564699d3363bd3d9a01"
  },
  {
    "url": "assets/js/11.072c2c4f.js",
    "revision": "bd01abcc43b9edbb7fcf9d0e520ea201"
  },
  {
    "url": "assets/js/12.4f0b7e76.js",
    "revision": "53e8ba4b45788b3b2ccec623b938a401"
  },
  {
    "url": "assets/js/13.269b2422.js",
    "revision": "bf7c9eeaa688bcc2efe676bf1a1d8f88"
  },
  {
    "url": "assets/js/14.6abf91c3.js",
    "revision": "8c72c650afee30976750a60554dbae2e"
  },
  {
    "url": "assets/js/15.576df1bb.js",
    "revision": "2b15f76fe0b41ef689a5f9d3ecd56cde"
  },
  {
    "url": "assets/js/16.bcc1c599.js",
    "revision": "840abccf6f00c705a3bcc722526a0d00"
  },
  {
    "url": "assets/js/17.d42610e0.js",
    "revision": "d8edb7bf101b57149204017204f21d9a"
  },
  {
    "url": "assets/js/18.ff484584.js",
    "revision": "cad36e7b6b2bb735a5ed7cb873184eb5"
  },
  {
    "url": "assets/js/19.1259a16e.js",
    "revision": "e802ea982789b61fc3cfce9430e269df"
  },
  {
    "url": "assets/js/2.60c139d6.js",
    "revision": "7f1482f3782f9ae1111f3793f8f6effb"
  },
  {
    "url": "assets/js/20.fa37370d.js",
    "revision": "e1a624ce615b1c408f2d53dbf910a168"
  },
  {
    "url": "assets/js/21.95fc67bc.js",
    "revision": "743caf65e7966031171048561a6cce45"
  },
  {
    "url": "assets/js/22.6f90b05e.js",
    "revision": "52cb17f1ff64b0764df658e7d315cfa4"
  },
  {
    "url": "assets/js/23.c8514928.js",
    "revision": "abf09285451180b2e200e31dad71c9fd"
  },
  {
    "url": "assets/js/24.bb9fa0dd.js",
    "revision": "9cd3db5aa8abf28fd6c57d0f4880cc44"
  },
  {
    "url": "assets/js/25.529a43da.js",
    "revision": "e58552326557e594386193251c58a280"
  },
  {
    "url": "assets/js/26.864c47b3.js",
    "revision": "f3fba81bb4ee25421652ba290151e154"
  },
  {
    "url": "assets/js/27.3385debc.js",
    "revision": "f7d6776614f4d7a3ab9745283925517d"
  },
  {
    "url": "assets/js/28.a54b4b0f.js",
    "revision": "96a1328e845d3d66e423d1679b43f5a3"
  },
  {
    "url": "assets/js/29.0e3e5340.js",
    "revision": "cb8b13452991a41f44dce8e9d88f49e2"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.4e26feeb.js",
    "revision": "313a0a6b0d4972da9b006ff0c4f14c56"
  },
  {
    "url": "assets/js/31.afc4ceb1.js",
    "revision": "0fb3cc883d238638b9cc94ac07709453"
  },
  {
    "url": "assets/js/32.4b4ea54d.js",
    "revision": "2b957dbf0e0f109b581b2991bc253e40"
  },
  {
    "url": "assets/js/33.aa73726b.js",
    "revision": "631adaf1ce13896e160315c105bb5104"
  },
  {
    "url": "assets/js/34.f3fb1246.js",
    "revision": "0b4be97b0b5ca704d9a1f28285dcd96e"
  },
  {
    "url": "assets/js/35.9ad46d62.js",
    "revision": "b6dd6435b641994ebfcd56d365ffa81c"
  },
  {
    "url": "assets/js/36.812c8844.js",
    "revision": "c4b2d8456fbe6196f905409479454b5b"
  },
  {
    "url": "assets/js/37.680b7b24.js",
    "revision": "75010323f39965539a9e8f4b2d0bf375"
  },
  {
    "url": "assets/js/38.69aaacfd.js",
    "revision": "452fbd671cfb12df7ff20380f4076232"
  },
  {
    "url": "assets/js/39.5c5ddf41.js",
    "revision": "4922aa7166f2799e70c8d95fd3471a72"
  },
  {
    "url": "assets/js/4.7fe303c1.js",
    "revision": "f9754f1c151d7e8bdb7789997d16cc5d"
  },
  {
    "url": "assets/js/40.c8505d5a.js",
    "revision": "879788e87b6fa86411a4b7d4609e591f"
  },
  {
    "url": "assets/js/41.0866afb8.js",
    "revision": "7f349a4f95b8b73cb8828329f983a551"
  },
  {
    "url": "assets/js/42.7815e6be.js",
    "revision": "a6b3c731f3d5663678021d601a45d0b3"
  },
  {
    "url": "assets/js/43.b7ba8361.js",
    "revision": "bf3fa9001bec4de719b0727db7544d4f"
  },
  {
    "url": "assets/js/44.94d249d2.js",
    "revision": "8d3bac3df908060af271f821d557b6e2"
  },
  {
    "url": "assets/js/5.6f496986.js",
    "revision": "c0cfcd7fb7c237e41a93601a2e0349f6"
  },
  {
    "url": "assets/js/6.0d019ec6.js",
    "revision": "70543c9540f0d7c0d7d293241a468038"
  },
  {
    "url": "assets/js/7.a0bd9032.js",
    "revision": "abadb6d0d71d060372bac4df899f8972"
  },
  {
    "url": "assets/js/8.b7391921.js",
    "revision": "d324f0c351832c74ccad90a1142d6e84"
  },
  {
    "url": "assets/js/9.a812423c.js",
    "revision": "588b0b868f196bbe9e4faa0f8ce58ef0"
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
    "revision": "8fcb734b853945c4a3b0b8bfadb4f404"
  },
  {
    "url": "category/index.html",
    "revision": "fcdcefa6b2fb640ea38a4283a00a9d4b"
  },
  {
    "url": "egg/index.html",
    "revision": "7df0678301588b8b361ce23b44eac212"
  },
  {
    "url": "electron/index.html",
    "revision": "099f6c091c84da4f13926153f9b2e77f"
  },
  {
    "url": "extra/index.html",
    "revision": "46e2a98880cd26fd39256a5f1bf5ba52"
  },
  {
    "url": "flutter/index.html",
    "revision": "19c036365456598c24c4f152c1b2eaee"
  },
  {
    "url": "flutter/test.html",
    "revision": "853ece533290d8c36b44dbd4fed00899"
  },
  {
    "url": "guide/changelog.html",
    "revision": "757e5bbb3fa812f64e23ce7aed581e6f"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "25e2deb2321303e18b5d0dc7810d62e4"
  },
  {
    "url": "guide/faq.html",
    "revision": "60c17925ff8bfeaa09042a3b7063a7d2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "88fb116f53b1eadc5fa70a7683dc9b38"
  },
  {
    "url": "guide/index.html",
    "revision": "e21739eb73bd8e5e61bf9da0561758ba"
  },
  {
    "url": "guide/palette.html",
    "revision": "273e20ddfdafd530eaf2d28d91e5f9d6"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "dc0b7c504931f7bebaf83d42d02e7659"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "249558442441a3e39f9c07026cd54822"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "b2d217f9c961c0a7ab0bed69297b7794"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "598bebe5db0b83e9cfb7e89d7f7483e5"
  },
  {
    "url": "index.html",
    "revision": "8207d333de3b969ba1c821d10c903540"
  },
  {
    "url": "js/index.html",
    "revision": "93d37a42ad1b059a172a333e3215dddd"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "c216776f3d2c7910a80d6d21c69db7d2"
  },
  {
    "url": "notes/brew.html",
    "revision": "41c9643b25da56fdce963af8e9320d8d"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "5e2ca12e1d3e244f5750a58b0bc6cfbb"
  },
  {
    "url": "notes/git.html",
    "revision": "1125375d0226e41481738a6c65c753d3"
  },
  {
    "url": "notes/index.html",
    "revision": "815f4543e419a6f2d52a9675b9617e47"
  },
  {
    "url": "notes/nginx.html",
    "revision": "744c35e8d9e50913f7b5c24ecb78069b"
  },
  {
    "url": "notes/node.html",
    "revision": "0e5f100073d535f74d0736cf45edf220"
  },
  {
    "url": "notes/npm.html",
    "revision": "b984ad4c3d2f19ea55472f1d84324e5c"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "495c531665d6f2af3160bc4a7d383bab"
  },
  {
    "url": "notes/vscode.html",
    "revision": "2bfb0785f2d11481917733b5289943da"
  },
  {
    "url": "plugin/index.html",
    "revision": "c434dd704b92da07f5f4a310a841d6cd"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "743772a525d19ecae0003576de5cae19"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "fdf7e078052ed7d7d48ca1331fbd6dbb"
  },
  {
    "url": "tag/index.html",
    "revision": "a45a5bf63de0fc66ce6bcb7745dfb009"
  },
  {
    "url": "uniapp/index.html",
    "revision": "2489a56083677e1fc6ad80048db9ae2d"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "9c0bf01bb2c3cfae89d04ffeebb3a232"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "b2691702fcb2efecb7ee59e7aa5793c0"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "f4cab86cb1352f20dadd335d793ada87"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "2276e02e89b1388f1133a6d78e0bfe07"
  },
  {
    "url": "Vera/index.html",
    "revision": "d65b63419b012182654ffa29806135cc"
  },
  {
    "url": "website/index.html",
    "revision": "2b7a79da37821ee3ba0269876004f219"
  },
  {
    "url": "website/package.html",
    "revision": "1d9805a8577585cddabf54abd581c0b2"
  },
  {
    "url": "website/rearend.html",
    "revision": "22612a7f12cacbe383bc6f08e0ea0a0a"
  },
  {
    "url": "website/tools.html",
    "revision": "483cec50a20991af48cba3c7f1d58469"
  },
  {
    "url": "website/webclient.html",
    "revision": "2dbfbee8649c86e88e3d67b56f4c6bc5"
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
