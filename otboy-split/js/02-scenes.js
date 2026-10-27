// ===== СЦЕНЫ =====
document.getElementById('app').innerHTML=`
<section id="arrival" data-scene class="scene arrival arrival-reference" aria-label="ОТБОЙ. Первый день смены.">
<img class="reference-art" src="images/arrival.png" alt="Дети приезжают в пионерский лагерь" draggable="false">
<header class="arrival-credits" aria-label="Автор и группа"><span>Викулина Мария</span><span>Б25ДЗ10</span></header>
<div class="arrival-layout">
  
  <div class="arrival-intro"><p>Автобус останавливается<br>у ворот. Пахнет хвоей<br>и нагретым асфальтом.</p><button class="reference-enter" type="button" onclick="go('lineup')" aria-label="Войти в историю"><span>ВОЙТИ</span><span aria-hidden="true">→</span></button></div>
</div></section>
${dlg(DIALOGUES[0])}
<section id="dining" data-scene class="scene dining"><div class="table" id="table">${photo('dining')}<div class="shade"></div>${hud('ДЕНЬ 1 / СТОЛОВАЯ','13:10')}
<button class="mug-touch" id="mug-touch" type="button" aria-label="Рассмотреть свою кружку" aria-expanded="false"></button><span class="mug-hint" id="mug-hint">У КАЖДОГО СВОЯ КРУЖКА</span><div class="mug-story" id="mug-story" role="status">У всех одинаковые эмалированные кружки. Ты запоминаешь свою по маленькому сколу на ободке.</div><div class="d-text"><p>На обед дают суп, хлеб и компот. Лёва уже успел попросить добавки.</p></div></div></section>
<section id="play" data-scene class="play" style="height:190svh"><div class="sticky">${photo('playground')}<div class="shade"></div>${hud('ДЕНЬ 1 / ПОСЛЕ ОБЕДА','16:00')}
<p class="p-text">Солнце греет доски, от которых пахнет смолой. Кто-то играет в волейбол, кто-то просто лежит в тени и ничего не делает.</p></div></section>
${dlg(DIALOGUES[1])}
<section id="day2" data-scene class="day2-morning" aria-label="День второй. Утро">
  <div class="day2-sticky">
    <img class="day2-image" src="${DAY2_MORNING_SRC}" alt="Раннее утро в пионерском лагере. Девочка с эмалированной кружкой на крыльце, остальные идут на зарядку.">
    <div class="day2-shade"></div>
    <div class="day2-header"><span>ДЕНЬ 2 / УТРО</span><span>07:30</span></div>
    <div class="day2-content"><div class="day2-kicker">ВТОРОЙ ДЕНЬ СМЕНЫ</div><h2>ДЕНЬ 2</h2>
      <p class="day2-first">Горн играет раньше, чем ты успеваешь открыть глаза. За окном пахнет соснами. Всё как вчера.</p>

    </div>
  </div>
</section>
<section id="day2-wash" data-scene class="day2-washing" aria-label="День второй. Умывалка">
  <div class="day2-wash-sticky">
    <img class="day2-wash-photo" src="${DAY2_WASH_SRC}" alt="Девочки умываются холодной водой в лагерной умывалке.">
    <div class="day2-wash-shade"></div>
    <div class="day2-header"><span>ДЕНЬ 2 / УМЫВАЛКА</span><span>07:40</span></div>
    <div class="day2-wash-copy">
      <p class="day2-wash-lead">В умывалке уже очередь. Вода ледяная, зубной порошок попадает в нос.</p>
      <p class="day2-wash-later">Кто-то смеётся, кто-то ворчит, что не выспался. В очереди кто-то переминается с ноги на ногу.</p>
    </div>
  </div>
</section>
<section id="day2-lunch" data-scene class="day2-lunch" aria-label="День второй. Столовая">
  <div class="day2-lunch-sticky">
    <img class="day2-lunch-photo" src="${DAY2_LUNCH_SRC}" alt="Девочки обедают в солнечной столовой пионерского лагеря, отдельно стоит лишняя эмалированная кружка со звёздочкой.">
    <div class="day2-lunch-shade"></div>
    
    <div class="day2-header"><span>ДЕНЬ 2 / СТОЛОВАЯ</span><span>13:10</span></div>
    <div class="day2-lunch-copy">
      <p class="day2-lunch-first">В столовой пахнет гречкой и компотом. Кто-то просит добавки, кто-то меняется хлебом.</p>
      <p class="day2-lunch-second">На столе стоит ещё одна кружка. Белая, с тёмным ободком. Точно такая же, как остальные.</p>
      <p class="day2-lunch-third"><span class="day2-lunch-speaker">Катя</span>Чья это?</p>
      <p class="day2-lunch-fourth">Никто не отвечает. Через минуту разговор продолжается, будто вопроса и не было.</p>
    </div>
  </div>
</section>
<section id="day2-board" data-scene class="day2-board" aria-label="День второй. После обеда">
 <div class="board-sticky">
  <img class="board-photo" src="${DAY2_BOARD_SRC}" alt="Катя рассматривает фотографию отряда и список на деревянном стенде в пионерлагере.">
  <div class="board-shade"></div>
  <div class="day2-header"><span>ДЕНЬ 2 / ПОСЛЕ ОБЕДА</span><span>16:00</span></div>
  <div class="board-copy">
   <p>После обеда все расходятся: кто-то на кружки, кто-то на спортплощадку.</p>
   <p class="board-later">Катя задерживается у стенда. На фотографии — весь третий отряд. Двадцать шесть человек.</p>
  </div>
  <button class="board-look" type="button" aria-pressed="false" aria-label="Рассмотреть фотографию отряда">РАССМОТРЕТЬ ФОТОГРАФИЮ <span aria-hidden="true">+</span></button>
  <p class="board-detail" aria-live="polite">Двадцать шесть. Всё сходится. Пока.</p>
 </div>
</section>
<section id="day2-evening" data-scene class="day2-evening" aria-label="День второй. Отбой">
 <div class="day2-evening-sticky">
  <img class="day2-evening-photo" src="${DAY2_EVENING_SRC}" alt="Вечером девочки тихо переговариваются в спальне пионерского лагеря.">
  <div class="day2-evening-shade"></div><div class="day2-evening-light" aria-hidden="true"></div>
  <div class="day2-header"><span>ДЕНЬ 2 / ОТБОЙ</span><span>22:30</span></div>
  <div class="day2-evening-copy">
   <p class="evening-a">В спальне пахнет нагретыми за день досками. За окном стрекочут сверчки. Кто-то шепчется под одеялом.</p>
   <p class="evening-b"><span class="evening-voice">МАША</span>Катя, ты чего не спишь?</p>
   <p class="evening-c"><span class="evening-voice">КАТЯ</span>Да так. На фотографии сегодня всех пересчитала. Двадцать шесть.</p>
  </div>
 </div>
</section>
<section id="day3-morning" class="day3-scene" data-scene aria-label="День третий. Утро">
 <div class="day3-sticky">
  <img class="day3-photo" src="${DAY3_MORNING_SRC}" alt="Пионерский лагерь на утренней линейке.">
  <div class="day3-vignette"></div>
  <div class="day2-header"><span>ДЕНЬ 3 / УТРО</span><span>07:30</span></div>
  <div class="day3-text">
   <h2>День 3</h2>
   <p class="day3-line">Горн играет вовремя. На линейке все стоят на своих местах.</p>
   <p class="day3-line">Вожатая пересчитывает отряд. На секунду сбивается, улыбается и начинает сначала.</p>
   <p class="day3-line day3-whisper">— Двадцать шесть. Всё правильно.</p>
  </div>
 </div>
</section>
<section id="day3-cup" class="day3-scene day3-cup-scene" data-scene aria-label="День третий. Кружка">
 <div class="day3-sticky">
  <img class="day3-photo" src="${DAY3_CUP_SRC}" alt="Эмалированная кружка со звездой на столе лагерной столовой.">
  <div class="day3-vignette"></div>
  <div class="day2-header"><span>ДЕНЬ 3 / СТОЛОВАЯ</span><span>13:10</span></div>
  <div class="day3-text">
   <p class="day3-line">На столе снова стоит кружка со стёртой красной звездой.</p>
   <p class="day3-line">Катя помнит, что вчера её убрали. Сегодня никто не спрашивает, чья она.</p>
   <p class="day3-line day3-whisper">Она просто стоит на том же месте.</p>
  </div>
  <span class="day3-film-note" aria-hidden="true">26</span>
 </div>
</section>
<section id="day3-night" class="day3-scene day3-night-scene" data-scene aria-label="День третий. Перед сном">
 <div class="day3-sticky">
  <img class="day3-photo" src="${DAY3_NIGHT_SRC}" alt="Девочки разговаривают в тёмной спальне пионерского лагеря.">
  <div class="day3-vignette"></div>
  <div class="day2-header"><span>ДЕНЬ 3 / ОТБОЙ</span><span>22:40</span></div>
  <div class="day3-text">
   <p class="day3-line"><small>ДАША</small>Вы слышали? Кто-то ходил в коридоре.</p>
   <p class="day3-line"><small>МАША</small>Это вожатая. Спи.</p>
   <p class="day3-line"><small>КАТЯ</small>А почему шаги остановились у нашей двери?</p>
  </div>
 </div>
</section>
<section id="day4-silence" class="day4-scene" aria-label="День четвёртый. Тишина" data-scene>
 <div class="day4-sticky">
  <img class="day4-photo day4-dawn" src="${DAY4_DAWN_SRC}" alt="Пионеры на утренней линейке среди сосен">
  <div class="day4-shade"></div>
  <div class="day2-header"><span>ДЕНЬ 4 / УТРО</span><span>06:50</span></div>
  <div class="day4-copy"><h2>День 4</h2><p class="day4-line">Сегодня тебя будит не горн.</p><p class="day4-line">Тишина. Ни шагов в коридоре, ни голосов за окном.</p><p class="day4-line">На линейке вожатая считает дважды. Во второй раз — шёпотом.</p></div>
  
 </div>
</section>
<section id="day4-bed" class="day4-scene day4-bed-scene" aria-label="День четвёртый. Пустая кровать" data-scene>
 <div class="day4-sticky">
  <img class="day4-photo day4-bed" src="${DAY4_BED_SRC}" alt="Тёмная спальня лагеря">
  <div class="day4-shade"></div><div class="day4-flashlight" aria-hidden="true"></div><div class="day4-light-hint">ВЕДИ МЫШКОЙ. ЭТО ТВОЙ СВЕТ.</div>
  <div class="day2-header"><span>ДЕНЬ 4 / СПАЛЬНЯ</span><span>16:30</span></div>
  <div class="day4-copy"><p class="day4-line">У окна аккуратно заправлена кровать.</p><p class="day4-line">Катя уверена, что вчера там кто-то спал. Но Маша говорит: она всегда была пустой.</p><p class="day4-line">На спинке висит чужой красный галстук.</p></div>
 </div>
</section>
<section id="day4-freeze" class="day4-scene day4-freeze-scene" aria-label="День четвёртый. Замри" data-scene>
 <div class="day4-sticky">
  <img class="day4-photo day4-dark" src="${DAY4_DARK_SRC}" alt="Тёмная спальня с приоткрытой дверью в коридор">
  <div class="day4-shade"></div><div class="day4-flashlight" aria-hidden="true"></div><div class="day4-light-hint">ПОСВЕТИ НА ДВЕРЬ</div>
  <div class="day2-header"><span>ДЕНЬ 4 / ОТБОЙ</span><span>23:50</span></div>
  <div class="day4-freeze-content">
   <p class="day4-freeze-intro">За дверью снова слышны шаги. Совсем близко.</p>
   <div class="day4-freeze-control"><span class="day4-freeze-label">НЕ ШЕВЕЛИСЬ</span><button type="button" id="day4-hold" aria-label="Нажми, чтобы включить фонарик">ЗАМРИ</button><span class="day4-hold-help">Нажми один раз, чтобы включить свет</span></div>
   <p class="day4-freeze-result" role="status" aria-live="polite">Дверь уже приоткрыта.<br>За ней никого не видно.</p>
  </div>
 </div>
</section>
<section id="day5-dawn" class="day5-scene day5-dawn-scene" data-scene aria-label="День пятый. Утро">
 <div class="day5-sticky">
  <img class="day5-photo" src="${DAY5_DAWN_SRC}" alt="Солнечное утро в пионерском лагере среди сосен">
  <div class="day5-shade"></div>
  <div class="day2-header"><span>ДЕНЬ 5 / УТРО</span><span>07:30</span></div>
  <div class="day5-copy"><h2>День 5</h2><p class="day5-line">Горн снова звучит ровно в половине восьмого.</p><p class="day5-line">На завтрак дают кашу. Катя смеётся над Машиной шуткой. Никто не вспоминает ночные шаги.</p></div>
 </div>
</section>
<section id="day5-depart" class="day5-scene day5-depart-scene" data-scene aria-label="День пятый. Отъезд">
 <div class="day5-sticky">
  <img class="day5-photo" src="${DAY5_DEPART_SRC}" alt="Автобус у ворот пионерского лагеря">
  <div class="day5-shade"></div>
  <div class="day2-header"><span>ДЕНЬ 5 / ОТЪЕЗД</span><span>10:20</span></div>
  <div class="day5-copy"><p class="day5-line">Автобус ждёт у ворот. Вещи уложены, все торопятся занять места у окна.</p><p class="day5-line">Вожатая пересчитывает отряд. Двадцать шесть.</p><p class="day5-line">Автобус трогается. Сосны медленно исчезают за стеклом.</p></div>
 </div>
</section>
<section id="day5-list" class="day5-list-scene" data-scene aria-label="День пятый. Список отряда">
 <div class="day5-list-sticky">
  <img class="day5-list-backdrop" src="${DAY5_DAWN_SRC}" alt="" aria-hidden="true">
  <div class="day2-header"><span>ДЕНЬ 5 / СПИСОК ОТРЯДА</span><span>ПОСЛЕ ОТЪЕЗДА</span></div>
  <div class="day5-list-intro">На двери корпуса остался список.</div>
  <div class="day5-paper" role="group" aria-label="Список третьего отряда">
   <div class="day5-paper-title">ОТРЯД № 3</div><div class="day5-paper-sub">СМЕНА 1981 · 26 ЧЕЛОВЕК</div>
   <div class="day5-roster" id="day5-roster"></div>
   <div class="day5-paper-foot">Всего: <span id="day5-total">26</span></div>
  </div>
  <p class="day5-ending" aria-live="polite">А ты уверен, что вас было двадцать шесть?</p>
 </div>
</section>`;
// Каждая сцена — отдельный кадр; текст второй появляется мягко при прокрутке.

// День 3: последовательное появление реплик и мягкий наезд камеры.

// День 4 — прокрутка и взаимодействие без блокировки скролла.

// Пятый день: текст проявляется по прокрутке, камера неподвижна.
const day5Scenes=[...document.querySelectorAll('.day5-scene')];
const rosterNames=['Катя','Маша','Даша','Аня','Оля','Лена','Нина','Ира','Света','Таня','Галя','Вера','Люба','Рита','Зоя','Надя','Лида','Юля','Валя','Женя','Алла','Марина','Наташа','Люся','Полина','Соня'];
const roster=document.getElementById('day5-roster');
if(roster){roster.innerHTML=rosterNames.map((name,i)=>`<div class="day5-roster-row"><span class="number">${String(i+1).padStart(2,'0')}.</span><span>${name}</span></div>`).join('')+'<div class="day5-roster-row last"><span class="number">27.</span><span>&nbsp;</span></div>'}
const listScene=document.getElementById('day5-list');
let day5Raf=0;
function updateDay5(){day5Raf=0;for(const scene of day5Scenes){const r=scene.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)continue;const p=Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight)));scene.querySelectorAll('.day5-line').forEach((el,i)=>el.classList.toggle('is-visible',p>[.08,.34,.62][i]));}if(listScene){const r=listScene.getBoundingClientRect();const p=Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight)));listScene.classList.toggle('reveal',p>.7)}}
addEventListener('scroll',()=>{if(!day5Raf)day5Raf=requestAnimationFrame(updateDay5)},{passive:true});addEventListener('resize',updateDay5);updateDay5();
const day4Scenes=[...document.querySelectorAll('.day4-scene')];
let day4Raf=0;
function updateDay4(){day4Raf=0;for(const sc of day4Scenes){const r=sc.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)continue;const p=Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight)));sc.style.setProperty('--day4-p',p.toFixed(3));sc.querySelectorAll('.day4-line').forEach((el,i)=>el.classList.toggle('is-visible',p>[.08,.34,.60][i]));}}
addEventListener('scroll',()=>{if(!day4Raf)day4Raf=requestAnimationFrame(updateDay4)},{passive:true});addEventListener('resize',updateDay4);updateDay4();
const holdButton=document.getElementById('day4-hold');
const holdScene=document.getElementById('day4-freeze');
if(holdButton && holdScene){
 holdButton.addEventListener('click',()=>{
  if(holdScene.classList.contains('finished'))return;
  holdScene.classList.add('finished','light-on');
  holdButton.setAttribute('aria-pressed','true');
  holdButton.textContent='СВЕТ ВКЛЮЧЁН';
 });
}
const day3Scenes=[...document.querySelectorAll('.day3-scene')];
let day3Tick=0;
function updateDay3(){
 day3Tick=0;
 for(const scene of day3Scenes){
  const rect=scene.getBoundingClientRect();
  if(rect.bottom<0||rect.top>innerHeight)continue;
  const progress=Math.max(0,Math.min(1,-rect.top/Math.max(1,rect.height-innerHeight)));
  scene.style.setProperty('--d3-progress',progress.toFixed(3));
  scene.querySelectorAll('.day3-line').forEach((el,i)=>el.classList.toggle('is-visible',progress>=[.08,.34,.62][i]));
 }
}
addEventListener('scroll',()=>{if(!day3Tick)day3Tick=requestAnimationFrame(updateDay3)},{passive:true});
addEventListener('resize',updateDay3);
updateDay3();
const day2Wash=document.getElementById('day2-wash');
let day2Frame=0;
function updateDay2(){day2Frame=0;const r=day2Wash.getBoundingClientRect();const span=Math.max(1,r.height-innerHeight);day2Wash.classList.toggle('show-later',-r.top/span>.26)}
addEventListener('scroll',()=>{if(!day2Frame)day2Frame=requestAnimationFrame(updateDay2)},{passive:true});
addEventListener('resize',updateDay2);updateDay2();
const day2Evening=document.getElementById('day2-evening');
let eveningFrame=0;
function updateDay2Evening(){
 eveningFrame=0;
 const r=day2Evening.getBoundingClientRect();
 const p=Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight)));
 day2Evening.classList.toggle('step-a',p>.07&&p<=.30);
 day2Evening.classList.toggle('step-b',p>.30&&p<=.59);
 day2Evening.classList.toggle('step-c',p>.59);
}
addEventListener('scroll',()=>{if(!eveningFrame)eveningFrame=requestAnimationFrame(updateDay2Evening)},{passive:true});
addEventListener('resize',updateDay2Evening);updateDay2Evening();
const day2Board=document.getElementById('day2-board');
const boardLook=day2Board.querySelector('.board-look');
boardLook.addEventListener('click',()=>{const on=day2Board.classList.toggle('is-looking');boardLook.setAttribute('aria-pressed',String(on));boardLook.innerHTML=on?'ВЕРНУТЬСЯ К КАДРУ <span aria-hidden="true">−</span>':'РАССМОТРЕТЬ ФОТОГРАФИЮ <span aria-hidden="true">+</span>';});
const boardObserver=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting)day2Board.classList.add('reveal-board')}},{threshold:.35});boardObserver.observe(day2Board);
const day2Lunch=document.getElementById('day2-lunch');
let day2LunchFrame=0;
function updateDay2Lunch(){day2LunchFrame=0;const r=day2Lunch.getBoundingClientRect();const span=Math.max(1,r.height-innerHeight);const t=Math.max(0,-r.top/span);day2Lunch.style.setProperty('--cinema-zoom',String(Math.max(0,Math.min(1,(t-.32)/.60))));day2Lunch.classList.toggle('step-1',t>.17&&t<=.42);day2Lunch.classList.toggle('step-2',t>.42&&t<=.67);day2Lunch.classList.toggle('step-3',t>.67)}
addEventListener('scroll',()=>{if(!day2LunchFrame)day2LunchFrame=requestAnimationFrame(updateDay2Lunch)},{passive:true});
addEventListener('resize',updateDay2Lunch);updateDay2Lunch();
// Кружка — маленький предмет памяти. Не перемещается и не выбивается из фотографии.
const mugTouch=document.getElementById('mug-touch');
mugTouch.addEventListener('click',()=>{
 const open=!document.getElementById('mug-story').classList.contains('is-open');
 document.getElementById('mug-story').classList.toggle('is-open',open);
 mugTouch.setAttribute('aria-expanded',String(open));
 document.getElementById('mug-hint').textContent=open?'ТВОЯ КРУЖКА':'У КАЖДОГО СВОЯ КРУЖКА';
});
