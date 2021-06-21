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
    "revision": "02885a472951aa3d834e6db48e9ad73f"
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
    "url": "assets/js/14.14ead2cc.js",
    "revision": "6f456f3e523735777abe5f4ef7fbe712"
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
    "url": "assets/js/20.260d9196.js",
    "revision": "4b280fbec7cbc991a42125caae105483"
  },
  {
    "url": "assets/js/21.b97fcc39.js",
    "revision": "2f6146799d5f52d51dac8e15ee14219c"
  },
  {
    "url": "assets/js/22.039fb583.js",
    "revision": "7e526cd96930de3b6d6cedd4d1d87664"
  },
  {
    "url": "assets/js/23.fe2c88f9.js",
    "revision": "35c9422859c03f2ef41c4090366b748d"
  },
  {
    "url": "assets/js/24.58a50cb4.js",
    "revision": "c9a77ab424d2cd26b989cc33dda17d9d"
  },
  {
    "url": "assets/js/25.9bd6b62f.js",
    "revision": "c501bbef3d61908cfce03cdeac17a540"
  },
  {
    "url": "assets/js/26.a08d2523.js",
    "revision": "76d54042d611344339356367b43e6cc3"
  },
  {
    "url": "assets/js/27.64a56655.js",
    "revision": "2a3f4e1d33a7ff64f9e69ab4b99a795f"
  },
  {
    "url": "assets/js/28.7e695a92.js",
    "revision": "3cd635fcae76f4a0842d298ea45604ef"
  },
  {
    "url": "assets/js/29.49450623.js",
    "revision": "8b0fe858a70eca6059af9bd414099331"
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
    "url": "assets/js/31.c83abf8b.js",
    "revision": "067a8cb1c9cce20467b7b5bc3138cdba"
  },
  {
    "url": "assets/js/32.f4488e96.js",
    "revision": "9252852507c0b0bf57e8dd703b346296"
  },
  {
    "url": "assets/js/33.529a52a9.js",
    "revision": "bcd086301311fb29d48e3dd961063aed"
  },
  {
    "url": "assets/js/34.fb4d12fe.js",
    "revision": "c7d5b05d02e92197fcb52f7862473e61"
  },
  {
    "url": "assets/js/35.5b110848.js",
    "revision": "e11a07c02db6f27726855b1f81fcb7aa"
  },
  {
    "url": "assets/js/36.da64f9d2.js",
    "revision": "208e3606f9eb65b45ec716d8263d1c2a"
  },
  {
    "url": "assets/js/37.57d1a27f.js",
    "revision": "aef265e054eba6ffcff31d12f1b32ce4"
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
    "url": "assets/js/40.abf6d8c1.js",
    "revision": "9673e0bf29430bccfb94141ea17440e3"
  },
  {
    "url": "assets/js/41.4dd791d6.js",
    "revision": "478bfb472f7bceef88987ccc2d8c0236"
  },
  {
    "url": "assets/js/42.6acee073.js",
    "revision": "db67c2a6a09d5c5ddeb495fba0f1d6e1"
  },
  {
    "url": "assets/js/43.0783d6b7.js",
    "revision": "cb7167c0417ba041e59528f9b06bc0bf"
  },
  {
    "url": "assets/js/44.96648ffc.js",
    "revision": "5b64f51567c061dc61586ac64ac99f9a"
  },
  {
    "url": "assets/js/45.750a6555.js",
    "revision": "53bd1fefb047fe8f9de3de7d1ddbbab9"
  },
  {
    "url": "assets/js/46.c1658a9b.js",
    "revision": "51561a24910b2fb14f2b00b8f7e31184"
  },
  {
    "url": "assets/js/47.3a17da56.js",
    "revision": "c654aba042864f03673a514167597e95"
  },
  {
    "url": "assets/js/48.43f38398.js",
    "revision": "0e7a622fd4c65a9490f8d723ede8858c"
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
    "url": "assets/js/6.2806a424.js",
    "revision": "27faba128ce93bfea72c0f459961baae"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
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
    "url": "assets/js/app.bb55c5be.js",
    "revision": "fa49766ae66f142675324d2de4193f0e"
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
    "revision": "f1ab6f06c013e0aec9899fdaf6baa779"
  },
  {
    "url": "category/index.html",
    "revision": "88c4e94c5cd7c973342096cfe71735c6"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "a2c53c805eed1b22d4c86ffc5e02b857"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "744c3b8c7b7ba4ef33b565a04ac367d7"
  },
  {
    "url": "electron/index.html",
    "revision": "0ae9c00278386ab2db3d1d6ee64e0c1d"
  },
  {
    "url": "extra/index.html",
    "revision": "800fcbcc1cb23ff1e8e3fb5cfc8724c8"
  },
  {
    "url": "flutter/index.html",
    "revision": "badc0c044d560f7cf93d6823f1588ffe"
  },
  {
    "url": "flutter/test.html",
    "revision": "cf53d6d41015073442049d7b6d920431"
  },
  {
    "url": "guide/changelog.html",
    "revision": "24e358180dd60744626d281274adf3a6"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "440d7122ef0d0343b8d41cb232504da1"
  },
  {
    "url": "guide/faq.html",
    "revision": "144b4c740b9114577377c0aca04af12d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1958c73b0573baeb9085b4c7eca76211"
  },
  {
    "url": "guide/index.html",
    "revision": "b8ff5b7c343f15abc35ca01ba6ae0b98"
  },
  {
    "url": "guide/palette.html",
    "revision": "d18c9b3d0f071e1ed44d20cbcec6eb9a"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "0039117b89821ba8d425d53ae659ee24"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "f9dce8bad37bc1b10eeed80e45b0c7b0"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "31e9e95541cb780fa90333237771ceb4"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "3ee5f03475894a476a398041f2ca9fc6"
  },
  {
    "url": "index.html",
    "revision": "a993601b3b6347180ef6f9eeb8741b48"
  },
  {
    "url": "js/index.html",
    "revision": "a5bb4194a43f7a0df3f9de027982d249"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "46da2f5402041bbcd48ca1330208b93a"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "4a845724612d1acc097f4fc05092e1fd"
  },
  {
    "url": "midway/index.html",
    "revision": "20350336f07df450703a45612ebcf64a"
  },
  {
    "url": "notes/brew.html",
    "revision": "6e50532079d85e47dd0ff878f6f8b5c0"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "349a50e4d0420f9160bb9e7b52a69297"
  },
  {
    "url": "notes/git.html",
    "revision": "b45a87af0cf972a24f5b1d17aa473a00"
  },
  {
    "url": "notes/index.html",
    "revision": "d88670bd12077cfbfdebbd58429bbccd"
  },
  {
    "url": "notes/nginx.html",
    "revision": "b3baa8a57cfe521451076c207530b61d"
  },
  {
    "url": "notes/node.html",
    "revision": "d65e94cf06e45b6df6673eda2302ab6b"
  },
  {
    "url": "notes/npm.html",
    "revision": "8e5a1ed25afc6e549be6c9f09185a7da"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "b24002ae7ba937370d734969ee70590a"
  },
  {
    "url": "notes/vscode.html",
    "revision": "1603859ea8bc195f22748fb1166ba576"
  },
  {
    "url": "plugin/index.html",
    "revision": "9c866613ad17907ec68cd3a459c0b45c"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "70fe81a89bcd21b38c87261b01e44689"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "9c73145932eec2dd179dd7ab5c0bcb8c"
  },
  {
    "url": "tag/index.html",
    "revision": "f5f47d9e260bd5d9de221e29dbd76a10"
  },
  {
    "url": "uniapp/index.html",
    "revision": "17bf318837802ec04e31c7919567bee0"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "0b200f19e2e4f4c7f5516d14f9477229"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "6e6af84c7653244e5360c8c116955845"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "6c8b1ded227a4181ba7ce5dcbd891234"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "4ce9b1dbb952dc09cf0fd753c674ce01"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "5d4b8bde5c7cb3d654fc1f72549fa492"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "5790a259bd345154019257a3e1dce271"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "0c72b09219cc136cc7a793e6610e9ec3"
  },
  {
    "url": "Vera/index.html",
    "revision": "227353899132209102698cd99b5f794b"
  },
  {
    "url": "website/index.html",
    "revision": "99c45071ee83da2b8dc675b9eb38cc5e"
  },
  {
    "url": "website/package.html",
    "revision": "f0c626706636e3ac3a58172bf2c8edcf"
  },
  {
    "url": "website/rearend.html",
    "revision": "639ab48a50167a302f884175ecb398e3"
  },
  {
    "url": "website/tools.html",
    "revision": "9a5200341c876671bbf96f2dc465935c"
  },
  {
    "url": "website/webclient.html",
    "revision": "80440f54b035ef8a8992930340b2340d"
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
