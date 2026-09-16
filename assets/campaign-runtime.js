/* Aventuras & Python v1.8.2 · campaign visual/PDF layer · ES5 · CC BY 4.0 */
(function(root){
'use strict';
var META={
  calabozos:{label:'Calabozos & Python',accent:[180,105,42],accent2:[244,195,90],dark:[34,24,18],paper:[250,241,218],paper2:[239,222,181],pdfTitle:'FICHA DE AVENTURA',pdfSub:'Expedición de Calabozos & Python',progress:'PROGRESO HEROICO',route:'RUTA DE LA EXPEDICIÓN',seal:'D20',pipLine:'Cada misión dominada fortalece tu camino.'},
  jujutsu:{label:'Academia Arcana & Python',accent:[92,61,166],accent2:[103,232,249],dark:[29,20,47],paper:[244,241,255],paper2:[224,215,248],pdfTitle:'FICHA ARCANA',pdfSub:'Academia Arcana & Python',progress:'DOMINIO DE ENERGÍA',route:'REGISTRO DE TÉCNICAS',seal:'SIGILO',pipLine:'Cada técnica comprendida vuelve más estable tu dominio.'},
  multiverso:{label:'Multiverso & Python',accent:[18,148,159],accent2:[163,230,53],dark:[6,36,42],paper:[235,253,250],paper2:[204,243,236],pdfTitle:'FICHA MULTIVERSAL',pdfSub:'Expedición interdimensional con Python',progress:'SINCRONIZACIÓN DIMENSIONAL',route:'MAPA DE ANOMALÍAS',seal:'PORTAL',pipLine:'Cada anomalía resuelta estabiliza una dimensión del código.'}
};
function patchCampaignConfig(){
  var c=root.CP_CAMPAIGNS;if(!c)return;
  if(c.jujutsu){
    c.jujutsu.label='Academia Arcana & Python';c.jujutsu.brand='ACADEMIA ARCANA & PYTHON';c.jujutsu.subtitle='Pip Arcano · familiar tutor';
    c.jujutsu.pageTitle='ACADEMIA ARCANA & PYTHON · Entrenamiento de código';c.jujutsu.introTitle='ACADEMIA ARCANA & PYTHON';
    c.jujutsu.introSubtitle='Hechicería contemporánea original · Python · DUA';
    c.jujutsu.introText='Entrená técnicas de programación en una academia sobrenatural original. Pip Arcano guía el razonamiento con andamiaje fuerte sin resolver la misión por vos.';
    c.jujutsu.startLabel='🌀 Iniciar entrenamiento';c.jujutsu.mapTitle='MAPA DE TÉCNICAS';
    c.jujutsu.tutorName='Pip Arcano';c.jujutsu.tutorSubtitle='Familiar tutor de Python';
    c.jujutsu.sheetTitle='🔮 Ficha del adepto';c.jujutsu.inventoryTitle='🎒 Artefactos arcanos';
    c.jujutsu.journeyStart='Academia del Velo';c.jujutsu.journeyEnd='Ritual mayor';c.jujutsu.finalLandmark='Sello maestro';
    c.jujutsu.classLabels={Mago:'🔮 Tejedor de runas',Guerrero:'🥋 Guardián del pulso',Arquero:'🎯 Canalizador de alcance',Explorador:'👁 Rastreador arcano'};
  }
  for(var id in META)if(META.hasOwnProperty(id)&&c[id]){c[id].visual=META[id];c[id].pdf=META[id];}
}
patchCampaignConfig();
root.CP_CAMPAIGN_META=META;
function campaignId(){
  var id=document.documentElement.getAttribute('data-campaign');if(id&&META[id])return id;
  try{var q=new URLSearchParams(location.search),x=(q.get('campana')||'').toLowerCase();if(META[x])return x;}catch(e){}
  var p=(location.pathname||'').toLowerCase();if(p.indexOf('/jujutsu/')>=0)return 'jujutsu';if(p.indexOf('/multiverso/')>=0)return 'multiverso';return 'calabozos';
}
function theme(){return META[campaignId()]||META.calabozos;}
function val(fn,fallback){try{return typeof root[fn]==='function'?root[fn]():fallback;}catch(e){return fallback;}}
function completedCount(){var s=root.state||{},done=s.completed||{},n=0;if(typeof root.getAll==='function'){try{root.getAll().forEach(function(c){if(done[c.id])n++;});return n;}catch(e){}}for(var k in done)if(done.hasOwnProperty(k)&&done[k])n++;return n;}
function missionTotal(){try{return typeof root.getAll==='function'?root.getAll().length:39;}catch(e){return 39;}}
function setFill(doc,c){doc.setFillColor(c[0],c[1],c[2]);}
function setDraw(doc,c){doc.setDrawColor(c[0],c[1],c[2]);}
function setText(doc,c){doc.setTextColor(c[0],c[1],c[2]);}
function txt(doc,s,x,y,size,bold,color,font){doc.setFont(font||'helvetica',bold?'bold':'normal');doc.setFontSize(size);setText(doc,color);doc.text(String(s==null?'':s),x,y);}
function fit(doc,s,x,y,w,size,color,bold,maxLines){doc.setFont('helvetica',bold?'bold':'normal');doc.setFontSize(size);setText(doc,color);var lines=doc.splitTextToSize(String(s||''),w),lim=Math.min(lines.length,maxLines||3);for(var i=0;i<lim;i++)doc.text(lines[i],x,y+i*(size*.42+2));}
function box(doc,x,y,w,h,fill,stroke){setFill(doc,fill);doc.rect(x,y,w,h);setDraw(doc,stroke);doc.setLineWidth(.35);doc.strokeRect(x,y,w,h);}
function pixel(doc,x,y,s,c){setFill(doc,c);doc.rect(x,y,s,s);}
function drawPip(doc,x,y,t){
  var d=t.dark,a=t.accent,a2=t.accent2,p=[245,249,247];
  pixel(doc,x+6,y+4,16,4,d);pixel(doc,x+4,y+8,20,4,d);pixel(doc,x+3,y+12,22,12,d);pixel(doc,x+5,y+10,18,15,a);
  pixel(doc,x+7,y+13,6,6,p);pixel(doc,x+16,y+13,6,6,p);pixel(doc,x+9,y+15,2,2,d);pixel(doc,x+18,y+15,2,2,d);
  pixel(doc,x+13,y+19,3,3,a2);pixel(doc,x+6,y+25,16,4,d);pixel(doc,x+4,y+22,3,8,a);pixel(doc,x+22,y+22,3,8,a);
  if(campaignId()==='jujutsu'){pixel(doc,x+11,y+2,7,3,a2);pixel(doc,x+13,y+3,3,1,d);}
  if(campaignId()==='multiverso'){pixel(doc,x+13,y+1,2,5,a2);pixel(doc,x+14,y,2,2,a);pixel(doc,x+7,y+12,15,2,a2);}
  if(campaignId()==='calabozos'){pixel(doc,x+7,y+2,15,3,d);pixel(doc,x+4,y+5,4,5,d);pixel(doc,x+21,y+5,4,5,d);}
}
function drawHero(doc,x,y,t,clase){
  var skin=[226,183,142],hair=t.dark,body=t.accent,hi=t.accent2,boot=[33,38,46];
  if(clase==='Guerrero')body=[181,65,79];if(clase==='Arquero')body=[45,132,93];if(clase==='Explorador')body=[184,121,38];
  pixel(doc,x+9,y+2,14,4,hair);pixel(doc,x+6,y+6,20,12,hair);pixel(doc,x+9,y+7,14,11,skin);pixel(doc,x+11,y+10,3,2,t.dark);pixel(doc,x+19,y+10,3,2,t.dark);
  pixel(doc,x+9,y+18,14,5,hi);pixel(doc,x+7,y+23,18,15,body);pixel(doc,x+3,y+25,4,12,body);pixel(doc,x+25,y+25,4,12,body);pixel(doc,x+9,y+38,6,9,boot);pixel(doc,x+18,y+38,6,9,boot);
}
function decorate(doc,t){
  setFill(doc,t.paper);doc.rect(0,0,210,297);setFill(doc,t.paper2);doc.rect(0,0,210,13);doc.rect(0,284,210,13);
  setDraw(doc,t.accent);doc.setLineWidth(1);doc.strokeRect(8,8,194,281);doc.setLineWidth(.35);doc.strokeRect(11,11,188,275);
  if(campaignId()==='calabozos'){
    for(var i=0;i<5;i++){setDraw(doc,t.accent2);doc.line(13+i*40,15,31+i*40,15);doc.line(22+i*40,12,22+i*40,18);}
  }else if(campaignId()==='jujutsu'){
    setDraw(doc,t.accent2);doc.circle(24,24,7,'stroke');doc.line(17,24,31,24);doc.line(24,17,24,31);doc.circle(186,273,7,'stroke');
  }else{
    setDraw(doc,t.accent2);doc.circle(24,24,8,'stroke');doc.circle(24,24,4,'stroke');doc.circle(186,273,8,'stroke');doc.circle(186,273,4,'stroke');doc.line(32,24,45,24);doc.line(165,273,178,273);
  }
}
function themedExportPDF(){
  if(typeof root.FichaPDF==='undefined'){if(root.exportPDFLegacy)return root.exportPDFLegacy();if(root.alert)root.alert('No se encontró el motor PDF.');return;}
  var t=theme(),s=root.state||{},name=s.agent||'Estudiante',clase=s.clase||'Sin clase',done=completedCount(),total=missionTotal(),xp=val('xpTotal',0),mx=val('maxXP',0),dom=val('dominio',total?Math.round(done/total*100):0),lvl=val('heroLevel',1),doc=new root.FichaPDF();
  doc.setProperties({title:t.pdfTitle+' - '+t.label,author:'Braian Mosqueira',subject:'Ficha de progreso educativo de Python',keywords:'Python, educación, DUA, progreso, '+t.label,creator:'Aventuras & Python'});
  decorate(doc,t);
  var classKey=String(clase||'mago').toLowerCase(),stageKey=done>=26?'legendario':done>=13?'veterano':'inicial';
  var group=root.CALABOZOS_HEROES_JPEG&&root.CALABOZOS_HEROES_JPEG[classKey],hero=group&&group[stageKey];
  if(!hero&&root.CALABOZOS_HEROES_JPEG&&root.CALABOZOS_HEROES_JPEG.mago)hero=root.CALABOZOS_HEROES_JPEG.mago.inicial;
  if(root.CALABOZOS_LOGO_JPEG)doc.addImageJPEG(root.CALABOZOS_LOGO_JPEG.data,root.CALABOZOS_LOGO_JPEG.width,root.CALABOZOS_LOGO_JPEG.height,165,18,25,25);
  if(hero){box(doc,149,47,43,48,[255,255,255],t.accent);doc.addImageJPEG(hero.data,hero.width,hero.height,150,48,41,46);}
  txt(doc,t.pdfTitle,18,27,19,true,t.dark,'times');txt(doc,t.pdfSub,18,35,8,true,t.accent,'helvetica');
  box(doc,18,45,124,39,[255,255,255],t.accent);txt(doc,'AVENTURERO/A',23,53,6,true,[98,91,83]);fit(doc,name,23,62,78,16,t.dark,true,2);txt(doc,'CLASE',104,53,6,true,[98,91,83]);fit(doc,clase,104,62,33,9,t.accent,true,2);
  txt(doc,t.progress,18,96,11,true,t.dark,'times');
  box(doc,18,102,174,22,t.paper2,t.accent);txt(doc,'NIVEL',24,109,6,true,[98,91,83]);txt(doc,String(lvl),24,118,14,true,t.accent);
  txt(doc,'DOMINIO',62,109,6,true,[98,91,83]);txt(doc,dom+'%',62,118,14,true,t.accent);
  txt(doc,'EXPERIENCIA',105,109,6,true,[98,91,83]);txt(doc,xp+(mx?' / '+mx:'')+' XP',105,118,11,true,t.accent);
  txt(doc,'MISIONES',158,109,6,true,[98,91,83]);txt(doc,done+' / '+total,158,118,12,true,t.accent);
  txt(doc,t.route,18,137,11,true,t.dark,'times');
  var topics=root.TOPICS||[],yy=144,completed=s.completed||{};
  if(topics.length){for(var i=0;i<topics.length&&i<10;i++){
    var tp=topics[i],td=0,tt=(tp.challenges||[]).length;for(var j=0;j<tt;j++)if(completed[tp.challenges[j].id])td++;
    var ok=tt&&td===tt;box(doc,18,yy,174,10,ok?t.paper2:[255,255,255],ok?t.accent2:t.accent);txt(doc,(i+1<10?'0':'')+(i+1),22,yy+6.8,6,true,t.accent);fit(doc,tp.title||tp.id,34,yy+6.8,105,6.8,t.dark,true,1);txt(doc,td+' / '+tt,164,yy+6.8,7,true,ok?t.accent:t.dark);yy+=11.2;}
  }else{fit(doc,'Ruta curricular disponible dentro del juego.',22,yy+7,160,8,t.dark,false,2);yy+=18;}
  var noteY=Math.min(262,yy+5);box(doc,18,noteY,174,17,[255,255,255],t.accent);fit(doc,t.pipLine,23,noteY+7,164,7.5,t.dark,true,2);
  txt(doc,'CC BY 4.0 · Aventuras & Python · Recurso educativo',105,290,6,false,[100,94,86]);
  var safeName=String(name).replace(/[^a-z0-9áéíóúüñ_-]+/gi,'-').replace(/^-+|-+$/g,'')||'estudiante';doc.save('ficha-'+campaignId()+'-'+safeName+'.pdf');
}
function install(){
  if(typeof root.exportPDF==='function'&&!root.exportPDFLegacy)root.exportPDFLegacy=root.exportPDF;
  root.exportPDF=themedExportPDF;
  var btn=document.getElementById&&document.getElementById('btnPDF');
  if(btn&&!btn.getAttribute('data-campaign-pdf-bound')){
    btn.setAttribute('data-campaign-pdf-bound','true');
    btn.addEventListener('click',function(ev){if(ev){ev.preventDefault();ev.stopImmediatePropagation();}themedExportPDF();},true);
  }
  document.documentElement.setAttribute('data-campaign-visual','v1.8.2');
}
root.CampaignPDF={export:themedExportPDF,install:install,theme:theme,campaignId:campaignId};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
})(window);
