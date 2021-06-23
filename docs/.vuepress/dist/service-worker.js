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
    "revision": "dc857f04d8f60cb4fcdf22f5820b6b64"
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
    "url": "assets/js/13.c37a5990.js",
    "revision": "e9526202cb53e49d4b144412c92237a7"
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
    "url": "assets/js/16.d93446e2.js",
    "revision": "71db368d0124174511790f671771bf57"
  },
  {
    "url": "assets/js/17.080a3714.js",
    "revision": "39214940d282f84a2cc3c1aa88e3bc1d"
  },
  {
    "url": "assets/js/18.83f31237.js",
    "revision": "a1546bc0c20a3326c6a45254355d9677"
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
    "url": "assets/js/21.768f0488.js",
    "revision": "da62b8e2cf6b13d91de3092d159c3f03"
  },
  {
    "url": "assets/js/22.e520653a.js",
    "revision": "fbbd4a50680827cafdbe70b351f947e9"
  },
  {
    "url": "assets/js/23.120cbab7.js",
    "revision": "a1ce59514687f063ce2ac97d191240d9"
  },
  {
    "url": "assets/js/24.a744d836.js",
    "revision": "f19f38e8dd387f29c2419267c6756c3a"
  },
  {
    "url": "assets/js/25.b62160d0.js",
    "revision": "d39c48ce6077ae2af2c72f9aa541df1f"
  },
  {
    "url": "assets/js/26.4039aa9c.js",
    "revision": "e75fd855ab036adba194404273320e7e"
  },
  {
    "url": "assets/js/27.807ae768.js",
    "revision": "e33275ac3f5837a49332cd44b48f4f96"
  },
  {
    "url": "assets/js/28.d6b1c8aa.js",
    "revision": "35425813135560e7b1d599b9110a47d6"
  },
  {
    "url": "assets/js/29.18110bdf.js",
    "revision": "01f4f6b5ac924a95c393d425dea95ab7"
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
    "url": "assets/js/31.7184f202.js",
    "revision": "fdf7b1f2389696ea24d95fd00dd8efe8"
  },
  {
    "url": "assets/js/32.abf3ba4e.js",
    "revision": "72727fa39f7f17285039d1c925e74b46"
  },
  {
    "url": "assets/js/33.fd3f94bd.js",
    "revision": "3007e39023bdcf4acc9af737104ed854"
  },
  {
    "url": "assets/js/34.08f8d322.js",
    "revision": "43391fd3ceeaeb668be2d252e67dbfed"
  },
  {
    "url": "assets/js/35.31fe1265.js",
    "revision": "ea0f6e27c4d428981039dea49af1f8f6"
  },
  {
    "url": "assets/js/36.800e4dab.js",
    "revision": "674416fa712a307eb354f583ac662ae7"
  },
  {
    "url": "assets/js/37.c7b4b4ad.js",
    "revision": "cd2fe9cecbe8da20463f34b3a7864baa"
  },
  {
    "url": "assets/js/38.9021c6da.js",
    "revision": "0db0be55f7dd2d088d5395190d9a7b9c"
  },
  {
    "url": "assets/js/39.96ec5bf4.js",
    "revision": "0672468c8b7cbb455b759d58792eae8b"
  },
  {
    "url": "assets/js/4.6ba4e931.js",
    "revision": "625d131693e4ec4603fdeb4eda38981f"
  },
  {
    "url": "assets/js/40.678c6efe.js",
    "revision": "d4fb063d2a495f6d836e7e104e89984f"
  },
  {
    "url": "assets/js/41.af51f17e.js",
    "revision": "da1a80ef0a433d72ebdd54035b2d8a4a"
  },
  {
    "url": "assets/js/42.46e4dee1.js",
    "revision": "85d0b90497bb19df08454501da52fd8b"
  },
  {
    "url": "assets/js/43.e7793c59.js",
    "revision": "bf65ca9aad6813f1460cdf8f29e7772b"
  },
  {
    "url": "assets/js/44.b4ae5b37.js",
    "revision": "b1479d8ccd2b9474957416a2b9ca6184"
  },
  {
    "url": "assets/js/45.030cee93.js",
    "revision": "9de9416699a2d8393b93e479420237ef"
  },
  {
    "url": "assets/js/46.b50bb026.js",
    "revision": "b0147551cd0374aef86ec2905cf32bc2"
  },
  {
    "url": "assets/js/47.1ae54848.js",
    "revision": "ec251bd2c80a614e87ece92a27546667"
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
    "url": "assets/js/6.1df09c98.js",
    "revision": "ff93f66b869929c4e448ee369a80cd65"
  },
  {
    "url": "assets/js/7.30fc4bc8.js",
    "revision": "bb39bcca7d37cc7feed49931c71918c1"
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
    "url": "assets/js/app.ae7053cf.js",
    "revision": "d3e7082166583ded2ff7608642d7ebca"
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
    "revision": "212cbf8117780b0eebb651f1a86d9ada"
  },
  {
    "url": "category/index.html",
    "revision": "e233e4c64c44f16712dd005c6aa73f97"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "2ee07f800ed12cd97174c31976328e7f"
  },
  {
    "url": "coocscreator/安装.html",
    "revision": "bdddc0d9edd7e270a47564f4d09558fe"
  },
  {
    "url": "electron/index.html",
    "revision": "2e842bf5fe5e3e5c551e3fa733eb4229"
  },
  {
    "url": "extra/index.html",
    "revision": "c40ba0f30a5c0c1a03fb8c9db688e371"
  },
  {
    "url": "flutter/index.html",
    "revision": "3fe30a00d6a8210a88a8ee8a5867be68"
  },
  {
    "url": "flutter/test.html",
    "revision": "84d6f8d23dfd527be0d128e34f874ed6"
  },
  {
    "url": "guide/changelog.html",
    "revision": "fd21ba802000f976368e058c516a6e5e"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "92a9968cac48a894336d5556d65b7fb8"
  },
  {
    "url": "guide/faq.html",
    "revision": "6612915de1a7ed8c9188abcea19175c0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ba9d63aad0f09a8aeb8efa8f7f58bf8a"
  },
  {
    "url": "guide/index.html",
    "revision": "f6789f1b94d94560f443053a21a505a7"
  },
  {
    "url": "guide/palette.html",
    "revision": "ffa29ff2911864abcedc269a0d7c1258"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "78dc16ff205ae80a42734bd3efd345ee"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "54ab9b7a9cc5ee3841521e966da5ee5e"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "a423c42880f7303e1dc27085a36dd7bf"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "6565320e28a7a46a9b512e72863adfbc"
  },
  {
    "url": "index.html",
    "revision": "eecc06aa7846927bac33d4ca8e3ae858"
  },
  {
    "url": "js/index.html",
    "revision": "241a1644db03f48759005695c1164db0"
  },
  {
    "url": "js/PC页面适配.html",
    "revision": "0d86749bedea28e1e10e0eee68d00a8d"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "9c83b79a8a7c1f2cd769950578a99609"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "fb592e272fd5869f29b69b983c4aad53"
  },
  {
    "url": "midway/index.html",
    "revision": "d2a23dc7f860cf53523e9444dee656c5"
  },
  {
    "url": "notes/brew.html",
    "revision": "116ec383118c73e45b9a710f248bb6b4"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "837bb3dd18b0ab480c374cd74b09f9a6"
  },
  {
    "url": "notes/git.html",
    "revision": "2e3f1d24f384ee72ba02a3d4a2ac2474"
  },
  {
    "url": "notes/index.html",
    "revision": "f7d73d1c49ff8f9ec99ba8d35db0daa3"
  },
  {
    "url": "notes/nginx.html",
    "revision": "585f6315331c56430788239a98876e12"
  },
  {
    "url": "notes/node.html",
    "revision": "316ceb639c8019b95663a05bbd16d3fe"
  },
  {
    "url": "notes/npm.html",
    "revision": "f92b8ddf6a6c5555198d9b69152c5c77"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "b0085983d41758c0e2f5a036ebdc8294"
  },
  {
    "url": "notes/vscode.html",
    "revision": "9d336dfc38dce73f7a3d9bd1cfbce0ef"
  },
  {
    "url": "plugin/index.html",
    "revision": "5a8094737ec19a8d5c1b3610c463844f"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "b5c0ba94f9e376a5f6bd290265a1a71f"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "28056f26fb86421bb1eb4ecd8772f0aa"
  },
  {
    "url": "tag/index.html",
    "revision": "7ee0791cd06bc0c9ba30ebfd26a5c3ef"
  },
  {
    "url": "uniapp/index.html",
    "revision": "bc3117d26aabf8bbeb721574b638508d"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "74433a44ae68fcdf6a2708d48cf7dc8f"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "b183651dd38147e1f3d27dfe76687191"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "853762e1a1c1a658034f3c694d5e5c68"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "592b9738956453a3ceb4c1a8b0fc7573"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "b0e9d3117631255219692e11e725b772"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "27f11348686ee7eab5a6c568eda6b853"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "4dda6e121c7b8cb679f0b1939970f71a"
  },
  {
    "url": "Vera/index.html",
    "revision": "7709d1ab2bef85b2b1ef0dd5e5a0a23c"
  },
  {
    "url": "website/index.html",
    "revision": "f4ea327ca5eac71d05fa7fad2aa34eeb"
  },
  {
    "url": "website/package.html",
    "revision": "87cb23088f8f6e8050a2f8e74e7e2476"
  },
  {
    "url": "website/rearend.html",
    "revision": "e5d3e62594f2b699fe723c6342dc9340"
  },
  {
    "url": "website/tools.html",
    "revision": "08aeacb7bbc878be76029e53e1129e24"
  },
  {
    "url": "website/webclient.html",
    "revision": "4c0f7d72d2a31ec7342578343a7775ce"
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
