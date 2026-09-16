const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const base=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(base,p),'utf8');
const exists=p=>fs.existsSync(path.join(base,p));
const assets=[
'assets/campaigns/calabozos/pip/pip-sheet.svg','assets/campaigns/calabozos/patterns/bg-main.svg','assets/campaigns/calabozos/cast.svg',
'assets/campaigns/arcana/pip/pip-sheet.svg','assets/campaigns/arcana/patterns/bg-main.svg','assets/campaigns/arcana/cast.svg',
'assets/campaigns/multiverso/pip/pip-sheet.svg','assets/campaigns/multiverso/patterns/bg-main.svg','assets/campaigns/multiverso/cast.svg'];
assets.forEach(p=>{assert(exists(p),'missing '+p);const s=read(p);assert(/^<svg[\s>]/.test(s.trim()),p+' is SVG');assert(/CC BY 4\.0/.test(s),p+' declares original project license');});
const css=read('assets/campaigns.css');
assert(css.includes("campaigns/calabozos/pip/pip-sheet.svg"),'Calabozos Pip wired');
assert(css.includes("campaigns/arcana/pip/pip-sheet.svg"),'Arcana Pip wired');
assert(css.includes("campaigns/multiverso/pip/pip-sheet.svg"),'Multiverso Pip wired');
assert(css.includes("campaigns/arcana/cast.svg")&&css.includes("campaigns/multiverso/cast.svg"),'pixel casts wired to campaign cards');
assert(css.includes('image-rendering:pixelated'),'pixel-art rendering enabled');
const runtime=read('assets/campaign-runtime.js');new vm.Script(runtime,{filename:'campaign-runtime.js'});
assert(runtime.includes("Academia Arcana & Python"),'legacy jujutsu route is presented as Academia Arcana');
assert(runtime.includes("FICHA DE AVENTURA")&&runtime.includes("FICHA ARCANA")&&runtime.includes("FICHA MULTIVERSAL"),'three PDF identities');
assert(runtime.includes('root.exportPDF=themedExportPDF'),'themed PDF replaces generic export');
assert(runtime.includes('drawPip')&&runtime.includes('drawHero'),'PDF draws original campaign character art');
const journey=read('assets/journey.js');assert(journey.includes('assets/campaign-runtime.js'),'runtime loads before game initialization');
const arcana=read('jujutsu/index.html');assert(arcana.includes('Academia Arcana & Python'),'Arcana public landing renamed');assert(!arcana.includes('<h1>Jujutsu & Python</h1>'),'old franchise title removed from public campaign heading');
const index=read('index.html');assert(index.includes('Academia Arcana &amp; Python'),'root landing exposes Arcana identity');assert(!index.includes('Entrar a Jujutsu'),'root landing does not market legacy route name');assert(!/epilepsia/i.test(index),'accessibility wording uses reducir movimiento without medical label');
const notices=read('THIRD-PARTY-NOTICES.md');assert(notices.includes('personajes, patterns, Pip, iconografía y composición visual originales'),'original visual licensing notice');assert(notices.includes('Rick and Morty'),'multiverse third-party boundary documented');
const sw=read('sw.js');assert(sw.includes('calabozos-python-v1-8-2'),'cache version bumped');assert(sw.includes('assets/campaign-runtime.js'),'runtime cached offline');assets.forEach(p=>assert(sw.includes('./'+p),p+' cached offline'));
console.log('✓ v1.8.2: assets pixel-art, identidad pública, campañas y PDF temático verificados');
