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
    "revision": "753f55b930a5abf8df2623fd65383734"
  },
  {
    "url": "About.html",
    "revision": "a0268836340f8d7e68b580c4b0484499"
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
    "url": "assets/js/10.7abc4dfd.js",
    "revision": "4c80d18ec05b536757e2aef44c6e88d2"
  },
  {
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
  },
  {
    "url": "assets/js/12.fe2aec7d.js",
    "revision": "c1a80f3e45455543c15e330856a85d3f"
  },
  {
    "url": "assets/js/13.4a1f36e7.js",
    "revision": "989a2e552b2252c138580df142db6f82"
  },
  {
    "url": "assets/js/14.6b45c364.js",
    "revision": "5d50e97907c7385612e13ba4a375f582"
  },
  {
    "url": "assets/js/15.e9e05780.js",
    "revision": "ac25f33836006afb9dbf002a4cba4849"
  },
  {
    "url": "assets/js/16.32cd0f34.js",
    "revision": "9610f41d04b45ce2a7f31583ac2d719c"
  },
  {
    "url": "assets/js/17.e0d5811b.js",
    "revision": "c5346380834ad4cc663568381c6c01fa"
  },
  {
    "url": "assets/js/18.3c224131.js",
    "revision": "af9f641c015eaf6527330f4cbd3b14e8"
  },
  {
    "url": "assets/js/19.d47f8463.js",
    "revision": "55a747fac73a83a139b2ee7251b09419"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.235717d5.js",
    "revision": "37bdfd7b5938d929fa82e736085250d8"
  },
  {
    "url": "assets/js/21.538587ad.js",
    "revision": "cf08e046fe339cca27580e98bb17359f"
  },
  {
    "url": "assets/js/22.054e1bea.js",
    "revision": "4478bcdcc0927d7b6a53ead74eddb8f9"
  },
  {
    "url": "assets/js/23.9f7d87ac.js",
    "revision": "4beec92418fe1d693a17161a9001115c"
  },
  {
    "url": "assets/js/24.2a4c57bb.js",
    "revision": "fac4254e76af69b4db3d24b3d1752d51"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.ee3ab22f.js",
    "revision": "ca40578f77c56e155af829d02dc5da52"
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
    "url": "assets/js/9.5a15916e.js",
    "revision": "41e431dc5b8780d57ac71a4bbe1c6de4"
  },
  {
    "url": "assets/js/app.42803b37.js",
    "revision": "b548773d56d1af68e92c4b2031ab186f"
  },
  {
    "url": "category/index.html",
    "revision": "463374c9d0f605fdb1e8111647d75f8b"
  },
  {
    "url": "egg/index.html",
    "revision": "299d7d0c518b71635988db1730d72253"
  },
  {
    "url": "electron/index.html",
    "revision": "888558a9da0386165a40058668991f60"
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
    "revision": "cc3c2edadfc296f390c7f613a2297610"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "a11391e37508af5c756a192189aa81c5"
  },
  {
    "url": "notes/git.html",
    "revision": "74df62a6841cccb00b4b05b7c0e247f5"
  },
  {
    "url": "notes/index.html",
    "revision": "a2aae1caf128c54c78682a88ea3e256e"
  },
  {
    "url": "notes/nginx.html",
    "revision": "f46f23934552e6f994125ea2dcd342b7"
  },
  {
    "url": "notes/node.html",
    "revision": "996937f971782f3b2cbb195d7c753558"
  },
  {
    "url": "notes/npm.html",
    "revision": "a5170a723c9ba288c8407058be0cf434"
  },
  {
    "url": "notes/vscode.html",
    "revision": "235b4ffd662d7390e24899dee8995888"
  },
  {
    "url": "tag/index.html",
    "revision": "37eb480f3f1a9ff6911156c0dc950941"
  },
  {
    "url": "uniapp/index.html",
    "revision": "869467f11ca08db1de02e2ceb48e091a"
  },
  {
    "url": "website/index.html",
    "revision": "8b51629b2131586a1ff6f7f5343e74c8"
  },
  {
    "url": "website/package.html",
    "revision": "bebd98266aa4cf0f3fc595a6a94ac73c"
  },
  {
    "url": "website/rearend.html",
    "revision": "261dd19e745c7fdb764d2f8596ac9f0c"
  },
  {
    "url": "website/tools.html",
    "revision": "cb30b9c3b031b269d20c858bc75dc797"
  },
  {
    "url": "website/webclient.html",
    "revision": "f068b07122227b713e66492511c83a6c"
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
