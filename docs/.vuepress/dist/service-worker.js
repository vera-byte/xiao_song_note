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
    "revision": "a15f843cba003c675d79ee31a3a57a8c"
  },
  {
    "url": "About.html",
    "revision": "c8a383eaf033cc8139dfee8ff50086c4"
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
    "url": "assets/js/10.b6b18b80.js",
    "revision": "7d14de354a68acd5a99f3a6873250684"
  },
  {
    "url": "assets/js/11.dd6afb9c.js",
    "revision": "37b8011a3abd268fe38ff507bdda3163"
  },
  {
    "url": "assets/js/12.a46ec861.js",
    "revision": "fab92b47ccdf2a92edb3bae7c6ea4a9d"
  },
  {
    "url": "assets/js/13.79fbdd04.js",
    "revision": "8b6d9c9bf28c8f0e4837239b3e4494c7"
  },
  {
    "url": "assets/js/14.85050bb7.js",
    "revision": "3bb5d44a35aaf69f5ea6ff239a579f5e"
  },
  {
    "url": "assets/js/15.47b6104c.js",
    "revision": "6585b8bc630eb0216f39789d5e526669"
  },
  {
    "url": "assets/js/16.483a2a63.js",
    "revision": "63d4ccf8a04692aba52aac8604d00b46"
  },
  {
    "url": "assets/js/17.20862830.js",
    "revision": "55a54cef61652dd2b2967d001ca1813b"
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
    "url": "assets/js/20.d9ec6db7.js",
    "revision": "122e9184d4aec3d8bad090cad4e7293d"
  },
  {
    "url": "assets/js/21.f89c7b40.js",
    "revision": "d07478b11e188935f3b8f35d8b3e512b"
  },
  {
    "url": "assets/js/22.39a310f0.js",
    "revision": "5c4608c538ced0c83a3208f24116de8e"
  },
  {
    "url": "assets/js/23.ca4f1c72.js",
    "revision": "7e1ebc8a23a625b6e141f10f8f0e2e95"
  },
  {
    "url": "assets/js/24.fa4b4906.js",
    "revision": "fd1e3483165d6274ed60ce7a25b96fb1"
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
    "url": "assets/js/27.0befa126.js",
    "revision": "4494eb8682e3851944a79c3bee3fa23e"
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
    "url": "assets/js/app.3fe16093.js",
    "revision": "871111e60ffa75f02c72083d341af22d"
  },
  {
    "url": "category/index.html",
    "revision": "fab76f37c43bb0a5934abaa99a7d5eb1"
  },
  {
    "url": "egg/index.html",
    "revision": "c7fdfea1ad18f8daee26f7a019ede68f"
  },
  {
    "url": "electron/index.html",
    "revision": "68de3ee00f7111ec94ab8d0c86b8ae15"
  },
  {
    "url": "flutter/index.html",
    "revision": "0e8c57b7ef7e58cff86cfb231079c6e5"
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
    "revision": "2b00e23751cfbc764bea300ecfb794a1"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "f62c1194eb55321ee4da6ad323a3ec2f"
  },
  {
    "url": "notes/git.html",
    "revision": "f0fb259f1e88c57e1b4a966a06535052"
  },
  {
    "url": "notes/index.html",
    "revision": "f300c3a0877ad128a310bcd9d59eaf10"
  },
  {
    "url": "notes/nginx.html",
    "revision": "3e8f33ab43e2476dc569c56f0990e938"
  },
  {
    "url": "notes/node.html",
    "revision": "d5796fcc7a0d61b8fae2b3beddcbeaf8"
  },
  {
    "url": "notes/npm.html",
    "revision": "fe98b6878e5c6d4d6b6c4468a8f90467"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "9664009c10819899e16d13054731d21d"
  },
  {
    "url": "notes/vscode.html",
    "revision": "cd6efd8aee3a07632a3970a0b0e2e070"
  },
  {
    "url": "tag/index.html",
    "revision": "a521f4168f7ce6a541fdfa463ac616a1"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "718f2608239d7eb1a85f808a91227679"
  },
  {
    "url": "uniapp/index.html",
    "revision": "7cbf7acb7a65cb5bafdaac54ca79ff5e"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "83ccfe2956bc6ba246367e1fabea3824"
  },
  {
    "url": "uniapp/Uniapp使用支付宝原生扫码插件.html",
    "revision": "7bd9004a8e5f78e2d4298d2cb48157ec"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "901c8d76710c6d0943bed07ff2f66d5a"
  },
  {
    "url": "Vera/index.html",
    "revision": "4fdefde6e48402f63630aa0518816925"
  },
  {
    "url": "website/index.html",
    "revision": "af1f5d06e904e85fa1d66abc87347473"
  },
  {
    "url": "website/package.html",
    "revision": "0f0f0ab75af41e0f65ff1641dbb6cff7"
  },
  {
    "url": "website/rearend.html",
    "revision": "16e77c7e6fefe68c8abcaaef22117261"
  },
  {
    "url": "website/tools.html",
    "revision": "daeb4b5614860313d63456330c2521de"
  },
  {
    "url": "website/webclient.html",
    "revision": "09047e79406ae2af98f89e0723be5abc"
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
