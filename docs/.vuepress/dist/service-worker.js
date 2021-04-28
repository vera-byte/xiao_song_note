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
    "revision": "4744b55d56c0f10d6ceae57a4c8aca9a"
  },
  {
    "url": "About.html",
    "revision": "84fb538aef859e9ccaaeb900b39eaea9"
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
    "url": "assets/js/10.2deecf10.js",
    "revision": "246a243e980939e406d78228db6b9bd2"
  },
  {
    "url": "assets/js/11.e35e04d6.js",
    "revision": "2857e49d6031b04370af28fc288be41d"
  },
  {
    "url": "assets/js/12.234d005c.js",
    "revision": "863ed5acc09643371d4bc60bac7504e7"
  },
  {
    "url": "assets/js/13.3fedb205.js",
    "revision": "4b3baf267c7002cc456a6b5816644f1b"
  },
  {
    "url": "assets/js/14.963113b4.js",
    "revision": "89f641177e0b865c9d0b657a2702461d"
  },
  {
    "url": "assets/js/15.0180e547.js",
    "revision": "da3e50b35ddcb209acf041f443e4634f"
  },
  {
    "url": "assets/js/16.ff8c15dd.js",
    "revision": "de9582ae3e5cd621b6b98726980e9673"
  },
  {
    "url": "assets/js/17.3e191a67.js",
    "revision": "e2279951d4f0b6730dc970895c183e43"
  },
  {
    "url": "assets/js/18.359e3c24.js",
    "revision": "3dd2aefff6ec2881955550729cd44179"
  },
  {
    "url": "assets/js/19.b50c2d6a.js",
    "revision": "e658ce3e90664f37ad102163a5760c47"
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
    "url": "assets/js/21.507a95de.js",
    "revision": "0c48453bca11c1c51df191d28de0b7ee"
  },
  {
    "url": "assets/js/22.5ac5ff0f.js",
    "revision": "5d92dced1276ecfb96ac3d144224a83a"
  },
  {
    "url": "assets/js/23.df9e9766.js",
    "revision": "6e524e88a2c83c99dcaa864241d68e2d"
  },
  {
    "url": "assets/js/24.d576466c.js",
    "revision": "e9f4d188b4f8e03e36609dc4e73d8ced"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.dd0c2805.js",
    "revision": "df52c3e4f63871f0a3b242953665db18"
  },
  {
    "url": "category/index.html",
    "revision": "fbb4a985e07046ead959dc5ca453d596"
  },
  {
    "url": "egg/index.html",
    "revision": "9474cee891486a54c2696cada6e90036"
  },
  {
    "url": "electron/index.html",
    "revision": "6887ba436dec59082dffef3940da0e8f"
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
    "revision": "e6acfc4dd39d0893ede685a9b62a84e1"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "ac90855ed277c80736d6ad3e617c7aba"
  },
  {
    "url": "notes/git.html",
    "revision": "0e851a1606a6e8afb9f74590afe3b2dd"
  },
  {
    "url": "notes/index.html",
    "revision": "3b38383a32e66b4598afafad72f2035c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "c995d49e5ace27165dd681579b2eeb0c"
  },
  {
    "url": "notes/node.html",
    "revision": "2318c824b5e001db6977721ba33f5f92"
  },
  {
    "url": "notes/npm.html",
    "revision": "311b45101da45694d95f0b9551f1f02a"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "6ade5027b752e26fbe5673c8d5238957"
  },
  {
    "url": "notes/vscode.html",
    "revision": "ba614d1109abba7845c340f4377fc609"
  },
  {
    "url": "tag/index.html",
    "revision": "4969e4b179a7afe8e539b2d8e8516d27"
  },
  {
    "url": "uniapp/index.html",
    "revision": "134727b65781c7c81918c20725b73d25"
  },
  {
    "url": "website/index.html",
    "revision": "b215dfec13fb0c6004af5c19789fef13"
  },
  {
    "url": "website/package.html",
    "revision": "c0316b5d60830ae399d819c4c980d331"
  },
  {
    "url": "website/rearend.html",
    "revision": "4f735787b30fc2d107cc06707bbbccfe"
  },
  {
    "url": "website/tools.html",
    "revision": "ebe8c86b7a83e34ff3f2020ab3b81d2a"
  },
  {
    "url": "website/webclient.html",
    "revision": "654d6bab38c9242c881333fb33e9b4d3"
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
