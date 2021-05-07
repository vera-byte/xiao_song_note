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
    "revision": "8112080522891e6f889f4f2f94fb8fe3"
  },
  {
    "url": "About.html",
    "revision": "e31ea6483b7436dfa3c5268b5fcf8a22"
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
    "url": "assets/js/12.266e412f.js",
    "revision": "8e467baf203ad8a3e8f9b04f238565be"
  },
  {
    "url": "assets/js/13.c32756ed.js",
    "revision": "2eaf7a7308e4ada021e36d2c8bc115ca"
  },
  {
    "url": "assets/js/14.2ed947a0.js",
    "revision": "a6608b501c1afa84241896ef05a6ba2a"
  },
  {
    "url": "assets/js/15.9e45848b.js",
    "revision": "801ca03aa309971dd4ff633e6537cc9b"
  },
  {
    "url": "assets/js/16.42fb2d56.js",
    "revision": "4df75fb4678d042d53c78420714ecbbf"
  },
  {
    "url": "assets/js/17.e6269558.js",
    "revision": "ba93d1af8b11f0a42385e6a5d48f7172"
  },
  {
    "url": "assets/js/18.e7a1aa58.js",
    "revision": "79d441e47c0bc5e422abaa27426f045a"
  },
  {
    "url": "assets/js/19.14b21146.js",
    "revision": "4bdf19625177be10047fd6aedee5955c"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.17c05baa.js",
    "revision": "f697b5a2941d902df01293cfeb9593cd"
  },
  {
    "url": "assets/js/21.386840e8.js",
    "revision": "44e507a84341150388620c9be44f3130"
  },
  {
    "url": "assets/js/22.567321fd.js",
    "revision": "15f424417085ad5762cabd495c68086d"
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
    "url": "assets/js/9.a2c74a15.js",
    "revision": "b79b2623323121b8beb5536c4e55c89f"
  },
  {
    "url": "assets/js/app.8b91eb93.js",
    "revision": "2165514ea84d7f4bd00d2d8a0a83a0f6"
  },
  {
    "url": "category/index.html",
    "revision": "53927fb5192677576b95765579b52d61"
  },
  {
    "url": "egg/index.html",
    "revision": "566ba09c29db958eacbc6052244e2d65"
  },
  {
    "url": "electron/index.html",
    "revision": "67086dd06d4ccf5c808a7cf4e5dd48c3"
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
    "revision": "dc7523862a26f309890565880cdae305"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "d3a18d1b8dea6974de37ac519b198baf"
  },
  {
    "url": "notes/git.html",
    "revision": "5e3f1045efa00dce2a3461e7fba75421"
  },
  {
    "url": "notes/index.html",
    "revision": "d1f2ffc845326a78a7bb8622da295a83"
  },
  {
    "url": "notes/nginx.html",
    "revision": "af50c8b6f647eec75c220a76108b65ac"
  },
  {
    "url": "notes/node.html",
    "revision": "bed5b6dda793910586c238bbac4d628d"
  },
  {
    "url": "notes/npm.html",
    "revision": "14389e4098e58600ff2d3fd7c0591521"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "49702bf191d643c47a397bc6644abd49"
  },
  {
    "url": "notes/vscode.html",
    "revision": "77ac940281107f2d19a965d6d4991c08"
  },
  {
    "url": "tag/index.html",
    "revision": "8632dd261e043f0bae22383fbafe360b"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "aca93ff6bdd437bfa07514d6659b3a2d"
  },
  {
    "url": "uniapp/index.html",
    "revision": "3856a14cd5c39c12478fea05d8155387"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "db5e20c4059475f0601c0ca59d9bd698"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "c39e9c18e374e6444ce6178c04e98add"
  },
  {
    "url": "website/index.html",
    "revision": "d70c7f204bf80a33def8070d5ecdc6a9"
  },
  {
    "url": "website/package.html",
    "revision": "37b1e21ba4b40d4f2b8966f618bae396"
  },
  {
    "url": "website/rearend.html",
    "revision": "beb44e9008a2edf23ab9ffbd3a77231d"
  },
  {
    "url": "website/tools.html",
    "revision": "0dbc47c3e67848e56f900f2a6a33df57"
  },
  {
    "url": "website/webclient.html",
    "revision": "059a5f437ff415cf864223af17b457ec"
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
