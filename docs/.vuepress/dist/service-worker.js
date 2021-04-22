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
    "revision": "bf8e2deda8d8ddae1f5b6ed006bdb63f"
  },
  {
    "url": "About.html",
    "revision": "5a2c6349e765b8f07765e5b277762cdb"
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
    "url": "assets/js/11.f054c85f.js",
    "revision": "82bceb64b5033ece6b1d4ca88dffd34a"
  },
  {
    "url": "assets/js/12.49162663.js",
    "revision": "9073a6d1fabb9f4482b7ad277471298d"
  },
  {
    "url": "assets/js/13.10232f9b.js",
    "revision": "38d51be0f10616bb2d854e227097cdb2"
  },
  {
    "url": "assets/js/14.63278af0.js",
    "revision": "9a20f07209ef4fceb3e9db81d3c9b41e"
  },
  {
    "url": "assets/js/15.896b404d.js",
    "revision": "f8a33b9251e43fdc10366eef7d390137"
  },
  {
    "url": "assets/js/16.55d0a3f1.js",
    "revision": "1310f6fdb22e768eab5a0d9e2bccc884"
  },
  {
    "url": "assets/js/17.58d664bc.js",
    "revision": "daad254997299502a0c227f97dd88d6c"
  },
  {
    "url": "assets/js/18.a6bbe5ec.js",
    "revision": "8e684141f456037607076e5f42931640"
  },
  {
    "url": "assets/js/19.c8a4a4a9.js",
    "revision": "a0e490b0ae67ac05e4825663d03ac889"
  },
  {
    "url": "assets/js/2.179600ff.js",
    "revision": "3e50929d5d6bfe51882aeee65154e364"
  },
  {
    "url": "assets/js/20.7f375885.js",
    "revision": "aa6214afe2ba041a6faa81ce3425e289"
  },
  {
    "url": "assets/js/21.7da4569c.js",
    "revision": "8d660bb512f615b388d6ca098bc66474"
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
    "url": "assets/js/9.0b8bea09.js",
    "revision": "733b756a96504fb40759051cc1e5e9e4"
  },
  {
    "url": "assets/js/app.e71dca71.js",
    "revision": "7f5bfb2b6806326876c0a35485539e76"
  },
  {
    "url": "category/index.html",
    "revision": "23eea2dc6bd3c3d8e9f4649980018a97"
  },
  {
    "url": "egg/index.html",
    "revision": "c5d32464ba56d1fb7d372fd36f229d00"
  },
  {
    "url": "electron/index.html",
    "revision": "94fc747600ce56774f6c0fcec9d4dd70"
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
    "revision": "90af8040f22c7697a4ae06738672d2df"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "6b22184f8625d7a990cbca25e2045e4d"
  },
  {
    "url": "notes/git.html",
    "revision": "62e2db23be747e9101e394a8177df743"
  },
  {
    "url": "notes/index.html",
    "revision": "fa92da3c67b862107cd8360dafb8f865"
  },
  {
    "url": "notes/nginx.html",
    "revision": "0be37cfd87e83fa1eb22a74761de09ad"
  },
  {
    "url": "notes/npm.html",
    "revision": "bb8351ddd4ca9a5513be13740e513f0e"
  },
  {
    "url": "notes/vscode.html",
    "revision": "dc5133e9ebd7775c1fcdf3bd8329b066"
  },
  {
    "url": "tag/index.html",
    "revision": "343eb33beed56744a7ea48c46037326c"
  },
  {
    "url": "uniapp/index.html",
    "revision": "736500256f0ad7d294fa293b702fde6b"
  },
  {
    "url": "website/index.html",
    "revision": "95ef89fe76ae0071107bde66cd9f63c9"
  },
  {
    "url": "website/rearend.html",
    "revision": "8ef866dced0b606a1638f70af28d68e2"
  },
  {
    "url": "website/tools.html",
    "revision": "c9f71e3303699edc50a1c37d710b810e"
  },
  {
    "url": "website/webclient.html",
    "revision": "48b503c40bd4288f4a7328c51ff753c5"
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
