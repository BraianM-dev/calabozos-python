const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'juego.html'),'utf8');
let script=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].pop()[1];
script=script.slice(0,script.indexOf('try{bindUI();}'))+'\nwindow.manualExport={topics:TOPICS,bonus:[CHATBOT_BONUS,FIZZ_BONUS,DRAGON]};})();';
const context={window:{},document:{querySelector:()=>null,querySelectorAll:()=>[],documentElement:{style:{},classList:{add(){},remove(){}}}},console,setTimeout,clearTimeout,setInterval:()=>0,Blob,atob};
context.window=context;vm.createContext(context);vm.runInContext(script,context);
function clean(c){return {id:c.id,title:c.title,brief:c.brief||'',theory:String(c.theory||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim(),protocol:c.protocol||[],starter:c.starter||'',interaction:c.interaction||'code',activityKind:c.activityKind||'',xp:Number(c.xp)||0};}
const data={topics:context.manualExport.topics.map(t=>({id:t.id,title:t.title,item:t.item||'',challenges:t.challenges.map(clean)})),bonus:context.manualExport.bonus.map(clean)};
fs.writeFileSync(path.join(root,'assets','manual-campaign.js'),'window.CALABOZOS_MANUAL_DATA='+JSON.stringify(data)+';\n');
