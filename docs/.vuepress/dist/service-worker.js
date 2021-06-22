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
    "revision": "0f9bd444580c8e7513204ef0d27cba87"
  },
  {
    "url": "assets/css/0.styles.51e6d2a2.css",
    "revision": "2757b67a7a4a1e968145b65259a57bdb"
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
    "url": "assets/js/14.9c6ab598.js",
    "revision": "bc8222297e1b55166956ec0ec7616647"
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
    "url": "assets/js/17.d9b922dd.js",
    "revision": "4df5cda44861bde83bf50457a6250c8f"
  },
  {
    "url": "assets/js/18.83f31237.js",
    "revision": "a1546bc0c20a3326c6a45254355d9677"
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
    "url": "assets/js/25.b1030395.js",
    "revision": "ac635e5da571b6625df3e06a51a600fa"
  },
  {
    "url": "assets/js/26.2b8d1dfd.js",
    "revision": "8c868d3136d8dfcd3267e1d437dcf026"
  },
  {
    "url": "assets/js/27.b66ae79f.js",
    "revision": "61e75997619379eb4874589a2e369bd4"
  },
  {
    "url": "assets/js/28.6a3e4410.js",
    "revision": "d9482ed8bb92e1eaab9fa543be066d28"
  },
  {
    "url": "assets/js/29.cda15309.js",
    "revision": "0ad98f9ed9488dd773d228627c9a1ad7"
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
    "url": "assets/js/31.7184f202.js",
    "revision": "fdf7b1f2389696ea24d95fd00dd8efe8"
  },
  {
    "url": "assets/js/32.04ac17df.js",
    "revision": "f8846519cf52bbae488ab1e7c40e00f2"
  },
  {
    "url": "assets/js/33.aba0239e.js",
    "revision": "47f2613e3beafc8de3275adac4187750"
  },
  {
    "url": "assets/js/34.08f8d322.js",
    "revision": "43391fd3ceeaeb668be2d252e67dbfed"
  },
  {
    "url": "assets/js/35.454de91b.js",
    "revision": "f0439a5e4ec5232c64f5951dc40bacb6"
  },
  {
    "url": "assets/js/36.9db42799.js",
    "revision": "57313f149b988977a0691bc6ab35ffc6"
  },
  {
    "url": "assets/js/37.36890e8a.js",
    "revision": "0c71ede7ba4e3cd40cade9e7ef454e64"
  },
  {
    "url": "assets/js/38.ef1ca23e.js",
    "revision": "70a4eadcb60098515685667800fbec7c"
  },
  {
    "url": "assets/js/39.ba18f8b8.js",
    "revision": "9a9b468801bbf06bdbffec7d6a73b4f6"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.963d57b0.js",
    "revision": "ccade69a9c16aba3579324f2c018dd61"
  },
  {
    "url": "assets/js/41.ffb753b3.js",
    "revision": "9c59d75575292847065607f91a5fbe5f"
  },
  {
    "url": "assets/js/42.e3b7d3f7.js",
    "revision": "c6c680ae4c01e60d5dca3ec629798e36"
  },
  {
    "url": "assets/js/43.b2cd2451.js",
    "revision": "c98efce8c854d6e8fc707f644dbf065b"
  },
  {
    "url": "assets/js/44.deb8ed83.js",
    "revision": "26faf043dce5b6668c90acac796a0d1c"
  },
  {
    "url": "assets/js/45.c9b3780d.js",
    "revision": "751730587bc86f3b09ce8740f2c1ed2b"
  },
  {
    "url": "assets/js/46.3003f62d.js",
    "revision": "2e18bc25a63d540e8aee70733a9c266b"
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
    "url": "assets/js/6.712f81f8.js",
    "revision": "b608bdc9026cae5953490217533f0dad"
  },
  {
    "url": "assets/js/7.28b3dd0e.js",
    "revision": "6b96d6daa58f4ca041adcd9131a7ff68"
  },
  {
    "url": "assets/js/8.7cb45502.js",
    "revision": "7670c607252f3cdc4cce9b51b67fb19e"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.f49dd637.js",
    "revision": "508fb68a74e142df752b5c5c501ac869"
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
    "revision": "58eeb290b58534773a7afd4441e643ce"
  },
  {
    "url": "category/index.html",
    "revision": "5d3eb5ca90015f6fbb4948036e4ee7f7"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "c132a293f808ba75dcb450039e6ff003"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "97259e6c765bd555f97b767863a82454"
  },
  {
    "url": "electron/index.html",
    "revision": "9002ceba4c0e55a004da5abe7c841e13"
  },
  {
    "url": "extra/index.html",
    "revision": "e986937541b499f01d033e32910d63cd"
  },
  {
    "url": "flutter/index.html",
    "revision": "a790855b7100e676042c4922b68c6fcc"
  },
  {
    "url": "flutter/test.html",
    "revision": "855b7c6e7ec604cc809fcf40a21480b2"
  },
  {
    "url": "guide/changelog.html",
    "revision": "852769494cc1039cd35a0aab3436b8f3"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "6f0b4344419f6aec3e2967959ab143ed"
  },
  {
    "url": "guide/faq.html",
    "revision": "afd82ce963ecf44d0912601374ad0d0f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "db4b0fa5eb438420a97f6eb2ccea7936"
  },
  {
    "url": "guide/index.html",
    "revision": "b663f98ce6265166438414e34d650341"
  },
  {
    "url": "guide/palette.html",
    "revision": "60d94464ce63bb1005f594d5f439a135"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "677651ae1206e0aee970cc8914cfb7d1"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "348006c29a941fe7e78a21150589a135"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "438c8ff6defc9deb5e30c64d8b044527"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "2a85f4ab9e967bc8f42ed6e33ed70b70"
  },
  {
    "url": "index.html",
    "revision": "66a15700cbaaed0f3871a3fdc9ea4923"
  },
  {
    "url": "js/index.html",
    "revision": "ccfef21cf77745e2b5976e983005b751"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "51c6abbeabf678980f20c0f51f2a410f"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "6241ae454fa2639306503e8576cb3094"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "06d74cc498d51ca0ae8a38746651dd7e"
  },
  {
    "url": "midway/index.html",
    "revision": "56e6d2d4b57104d7c9554b013b2173c9"
  },
  {
    "url": "notes/brew.html",
    "revision": "e44d2cc79040590a471f37270cc1a37e"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "9f976b319844a319810e0471db239553"
  },
  {
    "url": "notes/git.html",
    "revision": "936149dc296ac728b563f894c0de88cd"
  },
  {
    "url": "notes/index.html",
    "revision": "6f3ca0e8c34d0a1d64d3f13b1da2cfe6"
  },
  {
    "url": "notes/nginx.html",
    "revision": "7ace8146b129734e3ec89665827a8643"
  },
  {
    "url": "notes/node.html",
    "revision": "9739bff6c667b192f5c2edb6f7297e96"
  },
  {
    "url": "notes/npm.html",
    "revision": "d030ec7f33333364d110f8e91ccbd72b"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "5818fd6c7022a4a23ec0589e85599bc3"
  },
  {
    "url": "notes/vscode.html",
    "revision": "97449f80b6565cfcb57f410137a1f975"
  },
  {
    "url": "plugin/index.html",
    "revision": "f0d6d73884b79a1ab6d889fa9bf16e05"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "6b7a6d2abf20231a2fe552cebd525083"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "f0c6455427ae80fb20ad4067b5094ad3"
  },
  {
    "url": "tag/index.html",
    "revision": "dd8775d98ee40477c990fbd009ecb2aa"
  },
  {
    "url": "uniapp/index.html",
    "revision": "15ce66ef1f929112b058ab99045fb6e8"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "f85eb546ee9595ae37f4b09a84836d81"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "ab47535c98c8133a57b2b643b3c973f0"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "313992a2e896cb6f52e07be971643132"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "0855616bb09a70f4a913b152586d2b08"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "988e35dba20bab82a65d5f1880316d13"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "85040ddaa4645e1265107b63fe132b28"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "3b1dd2524ae0ba7667a44b6338407a90"
  },
  {
    "url": "Vera/index.html",
    "revision": "d37b941b5c1f9e369f54bb08b32a8847"
  },
  {
    "url": "website/index.html",
    "revision": "16c96e078a94f7ff1286ee77b7ba510b"
  },
  {
    "url": "website/package.html",
    "revision": "997c821f36d1fa6f3df851295f6500b8"
  },
  {
    "url": "website/rearend.html",
    "revision": "7e6cadbe15713a83a10b0aae00e05cba"
  },
  {
    "url": "website/tools.html",
    "revision": "eee861ce0acd0f3ebc694ec40cb3bc18"
  },
  {
    "url": "website/webclient.html",
    "revision": "9d5d58f947e89a35eceae5f21ae6e798"
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
