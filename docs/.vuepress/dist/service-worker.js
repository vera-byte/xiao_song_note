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
    "revision": "030b33acb8bbc9f454f1285a8ecbb6a9"
  },
  {
    "url": "About.html",
    "revision": "f59d2bd085738a757912908d6b5754a0"
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
    "url": "assets/js/14.0ba2f9d0.js",
    "revision": "9c0e3a991c2977ff5f92d5c8b2ddfb5b"
  },
  {
    "url": "assets/js/15.9e45848b.js",
    "revision": "801ca03aa309971dd4ff633e6537cc9b"
  },
  {
    "url": "assets/js/16.75fd0b73.js",
    "revision": "190419fe4cb06465023e02c0d7893dbf"
  },
  {
    "url": "assets/js/17.514faf42.js",
    "revision": "80fcda31acac41d7b965136dd1c02c88"
  },
  {
    "url": "assets/js/18.31f2d100.js",
    "revision": "4f627604dd7495e1ff31eadf22e8b931"
  },
  {
    "url": "assets/js/19.25f515a9.js",
    "revision": "f43bbd4fbdb2cd1d54b77193877f1a90"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.d770f8f0.js",
    "revision": "dc776bda4db36e28033c23d48e0f41de"
  },
  {
    "url": "assets/js/21.386840e8.js",
    "revision": "44e507a84341150388620c9be44f3130"
  },
  {
    "url": "assets/js/22.5380ebd7.js",
    "revision": "a0694df5400c29b0ef427c033969492e"
  },
  {
    "url": "assets/js/23.67e6140b.js",
    "revision": "2112c16983612c30ceac8d8c80a5a205"
  },
  {
    "url": "assets/js/24.179a2fb9.js",
    "revision": "21423ee71915a4b348c8dec3e91f55d0"
  },
  {
    "url": "assets/js/25.29935595.js",
    "revision": "3450b5db48b23c05c1435b26c8b6d32a"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.a949a46e.js",
    "revision": "074352af9e0db04f39c39644269ace9f"
  },
  {
    "url": "category/index.html",
    "revision": "d5ea02fffff15d3d63220061cadfc73f"
  },
  {
    "url": "egg/index.html",
    "revision": "dee649f90a88b76162637912a3654b30"
  },
  {
    "url": "electron/index.html",
    "revision": "4eb4594a34d7863774c89e803c03e621"
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
    "revision": "a6f85ea96e7846c883d177d9dc36a1ba"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "a0674f826be6c1b9ea735b2bcebb5bfa"
  },
  {
    "url": "notes/git.html",
    "revision": "28a345420e812eb50616b3056bd3b762"
  },
  {
    "url": "notes/index.html",
    "revision": "cfc06692162964d8a33136d831048c5c"
  },
  {
    "url": "notes/nginx.html",
    "revision": "49bc3dae13eac64e819280ff857ee203"
  },
  {
    "url": "notes/node.html",
    "revision": "b3785f5b597ac331b7c724f67fe07432"
  },
  {
    "url": "notes/npm.html",
    "revision": "914059bc8a4cda113854465de1b4d4dc"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "d3b3b7882f5c27c2bea1761312012bc2"
  },
  {
    "url": "notes/vscode.html",
    "revision": "a2ae9cde73a2113dc644aa26bbba6fe5"
  },
  {
    "url": "tag/index.html",
    "revision": "0135fdb15d1a6c6eddfa4004e4f30c15"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "5128fd99e55d4d24509f4673f094dda4"
  },
  {
    "url": "uniapp/index.html",
    "revision": "fd46e29306b626bee3624f316e9704b7"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "66c2023a08f78e40c4d845452be8939a"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "17ca08057533cb0b55d74815a74e87fe"
  },
  {
    "url": "website/index.html",
    "revision": "a1077aa16f82d802280c2ddbc4d7c5c9"
  },
  {
    "url": "website/package.html",
    "revision": "e465eed5ec09f89b84b73ec1b096ba66"
  },
  {
    "url": "website/rearend.html",
    "revision": "e08396c955eba311fc48ded334ebd7ba"
  },
  {
    "url": "website/tools.html",
    "revision": "1067034655a78eae07de13dc9360559e"
  },
  {
    "url": "website/webclient.html",
    "revision": "443085ff5bf42b44333a7a8abbb35d48"
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
