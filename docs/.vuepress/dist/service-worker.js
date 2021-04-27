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
    "revision": "054650e53ab4a2205d1837310d33053e"
  },
  {
    "url": "About.html",
    "revision": "566fb7d019ef00781d81e1f42c02a20a"
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
    "url": "assets/js/10.986f205c.js",
    "revision": "87170068bb9c1a40e1852240d7d72234"
  },
  {
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
  },
  {
    "url": "assets/js/12.266e412f.js",
    "revision": "8e467baf203ad8a3e8f9b04f238565be"
  },
  {
    "url": "assets/js/13.e91cae28.js",
    "revision": "83f9dad467f7accd354b4e0521d7099b"
  },
  {
    "url": "assets/js/14.6b45c364.js",
    "revision": "5d50e97907c7385612e13ba4a375f582"
  },
  {
    "url": "assets/js/15.e0d41ce5.js",
    "revision": "2c0d48c27bd33ce87c98be7de2610fc9"
  },
  {
    "url": "assets/js/16.62f91758.js",
    "revision": "6f51859f92b58e4d47cf3912651911a7"
  },
  {
    "url": "assets/js/17.e0d5811b.js",
    "revision": "c5346380834ad4cc663568381c6c01fa"
  },
  {
    "url": "assets/js/18.a02e2f74.js",
    "revision": "0a1a062f131d8eecbcd5a197749330d7"
  },
  {
    "url": "assets/js/19.25f515a9.js",
    "revision": "f43bbd4fbdb2cd1d54b77193877f1a90"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.f159b750.js",
    "revision": "701a9d6dcdd97d9116adf7816911dd1a"
  },
  {
    "url": "assets/js/21.038e47a9.js",
    "revision": "23b3e2d9b32098bc3e38230876b8035a"
  },
  {
    "url": "assets/js/22.e6064936.js",
    "revision": "5f90487273397825498a741cf4e539cc"
  },
  {
    "url": "assets/js/23.df9e9766.js",
    "revision": "6e524e88a2c83c99dcaa864241d68e2d"
  },
  {
    "url": "assets/js/24.83d83e76.js",
    "revision": "69375640d8d6c3f4eabe482600bab4fb"
  },
  {
    "url": "assets/js/25.5fbbc176.js",
    "revision": "b6901aec46923e843f7dc60aa2169046"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.df9681b5.js",
    "revision": "ea60694c0e9701a870d72479c285db8a"
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
    "url": "assets/js/9.938f2b8c.js",
    "revision": "aec7eb2403fbb09cd1ab5034301aa2ff"
  },
  {
    "url": "assets/js/app.73f51af3.js",
    "revision": "c19c29c24d8bb761d9149ec5197e12d2"
  },
  {
    "url": "category/index.html",
    "revision": "80518ef0eaa66762f1bfda7f491e179d"
  },
  {
    "url": "egg/index.html",
    "revision": "7172fb1db987562ff08ceec801b86141"
  },
  {
    "url": "electron/index.html",
    "revision": "72663830d07c461a45aac9cefab93f06"
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
    "revision": "eb9030b8cdaa48a39757cea94f443598"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "970f87bc1142b60d622a6c104eb7ec66"
  },
  {
    "url": "notes/git.html",
    "revision": "752cb3666725cacebed365288818f471"
  },
  {
    "url": "notes/index.html",
    "revision": "2fb26df61b0fcb4d8da64a2e734e0b6b"
  },
  {
    "url": "notes/nginx.html",
    "revision": "aea62cf59443c26acdba0933855a9ab7"
  },
  {
    "url": "notes/node.html",
    "revision": "e831e3d55b97ce20f129ddbf14b02be3"
  },
  {
    "url": "notes/npm.html",
    "revision": "7a23726ddf84372665f9abc1e7a480ba"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "c0880794c6bfdcf15315591913ab9def"
  },
  {
    "url": "notes/vscode.html",
    "revision": "ca9045c638da63df3a197f785439efe6"
  },
  {
    "url": "tag/index.html",
    "revision": "83d9605b5f069728ae81ba188699bf00"
  },
  {
    "url": "uniapp/index.html",
    "revision": "f5c776118c826069e0c43e08440ba495"
  },
  {
    "url": "website/index.html",
    "revision": "0f578c262341cac5cb2e1ef4cc4fa06e"
  },
  {
    "url": "website/package.html",
    "revision": "c1d9b780ef92e11b0e09d5a0dd2ec758"
  },
  {
    "url": "website/rearend.html",
    "revision": "b7161006a51e835d5d2abe437850ad27"
  },
  {
    "url": "website/tools.html",
    "revision": "6481627533a332dfd1a0ac266611822a"
  },
  {
    "url": "website/webclient.html",
    "revision": "b882ac1b39ff8c219f2116304ce5c9eb"
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
