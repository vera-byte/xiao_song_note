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
    "revision": "54b47eb665194566e3c4b3b7a4bd3a2b"
  },
  {
    "url": "About.html",
    "revision": "7d62e68dce7c3d27174a2c5695d500b3"
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
    "url": "assets/js/12.2d8a3b61.js",
    "revision": "8a47c1a695de15fcb338d28c02c86fb0"
  },
  {
    "url": "assets/js/13.4d6decbf.js",
    "revision": "57573de7794f0a4e1c91cb58cbf8de45"
  },
  {
    "url": "assets/js/14.2ed947a0.js",
    "revision": "a6608b501c1afa84241896ef05a6ba2a"
  },
  {
    "url": "assets/js/15.e0d41ce5.js",
    "revision": "2c0d48c27bd33ce87c98be7de2610fc9"
  },
  {
    "url": "assets/js/16.42fb2d56.js",
    "revision": "4df75fb4678d042d53c78420714ecbbf"
  },
  {
    "url": "assets/js/17.dc50463f.js",
    "revision": "5890a6c9e83847ce59f4408f8e0ee6cd"
  },
  {
    "url": "assets/js/18.32eb0e3d.js",
    "revision": "d6d9de7894fdd193dab5c1639dfd4370"
  },
  {
    "url": "assets/js/19.6a9c8a35.js",
    "revision": "887659a57c97ff6a45a48585ddbde104"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.66049cc3.js",
    "revision": "3844814a8d90d042064ba511f76685c8"
  },
  {
    "url": "assets/js/21.46512f3f.js",
    "revision": "e5ffa6179f6866b842e4cf8c6a9edb64"
  },
  {
    "url": "assets/js/22.20e28b1a.js",
    "revision": "8048497b88a20b4e092d932b08036474"
  },
  {
    "url": "assets/js/23.6173ea63.js",
    "revision": "f02e91015e6ca6cc166f6f0750f182ba"
  },
  {
    "url": "assets/js/24.6096bd8e.js",
    "revision": "0d36d20f30118bf0eb83727a32bcc942"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.1595a118.js",
    "revision": "fa793a1e5e1595caa1d3f1c8529e9cfc"
  },
  {
    "url": "category/index.html",
    "revision": "db177557a9258b4307a8526a46097bf2"
  },
  {
    "url": "egg/index.html",
    "revision": "3dad1f753f5414153fff6b769f2e50a0"
  },
  {
    "url": "electron/index.html",
    "revision": "b941982160dc947b1513ec4dee0ca645"
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
    "revision": "b97c55a5cf9694bb8706b94e20c2f35a"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "adf6b89b30d175766499afe8cf956cd3"
  },
  {
    "url": "notes/git.html",
    "revision": "210347bab931eb6e446c46990b0abc23"
  },
  {
    "url": "notes/index.html",
    "revision": "a8e33e9519098e71dc9222e7e54ad043"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a2abb4c377693910b5098d79165c544a"
  },
  {
    "url": "notes/node.html",
    "revision": "b914f4080383e47aa4390f1e255fd4d4"
  },
  {
    "url": "notes/npm.html",
    "revision": "04e7b78442fa2b8c2237a2ac1e49b6fa"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "80e78819bb1377851080478b6db9b44b"
  },
  {
    "url": "notes/vscode.html",
    "revision": "10cec2fe66ce3be16610fa632601f2f1"
  },
  {
    "url": "tag/index.html",
    "revision": "226c42132bea8f43571869fa7209be96"
  },
  {
    "url": "uniapp/index.html",
    "revision": "5256ed2d4d8de32e7537dab742aa1ea0"
  },
  {
    "url": "website/index.html",
    "revision": "2011bd98d38b6b9a6240d3b4dbb1432f"
  },
  {
    "url": "website/package.html",
    "revision": "76e523542587888d46a3054473f9428a"
  },
  {
    "url": "website/rearend.html",
    "revision": "933ac227a642db6692dc50c9de605cd8"
  },
  {
    "url": "website/tools.html",
    "revision": "92d6504e783b069cb5146dc27cc8c736"
  },
  {
    "url": "website/webclient.html",
    "revision": "e2e9d27a5be294b64d1f24668cfa34dd"
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
