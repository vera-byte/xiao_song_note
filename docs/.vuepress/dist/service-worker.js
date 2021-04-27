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
    "revision": "83274f9a18438f53010ad56e880c4562"
  },
  {
    "url": "About.html",
    "revision": "f4e54a7231e96b44538c5a55dddcea4f"
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
    "url": "assets/js/10.b6b18b80.js",
    "revision": "7d14de354a68acd5a99f3a6873250684"
  },
  {
    "url": "assets/js/11.1f47a2f5.js",
    "revision": "9e74448fc2b093fa27e48c95b1c920c1"
  },
  {
    "url": "assets/js/12.266e412f.js",
    "revision": "8e467baf203ad8a3e8f9b04f238565be"
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
    "url": "assets/js/15.3ceecfa6.js",
    "revision": "deabeb52d9772bffaab519dd62e9daaa"
  },
  {
    "url": "assets/js/16.b6d57a90.js",
    "revision": "60a5e9ae1c5f92618c95b595fe42abc3"
  },
  {
    "url": "assets/js/17.e0d5811b.js",
    "revision": "c5346380834ad4cc663568381c6c01fa"
  },
  {
    "url": "assets/js/18.f3f443c2.js",
    "revision": "8986ca053099e6386a533a29c7dd67a4"
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
    "url": "assets/js/20.96efedb1.js",
    "revision": "a994787ca8aa56900c2df19f33fc938c"
  },
  {
    "url": "assets/js/21.1b0dbfbb.js",
    "revision": "b9e18a22827d11a36abfc1b8ea29ff1a"
  },
  {
    "url": "assets/js/22.61c96780.js",
    "revision": "5e90abe20c51e058e683cff355a4e507"
  },
  {
    "url": "assets/js/23.24bfb9ac.js",
    "revision": "509fde42516dd3da6599c97358b53e80"
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
    "url": "assets/js/app.1ba5d2c5.js",
    "revision": "4f4f5bc45767768c8486750b6fd27833"
  },
  {
    "url": "category/index.html",
    "revision": "8ec5a98481e01a112091e30204083f1a"
  },
  {
    "url": "egg/index.html",
    "revision": "21e544c06ac8e5de5255ac1b6db42c61"
  },
  {
    "url": "electron/index.html",
    "revision": "6099d136b4b30e732ad0df9fd37cbe0b"
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
    "revision": "4ae8dfb4d558bad63896fb9b80ec05c6"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "cd5f617b301f92180c4669ab804e07c3"
  },
  {
    "url": "notes/git.html",
    "revision": "fa321c562203d7b4519e55800b079bd1"
  },
  {
    "url": "notes/index.html",
    "revision": "200f9a642f16a94101c175fc31e61722"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a5cf478388d5f3f9111319b1cb38b05c"
  },
  {
    "url": "notes/node.html",
    "revision": "3a42d256389e08003eb20ed3829049a4"
  },
  {
    "url": "notes/npm.html",
    "revision": "4c8d3a851a8c213e4ab1a553d1f29070"
  },
  {
    "url": "notes/vscode.html",
    "revision": "61dfda628651168f5e73b730033b6bdd"
  },
  {
    "url": "tag/index.html",
    "revision": "7648a6b9a30b315daa6ce103b5c5b98c"
  },
  {
    "url": "uniapp/index.html",
    "revision": "79f0392af8013136d3dc95451620a42d"
  },
  {
    "url": "website/index.html",
    "revision": "5d9f73b842ca1ec8feb0433f16ca8c67"
  },
  {
    "url": "website/package.html",
    "revision": "32e9232f80be2149ecb1dd561a6435cd"
  },
  {
    "url": "website/rearend.html",
    "revision": "3e4ea0f05c7630c60becc1dca59c3afd"
  },
  {
    "url": "website/tools.html",
    "revision": "ddee1cb738f28f2adf13b1d884f0ecce"
  },
  {
    "url": "website/webclient.html",
    "revision": "d28db4955b24c757203388c51cdabbc7"
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
