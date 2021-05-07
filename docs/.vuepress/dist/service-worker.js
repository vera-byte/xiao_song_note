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
    "revision": "486cf0d13d82b426fb16eeb94a154fc7"
  },
  {
    "url": "About.html",
    "revision": "8f6678e3f6a9fc80ec7faa4aadb31401"
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
    "url": "assets/js/10.6e91c46c.js",
    "revision": "99ba9bc3db3490383d98d5eb761b839a"
  },
  {
    "url": "assets/js/11.38a2c4a1.js",
    "revision": "731061e1d267b8aee120051eee2b1633"
  },
  {
    "url": "assets/js/12.266e412f.js",
    "revision": "8e467baf203ad8a3e8f9b04f238565be"
  },
  {
    "url": "assets/js/13.c32756ed.js",
    "revision": "2eaf7a7308e4ada021e36d2c8bc115ca"
  },
  {
    "url": "assets/js/14.2ed947a0.js",
    "revision": "a6608b501c1afa84241896ef05a6ba2a"
  },
  {
    "url": "assets/js/15.0180e547.js",
    "revision": "da3e50b35ddcb209acf041f443e4634f"
  },
  {
    "url": "assets/js/16.75fd0b73.js",
    "revision": "190419fe4cb06465023e02c0d7893dbf"
  },
  {
    "url": "assets/js/17.514faf42.js",
    "revision": "80fcda31acac41d7b965136dd1c02c88"
  },
  {
    "url": "assets/js/18.29281fc5.js",
    "revision": "24e9951e94cff5bfe5523be8c16e26e1"
  },
  {
    "url": "assets/js/19.7e3240eb.js",
    "revision": "09d0bba8f2f227e93fd706de1bc38edd"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.fe5ae221.js",
    "revision": "5aa0dc27d45f7600146bcaaff8d143ae"
  },
  {
    "url": "assets/js/21.27d8d938.js",
    "revision": "595fc27ce9dcf14a90b1a64b446096bb"
  },
  {
    "url": "assets/js/22.9acbd127.js",
    "revision": "9333a14f43c3c7cfa6ef03d96b292769"
  },
  {
    "url": "assets/js/23.09e65aaf.js",
    "revision": "ef0961c675cc5e55e842134ed5b2263d"
  },
  {
    "url": "assets/js/24.179a2fb9.js",
    "revision": "21423ee71915a4b348c8dec3e91f55d0"
  },
  {
    "url": "assets/js/25.f956a518.js",
    "revision": "a18d69a4a1f9643fdc81ced7b04d552c"
  },
  {
    "url": "assets/js/26.15ffcce4.js",
    "revision": "df32063e3bf0b84b3bafad489447f9f7"
  },
  {
    "url": "assets/js/27.d79ab1bd.js",
    "revision": "d6eb1c61be9ac260e56a6d7597b8bd8e"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.905651e4.js",
    "revision": "a655c3b3e3952821b488c699b78958fd"
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
    "url": "assets/js/9.569dfb7f.js",
    "revision": "9f5418f3d5380502c61c6c5c1cc1930c"
  },
  {
    "url": "assets/js/app.e12fbc35.js",
    "revision": "44b14330d5afda9c249710ef5bf3428c"
  },
  {
    "url": "category/index.html",
    "revision": "244b1ae19ceac7c473409f538ce1d583"
  },
  {
    "url": "egg/index.html",
    "revision": "e820a75d3e9e8399e5d8fa40c6cb4847"
  },
  {
    "url": "electron/index.html",
    "revision": "d47b3dd55071d033deb4bf3185495105"
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
    "revision": "40ecaf678fa8cd03abaeaf40d1cd7a47"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "bc374ca461ac713fada50b5533d09b9d"
  },
  {
    "url": "notes/git.html",
    "revision": "f2a126190bad12c8e2182ec3d5f057ff"
  },
  {
    "url": "notes/index.html",
    "revision": "c7522547dd743a1f3917c432dc7e5dcd"
  },
  {
    "url": "notes/nginx.html",
    "revision": "4ee93ae156f3b19c512b74a9d0ec79f3"
  },
  {
    "url": "notes/node.html",
    "revision": "a10d126050217e543061326f6c11e32b"
  },
  {
    "url": "notes/npm.html",
    "revision": "99ecb6c9556ece46e94b1c968b987ef8"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "d37666faa31567ac4203c3092cd37033"
  },
  {
    "url": "notes/vscode.html",
    "revision": "29f6023516da47af453d207ce2062f4e"
  },
  {
    "url": "tag/index.html",
    "revision": "76dd2f2e3ee56a36b46e398b80ad1704"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "9ea4bea726c5274cd123c554696f9e53"
  },
  {
    "url": "uniapp/index.html",
    "revision": "95c26f26b92056b5154e0a175e0563dd"
  },
  {
    "url": "uniapp/uniapp.html",
    "revision": "010c8a922104b8aa5851298db17aaa51"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "b85dd85956a234ff623c88f1cc09533c"
  },
  {
    "url": "website/index.html",
    "revision": "61a4c39b52fd26108163a65f3818b06e"
  },
  {
    "url": "website/package.html",
    "revision": "058d7ba6824afe549953ab4df95b4917"
  },
  {
    "url": "website/rearend.html",
    "revision": "cb92bb61eba0f0c1cab1598980459e09"
  },
  {
    "url": "website/tools.html",
    "revision": "8821d7802568a7e7765cbbfc57f927bb"
  },
  {
    "url": "website/webclient.html",
    "revision": "179df1194186e9c8f0e5a44987bc82d2"
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
