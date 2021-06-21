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
    "revision": "34d0df991b92c7e83f37bc2b327457a6"
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
    "url": "assets/js/14.c7c99f4d.js",
    "revision": "7f1796dbab5344718cdbd1fd2adfd3fa"
  },
  {
    "url": "assets/js/15.eee67e7a.js",
    "revision": "22471caf47f4e739d44e3c315d25310c"
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
    "url": "assets/js/20.b67b1321.js",
    "revision": "3a18e6336fc4ddf30f0becae7d3771ed"
  },
  {
    "url": "assets/js/21.b3ee3eb5.js",
    "revision": "52182752b46e904f6134061a056854b3"
  },
  {
    "url": "assets/js/22.816a3f75.js",
    "revision": "c6f693d0d1b376848f9ae52f46453f97"
  },
  {
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.1036e2f4.js",
    "revision": "63b50e77d5442ca4c5f7a8cfc891be2e"
  },
  {
    "url": "assets/js/25.afa06fba.js",
    "revision": "f87ef4a00979922fa9888042634c57b8"
  },
  {
    "url": "assets/js/26.fc186920.js",
    "revision": "b27e043e230122e559f057e83427c22a"
  },
  {
    "url": "assets/js/27.d8ecb2e6.js",
    "revision": "78c3b09f5b1642cd3e63c30748bb1bd4"
  },
  {
    "url": "assets/js/28.42d80a32.js",
    "revision": "0cb24d70636bf1edca977163c6e8193e"
  },
  {
    "url": "assets/js/29.e41fdc33.js",
    "revision": "66521654905e43f1db06d5eed088eb45"
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
    "url": "assets/js/31.26d85540.js",
    "revision": "676f72bc3ae80a74208d0c1a99e9c862"
  },
  {
    "url": "assets/js/32.c1cba075.js",
    "revision": "630ca793304da8fb2d494c806391a174"
  },
  {
    "url": "assets/js/33.2cce1699.js",
    "revision": "b015bad31b8cd7e510a52629dc74449e"
  },
  {
    "url": "assets/js/34.6cadf305.js",
    "revision": "1157a7b0786eb6a9403e02b0aeb7aa52"
  },
  {
    "url": "assets/js/35.08c8c5ad.js",
    "revision": "2ec2ccbc13c5a06f18ce1ccb6a74e5bb"
  },
  {
    "url": "assets/js/36.20d0d820.js",
    "revision": "5e5ad97daa1b3bae636d7ce0f80e5600"
  },
  {
    "url": "assets/js/37.6c8a5f43.js",
    "revision": "e826e38666b2d8f8aee146614106d6f4"
  },
  {
    "url": "assets/js/38.68773981.js",
    "revision": "49cbe0ebf140627175bfc1cf6edd3d66"
  },
  {
    "url": "assets/js/39.eb40160c.js",
    "revision": "f81589c4aedb332220a2cad11d09a8ed"
  },
  {
    "url": "assets/js/4.dc6a372d.js",
    "revision": "449f9288e9800b77b63f92596609fd91"
  },
  {
    "url": "assets/js/40.2e91a805.js",
    "revision": "7d52a3204ce14c58c4820b9bd14b6d4f"
  },
  {
    "url": "assets/js/41.e8cec050.js",
    "revision": "6a9540581f3bc76f2ea3ccb42efe2db0"
  },
  {
    "url": "assets/js/42.e580592d.js",
    "revision": "4d0f3685d17912bfa1e03420aec9aa23"
  },
  {
    "url": "assets/js/43.630852fb.js",
    "revision": "04c753f82380751baf5f81a3fe17667d"
  },
  {
    "url": "assets/js/44.9e6ffd19.js",
    "revision": "cbc6dec7009281fc539df42198ec193b"
  },
  {
    "url": "assets/js/45.9221d309.js",
    "revision": "dfd927eb71f4649adee270a86aff77bc"
  },
  {
    "url": "assets/js/46.ce812038.js",
    "revision": "f09a97621b9553f8a417336332d57314"
  },
  {
    "url": "assets/js/47.d7da6ecb.js",
    "revision": "ce3ffef9144b878a768bd0cae0b04716"
  },
  {
    "url": "assets/js/5.e26d7ec2.js",
    "revision": "06075a0f63f0d3b4048e098a8f038662"
  },
  {
    "url": "assets/js/6.79e579ec.js",
    "revision": "ac5c7db22d3eda2c3adb680ab94effce"
  },
  {
    "url": "assets/js/7.7244ce27.js",
    "revision": "fc43001207d46fe098eb2e6c8941dfc1"
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
    "url": "assets/js/app.31aebfac.js",
    "revision": "2e5c9b707bb304627922ee6f7f0ff608"
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
    "revision": "dc731fcc98237c29dd169753b7dbe995"
  },
  {
    "url": "category/index.html",
    "revision": "d04d577a53ae202064a99bd9f5def1ac"
  },
  {
    "url": "egg/index.html",
    "revision": "cb69fd72f00c6f9d25ea3f8760eb0834"
  },
  {
    "url": "electron/index.html",
    "revision": "2db7ec68d7db055412f0b293074f7e9d"
  },
  {
    "url": "extra/index.html",
    "revision": "f909d8ad865aea41dc47e120186344c3"
  },
  {
    "url": "flutter/index.html",
    "revision": "b86b8aa2f41488f7185fe7a47ff8bb6c"
  },
  {
    "url": "flutter/test.html",
    "revision": "f1db3b089b9a8997cb722e486b77667d"
  },
  {
    "url": "guide/changelog.html",
    "revision": "f5f0dfffde65848b3c7ac52be84f8929"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "ea64ae297c15b081e627d35a3ed43802"
  },
  {
    "url": "guide/faq.html",
    "revision": "1933ccd400ef367c68828db36d8b5e61"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4ec2bb192b42841944d0560bbf05a6d5"
  },
  {
    "url": "guide/index.html",
    "revision": "a5ebdabec5d17afb199fec015e0eb53f"
  },
  {
    "url": "guide/palette.html",
    "revision": "db5b5a29b7bddadbce6f0a85e2830d38"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "ab7562e5ad42f3cdd51195b2b104c782"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "e400ba254e64e39c28b0e3b9c828358d"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "79203510668dae2a83e949a8da0eadef"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "ee3c42af6f20286e879fb6ff74641971"
  },
  {
    "url": "index.html",
    "revision": "0324c28b203ceee5e00ec8a6399ef689"
  },
  {
    "url": "js/index.html",
    "revision": "8c1293713de178fec8eec50bc455b47d"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "e4120e0a7eab395357652fc7adcb0e97"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "2db18d6eafac481532d2c28b90a0451e"
  },
  {
    "url": "notes/brew.html",
    "revision": "e090d485b1c3bbc535b05f90b255aff4"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "f37cea0bf83e3545750862223c9a2e01"
  },
  {
    "url": "notes/git.html",
    "revision": "b6593ce54c628b290390827b1e599256"
  },
  {
    "url": "notes/index.html",
    "revision": "004d14b0ed881c08453c89391e9034a5"
  },
  {
    "url": "notes/nginx.html",
    "revision": "c214e3c921631806f2aedeb9dbbac62f"
  },
  {
    "url": "notes/node.html",
    "revision": "42e548d3819674a60fc5750728bf9856"
  },
  {
    "url": "notes/npm.html",
    "revision": "fa992ff41dad27f680dd19b20f6fc343"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "670fa4b563a81900635d41fe1cc998a7"
  },
  {
    "url": "notes/vscode.html",
    "revision": "f4ec619b59bf3d8a058bc59a68574c58"
  },
  {
    "url": "plugin/index.html",
    "revision": "c01a741a2c9796449d25c53833427011"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "69096e07e4df9fc3d0043e0e9e078e06"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "239fada3a838774e6a0a81f69edc1b2c"
  },
  {
    "url": "tag/index.html",
    "revision": "df4c71a1005537031d2f8b9009ba2b7a"
  },
  {
    "url": "uniapp/index.html",
    "revision": "9315bb56f0bfb59ab749c2d7e65352be"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "7d052ee215cc0ff75ac764f632579a37"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "b50b261e4238a133eb21a65b68818ec2"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "9005b0721975c3488b4856206f62482d"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "e48a6faec5745051e600f5c23886dbb7"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "89fccbe5415b66b14df41c89522f6867"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "2d3f5fbb33fce9f6d99f5f29004624c5"
  },
  {
    "url": "Vera/index.html",
    "revision": "169bc641857612f6b9ea688bd8d16c85"
  },
  {
    "url": "website/index.html",
    "revision": "422740ce02f4140b41e1af8e6093cb56"
  },
  {
    "url": "website/package.html",
    "revision": "a816f0c84229d9d04547c76c99349bfe"
  },
  {
    "url": "website/rearend.html",
    "revision": "9a368c2aa65782bc6ddd85d28ab83ca9"
  },
  {
    "url": "website/tools.html",
    "revision": "eb0799b83bd53adb43e00575631252e3"
  },
  {
    "url": "website/webclient.html",
    "revision": "4b81f811edc5fc03dc77a40bf1465261"
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
