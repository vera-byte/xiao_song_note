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
    "revision": "5d12903bc98a9f2fd373109231be2140"
  },
  {
    "url": "About.html",
    "revision": "f124ea1467ab7e04afe77cc749cc20a0"
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
    "url": "assets/js/12.08ebf092.js",
    "revision": "f415c4c5c2c97889329134cc254e6450"
  },
  {
    "url": "assets/js/13.80716ee1.js",
    "revision": "9d7ed16f55e8ee5bd36a4f3c8f3db8e5"
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
    "url": "assets/js/16.83dda819.js",
    "revision": "4e056de6fc27bb2795e2064842c4eb15"
  },
  {
    "url": "assets/js/17.9d7672be.js",
    "revision": "76eec52ef60e22b45597ac4f1430c9f7"
  },
  {
    "url": "assets/js/18.390d756b.js",
    "revision": "b60890a1ab1710ba40814df4fb3f9c63"
  },
  {
    "url": "assets/js/19.436ed610.js",
    "revision": "1dc615b84ae509a259dacb317d207002"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.81be5394.js",
    "revision": "734cf9358c08c06d0256b953cb562538"
  },
  {
    "url": "assets/js/21.74c5df3f.js",
    "revision": "ded0c4491ab912e794f1c4e3fcf212df"
  },
  {
    "url": "assets/js/22.014a2095.js",
    "revision": "461a41a805db444043d6be6788bc6072"
  },
  {
    "url": "assets/js/23.ff032486.js",
    "revision": "b2e7f183ed10f5c705c336e11aa168f2"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.3c886f31.js",
    "revision": "51e82fe7e95a54bc9b7e1bb6f983ece2"
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
    "url": "assets/js/9.892cfdd5.js",
    "revision": "5efb292ac5581ce5c5df189e7616c9df"
  },
  {
    "url": "assets/js/app.27c96c22.js",
    "revision": "de451bebd5175d572afa1fbac1c1a685"
  },
  {
    "url": "category/index.html",
    "revision": "78e462a12a7fb82265ad33db25d19813"
  },
  {
    "url": "egg/index.html",
    "revision": "f4ebaaec9bea154d1f8640a17f09f556"
  },
  {
    "url": "electron/index.html",
    "revision": "1b01689311b12df03286b3054c180722"
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
    "revision": "2263b1bff94431f5d56d1631affd9e48"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "bb25abdb85bea66d997927b4e2c62612"
  },
  {
    "url": "notes/git.html",
    "revision": "e7f1b303171f4a1a1bc05b4f86a1dfc2"
  },
  {
    "url": "notes/index.html",
    "revision": "5cfd22edfca9c6a385ed679a58ce0862"
  },
  {
    "url": "notes/nginx.html",
    "revision": "66679a5158e8fe0bddfaf633ff87f8e9"
  },
  {
    "url": "notes/npm.html",
    "revision": "bb95dac7ba3a55605f35eaa3c1835212"
  },
  {
    "url": "notes/vscode.html",
    "revision": "e084699761a7a2a7a701398806502387"
  },
  {
    "url": "tag/index.html",
    "revision": "92565a2e1cc428cb75e8af72ea379cc9"
  },
  {
    "url": "uniapp/index.html",
    "revision": "811a50dfac37b2dd61db900a619aaa6d"
  },
  {
    "url": "website/index.html",
    "revision": "957db7539e41dc5e2def695ec975d9ba"
  },
  {
    "url": "website/package.html",
    "revision": "71bee72353d1c7416eef9f678b33d291"
  },
  {
    "url": "website/rearend.html",
    "revision": "8b32283ee3214da143a051919c9de44e"
  },
  {
    "url": "website/tools.html",
    "revision": "29b32c8eb91c870bedeccf28a0c0f67d"
  },
  {
    "url": "website/webclient.html",
    "revision": "a8a6539ad92f3552cf82bd69905f9e0c"
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
