// ===== ПОВЕСТВОВАНИЕ: обычная вертикальная прокрутка, без слайдера и смены реплик =====
const go=id=>document.getElementById(id).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
const playS=document.getElementById('play'),pt=playS.querySelector('.p-text');let raf=0;
function tick(){raf=0;const r=playS.getBoundingClientRect(),len=Math.max(1,r.height-innerHeight),p=Math.max(0,Math.min(1,-r.top/len));playS.style.setProperty('--p',p);pt.classList.toggle('on',p>.2)}
addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(tick)},{passive:true});addEventListener('resize',tick);tick();
// Линейка и отбой: возвращена плавная анимация по прокрутке из старой версии.
// Каждый блок проявляется в своей позиции. Колесо, тач и клавиатура не блокируются.
const revealItems=[...document.querySelectorAll('.story-chapter .reveal-on-scroll')];
const revealObserver=new IntersectionObserver(entries=>{
 for(const entry of entries){
  if(entry.isIntersecting){entry.target.classList.add('is-visible');}
 }
},{rootMargin:'0px 0px -19% 0px',threshold:0.08});
revealItems.forEach(el=>revealObserver.observe(el));
// v5.3: диалоги линейки остаются на одном кадре и проявляются по очереди.
const lineupSection=document.getElementById('lineup');
const lineupVoices=[...lineupSection.querySelectorAll('.lineup-voice')];
function updateLineup(){
 const r=lineupSection.getBoundingClientRect();
 const total=Math.max(1,r.height-innerHeight);
 const progress=Math.max(0,Math.min(1,-r.top/total));
 // Вожатая, затем Лёва, затем Катя. Уже показанные реплики не исчезают.
 (innerWidth<768?[0.30,0.52,0.74]:[0.10,0.32,0.54]).forEach((at,i)=>lineupVoices[i].classList.toggle('visible',progress>=at));
}
let sceneRaf=0;
function onSceneScroll(){if(sceneRaf)return;sceneRaf=requestAnimationFrame(()=>{sceneRaf=0;updateLineup()})}
addEventListener('scroll',onSceneScroll,{passive:true});addEventListener('resize',onSceneScroll);
addEventListener('load',onSceneScroll);onSceneScroll();

// В спальне и во время отбоя курсор становится лучом фонарика. На телефоне — касание.
for(const scene of document.querySelectorAll('.day4-bed-scene,.day4-freeze-scene')){
 const sticky=scene.querySelector('.day4-sticky');
 function aim(e){const r=sticky.getBoundingClientRect();if(!r.width||!r.height)return;sticky.style.setProperty('--light-x',((e.clientX-r.left)/r.width*100).toFixed(2)+'%');sticky.style.setProperty('--light-y',((e.clientY-r.top)/r.height*100).toFixed(2)+'%');}
 sticky.addEventListener('pointermove',aim,{passive:true});sticky.addEventListener('pointerdown',aim,{passive:true});


}

