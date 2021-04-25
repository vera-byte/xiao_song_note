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
    "revision": "be66cf6dc919d3346f51f1238130d745"
  },
  {
    "url": "About.html",
    "revision": "ca1cfb0f7b75a4151b5900aa143cc38e"
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
    "url": "assets/js/13.80716ee1.js",
    "revision": "9d7ed16f55e8ee5bd36a4f3c8f3db8e5"
  },
  {
    "url": "assets/js/14.6639fce7.js",
    "revision": "45366ea96cbe3578d8008fe2ff4c6515"
  },
  {
    "url": "assets/js/15.9e45848b.js",
    "revision": "801ca03aa309971dd4ff633e6537cc9b"
  },
  {
    "url": "assets/js/16.e952bf27.js",
    "revision": "097d5e1ff348d0e9af2fe6e736ce5c5f"
  },
  {
    "url": "assets/js/17.42e68b3a.js",
    "revision": "fa84d82b9c1fd216384ed894d07df87e"
  },
  {
    "url": "assets/js/18.abefd913.js",
    "revision": "980bf0cae50fe47003301ce2c733528d"
  },
  {
    "url": "assets/js/19.24d99169.js",
    "revision": "74749cac92d0596ed5c3065b42b519f2"
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
    "url": "assets/js/21.295fcfe2.js",
    "revision": "b4e0c27939fffc9e858e19f91a6a09f1"
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
    "url": "assets/js/9.5a15916e.js",
    "revision": "41e431dc5b8780d57ac71a4bbe1c6de4"
  },
  {
    "url": "assets/js/app.351860bc.js",
    "revision": "3a52c16e534ced7986f8a8f6fda51777"
  },
  {
    "url": "category/index.html",
    "revision": "1790306ed19ac8dcf93affbaf83a13bc"
  },
  {
    "url": "egg/index.html",
    "revision": "9e95411419650e7b1bf41f5f0bb80649"
  },
  {
    "url": "electron/index.html",
    "revision": "502a36c1dc5c50fd905c85d502ede804"
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
    "revision": "22ee8d25f293fa80c5f3d3e4be57a162"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "9267d2eb98cbdd6859696da112ec49e2"
  },
  {
    "url": "notes/git.html",
    "revision": "e0fec83bf732b96eb14a898d5916aae1"
  },
  {
    "url": "notes/index.html",
    "revision": "b8784c35096a172d89ab61e1c67b060c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "de8b5da0c864053c52a797359f37a822"
  },
  {
    "url": "notes/npm.html",
    "revision": "62230edb9c9244961d7a0289938022e8"
  },
  {
    "url": "notes/vscode.html",
    "revision": "4b0c3820288d34a7d134d0acfce7312a"
  },
  {
    "url": "tag/index.html",
    "revision": "6cad1eaf6019ea765554937c041a2689"
  },
  {
    "url": "uniapp/index.html",
    "revision": "4366057a92251e5b393671ade8cb05e6"
  },
  {
    "url": "website/index.html",
    "revision": "e7328cc7f21333298448ba37e3d6fc6c"
  },
  {
    "url": "website/package.html",
    "revision": "7a492e3d17cd54dba66e3d50870d514d"
  },
  {
    "url": "website/rearend.html",
    "revision": "2436fdb44c4323c6371a1b839a329976"
  },
  {
    "url": "website/tools.html",
    "revision": "c6045aafb952ae856a6af5176b6f31f0"
  },
  {
    "url": "website/webclient.html",
    "revision": "a3de4cdaadd6f843fcfda9cbcf4a7267"
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
