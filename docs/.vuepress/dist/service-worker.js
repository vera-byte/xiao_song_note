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
    "revision": "776e38055b883b00176e88fa9eb53829"
  },
  {
    "url": "About.html",
    "revision": "0934e788518a0bac814584804f1ebcf7"
  },
  {
    "url": "assets/css/0.styles.0ea9ec4a.css",
    "revision": "0bb3c5fba32e1cea0173e1a20686c583"
  },
  {
    "url": "assets/img/logo.gif",
    "revision": "da16c0d8dbb602f333da1b4ba1a3141d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7abc4dfd.js",
    "revision": "4c80d18ec05b536757e2aef44c6e88d2"
  },
  {
    "url": "assets/js/11.dd6afb9c.js",
    "revision": "37b8011a3abd268fe38ff507bdda3163"
  },
  {
    "url": "assets/js/12.281e485b.js",
    "revision": "fbea38bf0b44457f54694289129fc1ea"
  },
  {
    "url": "assets/js/13.79fbdd04.js",
    "revision": "8b6d9c9bf28c8f0e4837239b3e4494c7"
  },
  {
    "url": "assets/js/14.fd50ed85.js",
    "revision": "ccf19de5c7aec6a4c31b110f6ed2a562"
  },
  {
    "url": "assets/js/15.47b6104c.js",
    "revision": "6585b8bc630eb0216f39789d5e526669"
  },
  {
    "url": "assets/js/16.9a13cb48.js",
    "revision": "d65846f76d282892bc6cce272e7a1b3f"
  },
  {
    "url": "assets/js/17.3c893140.js",
    "revision": "0387959b1d777f52951e252a7b640a74"
  },
  {
    "url": "assets/js/18.57232f6e.js",
    "revision": "80a8422b960a2f86e15aaa1d71ee85f3"
  },
  {
    "url": "assets/js/19.06b744cb.js",
    "revision": "7a11576cb2989cd19c0e47c19aaceaa5"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.a29e8803.js",
    "revision": "931a94af7593d637a29323aa295ab52a"
  },
  {
    "url": "assets/js/21.01c7bcb2.js",
    "revision": "f1baca94f332a5bd0ce1f7f2383354bc"
  },
  {
    "url": "assets/js/22.e56185b5.js",
    "revision": "b93a4d2500510b8adfd6f1e3709bb3e8"
  },
  {
    "url": "assets/js/23.54743acc.js",
    "revision": "628ea56232194393824b6cedb444d3ec"
  },
  {
    "url": "assets/js/24.4cdfeb03.js",
    "revision": "6a2ebffec4cf8c426c70a5605528d374"
  },
  {
    "url": "assets/js/25.d06e107c.js",
    "revision": "6c52107390df2a1ccaf2c1d98661423c"
  },
  {
    "url": "assets/js/26.860b38e8.js",
    "revision": "f753a0523c2679b47fa42738ba606127"
  },
  {
    "url": "assets/js/27.1945fff2.js",
    "revision": "58a5295dc769b97e3a58d2c70f0df00c"
  },
  {
    "url": "assets/js/28.65cb0ee9.js",
    "revision": "c2f3ecb73f45d139dd2986a78529aee8"
  },
  {
    "url": "assets/js/29.927f94a8.js",
    "revision": "9a834fc4f914604fb9959a69b864a724"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/30.c73132df.js",
    "revision": "ea35c28577fb8ab6a004b0e7f6bfd249"
  },
  {
    "url": "assets/js/4.7bf2046a.js",
    "revision": "8a992d2b61c29a3f2452ff9fcc44a281"
  },
  {
    "url": "assets/js/5.e0a0fda5.js",
    "revision": "6d272b9fc157dd0c80a34648fcb35132"
  },
  {
    "url": "assets/js/6.cf47de03.js",
    "revision": "6270f0954235fb0f3e56e11cca26d041"
  },
  {
    "url": "assets/js/7.93656afc.js",
    "revision": "39a2049c8983604b41201c97b8b5c780"
  },
  {
    "url": "assets/js/8.e053df84.js",
    "revision": "638bb3d8bf3ef327a7b7b65e1b3324c9"
  },
  {
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.0e54be35.js",
    "revision": "4e03a617d5f557cda649df7ff75b04e9"
  },
  {
    "url": "category/index.html",
    "revision": "0395272114e57a3ecbb7f1b2bfee67d7"
  },
  {
    "url": "egg/index.html",
    "revision": "29260e8c06303b75a77162a07095ba94"
  },
  {
    "url": "electron/index.html",
    "revision": "6cd0a0501393047e64ea0a616130f44c"
  },
  {
    "url": "flutter/index.html",
    "revision": "9d46c2f1c3823ee0b652e0f00ed1e6c8"
  },
  {
    "url": "html/vscode/mac.html",
    "revision": "b5df510c230822915800c1c3e278e6e2"
  },
  {
    "url": "html/vscode/windows.html",
    "revision": "baec1f2bfd3068f08515f92a32fd4caf"
  },
  {
    "url": "index.html",
    "revision": "2136b414aa9f11bbc0ed4ba8c505d506"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "3bb594ed7bbe8d69b32f9471f4b945d8"
  },
  {
    "url": "notes/git.html",
    "revision": "762bbc09cb2390e37cb0cadaf644f0bd"
  },
  {
    "url": "notes/index.html",
    "revision": "b8a2fe23da882619ed47164ad223edea"
  },
  {
    "url": "notes/nginx.html",
    "revision": "89958ef01038df1fac0b599f4080f534"
  },
  {
    "url": "notes/node.html",
    "revision": "3f4b28ba174243610aae4fef6086471b"
  },
  {
    "url": "notes/npm.html",
    "revision": "d1d0af87e9a9089f214e107445917162"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "d9c5ae548a000e1cb82f36fe62227f44"
  },
  {
    "url": "notes/vscode.html",
    "revision": "8d4d4a287f8282b1916e1bcedc05fd51"
  },
  {
    "url": "tag/index.html",
    "revision": "1ceb2bf296da47b34d9615edca4dbdbc"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "6971fd0775db1e0e7f35caf60f043bf0"
  },
  {
    "url": "uniapp/index.html",
    "revision": "d527a13be094db2faacbdf7282b1755c"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "5d210fdb1303489270320553ea911cdb"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "5548a60095d18dfa9542ddf70865582d"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "dd8c0760a7c40aa5cdeba3a2845b5de6"
  },
  {
    "url": "Vera/index.html",
    "revision": "7bf985c3afca8a6a7e30c71724dbaa01"
  },
  {
    "url": "website/index.html",
    "revision": "425f6d01d353bc41a1298f0104d84f5d"
  },
  {
    "url": "website/package.html",
    "revision": "f6086a65f8ab1ccc4f7897d99fff87da"
  },
  {
    "url": "website/rearend.html",
    "revision": "7393fa0f2b871deb991bacb127b42a69"
  },
  {
    "url": "website/tools.html",
    "revision": "95d01e610714a0fe90abac0072a589c3"
  },
  {
    "url": "website/webclient.html",
    "revision": "5c454814c95f2bf4f8519ad005f928c7"
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
