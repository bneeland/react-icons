if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,n)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=n(...e);return s.default||(s.default=c),s})}))}}define("./sw.js",["./workbox-d8fc897c"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"_jwiYSnOTQkY2y3uxU6L5"},{url:"/_next/static/_jwiYSnOTQkY2y3uxU6L5/_buildManifest.js",revision:"87b9db8178d612c3d86d5a643c8a3bdc"},{url:"/_next/static/_jwiYSnOTQkY2y3uxU6L5/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/13.5a23f43665dbfd5dbb14.js",revision:"2514015db48ab686dd3d6e37dcf7f7f1"},{url:"/_next/static/chunks/14.d2e449f17d737ae66269.js",revision:"f8ce3a9950fddd27836f1b09e043f924"},{url:"/_next/static/chunks/15.d76395620ff9d97db505.js",revision:"93ef482bd7170fb8f6d6f170051d6f99"},{url:"/_next/static/chunks/16.9a7c1336969bdfb594c3.js",revision:"c5d9ef28e472fab313b7eaf6ae24c474"},{url:"/_next/static/chunks/17.f756ee24e398b8b1c6f2.js",revision:"81b6910e3f447be37e5eb9d20e231de9"},{url:"/_next/static/chunks/18.7a5ad51b53f53894a353.js",revision:"658fc22c5d0d0e4278a74da5363c0368"},{url:"/_next/static/chunks/19.a548b6ddfeb5101bfaa3.js",revision:"768e5cbb01b08bab6f02b350dd0492df"},{url:"/_next/static/chunks/1d7de3dbcee8cc0ba1441789490f57b5dbab48f4.13c524be64f383d055c0.js",revision:"a537c054c170f656382b522c55aa4303"},{url:"/_next/static/chunks/20.646780a75e6797184c20.js",revision:"a2f70945df101db4d341aec64039098c"},{url:"/_next/static/chunks/22.45334a6718ffeef8b2d3.js",revision:"cd9d4cef8691c22b353aa745f3fd4adb"},{url:"/_next/static/chunks/23.8c1bcf2801885036f4fb.js",revision:"0ed5db0d2cec95696c1aa75c439c6e0f"},{url:"/_next/static/chunks/24.51ce9fe28e2c8c3b9ecb.js",revision:"f175fdd4ab0682531b1720a975af38f5"},{url:"/_next/static/chunks/25.8a8b6090e2cc3026af98.js",revision:"0d937e6f206f45e1e3605c6af690b0b2"},{url:"/_next/static/chunks/26.0bb29948d1bc9b7580b8.js",revision:"1d8519f3f6000aa93d04728a5df398d0"},{url:"/_next/static/chunks/27.326654279d0c4e52a9c7.js",revision:"e83050807165e8ad5197c706b468a71e"},{url:"/_next/static/chunks/28.3b1aa512b2dcadab6a30.js",revision:"f25b643116756685bf9cbabf6e3ddc53"},{url:"/_next/static/chunks/29.4a46ae1bc89aaa018654.js",revision:"30b6af0fc7ea24087c807336edef189f"},{url:"/_next/static/chunks/31.87f1828ecfada7fab392.js",revision:"78e001134f2c27bc76d86ac078b45b36"},{url:"/_next/static/chunks/32.cdb8d148ba95f79070af.js",revision:"ae94bbaab937e4be08fb1a343d65f8c4"},{url:"/_next/static/chunks/33.3176dc4037eb42a55e7d.js",revision:"2ef2d16317c98bd5b1cd11dd176549e1"},{url:"/_next/static/chunks/34.b1e8242a2837099109ac.js",revision:"e44f6605b1decc5fde957b87f3d09dd2"},{url:"/_next/static/chunks/6e718a903d2b2e8e5adbb27243021d89c3092835.48bed343ce448998f2e6.js",revision:"81f9fdc01e4866d297e9608506bffe49"},{url:"/_next/static/chunks/9c52c29b96d2a801339ded4fe12325569159951c.e9342f858c870d6b5456.js",revision:"638705c6fc5e83f5c1652c2b004b5ba9"},{url:"/_next/static/chunks/aa7211ef10ddeeb2b5b69fd333f2710cede69d3c.02189b3b6ed672e4cce3.js",revision:"662ee7c07faf588da78f70c0aff9bfb0"},{url:"/_next/static/chunks/framework.cd0bada2e78bd80de574.js",revision:"01280601953dd03ceb505456ad964e7a"},{url:"/_next/static/chunks/main-ca46882811e4c77da806.js",revision:"e711f1022f9594576179c8b6f83952dd"},{url:"/_next/static/chunks/pages/_app-ebe1dbf05e1ff07f78de.js",revision:"6ccc3cdb1bff18912f04f65775ddeeec"},{url:"/_next/static/chunks/pages/_error-9f9ba3ddda95c9822910.js",revision:"d62f1f1bf39bb3067d60a608278e8849"},{url:"/_next/static/chunks/pages/icons-fbcda91e8c8bf538dab2.js",revision:"dfc68355e6c5a3d3089eb381f1b3c4a9"},{url:"/_next/static/chunks/pages/index-03a88097ee7ce1a69486.js",revision:"c95612f766d23aa177333d0a1af1c205"},{url:"/_next/static/chunks/pages/search-a3078a6af86e69f37bad.js",revision:"a16c6539a67dd5f7b9c7b609edd288c9"},{url:"/_next/static/chunks/polyfills-8767c02c7b67810a8144.js",revision:"94efb455366e067bdbf17c784da05738"},{url:"/_next/static/chunks/webpack-734f2cedaf26e1357864.js",revision:"c660300a21a714ecb5415e2eaf90e870"},{url:"/_next/static/css/2c00a4f70d316ec83713.css",revision:"990577bdf503c03239f02bd213e80549"},{url:"/brand-icon.svg",revision:"33455d33822cd86a7b2e7c12be2688f6"},{url:"/favicon.png",revision:"217bba9d985038b5db0f675aadef1058"},{url:"/icons/icon-128x128.png",revision:"61141052122e82b0e4c106b6478053f7"},{url:"/icons/icon-144x144.png",revision:"d7041f383ef13f304ce0c8222c768687"},{url:"/icons/icon-152x152.png",revision:"e892614a0964881052f52449818355d2"},{url:"/icons/icon-192x192.png",revision:"09b80496ac709b0fceef80e2c89a5558"},{url:"/icons/icon-384x384.png",revision:"065ce43c918fae1157d9fa6757bc7685"},{url:"/icons/icon-512x512.png",revision:"c4642057e4afcfa6776064b99ae43a13"},{url:"/icons/icon-72x72.png",revision:"5fedad82387f7b30c250134c5a394688"},{url:"/icons/icon-96x96.png",revision:"2c3ea4bbe99ae01388b3dcd30b5d053d"},{url:"/manifest.json",revision:"95cea107ce25d574dcfc372c8d72408e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));