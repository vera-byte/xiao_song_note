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
    "revision": "ab8677d0f552575fe71d653cdf704071"
  },
  {
    "url": "About.html",
    "revision": "dcb7aef6582a62d836d0b9c66d64ed88"
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
    "url": "assets/js/10.b6b18b80.js",
    "revision": "7d14de354a68acd5a99f3a6873250684"
  },
  {
    "url": "assets/js/11.863e526a.js",
    "revision": "c067d69b915e55345f165a7f2dfde439"
  },
  {
    "url": "assets/js/12.2d8a3b61.js",
    "revision": "8a47c1a695de15fcb338d28c02c86fb0"
  },
  {
    "url": "assets/js/13.5e7e4474.js",
    "revision": "a59bfd5962e445b929ff4bfa7932ef88"
  },
  {
    "url": "assets/js/14.9ea7a3b4.js",
    "revision": "867d79ae2346c57de378e925aec4fb82"
  },
  {
    "url": "assets/js/15.ff96a853.js",
    "revision": "695a7ab0376d49c4f5c6c9636d02b55c"
  },
  {
    "url": "assets/js/16.42fb2d56.js",
    "revision": "4df75fb4678d042d53c78420714ecbbf"
  },
  {
    "url": "assets/js/17.3e191a67.js",
    "revision": "e2279951d4f0b6730dc970895c183e43"
  },
  {
    "url": "assets/js/18.31f2d100.js",
    "revision": "4f627604dd7495e1ff31eadf22e8b931"
  },
  {
    "url": "assets/js/19.14b21146.js",
    "revision": "4bdf19625177be10047fd6aedee5955c"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.55d64e6f.js",
    "revision": "b98e6bf51ae36150449579d4498bc72e"
  },
  {
    "url": "assets/js/21.507a95de.js",
    "revision": "0c48453bca11c1c51df191d28de0b7ee"
  },
  {
    "url": "assets/js/22.e6064936.js",
    "revision": "5f90487273397825498a741cf4e539cc"
  },
  {
    "url": "assets/js/23.1eaf4998.js",
    "revision": "0d807ac3fff060311670d09a358bdb03"
  },
  {
    "url": "assets/js/24.0dae997c.js",
    "revision": "431790f26d0f8a0148d66fec7063a0f1"
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
    "url": "assets/js/app.e9303bf0.js",
    "revision": "48e2c46b376787c884ebb57a2fffa363"
  },
  {
    "url": "category/index.html",
    "revision": "30a43d9afc2a11ce31e4087753df0783"
  },
  {
    "url": "egg/index.html",
    "revision": "985e0cc122bed10ce0c586166b60c5e1"
  },
  {
    "url": "electron/index.html",
    "revision": "3db790604fb7463d73bf98d8d0a441a2"
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
    "revision": "434ecbdf2fa1d78dbb013c904e2f75eb"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "c54fdcba5124ff32e21536041873bf33"
  },
  {
    "url": "notes/git.html",
    "revision": "bc0649ce286a3ec9e7cb0a40126ae910"
  },
  {
    "url": "notes/index.html",
    "revision": "9bf9d70b8a367ccbf0614e919c7ad2a3"
  },
  {
    "url": "notes/nginx.html",
    "revision": "ce9936791ee08170500dd7b7b25e2901"
  },
  {
    "url": "notes/node.html",
    "revision": "f64cd748c888cfda9feded68f7f67ac2"
  },
  {
    "url": "notes/npm.html",
    "revision": "fe7dee6594e65b1930db790cfe686ee6"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "f311a78a461991f9b8840b1efcd1afe8"
  },
  {
    "url": "notes/vscode.html",
    "revision": "2d66d2528c7fd17f85ff0293ca0e35dc"
  },
  {
    "url": "tag/index.html",
    "revision": "ee53482b5a2d6a0bce851def96394fe4"
  },
  {
    "url": "uniapp/index.html",
    "revision": "72f627b3c351b7ea775d72ebeadb3640"
  },
  {
    "url": "website/index.html",
    "revision": "51bacbd9b6b77960f4c95090ab0910f5"
  },
  {
    "url": "website/package.html",
    "revision": "51affeb5e494a384abb4d15cd99227be"
  },
  {
    "url": "website/rearend.html",
    "revision": "0fc3e8714224d021f5f06bf19d7fac8a"
  },
  {
    "url": "website/tools.html",
    "revision": "bd89b0606a74b84b2a2e61bc75918fe4"
  },
  {
    "url": "website/webclient.html",
    "revision": "54e3d732bc028d04b1c477048075217b"
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
