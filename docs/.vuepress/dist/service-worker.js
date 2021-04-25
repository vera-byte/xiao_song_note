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
    "revision": "306e5fc4c32daa5ffcff898c7d5720a3"
  },
  {
    "url": "About.html",
    "revision": "97206d9a9f251a8cd433a887484fa023"
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
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
  },
  {
    "url": "assets/js/12.08ebf092.js",
    "revision": "f415c4c5c2c97889329134cc254e6450"
  },
  {
    "url": "assets/js/13.7416dfc2.js",
    "revision": "7cc84476d98735926ba14374d9e313c1"
  },
  {
    "url": "assets/js/14.6b45c364.js",
    "revision": "5d50e97907c7385612e13ba4a375f582"
  },
  {
    "url": "assets/js/15.e9e05780.js",
    "revision": "ac25f33836006afb9dbf002a4cba4849"
  },
  {
    "url": "assets/js/16.a0fbceda.js",
    "revision": "7136d44dcbebfbe2260005d792a13788"
  },
  {
    "url": "assets/js/17.b272e4be.js",
    "revision": "ac2628d20edb470d212035907e3922ee"
  },
  {
    "url": "assets/js/18.4c94b15a.js",
    "revision": "10b7fdb057514ee4c8bfbbe9c8eb2fac"
  },
  {
    "url": "assets/js/19.7bcd9363.js",
    "revision": "73f700b6b7ded972b00e0fce1c8ff03d"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.9dba3bf2.js",
    "revision": "36bad801cd47279783657ed293a6352e"
  },
  {
    "url": "assets/js/21.295fcfe2.js",
    "revision": "b4e0c27939fffc9e858e19f91a6a09f1"
  },
  {
    "url": "assets/js/22.15945967.js",
    "revision": "98370fed22805ce219bf8dc5859a54a2"
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
    "url": "assets/js/9.938f2b8c.js",
    "revision": "aec7eb2403fbb09cd1ab5034301aa2ff"
  },
  {
    "url": "assets/js/app.1857a845.js",
    "revision": "0a21e0eaa0da2bbb5dfcc587a07c10b8"
  },
  {
    "url": "category/index.html",
    "revision": "6e8058ecb385e67d9a063102863fc304"
  },
  {
    "url": "egg/index.html",
    "revision": "ea59fc3369e7dd03ec022aeac3822bdf"
  },
  {
    "url": "electron/index.html",
    "revision": "7c7f00242c37016f8e9e7e9e2690e9df"
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
    "revision": "02ad0789f3ea2114cb9c10e055c78b8e"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "c7fed7ff46db93f419c089ecd6e9fc0f"
  },
  {
    "url": "notes/git.html",
    "revision": "df6ef40942a1ddeabf1e141e233e87b4"
  },
  {
    "url": "notes/index.html",
    "revision": "3bc297d459eb535aed0c877ac3babcf0"
  },
  {
    "url": "notes/nginx.html",
    "revision": "88a1abb2e549abdd4ef215820903325e"
  },
  {
    "url": "notes/npm.html",
    "revision": "129f6692fdcb4fe45b8fd6de4e5b133d"
  },
  {
    "url": "notes/vscode.html",
    "revision": "bcc85d018355da79a6ff13b1edeca05e"
  },
  {
    "url": "tag/index.html",
    "revision": "b9de3322bb641c51e70187bcb855b64b"
  },
  {
    "url": "uniapp/index.html",
    "revision": "e83040170f44705be5d9ca12bbf7e050"
  },
  {
    "url": "website/index.html",
    "revision": "bde04480d20c0215707bdf47e4607ded"
  },
  {
    "url": "website/package.html",
    "revision": "a9ea2f7c2c42aaafc35a0429bd42c83d"
  },
  {
    "url": "website/rearend.html",
    "revision": "b5916fac31a5a6c688c4a08064798479"
  },
  {
    "url": "website/tools.html",
    "revision": "75d4bbd5071e9d92eeac82bf71da986c"
  },
  {
    "url": "website/webclient.html",
    "revision": "bbcff035035e5848bc48dc35641b2813"
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
