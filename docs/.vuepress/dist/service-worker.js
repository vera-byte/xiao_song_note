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
    "revision": "b75ddb7868da7bbae23d667575a90305"
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
    "url": "assets/js/12.fb9709e3.js",
    "revision": "bc1bd89c7a02a4a48b0ffe535309a489"
  },
  {
    "url": "assets/js/13.1b8b41db.js",
    "revision": "1b0bad4822512f0ac73a8614e2dfe433"
  },
  {
    "url": "assets/js/14.415aeafa.js",
    "revision": "0b7a40384d88dac0ddc19f10ee6869b2"
  },
  {
    "url": "assets/js/15.4c67e75d.js",
    "revision": "cd4af546075b43b5f8d2ea4f7686e4f4"
  },
  {
    "url": "assets/js/16.91555f33.js",
    "revision": "bbb83259be8ee8c8fb4889d666f0a2b8"
  },
  {
    "url": "assets/js/17.7b76b468.js",
    "revision": "1a274b7e99f01ff4e010cca7d5ccacc6"
  },
  {
    "url": "assets/js/18.31f0e06e.js",
    "revision": "b86c3c9dca43bbdffb2bbd85beb0d967"
  },
  {
    "url": "assets/js/19.a0c7bc37.js",
    "revision": "aa2ceeb02639ef130c5c5fc887c774bd"
  },
  {
    "url": "assets/js/2.4f3480b1.js",
    "revision": "eb323f1b8dc7cae20a7681bb9f453465"
  },
  {
    "url": "assets/js/20.f1dd5fa9.js",
    "revision": "3dc94e7263ccadc0d14f9fc52a65289d"
  },
  {
    "url": "assets/js/21.b3ee3eb5.js",
    "revision": "52182752b46e904f6134061a056854b3"
  },
  {
    "url": "assets/js/22.b420dd19.js",
    "revision": "f80d2de8b77fad0b0da7536964462207"
  },
  {
    "url": "assets/js/23.2a083418.js",
    "revision": "57bdbb6f0b1521d9576271eef525cfb1"
  },
  {
    "url": "assets/js/24.8822a2d8.js",
    "revision": "6a6170b469ddf6b2d57b7ab09c8fe63d"
  },
  {
    "url": "assets/js/25.f22e2241.js",
    "revision": "b6a7b475ba5d4a641721f575b2f41e88"
  },
  {
    "url": "assets/js/26.3091af55.js",
    "revision": "d9c4d69f7a63c440c048408d825fc6a2"
  },
  {
    "url": "assets/js/27.807ae768.js",
    "revision": "e33275ac3f5837a49332cd44b48f4f96"
  },
  {
    "url": "assets/js/28.8d23097d.js",
    "revision": "969ea5a81dd5d386b1aadedf9dba511d"
  },
  {
    "url": "assets/js/29.6e4b4355.js",
    "revision": "83c1ff7a2cac99e410b77445bd645547"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.77447ff1.js",
    "revision": "aed784a0527954f40912fa01866692f6"
  },
  {
    "url": "assets/js/31.941856b1.js",
    "revision": "90dd7dc1c2fa0dab8593098823a3a858"
  },
  {
    "url": "assets/js/32.95d945dc.js",
    "revision": "6b44b24e42efc338402c57ebc05b0457"
  },
  {
    "url": "assets/js/33.74cfb038.js",
    "revision": "103d80a10f9c5760932a7eff1bab0351"
  },
  {
    "url": "assets/js/34.3780ece6.js",
    "revision": "53ff5452bc563cc40e52063e5699b19d"
  },
  {
    "url": "assets/js/35.1ca1c767.js",
    "revision": "853d492f5964aff103938c0e21166ecf"
  },
  {
    "url": "assets/js/36.bf4840f4.js",
    "revision": "155ae800508790d58fe4085f7f00d5c6"
  },
  {
    "url": "assets/js/37.93761ccf.js",
    "revision": "8a15ddd3d58d0b59440456abc14ca80a"
  },
  {
    "url": "assets/js/38.9021c6da.js",
    "revision": "0db0be55f7dd2d088d5395190d9a7b9c"
  },
  {
    "url": "assets/js/39.d712b786.js",
    "revision": "ff5090cc4b8954375e509c277074c161"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.a4badb8a.js",
    "revision": "391d8174e487f7508221f8911dcdae34"
  },
  {
    "url": "assets/js/41.8ea94db6.js",
    "revision": "148c6798c77ef215368d5cdaaddf7013"
  },
  {
    "url": "assets/js/42.a7b5b8bb.js",
    "revision": "65b14ebeb42963ea3e9af68e7a6504d9"
  },
  {
    "url": "assets/js/43.10edf05c.js",
    "revision": "2140a65224dc48d1e3edcd3e8a6734c5"
  },
  {
    "url": "assets/js/44.1d426cb7.js",
    "revision": "871b0a6ecf59eebf1f2062bf00a659ac"
  },
  {
    "url": "assets/js/45.931e67ea.js",
    "revision": "f23882e4fd4db1c1c173da0799bbf1f5"
  },
  {
    "url": "assets/js/46.7b205c92.js",
    "revision": "920145f543920d3887f703b7055ef8fa"
  },
  {
    "url": "assets/js/47.f54f6740.js",
    "revision": "3659230d4712a1f62fd75dadf129ec72"
  },
  {
    "url": "assets/js/48.722607f8.js",
    "revision": "a6a4c004148a5289c81bdfaedb107a61"
  },
  {
    "url": "assets/js/49.6c15a104.js",
    "revision": "8c5f3d416cd8f68adb57cddd41aae892"
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
    "url": "assets/js/7.e4220372.js",
    "revision": "fc717932d59e14d365312075466e06cb"
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
    "url": "assets/js/app.31a57944.js",
    "revision": "7b47db7d2f2ffe9895cb6a502325e7cb"
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
    "revision": "d697c7dbda928d0da8e31af1e562baf9"
  },
  {
    "url": "category/index.html",
    "revision": "8f44b4ee8cf3b55e0852a456fd78cf7a"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "7d4f45e802b82e8699738bc91b493560"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "f4e601ec4e0e2710124298f7b7c0c8b2"
  },
  {
    "url": "electron/index.html",
    "revision": "0ad34968bbf26f932e7d529e0c618a90"
  },
  {
    "url": "extra/index.html",
    "revision": "09bb1c395e4865e411398480edbd95a3"
  },
  {
    "url": "flutter/index.html",
    "revision": "b3f027510d0fc126531c1070cc1f59ca"
  },
  {
    "url": "flutter/test.html",
    "revision": "b6302eab3ff410871c97aaae20e3f790"
  },
  {
    "url": "guide/changelog.html",
    "revision": "2597a410d7ba468251b951dc235f3a0e"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "a332ae1ba120fd0e1ce121fbab321d02"
  },
  {
    "url": "guide/faq.html",
    "revision": "224b647341869836b9db2ec8bcf44def"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c0571787b9a8b04a378e40105ecaa7e0"
  },
  {
    "url": "guide/index.html",
    "revision": "f12b11372d8bf568e4bc3df8f85ca43f"
  },
  {
    "url": "guide/palette.html",
    "revision": "6746303287ccf8fdb0e982a14ad1719a"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "7f2826354d77cd388bd780062e3c6e48"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "2d8876588f013ea55daee4cae5a3449a"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "86298511bfa5a44177369785408f2aed"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "d8e0dc85bc329bd3c2c206e8148e931c"
  },
  {
    "url": "index.html",
    "revision": "afde4ee87edd054d008b77c9f58f866e"
  },
  {
    "url": "js/index.html",
    "revision": "baa3ab8fe02237f013fc0a7b5d2572eb"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "953bda1802297951539de8ff1c62371a"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "8cad315c3455538e968b9c0aab64bb3a"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "ac5c8b3c6dfc5212b2d27a57a0f3f893"
  },
  {
    "url": "midway/index.html",
    "revision": "0b8e4f7891ac1094e078058352b4ded5"
  },
  {
    "url": "notes/brew.html",
    "revision": "5982136da58c2117fa602582a9a706ca"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "7049cae00dad9e8157fc10359833ef63"
  },
  {
    "url": "notes/git.html",
    "revision": "7e4c7bba80e25c4b2c18c416e9d20193"
  },
  {
    "url": "notes/index.html",
    "revision": "4d303d1b41d34b3509829bb64ca0bb7b"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a40f8eb3621987b7817b6baf447d9d8e"
  },
  {
    "url": "notes/node.html",
    "revision": "6cf17b92821705fdea2e20eec6aca2b7"
  },
  {
    "url": "notes/npm.html",
    "revision": "0edd084dec236fec0dc534ab842d0cb0"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "6293c5d5ec08845e008d688e6eae21b0"
  },
  {
    "url": "notes/vscode.html",
    "revision": "130978f3f192320657feedae5936852c"
  },
  {
    "url": "plugin/index.html",
    "revision": "1ce620094265d49ef0d3ee8ab62abf11"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "fcca1ab25563a24500e4077a891e139d"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "cd364eae5f272f55ce97976a3dc147ff"
  },
  {
    "url": "tag/index.html",
    "revision": "5e2f805cb72d862857b0dca4f0ddc53f"
  },
  {
    "url": "uniapp/index.html",
    "revision": "7095abdbe9a478002be3bc3d2970e9b4"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "70d7703542285c583b9313c899f8d286"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "96efc6dc91f8720e0a06ad8a11e89c4d"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "863f8223a28bf9a559dc02275dd31c98"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "85dfd9bc9cbc19e983ea8f7060754387"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "abdb879f0ca11007a1a91067e6066104"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "780844ab78ba4a3c82d2582d88e9b893"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "845f361f603cdb6ef410abffc492fd15"
  },
  {
    "url": "Vera/index.html",
    "revision": "fd31f2ad4ea840f7b7dd121a65958789"
  },
  {
    "url": "website/index.html",
    "revision": "d303cdb5dd91201d8c02baeb093abec7"
  },
  {
    "url": "website/package.html",
    "revision": "fd26dbbd5bba625baef6f35fea6e8770"
  },
  {
    "url": "website/rearend.html",
    "revision": "0428b1769e21e9c0a473025715c74f2b"
  },
  {
    "url": "website/tools.html",
    "revision": "af2ab0e516395239e5a01b9ea92983a5"
  },
  {
    "url": "website/webclient.html",
    "revision": "e806e309f2a7ebc427b5e72047814c22"
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
