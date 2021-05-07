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
    "revision": "d8dea04c1055e44589e45ff2d3d2fe5b"
  },
  {
    "url": "About.html",
    "revision": "ab3e9c8e3bbeea63094a16ed7fe5bc7f"
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
    "url": "assets/js/12.f06337c1.js",
    "revision": "03794b518f5b966ce55cc68fdab9103e"
  },
  {
    "url": "assets/js/13.4d6decbf.js",
    "revision": "57573de7794f0a4e1c91cb58cbf8de45"
  },
  {
    "url": "assets/js/14.9ea7a3b4.js",
    "revision": "867d79ae2346c57de378e925aec4fb82"
  },
  {
    "url": "assets/js/15.3ceecfa6.js",
    "revision": "deabeb52d9772bffaab519dd62e9daaa"
  },
  {
    "url": "assets/js/16.22bc7985.js",
    "revision": "578be03298296e627db84a499c28b649"
  },
  {
    "url": "assets/js/17.3e191a67.js",
    "revision": "e2279951d4f0b6730dc970895c183e43"
  },
  {
    "url": "assets/js/18.32eb0e3d.js",
    "revision": "d6d9de7894fdd193dab5c1639dfd4370"
  },
  {
    "url": "assets/js/19.8ef40865.js",
    "revision": "e29138041f13900ad475f0c3f787843d"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.40acbb8a.js",
    "revision": "c21fdf1944302ec5bb86928c12a00e2a"
  },
  {
    "url": "assets/js/21.4e433384.js",
    "revision": "a7a01cbe335ca11e2f9bbcdc347dbda3"
  },
  {
    "url": "assets/js/22.e238ea28.js",
    "revision": "6affb0f79bd6207cabc79a5d6f2f198a"
  },
  {
    "url": "assets/js/23.67e6140b.js",
    "revision": "2112c16983612c30ceac8d8c80a5a205"
  },
  {
    "url": "assets/js/24.a84dd9e2.js",
    "revision": "45e2c5d80bdbbbbfd064992d8a7412f7"
  },
  {
    "url": "assets/js/25.27a7e824.js",
    "revision": "3b9eb5eefd2550e3963dd821e8625268"
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
    "url": "assets/js/app.eda098c9.js",
    "revision": "a844f2aee5547c7929e2ab3f5dfedc14"
  },
  {
    "url": "category/index.html",
    "revision": "4c5bdd708b496b9ef70d3756e7d6225d"
  },
  {
    "url": "egg/index.html",
    "revision": "23a837a111580f6877100899f02d40d3"
  },
  {
    "url": "electron/index.html",
    "revision": "b72658d9e89b06aad73c9eb766609da0"
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
    "revision": "aadbe9af69f3d33c18e927f2bfef7ace"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "6e2930013fc3c5f358e7ec562ec0dd4a"
  },
  {
    "url": "notes/git.html",
    "revision": "6a9c192df11075ba379b896dec57e3cd"
  },
  {
    "url": "notes/index.html",
    "revision": "ba4d44f442a59e3caebceb7d11779632"
  },
  {
    "url": "notes/nginx.html",
    "revision": "809f4cebc924248ae3e95b1594a842ad"
  },
  {
    "url": "notes/node.html",
    "revision": "4774fcf9d3be02d6f138005732c50a80"
  },
  {
    "url": "notes/npm.html",
    "revision": "22ad94fd17d0e85e51e9c831d5ae88ed"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "111d1aeb39b5e24ce5d5200a7b4b1f58"
  },
  {
    "url": "notes/vscode.html",
    "revision": "1b8365bd192f1b944927ee9930a71577"
  },
  {
    "url": "tag/index.html",
    "revision": "9f6baa92419a4b8552bd6de91b021c53"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "9e387bf3e547689c14654c05c9b1e893"
  },
  {
    "url": "uniapp/index.html",
    "revision": "0833e23418cb2e7e1937f3cd7ae94418"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "6ed8b7a0262b6d14a3f801866b8057cb"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "d021f33610954bfb61a956fc72a5af1f"
  },
  {
    "url": "website/index.html",
    "revision": "5bf2cedbc92a81894402af85c672c901"
  },
  {
    "url": "website/package.html",
    "revision": "6bebd1365a00809bced9a791e01a89bb"
  },
  {
    "url": "website/rearend.html",
    "revision": "d75f3907fd696eefeb2293b46adad94e"
  },
  {
    "url": "website/tools.html",
    "revision": "90d35459e57e6dc376edf9973c2461b3"
  },
  {
    "url": "website/webclient.html",
    "revision": "227bbc35f9f469dc111206ecdf6ac5a6"
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
