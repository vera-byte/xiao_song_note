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
    "revision": "422ce0ed786d9f6b38574b2f15666f2a"
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
    "url": "assets/js/12.add94dc2.js",
    "revision": "3840047ca0f46743dfad3e4df42b0520"
  },
  {
    "url": "assets/js/13.60390fcb.js",
    "revision": "bcd37ce921824564920c5766f76c36d4"
  },
  {
    "url": "assets/js/14.6abf91c3.js",
    "revision": "8c72c650afee30976750a60554dbae2e"
  },
  {
    "url": "assets/js/15.115c8dbf.js",
    "revision": "07ee7c3489b4b0b0800a3908af75efca"
  },
  {
    "url": "assets/js/16.c23c1485.js",
    "revision": "826129e0053ccdc900e581b21cae76da"
  },
  {
    "url": "assets/js/17.d42610e0.js",
    "revision": "d8edb7bf101b57149204017204f21d9a"
  },
  {
    "url": "assets/js/18.c9b5bfb6.js",
    "revision": "0b78e659300fa9e222b4a948526cb8a4"
  },
  {
    "url": "assets/js/19.e4f55916.js",
    "revision": "50b12cf423c8fddfad5225ce9a14f20c"
  },
  {
    "url": "assets/js/2.4d5c24b7.js",
    "revision": "7f1482f3782f9ae1111f3793f8f6effb"
  },
  {
    "url": "assets/js/20.fb9bc978.js",
    "revision": "f6444af01be5d414cbe25594ff9a8053"
  },
  {
    "url": "assets/js/21.1e29291a.js",
    "revision": "e58fc3eed54aebca5331df36c1ad5870"
  },
  {
    "url": "assets/js/22.e63c8bbc.js",
    "revision": "1b7ebabd52e31b2cf78ae59316bfdbab"
  },
  {
    "url": "assets/js/23.fb310b72.js",
    "revision": "d7c88c0735743d8b6e842134d5742a58"
  },
  {
    "url": "assets/js/24.f472e6bc.js",
    "revision": "9384737b93f52cf2908a53fd5ff77947"
  },
  {
    "url": "assets/js/25.529a43da.js",
    "revision": "e58552326557e594386193251c58a280"
  },
  {
    "url": "assets/js/26.64a34e14.js",
    "revision": "64964867f68c20957cec45af2c647e8f"
  },
  {
    "url": "assets/js/27.174d162b.js",
    "revision": "95a35eea9101a66761f4f0c3decd15ff"
  },
  {
    "url": "assets/js/28.9ab1203c.js",
    "revision": "04862f2e81556bb5cd906b7f6c8ab29e"
  },
  {
    "url": "assets/js/29.acffe938.js",
    "revision": "e3f7ee62d814c5e9bc663caf1bbde411"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.0d141a96.js",
    "revision": "271ed5eef28aa1939bb51658021c64a5"
  },
  {
    "url": "assets/js/31.61531427.js",
    "revision": "422551550a98d0a6cdba10311c2e0682"
  },
  {
    "url": "assets/js/32.ea8a1e98.js",
    "revision": "c7701546f204652229c477647e6bd885"
  },
  {
    "url": "assets/js/33.ce277b62.js",
    "revision": "933c06a6056786b8e1498032f07f4b6a"
  },
  {
    "url": "assets/js/34.2e241193.js",
    "revision": "f1305bebf9c89f8d266c4236539f89c9"
  },
  {
    "url": "assets/js/35.ada62f16.js",
    "revision": "7618b994be6d9b993d8feb92e9373618"
  },
  {
    "url": "assets/js/36.32223a5a.js",
    "revision": "121ba533c7a157e347bdd7da9c32dcad"
  },
  {
    "url": "assets/js/37.caef4e10.js",
    "revision": "b0414daf6579dc4613458ca3f9b19eec"
  },
  {
    "url": "assets/js/38.8ef4a15b.js",
    "revision": "61abed9675a0258b84e9577654e9548d"
  },
  {
    "url": "assets/js/39.38fd4b51.js",
    "revision": "bc2b583da8180a751020b7e771b07a7f"
  },
  {
    "url": "assets/js/4.a669b0be.js",
    "revision": "e39f5e5b4906a3eff38bd789fdf2bedc"
  },
  {
    "url": "assets/js/40.2ecf2d01.js",
    "revision": "bf7c236701caa2814ddd1400487b34ea"
  },
  {
    "url": "assets/js/41.adba80a2.js",
    "revision": "f712e2c17f3223e4680ebe4721522bae"
  },
  {
    "url": "assets/js/42.66c0556a.js",
    "revision": "073ce7ca14cad1383a396694cccc7aff"
  },
  {
    "url": "assets/js/43.9f070c56.js",
    "revision": "3aff60ab0bda499c182dbba7c5ddfd7c"
  },
  {
    "url": "assets/js/5.6f496986.js",
    "revision": "c0cfcd7fb7c237e41a93601a2e0349f6"
  },
  {
    "url": "assets/js/6.891f4eec.js",
    "revision": "f3329019d51fa65ed5164462d5eb63a3"
  },
  {
    "url": "assets/js/7.a0bd9032.js",
    "revision": "abadb6d0d71d060372bac4df899f8972"
  },
  {
    "url": "assets/js/8.b89b043a.js",
    "revision": "aabe13b57667b9984fe7cff7e057172c"
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
    "revision": "73d21ce27b2b36f65df5067684938307"
  },
  {
    "url": "category/index.html",
    "revision": "b6829824ee7153a339a56d5692f28705"
  },
  {
    "url": "egg/index.html",
    "revision": "2b66cd36aa343892fe33a7d5c392f27b"
  },
  {
    "url": "electron/index.html",
    "revision": "627491fc71266c76a3b60eb86dd51330"
  },
  {
    "url": "extra/index.html",
    "revision": "b34913bb2edb33ad91b64e34bc80c9b5"
  },
  {
    "url": "flutter/index.html",
    "revision": "4192df61021333b2c520b5c618feb930"
  },
  {
    "url": "flutter/test.html",
    "revision": "ad84a259911e5e2a9dbdc98a41b53f2c"
  },
  {
    "url": "guide/changelog.html",
    "revision": "d2713a80762c01ceb2738a93875295b4"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "1f1454dc912e5832170e646c08d01152"
  },
  {
    "url": "guide/faq.html",
    "revision": "0e3a0b0bab4d08facfadd7a220dca9ae"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a5e49f4ce63d2b6d9b02b49368974b87"
  },
  {
    "url": "guide/index.html",
    "revision": "d34b6e25046ac472928b401919962432"
  },
  {
    "url": "guide/palette.html",
    "revision": "3448b4f72d8bf4cbcebdd8904a8759f5"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "e7a23e698c2bb8097165d90baad09f8c"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "145a9cdff6fcd2d2df95f4725c12d6a2"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "251ea9037ec6d89a205466380cd5096e"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "fc503266822ae8faca32c1c370e15cfa"
  },
  {
    "url": "index.html",
    "revision": "f874dbe4dc03a1726a5ce6af1d3d6a49"
  },
  {
    "url": "js/index.html",
    "revision": "ae06c03413c4abc44dfa3ced86d16528"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "04126fd6ce8561e5b3a427892abfe6f4"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "f547fd8a02f859c7717b20ab4ae94069"
  },
  {
    "url": "notes/git.html",
    "revision": "8a5096e77a01ba729f0920df87ab2be2"
  },
  {
    "url": "notes/index.html",
    "revision": "c2df4a8058c95613a32d564ba2c16ddc"
  },
  {
    "url": "notes/nginx.html",
    "revision": "d3d03452f7da9007cae0bf251a816a52"
  },
  {
    "url": "notes/node.html",
    "revision": "66d03343bfc691d1aca45fb336c46d8f"
  },
  {
    "url": "notes/npm.html",
    "revision": "d1197f344045b95d26485f5040b68795"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "1cedf77a962aa4ace2ac5c0279e188ff"
  },
  {
    "url": "notes/vscode.html",
    "revision": "bb73bdafba8900c7c5059b2c79507f80"
  },
  {
    "url": "plugin/index.html",
    "revision": "8c91cc070b85b0649901df5ce6623bc9"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "7b62e8fd8af1ca7086925351292774b2"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "7ab5814455a4f849d29cf5012ef60d23"
  },
  {
    "url": "tag/index.html",
    "revision": "6502b2993e75c552cbef972640836999"
  },
  {
    "url": "uniapp/index.html",
    "revision": "773a4e658b3209199c0585d5db007860"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "4ce545f8d4fd699e107c9a345d2a21cd"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "466febf857763d61e65064c477a48b23"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "19af8d072c3948cd77ffe6e8bb86d06a"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "9565a104f25348a69cc74238cd0641a9"
  },
  {
    "url": "Vera/index.html",
    "revision": "4fc9eb3eaa2ce4fe44348ed52e17f8de"
  },
  {
    "url": "website/index.html",
    "revision": "12ece95abd0d01a92eac98256e18e53d"
  },
  {
    "url": "website/package.html",
    "revision": "5d165df7be9f3459bd8c9e72b1d5fcb2"
  },
  {
    "url": "website/rearend.html",
    "revision": "6f5753b367d099f998c7013e4209a31f"
  },
  {
    "url": "website/tools.html",
    "revision": "67c222a368194283fe73af4a7f7e07e3"
  },
  {
    "url": "website/webclient.html",
    "revision": "e9fdbcd127e7bf8092caa5db6e4f9900"
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
