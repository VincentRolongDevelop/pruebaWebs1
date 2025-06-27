'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "66448a503d96b97494832f6168370bf3",
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
".git/index": "778c8d3370e0daeb0e1885cae3c7ad83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b0ea93e1b3d3c7a184c3d1990b293b37",
".git/logs/refs/heads/main": "b0ea93e1b3d3c7a184c3d1990b293b37",
".git/logs/refs/remotes/origin/HEAD": "80230c2964542a61f3023378ed7fc23e",
".git/logs/refs/remotes/origin/main": "ccc1f4ceed538f54885ea159f1166cb7",
".git/objects/00/488d75d0dfd4f88a193e6590e21c0b6ddbca34": "a9f1d4b6653dd38430eaad8cd566cc36",
".git/objects/02/f5fcd4be3545836c16ff0b622355508ee921b4": "d97424fa82026469b0a58c37ee79a1ee",
".git/objects/08/75cee3238cc542e255cd239ddac34b8697515c": "15b151967d716f4ea14708b1b4a2d495",
".git/objects/0b/3ec812865472dce9ad35fbb31f7caec65c7435": "12b0d3671726e2cef2ed15d50386aa5f",
".git/objects/0c/c6965c515ecddf9ed7f0ede760937c18bfdac6": "92ba198831c6a5b65dab715b867eb995",
".git/objects/0f/d6ad0235b5d4345c30384be5b21fd8982a5466": "5efab186fb7d11cf5b81f13c8b3a8510",
".git/objects/10/dfe01eed3298722f1ee38bacad3a7b12d37e40": "8f1375f2ed7ae46d853e7b245187b4e5",
".git/objects/11/277d663d7105e0663322f08e4a97e0310eee6f": "a1eddc04b7c3f24a7642ceac0f5d9944",
".git/objects/11/2a0a6f4e71f864f29954ddcfdb3c4f11f6a002": "4a5a8d2961930cd193dbbe1e988c8f2b",
".git/objects/11/710aff4bb55c124418b0f6bf0ed46320394ec4": "d248d7c3167abf67063626d218fc96c4",
".git/objects/15/c782712344989fd0176a752c93a6754b994208": "0a5c00feab0e59ca211774ece0a6d139",
".git/objects/17/294feb2a7e2adde8f23428e4e7b5df43d118a2": "9ac94d852cf00936239f570303e51cf5",
".git/objects/18/3799f25432a7726b8c505b428a62362f9d9507": "a95e4a09203131360ea7c5e47a970934",
".git/objects/1b/c8f3dbc6710553d7849a2b187aa2e33bf14706": "dc16ec127e1cd4a45d6cbb9a200ca4a3",
".git/objects/1c/b0f19a26e57932f48a24c7d460f30beca8d3f3": "0e8f9ac780e03e5eae5fb982a76a882e",
".git/objects/1d/c5f08a9d8de83481a81cba017eddbfc1cc5754": "4338f568cf6519a06d1dcc326557d0cc",
".git/objects/20/72d5cf8ad3caf0c7234cee8800ae18dd993aa9": "d91eae3b505421a6a93005fd1c0d4462",
".git/objects/22/09df28bf3d2ee88d7d90196b49a898b3adba6a": "0a8fddb22444e7d9eabefbbbf5a22761",
".git/objects/26/33bd56afa0fc631f9fde1f8bbd7e5790fe859e": "3fb01b66079eb852c12bc0c18ab7ff0a",
".git/objects/29/7131fb1ca821a82b268cfeeefff0612bfe9b66": "cef1bdfcdfe15498b2ef489bfd927ffe",
".git/objects/2c/2b6a3be070859fe646347679c308a2251c0e6d": "61449c8b01bd867b6f0ff060fe436f6c",
".git/objects/33/919ccf445ccf08b2f88afcdfc267d5f16f6f2e": "2c42a3a9d861d5839e5ebca562965ec4",
".git/objects/37/a6d00e50d194aeb1d7b8efff3d656dffbf1c01": "1239e7f7afaeac1b103dccae03eeeda8",
".git/objects/3a/410a41d685ae43735e84202661cdb603eabeeb": "0536776d308854dea782a3f337da25c9",
".git/objects/3f/cbaaa3eb36114905247f13c2bd3a25ad70253f": "b9aefffe816016400a0f8dadbbf838c4",
".git/objects/41/993861c41020b49e1b70b38bb3adec46d0a14b": "375882180eb69e3a109cf2760f63368a",
".git/objects/47/75705160b6426e02bcad635e519689e677a6e3": "59434c381d066184b9441546d11f79a1",
".git/objects/48/272b92d4a58f6765d85821e73697409fc58b7c": "09816909e8bf98d83d8549156a45829e",
".git/objects/50/773a82888147d5fa24cef977a42770b61491b6": "168f6ea5c68fabd4cbb359ffe58225ee",
".git/objects/53/3880e94fcba9e226ca2b5b86d0acc64c323d6a": "75a1914d503bca0415b875fb8711a96e",
".git/objects/54/735c14908d980fb9e353f62d38a08d49027857": "ba329b81b58a29177dae185db49c1f71",
".git/objects/55/3d9ccde8bce46a2b04a78e2484b6bfec17d5f7": "6ed8cbd09b1c03108989213cbe436c46",
".git/objects/56/2a54520001990701662b42c987202444b49e39": "566e01725234f0b2e267f5b38c5de2d3",
".git/objects/57/16bbcf4efcd548f02f63d5cc549ecc83126800": "e464ddf0fd71b37ef3fea8c722097645",
".git/objects/5a/90d2c43c148c5491cf2ee0d65f15d9c9ccd009": "8536f8876135dfd594b29ac1b242d0c7",
".git/objects/5d/f7eb2b51c9266975013721a0ec8416a5314079": "3092b3fc31ed5dfaddd84f57797ee8d5",
".git/objects/5f/b060900faeb945724d07867b9f6e724df462a3": "57f03707a5da8dd9d447c045348f10c3",
".git/objects/64/b44e41862a42846098873511da1f5ea3ffbb6e": "fcc6b016e79b03430f9fed2dc60bb6de",
".git/objects/6b/2c9f8de90afefbccce8cdbe828d4e8bfc4fcd3": "c382265397e6f3b7cbab29b724a20b08",
".git/objects/74/b7650db525fc6e236c9fc518ef3a36a769e2ae": "d1a8d34a1beb0514f14785b9231a8c59",
".git/objects/74/e14703ad85fc832c079f8c57a88d021ef8c82d": "08a955648220f707732e4496f4c21e56",
".git/objects/79/d906fab1eb56f0b759a598c0c33c8af9fcf00b": "5ab71a8631280dd64c42e0f1e15b4496",
".git/objects/81/8cb8dfa3b6295aba6c36620301d5d2292e0711": "1c62739ed150b0b7e0f6d4e96daa3529",
".git/objects/82/2fadadb0a7611f6553107727d8b6aac619b5e2": "2956d6213c4cc0132ad5cfc46b055bbc",
".git/objects/82/dc831f7c8626d5394a4eee0f3e736dc925704e": "2f25cea56ef7201fa5e912e3ea00454d",
".git/objects/8a/a2e7e19292f893330465e9a46f4d6283476ec5": "8d993e3fc314c85f98f3380db45279c7",
".git/objects/8d/6151727613ed0b375b79a1cd94d626101add56": "2683bc19bd50d6e2cb15430bc848e726",
".git/objects/8d/ff5ae66fbf8b69d4757384b363796ea55f55c8": "f7ebf291b70ba3cb67fb298ee255b867",
".git/objects/8e/1cf06e8d8a2b4e465f663b4c945077eb84f3b3": "a0db43fa562448aa397236217e4a6535",
".git/objects/8e/b14770c2a6db5fcbbb296850d55f4ed743c298": "edd078d6cfcf51dc98390e1065bcf9a6",
".git/objects/91/a8348836e7a9f38f6b64857d219802be83441d": "788fa1da8e5b91bf20c8b9fade29b398",
".git/objects/92/5e9f7a6a799191e5a73dee66c2393f899d3d90": "b63c958c7c0ec4a6fa6e71adcb7d6528",
".git/objects/93/c65dce6c98ce8fba79112d78f8ee2e4fcae106": "c20fae1a3a831ef244fd6bc5360b50dc",
".git/objects/9b/be227e9796c8db846cf56d2b8e44c73c6ad820": "9d6e998f1f3e7fc2f9cda5a3844c0a36",
".git/objects/a1/72031f0ac70cb0c2823d22440dd2db1df9bbd1": "f253fc41696f53a0ff64d227b190e433",
".git/objects/a1/f82e87c4e5444f5a3fd572dc9f15de647502d4": "c23c92deace97ef0acc5afd411dbcd76",
".git/objects/a7/58ab82445bfba62b9230d634d2d0e38132250f": "b555e8d702e27eee7d360a0f86a4143b",
".git/objects/a7/85883e7bb9eba9548fa9b30150f02937e97119": "bcb996bf98200b3a4f33170e7f852b63",
".git/objects/a8/edaa5a5e0d802f75300fd378cfeafd16303ee1": "0d709ba03d6f3dc2f51e1b4d6866f137",
".git/objects/ab/6119363c1d59d88a359b06ab8f62f3466b8b87": "39bd3a1828b47dc67ecccf69d8024a4b",
".git/objects/b0/af2ac3e24618c161b18f9d309fc126c312a120": "c29df9b00635843aba513433c1397838",
".git/objects/b0/befc0837002e6a97701422f401a0eebb985ecc": "d4ced5b02c87803df1a548ea9d1c7064",
".git/objects/b4/a6a2c540af310bfe0454720c72be98dbc767fd": "0a7903944e5944cfa6186e5e026945dc",
".git/objects/b8/9b48ef4d02a29f5da5005d461dd1d7215cdd49": "7f1ff2b190abb7b13c859c3f6e7ff93b",
".git/objects/c1/99957c69797f8a579fc66eda48417ff4797934": "a8868dfd36ec6a8c764cb46c8186c01e",
".git/objects/c3/8fe622da1a682f74c66c39043f40df0357850a": "32452eea01e489521868feb8633ba200",
".git/objects/ca/f69d0f9aeb4523f90dd2cb1caff08af38d3056": "c1335570bb97c0fcf957180a84688bf9",
".git/objects/ce/882b65159a3dae3111c87bfda93458e25460b8": "e282c86c5f15df51d2585e8134bbe81e",
".git/objects/d7/8d42cee405793c3cd5ba58d0c02c273b7a8d7e": "cec15765deb548d486866c9298596e39",
".git/objects/e1/59f48155b048fca64921cd6689271b737cfee8": "8bb804808e2a6692b50dd1b8e0ad9aef",
".git/objects/e2/9a3d59dd4624c56030801fc325e9426156200b": "b7208212739a134f84765918fd8c6938",
".git/objects/e4/51079ed409efd041e32aa9aeb3731cc71fc8ed": "c65259efcaa2350c76af866abfe1c746",
".git/objects/e4/62f5c9537dfc02458384dfec49bc7f612c37dd": "a4705f4d02c7f31494b1dc170a38c447",
".git/objects/e4/65dfc6f64a4bce1e1afea404c8ac43c9a5ca5a": "ab2f730e13a892efabacab52d3af16e5",
".git/objects/e8/2bd6c0847361b13922ba5919188404b33bdbf1": "c2870009059505bfd229f4a1f15af0d1",
".git/objects/ec/955de80ffaa5454542ab9e58ee1627cc91230e": "bc941e9b22ac5635ea7803cf3d774ab2",
".git/objects/f1/7b4d978199c404016793b6751182b03d5bd7ac": "3a1b1fb954786a41503ff47635ad767f",
".git/objects/f3/c64bcf8b1abb9f2ae1789a5abdfb4ed5489b30": "1bb20fd9b06778d0bf9e75f8911afb51",
".git/objects/f7/f93ec47abad0464266a72c696fa76d43076d10": "87bc1646188822ff77945e14f597e3db",
".git/objects/pack/pack-eb2961e0df8f8df97726790a7496ece3312d5083.idx": "0a5b47f3390c1637f926e0b137d0b853",
".git/objects/pack/pack-eb2961e0df8f8df97726790a7496ece3312d5083.pack": "c73b6014423ee302cc253e18fa0616f7",
".git/objects/pack/pack-eb2961e0df8f8df97726790a7496ece3312d5083.rev": "1fd2a4ae9a55e8ac8774897037f30772",
".git/packed-refs": "ed3d54298af83d31d0b4887245487a75",
".git/refs/heads/main": "96b84640f8de6a227413ffe9b772d2d5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "96b84640f8de6a227413ffe9b772d2d5",
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
"assets/fonts/MaterialIcons-Regular.otf": "a2145db2b480d47a7ca8fcfef2ab8c08",
"assets/NOTICES": "60755b9a2d631c9986b708cab4df1bc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "921cb4f522c2c59136747e3224528f5f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "62a08dc88ca7138ceb1ff08c074dfac5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6dde8307adb390732b2b73d3eac01a8a",
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
"flutter_bootstrap.js": "7ef407395885645af4a5302870a4c801",
"icons/Icon-192.png": "e4fdc123ad9870f669f5165a7180c66b",
"icons/Icon-512.png": "575ca14f671725fee4b308bee996fc21",
"icons/Icon-maskable-192.png": "7e0e938dce6065fdb8fb7d15ef848378",
"icons/Icon-maskable-512.png": "1986fb93b90f51f2a4eaec47a6bf0bd7",
"index.html": "ae557e3816049445879254f68ca9d933",
"/": "ae557e3816049445879254f68ca9d933",
"main.dart.js": "8630508227eab1a9296b3430c4d06499",
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
