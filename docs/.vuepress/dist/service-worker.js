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
    "revision": "afcff3101a5a45aed0e282f98fe61654"
  },
  {
    "url": "About.html",
    "revision": "8f639f7948a37b21a9b863f646eac0bc"
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
    "url": "assets/js/10.986f205c.js",
    "revision": "87170068bb9c1a40e1852240d7d72234"
  },
  {
    "url": "assets/js/11.05722211.js",
    "revision": "e9b6e8ce0ec8dc635308f46121a8a0e1"
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
    "url": "assets/js/14.486c076f.js",
    "revision": "3d049af2feb4983388fff602fd85e80c"
  },
  {
    "url": "assets/js/15.896fca01.js",
    "revision": "d116a2b9acd42194cf614c2fb72c8adf"
  },
  {
    "url": "assets/js/16.42fb2d56.js",
    "revision": "4df75fb4678d042d53c78420714ecbbf"
  },
  {
    "url": "assets/js/17.dc50463f.js",
    "revision": "5890a6c9e83847ce59f4408f8e0ee6cd"
  },
  {
    "url": "assets/js/18.90b640bb.js",
    "revision": "ba45b5cddc1ad73bddda7ba7bc051700"
  },
  {
    "url": "assets/js/19.344ca220.js",
    "revision": "f28e9260e194f4e548e7982f003090a8"
  },
  {
    "url": "assets/js/2.9214251a.js",
    "revision": "325a931123ccd3681445173a46ed83de"
  },
  {
    "url": "assets/js/20.d677cb23.js",
    "revision": "85597bb860388c3280824698323d5a7c"
  },
  {
    "url": "assets/js/21.49686d0e.js",
    "revision": "41fd3e0360f7affea29fcc4cafaad2d2"
  },
  {
    "url": "assets/js/22.2bccdda1.js",
    "revision": "d8bba11c073168a231ac913f15e31486"
  },
  {
    "url": "assets/js/23.d083e334.js",
    "revision": "9bc44daee87fc3e3b05a965ee2857113"
  },
  {
    "url": "assets/js/24.19cd07cf.js",
    "revision": "e6c418074f1df2e7eb1e44963d82e6f8"
  },
  {
    "url": "assets/js/25.c9e4e5d5.js",
    "revision": "744558f732516ef4614f77e583124517"
  },
  {
    "url": "assets/js/26.b5cd22ab.js",
    "revision": "10d20167cb7c63ab7d66ac28c21d0426"
  },
  {
    "url": "assets/js/3.134cdce2.js",
    "revision": "b2ebf35a39e25811bb7e828afdf688da"
  },
  {
    "url": "assets/js/4.b2dd4006.js",
    "revision": "fe395b7bd2ea0e7c868b024a2a7d139d"
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
    "url": "assets/js/app.68974941.js",
    "revision": "779805842cec1b78248d2ecfab214bf0"
  },
  {
    "url": "category/index.html",
    "revision": "4ca8c6dbfdee3cf6a3bbd48bbc58364c"
  },
  {
    "url": "egg/index.html",
    "revision": "05467bfc5bae75f2948d9d9b95746903"
  },
  {
    "url": "electron/index.html",
    "revision": "c8d3c13c30efdea8a600bc719484b4bb"
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
    "revision": "bd85d0579a2a46fb28a5e963f05e7856"
  },
  {
    "url": "notes/git-webhook.html",
    "revision": "ec6198913d2a973a2d800ac308b38ca7"
  },
  {
    "url": "notes/git.html",
    "revision": "f0c76d6b389368323bf10a2a28b7e534"
  },
  {
    "url": "notes/index.html",
    "revision": "725292c2ad5a0a383f1bfdfdaefe2756"
  },
  {
    "url": "notes/nginx.html",
    "revision": "b65fb80797c4f65f95d5cc42331fda3b"
  },
  {
    "url": "notes/node.html",
    "revision": "15d8010d6c1b886291fc195b057fec88"
  },
  {
    "url": "notes/npm.html",
    "revision": "f9aa91beae9d671e7e310fd7f1bbcdef"
  },
  {
    "url": "notes/typeorm.html",
    "revision": "71ba739a8d6af53fc7815b69a822bd44"
  },
  {
    "url": "notes/vscode.html",
    "revision": "7152980bd445438f8330fea89b93fcb2"
  },
  {
    "url": "tag/index.html",
    "revision": "d22cca8ba8ab0ab93bc5a05ec05cff7b"
  },
  {
    "url": "uniapp/使用Vscode开发Uniapp项目.html",
    "revision": "27343452af02fea45cf2c9314c17c962"
  },
  {
    "url": "uniapp/index.html",
    "revision": "52b9f97acbb59c4bfe57c433607889f5"
  },
  {
    "url": "uniapp/Uniapp引入自定义字体.html",
    "revision": "ecee49a8b46b534cf2d15a92f6bf0a6a"
  },
  {
    "url": "website/index.html",
    "revision": "fcfcc93ca8acb5fd767c4ef52cfcac75"
  },
  {
    "url": "website/package.html",
    "revision": "44319d883febe3fffe68d2ea4d0e083a"
  },
  {
    "url": "website/rearend.html",
    "revision": "a9b5050a4aa96383fa26689091fa98cf"
  },
  {
    "url": "website/tools.html",
    "revision": "ba33f6ea5e24931fc15b5f838e8cfe1f"
  },
  {
    "url": "website/webclient.html",
    "revision": "25e8a0461c57fb4e0a2c3c18238ead05"
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
