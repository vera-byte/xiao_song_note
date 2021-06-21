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
    "revision": "f4ad24a1cdea6a448aa581103aa70175"
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
    "url": "assets/js/12.fe4fb571.js",
    "revision": "f980ee5002fee3e0c33811b79282db54"
  },
  {
    "url": "assets/js/13.8d12edaf.js",
    "revision": "16db3575758b779a9562d9482af6ac60"
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
    "url": "assets/js/16.1462fa75.js",
    "revision": "95bd8e5007c8ec2748438112b1a83d42"
  },
  {
    "url": "assets/js/17.080a3714.js",
    "revision": "39214940d282f84a2cc3c1aa88e3bc1d"
  },
  {
    "url": "assets/js/18.a988620f.js",
    "revision": "8f2ce3a10592a20017a20c0954ba8b37"
  },
  {
    "url": "assets/js/19.2ae1e7c5.js",
    "revision": "43771e7d94ff31c54e1ba84b6cd0a2ff"
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
    "url": "assets/js/22.afc333d7.js",
    "revision": "ba8d81892ad3cca45ad6f4b42e0f2857"
  },
  {
    "url": "assets/js/23.b8bc5ad1.js",
    "revision": "17161bbe2271f1a6391dfc58c91b6435"
  },
  {
    "url": "assets/js/24.610c9bcb.js",
    "revision": "50110cca9d595af9cae685d43b3c44bf"
  },
  {
    "url": "assets/js/25.96c43e83.js",
    "revision": "03e00c0321decd6cc6521172b0bbc45c"
  },
  {
    "url": "assets/js/26.a08d2523.js",
    "revision": "76d54042d611344339356367b43e6cc3"
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
    "url": "assets/js/31.efa56c03.js",
    "revision": "e952d81ae1e8938c65d7012ec1e2e569"
  },
  {
    "url": "assets/js/32.291bc07c.js",
    "revision": "4683762c541d58261f213489ac4eb337"
  },
  {
    "url": "assets/js/33.ba5ecd5f.js",
    "revision": "1e2878925c2ab108474d1fa6380718f8"
  },
  {
    "url": "assets/js/34.dd0048e6.js",
    "revision": "635c55ca774ac69d8d0f51d79487dff9"
  },
  {
    "url": "assets/js/35.1870deb8.js",
    "revision": "10015ae6ed2f4d772c70dbfcd062a449"
  },
  {
    "url": "assets/js/36.49f9eca7.js",
    "revision": "c4f149dd969a63d052dd5efa82b4971c"
  },
  {
    "url": "assets/js/37.9d975bc6.js",
    "revision": "0749aaa3c753493192ae59afb72f5d71"
  },
  {
    "url": "assets/js/38.8a5b24f3.js",
    "revision": "f8741486c9af816867f782491455e8b3"
  },
  {
    "url": "assets/js/39.222cd592.js",
    "revision": "d96a30b9346fe82e68fdceeaf03be64c"
  },
  {
    "url": "assets/js/4.fa6ed8fd.js",
    "revision": "ed64aadac9c4bff81317b5f923b2083a"
  },
  {
    "url": "assets/js/40.7e8fbcd7.js",
    "revision": "0e1cf626626106284b80a6699c56b2fe"
  },
  {
    "url": "assets/js/41.f036c2b1.js",
    "revision": "e938d413fe703dae37fc95f3460b7858"
  },
  {
    "url": "assets/js/42.7ecc15d6.js",
    "revision": "7ad99c075807f8bbce3e8f5b6f272574"
  },
  {
    "url": "assets/js/43.05144c32.js",
    "revision": "1708a32f4a69850cd20809fab62ed071"
  },
  {
    "url": "assets/js/44.353a3585.js",
    "revision": "e92d342142f4dad54a64e69e898666fb"
  },
  {
    "url": "assets/js/45.9d6d5b63.js",
    "revision": "c7cef1ab7134f9d62ea178d2c5e33a16"
  },
  {
    "url": "assets/js/46.c1658a9b.js",
    "revision": "51561a24910b2fb14f2b00b8f7e31184"
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
    "url": "assets/js/6.70fd2f16.js",
    "revision": "4467ee1706093a8903da9c49e4d69bcb"
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
    "url": "assets/js/9.dc8b4238.js",
    "revision": "1fd3a6e3435caeb961869edd0e61ae5c"
  },
  {
    "url": "assets/js/app.3ceac697.js",
    "revision": "40a70bc24cbf93fd9b5f0e7ef3732012"
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
    "revision": "127c0f85dbd9bab12d7d8081a7048d2d"
  },
  {
    "url": "category/index.html",
    "revision": "7b79a18e3f82688cf4234f80d58d3f14"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "2301e3ae6e3ab50984f87bfa7a84414a"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "5e7b61d11649fb95021244c069711286"
  },
  {
    "url": "electron/index.html",
    "revision": "87b5c24799572c8f646d317c3aefb24c"
  },
  {
    "url": "extra/index.html",
    "revision": "85dd12e504c29c70f4c63863549c1fc9"
  },
  {
    "url": "flutter/index.html",
    "revision": "8895949b9c5e3640b51bb47f2b25ba27"
  },
  {
    "url": "flutter/test.html",
    "revision": "510c9b95a28fcb69314dc2cea043b6da"
  },
  {
    "url": "guide/changelog.html",
    "revision": "96b7fe3b31dccdca5e5159772d6139ac"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "8385650ee146cafb940fac90622b827a"
  },
  {
    "url": "guide/faq.html",
    "revision": "36f91b7bb57e421a2fe4ba8b3670297d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9ecc41fd35fd5966c065aa62f80e00a6"
  },
  {
    "url": "guide/index.html",
    "revision": "d748e30d5f65c6c4aa8e6280103b71b9"
  },
  {
    "url": "guide/palette.html",
    "revision": "1947c5a377056c3fe49d4435e9c75854"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "d99bcb6c9ae3e67641f957c849652fc1"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "ead8af5b945883156215484c1d3bad34"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "e3dde64b8de5c79914054e52a0c2c094"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "53f7420ddd08f67c0d67ce31074a7289"
  },
  {
    "url": "index.html",
    "revision": "dc803a87732fd7c105c4e894e7df0b42"
  },
  {
    "url": "js/index.html",
    "revision": "cefa1c8c61f110e8e06d44e79a70287d"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "c5081a52e2edf8a9927541fcaff51dc7"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "6e060ee1aa47be027ebcc2e6da1f4b2d"
  },
  {
    "url": "midway/index.html",
    "revision": "0e75877a051dfc469c581cea7a88a8dd"
  },
  {
    "url": "notes/brew.html",
    "revision": "fbd5cc5d371cfcda1a79f423436ba8fa"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "a1d54f47fe6ee9b0880c699ccbd868f4"
  },
  {
    "url": "notes/git.html",
    "revision": "5478d12a897b0525287e907a66ebc259"
  },
  {
    "url": "notes/index.html",
    "revision": "6518a3de2868337b4eb74917ec80a176"
  },
  {
    "url": "notes/nginx.html",
    "revision": "0071186805edf317d3f1aaeed5425132"
  },
  {
    "url": "notes/node.html",
    "revision": "375bb7b536155f9773f3ed06cc0ed26d"
  },
  {
    "url": "notes/npm.html",
    "revision": "17e8e3dcafded77ea5b3e76635875f61"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "2b1a10502ae5a5b9e3ae6b7b9e993d4c"
  },
  {
    "url": "notes/vscode.html",
    "revision": "5bb4670a61e14b1236abec69de17ad82"
  },
  {
    "url": "plugin/index.html",
    "revision": "6548083de0da61bab38700b5496df789"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "6162b03efdc4c5e3fb843853f9a23b45"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "32824c735076291be7dea03ed670f85c"
  },
  {
    "url": "tag/index.html",
    "revision": "de4b87fe18f7d73bd212c52db80fee88"
  },
  {
    "url": "uniapp/index.html",
    "revision": "64dfc617b1863f0a0ae51db468f42403"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "5cdc3b2b977fdebe02394cf863d93a09"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "0ef53b9ae6274bd88c17d9c2a4c8c587"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "9bc937fd4f5cf87a90d7c70416c9e38a"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "f9918f73084d8e08db3522dd0f732f16"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "a1315cea83e2782882767d6bdd8f7dad"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "0130b9443f6cc8f8ab9f607720553726"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "2a28b601c2e2bda62b8265a7de99cb93"
  },
  {
    "url": "Vera/index.html",
    "revision": "55289e04e4315ed61e9aec978eba5074"
  },
  {
    "url": "website/index.html",
    "revision": "95a2d35ef5d92116fcae74d1ffc18291"
  },
  {
    "url": "website/package.html",
    "revision": "58f5fe77ee8d6090d5670661657e5bfa"
  },
  {
    "url": "website/rearend.html",
    "revision": "9bae1880905a3df5f7c58be1a8b1ac3e"
  },
  {
    "url": "website/tools.html",
    "revision": "40ff8258e69ccc0776f14b2832bed33e"
  },
  {
    "url": "website/webclient.html",
    "revision": "169b54349840758ecfdce7888c45dcf8"
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
