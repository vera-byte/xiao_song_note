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
    "revision": "5ab9ba80c6033f831c83e56bd10306bc"
  },
  {
    "url": "About.html",
    "revision": "132a0868796ca3ba6af854c596fbf804"
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
    "url": "assets/js/10.6e91c46c.js",
    "revision": "99ba9bc3db3490383d98d5eb761b839a"
  },
  {
    "url": "assets/js/11.863e526a.js",
    "revision": "c067d69b915e55345f165a7f2dfde439"
  },
  {
    "url": "assets/js/12.f06337c1.js",
    "revision": "03794b518f5b966ce55cc68fdab9103e"
  },
  {
    "url": "assets/js/13.e91cae28.js",
    "revision": "83f9dad467f7accd354b4e0521d7099b"
  },
  {
    "url": "assets/js/14.2e6146cf.js",
    "revision": "189af3b4e3492c199dec02b2a18d110b"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.4ee2b5b0.js",
    "revision": "85785293803d8e3e2ff52270603c0842"
  },
  {
    "url": "assets/js/17.d63fae6a.js",
    "revision": "4031f4686996f1190ea63ee885a78eb0"
  },
  {
    "url": "assets/js/18.9fcea992.js",
    "revision": "0ca648444b1a41c11c8b4db9cdd590e5"
  },
  {
    "url": "assets/js/19.4e0975c2.js",
    "revision": "13b5a2b1edad8363b5140c22b30dcf6d"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.4765ed8a.js",
    "revision": "2667cc5fb3e0ce67e74b28b0e24db82b"
  },
  {
    "url": "assets/js/21.3a32185f.js",
    "revision": "f0f5f6b06eb9c3c34968fd3a239c55f9"
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
    "url": "assets/js/app.63dc0fc9.js",
    "revision": "9215eb14befe3d9bee1a866d896c06b4"
  },
  {
    "url": "category/index.html",
    "revision": "36cda19f19bb18ca3322c230d72ebc08"
  },
  {
    "url": "egg/index.html",
    "revision": "1792fa414d4e0856edf77c386f0c5fbb"
  },
  {
    "url": "electron/index.html",
    "revision": "7ac9bc9d70268d0ebf83c466f92ce0e7"
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
    "revision": "1a20459a7ccf6e00ec840ba681191208"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "8e80723623da63eb4c2c2cd2055cfac4"
  },
  {
    "url": "notes/git.html",
    "revision": "6056314b6a0127e2352c609bd8256118"
  },
  {
    "url": "notes/index.html",
    "revision": "270fe0a91c65c99ed636a2b6195b3c61"
  },
  {
    "url": "notes/nginx.html",
    "revision": "e2621368801eb6f0ba0c9b74f9a15cc6"
  },
  {
    "url": "notes/npm.html",
    "revision": "5cc96126b6fdde636ae1450534a6272b"
  },
  {
    "url": "notes/vscode.html",
    "revision": "f20932c0ccbc1f11ab07e2cde467371a"
  },
  {
    "url": "tag/index.html",
    "revision": "ebf293f978281e6922bcffaa8a4a83d8"
  },
  {
    "url": "uniapp/index.html",
    "revision": "460f6eef95805921640bf6e1fdce47de"
  },
  {
    "url": "website/index.html",
    "revision": "9c048810bd8baf05286eba9358763d8e"
  },
  {
    "url": "website/rearend.html",
    "revision": "39ed9d00d8a12cf687db50f2c7840514"
  },
  {
    "url": "website/tools.html",
    "revision": "7978be3cf2a3499e782eef98573a1857"
  },
  {
    "url": "website/webclient.html",
    "revision": "54470df52a5bd16725a8d1f4cac8e935"
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
