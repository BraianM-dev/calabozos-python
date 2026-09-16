/* Calabozos & Python · Braian Mosqueira · CC BY 4.0.
   PDF vectorial A4, sin dependencias. Sintaxis ES5. */
(function(root){
'use strict';
function literal(s){
  var map={8364:128,8216:145,8217:146,8220:147,8221:148,8211:150,8212:151,8226:149};
  s=String(s).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,'').replace(/[\u2600-\u27ff\ufe0f]/g,'');
  var out='';for(var i=0;i<s.length;i++){var n=s.charCodeAt(i);n=map[n]||n;if(n>255)n=63;
    if(n<32||n>126||n===40||n===41||n===92)out+='\\'+('000'+n.toString(8)).slice(-3);else out+=String.fromCharCode(n);
  }return '('+out+')';
}
function PDF(){this.pages=[[]];this.size=11;this.font='F1';this.color='0.16 0.13 0.10';this.draw='0.16 0.13 0.10';this.lineWidth=0.7;this.images=[];this.properties={};}
PDF.prototype.cmd=function(s){this.pages[this.pages.length-1].push(s);};
PDF.prototype.setFontSize=function(n){this.size=n;};
PDF.prototype.setFont=function(f,w){var serif=/times|serif/i.test(f||'');this.font=serif?(w==='bold'?'F4':'F3'):(w==='bold'?'F2':'F1');};
PDF.prototype.setTextColor=function(r,g,b){this.color=[r/255,g/255,b/255].join(' ');};
PDF.prototype.setFillColor=function(r,g,b){this.cmd([r/255,g/255,b/255].join(' ')+' rg');};
PDF.prototype.setDrawColor=function(r,g,b){this.draw=[r/255,g/255,b/255].join(' ');this.cmd(this.draw+' RG');};
PDF.prototype.setLineWidth=function(n){this.lineWidth=n;this.cmd((n*2.83465)+' w');};
PDF.prototype.rect=function(x,y,w,h){this.cmd([x*2.83465,(297-y-h)*2.83465,w*2.83465,h*2.83465].join(' ')+' re f');};
PDF.prototype.strokeRect=function(x,y,w,h){this.cmd([x*2.83465,(297-y-h)*2.83465,w*2.83465,h*2.83465].join(' ')+' re S');};
PDF.prototype.fillStrokeRect=function(x,y,w,h){this.cmd([x*2.83465,(297-y-h)*2.83465,w*2.83465,h*2.83465].join(' ')+' re B');};
PDF.prototype.line=function(x1,y1,x2,y2){this.cmd([x1*2.83465,(297-y1)*2.83465,'m',x2*2.83465,(297-y2)*2.83465,'l S'].join(' '));};
PDF.prototype.polygon=function(points,mode){if(!points||points.length<2)return;var p=[points[0][0]*2.83465,(297-points[0][1])*2.83465,'m'];for(var i=1;i<points.length;i++)p.push(points[i][0]*2.83465,(297-points[i][1])*2.83465,'l');p.push('h',mode==='stroke'?'S':mode==='both'?'B':'f');this.cmd(p.join(' '));};
PDF.prototype.circle=function(cx,cy,r,mode){var k=.55228475,cx2=cx*2.83465,cy2=(297-cy)*2.83465,rr=r*2.83465,kk=rr*k;this.cmd([cx2+rr,cy2,'m',cx2+rr,cy2+kk,cx2+kk,cy2+rr,cx2,cy2+rr,'c',cx2-kk,cy2+rr,cx2-rr,cy2+kk,cx2-rr,cy2,'c',cx2-rr,cy2-kk,cx2-kk,cy2-rr,cx2,cy2-rr,'c',cx2+kk,cy2-rr,cx2+rr,cy2-kk,cx2+rr,cy2,'c',mode==='stroke'?'S':mode==='both'?'B':'f'].join(' '));};
PDF.prototype.text=function(s,x,y){this.cmd('BT /'+this.font+' '+this.size+' Tf '+this.color+' rg 1 0 0 1 '+(x*2.83465)+' '+((297-y)*2.83465)+' Tm '+literal(s)+' Tj ET');};
PDF.prototype.setProperties=function(p){this.properties=p||{};};
PDF.prototype.addImageJPEG=function(base64,pixelWidth,pixelHeight,x,y,w,h){
  if(!base64||!root.atob)return false;
  var bin=root.atob(String(base64).replace(/^data:image\/jpeg;base64,/,'')),hex='';
  for(var i=0;i<bin.length;i++)hex+=('0'+bin.charCodeAt(i).toString(16)).slice(-2);
  var name='Im'+(this.images.length+1);this.images.push({name:name,width:pixelWidth,height:pixelHeight,hex:hex});
  this.cmd('q '+(w*2.83465)+' 0 0 '+(h*2.83465)+' '+(x*2.83465)+' '+((297-y-h)*2.83465)+' cm /'+name+' Do Q');return true;
};
PDF.prototype.addPage=function(){this.pages.push([]);};
PDF.prototype.splitTextToSize=function(s,width){
  // Conservative widths keep even wide uppercase names within their column.
  var max=Math.max(1,Math.floor(width*2.83465/(this.size*0.72))),out=[];
  String(s).split('\n').forEach(function(p){var line='';p.split(/\s+/).forEach(function(word){
    while(word.length>max){if(line){out.push(line);line='';}out.push(word.slice(0,max));word=word.slice(max);}
    if((line+' '+word).length>max&&line){out.push(line);line='';}line+=(line?' ':'')+word;
  });out.push(line);});return out;
};
PDF.prototype.output=function(){
  var objects=['<< /Type /Catalog /Pages 2 0 R >>',''],kids=[],imageRefs=[];
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>');
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold /Encoding /WinAnsiEncoding >>');
  for(var j=0;j<this.images.length;j++){
    var im=this.images[j],iid=objects.length+1,imgStream=im.hex+'>';
    imageRefs.push('/'+im.name+' '+iid+' 0 R');
    objects.push('<< /Type /XObject /Subtype /Image /Width '+im.width+' /Height '+im.height+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter [/ASCIIHexDecode /DCTDecode] /Length '+imgStream.length+' >>\nstream\n'+imgStream+'\nendstream');
  }
  var xobjects=imageRefs.length?' /XObject << '+imageRefs.join(' ')+' >>':'';
  for(var i=0;i<this.pages.length;i++){var id=objects.length+1,stream=this.pages[i].join('\n');kids.push(id+' 0 R');
    objects.push('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.276 841.890] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R /F4 6 0 R >>'+xobjects+' >> /Contents '+(id+1)+' 0 R >>');
    objects.push('<< /Length '+stream.length+' >>\nstream\n'+stream+'\nendstream');
  }
  objects[1]='<< /Type /Pages /Kids ['+kids.join(' ')+'] /Count '+kids.length+' >>';
  var prop=this.properties||{},infoId=objects.length+1;
  objects.push('<< /Title '+literal(prop.title||'Hoja de avance - Calabozos & Python')+' /Author '+literal(prop.author||'')+' /Subject '+literal(prop.subject||'')+' /Keywords '+literal(prop.keywords||'')+' /Creator '+literal(prop.creator||'Calabozos & Python')+' >>');
  var data='%PDF-1.4\n',offset=[0];for(i=0;i<objects.length;i++){offset.push(data.length);data+=(i+1)+' 0 obj\n'+objects[i]+'\nendobj\n';}
  var start=data.length;data+='xref\n0 '+(objects.length+1)+'\n0000000000 65535 f \n';
  for(i=1;i<offset.length;i++)data+=('0000000000'+offset[i]).slice(-10)+' 00000 n \n';
  return data+'trailer\n<< /Size '+(objects.length+1)+' /Root 1 0 R /Info '+infoId+' 0 R >>\nstartxref\n'+start+'\n%%EOF';
};
PDF.prototype.save=function(name){
  var blob=new Blob([this.output()],{type:'application/pdf'});
  if(root.navigator&&root.navigator.msSaveOrOpenBlob){root.navigator.msSaveOrOpenBlob(blob,name);return;}
  var url=(root.URL||root.webkitURL).createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.target='_blank';document.body.appendChild(a);a.click();document.body.removeChild(a);
  setTimeout(function(){(root.URL||root.webkitURL).revokeObjectURL(url);},60000);
};
root.FichaPDF=PDF;
})(typeof window!=='undefined'?window:globalThis);
