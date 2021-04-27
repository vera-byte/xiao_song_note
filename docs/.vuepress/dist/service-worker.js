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
    "revision": "b9a154ba42ac42e2fc625b141f07c07a"
  },
  {
    "url": "About.html",
    "revision": "3c8ac5cc37b138920a4e49233dbe720c"
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
    "url": "assets/js/10.c6842300.js",
    "revision": "eb482a184661a1455c16aee797e25fa5"
  },
  {
    "url": "assets/js/11.863e526a.js",
    "revision": "c067d69b915e55345f165a7f2dfde439"
  },
  {
    "url": "assets/js/12.f3e1e718.js",
    "revision": "4a607c77f8fa0c9f567a771b50bd4f1b"
  },
  {
    "url": "assets/js/13.c39ae9ee.js",
    "revision": "550b301b477b1f4bb2f82c014700514a"
  },
  {
    "url": "assets/js/14.c6364427.js",
    "revision": "57c31061af7399dc459c0c617aa58c79"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.8cb61c0f.js",
    "revision": "0baa67f034bef5d2614ec54b7f55b66f"
  },
  {
    "url": "assets/js/17.3b21a8d1.js",
    "revision": "06ff581f68fdf9693f54feede039259b"
  },
  {
    "url": "assets/js/18.7eff0ac1.js",
    "revision": "55a46c6ae70b89793eb730872113e4a3"
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
    "url": "assets/js/20.0b1bd4e3.js",
    "revision": "ad96f14d55b367b0a6ddebc0cf78235c"
  },
  {
    "url": "assets/js/21.038e47a9.js",
    "revision": "23b3e2d9b32098bc3e38230876b8035a"
  },
  {
    "url": "assets/js/22.e6064936.js",
    "revision": "5f90487273397825498a741cf4e539cc"
  },
  {
    "url": "assets/js/23.df9e9766.js",
    "revision": "6e524e88a2c83c99dcaa864241d68e2d"
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
    "url": "assets/js/app.17408a61.js",
    "revision": "18b1f0fe4530d17176fb8fbab023fa64"
  },
  {
    "url": "category/index.html",
    "revision": "7148bf751d7e12e79bc4f6d2ddef12bb"
  },
  {
    "url": "egg/index.html",
    "revision": "009dabfec739ba3148000fb68735470d"
  },
  {
    "url": "electron/index.html",
    "revision": "9ed55274a5def14c7cb9951b7b3dc0c9"
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
    "revision": "5e67ee9d99ebe8381f11d16f4b4c55f2"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "9029de033f265979f4f58d81ad185b5f"
  },
  {
    "url": "notes/git.html",
    "revision": "949d93298a14eeff0f80c9048d98b350"
  },
  {
    "url": "notes/index.html",
    "revision": "4be83f019aa9a1b07ba58f6582759d35"
  },
  {
    "url": "notes/nginx.html",
    "revision": "9d94fb04a2fd9ca7eccf0025b2c0342b"
  },
  {
    "url": "notes/node.html",
    "revision": "84442a426b755aec13c99b70199a9ba1"
  },
  {
    "url": "notes/npm.html",
    "revision": "f1937205c7d6097d900145607ac1b914"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "a586c27c15527227731cc789b965aa2f"
  },
  {
    "url": "notes/vscode.html",
    "revision": "ed74816e14c613f1a030dc5256c3dae0"
  },
  {
    "url": "tag/index.html",
    "revision": "99214127d3b37b04c90b12336561c046"
  },
  {
    "url": "uniapp/index.html",
    "revision": "11ae701f24cbd6ecc098591b80a0e4ce"
  },
  {
    "url": "website/index.html",
    "revision": "b28a675a32b617e7ea548559067510f7"
  },
  {
    "url": "website/package.html",
    "revision": "2f29b0d79834c4c61d536be95cf829e7"
  },
  {
    "url": "website/rearend.html",
    "revision": "41ca9037fc86934c5e8c05f61da91295"
  },
  {
    "url": "website/tools.html",
    "revision": "9d4227e76e25dd52453c8c691202e0df"
  },
  {
    "url": "website/webclient.html",
    "revision": "97dc90d4158f8adc7939a2898ea53b6d"
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
