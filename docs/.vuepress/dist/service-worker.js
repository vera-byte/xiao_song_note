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
    "revision": "e47a655ef1003371fffbcb9fab0cc6cb"
  },
  {
    "url": "About.html",
    "revision": "3e887ce31695fbadade2e7583065777a"
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
    "url": "assets/js/11.1f47a2f5.js",
    "revision": "9e74448fc2b093fa27e48c95b1c920c1"
  },
  {
    "url": "assets/js/12.2d8a3b61.js",
    "revision": "8a47c1a695de15fcb338d28c02c86fb0"
  },
  {
    "url": "assets/js/13.635a8acb.js",
    "revision": "7cdcaec28939fa96f871c2606f135405"
  },
  {
    "url": "assets/js/14.6caed945.js",
    "revision": "4ffe2809f09d545ae6d94d836fa42b79"
  },
  {
    "url": "assets/js/15.0180e547.js",
    "revision": "da3e50b35ddcb209acf041f443e4634f"
  },
  {
    "url": "assets/js/16.3e0bfa1e.js",
    "revision": "bd311002f450a7b34d25055eda3248e8"
  },
  {
    "url": "assets/js/17.3cc17eef.js",
    "revision": "df66f2f26124037bf046a17a0506f838"
  },
  {
    "url": "assets/js/18.e7a1aa58.js",
    "revision": "79d441e47c0bc5e422abaa27426f045a"
  },
  {
    "url": "assets/js/19.25f515a9.js",
    "revision": "f43bbd4fbdb2cd1d54b77193877f1a90"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.f638739c.js",
    "revision": "c1a2e2b8bf6cd0c5fd0a4fe8c82b890b"
  },
  {
    "url": "assets/js/21.af6168d8.js",
    "revision": "0d00b5402f88ada7568d4528427482d7"
  },
  {
    "url": "assets/js/22.5380ebd7.js",
    "revision": "a0694df5400c29b0ef427c033969492e"
  },
  {
    "url": "assets/js/23.abc84364.js",
    "revision": "0f9f6a062aef03257c354a2c21dfa956"
  },
  {
    "url": "assets/js/24.179a2fb9.js",
    "revision": "21423ee71915a4b348c8dec3e91f55d0"
  },
  {
    "url": "assets/js/25.29935595.js",
    "revision": "3450b5db48b23c05c1435b26c8b6d32a"
  },
  {
    "url": "assets/js/26.e85e7912.js",
    "revision": "04fd32acfd39391b40dffbf35f3c476b"
  },
  {
    "url": "assets/js/27.d79ab1bd.js",
    "revision": "d6eb1c61be9ac260e56a6d7597b8bd8e"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.905651e4.js",
    "revision": "a655c3b3e3952821b488c699b78958fd"
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
    "url": "assets/js/app.7df8a092.js",
    "revision": "d053f900fac6c04123bf9df3e12d7a79"
  },
  {
    "url": "category/index.html",
    "revision": "0598efc7997f8b269de926da97d798ee"
  },
  {
    "url": "egg/index.html",
    "revision": "1d14042865a1aabbb1d222d037cbf9bb"
  },
  {
    "url": "electron/index.html",
    "revision": "d8278cd7ce80a2475055a492fd6e2fbf"
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
    "revision": "a206ad59955e28bf42b21aefabc189df"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "34ff8d1b60a5236fc79f21597046626c"
  },
  {
    "url": "notes/git.html",
    "revision": "d11f1a5cfe400f15d662b5da5f03886a"
  },
  {
    "url": "notes/index.html",
    "revision": "e900eb1432a633873dc1668c4345ab29"
  },
  {
    "url": "notes/nginx.html",
    "revision": "14f335d13a7f5c78c219d1ffb65a2c93"
  },
  {
    "url": "notes/node.html",
    "revision": "87f703c144c0fe8748fcbde142fac020"
  },
  {
    "url": "notes/npm.html",
    "revision": "d742d36ee9f935a192a0bea618a853dd"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "b92ba4a79272af5207f9ddeb98b54fe4"
  },
  {
    "url": "notes/vscode.html",
    "revision": "0024a317bd9876c5fb93763353e573f7"
  },
  {
    "url": "tag/index.html",
    "revision": "80a68c1e0317deffa579ee9671978ef6"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "7e97486953f21e4b5ff41a469f3b073b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "1483f47e2307696ac0b6d783399e3930"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "b142b663e048041d3b07e541acb79a95"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "65cade0b554a816a2b87d43ccd8ec2e1"
  },
  {
    "url": "website/index.html",
    "revision": "9a91d5dad1b2ebdc3c6dfe14bf07ba3a"
  },
  {
    "url": "website/package.html",
    "revision": "f986aed63c58fc8a6902abb94a3c687c"
  },
  {
    "url": "website/rearend.html",
    "revision": "04e386c1adb4ed71c25fe7a876e0ce68"
  },
  {
    "url": "website/tools.html",
    "revision": "1434a27caad42f6e29673fbebf909eb4"
  },
  {
    "url": "website/webclient.html",
    "revision": "7ee86bee4bf77e0a56fe7f2bf2dc0446"
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
