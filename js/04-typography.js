// ===== v5.36: типографика — неразрывные пробелы после коротких слов, перед тире, в числах с единицами =====
(function(){
 const NB=' ';
 const SHORT='в|во|с|со|к|ко|у|о|об|обо|на|по|за|из|от|до|под|над|при|про|для|без|и|а|но|да|же|ли|бы|не|ни|то|как|что|или|уж|вот|это|им|их|её|ему|мне|нас|вас|нам|вам|мы|вы|он|она|они|я|ты|там|тут|так';
 const re1=new RegExp('(^|[\\s(«„"—–-])('+SHORT+')\\s+(?=\\S)','giu');
 const re2=/(\d)\s+(?=(?:чел|человек|человека|мин|минут|мая|июня|июля|августа|г\.|лет|год|года|кг|м|км)(?![а-яё]))/giu;
 const re3=/\s+([—–])(?=\s)/gu;
 const re4=/([А-ЯЁ])\.\s*(?=[А-ЯЁ])/gu;
 function T(s){
  let o=s;
  for(let k=0;k<2;k++)o=o.replace(re1,(m,a,b)=>a+b+NB);
  o=o.replace(re2,'$1'+NB).replace(re3,NB+'$1').replace(re4,'$1.'+NB);
  return o;
 }
 window.__typo=T;
 let busy=false;
 function walk(root){
  if(!root)return;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){const p=n.parentNode;return p&&!/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName)&&/\S/.test(n.nodeValue)?1:2}});
  const list=[];while(w.nextNode())list.push(w.currentNode);
  for(const n of list){const v=T(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v}
 }
 const app=document.getElementById('app');
 walk(app);
 // подпись целиком из нескольких узлов (после <br>): склеиваем последнее короткое слово узла со следующим узлом
 const mo=new MutationObserver(ms=>{if(busy)return;busy=true;try{for(const m of ms){if(m.type==='characterData')walk(m.target.parentNode);else m.addedNodes.forEach(n=>walk(n.nodeType===1?n:n.parentNode))}}finally{busy=false}});
 mo.observe(app,{childList:true,characterData:true,subtree:true});
 // подсказка на тач-экранах
 if(matchMedia('(hover:none)').matches){document.querySelectorAll('.day4-bed-scene .day4-light-hint').forEach(e=>e.textContent=T('ВЕДИ ПАЛЬЦЕМ. ЭТО ТВОЙ СВЕТ.'))}
})();
