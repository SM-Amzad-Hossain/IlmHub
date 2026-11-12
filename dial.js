/* ═══ 99 Names of Allah — the dial ═══ */
'use strict';

/* [transliteration, Arabic name, বাংলা অর্থ, English meaning] */
const D = [
['Ar-Rahmān','ٱلرَّحْمَٰنُ','পরম করুণাময়','The Most Gracious'],
['Ar-Rahīm','ٱلرَّحِيمُ','অতি দয়ালু','The Most Merciful'],
['Al-Malik','ٱلْمَلِكُ','সার্বভৌম রাজা','The King, The Sovereign'],
['Al-Quddūs','ٱلْقُدُّوسُ','পবিত্রতম','The Most Holy'],
['As-Salām','ٱلسَّلَامُ','শান্তির উৎস','The Source of Peace'],
['Al-Mu’min','ٱلْمُؤْمِنُ','নিরাপত্তা ও বিশ্বাস প্রদানকারী','The Granter of Security'],
['Al-Muhaymin','ٱلْمُهَيْمِنُ','রক্ষাকারী ও পর্যবেক্ষক','The Guardian, The Overseer'],
['Al-ʿAzīz','ٱلْعَزِيزُ','পরাক্রমশালী','The Almighty, The Mighty'],
['Al-Jabbār','ٱلْجَبَّارُ','প্রবল ও জবরদস্তির স্বামী','The Compeller, The Omnipotent'],
['Al-Mutakabbir','ٱلْمُتَكَبِّرُ','মহান ও উন্নত','The Supreme, The Majestic'],
['Al-Khāliq','ٱلْخَالِقُ','সৃষ্টিকর্তা','The Creator'],
['Al-Bāriʾ','ٱلْبَارِئُ','সৃষ্টি রচয়িতা','The Maker, The Evolver'],
['Al-Muṣawwir','ٱلْمُصَوِّرُ','আকৃতিদাতা','The Fashioner, The Designer'],
['Al-Ghaffār','ٱلْغَفَّارُ','পরম ক্ষমাকারী','The Absolute Forgiver'],
['Al-Qahhār','ٱلْقَهَّارُ','সর্বজয়ী','The Subduer, The Vanquisher'],
['Al-Wahhāb','ٱلْوَهَّابُ','নিঃশর্ত প্রদানকারী','The Supreme Bestower'],
['Ar-Razzāq','ٱلرَّزَّاقُ','রিজিকদাতা, সরবরাহকারী','The Provider, The Sustainer'],
['Al-Fattāḥ','ٱلْفَتَّاحُ','বিজয় ও সমাধানের দ্বার খোলারকারী','The Opener, The Judge'],
['Al-ʿAlīm','ٱلْعَلِيمُ','সর্বজ্ঞ','The All-Knowing'],
['Al-Qābiḍ','ٱلْقَابِضُ','সংকুচিতকারী, রোধকারী','The Withholder, The Restrainer'],
['Al-Bāsiṭ','ٱلْبَاسِطُ','প্রসারিতকারী, প্রদানকারী','The Extender, The Expander'],
['Al-Khāfiḍ','ٱلْخَافِضُ','অবনতিকারী, নত করারকারী','The Abaser, The Reducer'],
['Ar-Rāfiʿ','ٱلرَّافِعُ','উন্নীতকারী, মর্যাদা দানকারী','The Exalter, The Elevator'],
['Al-Muʿizz','ٱلْمُعِزُّ','সম্মান প্রদানকারী','The Giver of Honour'],
['Al-Muḏill','ٱلْمُذِلُّ','অপমানকারী, লাঞ্ছিতকারী','The Giver of Dishonour'],
['As-Samīʿ','ٱلسَّمِيعُ','সর্বশ্রোতা','The All-Hearing'],
['Al-Baṣīr','ٱلْبَصِيرُ','সর্বদর্শী','The All-Seeing'],
['Al-Ḥakam','ٱلْحَكَمُ','বিচারক, সিদ্ধান্তদাতা','The Judge, The Arbitrator'],
['Al-ʿAdl','ٱلْعَدْلُ','ন্যায়পরায়ণ','The Absolutely Just'],
['Al-Laṭīf','ٱللَّطِيفُ','সূক্ষ্ম ও সদয়','The Subtly Kind, The Gentle'],
['Al-Khabīr','ٱلْخَبِيرُ','সুবিজ্ঞ','The All-Aware'],
['Al-Ḥalīm','ٱلْحَلِيمُ','ধৈর্যশীল, ক্ষমাশীল','The Forbearing, The Indulgent'],
['Al-ʿAẓīm','ٱلْعَظِيمُ','মহান ও চিরমহিমান্বিত','The Most Great, The Magnificent'],
['Al-Ghafūr','ٱلْغَفُورُ','প্রায়শ ক্ষমাকারী','The Oft-Forgiving'],
['Ash-Shakūr','ٱلشَّكُورُ','কৃতজ্ঞ, পুরস্কার বাড়ানোরকারী','The Appreciative, The Grateful'],
['Al-ʿAliyy','ٱلْعَلِيُّ','সর্বোচ্চ, চিরউন্নত','The Most High, The Sublime'],
['Al-Kabīr','ٱلْكَبِيرُ','সর্বমহান','The Greatest, The Most Great'],
['Al-Ḥafīẓ','ٱلْحَفِيظُ','রক্ষাকারী, সংরক্ষক','The Preserver, The Protector'],
['Al-Muqīt','ٱلْمُقِيتُ','পুষ্টিদাতা, রক্ষক','The Nourisher, The Feeder'],
['Al-Ḥasīb','ٱلْحَسِيبُ','হিসাবকর্তা, যথেষ্টকারী','The Ever-Reckoner, The Sufficient'],
['Al-Jalīl','ٱلْجَلِيلُ','মহিমান্বিত','The Majestic, The Grand'],
['Al-Karīm','الْكَرِيمُ','দানশীল, মহান','The Most Generous, The Noble'],
['Ar-Raqīb','ٱلرَّقِيبُ','নজরদার, পর্যবেক্ষক','The Watchful, The Observer'],
['Al-Mujīb','ٱلْمُجِيبُ','দোয়া কবুলকারী','The Responsive, The Answerer'],
['Al-Wāsiʿ','ٱلْوَاسِعُ','বিস্তৃত, সর্বব্যাপী','The Vast, The All-Encompassing'],
['Al-Ḥakīm','ٱلْحَكِيمُ','প্রজ্ঞাবান','The Most Wise'],
['Al-Wadūd','ٱلْوَدُودُ','অতি স্নেহশীল','The Most Loving, The Affectionate'],
['Al-Majīd','ٱلْمَجِيدُ','মহিমান্বিত, সম্মানিত','The Most Glorious, The Illustrious'],
['Al-Bāʿiṯ','ٱلْبَاعِثُ','পুনরুত্থানদাতা','The Resurrector, The Awakener'],
['Ash-Shahīd','ٱلشَّهِيدُ','সর্বসাক্ষী','The Witness, The Testifier'],
['Al-Ḥaqq','ٱلْحَقُّ','সত্য ও প্রকৃত','The Absolute Truth, The Reality'],
['Al-Wakīl','ٱلْوَكِيلُ','নির্ভরযোগ্য পৃষ্ঠপোষক','The Trustee, The Guardian'],
['Al-Qawiyy','ٱلْقَوِيُّ','পরাক্রমশালী','The All-Strong'],
['Al-Matīn','ٱلْمَتِينُ','দৃঢ় ও অটল','The Firm, The Steadfast'],
['Al-Waliyy','ٱلْوَلِيُّ','বন্ধু ও অভিভাবক','The Protecting Friend, The Helper'],
['Al-Ḥamīd','ٱلْحَمِيدُ','সকল প্রশংসার যোগ্য','The All-Praiseworthy'],
['Al-Muḥsī','ٱلْمُحْصِىُ','গণক, পরিমাপকারী','The Accounter, The Numberer'],
['Al-Mubdiʾ','ٱلْمُبْدِئُ','সূচনাকারী, উদ্ভাবক','The Originator, The Initiator'],
['Al-Muʿīd','ٱلْمُعِيدُ','পুনরুদ্ধারকারী','The Restorer, The Reinstate'],
['Al-Muḥyī','ٱلْمُحْيِي','জীবনদাতা','The Giver of Life'],
['Al-Mumīt','ٱلْمُمِيتُ','মৃত্যুদাতা','The Bringer of Death'],
['Al-Ḥayy','ٱلْحَىُّ','চিরজীবী','The Ever-Living'],
['Al-Qayyūm','ٱلْقَيُّومُ','স্বয়ংস্থিত, নিজেই সমর্থ','The Self-Subsisting, The Sustainer'],
['Al-Wājid','ٱلْوَاجِدُ','পাওয়া যায় এমন, লাভকারী','The Perceiver, The Finder'],
['Al-Mājid','ٱلْمَاجِدُ','মহিমাময়, সম্মানজনক','The Illustrious, The Magnificent'],
['Al-Wāḥid','ٱلْوَاحِدُ','একক, অদ্বিতীয়','The One, The Unique'],
['Al-ʾAḥad','ٱلْأَحَدُ','সম্পূর্ণ একক, অবিভাজ্য','The One, The Indivisible'],
['Aṣ-Ṣamad','ٱلصَّمَدُ','চিরস্থায়ী, সর্বনির্ভর','The Eternal Refuge, The Self-Sufficient'],
['Al-Qādir','ٱلْقَادِرُ','সর্বশক্তিমান','The All-Powerful'],
['Al-Muqtadir','ٱلْمُقْتَدِرُ','সর্ব-নির্ধারক, প্রবল','The All-Dominant, The Determiner'],
['Al-Muqaddim','ٱلْمُقَدِّمُ','অগ্রসারক, এগিয়ে আনারকারী','The Expediter, He Who Brings Forward'],
['Al-Muʾakhkhir','ٱلْمُؤَخِّرُ','বিলম্বকারী, পশ্চাদসারক','The Delayer, He Who Puts Far Away'],
['Al-ʾAwwal','ٱلْأَوَّلُ','প্রথম, আদিহীন','The First, The Beginning-less'],
['Al-ʾĀkhir','اَلْآخِرُ','শেষ, চিরন্তন','The Last, The Endless'],
['Aẓ-Ẓāhir','ٱلظَّاهِرُ','প্রকাশিত, বাহ্য','The Manifest, The Evident'],
['Al-Bāṭin','ٱلْبَاطِنُ','গোপন, অন্তর্নিহিত','The Hidden, The Inner'],
['Al-Wali','ٱلْوَالِي','পৃষ্ঠপোষক, শাসনকর্তা','The Patron, The Governing Lord'],
['Al-Mutaʿālī','ٱلْمُتَعَالِي','সর্বোচ্চ মহিমান্বিত','The Supremely Exalted'],
['Al-Barr','ٱلْبَرُّ','উপকারী, দয়ার উৎস','The Source of Goodness, The Beneficent'],
['At-Tawwāb','ٱلتَّوَّابُ','অনুতপ্ত গ্রহণকারী','The Ever-Accepting of Repentance'],
['Al-Muntaqim','ٱلْمُنْتَقِمُ','অত্যাচারীর প্রতিশোধী','The Avenger of the Wrong'],
['Al-ʿAfuww','اَلْعَفُوُّ','ক্ষমাকারী, মুছে দেয় এমন','The Pardoner, The Effacer'],
['Ar-Raʾūf','اَلرَّؤُوفُ','অতি সদয়, করুণাময়','The Very Kind, The Compassionate'],
['Mālik al-Mulk','مَـٰلِكُ ٱلْمُلْكِ','রাজ্যের স্বামী','The Owner of All Sovereignty'],
['Ḏhū l-Jalāli wa-l-ʾIkrām','ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ','মহিমা ও সম্মানের ধনী','The Lord of Majesty and Honour'],
['Al-Muqsiṭ','اَلْمُقْسِطُ','ন্যায়পরায়ণ, সুষম বিচারকারী','The Equitable, The Just'],
['Al-Jāmiʿ','اَلْجَامِعُ','সমবেতকারী, ঐক্য সাধনকারী','The Gatherer, The Unifier'],
['Al-Ghāniyy','ٱلْغَنِيُّ','অভাবহীন, স্বয়ংসম্পন্ন','The Self-Sufficient, The Rich'],
['Al-Mughniyy','اَلْمُغْنِيُّ','সমৃদ্ধকারী, মুক্তিদাতা','The Enricher, The Emancipator'],
['Al-Māniʿ','اَلْمَانِعُ','প্রতিরোধক, বাধাদাতা','The Preventer, The Withholder'],
['Aḍ-Ḍār','اَلضَّارُ','পরীক্ষার জন্য ক্ষতিকর','The Distressor, The Harm-Bringer'],
['An-Nāfiʿ','اَلنَّافِعُ','উপকারী, কল্যাণকারী','The Benefactor, The Source of Good'],
['An-Nūr','اَلنُّورُ','আলো','The Light'],
['Al-Hādī','اَلْهَادِي','পথপ্রদর্শক','The Guide, The Way'],
['Al-Badīʿ','اَلْبَدِيعُ','অনন্য সৃষ্টিকর্তা, অতুলনীয়','The Originator, The Incomparable'],
['Al-Bāqī','اَلْبَاقِي','চিরস্থায়ী, অনন্ত','The Everlasting, The Infinite'],
['Al-Wāriṯ','اَلْوَارِثُ','উত্তরাধিকারী','The Heir, The Inheritor of All'],
['Ar-Rashīd','اَلرَّشِيدُ','সঠিক পথের পথপ্রদর্শক','The Guide to the Right Path'],
['Aṣ-Ṣabūr','اَلصَّبُورُ','অত্যন্ত ধৈর্যশীল','The Patient, The Timeless']
];

const N = D.length;                 // 99
const STEP = 360 / N;
const dial = document.getElementById('dial');
const wheel = document.getElementById('wheel');
const ticksBox = document.getElementById('ticks');
const nm = document.getElementById('nm');
const mn = document.getElementById('mn');
const mnBn = document.getElementById('mnBn');
const autoPlayBtn = document.getElementById('autoPlayBtn');
const autoStatus = document.getElementById('autoStatus');
const stressVal = document.getElementById('stressVal');
const stressFill = document.getElementById('stressFill');

let rot = 0;                        // current wheel rotation (deg)
let current = 3;                    // default : Al-Quddus (as in the reference)
let audio = null;
let autoPlaying = false;
let autoCount = 0;
let autoTimer = null;
let autoRun = 0;

/* ─── persistence : which names have been heard ─── */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
/* validate persisted indices so corrupt storage cannot break the dial */
const savedHeard = store.get('dial-heard', []);
let heard = new Set(
  (Array.isArray(savedHeard) ? savedHeard : [])
    .filter(v => Number.isInteger(v) && v >= 0 && v < N)
);

function paintStress() {
  const stress = Math.max(0, N - heard.size);
  stressVal.textContent = stress;
  stressFill.style.width = (stress / N) * 100 + '%';
  stressFill.classList.toggle('zen', stress === 0);
}

/* ─── build labels + ticks ─── */
const labels = [];
for (let i = 0; i < N; i++) {
  const b = document.createElement('button');
  b.className = 'lbl';
  b.type = 'button';
  b.dataset.i = i;
  b.lang = 'en';
  b.dir = 'ltr';
  b.textContent = D[i][0];
  b.addEventListener('click', ev => { ev.stopPropagation(); select(i, false); });
  wheel.appendChild(b);
  labels.push(b);

  const t = document.createElement('i');
  t.className = 'tick' + (i % 9 === 0 ? ' long' : '');
  ticksBox.appendChild(t);
}

function layout() {
  const size = dial.clientWidth;
  const Rl = size * 0.415;          // label radius
  const Rt = size * 0.478;          // tick radius
  labels.forEach((el, i) => {
    const angle = i * STEP;
    const r = (i % 2 === 0) ? Rl : Rl - size * 0.055;   // two staggered rows
    // Lay each label along a radius, with its center pinned to the ring.
    el.style.transform =
      `rotate(${angle}deg) translateY(${-r}px) rotate(-90deg) translate(-50%,-50%)`;
  });
  [...ticksBox.children].forEach((el, i) => {
    const angle = i * STEP;
    el.style.transform =
      `rotate(${angle}deg) translateY(${-Rt}px) translate(-50%,-50%)`;
  });
}

/* ─── rotation ─── */
function applyRotation(duration) {
  wheel.style.transition = duration
    ? `transform ${duration}s cubic-bezier(.12,.72,.15,1)` : 'none';
  wheel.style.transform = `rotate(${rot}deg)`;
}

function paintName() {
  const [transliteration, , b, e] = D[current];
  nm.textContent = transliteration;
  mn.textContent = e;
  mnBn.textContent = b;
  labels.forEach((el, i) => el.classList.toggle('on', i === current));
}

/* ─── sound ─── */
function stopCurrentPlayback() {
  if (audio) {
    audio.onplaying = audio.onended = audio.onerror = null;
    audio.pause();
    audio = null;
  }
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch {}
  }
}

function playName(i, onComplete = null) {
  stopCurrentPlayback();
  const url = `assets/audio/names/n${String(i + 1).padStart(2, '0')}.mp3`;
  const clip = new Audio(url);
  audio = clip;
  let finished = false;
  let fallbackStarted = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    if (audio === clip) audio = null;
    if (onComplete) onComplete();
  };
  clip.onplaying = () => {
    markHeard(i);
  };
  clip.onended = finish;
  clip.onerror = () => {
    if (finished || fallbackStarted) return;
    fallbackStarted = true;
    if ('speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined') {
      try {
        const utterance = new SpeechSynthesisUtterance(D[i][1]);
        utterance.lang = 'ar-SA'; utterance.rate = .8;
        utterance.onend = finish; utterance.onerror = finish;
        const voices = window.speechSynthesis.getVoices?.() || [];
        const arabicVoice = voices.find(v => /^ar(?:[-_]|$)/i.test(v.lang || ''));
        if (arabicVoice) {
          utterance.voice = arabicVoice;
          utterance.lang = arabicVoice.lang.replace('_', '-');
        }
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
        markHeard(i);
      } catch { finish(); }
    } else finish();
  };
  clip.play().catch(() => { if (clip.onerror) clip.onerror(); });
}

function markHeard(i) {
  if (!heard.has(i)) {
    heard.add(i);
    store.set('dial-heard', [...heard]);
    paintStress();
  }
}

/* ─── select a name (spin the wheel so it lands under the needle) ─── */
function select(i, spin, fromAuto = false, advanceAuto = false) {
  if (autoPlaying && !fromAuto) stopAutoPlay('Auto play stopped.', true);
  current = ((i % N) + N) % N;
  let delta = 0;

  if (fromAuto && advanceAuto) {
    // Move one name per step instead of spinning almost a full revolution.
    rot -= STEP;
  } else {
    const desired = -current * STEP;
    delta = (((desired - rot) % 360) + 360) % 360;
    if (spin) delta += 360 * (2 + Math.floor(Math.random() * 2));
    rot += delta;
  }

  const dur = fromAuto ? .45 : spin ? 1.5 + (delta / 360) * .35 : .8;
  applyRotation(dur);
  paintName();
  if (!fromAuto) playName(current);
}

function stopAutoPlay(message, cancelMedia = false) {
  autoPlaying = false;
  autoRun++;
  if (autoTimer !== null) {
    clearTimeout(autoTimer);
    autoTimer = null;
  }
  if (cancelMedia) stopCurrentPlayback();
  autoPlayBtn.textContent = '▶ Auto Play 99 Names';
  autoPlayBtn.setAttribute('aria-pressed', 'false');
  if (message) autoStatus.textContent = message;
}

function playAutoStep(i, run, advance = false) {
  if (!autoPlaying || run !== autoRun) return;
  select(i, false, true, advance);
  autoStatus.textContent = `Playing ${autoCount + 1} of ${N} — ${D[current][0]}`;
  playName(current, () => {
    if (!autoPlaying || run !== autoRun) return;
    autoCount++;
    if (autoCount >= N) {
      heard.clear();
      store.set('dial-heard', []);
      paintStress();
      autoCount = 0;
      stopAutoPlay('Finished playing all 99 names. Progress reset.');
      return;
    }
    autoTimer = setTimeout(() => {
      autoTimer = null;
      playAutoStep((current + 1) % N, run, true);
    }, 220);
  });
}

function startAutoPlay() {
  stopCurrentPlayback();
  autoPlaying = true;
  autoCount = 0;
  const run = ++autoRun;
  autoPlayBtn.textContent = '■ Stop Auto Play';
  autoPlayBtn.setAttribute('aria-pressed', 'true');
  playAutoStep(current, run);
}

autoPlayBtn.addEventListener('click', () => {
  if (autoPlaying) stopAutoPlay('Auto play stopped.', true);
  else startAutoPlay();
});

/* wheel background click = random spin */
wheel.addEventListener('click', () => {
  select(Math.floor(Math.random() * N), true);
});
/* keyboard */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') select(current + 1, false);
  if (e.key === 'ArrowLeft') select(current - 1, false);
});

/* ─── boot ─── */
layout();
let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(layout, 120); });
rot = -current * STEP;      // park Al-Quddus under the needle, as in the reference
applyRotation(0);
paintName();
paintStress();
