/* ═══════════════════════════════════════════════════════════
   ৯৯ সুন্দর নাম · app.js
   Cinematic player · 99 Names explorer · Tasbih counter
   ═══════════════════════════════════════════════════════════ */
'use strict';

/* ───────────── helpers ───────────── */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const BN_DIGITS = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
const toBn = n => String(n).replace(/\d/g, d => BN_DIGITS[+d]);
const stripDiacritics = s => s
  .normalize('NFD').replace(/[\u0300-\u0304\u0306-\u030c\u0323\u0331\u0334-\u0338]/g, '')
  .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');           // arabic harakat
const fold = s => stripDiacritics(String(s)).toLowerCase().replace(/[^a-z0-9\u0980-\u09FF]+/g, '');
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

/* ─── 🌐 site language (translate button) ─── */
let LANG = store.get('asma-lang', 'bn') === 'en' ? 'en' : 'bn';
const fmt = n => (LANG === 'bn' ? toBn(n) : String(n));
const localize = (bn, en) => LANG === 'bn' ? bn : en;
let NAME_VOICE = store.get('asma-name-voice', 'male') === 'female' ? 'female' : 'male';
let nameAudio = null;
let allIdx = -1, lastList = [], allList = [];

/* toast */
let toastEl, toastTimer;
function toast(msg) {
  if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
}

/* ───────────── hero star field ───────────── */
(function stars() {
  const box = $('.stars'); if (!box) return;
  for (let i = 0; i < 36; i++) {
    const s = document.createElement('i');
    s.style.left = Math.random() * 100 + '%';
    s.style.top  = Math.random() * 100 + '%';
    s.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
    s.style.animationDuration = (2.5 + Math.random() * 3.5).toFixed(2) + 's';
    if (Math.random() < .3) { s.style.width = s.style.height = '4px'; s.style.background = '#ffe9b0'; }
    box.appendChild(s);
  }
})();

/* ═══════════════════════════════════════════════════════════
   CINEMATIC PLAYER  —  recreated “short”: visuals + narration
   ═══════════════════════════════════════════════════════════ */
const CINE = {
  lang: 'bn',
  scene: 0,           // 0 cover · 1-3 narration scenes · 4 end
  playing: false,
  started: false,
  clips: {
    bn: ['assets/audio/bn1.mp3', 'assets/audio/bn2.mp3', 'assets/audio/bn3.mp3'],
    en: ['assets/audio/en1.mp3', 'assets/audio/en2.mp3', 'assets/audio/en3.mp3']
  },
  captions: {
    bn: [
      'প্রতিটি নাম — রহমতের একটি দরজা, হৃদয়ের জন্য একটি আলো। বিসমিল্লাহ দিয়ে শুরু করুন।',
      'আর-রহমান · আর-রহীম · আল-মালিক · আল-কুদ্দুস — চারটি নাম, চারটি আলো।',
      'সুবহানাল্লাহ · আলহামদুলিল্লাহ · আল্লাহু আকবার — হৃদয়কে প্রশান্ত করো।'
    ],
    en: [
      'Every name is a doorway of mercy, a light for the heart. Begin with Bismillah.',
      'Ar-Rahman · Ar-Raheem · Al-Malik · Al-Quddus — four names, four lights.',
      'SubhanAllah · Alhamdulillah · Allahu Akbar — and let your heart find calm.'
    ]
  }
};

const stage    = $('#stage');
const scenes   = $$('.scene');
const caption  = $('#caption');
const capBn    = $('#capBn');
const capEn    = $('#capEn');
const btnPlay  = $('#btnPlay');
const btnStart = $('#btnStart');
const btnMute  = $('#btnMute');
const btnReplay= $('#btnReplay');
const fill     = $('#progressFill');
const track    = $('#progressTrack');
const sceneLabel = $('#sceneLabel');

const audio = new Audio();
audio.preload = 'auto';
audio.volume = 1;

let seeking = false;
let cineLoadRun = 0;

function syncCineControls() {
  const playLabel = !CINE.started || CINE.scene === 4
    ? localize('সিনেমাটিক চালান', 'Play cinematic')
    : CINE.playing ? localize('বিরতি', 'Pause') : localize('চালিয়ে যান', 'Resume');
  btnPlay.setAttribute('aria-label', playLabel);
  btnStart.setAttribute('aria-label', localize('সিনেমাটিক চালান', 'Play cinematic'));
  btnMute.setAttribute('aria-label', audio.muted
    ? localize('শব্দ চালু করুন', 'Unmute')
    : localize('শব্দ বন্ধ করুন', 'Mute'));
}

function showScene(n) {
  CINE.scene = n;
  scenes.forEach(s => s.classList.toggle('active', +s.dataset.scene === n));
  const inNarration = n >= 1 && n <= 3;
  caption.classList.toggle('hidden', !inNarration);
  if (inNarration) {
    capBn.textContent = CINE.captions.bn[n - 1];
    capEn.textContent = CINE.captions.en[n - 1];
    sceneLabel.textContent = LANG === 'bn' ? `দৃশ্য ${fmt(n)}/৩` : `Scene ${n}/3`;
  } else if (n === 0) {
    sceneLabel.textContent = LANG === 'bn' ? 'প্রস্তুত' : 'Ready';
    capBn.textContent = capEn.textContent = '';
  } else {
    sceneLabel.textContent = LANG === 'bn' ? 'সম্পন্ন' : 'The End';
    capBn.textContent = capEn.textContent = '';
  }
  if (!inNarration) setProgress(n === 4 ? 1 : 0);
}

function setProgress(f) { if (!seeking) fill.style.width = Math.max(0, Math.min(1, f)) * 100 + '%'; }

function playSceneFrom(n, t = 0, shouldPlay = true) {
  const run = ++cineLoadRun;
  showScene(n);
  audio.src = CINE.clips[CINE.lang][n - 1];
  const go = () => {
    if (run !== cineLoadRun) return;
    if (t > 0 && isFinite(audio.duration)) audio.currentTime = Math.min(t, audio.duration - .1);
    if (shouldPlay) audio.play().catch(() => {});
    else audio.pause();
  };
  audio.readyState >= 1 ? go() : audio.addEventListener('loadedmetadata', go, { once: true });
  CINE.playing = shouldPlay;
  btnPlay.textContent = shouldPlay ? '❚❚' : '▶';
  stage.classList.toggle('paused', !shouldPlay);
  syncCineControls();
}

function pauseCine() {
  audio.pause(); CINE.playing = false;
  btnPlay.textContent = '▶';
  stage.classList.add('paused');
  syncCineControls();
}
function resumeCine() {
  if (!CINE.started) { startCine(); return; }
  if (CINE.scene === 4) { startCine(); return; }
  audio.play().catch(() => {});
  CINE.playing = true; btnPlay.textContent = '❚❚';
  stage.classList.remove('paused');
  syncCineControls();
}
function startCine() {
  try { ac(); } catch {}          // unlock audio on the first user gesture
  CINE.started = true;
  playSceneFrom(1);
}
function endCine() {
  CINE.playing = false;
  btnPlay.textContent = '↻';
  audio.removeAttribute('src');
  showScene(4);
  syncCineControls();
  chime([523.25, 659.25, 783.99]);   // soft closing chime
}

audio.addEventListener('ended', () => {
  if (CINE.scene >= 1 && CINE.scene < 3) playSceneFrom(CINE.scene + 1);
  else endCine();
});
audio.addEventListener('timeupdate', () => {
  if (!audio.duration || seeking || CINE.scene < 1 || CINE.scene > 3) return;
  setProgress(((CINE.scene - 1) + audio.currentTime / audio.duration) / 3);
});

btnStart.addEventListener('click', startCine);
btnReplay?.addEventListener('click', startCine);
$('#ctaWatch')?.addEventListener('click', () => setTimeout(startCine, 450));

btnPlay.addEventListener('click', () => {
  if (!CINE.started || CINE.scene === 4) startCine();
  else if (CINE.playing) pauseCine();
  else resumeCine();
});

btnMute.addEventListener('click', () => {
  audio.muted = !audio.muted;
  btnMute.textContent = audio.muted ? '🔇' : '🔊';
  syncCineControls();
});

/* Global language controls are wired after applyLang so both groups stay in sync. */

/* seek by clicking progress */
track.addEventListener('pointerdown', e => {
  if (!CINE.started || CINE.scene === 4) return;
  const r = track.getBoundingClientRect();
  const f = Math.max(0, Math.min(.999, (e.clientX - r.left) / r.width));
  const sc = Math.floor(f * 3) + 1;
  const local = f * 3 - (sc - 1);
  const wasPlaying = CINE.playing;
  const doSeek = () => {
    const d = audio.duration;
    playSceneFrom(sc, isFinite(d) ? local * d : 0, wasPlaying);
  };
  if (audio.readyState >= 1 && +audio.dataset.sceneCached === sc) { doSeek(); }
  else {
    audio.src = CINE.clips[CINE.lang][sc - 1];
    audio.dataset.sceneCached = sc;
    audio.addEventListener('loadedmetadata', doSeek, { once: true });
  }
});
audio.addEventListener('loadedmetadata', () => { audio.dataset.sceneCached = CINE.scene; });

showScene(0);

/* ═══════════════════════════════════════════════════════════
   WEB AUDIO — tick & chime sounds (tasbih feedback)
   ═══════════════════════════════════════════════════════════ */
let AC = null;
function ac() {
  if (!AC) { const C = window.AudioContext || window.webkitAudioContext; if (C) AC = new C(); }
  if (AC && AC.state === 'suspended') AC.resume().catch(() => {});
  return AC;
}
function tick() {
  const c = ac(); if (!c) return;
  const o = c.createOscillator(), g = c.createGain();
  o.type = 'sine'; o.frequency.setValueAtTime(760, c.currentTime);
  o.frequency.exponentialRampToValueAtTime(1120, c.currentTime + .07);
  g.gain.setValueAtTime(.0001, c.currentTime);
  g.gain.exponentialRampToValueAtTime(.16, c.currentTime + .012);
  g.gain.exponentialRampToValueAtTime(.0001, c.currentTime + .16);
  o.connect(g).connect(c.destination);
  o.start(); o.stop(c.currentTime + .18);
}
function chime(notes = [523.25, 659.25, 783.99, 1046.5]) {
  const c = ac(); if (!c) return;
  notes.forEach((f, i) => {
    const t = c.currentTime + i * .13;
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'triangle'; o.frequency.value = f;
    g.gain.setValueAtTime(.0001, t);
    g.gain.exponentialRampToValueAtTime(.14, t + .02);
    g.gain.exponentialRampToValueAtTime(.0001, t + .7);
    o.connect(g).connect(c.destination);
    o.start(t); o.stop(t + .75);
  });
}

/* ═══════════════════════════════════════════════════════════
   THE 99 NAMES
   ═══════════════════════════════════════════════════════════ */
const NAMES = [
  { a:'ٱلرَّحْمَٰنُ',           t:'Ar-Rahmān',        b:'আর-রহমান',        bn:'পরম করুণাময়',                    e:'The Most Gracious' },
  { a:'ٱلرَّحِيمُ',             t:'Ar-Rahīm',         b:'আর-রহীম',         bn:'অতি দয়ালু',                      e:'The Most Merciful' },
  { a:'ٱلْمَلِكُ',              t:'Al-Malik',         b:'আল-মালিক',        bn:'সার্বভৌম রাজা',                   e:'The King, The Sovereign' },
  { a:'ٱلْقُدُّوسُ',            t:'Al-Quddūs',        b:'আল-কুদ্দুস',      bn:'পবিত্রতম',                        e:'The Most Holy' },
  { a:'ٱلسَّلَامُ',             t:'As-Salām',         b:'আস-সালাম',        bn:'শান্তির উৎস',                     e:'The Source of Peace' },
  { a:'ٱلْمُؤْمِنُ',            t:'Al-Mu’min',        b:'আল-মু’মিন',       bn:'নিরাপত্তা ও বিশ্বাস প্রদানকারী',  e:'The Granter of Security' },
  { a:'ٱلْمُهَيْمِنُ',          t:'Al-Muhaymin',      b:'আল-মুহাইমিন',     bn:'রক্ষাকারী ও পর্যবেক্ষক',          e:'The Guardian, The Overseer' },
  { a:'ٱلْعَزِيزُ',             t:'Al-ʿAzīz', b:'আল-আজিজ', bn:'পরাক্রমশালী',              e:'The Almighty, The Mighty' },
  { a:'ٱلْجَبَّارُ',            t:'Al-Jabbār',        b:'আল-জব্বার',        bn:'প্রবল ও জবরদস্তির স্বামী',        e:'The Compeller, The Omnipotent' },
  { a:'ٱلْمُتَكَبِّرُ',         t:'Al-Mutakabbir',    b:'আল-মুতাকাব্বির',   bn:'মহান ও উন্নত',                   e:'The Supreme, The Majestic' },
  { a:'ٱلْخَالِقُ',             t:'Al-Khāliq',        b:'আল-খালিক',         bn:'সৃষ্টিকর্তা',                     e:'The Creator' },
  { a:'ٱلْبَارِئُ',             t:'Al-Bāriʾ',         b:'আল-বারি’',         bn:'সৃষ্টি রচয়িতা',                  e:'The Maker, The Evolver' },
  { a:'ٱلْمُصَوِّرُ',           t:'Al-Muṣawwir',      b:'আল-মুসাওয়ির',     bn:'আকৃতিদাতা',                       e:'The Fashioner, The Designer' },
  { a:'ٱلْغَفَّارُ',            t:'Al-Ghaffār',       b:'আল-গাফফার',        bn:'পরম ক্ষমাকারী',                   e:'The Absolute Forgiver' },
  { a:'ٱلْقَهَّارُ',            t:'Al-Qahhār',        b:'আল-কাহহার',        bn:'সর্বজয়ী',                         e:'The Subduer, The Vanquisher' },
  { a:'ٱلْوَهَّابُ',            t:'Al-Wahhāb',        b:'আল-ওয়াহহাব',      bn:'নিঃশর্ত প্রদানকারী',              e:'The Supreme Bestower' },
  { a:'ٱلرَّزَّاقُ',            t:'Ar-Razzāq',        b:'আর-রয্জাক',        bn:'রিজিকদাতা, সরবরাহকারী',           e:'The Provider, The Sustainer' },
  { a:'ٱلْفَتَّاحُ',            t:'Al-Fattāḥ',        b:'আল-ফাত্তাহ',       bn:'বিজয় ও সমাধানের দ্বার খোলারকারী', e:'The Opener, The Judge' },
  { a:'ٱلْعَلِيمُ',             t:'Al-ʿAlīm',         b:'আল-আলিম',          bn:'সর্বজ্ঞ',                          e:'The All-Knowing' },
  { a:'ٱلْقَابِضُ',             t:'Al-Qābiḍ',         b:'আল-কাবিদ',         bn:'সংকুচিতকারী, রোধকারী',            e:'The Withholder, The Restrainer' },
  { a:'ٱلْبَاسِطُ',             t:'Al-Bāsiṭ',         b:'আল-বাসিত',         bn:'প্রসারিতকারী, প্রদানকারী',         e:'The Extender, The Expander' },
  { a:'ٱلْخَافِضُ',             t:'Al-Khāfiḍ',        b:'আল-খাফিদ',         bn:'অবনতিকারী, নত করারকারী',           e:'The Abaser, The Reducer' },
  { a:'ٱلرَّافِعُ',             t:'Ar-Rāfiʿ',         b:'আর-রাফি’',         bn:'উন্নীতকারী, মর্যাদা দানকারী',      e:'The Exalter, The Elevator' },
  { a:'ٱلْمُعِزُّ',             t:'Al-Muʿizz',        b:'আল-মু’যিৎ',        bn:'সম্মান প্রদানকারী',                e:'The Giver of Honour' },
  { a:'ٱلْمُذِلُّ',             t:'Al-Muḏill',        b:'আল-মুযিল্ল',       bn:'অপমানকারী, লাঞ্ছিতকারী',           e:'The Giver of Dishonour' },
  { a:'ٱلسَّمِيعُ',             t:'As-Samīʿ',         b:'আস-সামি’',         bn:'সর্বশ্রোতা',                       e:'The All-Hearing' },
  { a:'ٱلْبَصِيرُ',             t:'Al-Baṣīr',         b:'আল-বাসির',         bn:'সর্বদর্শী',                        e:'The All-Seeing' },
  { a:'ٱلْحَكَمُ',              t:'Al-Ḥakam',         b:'আল-হাকাম',         bn:'বিচারক, সিদ্ধান্তদাতা',            e:'The Judge, The Arbitrator' },
  { a:'ٱلْعَدْلُ',              t:'Al-ʿAdl',          b:'আল-আদল',           bn:'ন্যায়পরায়ণ',                      e:'The Absolutely Just' },
  { a:'ٱللَّطِيفُ',             t:'Al-Laṭīf',         b:'আল-লাতিফ',         bn:'সূক্ষ্ম ও সদয়',                   e:'The Subtly Kind, The Gentle' },
  { a:'ٱلْخَبِيرُ',             t:'Al-Khabīr',        b:'আল-খাবির',         bn:'সুবিজ্ঞ',                          e:'The All-Aware' },
  { a:'ٱلْحَلِيمُ',             t:'Al-Ḥalīm',         b:'আল-হালিম',         bn:'ধৈর্যশীল, ক্ষমাশীল',               e:'The Forbearing, The Indulgent' },
  { a:'ٱلْعَظِيمُ',             t:'Al-ʿAẓīm', b:'আল-আজিম', bn:'মহান ও চিরমহিমান্বিত',   e:'The Most Great, The Magnificent' },
  { a:'ٱلْغَفُورُ',             t:'Al-Ghafūr',        b:'আল-গাফুর',         bn:'প্রায়শ ক্ষমাকারী',                e:'The Oft-Forgiving' },
  { a:'ٱلشَّكُورُ',             t:'Ash-Shakūr',       b:'আশ-শাকুর',         bn:'কৃতজ্ঞ, পুরস্কার বাড়ানোরকারী',     e:'The Appreciative, The Grateful' },
  { a:'ٱلْعَلِيُّ',             t:'Al-ʿAliyy',        b:'আল-আলিয়্য',        bn:'সর্বোচ্চ, চিরউন্নত',               e:'The Most High, The Sublime' },
  { a:'ٱلْكَبِيرُ',             t:'Al-Kabīr',         b:'আল-কাবীর',         bn:'সর্বমহান',                         e:'The Greatest, The Most Great' },
  { a:'ٱلْحَفِيظُ',             t:'Al-Ḥafīẓ',         b:'আল-হাফিজ',         bn:'রক্ষাকারী, সংরক্ষক',               e:'The Preserver, The Protector' },
  { a:'ٱلْمُقِيتُ',             t:'Al-Muqīt',         b:'আল-মুকীত',         bn:'পুষ্টিদাতা, রক্ষক',                e:'The Nourisher, The Feeder' },
  { a:'ٱلْحَسِيبُ',             t:'Al-Ḥasīb',         b:'আল-হাসিব',         bn:'হিসাবকর্তা, যথেষ্টকারী',            e:'The Ever-Reckoner, The Sufficient' },
  { a:'ٱلْجَلِيلُ',             t:'Al-Jalīl',         b:'আল-জলিল',          bn:'মহিমান্বিত',                       e:'The Majestic, The Grand' },
  { a:'الْكَرِيمُ',             t:'Al-Karīm',         b:'আল-কারিম',         bn:'দানশীল, মহান',                     e:'The Most Generous, The Noble' },
  { a:'ٱلرَّقِيبُ',             t:'Ar-Raqīb',         b:'আর-রাকীব',         bn:'নজরদার, পর্যবেক্ষক',                e:'The Watchful, The Observer' },
  { a:'ٱلْمُجِيبُ',             t:'Al-Mujīb',         b:'আল-মুজীব',         bn:'দোয়া কবুলকারী',                   e:'The Responsive, The Answerer' },
  { a:'ٱلْوَاسِعُ',             t:'Al-Wāsiʿ',         b:'আল-ওয়াসি’',       bn:'বিস্তৃত, সর্বব্যাপী',               e:'The Vast, The All-Encompassing' },
  { a:'ٱلْحَكِيمُ',             t:'Al-Ḥakīm',         b:'আল-হাকীম',         bn:'প্রজ্ঞাবান',                       e:'The Most Wise' },
  { a:'ٱلْوَدُودُ',             t:'Al-Wadūd',         b:'আল-ওদুদ',          bn:'অতি স্নেহশীল',                    e:'The Most Loving, The Affectionate' },
  { a:'ٱلْمَجِيدُ',             t:'Al-Majīd',         b:'আল-মাজীদ',         bn:'মহিমান্বিত, সম্মানিত',              e:'The Most Glorious, The Illustrious' },
  { a:'ٱلْبَاعِثُ',             t:'Al-Bāʿiṯ',         b:'আল-বায়িস',         bn:'পুনরুত্থানদাতা',                  e:'The Resurrector, The Awakener' },
  { a:'ٱلشَّهِيدُ',             t:'Ash-Shahīd',       b:'আশ-শাহীদ',         bn:'সর্বসাক্ষী',                       e:'The Witness, The Testifier' },
  { a:'ٱلْحَقُّ',               t:'Al-Ḥaqq',          b:'আল-হাক্ক',          bn:'সত্য ও প্রকৃত',                    e:'The Absolute Truth, The Reality' },
  { a:'ٱلْوَكِيلُ',             t:'Al-Wakīl',         b:'আল-ওকীল',          bn:'নির্ভরযোগ্য পৃষ্ঠপোষক',             e:'The Trustee, The Guardian' },
  { a:'ٱلْقَوِيُّ',             t:'Al-Qawiyy',        b:'আল-কাবীয়্য',      bn:'পরাক্রমশালী',                      e:'The All-Strong' },
  { a:'ٱلْمَتِينُ',             t:'Al-Matīn',         b:'আল-মাতীন',         bn:'দৃঢ় ও অটল',                       e:'The Firm, The Steadfast' },
  { a:'ٱلْوَلِيُّ',             t:'Al-Waliyy',        b:'আল-ওয়ালিয়্য',     bn:'বন্ধু ও অভিভাবক',                  e:'The Protecting Friend, The Helper' },
  { a:'ٱلْحَمِيدُ',             t:'Al-Ḥamīd',         b:'আল-হামীদ',         bn:'সকল প্রশংসার যোগ্য',               e:'The All-Praiseworthy' },
  { a:'ٱلْمُحْصِىُ',            t:'Al-Muḥsī',         b:'আল-মুহসী',         bn:'গণক, পরিমাপকারী',                  e:'The Accounter, The Numberer' },
  { a:'ٱلْمُبْدِئُ',            t:'Al-Mubdiʾ',        b:'আল-মুবদি’',        bn:'সূচনাকারী, উদ্ভাবক',               e:'The Originator, The Initiator' },
  { a:'ٱلْمُعِيدُ',             t:'Al-Muʿīd',         b:'আল-মু’ঈদ',         bn:'পুনরুদ্ধারকারী',                   e:'The Restorer, The Reinstate' },
  { a:'ٱلْمُحْيِي',             t:'Al-Muḥyī',         b:'আল-মুহ্‌য়ী',       bn:'জীবনদাতা',                        e:'The Giver of Life' },
  { a:'ٱلْمُمِيتُ',             t:'Al-Mumīt',         b:'আল-মুমীত',         bn:'মৃত্যুদাতা',                       e:'The Bringer of Death' },
  { a:'ٱلْحَىُّ',               t:'Al-Ḥayy',          b:'আল-হায়্য',         bn:'চিরজীবী',                          e:'The Ever-Living' },
  { a:'ٱلْقَيُّومُ',            t:'Al-Qayyūm',        b:'আল-কাইয়্যুম',      bn:'স্বয়ংস্থিত, নিজেই সমর্থ',          e:'The Self-Subsisting, The Sustainer' },
  { a:'ٱلْوَاجِدُ',             t:'Al-Wājid',         b:'আল-ওয়াজিদ',       bn:'পাওয়া যায় এমন, লাভকারী',           e:'The Perceiver, The Finder' },
  { a:'ٱلْمَاجِدُ',             t:'Al-Mājid',         b:'আল-মাজিদ',         bn:'মহিমাময়, সম্মানজনক',               e:'The Illustrious, The Magnificent' },
  { a:'ٱلْوَاحِدُ',             t:'Al-Wāḥid',         b:'আল-ওয়াহিদ',       bn:'একক, অদ্বিতীয়',                    e:'The One, The Unique' },
  { a:'ٱلْأَحَدُ',              t:'Al-ʾAḥad',         b:'আল-আহাদ',          bn:'সম্পূর্ণ একক, অবিভাজ্য',             e:'The One, The Indivisible' },
  { a:'ٱلصَّمَدُ',              t:'Aṣ-Ṣamad',         b:'আস-সামাদ',         bn:'চিরস্থায়ী, সর্বনির্ভর',             e:'The Eternal Refuge, The Self-Sufficient' },
  { a:'ٱلْقَادِرُ',             t:'Al-Qādir',         b:'আল-কাদির',         bn:'সর্বশক্তিমান',                     e:'The All-Powerful' },
  { a:'ٱلْمُقْتَدِرُ',          t:'Al-Muqtadir',      b:'আল-মুকতাদির',      bn:'সর্ব-নির্ধারক, প্রবল',               e:'The All-Dominant, The Determiner' },
  { a:'ٱلْمُقَدِّمُ',           t:'Al-Muqaddim',      b:'আল-মুকাদ্দিম',     bn:'অগ্রসারক, এগিয়ে আনারকারী',         e:'The Expediter, He Who Brings Forward' },
  { a:'ٱلْمُؤَخِّرُ',           t:'Al-Muʾakhkhir',    b:'আল-মুআখখির',      bn:'বিলম্বকারী, পশ্চাদসারক',            e:'The Delayer, He Who Puts Far Away' },
  { a:'ٱلْأَوَّلُ',             t:'Al-ʾAwwal',        b:'আল-আওয়াল',        bn:'প্রথম, আদিহীন',                    e:'The First, The Beginning-less' },
  { a:'اَلْآخِرُ',              t:'Al-ʾĀkhir',        b:'আল-আখির',          bn:'শেষ, চিরন্তন',                     e:'The Last, The Endless' },
  { a:'ٱلظَّاهِرُ',             t:'Aẓ-Ẓāhir',         b:'আয-যাহির',         bn:'প্রকাশিত, বাহ্য',                   e:'The Manifest, The Evident' },
  { a:'ٱلْبَاطِنُ',             t:'Al-Bāṭin',         b:'আল-বাতিন',         bn:'গোপন, অন্তর্নিহিত',                 e:'The Hidden, The Inner' },
  { a:'ٱلْوَالِي',              t:'Al-Wali',          b:'আল-ওয়ালি',        bn:'পৃষ্ঠপোষক, শাসনকর্তা',              e:'The Patron, The Governing Lord' },
  { a:'ٱلْمُتَعَالِي',          t:'Al-Mutaʿālī',      b:'আল-মুতা’আলি',      bn:'সর্বোচ্চ মহিমান্বিত',               e:'The Supremely Exalted' },
  { a:'ٱلْبَرُّ',               t:'Al-Barr',          b:'আল-বার্র',          bn:'উপকারী, দয়ার উৎস',                e:'The Source of Goodness, The Beneficent' },
  { a:'ٱلتَّوَّابُ',            t:'At-Tawwāb',        b:'আত-তাওয়াব',       bn:'অনুতপ্ত গ্রহণকারী',                e:'The Ever-Accepting of Repentance' },
  { a:'ٱلْمُنْتَقِمُ',          t:'Al-Muntaqim',      b:'আল-মুনতাকিম',      bn:'অত্যাচারীর প্রতিশোধী',             e:'The Avenger of the Wrong' },
  { a:'اَلْعَفُوُّ',             t:'Al-ʿAfuww',        b:'আল-আফুয়্য',       bn:'ক্ষমাকারী, মুছে দেয় এমন',           e:'The Pardoner, The Effacer' },
  { a:'اَلرَّؤُوفُ',             t:'Ar-Raʾūf',         b:'আর-রআফ',           bn:'অতি সদয়, করুণাময়',                e:'The Very Kind, The Compassionate' },
  { a:'مَـٰلِكُ ٱلْمُلْكِ',      t:'Mālik al-Mulk',    b:'মালিকুল মুলক',     bn:'রাজ্যের স্বামী',                   e:'The Owner of All Sovereignty' },
  { a:'ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ', t:'Ḏhū l-Jalāli wa-l-ʾIkrām', b:'যুল জালালি ওয়াল ইকরাম', bn:'মহিমা ও সম্মানের ধনী', e:'The Lord of Majesty and Honour' },
  { a:'اَلْمُقْسِطُ',            t:'Al-Muqsiṭ',        b:'আল-মুকসিত',        bn:'ন্যায়পরায়ণ, সুষম বিচারকারী',       e:'The Equitable, The Just' },
  { a:'اَلْجَامِعُ',             t:'Al-Jāmiʿ',         b:'আল-জামি’',          bn:'সমবেতকারী, ঐক্য সাধনকারী',          e:'The Gatherer, The Unifier' },
  { a:'ٱلْغَنِيُّ',             t:'Al-Ghāniyy',       b:'আল-গানিয়্য',       bn:'অভাবহীন, স্বয়ংসম্পন্ন',            e:'The Self-Sufficient, The Rich' },
  { a:'اَلْمُغْنِيُّ',           t:'Al-Mughniyy',      b:'আল-মুগনিয়্য',      bn:'সমৃদ্ধকারী, মুক্তিদাতা',            e:'The Enricher, The Emancipator' },
  { a:'اَلْمَانِعُ',             t:'Al-Māniʿ',         b:'আল-মানি’',          bn:'প্রতিরোধক, বাধাদাতা',               e:'The Preventer, The Withholder' },
  { a:'اَلضَّارُ',              t:'Aḍ-Ḍār',           b:'আয-যার',            bn:'পরীক্ষার জন্য ক্ষতিকর',             e:'The Distressor, The Harm-Bringer' },
  { a:'اَلنَّافِعُ',             t:'An-Nāfiʿ',         b:'আন-নাফি’',          bn:'উপকারী, কল্যাণকারী',                e:'The Benefactor, The Source of Good' },
  { a:'اَلنُّورُ',              t:'An-Nūr',           b:'আন-নূর',            bn:'আলো',                              e:'The Light' },
  { a:'اَلْهَادِي',             t:'Al-Hādī',          b:'আল-হাদি',           bn:'পথপ্রদর্শক',                       e:'The Guide, The Way' },
  { a:'اَلْبَدِيعُ',             t:'Al-Badīʿ',         b:'আল-বদী’',           bn:'অনন্য সৃষ্টিকর্তা, অতুলনীয়',        e:'The Originator, The Incomparable' },
  { a:'اَلْبَاقِي',             t:'Al-Bāqī',          b:'আল-বাকি',           bn:'চিরস্থায়ী, অনন্ত',                  e:'The Everlasting, The Infinite' },
  { a:'اَلْوَارِثُ',             t:'Al-Wāriṯ',         b:'আল-ওয়ারিস',        bn:'উত্তরাধিকারী',                     e:'The Heir, The Inheritor of All' },
  { a:'اَلرَّشِيدُ',             t:'Ar-Rashīd',        b:'আর-রশীদ',          bn:'সঠিক পথের পথপ্রদর্শক',              e:'The Guide to the Right Path' },
  { a:'اَلصَّبُورُ',             t:'Aṣ-Ṣabūr',         b:'আস-সাবুর',         bn:'অত্যন্ত ধৈর্যশীল',                  e:'The Patient, The Timeless' }
];

/* ───────────── favourites ───────────── */
let favs = new Set(store.get('asma-favs', []));
const saveFavs = () => store.set('asma-favs', [...favs]);

/* ───────────── render grid ───────────── */
const grid = $('#namesGrid');
const gridEmpty = $('#gridEmpty');
let filter = 'all', query = '';

function card(i) {
  const n = NAMES[i];
  const el = document.createElement('div');
  el.className = 'name-card';
  el.tabIndex = 0;
  el.dataset.i = i;
  el.innerHTML =
    `<span class="n-idx">${fmt(i + 1)}</span>` +
    (favs.has(i) ? '<span class="n-fav">★</span>' : '') +
    `<div class="n-ar" lang="ar">${n.a}</div>` +
    `<div class="n-tr" lang="${LANG}">${LANG === 'bn' ? n.b : n.t}</div>` +
    `<div class="n-bn lg-bn">${n.bn}</div>` +
    `<div class="n-en lg-en">${n.e}</div>`;
  return el;
}

function renderGrid() {
  const q = query.trim();
  const qf = fold(q);
  const list = [];
  for (let i = 0; i < NAMES.length; i++) {
    if (filter === 'fav' && !favs.has(i)) continue;
    if (q) {
      const n = NAMES[i];
      const hay = fold([n.t, n.b, n.bn, n.e, n.t.replace(/[^A-Za-z ]/g, '')].join('|'));
      if (!hay.includes(qf)) continue;
    }
    list.push(i);
  }
  lastList = list;
  grid.replaceChildren(...list.map(card));
  gridEmpty.hidden = list.length > 0;
}
renderGrid();

$('#search').addEventListener('input', e => { query = e.target.value; renderGrid(); });
$$('.filters .chip').forEach(c => c.addEventListener('click', () => {
  $$('.filters .chip').forEach(x => x.classList.remove('active'));
  c.classList.add('active');
  filter = c.dataset.filter;
  renderGrid();
}));

/* ───────────── modal ───────────── */
const modal = $('#modal');
let current = 0;

function openName(i, silent) {
  current = i;
  const n = NAMES[i];
  $('#mNum').textContent = LANG === 'bn' ? `নাম ${fmt(i + 1)}` : `Name ${i + 1}`;
  $('#mArabic').textContent = n.a;
  $('#mTrans').textContent = LANG === 'bn' ? n.b : n.t;
  $('#mTrans').lang = LANG;
  $('#mBn').textContent = n.bn;
  $('#mBn').lang = 'bn';
  $('#mEn').textContent = n.e;
  $('#mEn').lang = 'en';
  const favBtn = $('#mFav');
  favBtn.innerHTML = favs.has(i)
    ? '★ <span class="lg-bn">পছন্দের</span><span class="lg-en">Favourite</span>'
    : '☆ <span class="lg-bn">পছন্দের</span><span class="lg-en">Favourite</span>';
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  if (!silent) sayNameSpeak(i);          // 🔊 every name pronounces on open
}
function closeName() {
  modal.hidden = true;
  document.body.style.overflow = '';
}
grid.addEventListener('click', e => {
  const c = e.target.closest('.name-card');
  if (c) openName(+c.dataset.i);
});
grid.addEventListener('keydown', e => {
  if (e.key === 'Enter') { const c = e.target.closest('.name-card'); if (c) openName(+c.dataset.i); }
});
modal.addEventListener('click', e => { if (e.target.hasAttribute('data-close')) closeName(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeName(); });

$('#mFav').addEventListener('click', () => {
  favs.has(current) ? favs.delete(current) : favs.add(current);
  saveFavs(); openName(current, true); renderGrid();
  toast(favs.has(current)
    ? (LANG === 'bn' ? '★ পছন্দের তালিকায় যোগ হলো' : '★ Added to favourites')
    : (LANG === 'bn' ? '☆ পছন্দের তালিকা থেকে সরানো হলো' : '☆ Removed from favourites'));
});

/* speak a name (Web Speech API) */
function speak(text, lang = (LANG === 'bn' ? 'bn-BD' : 'en-US'), onend) {
  if (!onend && allIdx >= 0) { try { stopAll(true); } catch {} }   // manual speech interrupts “play all”
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    toast(LANG === 'bn' ? 'এই ব্রাউজারে কণ্ঠস্বর সুবিধা নেই' : 'Speech is unavailable in this browser');
    if (onend) onend();
    return;
  }
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/[ʿʾʼ]/g, '').replace(/-/g, ' ').trim());
    u.lang = lang; u.rate = .85; u.pitch = 1;
    const prefix = lang.replace('_', '-').slice(0, 2).toLowerCase();
    const vs = speechSynthesis.getVoices?.() || [];
    const v = vs.find(v => v.lang.replace('_', '-').toLowerCase().startsWith(prefix));
    if (v) { u.voice = v; u.lang = v.lang.replace('_', '-'); }
    if (onend) { u.onend = () => onend(); u.onerror = () => onend(); }
    speechSynthesis.speak(u);
  } catch { if (onend) onend(); }
}

/* Arabic human recordings for each name; no synthetic-voice fallback. */
function stopNameAudio() {
  if (!nameAudio) return;
  nameAudio.onended = nameAudio.onerror = null;
  try { nameAudio.pause(); nameAudio.removeAttribute('src'); } catch {}
  nameAudio = null;
}
function sayNameSpeak(i, onend) {
  if (!onend && allIdx >= 0) stopAll(true);
  stopNameAudio();
  const clip = new Audio(`assets/audio/names/${NAME_VOICE}/n${String(i + 1).padStart(2, '0')}.mp3`);
  nameAudio = clip;
  let finished = false;
  const finish = ok => {
    if (finished || nameAudio !== clip) return;
    finished = true;
    nameAudio = null;
    if (!ok) {
      const message = localize(
        'নির্বাচিত আরবি কণ্ঠের রেকর্ডিং পাওয়া যায়নি।',
        'The selected Arabic voice recording is missing.'
      );
      if (allIdx >= 0) stopAll(true);
      toast(message);
      return;
    }
    if (onend) onend();
  };
  clip.onended = () => finish(true);
  clip.onerror = () => finish(false);
  clip.play().catch(() => finish(false));
}
$('#mSpeak').addEventListener('click', () => sayNameSpeak(current));

/* ═══════════════════════════════════════════════════════════
   TASBIH / DHIKR COUNTER
   ═══════════════════════════════════════════════════════════ */
const PHRASE_EN = [
  'Glory be to Allah',
  'All praise is for Allah',
  'Allah is the Greatest',
  'I seek forgiveness from Allah',
  'There is no god but Allah',
  'O Allah, send blessings upon Muhammad'
];
const PHRASES = [
  { ar:'سُبْحَانَ ٱللَّهِ',        tr:'Subhānallāh',        bnTr:'সুবহানাল্লাহ',                  bn:'আল্লাহ পবিত্র' },
  { ar:'ٱلْحَمْدُ لِلَّهِ',       tr:'Alḥamdulillāh',      bnTr:'আলহামদুলিল্লাহ',                bn:'সকল প্রশংসা আল্লাহর জন্য' },
  { ar:'ٱللَّهُ أَكْبَرُ',        tr:'Allāhu akbar',       bnTr:'আল্লাহু আকবার',                  bn:'আল্লাহই সর্বশ্রেষ্ঠ' },
  { ar:'أَسْتَغْفِرُ ٱللَّهَ',    tr:'Astaghfirullāh',     bnTr:'আস্তাগফিরুল্লাহ',                bn:'আল্লাহর নিকট ক্ষমা চাই' },
  { ar:'لَا إِلَٰهَ إِلَّا ٱللَّهُ', tr:'Lā ilāha illallāh', bnTr:'লা ইলাহা ইল্লাল্লাহ',             bn:'আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই' },
  { ar:'ٱللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ', tr:'Allāhumma ṣalli ʿalā Muḥammad', bnTr:'আল্লাহুম্মা সাল্লি আলা মুহাম্মদ', bn:'নবীজির উপর সালাত পাঠ' }
];

const tState = store.get('asma-tasbih', { count: 0, target: 33, laps: 0, phrase: 0 });
const countEl = $('#count');
const lapsEl  = $('#laps');
const ringFill= $('#ringFill');
const tapArea = $('#tapArea');
const CIRC = 2 * Math.PI * 98;

function paintTasbih() {
  countEl.textContent = fmt(tState.count);
  lapsEl.textContent  = fmt(tState.laps);
  const inT = tState.target ? (tState.count % tState.target) : 0;
  const f = (tState.count > 0 && inT === 0) ? 1 : inT / tState.target;
  ringFill.style.strokeDashoffset = (CIRC * (1 - f)).toFixed(2);
  $$('#targetRow .chip').forEach(c => c.classList.toggle('active', +c.dataset.target === tState.target));
  const p = PHRASES[tState.phrase] || PHRASES[0];
  $('#phraseAr').textContent = p.ar;
  $('#phraseTr').textContent = LANG === 'bn' ? p.bnTr : p.tr;
  $('#phraseTr').lang = LANG;
  $('#phraseBn').textContent = LANG === 'bn' ? p.bn : (PHRASE_EN[tState.phrase] || p.tr);
  $('#phraseBn').lang = LANG;
  $$('#phrasePicker .chip').forEach((c, i) => {
    c.textContent = LANG === 'bn' ? PHRASES[i].bnTr : PHRASES[i].tr;
    c.classList.toggle('active', i === tState.phrase);
  });
}

/* phrase picker */
const picker = $('#phrasePicker');
PHRASES.forEach((p, i) => {
  const b = document.createElement('button');
  b.className = 'chip' + (i === tState.phrase ? ' active' : '');
  b.textContent = p.tr;
  b.addEventListener('click', () => { tState.phrase = i; store.set('asma-tasbih', tState); paintTasbih(); });
  picker.appendChild(b);
});

$('#btnPhrase').addEventListener('click', () => {
  const p = PHRASES[tState.phrase] || PHRASES[0];
  const text = LANG === 'bn' ? p.bn : (PHRASE_EN[tState.phrase] || p.tr);
  speak(text, LANG === 'bn' ? 'bn-BD' : 'en-US');
});

/* targets */
$$('#targetRow .chip').forEach(c => c.addEventListener('click', () => {
  tState.target = +c.dataset.target;
  store.set('asma-tasbih', tState);
  paintTasbih();
}));

/* tap = count one */
function tap() {
  tState.count++;
  if (tState.target && tState.count % tState.target === 0) {
    tState.laps++;
    chime();
    ringFill.style.animation = 'none'; void ringFill.offsetWidth;
    ringFill.style.animation = 'ringFlash .7s ease';
    toast(LANG === 'bn' ? `${fmt(tState.target)} সম্পূর্ণ! ✓` : `${fmt(tState.target)} complete ✓`);
  } else {
    tick();
  }
  tapArea.classList.add('tap');
  setTimeout(() => tapArea.classList.remove('tap'), 120);
  countEl.style.animation = 'none'; void countEl.offsetWidth;
  countEl.style.animation = 'countPulse .3s ease';
  store.set('asma-tasbih', tState);
  paintTasbih();
}
tapArea.addEventListener('click', tap);

$('#btnReset').addEventListener('click', () => {
  tState.count = 0; tState.laps = 0;
  store.set('asma-tasbih', tState);
  paintTasbih();
  toast(LANG === 'bn' ? '↺ কাউন্টার রিসেট হয়েছে' : '↺ Counter reset');
});

paintTasbih();

/* ═══════════════════════════════════════════════════════════
   🌐 SITE LANGUAGE + Arabic name-voice selection
   ═══════════════════════════════════════════════════════════ */
function syncNameVoiceControl() {
  $$('.voice-toggle').forEach(group => group.setAttribute('aria-label', localize('আরবি নামের কণ্ঠস্বর', 'Arabic name voice')));
  $$('.voice-toggle button').forEach(button => {
    const active = button.dataset.voice === NAME_VOICE;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-label', button.dataset.voice === 'female'
      ? localize('নারী কণ্ঠ', 'Female voice')
      : localize('পুরুষ কণ্ঠ', 'Male voice'));
  });
}
function setNameVoice(next, persist = true) {
  next = next === 'female' ? 'female' : 'male';
  if (next === NAME_VOICE) return;
  NAME_VOICE = next;
  if (allIdx >= 0) stopAll(true);
  else stopNameAudio();
  syncNameVoiceControl();
  if (persist) store.set('asma-name-voice', NAME_VOICE);
}

function applyLang() {
  document.documentElement.lang = LANG;
  document.documentElement.dataset.lang = LANG;
  document.title = localize('৯৯ সুন্দর নাম · আল্লাহর নামের ধিকর', 'The 99 Beautiful Names of Allah');
  $('#pageDescription').content = localize(
    'আল্লাহর ৯৯টি সুন্দর নাম, বাংলা অর্থ, ধিকর ও তসবিহ কাউন্টার।',
    'Explore the 99 Beautiful Names of Allah with meanings, dhikr and a tasbih counter.'
  );
  CINE.lang = LANG;
  $$('.lang-toggle').forEach(group => group.setAttribute('aria-label', localize('ওয়েবসাইটের ভাষা', 'Website language')));
  $$('.lang-toggle button').forEach(b => b.classList.toggle('active', b.dataset.ui === LANG));
  syncNameVoiceControl();
  $('#search').placeholder = localize(
    'খুঁজুন… যেমন: রহমান / Rahman / merciful',
    'Search… e.g. Rahman / mercy / রহমান'
  );
  $$('#targetRow .chip').forEach(c => { c.textContent = fmt(+c.dataset.target); });
  $('#tapArea').setAttribute('aria-label', localize('তসবিহ গণনা করুন', 'Count a dhikr'));
  $('img[alt]').alt = localize('প্রার্থনার জপমালা', 'Prayer beads');
  $('#modal .modal-close').setAttribute('aria-label', localize('বন্ধ করুন', 'Close'));
  syncCineControls();
  renderGrid();
  paintTasbih();
  showScene(CINE.scene);
  if (!modal.hidden) openName(current, true);
  store.set('asma-lang', LANG);
}

function setLanguage(next, notify = false) {
  next = next === 'en' ? 'en' : 'bn';
  if (next === LANG) return;
  const scene = CINE.scene;
  const wasPlaying = CINE.playing;
  const time = audio.currentTime && audio.duration ? audio.currentTime : 0;
  const restartNarration = CINE.started && scene >= 1 && scene <= 3;
  LANG = next;
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  if (allIdx >= 0) stopAll(true);
  applyLang();
  if (restartNarration) playSceneFrom(scene, time, wasPlaying);
  if (notify) toast(localize('🌐 ভাষা: বাংলা', '🌐 Language: English'));
}

$$('.lang-toggle button').forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.ui, true)));
$$('.voice-toggle button').forEach(b => b.addEventListener('click', () => setNameVoice(b.dataset.voice)));
window.addEventListener('storage', e => {
  if (e.key === 'asma-lang') {
    const nextLang = store.get('asma-lang', 'bn') === 'en' ? 'en' : 'bn';
    if (nextLang !== LANG) setLanguage(nextLang);
  }
  if (e.key === 'asma-name-voice') {
    const nextVoice = store.get('asma-name-voice', 'male') === 'female' ? 'female' : 'male';
    if (nextVoice !== NAME_VOICE) setNameVoice(nextVoice, false);
  }
});

/* ═══════════════════════════════════════════════════════════
   🔊 PLAY ALL NAMES — every one of the 99 pronounced in order
   ═══════════════════════════════════════════════════════════ */
const btnAll     = $('#btnPlayAll');
const btnStopAll = $('#btnStopAll');
const nowEl      = $('#playAllNow');

function stopAll(silent) {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  stopNameAudio();
  allIdx = -1;
  nowEl.textContent = '';
  btnStopAll.hidden = true;
  btnAll.hidden = false;
  if (!silent) toast(LANG === 'bn' ? '■ থামানো হয়েছে' : '■ Stopped');
}
function playNextName() {
  if (allIdx < 0) return;
  if (allIdx >= allList.length) {
    stopAll(true);
    toast(LANG === 'bn' ? '✓ ৯৯টি নাম শেষপর্যন্ত শোনা হয়েছে' : '✓ All 99 names played');
    return;
  }
  const i = allList[allIdx];
  const n = NAMES[i];
  nowEl.innerHTML = `<span class="idx">${fmt(i + 1)}/${fmt(allList.length)}</span><span class="ar">${n.a}</span>${LANG === 'bn' ? n.b : n.t}`;
  sayNameSpeak(i, () => {
    if (allIdx < 0) return;
    allIdx++;
    setTimeout(playNextName, 240);
  });
}
btnAll.addEventListener('click', () => {
  allList = lastList.length ? [...lastList] : NAMES.map((_, i) => i);
  if (!allList.length) return;
  allIdx = 0;
  btnAll.hidden = true;
  btnStopAll.hidden = false;
  playNextName();
});
btnStopAll.addEventListener('click', () => stopAll(false));

applyLang();   // apply the saved language on load

/* voices load async in some browsers */
if ('speechSynthesis' in window) speechSynthesis.getVoices();
