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
    "revision": "e572f6b15e3749af0edfbc5677985faf"
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
    "url": "assets/js/13.89715a6b.js",
    "revision": "216edc86cc1c3604132700e102b6a880"
  },
  {
    "url": "assets/js/14.0f93a6a6.js",
    "revision": "8955b72b118a7f42a1a159ddc3939685"
  },
  {
    "url": "assets/js/15.062aba1f.js",
    "revision": "d138d9c5da10503f934d86b9cb4a6163"
  },
  {
    "url": "assets/js/16.f8e2734f.js",
    "revision": "4f0e148e41b072a64187628a6949e77c"
  },
  {
    "url": "assets/js/17.388fefe8.js",
    "revision": "3ed25881e7df7b16b9efec6aebb9e4ff"
  },
  {
    "url": "assets/js/18.25e2379e.js",
    "revision": "c3cb4c9e657346a2dafa55d213b13a62"
  },
  {
    "url": "assets/js/19.4b5bef98.js",
    "revision": "383a9edc23a5039a7cb407481e56a226"
  },
  {
    "url": "assets/js/2.4f3480b1.js",
    "revision": "eb323f1b8dc7cae20a7681bb9f453465"
  },
  {
    "url": "assets/js/20.f031247b.js",
    "revision": "0b127622b4cf4cffb7099992ae31bb47"
  },
  {
    "url": "assets/js/21.7b8a2756.js",
    "revision": "bf3e16f7c02962a1f58d92eccdfe88db"
  },
  {
    "url": "assets/js/22.475a596b.js",
    "revision": "2b40ec65057dd7e66e983085e7e6e470"
  },
  {
    "url": "assets/js/23.b55d7eb8.js",
    "revision": "9adde44762edc1732baed0e930753535"
  },
  {
    "url": "assets/js/24.b70a784d.js",
    "revision": "07557c606414a7ee092b5a4ee05f785f"
  },
  {
    "url": "assets/js/25.cceb8403.js",
    "revision": "f99e8605b39168aedb06162e55f76e66"
  },
  {
    "url": "assets/js/26.7fcef8e4.js",
    "revision": "be639cf5ab8038a6790ce5f3cc42bc37"
  },
  {
    "url": "assets/js/27.20bc908d.js",
    "revision": "535800559ef806926e1ffbcdfab07d96"
  },
  {
    "url": "assets/js/28.02b933c2.js",
    "revision": "4eb67473b7c9230c3886ec938cec70d5"
  },
  {
    "url": "assets/js/29.46a88a64.js",
    "revision": "9e39cb5759046f65420363502f2f6463"
  },
  {
    "url": "assets/js/3.fe6d1e76.js",
    "revision": "6a5a57ee604f9c7027bc75c1c0ca90e0"
  },
  {
    "url": "assets/js/30.fda6ae5d.js",
    "revision": "8ea90a283c907300601f2f8bcb6084b3"
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
    "url": "assets/js/33.3845a9bf.js",
    "revision": "63cf458f65acd71804e6e405bb487661"
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
    "url": "assets/js/36.a9d02528.js",
    "revision": "655ff7f6decb92f82c1b5a81a63d2782"
  },
  {
    "url": "assets/js/37.9d975bc6.js",
    "revision": "0749aaa3c753493192ae59afb72f5d71"
  },
  {
    "url": "assets/js/38.200afa67.js",
    "revision": "8e34a608a5229ee02b56af6c81392031"
  },
  {
    "url": "assets/js/39.c9171b24.js",
    "revision": "d2a554dd7ae239777aa222d5ba9e8a67"
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
    "url": "assets/js/42.b01733b2.js",
    "revision": "4cb0a419c3c48feeb20d29f4c5f41f22"
  },
  {
    "url": "assets/js/43.38f1d83a.js",
    "revision": "954c43e2d21d6ad54cd92fa45b7058c7"
  },
  {
    "url": "assets/js/44.2b0e9370.js",
    "revision": "dfb252db4288141eb04e5dc6c4983592"
  },
  {
    "url": "assets/js/45.1b9b22cb.js",
    "revision": "aab749be6c32d6f0399fdef82fdb17c8"
  },
  {
    "url": "assets/js/46.7e294da7.js",
    "revision": "2e67eb7cf8943f2f9b45d03c26fcf56c"
  },
  {
    "url": "assets/js/47.2983e7e4.js",
    "revision": "9f589283190d55d2d4efcae4edd8af41"
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
    "url": "assets/js/6.2806a424.js",
    "revision": "27faba128ce93bfea72c0f459961baae"
  },
  {
    "url": "assets/js/7.9caa1433.js",
    "revision": "f944aa0f4b00f76e6a60aaaa5ffeb468"
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
    "url": "assets/js/app.be0148ae.js",
    "revision": "c296358a1aca0c36ec3f1ca607233cc3"
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
    "revision": "e95848d53a98fbf72f18b92a9484ddbc"
  },
  {
    "url": "category/index.html",
    "revision": "05eb69aab438ce014c68dece161e6407"
  },
  {
    "url": "coocscreator/index.html",
    "revision": "f49139f4572f8b32d021a4be56979b2b"
  },
  {
    "url": "egg/index.html",
    "revision": "44441168125a4fb467e142f6dbabfe3d"
  },
  {
    "url": "electron/index.html",
    "revision": "0dce5406d02696efacca244ac4a2815a"
  },
  {
    "url": "extra/index.html",
    "revision": "5aad9619ed87a0b38a7214459ec8a099"
  },
  {
    "url": "flutter/index.html",
    "revision": "c55cdb9f3cfcb011e2b2172a853e02e4"
  },
  {
    "url": "flutter/test.html",
    "revision": "35236dfa1aaf471ac62e773b9ab4bfb4"
  },
  {
    "url": "guide/changelog.html",
    "revision": "10514e82e1164e3314cab10552044df3"
  },
  {
    "url": "guide/extend-config.html",
    "revision": "5721efd90cd5c607577c401409800d34"
  },
  {
    "url": "guide/faq.html",
    "revision": "4ebae0f4e75381c129922fe7d8208faf"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "23157e65614feb63ccf8c41b7fa52a0d"
  },
  {
    "url": "guide/index.html",
    "revision": "8355171132f46d8c71e03b5f76506967"
  },
  {
    "url": "guide/palette.html",
    "revision": "9da9c63f038b89cb1e289e1535d883c0"
  },
  {
    "url": "guide/sponsor.html",
    "revision": "13a95c8e8663ccf56ce86afa7f2777fc"
  },
  {
    "url": "guide/using-antd.html",
    "revision": "ded247625100427f96e4f1aa18ab03f6"
  },
  {
    "url": "guide/using-vuepress-creator.html",
    "revision": "9988b601abf55322f7a6ad08bed9c3e5"
  },
  {
    "url": "guide/writing-norms.html",
    "revision": "240483364d2ce315094e8454cba918d4"
  },
  {
    "url": "index.html",
    "revision": "8ac94352c622c38bbeeb8831a9abf53d"
  },
  {
    "url": "js/index.html",
    "revision": "08655210dac717bba10de21d19f7029a"
  },
  {
    "url": "js/折扣计算.html",
    "revision": "46b37e41983a40e886cc8f0cb958deca"
  },
  {
    "url": "js/纯前端实现模糊搜索.html",
    "revision": "7734642abcd08d6c0395db7ae10684f1"
  },
  {
    "url": "notes/brew.html",
    "revision": "eab4a6fbd4483fbfe7790f8d5dc19e02"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "06dbb26fedae1195b8264e9a27bbbc4b"
  },
  {
    "url": "notes/git.html",
    "revision": "ff43f2c8a7f248db4b3666bf59e3e0bc"
  },
  {
    "url": "notes/index.html",
    "revision": "11d7b4d5db54a735b27d5d56197f526c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "907acdb7ba392708ed8fbaa2c9117271"
  },
  {
    "url": "notes/node.html",
    "revision": "458fa3475d941c692017460c0872c549"
  },
  {
    "url": "notes/npm.html",
    "revision": "02e10f885e3b71c54e03fa722060e96b"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "1bc79f65d577f23c2f550cfae1ecdee6"
  },
  {
    "url": "notes/vscode.html",
    "revision": "bcb1270cdf3f5724b44870544493723c"
  },
  {
    "url": "plugin/index.html",
    "revision": "772fa2eaec821563f63432361d8e9cf7"
  },
  {
    "url": "plugin/medium-zoom.html",
    "revision": "6375eda92098b63b5d8eb99dc671f3a8"
  },
  {
    "url": "plugin/vuepress-plugin-graysite.html",
    "revision": "5981ac3e5af99452415303769aa3531d"
  },
  {
    "url": "tag/index.html",
    "revision": "df2b6ca9e3120b112f33253db777edd2"
  },
  {
    "url": "uniapp/index.html",
    "revision": "644629eea3d4c7864b156620734ea6d6"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "81b25f15d0dcae35886e4bc17a80c80b"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "00390419f2e23fb50a7bfb158c95c5c1"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "5adaaf637a07eda4c178a63f93294cb6"
  },
  {
    "url": "uniapp/uniapp适配.html",
    "revision": "eaa58e9bf822b1ea709d11683d2d7fad"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "31a7b7ccf2ebba77c720f90776a59e7f"
  },
  {
    "url": "uniapp/富文本.html",
    "revision": "4b0961b5c7fd6f94e2b3efbcbbe40de5"
  },
  {
    "url": "uniapp/异步组件.html",
    "revision": "bca8780915f2b6f8a83d0f77839ec9b0"
  },
  {
    "url": "Vera/index.html",
    "revision": "c0d043785128121b392024fd81ef2000"
  },
  {
    "url": "website/index.html",
    "revision": "b7f6bbfdb232d2e512e24138650dfda1"
  },
  {
    "url": "website/package.html",
    "revision": "0e6cd0a505e4cbd70cdffac923d4d31c"
  },
  {
    "url": "website/rearend.html",
    "revision": "8433d23d658618aebc51185e31067a8b"
  },
  {
    "url": "website/tools.html",
    "revision": "ca772c321ad30b321de931982a955565"
  },
  {
    "url": "website/webclient.html",
    "revision": "35da54871251d84c0e7139dc3bed7133"
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
