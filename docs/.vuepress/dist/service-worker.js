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
    "revision": "37da75dc17fe0674c28fc27a42717396"
  },
  {
    "url": "About.html",
    "revision": "817102f644c405bbc188d3d8fe3e84da"
  },
  {
    "url": "assets/css/0.styles.a23d6157.css",
    "revision": "45a473d74ac28cf2e633d89edd07dee3"
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
    "url": "assets/js/13.1a8d266c.js",
    "revision": "f239f02248256c5ee87c1cce72ce1b25"
  },
  {
    "url": "assets/js/14.9de783f8.js",
    "revision": "ed0186ec507e0c2a8b154b6f6ebc9052"
  },
  {
    "url": "assets/js/15.e0d41ce5.js",
    "revision": "2c0d48c27bd33ce87c98be7de2610fc9"
  },
  {
    "url": "assets/js/16.83dda819.js",
    "revision": "4e056de6fc27bb2795e2064842c4eb15"
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
    "url": "assets/js/9.ee711027.js",
    "revision": "f464e3928123f10f13bb1526c4152476"
  },
  {
    "url": "assets/js/app.8f1ad1bb.js",
    "revision": "0b1560f6d24ec8fa6fdde71937a0626b"
  },
  {
    "url": "category/index.html",
    "revision": "a2b78addfdf58d739e6f6fa69bc8b640"
  },
  {
    "url": "egg/index.html",
    "revision": "5f0604c66b9cc17b4809cba6201e4e0b"
  },
  {
    "url": "electron/index.html",
    "revision": "147ace37904b772e1083bf782895082c"
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
    "revision": "8ffb04444ed58ab947d92ab46f1c5a36"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "4b4545d8d2f3c94f45810ab4a8ad4bdc"
  },
  {
    "url": "notes/git.html",
    "revision": "130e77eec4ddc1d6e967f0a8b2c044c5"
  },
  {
    "url": "notes/index.html",
    "revision": "10b09a8e6afc38c76da137e271fa5294"
  },
  {
    "url": "notes/nginx.html",
    "revision": "5e74fc2e165e9984844a86ea68e8148b"
  },
  {
    "url": "notes/npm.html",
    "revision": "56af78589ec51a08c6b1cc93ded32765"
  },
  {
    "url": "notes/vscode.html",
    "revision": "154afaf2fa32b99504c7b7329256108f"
  },
  {
    "url": "tag/index.html",
    "revision": "7f658df61ac4095c4d7ce1720a15b6e2"
  },
  {
    "url": "uniapp/index.html",
    "revision": "2e96f07540817ba5c2d34bcb14af10ec"
  },
  {
    "url": "website/index.html",
    "revision": "deb741342880d7c6ee453a0cbfcec6a1"
  },
  {
    "url": "website/rearend.html",
    "revision": "615394066bd0977af342383258eed875"
  },
  {
    "url": "website/tools.html",
    "revision": "be9c62336688b0de6640096aaf3da0a1"
  },
  {
    "url": "website/webclient.html",
    "revision": "3c8c2332a441ebeb5eadf16e9baf624d"
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
