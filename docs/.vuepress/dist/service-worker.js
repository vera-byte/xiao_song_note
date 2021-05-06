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
    "revision": "0efa1c98f7f55af7cba30663277eaf1a"
  },
  {
    "url": "About.html",
    "revision": "4fc7837e49fa806f7a41ca4bca68f5ff"
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
    "url": "assets/js/11.ac0b9adb.js",
    "revision": "f05685b1d80b3f27632018a98b762522"
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
    "url": "assets/js/15.e0d41ce5.js",
    "revision": "2c0d48c27bd33ce87c98be7de2610fc9"
  },
  {
    "url": "assets/js/16.3e0bfa1e.js",
    "revision": "bd311002f450a7b34d25055eda3248e8"
  },
  {
    "url": "assets/js/17.e6269558.js",
    "revision": "ba93d1af8b11f0a42385e6a5d48f7172"
  },
  {
    "url": "assets/js/18.32eb0e3d.js",
    "revision": "d6d9de7894fdd193dab5c1639dfd4370"
  },
  {
    "url": "assets/js/19.344ca220.js",
    "revision": "f28e9260e194f4e548e7982f003090a8"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.63f77707.js",
    "revision": "da6d3d51472dfd49dcca95c580f349c5"
  },
  {
    "url": "assets/js/21.1aa57827.js",
    "revision": "15f97555aba27c5e4ccd4a5a106dcc6c"
  },
  {
    "url": "assets/js/22.1068e1a3.js",
    "revision": "41a2eb938fb38cfc32e737981dcc8d3f"
  },
  {
    "url": "assets/js/23.09e65aaf.js",
    "revision": "ef0961c675cc5e55e842134ed5b2263d"
  },
  {
    "url": "assets/js/24.a84dd9e2.js",
    "revision": "45e2c5d80bdbbbbfd064992d8a7412f7"
  },
  {
    "url": "assets/js/25.f956a518.js",
    "revision": "a18d69a4a1f9643fdc81ced7b04d552c"
  },
  {
    "url": "assets/js/26.15ffcce4.js",
    "revision": "df32063e3bf0b84b3bafad489447f9f7"
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
    "url": "assets/js/9.892cfdd5.js",
    "revision": "5efb292ac5581ce5c5df189e7616c9df"
  },
  {
    "url": "assets/js/app.1d91e436.js",
    "revision": "e82e770a496cb8c2eec9d3ab182b460f"
  },
  {
    "url": "category/index.html",
    "revision": "5a8e85992f1a26f3cad4d94216f30f56"
  },
  {
    "url": "egg/index.html",
    "revision": "7d67fe67b4bc2923769d94ca520daf28"
  },
  {
    "url": "electron/index.html",
    "revision": "dc426c66e42a1701f14756b5b75c493d"
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
    "revision": "e5bbfe6956d7f710e731c5fc895ca361"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "4b7ca3b03c832f75fd234a421bb03876"
  },
  {
    "url": "notes/git.html",
    "revision": "88c124ea8b418fb2c80cf8e7143e0589"
  },
  {
    "url": "notes/index.html",
    "revision": "22b42cf106923ca909098213f348783f"
  },
  {
    "url": "notes/nginx.html",
    "revision": "889126e5112f3aa030516351c19d5676"
  },
  {
    "url": "notes/node.html",
    "revision": "6833edb38b27c51258542b2e9547a854"
  },
  {
    "url": "notes/npm.html",
    "revision": "ebbd8b3e8934a3549e92dbc7db9eb771"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "3aae13df0eb9e6e7ea226f29ebc61a8a"
  },
  {
    "url": "notes/vscode.html",
    "revision": "347fbfcbf5829d2015b3c0165d249a4e"
  },
  {
    "url": "tag/index.html",
    "revision": "389feb9c48ffce600ca3dc0cd782478b"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "591daecc45fbb7aa38d4e7d70256ce02"
  },
  {
    "url": "uniapp/index.html",
    "revision": "7af931538ff655a04e10f3ca4e6edc66"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "aafac5ab3557c34670bfe57ed64b72f1"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "534dba75819fbfb524934c9092805e07"
  },
  {
    "url": "website/index.html",
    "revision": "13bb8eb59627c5c0c712ff79741cd715"
  },
  {
    "url": "website/package.html",
    "revision": "4f7e721a0356d98bbc61a772ffe979e0"
  },
  {
    "url": "website/rearend.html",
    "revision": "fcf0c7b9399cc4bc4faf2f24817eba23"
  },
  {
    "url": "website/tools.html",
    "revision": "a2dc93075b20a884ffbdffa866b7cb5d"
  },
  {
    "url": "website/webclient.html",
    "revision": "156b676b09a6d9da8f145c052dd7687a"
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
