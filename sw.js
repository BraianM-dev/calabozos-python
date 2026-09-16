/* Offline cache for GitHub Pages and CREA iframes. */
var CACHE="calabozos-python-v1-8-3";
var CORE=[
  "./assets/journey.css","./assets/journey.js","./assets/responsive.css","./assets/campaigns.css","./assets/premium-v183.css","./assets/campaigns.js","./assets/campaign-runtime.js",
  "./","./index.html","./juego.html","./manual-jugador.html","./guia-docente.html","./LICENSE","./calabozos/","./calabozos/index.html","./calabozos/juego.html","./jujutsu/","./jujutsu/index.html","./jujutsu/juego.html","./multiverso/","./multiverso/index.html","./multiverso/juego.html","./shared/README.md",
  "./assets/v16.css","./assets/accessibility.js","./assets/ficha-pdf.js","./assets/logo-pdf-data.js","./assets/heroes-pdf-data.js","./assets/manual-campaign.js",
  "./assets/pip-states-v3.png","./assets/pip-avatar-v2.png","./assets/party-heroes.jpg","./assets/logo-banner.jpg",
  "./assets/campaigns/calabozos/patterns/bg-main.svg","./assets/campaigns/arcana/patterns/bg-main.svg","./assets/campaigns/multiverso/patterns/bg-main.svg",
  "./assets/vendor/codemirror/codemirror.min.css","./assets/vendor/codemirror/dracula.min.css","./assets/vendor/codemirror/codemirror.min.js","./assets/vendor/codemirror/python.min.js","./assets/vendor/codemirror/closebrackets.min.js","./assets/vendor/codemirror/matchbrackets.min.js",
  "./assets/vendor/skulpt/skulpt.min.js","./assets/vendor/skulpt/skulpt-stdlib.js"
];
var CLASSES=["mago","guerrero","arquero","explorador"],STAGES=["inicial","veterano","legendario"];
CLASSES.forEach(function(c){STAGES.forEach(function(s){CORE.push("./assets/hero-sprites/"+c+"-"+s+".png");CORE.push("./assets/hero-evolution/hero-"+c+"-"+s+".jpg")})});
self.addEventListener("install",function(event){event.waitUntil(caches.open(CACHE).then(function(cache){return cache.addAll(CORE)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(event){event.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.map(function(key){if(key!==CACHE&&key.indexOf("calabozos-python-")===0)return caches.delete(key)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(event){
  if(event.request.method!=="GET")return;
  event.respondWith(caches.match(event.request).then(function(hit){
    var fresh=fetch(event.request).then(function(response){if(response&&response.ok){var copy=response.clone();caches.open(CACHE).then(function(cache){cache.put(event.request,copy)})}return response}).catch(function(){return hit});
    return hit||fresh;
  }));
});
