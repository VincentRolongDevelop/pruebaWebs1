'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "97c44117066197bdfd21e7d6aefd6eee",
".git/config": "96c6155cb431760c704f6ded796bafcd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4956836a6f338b615c0fe1470f9833cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "606e68030ec224f8339a4a2b2ad47088",
".git/logs/refs/heads/main": "606e68030ec224f8339a4a2b2ad47088",
".git/logs/refs/remotes/origin/HEAD": "80230c2964542a61f3023378ed7fc23e",
".git/logs/refs/remotes/origin/main": "cef365bf1d5ad45473eb41beb490d27a",
".git/objects/0c/c6965c515ecddf9ed7f0ede760937c18bfdac6": "92ba198831c6a5b65dab715b867eb995",
".git/objects/0f/d6ad0235b5d4345c30384be5b21fd8982a5466": "5efab186fb7d11cf5b81f13c8b3a8510",
".git/objects/11/2a0a6f4e71f864f29954ddcfdb3c4f11f6a002": "4a5a8d2961930cd193dbbe1e988c8f2b",
".git/objects/1b/c8f3dbc6710553d7849a2b187aa2e33bf14706": "dc16ec127e1cd4a45d6cbb9a200ca4a3",
".git/objects/1c/b0f19a26e57932f48a24c7d460f30beca8d3f3": "0e8f9ac780e03e5eae5fb982a76a882e",
".git/objects/20/72d5cf8ad3caf0c7234cee8800ae18dd993aa9": "d91eae3b505421a6a93005fd1c0d4462",
".git/objects/22/09df28bf3d2ee88d7d90196b49a898b3adba6a": "0a8fddb22444e7d9eabefbbbf5a22761",
".git/objects/29/7131fb1ca821a82b268cfeeefff0612bfe9b66": "cef1bdfcdfe15498b2ef489bfd927ffe",
".git/objects/2c/2b6a3be070859fe646347679c308a2251c0e6d": "61449c8b01bd867b6f0ff060fe436f6c",
".git/objects/33/919ccf445ccf08b2f88afcdfc267d5f16f6f2e": "2c42a3a9d861d5839e5ebca562965ec4",
".git/objects/3a/410a41d685ae43735e84202661cdb603eabeeb": "0536776d308854dea782a3f337da25c9",
".git/objects/3f/cbaaa3eb36114905247f13c2bd3a25ad70253f": "b9aefffe816016400a0f8dadbbf838c4",
".git/objects/50/773a82888147d5fa24cef977a42770b61491b6": "168f6ea5c68fabd4cbb359ffe58225ee",
".git/objects/56/2a54520001990701662b42c987202444b49e39": "566e01725234f0b2e267f5b38c5de2d3",
".git/objects/74/e14703ad85fc832c079f8c57a88d021ef8c82d": "08a955648220f707732e4496f4c21e56",
".git/objects/79/d906fab1eb56f0b759a598c0c33c8af9fcf00b": "5ab71a8631280dd64c42e0f1e15b4496",
".git/objects/81/8cb8dfa3b6295aba6c36620301d5d2292e0711": "1c62739ed150b0b7e0f6d4e96daa3529",
".git/objects/82/dc831f7c8626d5394a4eee0f3e736dc925704e": "2f25cea56ef7201fa5e912e3ea00454d",
".git/objects/8a/a2e7e19292f893330465e9a46f4d6283476ec5": "8d993e3fc314c85f98f3380db45279c7",
".git/objects/8d/ff5ae66fbf8b69d4757384b363796ea55f55c8": "f7ebf291b70ba3cb67fb298ee255b867",
".git/objects/9b/be227e9796c8db846cf56d2b8e44c73c6ad820": "9d6e998f1f3e7fc2f9cda5a3844c0a36",
".git/objects/a1/72031f0ac70cb0c2823d22440dd2db1df9bbd1": "f253fc41696f53a0ff64d227b190e433",
".git/objects/a1/f82e87c4e5444f5a3fd572dc9f15de647502d4": "c23c92deace97ef0acc5afd411dbcd76",
".git/objects/a7/85883e7bb9eba9548fa9b30150f02937e97119": "bcb996bf98200b3a4f33170e7f852b63",
".git/objects/ab/6119363c1d59d88a359b06ab8f62f3466b8b87": "39bd3a1828b47dc67ecccf69d8024a4b",
".git/objects/b0/befc0837002e6a97701422f401a0eebb985ecc": "d4ced5b02c87803df1a548ea9d1c7064",
".git/objects/c1/99957c69797f8a579fc66eda48417ff4797934": "a8868dfd36ec6a8c764cb46c8186c01e",
".git/objects/c3/8fe622da1a682f74c66c39043f40df0357850a": "32452eea01e489521868feb8633ba200",
".git/objects/e4/51079ed409efd041e32aa9aeb3731cc71fc8ed": "c65259efcaa2350c76af866abfe1c746",
".git/objects/ec/955de80ffaa5454542ab9e58ee1627cc91230e": "bc941e9b22ac5635ea7803cf3d774ab2",
".git/objects/f3/c64bcf8b1abb9f2ae1789a5abdfb4ed5489b30": "1bb20fd9b06778d0bf9e75f8911afb51",
".git/objects/pack/pack-eb2961e0df8f8df97726790a7496ece3312d5083.idx": "0a5b47f3390c1637f926e0b137d0b853",
".git/objects/pack/pack-eb2961e0df8f8df97726790a7496ece3312d5083.pack": "c73b6014423ee302cc253e18fa0616f7",
".git/objects/pack/pack-eb2961e0df8f8df97726790a7496ece3312d5083.rev": "1fd2a4ae9a55e8ac8774897037f30772",
".git/packed-refs": "ed3d54298af83d31d0b4887245487a75",
".git/refs/heads/main": "24699f678eda8a35abdf8653cd12f55d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "394ec606e7dd80b4d01f6133aaaeb0b9",
"assets/AssetManifest.bin": "488b8dc545e49ad8e5f7bb959c2a6c33",
"assets/AssetManifest.bin.json": "2d141abd8d4ae0da331719406aaf4053",
"assets/AssetManifest.json": "8a2ccf249889dd0b5b411c1a71ad5234",
"assets/assets/11.png": "6cbf1ecc004063d3a632355ec6834d21",
"assets/assets/login_background.png": "08047c1ef7062fd24d90deacb45d89b6",
"assets/assets/logo.png": "1808f7762f51b1e262f91198c4b497d3",
"assets/assets/logo_3.png": "8a875b33b2cc4fe58f88ae4f030b7946",
"assets/assets/logo_item.png": "1cc5ed56e8e5414b0820e3f3e56282cd",
"assets/assets/respaldo.png": "7474e4ce34aca97f3df5d20df9edcb55",
"assets/assets/web_login_background.png": "4e25167efae4b4daae92b87ea8e4db38",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "cc6cdacb0f991ec6082de295d4627528",
"assets/NOTICES": "60755b9a2d631c9986b708cab4df1bc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "921cb4f522c2c59136747e3224528f5f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "62a08dc88ca7138ceb1ff08c074dfac5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e6f5283af4992139c1b2efb6378b6d9d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "12b06e28e3e126eb13dd043ed6c8fc21",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e23f2d02dcc05e96c7647b459743d3e8",
"icons/Icon-192.png": "e4fdc123ad9870f669f5165a7180c66b",
"icons/Icon-512.png": "575ca14f671725fee4b308bee996fc21",
"icons/Icon-maskable-192.png": "7e0e938dce6065fdb8fb7d15ef848378",
"icons/Icon-maskable-512.png": "1986fb93b90f51f2a4eaec47a6bf0bd7",
"index.html": "ae557e3816049445879254f68ca9d933",
"/": "ae557e3816049445879254f68ca9d933",
"main.dart.js": "9058a8e47f34a873dcc3655d47274450",
"manifest.json": "8f41feed249a6095884f7bb21b51e31b",
"version.json": "199673f15f2138c4445d7d76b70d28bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
