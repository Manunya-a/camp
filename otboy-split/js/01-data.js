// ===== ДАННЫЕ. Фото кладите в images/ рядом с файлом. p/mp — кадрирование для компьютера/телефона =====
// Фото линейки вшито в файл без изменений. Чтобы заменить: LINEUP_SRC='images/lineup.jpg'
const LINEUP_SRC='images/lineup.jpg';
const DINING_SRC='images/dining.png';
const PLAYGROUND_SRC='images/playground.jpg';
const DORM_SRC='images/dorm.png';
const DAY2_MORNING_SRC='images/day2-morning.png';
const DAY2_BOARD_SRC='images/day2-board.jpg';
const DAY2_LUNCH_SRC='images/day2-lunch.jpg';
const DAY2_WASH_SRC='images/day2-wash.jpg';
const DAY2_EVENING_SRC='images/day2-evening.jpg';
const DAY3_MORNING_SRC='images/day3-morning.jpg';
const DAY3_CUP_SRC='images/day3-cup.jpg';
const DAY3_NIGHT_SRC='images/day3-night.jpg';
const DAY4_DAWN_SRC='images/day4-dawn.jpg';
const DAY4_BED_SRC='images/day4-bed.jpg';
const DAY4_DARK_SRC='images/day4-dark.jpg';
const DAY5_DAWN_SRC='images/day5-dawn.jpg';
const DAY5_DEPART_SRC='images/day5-depart.jpg';
const IMG={
 arrival:{f:'arrival.jpg',m:'arrival-m.jpg',s:'1920×1080',p:'50% 50%',mp:'62% 50%',a:'Автобус у ворот лагеря, дети с чемоданами'},
 lineup:{f:'lineup.jpg',src:LINEUP_SRC,s:'1536×1024',p:'50% 50%',mp:'49% 50%',a:'Вожатая перед строем отряда на линейке'},
 dining:{f:'dining.jpg',src:DINING_SRC,s:'1536×1024',p:'50% 50%',mp:'50% 50%',a:'Пионеры обедают в светлой столовой советского лагеря'},
 playground:{f:'playground.jpg',src:PLAYGROUND_SRC,s:'1075×960',p:'50% 50%',mp:'50% 50%',a:'Дети отдыхают и играют в волейбол после обеда'},
 dorm:{f:'dorm.jpg',src:DORM_SRC,s:'1536×1024',p:'50% 50%',mp:'50% 50%',a:'Девочки шепчутся в спальне пионерского лагеря перед отбоем'},
 trail:{f:'trail.jpg',s:'1200×1500',p:'50% 50%',mp:'50% 50%',a:'Лесная дорожка'}};
// Фон первого экрана вшит в файл. Чтобы заменить: ARRIVAL_SRC='images/arrival.jpg'
const ARRIVAL_SRC='images/arrival-old.jpg';
const MUG='images/mug.png';
const DIALOGUES=[
 {id:'lineup',label:'ДЕНЬ 1 / ЛИНЕЙКА',time:'11:00',img:'lineup',pos:'tl',lines:[['Вожатая','Третий отряд, ко мне!'],['Вожатая','Так… двадцать шесть. Все на месте.'],['Лёва','А когда обед?'],['Катя','Мы только приехали!']]},
 {id:'dorm',label:'ДЕНЬ 1 / ОТБОЙ',time:'22:30',img:'dorm',pos:'bl',lines:[['Катя','В одном чёрном-чёрном городе…'],['Маша','Хватит, я теперь не усну!'],['Даша','Да ладно тебе, это просто страшилка.']],cap:'Из коридора слышится голос вожатой: «Третий отряд, отбой!»'}];
// ===== ФОТО =====
const photo=(k,cls='')=>{const i=IMG[k];return `<picture>${i.m&&!i.src?`<source media="(max-width:767px)" srcset="images/${i.m}">`:''}<img class="photo ${cls}" src="${i.src||'images/'+i.f}" alt="${i.a}" draggable="false" style="--pos:${i.p};--mpos:${i.mp}" onerror="ph(this,'${k}')"></picture>`};
function ph(el,k){const i=IMG[k],d=document.createElement('div');d.className='photo placeholder';d.setAttribute('role','img');d.setAttribute('aria-label',i.a);d.innerHTML=`<span>ПЛЕЙСХОЛДЕР<br>${i.f}<br>${i.s}</span>`;el.closest('picture').replaceWith(d)}
const hud=(l,t,r='')=>`<div class="hud mono"><span>${l}</span><span>${t}${r}</span></div>`;
const dlg=d=>{
 const groups=d.id==='lineup' ? [
  {who:'Вожатая',txt:'Третий отряд, ко мне!<span class="dialogue-break"></span>Так… двадцать шесть. Все на месте.',cls:'counselor'},
  {who:'Лёва',txt:'А когда обед?',cls:'child-left'},
  {who:'Катя',txt:'Мы только приехали!',cls:'child-right'}
 ] : d.lines.map(([who,txt],i)=>({who,txt,cls:'dorm-beat dorm-beat-'+(i+1)}));
 const beats=groups.map((g,i)=>`<div class="story-beat beat-${i+1} ${g.cls}" data-speaker="${g.who}"><div class="beat-inner reveal-on-scroll" aria-label="Реплика: ${g.who}"><p class="beat-who">${g.who}</p><p class="beat-quote">${g.txt}</p></div></div>`).join('');
 const closing=d.cap?`<div class="story-beat beat-last dorm-closing"><div class="beat-inner reveal-on-scroll"><p class="beat-narration">${d.cap}</p></div></div>`:'';
 return `<section id="${d.id}" data-scene class="story-chapter ${d.id}"><div class="chapter-image">${photo(d.img)}<div class="chapter-shade"></div>${d.id==='lineup'?`<div class="lineup-overlay" aria-label="Диалоги на линейке"><div class="lineup-voice lineup-counselor" data-voice="0"><p>Вожатая:</p><p>Третий отряд, строимся</p><p>Так, 26 человек, все на месте</p></div><div class="lineup-voice lineup-leva" data-voice="1"><p>Лёва:</p><p>А когда обед?</p></div><div class="lineup-voice lineup-katya" data-voice="2"><p>Катя:</p><p>Мы только приехали</p></div></div>`:''}<div class="chapter-meta"><span>${d.time}</span><span>${d.id==='lineup'?'ЛИНЕЙКА':'СПАЛЬНЯ'}</span></div></div><div class="story-flow"><div class="chapter-intro"><div class="chapter-intro-content reveal-on-scroll"><p class="chapter-number">ДЕНЬ ПЕРВЫЙ · ${d.time}</p><h2>${d.id==='lineup'?'Линейка':'Отбой'}</h2></div></div>${beats}${closing}</div></section>`;
};
