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
    "revision": "dfe43a512338ff72a4eda1eea775f983"
  },
  {
    "url": "About.html",
    "revision": "7a15b867bcc61d85d7714734d22d8cb2"
  },
  {
    "url": "assets/css/0.styles.5ff83213.css",
    "revision": "6d9f0275a51edd04eb5c0a0220c2311f"
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
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
  },
  {
    "url": "assets/js/12.fe2aec7d.js",
    "revision": "c1a80f3e45455543c15e330856a85d3f"
  },
  {
    "url": "assets/js/13.635a8acb.js",
    "revision": "7cdcaec28939fa96f871c2606f135405"
  },
  {
    "url": "assets/js/14.b7510dfc.js",
    "revision": "143ad8d403018b76eaff10757b971ebd"
  },
  {
    "url": "assets/js/15.ff96a853.js",
    "revision": "695a7ab0376d49c4f5c6c9636d02b55c"
  },
  {
    "url": "assets/js/16.42fb2d56.js",
    "revision": "4df75fb4678d042d53c78420714ecbbf"
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
    "url": "assets/js/19.01f406cd.js",
    "revision": "e1b4ff41640907ddee9c4a818486a0f0"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.927dca0c.js",
    "revision": "b88d23bd7cd42b923901e84d44b12211"
  },
  {
    "url": "assets/js/21.c1336633.js",
    "revision": "0169856ab03063a7e96b6daaac071f5f"
  },
  {
    "url": "assets/js/22.33b15eb5.js",
    "revision": "659084679b16c5f58e6a368b4d2e9871"
  },
  {
    "url": "assets/js/23.91a9ecfc.js",
    "revision": "dd109423807458ed222d3a07b2556964"
  },
  {
    "url": "assets/js/24.4ace0aa7.js",
    "revision": "0b02d9026e793051818539c69d5544ba"
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
    "url": "assets/js/5.5e46106a.js",
    "revision": "6b3a82f5d9b99d285b1f3b29b1b76842"
  },
  {
    "url": "assets/js/6.e86e045e.js",
    "revision": "3c02651623c6f53e11d57177197f5b98"
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
    "url": "assets/js/9.5a15916e.js",
    "revision": "41e431dc5b8780d57ac71a4bbe1c6de4"
  },
  {
    "url": "assets/js/app.249e19fd.js",
    "revision": "853a71634c8ec631ceb7697995bcab31"
  },
  {
    "url": "category/index.html",
    "revision": "5e35abbe3f762244ee8fe6f80ba963f2"
  },
  {
    "url": "egg/index.html",
    "revision": "72fcb440a643921558713eb2a781bb90"
  },
  {
    "url": "electron/index.html",
    "revision": "7c0aff5a46df9f8fe34b3e28ff18a0ed"
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
    "revision": "c496d06169c2819ef76c8dc3eafe1583"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "94429e4d5851311b05ed9e8a386a975c"
  },
  {
    "url": "notes/git.html",
    "revision": "2370d345c72e5212f1e66ac2b044231a"
  },
  {
    "url": "notes/index.html",
    "revision": "d07bd2a7206c6736a213d7cc720e6f92"
  },
  {
    "url": "notes/nginx.html",
    "revision": "bd533782aca34967434368eaad96e5a6"
  },
  {
    "url": "notes/node.html",
    "revision": "bbd420a64d0becea12b434f46f98753f"
  },
  {
    "url": "notes/npm.html",
    "revision": "d20299f73820a7a1bc8598b82396929b"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "f2d7598aada5db0273c4886424f45781"
  },
  {
    "url": "notes/vscode.html",
    "revision": "40fffe0028515393825aed4982c20992"
  },
  {
    "url": "tag/index.html",
    "revision": "3ab1b68615c25281b6bbf41e0d4b56c6"
  },
  {
    "url": "uniapp/index.html",
    "revision": "88dc2441acc3c1f1e79e3920c351885e"
  },
  {
    "url": "website/index.html",
    "revision": "2d0e94e6baa365d5345e060b10ed14aa"
  },
  {
    "url": "website/package.html",
    "revision": "777615b8a7b24f0626f1dee35a655840"
  },
  {
    "url": "website/rearend.html",
    "revision": "8c424824f694aaeca4028e8997baca79"
  },
  {
    "url": "website/tools.html",
    "revision": "96399587787b1428f4cc11598198fedc"
  },
  {
    "url": "website/webclient.html",
    "revision": "88ee82205553eaa8f3dfa304981f280a"
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
