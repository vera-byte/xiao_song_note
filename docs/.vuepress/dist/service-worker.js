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
    "revision": "6c71135a92e642c9218ef7614ef7dd60"
  },
  {
    "url": "About.html",
    "revision": "aea0ae30cd23a1c68b4cce4dbf56da27"
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
    "url": "assets/js/10.6e91c46c.js",
    "revision": "99ba9bc3db3490383d98d5eb761b839a"
  },
  {
    "url": "assets/js/11.863e526a.js",
    "revision": "c067d69b915e55345f165a7f2dfde439"
  },
  {
    "url": "assets/js/12.fe2aec7d.js",
    "revision": "c1a80f3e45455543c15e330856a85d3f"
  },
  {
    "url": "assets/js/13.1a8d266c.js",
    "revision": "f239f02248256c5ee87c1cce72ce1b25"
  },
  {
    "url": "assets/js/14.2e6146cf.js",
    "revision": "189af3b4e3492c199dec02b2a18d110b"
  },
  {
    "url": "assets/js/15.ff96a853.js",
    "revision": "695a7ab0376d49c4f5c6c9636d02b55c"
  },
  {
    "url": "assets/js/16.8cb61c0f.js",
    "revision": "0baa67f034bef5d2614ec54b7f55b66f"
  },
  {
    "url": "assets/js/17.e0d5811b.js",
    "revision": "c5346380834ad4cc663568381c6c01fa"
  },
  {
    "url": "assets/js/18.904b4304.js",
    "revision": "2de8863a656072ccaad419484084b4bf"
  },
  {
    "url": "assets/js/19.25f515a9.js",
    "revision": "f43bbd4fbdb2cd1d54b77193877f1a90"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.95498fb0.js",
    "revision": "b85ae3502b9a1eaf68c0caaeec6bc48b"
  },
  {
    "url": "assets/js/21.1ee88b82.js",
    "revision": "3b027e5e42e91750373497202d7f5726"
  },
  {
    "url": "assets/js/22.ac45a41c.js",
    "revision": "0c180645d0dbd29c760e2702357d2e87"
  },
  {
    "url": "assets/js/23.dde2d44f.js",
    "revision": "c611a1418ac8b64e432cd1f3197a4d84"
  },
  {
    "url": "assets/js/24.83d83e76.js",
    "revision": "69375640d8d6c3f4eabe482600bab4fb"
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
    "url": "assets/js/9.5a15916e.js",
    "revision": "41e431dc5b8780d57ac71a4bbe1c6de4"
  },
  {
    "url": "assets/js/app.4d833d46.js",
    "revision": "3d1d792ae845d3827e3ac14ad681bdd1"
  },
  {
    "url": "category/index.html",
    "revision": "0bd8b1310024a8111b45d29be7bb9aaf"
  },
  {
    "url": "egg/index.html",
    "revision": "9c176f66e30e553ec8c046908c04097d"
  },
  {
    "url": "electron/index.html",
    "revision": "172938ea5560b704e60c55f25badae71"
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
    "revision": "7a7f8cb069d9f048f80a8f87ff649730"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "db8282101085c99c40b30d2e9f05aafc"
  },
  {
    "url": "notes/git.html",
    "revision": "660b2c907b0bb837c6878825c4e8e3c1"
  },
  {
    "url": "notes/index.html",
    "revision": "0ceabdb759201a8bcc9fa8ab76731dbc"
  },
  {
    "url": "notes/nginx.html",
    "revision": "e2a9a618daa5d878f82885d8dd92ed52"
  },
  {
    "url": "notes/node.html",
    "revision": "d3c136f54ec003c2d746bab5c3c1ca86"
  },
  {
    "url": "notes/npm.html",
    "revision": "5800ea4c6e4ff4e9a633a7ca5e54fe8c"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "388c4df83dec70e14370fd50aaece112"
  },
  {
    "url": "notes/vscode.html",
    "revision": "73b27c1f7096efc0e380c8dc5ce90a52"
  },
  {
    "url": "tag/index.html",
    "revision": "4c9af18ccfe1ebe9baf21c3d60ec506a"
  },
  {
    "url": "uniapp/index.html",
    "revision": "17072a03c95caea9c5c08527e0a44f52"
  },
  {
    "url": "website/index.html",
    "revision": "6a2e1ec669d3f5149bfac539d82861d8"
  },
  {
    "url": "website/package.html",
    "revision": "f3ec028898b59daccd32df20c0e348db"
  },
  {
    "url": "website/rearend.html",
    "revision": "53f605e6c6e76b5965b913cc88316135"
  },
  {
    "url": "website/tools.html",
    "revision": "b1ad143d9e46399b03bbe66131c088ef"
  },
  {
    "url": "website/webclient.html",
    "revision": "be17c16b3aa7aae805dad40c7bbdb343"
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
