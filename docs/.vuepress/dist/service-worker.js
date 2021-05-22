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
    "revision": "58911d4aa12fb74e4e8162b9474e15a4"
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
    "url": "assets/js/13.269b2422.js",
    "revision": "bf7c9eeaa688bcc2efe676bf1a1d8f88"
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
    "url": "assets/js/19.b20b52c4.js",
    "revision": "2789234b482d7f778b930c4e6467f46b"
  },
  {
    "url": "assets/js/2.4d5c24b7.js",
    "revision": "7f1482f3782f9ae1111f3793f8f6effb"
  },
  {
    "url": "assets/js/20.fa37370d.js",
    "revision": "e1a624ce615b1c408f2d53dbf910a168"
  },
  {
    "url": "assets/js/21.d89d4bfb.js",
    "revision": "a7e53d80488172624035b180ced2553f"
  },
  {
    "url": "assets/js/22.6f90b05e.js",
    "revision": "52cb17f1ff64b0764df658e7d315cfa4"
  },
  {
    "url": "assets/js/23.3c46fa9b.js",
    "revision": "c0aff523d5907c5e2f17172c6bb4a6ea"
  },
  {
    "url": "assets/js/24.f472e6bc.js",
    "revision": "9384737b93f52cf2908a53fd5ff77947"
  },
  {
    "url": "assets/js/25.5d1e4843.js",
    "revision": "71a19ce19b5f81e2de429b33fad2f042"
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
    "url": "assets/js/32.fe4d11ef.js",
    "revision": "e6d489f6238ea0386c454590391941bb"
  },
  {
    "url": "assets/js/33.072f8ac4.js",
    "revision": "d93549f0a0ec11c25b748bdee0599ca1"
  },
  {
    "url": "assets/js/34.2e241193.js",
    "revision": "f1305bebf9c89f8d266c4236539f89c9"
  },
  {
    "url": "assets/js/35.a91f4f74.js",
    "revision": "191112f22f5577a0467913800e3dfa75"
  },
  {
    "url": "assets/js/36.32223a5a.js",
    "revision": "121ba533c7a157e347bdd7da9c32dcad"
  },
  {
    "url": "assets/js/37.d89267fb.js",
    "revision": "eb05d3970abfedf8f9663c35788309a7"
  },
  {
    "url": "assets/js/38.941f557e.js",
    "revision": "91f543f86f9fac27160fc3793eec5e08"
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
    "url": "assets/js/40.dbd14d51.js",
    "revision": "6209cb8cb13c7859f6c974f98a5b1119"
  },
  {
    "url": "assets/js/41.adba80a2.js",
    "revision": "f712e2c17f3223e4680ebe4721522bae"
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
    "url": "assets/js/6.0ac6ea6a.js",
    "revision": "311d40135920987b2cbaa6250e39cc0f"
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
    "revision": "4d027d8bfd6e9f6206e55f385dc19201"
  },
  {
    "url": "category/index.html",
    "revision": "03b73de8f07036021eacffa565b1df7e"
  },
  {
    "url": "egg/index.html",
    "revision": "816d2a2c07b45adc39e5f248388542bc"
  },
  {
    "url": "electron/index.html",
    "revision": "de8a4164ffa3390eff4791ddfb03f7fa"
  },
  {
    "url": "extra/index.html",
    "revision": "e90f566e0d2deb4deacbd442a5b2d5ef"
  },
  {
    "url": "flutter/index.html",
    "revision": "5209b31327098bf22b03aa13a72dfd0a"
  },
  {
    "url": "flutter/test.html",
    "revision": "8f171a68954f1a0a928ed88ed0fa3049"
  },
  {
    "url": "guide/changelog.html",
    "revision": "0c2bd2d6943bc4c38b9b26ee978ff22c"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "0469c575b566cdd6d67abb95b2178b2d"
  },
  {
    "url": "guide/faq.html",
    "revision": "3952deecc03c9b794db6c00f531862ef"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "49c55b01a2858442bcd4612d09aa3884"
  },
  {
    "url": "guide/index.html",
    "revision": "9cbd94f6acc4ab5a270b87d5392ea323"
  },
  {
    "url": "guide/palette.html",
    "revision": "f2360645f2c601aea607fb75aced0b20"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "391f70903716ad1671afcc14f1b89ced"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "7411561a90983cc5e27a910020923a6b"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "4549d2ba8918e84ed98f6da42b2c8b1e"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "921f8e09992f87003201d732ea3b949a"
  },
  {
    "url": "index.html",
    "revision": "07fc102290ed56d9eedfe8cd1ea03f83"
  },
  {
    "url": "js/index.html",
    "revision": "5268d2d066ba1893f26eb0d6c5a45da6"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "81ee3f667e48a1875aac05b4946e0f5d"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "2f98dc7f21c4377469a9225ac50fe4dc"
  },
  {
    "url": "notes/git.html",
    "revision": "8593dc373028486db74d9273f8633a0c"
  },
  {
    "url": "notes/index.html",
    "revision": "90d06a01d938d5e76b1f103fed77fbcf"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a5b5a516d98d3e120e7a1cda4ec29421"
  },
  {
    "url": "notes/node.html",
    "revision": "7c3fb6225c63a8ad275993ee1f5715af"
  },
  {
    "url": "notes/npm.html",
    "revision": "9403c17ee262c8e37235a783753cca82"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "3efcfc9b620c77998d9ca95602509551"
  },
  {
    "url": "notes/vscode.html",
    "revision": "e9d610b6107db1a6f3bc1ea55bf1c3ba"
  },
  {
    "url": "plugin/index.html",
    "revision": "fe1519361b6dcd008bab536f3db26579"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "82a8429c20fa61af75b387a9b88dd242"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "3f6f5381836b411ebe844882e1e64356"
  },
  {
    "url": "tag/index.html",
    "revision": "f0f026a523b0f910daf4d8a5fd28f59c"
  },
  {
    "url": "uniapp/index.html",
    "revision": "9f568ab7a4030f295a7c0835e60f5deb"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "e3dd24d4cd29ae4a98f788d175dba3b5"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "04c833a441f2bc84c41f734617916427"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "03e5af5d68144b935719d39e73e19ede"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "b8546f93cc5740d646ce6aeaae6cb660"
  },
  {
    "url": "Vera/index.html",
    "revision": "09ef14fd90d143bc9699aeb94415536b"
  },
  {
    "url": "website/index.html",
    "revision": "49672912a4bcadf76bf6e0c11d4d75d1"
  },
  {
    "url": "website/package.html",
    "revision": "b9d0c01c8ebf1f50b9d04922744d85fb"
  },
  {
    "url": "website/rearend.html",
    "revision": "8fca4f6b1118f0aab56b7fa129bae762"
  },
  {
    "url": "website/tools.html",
    "revision": "311987f67081d4255be0a2b86ecac23e"
  },
  {
    "url": "website/webclient.html",
    "revision": "8f5ca87173eabb659a8fd746813ada0c"
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
