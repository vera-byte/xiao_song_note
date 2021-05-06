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
    "revision": "a39c809bf5bd47ece0858d48ad224560"
  },
  {
    "url": "About.html",
    "revision": "0c2d98903f53d32858e9f7fb848e3102"
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
    "url": "assets/js/13.5e7e4474.js",
    "revision": "a59bfd5962e445b929ff4bfa7932ef88"
  },
  {
    "url": "assets/js/14.67c94977.js",
    "revision": "dde0cd3bb4a1177e84fd2001d205b4f5"
  },
  {
    "url": "assets/js/15.cd10ff5b.js",
    "revision": "9d5206fa59fc2049d3510dad1ad710ea"
  },
  {
    "url": "assets/js/16.5b19c77b.js",
    "revision": "889c04f8422e4373175e70683edb812b"
  },
  {
    "url": "assets/js/17.dc50463f.js",
    "revision": "5890a6c9e83847ce59f4408f8e0ee6cd"
  },
  {
    "url": "assets/js/18.e7a1aa58.js",
    "revision": "79d441e47c0bc5e422abaa27426f045a"
  },
  {
    "url": "assets/js/19.6a9c8a35.js",
    "revision": "887659a57c97ff6a45a48585ddbde104"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.f55dc516.js",
    "revision": "123a2e279fd0ba7b2b348fb576d49f6f"
  },
  {
    "url": "assets/js/21.41068135.js",
    "revision": "64fe971e2487aa058bbcdf28bc0c7aeb"
  },
  {
    "url": "assets/js/22.e6064936.js",
    "revision": "5f90487273397825498a741cf4e539cc"
  },
  {
    "url": "assets/js/23.d2a05f63.js",
    "revision": "250bc523e111cf4bdb5195d319f53d63"
  },
  {
    "url": "assets/js/24.327c2a40.js",
    "revision": "61fc7de74fd07d250a767d1dc3b8553d"
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
    "url": "assets/js/9.938f2b8c.js",
    "revision": "aec7eb2403fbb09cd1ab5034301aa2ff"
  },
  {
    "url": "assets/js/app.dd28ee6b.js",
    "revision": "ea7fe5c56bdc19266613f001037c7dfa"
  },
  {
    "url": "category/index.html",
    "revision": "d7560aa2b07379dee299cc6d458cecd3"
  },
  {
    "url": "egg/index.html",
    "revision": "358ae03978784ee8105cbe0f94d041dc"
  },
  {
    "url": "electron/index.html",
    "revision": "f65efe0b80c4deae76936f0183262b4f"
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
    "revision": "b8e298289c90c5975eb032e6996deec7"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "ad795a947f3e58a07f5d94033791f90d"
  },
  {
    "url": "notes/git.html",
    "revision": "f2363e6c26943222dfae228f9047fe8c"
  },
  {
    "url": "notes/index.html",
    "revision": "71df8bec09e855840f46a1515257c3e4"
  },
  {
    "url": "notes/nginx.html",
    "revision": "60a1134a2f6fc0759a391d9a0324beb1"
  },
  {
    "url": "notes/node.html",
    "revision": "3d669cf5a8728050763f3008a2dddd61"
  },
  {
    "url": "notes/npm.html",
    "revision": "d2ff81d602f0578e0bfe15baf155262d"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "36287d06c78b943515af73d1072537f5"
  },
  {
    "url": "notes/vscode.html",
    "revision": "3032461c3f60d7f2d25f91fe9f47be89"
  },
  {
    "url": "tag/index.html",
    "revision": "82143defe836639b39bee5cf29b39f63"
  },
  {
    "url": "uniapp/index.html",
    "revision": "70e2f57db079bbbf53d0efec0d3319dd"
  },
  {
    "url": "website/index.html",
    "revision": "8ad0d3616d57b288257c7d8c0f0cb7ed"
  },
  {
    "url": "website/package.html",
    "revision": "d4b4c605ffa647a63a7fac825db71e42"
  },
  {
    "url": "website/rearend.html",
    "revision": "acf44439e9c91016230bfef211fff94d"
  },
  {
    "url": "website/tools.html",
    "revision": "e1ba1eda59d3df82df97f3ad9c5210ca"
  },
  {
    "url": "website/webclient.html",
    "revision": "fcebc23c3b1e86afe0a07598dbe25146"
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
