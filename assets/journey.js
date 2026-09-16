/* Ruta del héroe: el progreso deriva de las misiones, nunca del tiempo. ES5. */
(function(root){
  'use strict';
  var previous=null,timer=null;
  function reduced(){return document.documentElement.getAttribute('data-motion')==='on'||(root.matchMedia&&root.matchMedia('(prefers-reduced-motion: reduce)').matches);}
  function update(data){
    var panel=document.getElementById('heroJourney');if(!panel)return;
    panel.hidden=!data.active||data.pipOnly;
    if(panel.hidden){previous=null;clearTimeout(timer);return;}
    var missions=data.missions||[],total=missions.length,done=0,next=null,i;
    for(i=0;i<total;i++){if(data.completed[missions[i].id])done++;else if(!next)next=missions[i];}
    var key=data.name+'|'+data.clase+'|'+data.scope,percent=total?done/total*100:0,actorPercent=2+(percent*.96/100);
    var actor=document.getElementById('journeyActor'),sprite=document.getElementById('journeySprite'),steps=document.getElementById('journeySteps');
    /* Varias partes de la interfaz pueden refrescarse en el mismo instante. No
       reiniciar el estado evita cortar la caminata recién activada. */
    if(previous&&previous.key===key&&previous.done===done&&previous.sprite===data.sprite)return;
    var animate=previous&&previous.key===key&&done>previous.done&&!reduced();
    clearTimeout(timer);actor.className='journey-actor'+(animate?' advancing':'');
    actor.style.transition=animate?'left 1.8s ease-in-out':'none';
    actor.style.left=actorPercent+'%';sprite.style.backgroundImage='url("'+data.sprite+'")';
    document.getElementById('journeyFill').style.width=percent+'%';
    document.getElementById('journeyCount').textContent=done+' / '+total+' misiones';
    document.getElementById('journeyNext').textContent=next?'Próxima misión: '+next.title:'¡Expedición completada!';
    document.getElementById('journeyName').textContent=data.name+' · '+data.clase;
    panel.setAttribute('aria-label','Ruta del héroe: '+done+' de '+total+' misiones completadas.');
    steps.innerHTML='';
    for(i=0;i<total;i++){
      var mark=document.createElement('span');mark.className='journey-step'+(data.completed[missions[i].id]?' complete':'');
      mark.style.left=(2+((i+1)/total*96))+'%';mark.title=(i+1)+'. '+missions[i].title+(data.completed[missions[i].id]?' — completada':' — pendiente');steps.appendChild(mark);
    }
    if(animate){document.getElementById('journeyStatus').textContent='Avanzaste en la expedición: '+done+' de '+total+' misiones.';timer=setTimeout(function(){actor.className='journey-actor';},1900);}
    previous={key:key,done:done,sprite:data.sprite};
  }
  root.CalabozosJourney={update:update};
})(window);
