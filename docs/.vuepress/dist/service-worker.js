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
    "revision": "849daefcb50089d8d24ae9a2e5b5bf74"
  },
  {
    "url": "About.html",
    "revision": "1655686c2c9c5b8b7200dfab499caa02"
  },
  {
    "url": "assets/css/0.styles.ebe8c901.css",
    "revision": "c99c60cea7f58118159f2fdab0440190"
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
    "url": "assets/js/10.6e91c46c.js",
    "revision": "99ba9bc3db3490383d98d5eb761b839a"
  },
  {
    "url": "assets/js/11.863e526a.js",
    "revision": "c067d69b915e55345f165a7f2dfde439"
  },
  {
    "url": "assets/js/12.08ebf092.js",
    "revision": "f415c4c5c2c97889329134cc254e6450"
  },
  {
    "url": "assets/js/13.4a1f36e7.js",
    "revision": "989a2e552b2252c138580df142db6f82"
  },
  {
    "url": "assets/js/14.6b45c364.js",
    "revision": "5d50e97907c7385612e13ba4a375f582"
  },
  {
    "url": "assets/js/15.3ceecfa6.js",
    "revision": "deabeb52d9772bffaab519dd62e9daaa"
  },
  {
    "url": "assets/js/16.ed9b391c.js",
    "revision": "92c41661aec4bc3cdf5420f888a1feef"
  },
  {
    "url": "assets/js/17.4eb24542.js",
    "revision": "4645865b38af3d1f4d99340adaff33c2"
  },
  {
    "url": "assets/js/18.9fcea992.js",
    "revision": "0ca648444b1a41c11c8b4db9cdd590e5"
  },
  {
    "url": "assets/js/19.ff6dd569.js",
    "revision": "633bf72f9695524be7a667d7655bb791"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.202e581e.js",
    "revision": "b65addedfe44506157af5619f30aafdb"
  },
  {
    "url": "assets/js/21.6127a66d.js",
    "revision": "d71957456d5ba8ed8ec09c30bc35c630"
  },
  {
    "url": "assets/js/22.9bb5e32a.js",
    "revision": "3633e6549eeb8a7be2a5831df1c76399"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.4ea23b0a.js",
    "revision": "bed99249981df37236a2470cc6e89fdf"
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
    "url": "assets/js/9.ee711027.js",
    "revision": "f464e3928123f10f13bb1526c4152476"
  },
  {
    "url": "assets/js/app.5143ee97.js",
    "revision": "c4273f3ecbaa4a356024d6746a8df19b"
  },
  {
    "url": "category/index.html",
    "revision": "05b904cfc18ea73ae24fc1f79082610b"
  },
  {
    "url": "egg/index.html",
    "revision": "ee3598eb23d3b4359db670ce1934b227"
  },
  {
    "url": "electron/index.html",
    "revision": "88d165c7c2d1bcf9fec2bd1d9d194b57"
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
    "revision": "081432e8facb762cd371e602628fcfa2"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "427f9132dde422285cdd8ab32a6bd9be"
  },
  {
    "url": "notes/git.html",
    "revision": "252478995605d36c4c458445c424f4e9"
  },
  {
    "url": "notes/index.html",
    "revision": "f4795aa73abba131187a180f1dc8db3e"
  },
  {
    "url": "notes/nginx.html",
    "revision": "45fec4638ce1726ab82554f33922ed2e"
  },
  {
    "url": "notes/npm.html",
    "revision": "e376665689c33966704164bf1ab12319"
  },
  {
    "url": "notes/vscode.html",
    "revision": "4c2adcf00cead1e82541c63d26bc9268"
  },
  {
    "url": "tag/index.html",
    "revision": "1978c9aa9c49a0a3df1de7d21be1fea3"
  },
  {
    "url": "uniapp/index.html",
    "revision": "edaca3593f34f21c4b4e2ae472fb881a"
  },
  {
    "url": "website/index.html",
    "revision": "0848ddde1be3eba3d7f1096f59720a87"
  },
  {
    "url": "website/rearend.html",
    "revision": "2a256d4aed6e7d45f7effa60c49b6ad2"
  },
  {
    "url": "website/tools.html",
    "revision": "b2e5891e395704e4401d4e075ec5f2f0"
  },
  {
    "url": "website/webclient.html",
    "revision": "75d5c888be8f1223b74effa087747f16"
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
