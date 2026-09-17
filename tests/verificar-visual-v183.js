const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const base=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(base,p),'utf8');
const exists=p=>fs.existsSync(path.join(base,p));
const pngSignature='89504e470d0a1a0a',jpegSignature='ffd8ff';
function binary(p){return fs.readFileSync(path.join(base,p));}
for(const cls of ['mago','guerrero','arquero','explorador'])for(const stage of ['inicial','veterano','legendario']){
  const sprite='assets/hero-sprites/'+cls+'-'+stage+'.png',portrait='assets/hero-evolution/hero-'+cls+'-'+stage+'.jpg';
  assert(exists(sprite),'missing '+sprite);assert.equal(binary(sprite).subarray(0,8).toString('hex'),pngSignature,sprite+' is PNG');
  assert(exists(portrait),'missing '+portrait);assert(binary(portrait).subarray(0,3).toString('hex')===jpegSignature,portrait+' is JPEG');
}
for(const p of ['assets/pip-states-v3.png','assets/party-heroes.jpg','assets/premium-v184.css','assets/qr-pdf-data.js','assets/campaign-heroes-pdf-data.js'])assert(exists(p),'missing '+p);
assert.equal(binary('assets/pip-states-v3.png').subarray(0,8).toString('hex'),pngSignature,'Pip is illustrated PNG');
const css=read('assets/campaigns.css'),premium=read('assets/premium-v184.css');
assert(css.includes("pip-states-v3.png"),'illustrated Pip wired to all campaigns');
assert(css.includes("hero-sprites/mago-veterano.png")&&css.includes("hero-sprites/arquero-veterano.png")&&css.includes("hero-sprites/explorador-legendario.png"),'illustrated campaign cards wired');
assert(!css.includes('image-rendering:pixelated'),'shared campaign layer no longer pixelates characters');
assert(premium.includes('.inventario .hero-sprite-frame')&&premium.includes('.landing-page .campaign-card')&&premium.includes('.campaign-landing'),'shared premium visual system covers game and pages');
const game=read('juego.html');assert(game.includes('assets/premium-v184.css')&&game.includes('campaigns/"+root+"/sprites/"+key+".png'),'game uses campaign-specific illustrated sheets');
assert(game.includes('pip-states-v3.png')&&!game.includes('pip-states-v3.svg'),'game uses illustrated Pip sheet');
for(const page of ['index.html','juego.html','manual-jugador.html','guia-docente.html'])assert(read(page).includes('premium-v184.css'),page+' loads shared visual system');
for(const page of ['calabozos/index.html','jujutsu/index.html','multiverso/index.html']){assert(read(page).includes('../assets/premium-v184.css'),page+' loads shared visual system');assert(!read(page).includes('image-rendering:pixelated'),page+' has no pixel rendering');}
for(const campaign of ['calabozos','arcana','multiverso'])for(const cls of ['mago','guerrero','arquero','explorador'])assert(exists('assets/campaigns/'+campaign+'/portraits/'+cls+'.png'),'normalised campaign portrait '+campaign+'/'+cls);
const runtime=read('assets/campaign-runtime.js');new vm.Script(runtime,{filename:'campaign-runtime.js'});
assert(runtime.includes('Academia Arcana & Python'),'legacy route is presented as Academia Arcana');
assert(runtime.includes('FICHA DE AVENTURA')&&runtime.includes('FICHA ARCANA')&&runtime.includes('FICHA MULTIVERSAL'),'three PDF identities');
assert(runtime.includes('root.exportPDF=themedExportPDF')&&runtime.includes('stopImmediatePropagation'),'themed PDF button remains installed');
assert(runtime.includes('CALABOZOS_CAMPAIGN_HEROES_JPEG')&&runtime.includes('CALABOZOS_QR_JPEG')&&runtime.includes('drawD20'),'PDF uses campaign hero, QR and a D20');
const journey=read('assets/journey.js');assert(journey.includes('assets/campaign-runtime.js'),'runtime loads before game initialization');
const index=read('index.html');assert(index.includes('Academia Arcana &amp; Python')&&index.includes('landing-party'),'root landing exposes the illustrated campaigns');
assert(!/epilepsia/i.test(index),'accessibility wording remains neutral');
const notices=read('THIRD-PARTY-NOTICES.md');assert(notices.includes('personajes, patterns, Pip, iconografía y composición visual originales'),'original visual licensing notice');
const sw=read('sw.js');assert(sw.includes('calabozos-python-v1-8-4'),'cache version bumped');assert(sw.includes('assets/premium-v184.css')&&sw.includes('assets/pip-states-v3.png'),'illustrated assets cached offline');
/* Real PDF generation for every campaign using the same vector engine shipped to browsers. */
let currentCampaign='calabozos',captured='',pdfClick=null;
const pdfButton={attrs:{},getAttribute(n){return this.attrs[n]||null},setAttribute(n,v){this.attrs[n]=v},addEventListener(type,fn,capture){if(type==='click'){pdfClick=fn;this.capture=!!capture;}}};
const docEl={getAttribute:n=>n==='data-campaign'?currentCampaign:null,setAttribute(){}};
const ctx={console,Blob,atob,URLSearchParams,location:{search:'',pathname:'/juego.html'},navigator:{},document:{readyState:'complete',documentElement:docEl,getElementById:id=>id==='btnPDF'?pdfButton:null,addEventListener(){},createElement(){return{}},body:{appendChild(){},removeChild(){}}},setTimeout(){},clearTimeout(){}};
ctx.window=ctx;ctx.globalThis=ctx;ctx.CP_CAMPAIGNS={calabozos:{},jujutsu:{},multiverso:{}};ctx.CALABOZOS_HEROES_JPEG={mago:{inicial:{data:'AA==',width:1,height:1}}};
ctx.state={agent:'Ada Pixel',clase:'Mago',completed:{'a':true},inventory:[]};ctx.TOPICS=[{id:'print',title:'PRINT',challenges:[{id:'a'}]},{id:'input',title:'INPUT',challenges:[{id:'b'}]}];ctx.getAll=()=>[{id:'a'},{id:'b'}];ctx.xpTotal=()=>20;ctx.maxXP=()=>40;ctx.dominio=()=>50;ctx.heroLevel=()=>2;
vm.createContext(ctx);vm.runInContext(read('assets/ficha-pdf.js'),ctx);ctx.FichaPDF.prototype.save=function(){captured=this.output();};vm.runInContext(runtime,ctx);
assert(pdfClick&&pdfButton.capture,'PDF button is rebound in capture phase');
for(const [id,label] of [['calabozos','FICHA DE AVENTURA'],['jujutsu','FICHA ARCANA'],['multiverso','FICHA MULTIVERSAL']]){currentCampaign=id;captured='';ctx.exportPDF();assert(captured.startsWith('%PDF-1.4'),id+' produces a PDF');assert(captured.includes(label),id+' PDF contains campaign title');assert(captured.includes('/Author (Braian Mosqueira)'),id+' PDF metadata contains author');assert(/\/Count 1\b/.test(captured),id+' PDF stays on one A4 page');}
currentCampaign='jujutsu';captured='';let prevented=false,stopped=false;pdfClick({preventDefault(){prevented=true},stopImmediatePropagation(){stopped=true}});assert(prevented&&stopped,'themed PDF click blocks legacy listener');assert(captured.includes('FICHA ARCANA'),'real PDF button click exports active campaign sheet');

console.log('✓ v1.8.4: sprites por campaña, identidad compartida, offline, QR, botón PDF y tres PDF temáticos verificados');
