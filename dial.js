/* ═══ 99 Names of Allah — the dial ═══ */
'use strict';

/* [English transliteration, Arabic name, বাংলা transliteration, বাংলা অর্থ, English meaning] */
const D = [
['Ar-Rahmān','ٱلرَّحْمَٰنُ','আর-রহমান','পরম করুণাময়','The Most Gracious'],
['Ar-Rahīm','ٱلرَّحِيمُ','আর-রহীম','অতি দয়ালু','The Most Merciful'],
['Al-Malik','ٱلْمَلِكُ','আল-মালিক','সার্বভৌম রাজা','The King, The Sovereign'],
['Al-Quddūs','ٱلْقُدُّوسُ','আল-কুদ্দুস','পবিত্রতম','The Most Holy'],
['As-Salām','ٱلسَّلَامُ','আস-সালাম','শান্তির উৎস','The Source of Peace'],
['Al-Mu’min','ٱلْمُؤْمِنُ','আল-মু’মিন','নিরাপত্তা ও বিশ্বাস প্রদানকারী','The Granter of Security'],
['Al-Muhaymin','ٱلْمُهَيْمِنُ','আল-মুহাইমিন','রক্ষাকারী ও পর্যবেক্ষক','The Guardian, The Overseer'],
['Al-ʿAzīz','ٱلْعَزِيزُ','আল-আজিজ','পরাক্রমশালী','The Almighty, The Mighty'],
['Al-Jabbār','ٱلْجَبَّارُ','আল-জব্বার','প্রবল ও জবরদস্তির স্বামী','The Compeller, The Omnipotent'],
['Al-Mutakabbir','ٱلْمُتَكَبِّرُ','আল-মুতাকাব্বির','মহান ও উন্নত','The Supreme, The Majestic'],
['Al-Khāliq','ٱلْخَالِقُ','আল-খালিক','সৃষ্টিকর্তা','The Creator'],
['Al-Bāriʾ','ٱلْبَارِئُ','আল-বারি’','সৃষ্টি রচয়িতা','The Maker, The Evolver'],
['Al-Muṣawwir','ٱلْمُصَوِّرُ','আল-মুসাওয়ির','আকৃতিদাতা','The Fashioner, The Designer'],
['Al-Ghaffār','ٱلْغَفَّارُ','আল-গাফফার','পরম ক্ষমাকারী','The Absolute Forgiver'],
['Al-Qahhār','ٱلْقَهَّارُ','আল-কাহহার','সর্বজয়ী','The Subduer, The Vanquisher'],
['Al-Wahhāb','ٱلْوَهَّابُ','আল-ওয়াহহাব','নিঃশর্ত প্রদানকারী','The Supreme Bestower'],
['Ar-Razzāq','ٱلرَّزَّاقُ','আর-রয্জাক','রিজিকদাতা, সরবরাহকারী','The Provider, The Sustainer'],
['Al-Fattāḥ','ٱلْفَتَّاحُ','আল-ফাত্তাহ','বিজয় ও সমাধানের দ্বার খোলারকারী','The Opener, The Judge'],
['Al-ʿAlīm','ٱلْعَلِيمُ','আল-আলিম','সর্বজ্ঞ','The All-Knowing'],
['Al-Qābiḍ','ٱلْقَابِضُ','আল-কাবিদ','সংকুচিতকারী, রোধকারী','The Withholder, The Restrainer'],
['Al-Bāsiṭ','ٱلْبَاسِطُ','আল-বাসিত','প্রসারিতকারী, প্রদানকারী','The Extender, The Expander'],
['Al-Khāfiḍ','ٱلْخَافِضُ','আল-খাফিদ','অবনতিকারী, নত করারকারী','The Abaser, The Reducer'],
['Ar-Rāfiʿ','ٱلرَّافِعُ','আর-রাফি’','উন্নীতকারী, মর্যাদা দানকারী','The Exalter, The Elevator'],
['Al-Muʿizz','ٱلْمُعِزُّ','আল-মু’যিৎ','সম্মান প্রদানকারী','The Giver of Honour'],
['Al-Muḏill','ٱلْمُذِلُّ','আল-মুযিল্ল','অপমানকারী, লাঞ্ছিতকারী','The Giver of Dishonour'],
['As-Samīʿ','ٱلسَّمِيعُ','আস-সামি’','সর্বশ্রোতা','The All-Hearing'],
['Al-Baṣīr','ٱلْبَصِيرُ','আল-বাসির','সর্বদর্শী','The All-Seeing'],
['Al-Ḥakam','ٱلْحَكَمُ','আল-হাকাম','বিচারক, সিদ্ধান্তদাতা','The Judge, The Arbitrator'],
['Al-ʿAdl','ٱلْعَدْلُ','আল-আদল','ন্যায়পরায়ণ','The Absolutely Just'],
['Al-Laṭīf','ٱللَّطِيفُ','আল-লাতিফ','সূক্ষ্ম ও সদয়','The Subtly Kind, The Gentle'],
['Al-Khabīr','ٱلْخَبِيرُ','আল-খাবির','সুবিজ্ঞ','The All-Aware'],
['Al-Ḥalīm','ٱلْحَلِيمُ','আল-হালিম','ধৈর্যশীল, ক্ষমাশীল','The Forbearing, The Indulgent'],
['Al-ʿAẓīm','ٱلْعَظِيمُ','আল-আজিম','মহান ও চিরমহিমান্বিত','The Most Great, The Magnificent'],
['Al-Ghafūr','ٱلْغَفُورُ','আল-গাফুর','প্রায়শ ক্ষমাকারী','The Oft-Forgiving'],
['Ash-Shakūr','ٱلشَّكُورُ','আশ-শাকুর','কৃতজ্ঞ, পুরস্কার বাড়ানোরকারী','The Appreciative, The Grateful'],
['Al-ʿAliyy','ٱلْعَلِيُّ','আল-আলিয়্য','সর্বোচ্চ, চিরউন্নত','The Most High, The Sublime'],
['Al-Kabīr','ٱلْكَبِيرُ','আল-কাবীর','সর্বমহান','The Greatest, The Most Great'],
['Al-Ḥafīẓ','ٱلْحَفِيظُ','আল-হাফিজ','রক্ষাকারী, সংরক্ষক','The Preserver, The Protector'],
['Al-Muqīt','ٱلْمُقِيتُ','আল-মুকীত','পুষ্টিদাতা, রক্ষক','The Nourisher, The Feeder'],
['Al-Ḥasīb','ٱلْحَسِيبُ','আল-হাসিব','হিসাবকর্তা, যথেষ্টকারী','The Ever-Reckoner, The Sufficient'],
['Al-Jalīl','ٱلْجَلِيلُ','আল-জলিল','মহিমান্বিত','The Majestic, The Grand'],
['Al-Karīm','الْكَرِيمُ','আল-কারিম','দানশীল, মহান','The Most Generous, The Noble'],
['Ar-Raqīb','ٱلرَّقِيبُ','আর-রাকীব','নজরদার, পর্যবেক্ষক','The Watchful, The Observer'],
['Al-Mujīb','ٱلْمُجِيبُ','আল-মুজীব','দোয়া কবুলকারী','The Responsive, The Answerer'],
['Al-Wāsiʿ','ٱلْوَاسِعُ','আল-ওয়াসি’','বিস্তৃত, সর্বব্যাপী','The Vast, The All-Encompassing'],
['Al-Ḥakīm','ٱلْحَكِيمُ','আল-হাকীম','প্রজ্ঞাবান','The Most Wise'],
['Al-Wadūd','ٱلْوَدُودُ','আল-ওদুদ','অতি স্নেহশীল','The Most Loving, The Affectionate'],
['Al-Majīd','ٱلْمَجِيدُ','আল-মাজীদ','মহিমান্বিত, সম্মানিত','The Most Glorious, The Illustrious'],
['Al-Bāʿiṯ','ٱلْبَاعِثُ','আল-বায়িস','পুনরুত্থানদাতা','The Resurrector, The Awakener'],
['Ash-Shahīd','ٱلشَّهِيدُ','আশ-শাহীদ','সর্বসাক্ষী','The Witness, The Testifier'],
['Al-Ḥaqq','ٱلْحَقُّ','আল-হাক্ক','সত্য ও প্রকৃত','The Absolute Truth, The Reality'],
['Al-Wakīl','ٱلْوَكِيلُ','আল-ওকীল','নির্ভরযোগ্য পৃষ্ঠপোষক','The Trustee, The Guardian'],
['Al-Qawiyy','ٱلْقَوِيُّ','আল-কাবীয়্য','পরাক্রমশালী','The All-Strong'],
['Al-Matīn','ٱلْمَتِينُ','আল-মাতীন','দৃঢ় ও অটল','The Firm, The Steadfast'],
['Al-Waliyy','ٱلْوَلِيُّ','আল-ওয়ালিয়্য','বন্ধু ও অভিভাবক','The Protecting Friend, The Helper'],
['Al-Ḥamīd','ٱلْحَمِيدُ','আল-হামীদ','সকল প্রশংসার যোগ্য','The All-Praiseworthy'],
['Al-Muḥsī','ٱلْمُحْصِىُ','আল-মুহসী','গণক, পরিমাপকারী','The Accounter, The Numberer'],
['Al-Mubdiʾ','ٱلْمُبْدِئُ','আল-মুবদি’','সূচনাকারী, উদ্ভাবক','The Originator, The Initiator'],
['Al-Muʿīd','ٱلْمُعِيدُ','আল-মু’ঈদ','পুনরুদ্ধারকারী','The Restorer, The Reinstate'],
['Al-Muḥyī','ٱلْمُحْيِي','আল-মুহ্‌য়ী','জীবনদাতা','The Giver of Life'],
['Al-Mumīt','ٱلْمُمِيتُ','আল-মুমীত','মৃত্যুদাতা','The Bringer of Death'],
['Al-Ḥayy','ٱلْحَىُّ','আল-হায়্য','চিরজীবী','The Ever-Living'],
['Al-Qayyūm','ٱلْقَيُّومُ','আল-কাইয়্যুম','স্বয়ংস্থিত, নিজেই সমর্থ','The Self-Subsisting, The Sustainer'],
['Al-Wājid','ٱلْوَاجِدُ','আল-ওয়াজিদ','পাওয়া যায় এমন, লাভকারী','The Perceiver, The Finder'],
['Al-Mājid','ٱلْمَاجِدُ','আল-মাজিদ','মহিমাময়, সম্মানজনক','The Illustrious, The Magnificent'],
['Al-Wāḥid','ٱلْوَاحِدُ','আল-ওয়াহিদ','একক, অদ্বিতীয়','The One, The Unique'],
['Al-ʾAḥad','ٱلْأَحَدُ','আল-আহাদ','সম্পূর্ণ একক, অবিভাজ্য','The One, The Indivisible'],
['Aṣ-Ṣamad','ٱلصَّمَدُ','আস-সামাদ','চিরস্থায়ী, সর্বনির্ভর','The Eternal Refuge, The Self-Sufficient'],
['Al-Qādir','ٱلْقَادِرُ','আল-কাদির','সর্বশক্তিমান','The All-Powerful'],
['Al-Muqtadir','ٱلْمُقْتَدِرُ','আল-মুকতাদির','সর্ব-নির্ধারক, প্রবল','The All-Dominant, The Determiner'],
['Al-Muqaddim','ٱلْمُقَدِّمُ','আল-মুকাদ্দিম','অগ্রসারক, এগিয়ে আনারকারী','The Expediter, He Who Brings Forward'],
['Al-Muʾakhkhir','ٱلْمُؤَخِّرُ','আল-মুআখখির','বিলম্বকারী, পশ্চাদসারক','The Delayer, He Who Puts Far Away'],
['Al-ʾAwwal','ٱلْأَوَّلُ','আল-আওয়াল','প্রথম, আদিহীন','The First, The Beginning-less'],
['Al-ʾĀkhir','اَلْآخِرُ','আল-আখির','শেষ, চিরন্তন','The Last, The Endless'],
['Aẓ-Ẓāhir','ٱلظَّاهِرُ','আয-যাহির','প্রকাশিত, বাহ্য','The Manifest, The Evident'],
['Al-Bāṭin','ٱلْبَاطِنُ','আল-বাতিন','গোপন, অন্তর্নিহিত','The Hidden, The Inner'],
['Al-Wali','ٱلْوَالِي','আল-ওয়ালি','পৃষ্ঠপোষক, শাসনকর্তা','The Patron, The Governing Lord'],
['Al-Mutaʿālī','ٱلْمُتَعَالِي','আল-মুতা’আলি','সর্বোচ্চ মহিমান্বিত','The Supremely Exalted'],
['Al-Barr','ٱلْبَرُّ','আল-বার্র','উপকারী, দয়ার উৎস','The Source of Goodness, The Beneficent'],
['At-Tawwāb','ٱلتَّوَّابُ','আত-তাওয়াব','অনুতপ্ত গ্রহণকারী','The Ever-Accepting of Repentance'],
['Al-Muntaqim','ٱلْمُنْتَقِمُ','আল-মুনতাকিম','অত্যাচারীর প্রতিশোধী','The Avenger of the Wrong'],
['Al-ʿAfuww','اَلْعَفُوُّ','আল-আফুয়্য','ক্ষমাকারী, মুছে দেয় এমন','The Pardoner, The Effacer'],
['Ar-Raʾūf','اَلرَّؤُوفُ','আর-রআফ','অতি সদয়, করুণাময়','The Very Kind, The Compassionate'],
['Mālik al-Mulk','مَـٰلِكُ ٱلْمُلْكِ','মালিকুল মুলক','রাজ্যের স্বামী','The Owner of All Sovereignty'],
['Ḏhū l-Jalāli wa-l-ʾIkrām','ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ','যুল জালালি ওয়াল ইকরাম','মহিমা ও সম্মানের ধনী','The Lord of Majesty and Honour'],
['Al-Muqsiṭ','اَلْمُقْسِطُ','আল-মুকসিত','ন্যায়পরায়ণ, সুষম বিচারকারী','The Equitable, The Just'],
['Al-Jāmiʿ','اَلْجَامِعُ','আল-জামি’','সমবেতকারী, ঐক্য সাধনকারী','The Gatherer, The Unifier'],
['Al-Ghāniyy','ٱلْغَنِيُّ','আল-গানিয়্য','অভাবহীন, স্বয়ংসম্পন্ন','The Self-Sufficient, The Rich'],
['Al-Mughniyy','اَلْمُغْنِيُّ','আল-মুগনিয়্য','সমৃদ্ধকারী, মুক্তিদাতা','The Enricher, The Emancipator'],
['Al-Māniʿ','اَلْمَانِعُ','আল-মানি’','প্রতিরোধক, বাধাদাতা','The Preventer, The Withholder'],
['Aḍ-Ḍār','اَلضَّارُ','আয-যার','পরীক্ষার জন্য ক্ষতিকর','The Distressor, The Harm-Bringer'],
['An-Nāfiʿ','اَلنَّافِعُ','আন-নাফি’','উপকারী, কল্যাণকারী','The Benefactor, The Source of Good'],
['An-Nūr','اَلنُّورُ','আন-নূর','আলো','The Light'],
['Al-Hādī','اَلْهَادِي','আল-হাদি','পথপ্রদর্শক','The Guide, The Way'],
['Al-Badīʿ','اَلْبَدِيعُ','আল-বদী’','অনন্য সৃষ্টিকর্তা, অতুলনীয়','The Originator, The Incomparable'],
['Al-Bāqī','اَلْبَاقِي','আল-বাকি','চিরস্থায়ী, অনন্ত','The Everlasting, The Infinite'],
['Al-Wāriṯ','اَلْوَارِثُ','আল-ওয়ারিস','উত্তরাধিকারী','The Heir, The Inheritor of All'],
['Ar-Rashīd','اَلرَّشِيدُ','আর-রশীদ','সঠিক পথের পথপ্রদর্শক','The Guide to the Right Path'],
['Aṣ-Ṣabūr','اَلصَّبُورُ','আস-সাবুর','অত্যন্ত ধৈর্যশীল','The Patient, The Timeless'],
];

const N = D.length;
const STEP = 360 / N;
const dial = document.getElementById('dial');
const wheel = document.getElementById('wheel');
const ticksBox = document.getElementById('ticks');
const nm = document.getElementById('nm');
const mn = document.getElementById('mn');
const autoPlayBtn = document.getElementById('autoPlayBtn');
const autoStatus = document.getElementById('autoStatus');
const stressVal = document.getElementById('stressVal');
const stressFill = document.getElementById('stressFill');

const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
let LANG = store.get('asma-lang', 'bn') === 'en' ? 'en' : 'bn';
let NAME_VOICE = store.get('asma-name-voice', 'male') === 'female' ? 'female' : 'male';
const fmt = n => LANG === 'bn' ? String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[+d]) : String(n);
const localize = (bn, en) => LANG === 'bn' ? bn : en;

let rot = 0;
let current = 3;                    // Al-Quddūs
let nameAudio = null;
let autoPlaying = false;
let autoCount = 0;
let autoTimer = null;
let autoRun = 0;
let playbackRun = 0;

/* ─── persistence: which names have been heard ─── */
const savedHeard = store.get('dial-heard', []);
let heard = new Set(
  (Array.isArray(savedHeard) ? savedHeard : [])
    .filter(v => Number.isInteger(v) && v >= 0 && v < N)
);

function paintStress() {
  const remaining = Math.max(0, N - heard.size);
  stressVal.textContent = fmt(remaining);
  stressFill.style.width = (remaining / N) * 100 + '%';
  stressFill.classList.toggle('zen', remaining === 0);
}

/* ─── build labels + ticks ─── */
const labels = [];
for (let i = 0; i < N; i++) {
  const b = document.createElement('button');
  b.className = 'lbl';
  b.type = 'button';
  b.dataset.i = i;
  b.dir = 'ltr';
  b.textContent = LANG === 'bn' ? D[i][2] : D[i][0];
  b.lang = LANG;
  b.addEventListener('click', ev => { ev.stopPropagation(); select(i, false); });
  wheel.appendChild(b);
  labels.push(b);

  const t = document.createElement('i');
  t.className = 'tick' + (i % 9 === 0 ? ' long' : '');
  ticksBox.appendChild(t);
}

function layout() {
  const size = dial.clientWidth;
  const Rl = size * 0.415;
  const Rt = size * 0.478;
  labels.forEach((el, i) => {
    const angle = i * STEP;
    const r = (i % 2 === 0) ? Rl : Rl - size * 0.055;
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
  const name = D[current];
  nm.textContent = LANG === 'bn' ? name[2] : name[0];
  nm.lang = LANG;
  mn.textContent = LANG === 'bn' ? name[3] : name[4];
  mn.lang = LANG;
  labels.forEach((el, i) => {
    el.textContent = LANG === 'bn' ? D[i][2] : D[i][0];
    el.lang = LANG;
    el.setAttribute('aria-label', LANG === 'bn'
      ? `নাম ${fmt(i + 1)}: ${D[i][2]}`
      : `Name ${i + 1}: ${D[i][0]}`);
    el.classList.toggle('on', i === current);
  });
}

/* ─── Arabic recordings for the selected male or female voice ─── */
function stopCurrentPlayback() {
  playbackRun++;
  if (!nameAudio) return;
  nameAudio.onplaying = nameAudio.onended = nameAudio.onerror = null;
  try { nameAudio.pause(); nameAudio.removeAttribute('src'); } catch {}
  nameAudio = null;
}

function playName(i, onComplete = null) {
  stopCurrentPlayback();
  const run = playbackRun;
  const clip = new Audio(`assets/audio/names/${NAME_VOICE}/n${String(i + 1).padStart(2, '0')}.mp3`);
  nameAudio = clip;
  let finished = false;
  const finish = () => {
    if (finished || run !== playbackRun) return;
    finished = true;
    if (nameAudio === clip) nameAudio = null;
    if (onComplete) onComplete();
  };
  const fail = () => {
    if (finished || run !== playbackRun) return;
    finished = true;
    const message = localize(
      'এই কণ্ঠের স্থানীয় রেকর্ডিং নেই। বাহ্যিক উৎসে নাম ও কণ্ঠ বেছে শুনুন।',
      'No local clip is available for this voice. Open the external source and choose the name and voice there.'
    );
    if (autoPlaying) stopAutoPlay(message, true);
    else {
      autoStatus.textContent = message;
      stopCurrentPlayback();
    }
  };
  clip.onplaying = () => { if (run === playbackRun) markHeard(i); };
  clip.onended = finish;
  clip.onerror = fail;
  clip.play().catch(fail);
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
  if (autoPlaying && !fromAuto) {
    stopAutoPlay(localize('স্বয়ংক্রিয় চালনা থামানো হয়েছে।', 'Auto play stopped.'), true);
  }
  current = ((i % N) + N) % N;
  let delta = 0;

  if (fromAuto && advanceAuto) {
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

function autoButtonLabel(playing = autoPlaying) {
  return playing
    ? localize('■ স্বয়ংক্রিয় চালনা থামান', '■ Stop Auto Play')
    : localize('▶ ৯৯টি নাম স্বয়ংক্রিয়ভাবে শুনুন', '▶ Auto Play 99 Names');
}
function stopAutoPlay(message, cancelMedia = false) {
  autoPlaying = false;
  autoRun++;
  if (autoTimer !== null) {
    clearTimeout(autoTimer);
    autoTimer = null;
  }
  if (cancelMedia) stopCurrentPlayback();
  autoPlayBtn.textContent = autoButtonLabel(false);
  autoPlayBtn.setAttribute('aria-pressed', 'false');
  autoPlayBtn.setAttribute('aria-label', localize('৯৯টি নাম স্বয়ংক্রিয়ভাবে শুনুন', 'Auto play all 99 names'));
  if (message) autoStatus.textContent = message;
}

function playAutoStep(i, run, advance = false) {
  if (!autoPlaying || run !== autoRun) return;
  select(i, false, true, advance);
  autoStatus.textContent = LANG === 'bn'
    ? `${fmt(autoCount + 1)} / ${fmt(N)} — ${D[current][2]} শোনা হচ্ছে`
    : `Playing ${autoCount + 1} of ${N} — ${D[current][0]}`;
  playName(current, () => {
    if (!autoPlaying || run !== autoRun) return;
    autoCount++;
    if (autoCount >= N) {
      heard.clear();
      store.set('dial-heard', []);
      paintStress();
      autoCount = 0;
      stopAutoPlay(localize('সব ৯৯টি নাম শোনা হয়েছে। অগ্রগতি রিসেট হয়েছে।', 'Finished all 99 names. Progress reset.'));
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
  autoPlayBtn.textContent = autoButtonLabel(true);
  autoPlayBtn.setAttribute('aria-pressed', 'true');
  autoPlayBtn.setAttribute('aria-label', localize('স্বয়ংক্রিয় চালনা থামান', 'Stop auto play'));
  playAutoStep(current, run);
}

autoPlayBtn.addEventListener('click', () => {
  if (autoPlaying) stopAutoPlay(localize('স্বয়ংক্রিয় চালনা থামানো হয়েছে।', 'Auto play stopped.'), true);
  else startAutoPlay();
});

function syncVoiceControls() {
  document.querySelectorAll('.voice-toggle').forEach(group => group.setAttribute('aria-label', localize('আরবি নামের কণ্ঠস্বর', 'Arabic name voice')));
  document.querySelectorAll('.voice-toggle button').forEach(button => {
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
  if (autoPlaying) stopAutoPlay(localize('কণ্ঠস্বর পরিবর্তিত হয়েছে।', 'Voice changed.'), true);
  else stopCurrentPlayback();
  syncVoiceControls();
  if (persist) store.set('asma-name-voice', NAME_VOICE);
}

function applyLang() {
  document.documentElement.lang = LANG;
  document.documentElement.dataset.lang = LANG;
  document.title = localize('আল্লাহর ৯৯টি সুন্দর নাম · ডায়াল', '99 Names of Allah — The Dial');
  document.getElementById('pageDescription').content = localize(
    'আল্লাহর ৯৯টি সুন্দর নাম, বাংলা উচ্চারণ ও অর্থসহ ইন্টার‌্যাকটিভ ডায়াল।',
    'An interactive dial of the 99 Beautiful Names of Allah, with English transliteration and meanings.'
  );
  document.querySelector('.site-nav').setAttribute('aria-label', localize('সাইট নেভিগেশন', 'Site navigation'));
  document.querySelector('.lang-toggle').setAttribute('aria-label', localize('ওয়েবসাইটের ভাষা', 'Website language'));
  document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.toggle('active', b.dataset.ui === LANG));
  syncVoiceControls();
  wheel.setAttribute('aria-label', localize('৯৯টি নামের ডায়াল', '99-name clock face'));
  autoPlayBtn.textContent = autoButtonLabel();
  autoPlayBtn.setAttribute('aria-pressed', autoPlaying ? 'true' : 'false');
  autoPlayBtn.setAttribute('aria-label', autoPlaying
    ? localize('স্বয়ংক্রিয় চালনা থামান', 'Stop auto play')
    : localize('৯৯টি নাম স্বয়ংক্রিয়ভাবে শুনুন', 'Auto play all 99 names'));
  if (!autoPlaying) autoStatus.textContent = localize('নির্বাচিত নাম থেকে শুরু হবে', 'Starts from the selected name');
  paintName();
  paintStress();
  store.set('asma-lang', LANG);
}

function setLanguage(next) {
  next = next === 'en' ? 'en' : 'bn';
  if (next === LANG) return;
  LANG = next;
  if (autoPlaying) {
    stopAutoPlay(localize('ভাষা পরিবর্তিত হয়েছে — স্বয়ংক্রিয় চালনা থামানো হয়েছে।', 'Language changed — auto play stopped.'), true);
  } else stopCurrentPlayback();
  applyLang();
}

document.querySelectorAll('.lang-toggle button').forEach(b => {
  b.addEventListener('click', () => setLanguage(b.dataset.ui));
});
document.querySelectorAll('.voice-toggle button').forEach(b => {
  b.addEventListener('click', () => setNameVoice(b.dataset.voice));
});
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
rot = -current * STEP;
applyRotation(0);
applyLang();
if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
