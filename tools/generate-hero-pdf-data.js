const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');
const classes=['mago','guerrero','arquero','explorador'];
const stages=['inicial','veterano','legendario'];
const out={};
for(const hero of classes){
  out[hero]={};
  for(const stage of stages){
    const file=path.join(root,'assets','hero-evolution',`hero-${hero}-${stage}.jpg`);
    out[hero][stage]={data:fs.readFileSync(file).toString('base64'),width:260,height:384};
  }
}
fs.writeFileSync(path.join(root,'assets','heroes-pdf-data.js'),'/* Personajes evolutivos originales para el PDF, CC BY 4.0. */\nwindow.CALABOZOS_HEROES_JPEG='+JSON.stringify(out)+';\n');
