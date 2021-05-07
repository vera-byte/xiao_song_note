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
    "revision": "02e39509eee787c32523a169982bff7b"
  },
  {
    "url": "About.html",
    "revision": "b5db4e524a31a6f44b1083e196942d51"
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
    "url": "assets/js/14.6caed945.js",
    "revision": "4ffe2809f09d545ae6d94d836fa42b79"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.75fd0b73.js",
    "revision": "190419fe4cb06465023e02c0d7893dbf"
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
    "url": "assets/js/19.b50c2d6a.js",
    "revision": "e658ce3e90664f37ad102163a5760c47"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.ad4840e4.js",
    "revision": "765b819fa5e44e4d318963be88db0d05"
  },
  {
    "url": "assets/js/21.0deed129.js",
    "revision": "17575c9c1c3c91fca7e6bee2e7a30481"
  },
  {
    "url": "assets/js/22.9acbd127.js",
    "revision": "9333a14f43c3c7cfa6ef03d96b292769"
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
    "url": "assets/js/25.662a1beb.js",
    "revision": "64696e1665eb0bf7e185622ce9beb4fa"
  },
  {
    "url": "assets/js/26.e85e7912.js",
    "revision": "04fd32acfd39391b40dffbf35f3c476b"
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
    "url": "assets/js/app.4d74cd68.js",
    "revision": "0362f4b4baa1e232d030a91e72f15fd1"
  },
  {
    "url": "category/index.html",
    "revision": "a73914ba2a2527dc9152286019069876"
  },
  {
    "url": "egg/index.html",
    "revision": "9d1db559efeb38f77244e24e83e171b6"
  },
  {
    "url": "electron/index.html",
    "revision": "f48cf6a8f8316903a868e9ebd4ec8b31"
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
    "revision": "c9ac5af9ee4bb886bda0d7d848ee4d0c"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "fb53af5574e87d38c51b7e10d454f7d2"
  },
  {
    "url": "notes/git.html",
    "revision": "f34b852837f79f1c58d97c80f1e5363c"
  },
  {
    "url": "notes/index.html",
    "revision": "fcbbd6ced6d98cd9e6e3901b6a2c2a97"
  },
  {
    "url": "notes/nginx.html",
    "revision": "51182f0c9401d0e751737f6bfe7ed47f"
  },
  {
    "url": "notes/node.html",
    "revision": "17171711e7ed1be5e8faeea3c6c96d32"
  },
  {
    "url": "notes/npm.html",
    "revision": "2d11f4d6f2cd2b5cb073343d5414ace9"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "28c2a9b5dc1ac91a5834edef60925979"
  },
  {
    "url": "notes/vscode.html",
    "revision": "3b828f8d9692f89507c03d3a5d14f0d3"
  },
  {
    "url": "tag/index.html",
    "revision": "c5722b37b6acfe657f68db548b9d9028"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "b63b7f6196b2ec3259f67735b2520b5e"
  },
  {
    "url": "uniapp/index.html",
    "revision": "d2fbed18886c508f2f02f6593f3ada48"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "cf3ca5bd6d7269201240775909a62fd1"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "9d9bc6ef29a96d30448249588dc80f1f"
  },
  {
    "url": "website/index.html",
    "revision": "6cf95ee69bb6037776b208b31d626cf8"
  },
  {
    "url": "website/package.html",
    "revision": "42e5264a903d4cde6d5812f5d23b544f"
  },
  {
    "url": "website/rearend.html",
    "revision": "7c0357116b27e3e2438ff84c550203d7"
  },
  {
    "url": "website/tools.html",
    "revision": "3c5f10106f2c2cb463d06b726ade2ee7"
  },
  {
    "url": "website/webclient.html",
    "revision": "ee43d49afeaf2962d8316c880dc12ffa"
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
