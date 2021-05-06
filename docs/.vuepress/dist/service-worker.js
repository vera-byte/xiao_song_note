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
    "revision": "5d4260db4b7df8aab3077947bc383aaa"
  },
  {
    "url": "About.html",
    "revision": "e78dbff2da35fa303f5bb777b5b1b1b1"
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
    "url": "assets/js/10.d34ee1c9.js",
    "revision": "068995889724fecfe340b57227372f79"
  },
  {
    "url": "assets/js/11.ac0b9adb.js",
    "revision": "f05685b1d80b3f27632018a98b762522"
  },
  {
    "url": "assets/js/12.fe2aec7d.js",
    "revision": "c1a80f3e45455543c15e330856a85d3f"
  },
  {
    "url": "assets/js/13.c32756ed.js",
    "revision": "2eaf7a7308e4ada021e36d2c8bc115ca"
  },
  {
    "url": "assets/js/14.2dd9ba15.js",
    "revision": "0dfd4393f3882ad64b059703ccc6d721"
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
    "url": "assets/js/18.29281fc5.js",
    "revision": "24e9951e94cff5bfe5523be8c16e26e1"
  },
  {
    "url": "assets/js/19.01f406cd.js",
    "revision": "e1b4ff41640907ddee9c4a818486a0f0"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.77820ac9.js",
    "revision": "9635e8dce76196e63ca0872fa5fee5de"
  },
  {
    "url": "assets/js/21.b22632b9.js",
    "revision": "9b06ad0d9e4881cc95f30393e76a51c0"
  },
  {
    "url": "assets/js/22.f681a540.js",
    "revision": "d72487913b8391aea5f65d582b14496f"
  },
  {
    "url": "assets/js/23.7502905f.js",
    "revision": "160d6ed553a2ebf78d2f7c3d99cc1020"
  },
  {
    "url": "assets/js/24.910f79c0.js",
    "revision": "028eed539b379c69b7a817cbb3a08047"
  },
  {
    "url": "assets/js/25.b4f0a8f8.js",
    "revision": "8887ea7f4c035bf3ec99637f3eb28354"
  },
  {
    "url": "assets/js/26.b5cd22ab.js",
    "revision": "10d20167cb7c63ab7d66ac28c21d0426"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.b2dd4006.js",
    "revision": "fe395b7bd2ea0e7c868b024a2a7d139d"
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
    "url": "assets/js/9.2b4d6f4c.js",
    "revision": "f777d649b9c29ccfb6616c9eefaa6255"
  },
  {
    "url": "assets/js/app.09edc9d3.js",
    "revision": "4c94ef729880680d8dba320a7182afb2"
  },
  {
    "url": "category/index.html",
    "revision": "73c46e96fd1e9aa2dc7000fc9e8ee96e"
  },
  {
    "url": "egg/index.html",
    "revision": "f9059499d0e92adb78a0efd3ca5d64bf"
  },
  {
    "url": "electron/index.html",
    "revision": "e5037f8c293852754cfe7465ccc18624"
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
    "revision": "159d1949cec9fff7c1dc4948b56faff9"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "5b974779c695fe843024ad4d8939d446"
  },
  {
    "url": "notes/git.html",
    "revision": "7629a0191ce768970ff1348c2c23e82b"
  },
  {
    "url": "notes/index.html",
    "revision": "8df1b77d7645a753880e8b1227d3d6fc"
  },
  {
    "url": "notes/nginx.html",
    "revision": "46753d728b5be1c9ed66d44fee3ada03"
  },
  {
    "url": "notes/node.html",
    "revision": "d3c145a39e93b123ba813a0678b47c82"
  },
  {
    "url": "notes/npm.html",
    "revision": "16d6817c854e2ebecf4b85c392600526"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "d9c6e2f485ad941bd239c5212f93f8c8"
  },
  {
    "url": "notes/vscode.html",
    "revision": "36b2c765c861d52bc6f4727adc6c6d28"
  },
  {
    "url": "tag/index.html",
    "revision": "7e899dc1213515349d58b3643cf7b163"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "8c7b0d31dfcec30b6cce1fa7dfe5938e"
  },
  {
    "url": "uniapp/index.html",
    "revision": "e0f69b518ff4fdd6f8425a6bde84b4b1"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "e43ec708cb4e4024e58d23c095e565d3"
  },
  {
    "url": "website/index.html",
    "revision": "0498ac1410914575cacfe9fc12846b58"
  },
  {
    "url": "website/package.html",
    "revision": "6c0fe0b5f073624f0e7c60963963e83a"
  },
  {
    "url": "website/rearend.html",
    "revision": "c54d41d40f1e4edaada80241db7d26e5"
  },
  {
    "url": "website/tools.html",
    "revision": "11fe7d289df4abe83925d78372e8952d"
  },
  {
    "url": "website/webclient.html",
    "revision": "41562cd6da83ce3367fc4f735a17da82"
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
