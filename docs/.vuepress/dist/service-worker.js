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
    "revision": "ed22337196c61ee159afc122dd4e5c55"
  },
  {
    "url": "About.html",
    "revision": "ef6475e9016e71e8891d297c09943f2e"
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
    "url": "assets/js/12.fe2aec7d.js",
    "revision": "c1a80f3e45455543c15e330856a85d3f"
  },
  {
    "url": "assets/js/13.1a8d266c.js",
    "revision": "f239f02248256c5ee87c1cce72ce1b25"
  },
  {
    "url": "assets/js/14.96180414.js",
    "revision": "e63b9cfb0308bc39ecb59d9b8327967d"
  },
  {
    "url": "assets/js/15.9e45848b.js",
    "revision": "801ca03aa309971dd4ff633e6537cc9b"
  },
  {
    "url": "assets/js/16.83dda819.js",
    "revision": "4e056de6fc27bb2795e2064842c4eb15"
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
    "url": "assets/js/19.bb222004.js",
    "revision": "ac18be33c30f1a1b28ede1e681946522"
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
    "url": "assets/js/9.5a15916e.js",
    "revision": "41e431dc5b8780d57ac71a4bbe1c6de4"
  },
  {
    "url": "assets/js/app.b350e9dd.js",
    "revision": "131fc49168d710bb68fa61cd353d025c"
  },
  {
    "url": "category/index.html",
    "revision": "2b7edf76a05f32f1a10e2a5c99328249"
  },
  {
    "url": "egg/index.html",
    "revision": "be789faaadb77cc3d09840258ecd071e"
  },
  {
    "url": "electron/index.html",
    "revision": "474948f79a8123bf5fc331bca7e59eff"
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
    "revision": "3ef209a7f3a3cdaac56d626f52d58058"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "68c7d9d6c848ef2a754ce9ab56f70c70"
  },
  {
    "url": "notes/git.html",
    "revision": "efc74cd57678bca2cdfdb2b6726d6fc8"
  },
  {
    "url": "notes/index.html",
    "revision": "7e1b916c09c0f17bae468aee8a0296ba"
  },
  {
    "url": "notes/nginx.html",
    "revision": "f8b8f143db81ab3ad024e2edaaadbaac"
  },
  {
    "url": "notes/npm.html",
    "revision": "12827c61b79be8225b933915ceefb6dd"
  },
  {
    "url": "notes/vscode.html",
    "revision": "c8f2e70564e047c53ed0fa7e2cb8232c"
  },
  {
    "url": "tag/index.html",
    "revision": "9d0c294fd3220a465755841297cd5b83"
  },
  {
    "url": "uniapp/index.html",
    "revision": "3a56260b54c206fe3ca698db0d4c75cb"
  },
  {
    "url": "website/index.html",
    "revision": "d2b39e1e7e9d87f2469804856c377815"
  },
  {
    "url": "website/package.html",
    "revision": "55e30bef7f8938e23303cd8cbb0ebd76"
  },
  {
    "url": "website/rearend.html",
    "revision": "1111fb1235c5c3e316512142cd4492df"
  },
  {
    "url": "website/tools.html",
    "revision": "0c7fe0131f9cf330046f3aa6e3402206"
  },
  {
    "url": "website/webclient.html",
    "revision": "a26f7366b1f188cfacd489f3d73f121d"
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
