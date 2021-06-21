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
    "revision": "9ae9f9e1c8a96ca033c56677786c9a2c"
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
    "url": "assets/js/13.c37a5990.js",
    "revision": "e9526202cb53e49d4b144412c92237a7"
  },
  {
    "url": "assets/js/14.d0f33a9b.js",
    "revision": "84b08d6f07cf744b3902433e7e8fda48"
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
    "url": "assets/js/17.d618ee3a.js",
    "revision": "333f8bf627cd7652320f5eeb32de097f"
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
    "url": "assets/js/22.e520653a.js",
    "revision": "fbbd4a50680827cafdbe70b351f947e9"
  },
  {
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.eb40536f.js",
    "revision": "ee4c75b3ebb52b86a5712968ea80b398"
  },
  {
    "url": "assets/js/25.851fc78e.js",
    "revision": "3d7d2b7c0780895270290cd943970d5a"
  },
  {
    "url": "assets/js/26.5a2c499d.js",
    "revision": "016b060122e4513a810258237fb54b24"
  },
  {
    "url": "assets/js/27.993797ad.js",
    "revision": "8c8fbb7b29104fc2fe9e622bf250166a"
  },
  {
    "url": "assets/js/28.f2c183be.js",
    "revision": "4f8304e785798d2618711c321d3efb0c"
  },
  {
    "url": "assets/js/29.d59dc8fe.js",
    "revision": "4f1be4165ea7572eb6bc66b5ca7b583b"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.21b711d8.js",
    "revision": "89b7b83450487f93ea13e01a2d2f1175"
  },
  {
    "url": "assets/js/31.528c5df6.js",
    "revision": "db5b64772d96974535207579f7d54aad"
  },
  {
    "url": "assets/js/32.15270a6b.js",
    "revision": "d7bf58591d0d1249a5a43e58e663c5ae"
  },
  {
    "url": "assets/js/33.4a4df23b.js",
    "revision": "f20a4023d01d3285a49a6b1b29d53e44"
  },
  {
    "url": "assets/js/34.dd0048e6.js",
    "revision": "635c55ca774ac69d8d0f51d79487dff9"
  },
  {
    "url": "assets/js/35.30af4d92.js",
    "revision": "35dc472daecd60bfed41e63a7bf2a648"
  },
  {
    "url": "assets/js/36.49f9eca7.js",
    "revision": "c4f149dd969a63d052dd5efa82b4971c"
  },
  {
    "url": "assets/js/37.af302353.js",
    "revision": "a34ca2d504ef3059d5049a1dd85e5091"
  },
  {
    "url": "assets/js/38.8a5b24f3.js",
    "revision": "f8741486c9af816867f782491455e8b3"
  },
  {
    "url": "assets/js/39.7d8fc8ef.js",
    "revision": "5f74817032645b157d4935928b36492b"
  },
  {
    "url": "assets/js/4.fa6ed8fd.js",
    "revision": "ed64aadac9c4bff81317b5f923b2083a"
  },
  {
    "url": "assets/js/40.09acf456.js",
    "revision": "cf1f0154b2f47b8d03cf83fba361ddd8"
  },
  {
    "url": "assets/js/41.81584133.js",
    "revision": "de14b311932be8d34079ac7ad5e47558"
  },
  {
    "url": "assets/js/42.7ecc15d6.js",
    "revision": "7ad99c075807f8bbce3e8f5b6f272574"
  },
  {
    "url": "assets/js/43.cf104027.js",
    "revision": "796bdfce00774bbc00fc609a1ac51de5"
  },
  {
    "url": "assets/js/44.2b0e9370.js",
    "revision": "dfb252db4288141eb04e5dc6c4983592"
  },
  {
    "url": "assets/js/45.0f027aad.js",
    "revision": "0c8282bc446b2e3e312d80b97e7633c3"
  },
  {
    "url": "assets/js/46.ce2a1740.js",
    "revision": "b96242a2d8566d5cbd56384821e03fa7"
  },
  {
    "url": "assets/js/47.efce2342.js",
    "revision": "f290ad0b7af2c7f091dffcb111a7ebfb"
  },
  {
    "url": "assets/js/48.3e1f4b33.js",
    "revision": "26f4945def558836ff5a8a695298a3bd"
  },
  {
    "url": "assets/js/49.95650c83.js",
    "revision": "c958f3298615b92829a8d547b0081828"
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
    "url": "assets/js/7.a1733b12.js",
    "revision": "9f2e2be4699cb17e898a68cf6acd017d"
  },
  {
    "url": "assets/js/8.8ff52719.js",
    "revision": "d81dc01a16a03074fb59841649015cc2"
  },
  {
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.134c0563.js",
    "revision": "9494d0736fae31e7ed7416a01b8d8cf6"
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
    "revision": "48b38cf14eebaddba6fc4988fa6a789e"
  },
  {
    "url": "category/index.html",
    "revision": "9a2dad41cd9b2d799b5bc9f77d435f92"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "79b8a3a3f4791c3c248192f03485c10e"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "2d1d1582342be4d5a43a17070208bf08"
  },
  {
    "url": "electron/index.html",
    "revision": "a2405df2b9bf23cab71c22c12bdf2ccf"
  },
  {
    "url": "extra/index.html",
    "revision": "128d1ca1523783d2571e55a65add843a"
  },
  {
    "url": "flutter/index.html",
    "revision": "f01a7d6da4b6a007e8abf23ea57e0f85"
  },
  {
    "url": "flutter/test.html",
    "revision": "fb672611d3ed7d8f1f5e3f44d26cdc2a"
  },
  {
    "url": "guide/changelog.html",
    "revision": "39b18e344f7a02050df805fe3e0e8f55"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "00ce9dff16a5fc20d07dcc34b104556b"
  },
  {
    "url": "guide/faq.html",
    "revision": "77449ec63f8ce6ffacc18724701145d6"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "28ba1027af14647bda35f254a4be6762"
  },
  {
    "url": "guide/index.html",
    "revision": "fb019003fb508b5cd935e807faf7969d"
  },
  {
    "url": "guide/palette.html",
    "revision": "20893628532c3e1d0f955b03b0af9bba"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "ffdb57a632bbbc8194f01eed4f868c5d"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "880addbcbd7f54e2c78b3ab4ce366eaa"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "f9638572d9bfd6e826e0a5ed1a154ef6"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "4442a6bc9997622c20201370f15b29a6"
  },
  {
    "url": "index.html",
    "revision": "f0646d32754d0622396065f90daa97eb"
  },
  {
    "url": "js/index.html",
    "revision": "5da86b7b5dddc32a2bac148ba34064ab"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "c152aea0221db3354d69d5bb21ff5010"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "2c8fd55aeb9e8063b888ccc49c8c64d8"
  },
  {
    "url": "midway/index.html",
    "revision": "2d7f456007af7578a536167f149e3446"
  },
  {
    "url": "notes/brew.html",
    "revision": "686eee6f78f6b93eec951cce74d6214f"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "3e74d8c045a5f5c84e9e0d21658cc79e"
  },
  {
    "url": "notes/git.html",
    "revision": "7ace011243fb6d90393de6e227f705ca"
  },
  {
    "url": "notes/index.html",
    "revision": "df21121ea23cb11bc1467ad6e2dc4a0f"
  },
  {
    "url": "notes/nginx.html",
    "revision": "85738644f0257f38ba2c1f00fedf20ab"
  },
  {
    "url": "notes/node.html",
    "revision": "82999714c2209b1b07409f0343417985"
  },
  {
    "url": "notes/npm.html",
    "revision": "85c2340779ab17564863abcdca1f28f9"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "05ebc0c8f5921274c71b99b09de71108"
  },
  {
    "url": "notes/vscode.html",
    "revision": "9420c8a1007854dad3293e901df1bef2"
  },
  {
    "url": "plugin/index.html",
    "revision": "44ebdbd53d5fd1e59ce4cb9918f3e88c"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "b3ce19d0224afe773f735bdcf3d318a0"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "c17c0dd7d6363c7b158b3049b524d825"
  },
  {
    "url": "tag/index.html",
    "revision": "e738ab63e26d35a34cfdfff946fc695e"
  },
  {
    "url": "uniapp/index.html",
    "revision": "228c2b6c4422d295dd639d6c32050221"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "6cc1125134a9dd4b9e065c91a1d51f3f"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "61353192a95b156467c67ff1b2dd5d64"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "9a34410386d43c178d7439e0c1f26e83"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "9ad1b759b3f0118e02e99d44df5e9957"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "ccbee8696e58ba39a582c370ee9b42a0"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "df40103a43caab296a115ce2f0abe152"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "7a7bdb7eabaf224b5f69011510ab1ba6"
  },
  {
    "url": "Vera/index.html",
    "revision": "aaa87b32ee3e9c1b1e83eb5a43ba615c"
  },
  {
    "url": "website/index.html",
    "revision": "07890d2683f4fc4ea096b2dddc9a8678"
  },
  {
    "url": "website/package.html",
    "revision": "f16e916bd442b25cf909d1adb71d693c"
  },
  {
    "url": "website/rearend.html",
    "revision": "c1ad8a2e2a299fcfa590d51be7fe6e1d"
  },
  {
    "url": "website/tools.html",
    "revision": "c8b1ab4f21d61eabe0c7824b4ebcd5e3"
  },
  {
    "url": "website/webclient.html",
    "revision": "9c482cd2b44f89760ede89256a85b2b3"
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
