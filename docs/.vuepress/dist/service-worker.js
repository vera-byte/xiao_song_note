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
    "revision": "3ca702f1e247df180ff295df57f69f10"
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
    "url": "assets/js/10.bc26f947.js",
    "revision": "6665bbdf8cd3b0ec7914d03fcff32a69"
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
    "url": "assets/js/14.415aeafa.js",
    "revision": "0b7a40384d88dac0ddc19f10ee6869b2"
  },
  {
    "url": "assets/js/15.e946a905.js",
    "revision": "292394b0a6e5e2034cf87ecbff9970ee"
  },
  {
    "url": "assets/js/16.1806c483.js",
    "revision": "97366708d0f1625471c88fca5cf2e573"
  },
  {
    "url": "assets/js/17.d618ee3a.js",
    "revision": "333f8bf627cd7652320f5eeb32de097f"
  },
  {
    "url": "assets/js/18.c2f1d2ee.js",
    "revision": "7b851c31a4c07983ae987d0265d9f6f7"
  },
  {
    "url": "assets/js/19.57252ad0.js",
    "revision": "7bb04923882362a3503354f07a7e0ada"
  },
  {
    "url": "assets/js/2.4f3480b1.js",
    "revision": "eb323f1b8dc7cae20a7681bb9f453465"
  },
  {
    "url": "assets/js/20.7547816e.js",
    "revision": "4b2f3b6a2184955c80befed1e1fc7fb6"
  },
  {
    "url": "assets/js/21.768f0488.js",
    "revision": "da62b8e2cf6b13d91de3092d159c3f03"
  },
  {
    "url": "assets/js/22.ba4c4f9b.js",
    "revision": "e9036408f608783a7effa2db1b890256"
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
    "url": "assets/js/28.a3c0ac05.js",
    "revision": "0cf2fe2da08cd08ceb806475ea59b7b7"
  },
  {
    "url": "assets/js/29.2231312a.js",
    "revision": "03ad793ee22697c85de82d40327f6409"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.6e411b13.js",
    "revision": "294e0c96c7e8fea32a4a01b8d140623a"
  },
  {
    "url": "assets/js/31.74020b52.js",
    "revision": "5c0fee962fe0edcdc5f798e19147bec7"
  },
  {
    "url": "assets/js/32.857cfc6e.js",
    "revision": "f17838e6b4117f995b748d443e6293b7"
  },
  {
    "url": "assets/js/33.ba5ecd5f.js",
    "revision": "1e2878925c2ab108474d1fa6380718f8"
  },
  {
    "url": "assets/js/34.4170b673.js",
    "revision": "00dca8ed4e37c2d28863253b3316eff5"
  },
  {
    "url": "assets/js/35.c0a71e7a.js",
    "revision": "474392b613c1eefc1c5ec5add563d1ad"
  },
  {
    "url": "assets/js/36.a9d02528.js",
    "revision": "655ff7f6decb92f82c1b5a81a63d2782"
  },
  {
    "url": "assets/js/37.9d975bc6.js",
    "revision": "0749aaa3c753493192ae59afb72f5d71"
  },
  {
    "url": "assets/js/38.abe4bcb0.js",
    "revision": "7237186936ec40226ff1858876b85f21"
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
    "url": "assets/js/41.4dd791d6.js",
    "revision": "478bfb472f7bceef88987ccc2d8c0236"
  },
  {
    "url": "assets/js/42.1c0e8be9.js",
    "revision": "7ee31894e98ec6e2deeab428b3401e9c"
  },
  {
    "url": "assets/js/43.cf104027.js",
    "revision": "796bdfce00774bbc00fc609a1ac51de5"
  },
  {
    "url": "assets/js/44.f2ea313e.js",
    "revision": "2503dc922bccf90f750f649eefdb3060"
  },
  {
    "url": "assets/js/45.5076d71a.js",
    "revision": "8b833ecd4271f3b5b6b745e2e2d61a7e"
  },
  {
    "url": "assets/js/46.ce2a1740.js",
    "revision": "b96242a2d8566d5cbd56384821e03fa7"
  },
  {
    "url": "assets/js/47.b1373d80.js",
    "revision": "8e8ae89fa877f2948820e23fdeccbd97"
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
    "url": "assets/js/6.f45cd49a.js",
    "revision": "fe8220966fbec031045573307addc415"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
  },
  {
    "url": "assets/js/8.c61d4fc5.js",
    "revision": "dc3d4a6056d48ae86a35c2cc7caa48dc"
  },
  {
    "url": "assets/js/9.44468ecf.js",
    "revision": "5f2dd2b53fe9ae116c6e51db9e4bda24"
  },
  {
    "url": "assets/js/app.a46846db.js",
    "revision": "3ac15a663fbed232997a8242acc85ba6"
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
    "revision": "d3dfe7117f0ea9a376e6333ff9233591"
  },
  {
    "url": "category/index.html",
    "revision": "38ab29c48a195c94941400a6f0695a8f"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "442564b993181f52a4ab6dfa4918867d"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "0826f97f7295e50585801cf8ff09058e"
  },
  {
    "url": "electron/index.html",
    "revision": "c96eaf6338f73e6d072780a1afdf52ce"
  },
  {
    "url": "extra/index.html",
    "revision": "e9cbefce2c4f2ba7f6cb2e6e99d2909f"
  },
  {
    "url": "flutter/index.html",
    "revision": "753dc4b39d29d96285fa4be8500ca8d3"
  },
  {
    "url": "flutter/test.html",
    "revision": "187971267bb0aed9a01c9803a97e7c52"
  },
  {
    "url": "guide/changelog.html",
    "revision": "fed01871bf4dd70035de7785a4771013"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "117eb1e1f1c9822393778b9a6ef2ca5e"
  },
  {
    "url": "guide/faq.html",
    "revision": "1520ea96cbc3b347894940d2a07e47d8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e8b62b0e024e38b306b4ce6ce1541079"
  },
  {
    "url": "guide/index.html",
    "revision": "84cfbdbdec248782537ba93f6f388082"
  },
  {
    "url": "guide/palette.html",
    "revision": "6cd7ebd91c5ad9ea7e7ed80879077671"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "47df7ad10a713cabfdc117eb8e342e0d"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "2ab1c3b2a653501befd9f1007d13c430"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "13ccb9ed74d504ea37ca731ee419860f"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "862720443bf38f46fa602696632c14d1"
  },
  {
    "url": "index.html",
    "revision": "c5b701fb705fd0a44a6ffe3461379efc"
  },
  {
    "url": "js/index.html",
    "revision": "e3224564164a11fd787cdcb0801f767d"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "f06d9e0b1ac498a3de462eb44cd74732"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "9c9a15793efccf3952534a5350794cc2"
  },
  {
    "url": "midway/index.html",
    "revision": "a3733444e7101f925b26706f876a0e60"
  },
  {
    "url": "notes/brew.html",
    "revision": "7408bea892f4f35d14849b3ef910b49e"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "72a74d45f3324062947e17dfe7512c3e"
  },
  {
    "url": "notes/git.html",
    "revision": "3c3670743a881f5962024b1186c9f826"
  },
  {
    "url": "notes/index.html",
    "revision": "1ba0c5641f1fde3721647b3652da029e"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a401f0d2b2b6a81399024ee7dd1161b1"
  },
  {
    "url": "notes/node.html",
    "revision": "24c27281c4c93b3d34a326f2ea687d25"
  },
  {
    "url": "notes/npm.html",
    "revision": "efa0da0f77a3904cd8bf3c2b5913b88d"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "1eb96e2aee6a7ff49c73c9483f6dbac6"
  },
  {
    "url": "notes/vscode.html",
    "revision": "0bd04e606982f222f5dfed574fe57dee"
  },
  {
    "url": "plugin/index.html",
    "revision": "732bee29aa0fa84af6ecd8f53e3905c7"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "1c812cf285b64cc30d8a9da923b301d9"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "8f891d303fb0d05921efc9a1bef2a034"
  },
  {
    "url": "tag/index.html",
    "revision": "7f9753939588c8b8c68dfe82d27045ce"
  },
  {
    "url": "uniapp/index.html",
    "revision": "fa66eb9b968a188b9abc18684c8b8f85"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "cb3dd9fd29f00c013e004afcb81124c7"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "a050036639e7946d312a41f36d8da1c7"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "1924e0cbc74a8fce6bb589ca3bccbf60"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "b8036de640d7872cf5d438c6b40e8710"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "1cedd8408d48567c2619920c990b9e03"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "84c748849c52533bab3dc009bb016cae"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "20b1379e5a8e828116f9c3765049392d"
  },
  {
    "url": "Vera/index.html",
    "revision": "b1aebbe9fa20c8b5740be66c41f458c5"
  },
  {
    "url": "website/index.html",
    "revision": "499cf558a66980dbe684eb1d61857fbb"
  },
  {
    "url": "website/package.html",
    "revision": "171825de8989ee8b95d9c2b06726560b"
  },
  {
    "url": "website/rearend.html",
    "revision": "be925ee7e27c8ee1ec6cc59524c93214"
  },
  {
    "url": "website/tools.html",
    "revision": "986ad270ddf1f6c13a7c9dcfe4c8678b"
  },
  {
    "url": "website/webclient.html",
    "revision": "eea9c09fe2698038e27fa3ec99b5c801"
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
