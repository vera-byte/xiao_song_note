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
    "revision": "31f74db018cce4710f1ed4e4aaefd9c1"
  },
  {
    "url": "About.html",
    "revision": "d51863f3eb6277176fe1e67797416d3d"
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
    "url": "assets/js/11.f8601d26.js",
    "revision": "c4134c9cb8abe7f9386d6ff129f7dc14"
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
    "url": "assets/js/14.9de783f8.js",
    "revision": "ed0186ec507e0c2a8b154b6f6ebc9052"
  },
  {
    "url": "assets/js/15.0180e547.js",
    "revision": "da3e50b35ddcb209acf041f443e4634f"
  },
  {
    "url": "assets/js/16.5618f921.js",
    "revision": "3cbf23386352f66839a05c8763fdfa5a"
  },
  {
    "url": "assets/js/17.9d7672be.js",
    "revision": "76eec52ef60e22b45597ac4f1430c9f7"
  },
  {
    "url": "assets/js/18.390d756b.js",
    "revision": "b60890a1ab1710ba40814df4fb3f9c63"
  },
  {
    "url": "assets/js/19.accd6304.js",
    "revision": "38c04c817e93b3e329fc9130b30fd5ca"
  },
  {
    "url": "assets/js/2.5e289127.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.2f2d53ea.js",
    "revision": "60fdd2bc032ec175eff32f2425344f53"
  },
  {
    "url": "assets/js/21.4ee758d6.js",
    "revision": "4934515b3d30b89db9646a1083eb12f3"
  },
  {
    "url": "assets/js/22.014a2095.js",
    "revision": "461a41a805db444043d6be6788bc6072"
  },
  {
    "url": "assets/js/23.ff032486.js",
    "revision": "b2e7f183ed10f5c705c336e11aa168f2"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.3c886f31.js",
    "revision": "51e82fe7e95a54bc9b7e1bb6f983ece2"
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
    "url": "assets/js/9.892cfdd5.js",
    "revision": "5efb292ac5581ce5c5df189e7616c9df"
  },
  {
    "url": "assets/js/app.32a7d74c.js",
    "revision": "556c7a6b94ec748c33b5d4ef43483259"
  },
  {
    "url": "category/index.html",
    "revision": "3798dc6df4ede676ab309d5b233c8dad"
  },
  {
    "url": "egg/index.html",
    "revision": "0e87be994cdf2081ad486d78f0aef929"
  },
  {
    "url": "electron/index.html",
    "revision": "8b45c196690a330bd5e3f31931ec3d31"
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
    "revision": "512f6b4b24e47dcec9f15cfc6f8b4964"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "4460da06b7374e29d8b3defbae1d1ac7"
  },
  {
    "url": "notes/git.html",
    "revision": "137b14c26dd1b8b3f77aa4cec5d0d1a7"
  },
  {
    "url": "notes/index.html",
    "revision": "b8c165c21de6cd0d948bd90da6ca8625"
  },
  {
    "url": "notes/nginx.html",
    "revision": "a03fd6c9d6840dfd556a52d21405e12d"
  },
  {
    "url": "notes/npm.html",
    "revision": "dd37a57e87808e849099f611f4529234"
  },
  {
    "url": "notes/vscode.html",
    "revision": "836a48d586a6e8aa8059b991d4efaedd"
  },
  {
    "url": "tag/index.html",
    "revision": "0098bff137a39273a05e8987b8822865"
  },
  {
    "url": "uniapp/index.html",
    "revision": "579022752a8f351394afe89837e4aa2d"
  },
  {
    "url": "website/index.html",
    "revision": "f938d1aa08c7fe6c6a253fc353ea8271"
  },
  {
    "url": "website/package.html",
    "revision": "472aabb6a42330090c46de3a3ed12f5b"
  },
  {
    "url": "website/rearend.html",
    "revision": "d1ef48bf5d09014a8eaad53be0e1ddd0"
  },
  {
    "url": "website/tools.html",
    "revision": "c30cd35a0b500616d250f97e87a2f7f8"
  },
  {
    "url": "website/webclient.html",
    "revision": "d5a55f72f9caa99c24f35b50e5c9d359"
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
