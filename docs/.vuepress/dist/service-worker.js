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
    "revision": "c18ccdff1108d739695f0adc64d24556"
  },
  {
    "url": "About.html",
    "revision": "7562f1025ac02b2fd8dc85314f6d712c"
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
    "url": "assets/js/11.59f74efe.js",
    "revision": "69504ec97fd8fdc9638d2fa8c9eecc3b"
  },
  {
    "url": "assets/js/12.fd6b36f7.js",
    "revision": "fd9a3042a2ee327a16ec4d6008c01b51"
  },
  {
    "url": "assets/js/13.2d5da913.js",
    "revision": "82ba3856391857bf82db41f57c8f7129"
  },
  {
    "url": "assets/js/14.563f9ec9.js",
    "revision": "89ea4209b17a1e4a3f0d12ba9e90a1cf"
  },
  {
    "url": "assets/js/15.ee2111bd.js",
    "revision": "9a293eb88c07c7853b45186628c29bb7"
  },
  {
    "url": "assets/js/16.d1d92cca.js",
    "revision": "966281833b101d4074adff7220a7a80c"
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
    "url": "assets/js/19.988cffe8.js",
    "revision": "4115f1c9821223f5e1aa6d4a68f6e62f"
  },
  {
    "url": "assets/js/2.179600ff.js",
    "revision": "3e50929d5d6bfe51882aeee65154e364"
  },
  {
    "url": "assets/js/20.a12b4237.js",
    "revision": "01c9488701083b2307151a876309d06d"
  },
  {
    "url": "assets/js/21.5da9ccc1.js",
    "revision": "71b443e75ca17ad9b4ede1423367a032"
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
    "url": "assets/js/9.2dc22b4c.js",
    "revision": "fcc4103f12765efae6d0321c054ec40b"
  },
  {
    "url": "assets/js/app.602c25c5.js",
    "revision": "dffc5336f50c6f86e87d394bdbb1243b"
  },
  {
    "url": "category/index.html",
    "revision": "995012bdeb35cdf10a71dc3e3cfb5692"
  },
  {
    "url": "egg/index.html",
    "revision": "91dc31829c3806d28c3f88d1a617048d"
  },
  {
    "url": "electron/index.html",
    "revision": "d3a10ea81c15da9dbdb84ce6613aa3f6"
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
    "revision": "b2eeb88db3100ce641eb23f2e8a2c157"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "4b2db258905ce7b68fa3d4be9752382e"
  },
  {
    "url": "notes/git.html",
    "revision": "f135c1a4cd6e08f6f11d078167ec5bdb"
  },
  {
    "url": "notes/index.html",
    "revision": "69dc9316aa249f9482c01b78f24aa5b1"
  },
  {
    "url": "notes/nginx.html",
    "revision": "4321f5111f45d8ef870dbb74cfbb067c"
  },
  {
    "url": "notes/npm.html",
    "revision": "1e67754095c79a08bab20f17a0d67065"
  },
  {
    "url": "notes/vscode.html",
    "revision": "b264a6ab0eeb21eae86cac7884d97ff8"
  },
  {
    "url": "tag/index.html",
    "revision": "09d496960cee79bd528ba38731d59d21"
  },
  {
    "url": "uniapp/index.html",
    "revision": "456b3261aa86e95bc182a3e8df826413"
  },
  {
    "url": "website/index.html",
    "revision": "9cb71de0806cbadc50cc8e099475356b"
  },
  {
    "url": "website/rearend.html",
    "revision": "33ecaddf6106a7f20beb2b6c46f95113"
  },
  {
    "url": "website/tools.html",
    "revision": "8fb43f7f0327ad72d11f8fbfde045a3c"
  },
  {
    "url": "website/webclient.html",
    "revision": "e797486b7da8595577b67794a7d29c3c"
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
