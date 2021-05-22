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
    "revision": "dcd9c27bdbbbede0ca61cba769f8eda5"
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
    "url": "assets/js/14.8d97003e.js",
    "revision": "73befc54010bfb8f08cbc266d8a57d43"
  },
  {
    "url": "assets/js/15.115c8dbf.js",
    "revision": "07ee7c3489b4b0b0800a3908af75efca"
  },
  {
    "url": "assets/js/16.73b95179.js",
    "revision": "ba7b44466285de4fc24a73e8451b966d"
  },
  {
    "url": "assets/js/17.d15471ba.js",
    "revision": "69522a518c9052e206da7009eaceb442"
  },
  {
    "url": "assets/js/18.8bff676e.js",
    "revision": "e0b7cc04492b372edac9c68c730f6ec3"
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
    "url": "assets/js/20.f97adc9a.js",
    "revision": "0a929113e8cc2eed3aa58a5be8ff79eb"
  },
  {
    "url": "assets/js/21.c0a9c9e4.js",
    "revision": "e19be4d92b1cb30173bbb59f0e8e57f6"
  },
  {
    "url": "assets/js/22.bc1108b3.js",
    "revision": "9aa52bf947755a40295752adfe595583"
  },
  {
    "url": "assets/js/23.1b2cc030.js",
    "revision": "c67ef852bb6f6380944f94759b64edb3"
  },
  {
    "url": "assets/js/24.82e3f245.js",
    "revision": "65cd01d63b2b740c6e202d821750028c"
  },
  {
    "url": "assets/js/25.e2dd82ee.js",
    "revision": "878e28b2abcf1287e6e5fb41f68b2656"
  },
  {
    "url": "assets/js/26.a565e486.js",
    "revision": "538d7e9a14375fd6ff0e191d781517cc"
  },
  {
    "url": "assets/js/27.373dad79.js",
    "revision": "36802a0febef57fac3b351aa96336bfc"
  },
  {
    "url": "assets/js/28.cc4dbab7.js",
    "revision": "39a64f7b70b3a4592ceb37d99536edde"
  },
  {
    "url": "assets/js/29.ebb118b5.js",
    "revision": "828b88f65ed490c184915a8233f35dcd"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.7596ace3.js",
    "revision": "1692bd945f9318046a35b0795bb91555"
  },
  {
    "url": "assets/js/31.ba802c12.js",
    "revision": "428c2dea70d768c2beb358a1d1575b66"
  },
  {
    "url": "assets/js/32.33287f8b.js",
    "revision": "f53d01ffb125bb9687fc3e86c6d9bc4f"
  },
  {
    "url": "assets/js/33.8662c431.js",
    "revision": "814ac5e21ed8b4acb7fc7ba607eb95ab"
  },
  {
    "url": "assets/js/34.ac75860a.js",
    "revision": "8a3d81e05744b68f2be6944a651c250f"
  },
  {
    "url": "assets/js/35.e5c3ccd8.js",
    "revision": "a36d2cdf66c8fd5af9a336e414e87a20"
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
    "url": "assets/js/38.5508c64c.js",
    "revision": "129db502fa08bad9d0ffa4d845deab0c"
  },
  {
    "url": "assets/js/39.dd6a74a7.js",
    "revision": "09cd23ab4ca24638a561a4c14adffbf6"
  },
  {
    "url": "assets/js/4.a669b0be.js",
    "revision": "e39f5e5b4906a3eff38bd789fdf2bedc"
  },
  {
    "url": "assets/js/40.9197c046.js",
    "revision": "b4be033385160e6d66a3e0e621637c8f"
  },
  {
    "url": "assets/js/41.68d84951.js",
    "revision": "950a65933eb244496a3d969b0b303a62"
  },
  {
    "url": "assets/js/42.5bc073b1.js",
    "revision": "972d44034c42459f7b05f10cd53b8d59"
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
    "url": "assets/js/6.c7f7bc0b.js",
    "revision": "e892a855423d373a4569e03d43798b9c"
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
    "revision": "f01475b775970e1858fc3914940c3342"
  },
  {
    "url": "category/index.html",
    "revision": "6c31b3f2d15fb589d0b6bf68e6142ec9"
  },
  {
    "url": "egg/index.html",
    "revision": "706aee38a6c348017149101257c20b14"
  },
  {
    "url": "electron/index.html",
    "revision": "310dd5ba524227b57ecbebb1a773b234"
  },
  {
    "url": "extra/index.html",
    "revision": "ee7a5fa674a1cbd4fa4ab174e76faebe"
  },
  {
    "url": "flutter/index.html",
    "revision": "a3d708f4c1cb11dc2b953a8e5bc5b270"
  },
  {
    "url": "flutter/test.html",
    "revision": "c3e0ba1c3d2cc2f678bfe6dfd1aeec5b"
  },
  {
    "url": "guide/changelog.html",
    "revision": "a3c0851d0d11545ad9b1bf44577d9117"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "a53d07d4078490160e9be608cee475d4"
  },
  {
    "url": "guide/faq.html",
    "revision": "c5d3bc250c6528a589ee0f7f8a303ff8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d26dfc0b5fb03cb412752477d4bab305"
  },
  {
    "url": "guide/index.html",
    "revision": "9b658bd28d7be4a1dbc5dd3ab37c431b"
  },
  {
    "url": "guide/palette.html",
    "revision": "9db77267b1d01fd8c2418af775d69dc5"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "1b6d7028dd9b931fc2242bbf9b26b005"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "51b3d4cfa47f8208f2ab0445eb87d330"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "7269e109a2410e1a5cd8c43f1bb1e46b"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "880158946d72dd9510e842a39b7db0b6"
  },
  {
    "url": "index.html",
    "revision": "9f498484cfc588eec6bdc5668833fcd8"
  },
  {
    "url": "js/index.html",
    "revision": "0a2375fdf1a31ed40352b8033b62496c"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "37bdc981c644a2b4c48c91a07ca4dd82"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "1bb8948e6644ae15d7d221c3788390e8"
  },
  {
    "url": "notes/git.html",
    "revision": "3ee81394a0e002b2bb7d7e2c0a2df78f"
  },
  {
    "url": "notes/index.html",
    "revision": "206f13a0e9a997ccfb79c19c5d4885ce"
  },
  {
    "url": "notes/nginx.html",
    "revision": "4e98fd132e013cec65d0f8b0956b9b42"
  },
  {
    "url": "notes/node.html",
    "revision": "04e55973c244a467200a5e60c730a10f"
  },
  {
    "url": "notes/npm.html",
    "revision": "78ca63f5394bbf7c2b5fffadd732e1d9"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "1638f40c8d88ab2a4408dbec45df6a04"
  },
  {
    "url": "notes/vscode.html",
    "revision": "f51f37e102bd9877f55f2bccaf2695a0"
  },
  {
    "url": "plugin/index.html",
    "revision": "d9ef6161bc0a58e15de65afe3609d786"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "ecd2c112ac448992390195571e4c7690"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "981eab468d1daa0f184e3f160cbab53f"
  },
  {
    "url": "tag/index.html",
    "revision": "d2f481c94430c2c28ae785adc048cd08"
  },
  {
    "url": "uniapp/index.html",
    "revision": "8bf2d40bf4c7255d38662560549be370"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "7c464d5ddb2d55e98357c11b35f7f726"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "f1c8236ec2705ec887c47c8b87dc1bff"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "1ee28ce70ed07614d266dd9a1acea49a"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "1f10bcc3ab91d45cf93647bc6558a8da"
  },
  {
    "url": "Vera/index.html",
    "revision": "765f4b8e1a7f2d73372a40e0638c27bd"
  },
  {
    "url": "website/index.html",
    "revision": "63271a51c076949dfc9c5ee331abefc4"
  },
  {
    "url": "website/package.html",
    "revision": "ba0f6f27a85042d59b58e8601a5fb67e"
  },
  {
    "url": "website/rearend.html",
    "revision": "e50562918bc7fe82d3108ea21a32b4bb"
  },
  {
    "url": "website/tools.html",
    "revision": "5247ebe572183e74815aa518de1beb43"
  },
  {
    "url": "website/webclient.html",
    "revision": "bba71a2db0838370c3d9c155a61ad835"
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
