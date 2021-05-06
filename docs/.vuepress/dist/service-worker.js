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
    "revision": "32907278c74bf8a01311b7b2345e5b07"
  },
  {
    "url": "About.html",
    "revision": "827cb6cc1cd12d78e235b035945c5d18"
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
    "url": "assets/js/11.863e526a.js",
    "revision": "c067d69b915e55345f165a7f2dfde439"
  },
  {
    "url": "assets/js/12.fe2aec7d.js",
    "revision": "c1a80f3e45455543c15e330856a85d3f"
  },
  {
    "url": "assets/js/13.6c1a7965.js",
    "revision": "68e7bdb6f9de00d257a2ab7948b63112"
  },
  {
    "url": "assets/js/14.486c076f.js",
    "revision": "3d049af2feb4983388fff602fd85e80c"
  },
  {
    "url": "assets/js/15.ff96a853.js",
    "revision": "695a7ab0376d49c4f5c6c9636d02b55c"
  },
  {
    "url": "assets/js/16.5b19c77b.js",
    "revision": "889c04f8422e4373175e70683edb812b"
  },
  {
    "url": "assets/js/17.514faf42.js",
    "revision": "80fcda31acac41d7b965136dd1c02c88"
  },
  {
    "url": "assets/js/18.32eb0e3d.js",
    "revision": "d6d9de7894fdd193dab5c1639dfd4370"
  },
  {
    "url": "assets/js/19.01f406cd.js",
    "revision": "e1b4ff41640907ddee9c4a818486a0f0"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.0c6d6ae9.js",
    "revision": "e702570d79b3d6fe0d998080bbfc6c70"
  },
  {
    "url": "assets/js/21.73668403.js",
    "revision": "4ffa5595fb18d1cfc2b301fe07e5fc57"
  },
  {
    "url": "assets/js/22.29adc7d9.js",
    "revision": "37d6a6c04db2f65f2fb9bf9959bb5044"
  },
  {
    "url": "assets/js/23.b8828d9b.js",
    "revision": "3599b7eb35698fb6ea278718165fefa0"
  },
  {
    "url": "assets/js/24.910f79c0.js",
    "revision": "028eed539b379c69b7a817cbb3a08047"
  },
  {
    "url": "assets/js/25.c9e4e5d5.js",
    "revision": "744558f732516ef4614f77e583124517"
  },
  {
    "url": "assets/js/26.b5cd22ab.js",
    "revision": "10d20167cb7c63ab7d66ac28c21d0426"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.b2dd4006.js",
    "revision": "fe395b7bd2ea0e7c868b024a2a7d139d"
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
    "url": "assets/js/9.a2c74a15.js",
    "revision": "b79b2623323121b8beb5536c4e55c89f"
  },
  {
    "url": "assets/js/app.b2c1f361.js",
    "revision": "3f4b511079dfb2c98023076912bd7549"
  },
  {
    "url": "category/index.html",
    "revision": "b1c780844467b79876be3b7f4da280d0"
  },
  {
    "url": "egg/index.html",
    "revision": "261d22b1f2510ce9217dfb1952d4958a"
  },
  {
    "url": "electron/index.html",
    "revision": "e394c620182db329cdf90326b253e50e"
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
    "revision": "1b1e998b98ac90197dd0df736aacd3ee"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "b71723bcc00c6be1a2ab95e41f010401"
  },
  {
    "url": "notes/git.html",
    "revision": "3c362060bc5ef44e139d24096283de4b"
  },
  {
    "url": "notes/index.html",
    "revision": "70feef56ad3008b1fe941d96e88a7e4d"
  },
  {
    "url": "notes/nginx.html",
    "revision": "5e08c35e0e7f3d1771978a0f2fd1400e"
  },
  {
    "url": "notes/node.html",
    "revision": "bd8c11ab761201dd26e478e71c3667c8"
  },
  {
    "url": "notes/npm.html",
    "revision": "7b3472139316df433248341e75053dc6"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "1ded5cb3279a4d34b8216a1c4895999a"
  },
  {
    "url": "notes/vscode.html",
    "revision": "8bb8afb8c4b44ee98db18ba47b8a6555"
  },
  {
    "url": "tag/index.html",
    "revision": "2620caf580a197fa69c9b290c5574a37"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "9ec0ceb2eaa97a665f02b986ee2585a2"
  },
  {
    "url": "uniapp/index.html",
    "revision": "457cad92898dd1f01db175a82bdd5993"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "2919ea680c797404a618858f21a24dff"
  },
  {
    "url": "website/index.html",
    "revision": "8a9442995393eb04c244e1bb5c0616e6"
  },
  {
    "url": "website/package.html",
    "revision": "35eabd1938356dae9a58e85c8b82e2e0"
  },
  {
    "url": "website/rearend.html",
    "revision": "58cf9cae460b21565e60a4d094d542f7"
  },
  {
    "url": "website/tools.html",
    "revision": "0f139569b6fc11319f7681c79ba8a4b0"
  },
  {
    "url": "website/webclient.html",
    "revision": "8f56482c10a9aa156cc16fe84e2036ad"
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
