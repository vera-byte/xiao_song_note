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
    "revision": "18bcd529bcb3e6fe43f4a3a85bcb15f6"
  },
  {
    "url": "About.html",
    "revision": "237b43e89837bccecc0d645bbedf8773"
  },
  {
    "url": "assets/css/0.styles.1f4c384c.css",
    "revision": "6656d29b6343707ed6db500449a2445f"
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
    "url": "assets/js/10.f2be4b47.js",
    "revision": "859fff98ba6dc2415eaac0d218e452e1"
  },
  {
    "url": "assets/js/11.81c181a5.js",
    "revision": "636e91eb895527b3494b442c6df89936"
  },
  {
    "url": "assets/js/12.fd6b36f7.js",
    "revision": "fd9a3042a2ee327a16ec4d6008c01b51"
  },
  {
    "url": "assets/js/13.947af085.js",
    "revision": "71cb901e34e9a1af6af2bd1ea7345807"
  },
  {
    "url": "assets/js/14.051b4f1a.js",
    "revision": "f8830d43a3fcf9fbfd617d906893f855"
  },
  {
    "url": "assets/js/15.fd6a1385.js",
    "revision": "cc8619cc9bb01cb7a1a62fc3bc58ea28"
  },
  {
    "url": "assets/js/16.2c867733.js",
    "revision": "4bc3831a9ee295bf27d400843efb2a0a"
  },
  {
    "url": "assets/js/17.58d664bc.js",
    "revision": "daad254997299502a0c227f97dd88d6c"
  },
  {
    "url": "assets/js/18.ce672fbb.js",
    "revision": "4d71696a241d761f9242e2aeb077b71f"
  },
  {
    "url": "assets/js/19.cdfe3ac7.js",
    "revision": "cdff99d47e03b12b33a174d57002eaca"
  },
  {
    "url": "assets/js/2.179600ff.js",
    "revision": "3e50929d5d6bfe51882aeee65154e364"
  },
  {
    "url": "assets/js/20.802c876c.js",
    "revision": "901d169a0f69e7d4ae967aa36873edf6"
  },
  {
    "url": "assets/js/21.4a2b4d73.js",
    "revision": "1dd2268424681e08bd108898815e0664"
  },
  {
    "url": "assets/js/22.c5f39475.js",
    "revision": "300a53338368c6796517131b2ae596a2"
  },
  {
    "url": "assets/js/3.68e87797.js",
    "revision": "f6bb1634ad75e33bc1dc30781ddf6590"
  },
  {
    "url": "assets/js/4.bed2d8d2.js",
    "revision": "3f8139760e963d9c6f626370f8f2ef00"
  },
  {
    "url": "assets/js/5.931e5c87.js",
    "revision": "eaf309d9e5a84f08524d5d75ed8bfb0f"
  },
  {
    "url": "assets/js/6.199e5db0.js",
    "revision": "8d87f972655bfb31ae12067ad18d5ed9"
  },
  {
    "url": "assets/js/7.38cf579a.js",
    "revision": "df3f75ab5183e439a7993824ca8acb24"
  },
  {
    "url": "assets/js/8.7f3bd16a.js",
    "revision": "110b977eaf009925fc7cb5abf5d80960"
  },
  {
    "url": "assets/js/9.e444c9a8.js",
    "revision": "c2c48fba7bcba47b9783a620e501a90d"
  },
  {
    "url": "assets/js/app.5556fa73.js",
    "revision": "76b26dd06f116635c6f030904d146fbc"
  },
  {
    "url": "category/index.html",
    "revision": "52a5631f093cf76a2c8651e3ff914cf0"
  },
  {
    "url": "egg/index.html",
    "revision": "3d9adac66d32cb2324022b9a0e669785"
  },
  {
    "url": "electron/index.html",
    "revision": "052165ae83902f1e5640001e1ef95fb9"
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
    "revision": "59cb122650e0357e6d2438e1eae12094"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "6bc8ad699535b90461be79da3012c9c0"
  },
  {
    "url": "notes/git.html",
    "revision": "6cbde27e43369b21e0e7535d0fc6751d"
  },
  {
    "url": "notes/index.html",
    "revision": "2bda9dd9974b57be902da52713940249"
  },
  {
    "url": "notes/nginx.html",
    "revision": "5fd2019d6f60a1547b7dd33f17cb88d1"
  },
  {
    "url": "notes/npm.html",
    "revision": "17c44a0e3e067c52791962fbc6883169"
  },
  {
    "url": "notes/vscode.html",
    "revision": "1084c4a3f961fc3d20a4d98a6885ea89"
  },
  {
    "url": "tag/index.html",
    "revision": "cac8c6d6d87f64c29f749b8ad0701db7"
  },
  {
    "url": "uniapp/index.html",
    "revision": "7cfccfec695833c5083bd0cbafc4b084"
  },
  {
    "url": "website/index.html",
    "revision": "875f8a98124fd3aef4f05bf5e39dcce8"
  },
  {
    "url": "website/rearend.html",
    "revision": "3b726f25bf11539378925e5896e50c96"
  },
  {
    "url": "website/tools.html",
    "revision": "fd16b29a4f461419a6035e2cc0c2e8d8"
  },
  {
    "url": "website/webclient.html",
    "revision": "e8b927313f529568896e1a39f8f3f056"
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
