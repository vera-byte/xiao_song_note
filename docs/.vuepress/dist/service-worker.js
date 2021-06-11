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
    "revision": "661bf466a3483da03e172758d91a6125"
  },
  {
    "url": "assets/css/0.styles.c0852b21.css",
    "revision": "7e72bef6c438a17f1226fe90c3d5355c"
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
    "url": "assets/js/15.5f6c4978.js",
    "revision": "2c02c368b76f737a58fb5a0fc39a5001"
  },
  {
    "url": "assets/js/16.9b099755.js",
    "revision": "e0c2b1bae224d143a7d93862faa96995"
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
    "url": "assets/js/19.1259a16e.js",
    "revision": "e802ea982789b61fc3cfce9430e269df"
  },
  {
    "url": "assets/js/2.60c139d6.js",
    "revision": "7f1482f3782f9ae1111f3793f8f6effb"
  },
  {
    "url": "assets/js/20.1f916594.js",
    "revision": "c3ef00fa260ee5552cdeeecc076446b5"
  },
  {
    "url": "assets/js/21.d89d4bfb.js",
    "revision": "a7e53d80488172624035b180ced2553f"
  },
  {
    "url": "assets/js/22.cbe08c2b.js",
    "revision": "bd6991a9ed6796278df04d855ddc6117"
  },
  {
    "url": "assets/js/23.c8514928.js",
    "revision": "abf09285451180b2e200e31dad71c9fd"
  },
  {
    "url": "assets/js/24.dd36cdbc.js",
    "revision": "74ddf4f037e1b1db076ca5bc3fb1e3d3"
  },
  {
    "url": "assets/js/25.1aa6988d.js",
    "revision": "7353198ab6ff24eea1feb46fda0a4a54"
  },
  {
    "url": "assets/js/26.8405479a.js",
    "revision": "e0b71b3cb4c5278b8734ad9740d546a5"
  },
  {
    "url": "assets/js/27.d1ad48f3.js",
    "revision": "eda6e5ad5274d61a8b275f86a6204e9b"
  },
  {
    "url": "assets/js/28.1fb8589d.js",
    "revision": "0bc7b59c8ecb8c9f50f13a8ab2d17083"
  },
  {
    "url": "assets/js/29.47ac5b6d.js",
    "revision": "8e38cfc275366717ac61ef2c5e001430"
  },
  {
    "url": "assets/js/3.7c8bee9c.js",
    "revision": "26bc8e6c9b76cbd677c51152cb74a46e"
  },
  {
    "url": "assets/js/30.f2c4786f.js",
    "revision": "839a2a18126697584d74b5d9cdf6e556"
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
    "url": "assets/js/33.439f6238.js",
    "revision": "6c4e06a430d74161d7a1ac112996d50d"
  },
  {
    "url": "assets/js/34.8d6649cb.js",
    "revision": "e2406c5fcfbdf64039ff4e69c6cc6c49"
  },
  {
    "url": "assets/js/35.35fc3e86.js",
    "revision": "77fbb82b84de80ed2247844ecdd67676"
  },
  {
    "url": "assets/js/36.9662b373.js",
    "revision": "1dc72abf489217fac6667b0db7ec89ac"
  },
  {
    "url": "assets/js/37.b79859ca.js",
    "revision": "926ae20e61845e1a2d07968eb2c9e6dd"
  },
  {
    "url": "assets/js/38.69aaacfd.js",
    "revision": "452fbd671cfb12df7ff20380f4076232"
  },
  {
    "url": "assets/js/39.1ba391b9.js",
    "revision": "a09babdb228ca5d2b3341a2a0eff29de"
  },
  {
    "url": "assets/js/4.7fe303c1.js",
    "revision": "f9754f1c151d7e8bdb7789997d16cc5d"
  },
  {
    "url": "assets/js/40.559375ff.js",
    "revision": "cb83a568b5131225eaab6455211a58be"
  },
  {
    "url": "assets/js/41.0866afb8.js",
    "revision": "7f349a4f95b8b73cb8828329f983a551"
  },
  {
    "url": "assets/js/42.a5bfe4f1.js",
    "revision": "0f692bba9c321a6be24b7d89dd5f639d"
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
    "url": "assets/js/6.1d470a84.js",
    "revision": "d7ab617bcfb0ce0ccb3d09297502e37f"
  },
  {
    "url": "assets/js/7.fc952be3.js",
    "revision": "2907af33f519b41ed21eb705389ca5c2"
  },
  {
    "url": "assets/js/8.37f3b403.js",
    "revision": "3fe7dd52939e79a623b0ff5901ee66e4"
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
    "revision": "3fa1f7642ec035518d3256f4432424ae"
  },
  {
    "url": "category/index.html",
    "revision": "3277e21240a6edd786d9eed2c2f1d1f7"
  },
  {
    "url": "egg/index.html",
    "revision": "ef6b2459464cb87ed03fd9cd72370477"
  },
  {
    "url": "electron/index.html",
    "revision": "8fa82b40ac1fac1d2d843adfdd40e9cb"
  },
  {
    "url": "extra/index.html",
    "revision": "6aedf8e9019f291b95804a39bea98c75"
  },
  {
    "url": "flutter/index.html",
    "revision": "7fd708b0c27d529543ab21bc2a7a6107"
  },
  {
    "url": "flutter/test.html",
    "revision": "36e7ba71b4e62c3a1626b4baeeadff5d"
  },
  {
    "url": "guide/changelog.html",
    "revision": "8bc6a6312089c23c715f8a12b7e69e2d"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "236ce441c07b13e4893e23c8153a6098"
  },
  {
    "url": "guide/faq.html",
    "revision": "48ff6c2ad1b04cd9f2c62646c29e3e35"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b0104f8012cdd8c16e83b4f2b8549259"
  },
  {
    "url": "guide/index.html",
    "revision": "dcab99dff919ce69020767ce1922a61d"
  },
  {
    "url": "guide/palette.html",
    "revision": "27af2a5a529422a2e922459b060be37b"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "ffd128b19181dfa08696f2d749a0c2be"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "1d04251c6984efe53cf5d20f0580e0c7"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "159c9009f9677228d8519e33b10ed2c9"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "9775736e2cb65e59b808b53a24644631"
  },
  {
    "url": "index.html",
    "revision": "d5b54b4cb0b450589dbcd989054a8159"
  },
  {
    "url": "js/index.html",
    "revision": "9178e7bfba21708046be935aef42eb42"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "56f97c8a16d09fdd486595ef8ede7116"
  },
  {
    "url": "notes/brew.html",
    "revision": "a4a9e8d58b210b27ef7334b6f77e5687"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "89a2f0fefa0610e51e325094ee86f45f"
  },
  {
    "url": "notes/git.html",
    "revision": "765e268a89d943cdd981b81686baa419"
  },
  {
    "url": "notes/index.html",
    "revision": "f6a55b3fea5a193a1b546aa429c91705"
  },
  {
    "url": "notes/nginx.html",
    "revision": "dea5c79e69d288efee55ec9188b0c56e"
  },
  {
    "url": "notes/node.html",
    "revision": "ae65581d58d9b36d7ab5d90dba48491e"
  },
  {
    "url": "notes/npm.html",
    "revision": "97aa66a71c822ccd155819c64db3e262"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "65034922c0af1943dce2a0da332b878a"
  },
  {
    "url": "notes/vscode.html",
    "revision": "687f89c9709b51611609b464523b5450"
  },
  {
    "url": "plugin/index.html",
    "revision": "f369fc3e4fb32a294f2abd41092ac2c3"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "a8fc3cc6408d88b26816bda63e5ba2ed"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "a81dc34507229c7f03187933f9bf1e4a"
  },
  {
    "url": "tag/index.html",
    "revision": "bd7831bd656cdd478c96c786a42c5a55"
  },
  {
    "url": "uniapp/index.html",
    "revision": "110270bf07fff87e0d6851ce0d2533ca"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "2a02c8544f541be072d7e23dab7fa8f6"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "0f9d51c48deb374a221f1f6f2df40d8a"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "d947d9693f199878c34346b62a3369a3"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "6054ca71a5beb8aeb327d725c9f52994"
  },
  {
    "url": "Vera/index.html",
    "revision": "e56da4e79d7903c0f4f5493c4d918d53"
  },
  {
    "url": "website/index.html",
    "revision": "815b0f082be2228e6d67ba46c50aca79"
  },
  {
    "url": "website/package.html",
    "revision": "b152c6dc613c39ac74f4f2acd7e9c66a"
  },
  {
    "url": "website/rearend.html",
    "revision": "e99469a1aad8020c19e2cb99d74af4be"
  },
  {
    "url": "website/tools.html",
    "revision": "f8d82015d1fdf8a07c5813905e95b616"
  },
  {
    "url": "website/webclient.html",
    "revision": "3ea409352c9dfdb864c61915ee6cc3a1"
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
