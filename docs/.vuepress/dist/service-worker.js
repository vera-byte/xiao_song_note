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
    "revision": "a72595ec3d036b4f4797fd4d4f232dd3"
  },
  {
    "url": "About.html",
    "revision": "ce9243144d81abc9e7a63d04861decd8"
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
    "url": "assets/js/13.c39ae9ee.js",
    "revision": "550b301b477b1f4bb2f82c014700514a"
  },
  {
    "url": "assets/js/14.6b45c364.js",
    "revision": "5d50e97907c7385612e13ba4a375f582"
  },
  {
    "url": "assets/js/15.3ceecfa6.js",
    "revision": "deabeb52d9772bffaab519dd62e9daaa"
  },
  {
    "url": "assets/js/16.8cb61c0f.js",
    "revision": "0baa67f034bef5d2614ec54b7f55b66f"
  },
  {
    "url": "assets/js/17.404f34d2.js",
    "revision": "3736324d5f4a5d9c61db364592e0e473"
  },
  {
    "url": "assets/js/18.4532a84f.js",
    "revision": "15395b7e7050718bbe495508e136271e"
  },
  {
    "url": "assets/js/19.01f406cd.js",
    "revision": "e1b4ff41640907ddee9c4a818486a0f0"
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
    "url": "assets/js/21.911b49c5.js",
    "revision": "011b363cbf0137b2befe9020729a5be2"
  },
  {
    "url": "assets/js/22.5ac5ff0f.js",
    "revision": "5d92dced1276ecfb96ac3d144224a83a"
  },
  {
    "url": "assets/js/23.94e3a862.js",
    "revision": "9d1c791cc6459258d711ebd0038914ae"
  },
  {
    "url": "assets/js/24.d576466c.js",
    "revision": "e9f4d188b4f8e03e36609dc4e73d8ced"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.d3112bb1.js",
    "revision": "562374243753a0546be6d2cbdea45e06"
  },
  {
    "url": "category/index.html",
    "revision": "c783756f0a6ada186efc556e8ac1e636"
  },
  {
    "url": "egg/index.html",
    "revision": "153a076fdda061ab9394faeca54d3f86"
  },
  {
    "url": "electron/index.html",
    "revision": "c895744901994187b18c5dcf91fd403d"
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
    "revision": "1812479acd9c367fcf2bb2601391f272"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "324addb97a57f6b59828a2de2b643644"
  },
  {
    "url": "notes/git.html",
    "revision": "1736ebcf97d766a7a1e0f37134d88872"
  },
  {
    "url": "notes/index.html",
    "revision": "5cfaf89be9672b010efb17e56cd14c68"
  },
  {
    "url": "notes/nginx.html",
    "revision": "46b19056a0c9ec512702cdf5d312212b"
  },
  {
    "url": "notes/node.html",
    "revision": "cc87b2e7c5d294a46990b4c45da8d994"
  },
  {
    "url": "notes/npm.html",
    "revision": "4f87a8f2e96e91123f1e30d5f09606b1"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "564603cd920cb307b5e563cfd342938c"
  },
  {
    "url": "notes/vscode.html",
    "revision": "b7ec3e04626194f7d07364c4c04a346d"
  },
  {
    "url": "tag/index.html",
    "revision": "3d0e7d5417c354eb30a1e28aeb646a57"
  },
  {
    "url": "uniapp/index.html",
    "revision": "1ecc505325946cc5f41551253e2412e4"
  },
  {
    "url": "website/index.html",
    "revision": "8fe60c09cca7f58ec48f217730d713fd"
  },
  {
    "url": "website/package.html",
    "revision": "3d2a54b825ff25b946242ea74eaf1570"
  },
  {
    "url": "website/rearend.html",
    "revision": "349afcd59c742d483fa9866b295d0507"
  },
  {
    "url": "website/tools.html",
    "revision": "5eb3f24dd08611d8ec3effc0b36de9e6"
  },
  {
    "url": "website/webclient.html",
    "revision": "8420b1680e6fd30f0eafef128c1d80ac"
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
