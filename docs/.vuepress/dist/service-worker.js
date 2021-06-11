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
    "revision": "76a87b229f02ed786c9299396b762574"
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
    "url": "assets/js/14.d8ea1af0.js",
    "revision": "446025afd89ba81ba7cbe5844adbcd27"
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
    "url": "assets/js/17.f37b0c40.js",
    "revision": "fe483fdb34061a3e0a2e1440eba4bfc3"
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
    "url": "assets/js/20.fb9bc978.js",
    "revision": "f6444af01be5d414cbe25594ff9a8053"
  },
  {
    "url": "assets/js/21.0e899ba5.js",
    "revision": "84cf6a9ed0a59ccc3c2cbd3104bb0fa8"
  },
  {
    "url": "assets/js/22.5aec31ed.js",
    "revision": "2b98e5a5dabf2f9fd886b777508a22fa"
  },
  {
    "url": "assets/js/23.3c46fa9b.js",
    "revision": "c0aff523d5907c5e2f17172c6bb4a6ea"
  },
  {
    "url": "assets/js/24.82e3f245.js",
    "revision": "65cd01d63b2b740c6e202d821750028c"
  },
  {
    "url": "assets/js/25.2da3debb.js",
    "revision": "a1e6522a6f8fcc39553a8d4502b29880"
  },
  {
    "url": "assets/js/26.2f872a58.js",
    "revision": "e84832d9f22ec70e5087f1da5791cd5b"
  },
  {
    "url": "assets/js/27.56213c72.js",
    "revision": "d9ccdb5660d1b684f913a1dc402d7df8"
  },
  {
    "url": "assets/js/28.f0ee7bca.js",
    "revision": "70a49bfd45652dd0b3d9c14a83081723"
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
    "url": "assets/js/34.2e30dcc6.js",
    "revision": "a57136d48d6495fb4e6fe43bab9ba22e"
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
    "url": "assets/js/37.0198197d.js",
    "revision": "96526fa15c6bd415aacc82b87629fb79"
  },
  {
    "url": "assets/js/38.7cd504b1.js",
    "revision": "09029ff587aa39252fe8c5093cb2d586"
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
    "url": "assets/js/40.559375ff.js",
    "revision": "cb83a568b5131225eaab6455211a58be"
  },
  {
    "url": "assets/js/41.acafaa44.js",
    "revision": "09d3e4770a3d889eb0703b2bd9199624"
  },
  {
    "url": "assets/js/42.e5a1c5bb.js",
    "revision": "35036ca764ab768cbe9af60f90c6ef3d"
  },
  {
    "url": "assets/js/43.921b2aca.js",
    "revision": "0d123ba829d6ba0162e2f0baec019ffe"
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
    "url": "assets/js/7.0667e226.js",
    "revision": "62b8bf72b43c1963886a019cf91b3233"
  },
  {
    "url": "assets/js/8.401a05c1.js",
    "revision": "bca557ef158dbdbe8a37163ebff766c3"
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
    "revision": "30e744f3e528d605b2cced89cc37b8b0"
  },
  {
    "url": "category/index.html",
    "revision": "ba6003f2357032ec256631d716c66a66"
  },
  {
    "url": "egg/index.html",
    "revision": "254d8f52ac102151c0c8ef1aaacd549a"
  },
  {
    "url": "electron/index.html",
    "revision": "84e8416854b4e5f17e91dd6c186fd8b8"
  },
  {
    "url": "extra/index.html",
    "revision": "3d5aa7f10703a4670762f033a2d0bba0"
  },
  {
    "url": "flutter/index.html",
    "revision": "0abb09f65cb2f68cf93954ca955577eb"
  },
  {
    "url": "flutter/test.html",
    "revision": "64d6dbb7e1f75b839466e8229cdcbb6d"
  },
  {
    "url": "guide/changelog.html",
    "revision": "d8f65be1f539a18a28c598b5aeb91f8a"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "3cde88095a218bf660d9486fbcaf6228"
  },
  {
    "url": "guide/faq.html",
    "revision": "69c407d547a2c81c8f02d69159412e8f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "76e2124fb44d53bc972fe28ba0a792af"
  },
  {
    "url": "guide/index.html",
    "revision": "454e92b6351adc028df1c3a74bec34ea"
  },
  {
    "url": "guide/palette.html",
    "revision": "eaa67b06be10ee0ce8b82fde35dd9af5"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "4a31738bcf237331f51aca579470ed80"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "9f82d9aeef66206bd7d10efa3f3b403f"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "7b9b18205b45f60f12a73ff1fcdeae6f"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "aa544bd59cbadacd9fc0b42fafd1e15b"
  },
  {
    "url": "index.html",
    "revision": "4b31e4e2d2c801885fefb2c36a82ef79"
  },
  {
    "url": "js/index.html",
    "revision": "83c2786d471e9e6e140809ac78f884d9"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "e44831c83964e536f68fa79bc90a5482"
  },
  {
    "url": "notes/brew.html",
    "revision": "b60109f24bce0e9752f93769b42ab958"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "80224f25fb287bb425f16d707deb4258"
  },
  {
    "url": "notes/git.html",
    "revision": "71f9d5335b51bf4b468144f33cd96a7f"
  },
  {
    "url": "notes/index.html",
    "revision": "45883c33de7343814a2a41d20818d9c1"
  },
  {
    "url": "notes/nginx.html",
    "revision": "6a7e106d9d8af510fd30a4ecd9e47f61"
  },
  {
    "url": "notes/node.html",
    "revision": "5e9de2fc68dc443da10857650cdae037"
  },
  {
    "url": "notes/npm.html",
    "revision": "30e2153ba3ef6fcd361a0640a5c37cca"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "c8da7e472f6c70ee8e4f0209aabcf050"
  },
  {
    "url": "notes/vscode.html",
    "revision": "d88eee6eb5f0af8cb83a0829aa0210b0"
  },
  {
    "url": "plugin/index.html",
    "revision": "2689583853cfa06892945ad94efeef5d"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "28504360571d573fecadd5886807c9c8"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "89d8d0db3dadf342374604338a63dc9b"
  },
  {
    "url": "tag/index.html",
    "revision": "7cf87c6c6d0df78f7c200db1f981ac06"
  },
  {
    "url": "uniapp/index.html",
    "revision": "c210f748188feb899d7c52464a11d16e"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "e2b6b3603d45fa4962eb4aab0e6aaca6"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "c58e48bb1ad8ec4b7f61d638ba200e84"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "663071eb6d59b576f5031193974c7dd8"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "eb778c43a5872354724416808a774a00"
  },
  {
    "url": "Vera/index.html",
    "revision": "ba248aa4a7e7bce52a1bef0bb4907033"
  },
  {
    "url": "website/index.html",
    "revision": "332a539408502326c24f0fcbe416c596"
  },
  {
    "url": "website/package.html",
    "revision": "7bb5601558c8c95f1aead7305fc47034"
  },
  {
    "url": "website/rearend.html",
    "revision": "2e7ad035407e27245215f7ff3f38569c"
  },
  {
    "url": "website/tools.html",
    "revision": "f870b8214cdcb29bb84987d390f04ec6"
  },
  {
    "url": "website/webclient.html",
    "revision": "178655bb782705d83b7ed882f936550c"
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
