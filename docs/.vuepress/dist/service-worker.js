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
    "revision": "68bfc0645d7cfde2d0268ec902c4f40b"
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
    "url": "assets/js/12.c05b3e4f.js",
    "revision": "9fe6f89034a2362348c20957ee0fac94"
  },
  {
    "url": "assets/js/13.269b2422.js",
    "revision": "bf7c9eeaa688bcc2efe676bf1a1d8f88"
  },
  {
    "url": "assets/js/14.ce6fc430.js",
    "revision": "5da39aa2c7aae5f144dc2fabb2dbe7ff"
  },
  {
    "url": "assets/js/15.4099772c.js",
    "revision": "fa35b816eca62838039eb6d835956910"
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
    "url": "assets/js/2.60c139d6.js",
    "revision": "7f1482f3782f9ae1111f3793f8f6effb"
  },
  {
    "url": "assets/js/20.40609f49.js",
    "revision": "4da3361719a01e9c0f4accf6bb77ad35"
  },
  {
    "url": "assets/js/21.1e29291a.js",
    "revision": "e58fc3eed54aebca5331df36c1ad5870"
  },
  {
    "url": "assets/js/22.5aec31ed.js",
    "revision": "2b98e5a5dabf2f9fd886b777508a22fa"
  },
  {
    "url": "assets/js/23.0c7ea5ea.js",
    "revision": "91ace1a0478da787b6e1826018c22773"
  },
  {
    "url": "assets/js/24.fcf295fb.js",
    "revision": "0b5bccdae73d994f06a73ce81aab4955"
  },
  {
    "url": "assets/js/25.529a43da.js",
    "revision": "e58552326557e594386193251c58a280"
  },
  {
    "url": "assets/js/26.88e5894c.js",
    "revision": "03c42edc7ea13674afc9c852f1fa4af6"
  },
  {
    "url": "assets/js/27.3a8a44b4.js",
    "revision": "1237ba63d540d394dcf65a127edf182a"
  },
  {
    "url": "assets/js/28.1a777ea5.js",
    "revision": "c56397784aadcd83bde224aa0f2df4fe"
  },
  {
    "url": "assets/js/29.35a41f3e.js",
    "revision": "b1be50fd60403298554ec53f38c123c8"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.cea06493.js",
    "revision": "1298c489dfb1061d97836059401ea5dd"
  },
  {
    "url": "assets/js/31.a7ea0507.js",
    "revision": "e5e7922c5465b689d1b140ee1c014a18"
  },
  {
    "url": "assets/js/32.cbc286da.js",
    "revision": "fdf02fb9ff013425eb6151e7dc0403f1"
  },
  {
    "url": "assets/js/33.c7ba0c1a.js",
    "revision": "6c6ca1b064d80a10220c72547005257a"
  },
  {
    "url": "assets/js/34.8d6649cb.js",
    "revision": "e2406c5fcfbdf64039ff4e69c6cc6c49"
  },
  {
    "url": "assets/js/35.9ad46d62.js",
    "revision": "b6dd6435b641994ebfcd56d365ffa81c"
  },
  {
    "url": "assets/js/36.9662b373.js",
    "revision": "1dc72abf489217fac6667b0db7ec89ac"
  },
  {
    "url": "assets/js/37.145b9d28.js",
    "revision": "d90959c02b21d3a6d6dcf3aaad6073bd"
  },
  {
    "url": "assets/js/38.852223a3.js",
    "revision": "7917e08872e069a5fd6b5e334638fce5"
  },
  {
    "url": "assets/js/39.ae15d44b.js",
    "revision": "3b14b8731efae8624163b36dc870aeea"
  },
  {
    "url": "assets/js/4.7fe303c1.js",
    "revision": "f9754f1c151d7e8bdb7789997d16cc5d"
  },
  {
    "url": "assets/js/40.36e8932e.js",
    "revision": "0ee55fd64bc77dda4c859be12d758da3"
  },
  {
    "url": "assets/js/41.0866afb8.js",
    "revision": "7f349a4f95b8b73cb8828329f983a551"
  },
  {
    "url": "assets/js/42.13afb8e8.js",
    "revision": "e60534c4a6f3c2d80fcf4faef38e1426"
  },
  {
    "url": "assets/js/43.161c0c63.js",
    "revision": "3e8eb864276948b549b77953c89fe917"
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
    "url": "assets/js/7.bc180b5d.js",
    "revision": "89019047416b7c23801c64c81f225804"
  },
  {
    "url": "assets/js/8.f7698771.js",
    "revision": "35db8317e3de481906f35b2202fc2616"
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
    "revision": "80194a95fbd6c5b0c62e5c674a73bacb"
  },
  {
    "url": "category/index.html",
    "revision": "1474733b6afa450d26e61554808228cc"
  },
  {
    "url": "egg/index.html",
    "revision": "a3c654c0add9e1abbef515b983e3223d"
  },
  {
    "url": "electron/index.html",
    "revision": "d3c5c4866d84bca3dee84842684c48f6"
  },
  {
    "url": "extra/index.html",
    "revision": "3608f7d12b1520a1ebe66101461f0226"
  },
  {
    "url": "flutter/index.html",
    "revision": "b999d3ad612c0ad338f968381ec2180d"
  },
  {
    "url": "flutter/test.html",
    "revision": "cd2f6e09d6560dfcb04d9b5a3ba6092b"
  },
  {
    "url": "guide/changelog.html",
    "revision": "b63747eae559586e52d1c55fc3eaa8b8"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "e378fd8aae589844b803b420f5bbf5af"
  },
  {
    "url": "guide/faq.html",
    "revision": "ab3f9148c1548d306551a9c5e62359ea"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "66307885f717d64dd9f5f62b1c3252ba"
  },
  {
    "url": "guide/index.html",
    "revision": "a99293939c3dab17c5eeef4a83081f17"
  },
  {
    "url": "guide/palette.html",
    "revision": "1e800c219b54b9f4ad2bd9e64b3613dd"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "12f3fbf35c72406b53cbacf19802eb48"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "f69fa1ff1cca363b47af40d8f0e4d058"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "cf731b3d52c48bec5e9528df23980d56"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "3333e25fb88e8aab096fdc910ba55b3c"
  },
  {
    "url": "index.html",
    "revision": "6e0e8099c6c50fc770523ec896279a49"
  },
  {
    "url": "js/index.html",
    "revision": "736836ea6f2a0978e4e21af0114f0be0"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "b3253ada723fdaa1e96c490c66b84d2a"
  },
  {
    "url": "notes/brew.html",
    "revision": "de4a6c532af6e7886b91deddb4e26b2b"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "4adb3ee124985ffa12338a5607d306af"
  },
  {
    "url": "notes/git.html",
    "revision": "408609ec53ea246156799f0cab529171"
  },
  {
    "url": "notes/index.html",
    "revision": "f7fad4c808f33ba2686389d388c392ee"
  },
  {
    "url": "notes/nginx.html",
    "revision": "d1b9d0986aaa8bf4e733019f3d57f532"
  },
  {
    "url": "notes/node.html",
    "revision": "c3dee24bb787475b72943bc3c62bb501"
  },
  {
    "url": "notes/npm.html",
    "revision": "6fba17b50ceb64ec61854ce7ace008b5"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "8e3a44fd9d4f7ab594113dfe330396df"
  },
  {
    "url": "notes/vscode.html",
    "revision": "ce063f89447431e13c58be05a4e60c8c"
  },
  {
    "url": "plugin/index.html",
    "revision": "007dce8cccd6a5d0c05eae257949bf8c"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "1ea634319720fce261ad140c0cdb2230"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "760a07787c02a4d60483d4d60b50e0d0"
  },
  {
    "url": "tag/index.html",
    "revision": "86130a633fb8e083b7c3f2f2b800f747"
  },
  {
    "url": "uniapp/index.html",
    "revision": "3000e005228bdc23f1d5497c57d67dde"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "b2c541fb724456e3e663d7a85d8215c8"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "03f9ab9cd8b60986b93ef0bbf2a386d4"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "e045d81146d3422f3a461f93ec48a30b"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "23d7bd669f0d664c7344c155e2220b60"
  },
  {
    "url": "Vera/index.html",
    "revision": "0a0916ce193b39d4e285ec30391434d8"
  },
  {
    "url": "website/index.html",
    "revision": "1660c5fefd5a53117da2ac970fac521b"
  },
  {
    "url": "website/package.html",
    "revision": "df3aca4aa9fdee30ba2d8f4b2a43c185"
  },
  {
    "url": "website/rearend.html",
    "revision": "ae6f62899844216aad30d3635342f6b8"
  },
  {
    "url": "website/tools.html",
    "revision": "986093a40a0a53585e7554a2dd8ae4af"
  },
  {
    "url": "website/webclient.html",
    "revision": "f3990b3c12b4a773ff8afbb7d4d80d8f"
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
