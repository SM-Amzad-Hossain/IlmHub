/* ═══ 99 Names of Allah — the dial ═══ */
'use strict';

/* [transliteration, বাংলা অর্থ, English meaning] */
const D = [
['Ar-Rahmān','পরম করুণাময়','The Most Gracious'],
['Ar-Rahīm','অতি দয়ালু','The Most Merciful'],
['Al-Malik','সার্বভৌম রাজা','The King, The Sovereign'],
['Al-Quddūs','পবিত্রতম','The Most Holy'],
['As-Salām','শান্তির উৎস','The Source of Peace'],
['Al-Mu’min','নিরাপত্তা ও বিশ্বাস প্রদানকারী','The Granter of Security'],
['Al-Muhaymin','রক্ষাকারী ও পর্যবেক্ষক','The Guardian, The Overseer'],
['Al-ʿAzīz','পরাক্রমশালী','The Almighty, The Mighty'],
['Al-Jabbār','প্রবল ও জবরদস্তির স্বামী','The Compeller, The Omnipotent'],
['Al-Mutakabbir','মহান ও উন্নত','The Supreme, The Majestic'],
['Al-Khāliq','সৃষ্টিকর্তা','The Creator'],
['Al-Bāriʾ','সৃষ্টি রচয়িতা','The Maker, The Evolver'],
['Al-Muṣawwir','আকৃতিদাতা','The Fashioner, The Designer'],
['Al-Ghaffār','পরম ক্ষমাকারী','The Absolute Forgiver'],
['Al-Qahhār','সর্বজয়ী','The Subduer, The Vanquisher'],
['Al-Wahhāb','নিঃশর্ত প্রদানকারী','The Supreme Bestower'],
['Ar-Razzāq','রিজিকদাতা, সরবরাহকারী','The Provider, The Sustainer'],
['Al-Fattāḥ','বিজয় ও সমাধানের দ্বার খোলারকারী','The Opener, The Judge'],
['Al-ʿAlīm','সর্বজ্ঞ','The All-Knowing'],
['Al-Qābiḍ','সংকুচিতকারী, রোধকারী','The Withholder, The Restrainer'],
['Al-Bāsiṭ','প্রসারিতকারী, প্রদানকারী','The Extender, The Expander'],
['Al-Khāfiḍ','অবনতিকারী, নত করারকারী','The Abaser, The Reducer'],
['Ar-Rāfiʿ','উন্নীতকারী, মর্যাদা দানকারী','The Exalter, The Elevator'],
['Al-Muʿizz','সম্মান প্রদানকারী','The Giver of Honour'],
['Al-Muḏill','অপমানকারী, লাঞ্ছিতকারী','The Giver of Dishonour'],
['As-Samīʿ','সর্বশ্রোতা','The All-Hearing'],
['Al-Baṣīr','সর্বদর্শী','The All-Seeing'],
['Al-Ḥakam','বিচারক, সিদ্ধান্তদাতা','The Judge, The Arbitrator'],
['Al-ʿAdl','ন্যায়পরায়ণ','The Absolutely Just'],
['Al-Laṭīf','সূক্ষ্ম ও সদয়','The Subtly Kind, The Gentle'],
['Al-Khabīr','সুবিজ্ঞ','The All-Aware'],
['Al-Ḥalīm','ধৈর্যশীল, ক্ষমাশীল','The Forbearing, The Indulgent'],
['Al-ʿAẓīm','মহান ও চিরমহিমান্বিত','The Most Great, The Magnificent'],
['Al-Ghafūr','প্রায়শ ক্ষমাকারী','The Oft-Forgiving'],
['Ash-Shakūr','কৃতজ্ঞ, পুরস্কার বাড়ানোরকারী','The Appreciative, The Grateful'],
['Al-ʿAliyy','সর্বোচ্চ, চিরউন্নত','The Most High, The Sublime'],
['Al-Kabīr','সর্বমহান','The Greatest, The Most Great'],
['Al-Ḥafīẓ','রক্ষাকারী, সংরক্ষক','The Preserver, The Protector'],
['Al-Muqīt','পুষ্টিদাতা, রক্ষক','The Nourisher, The Feeder'],
['Al-Ḥasīb','হিসাবকর্তা, যথেষ্টকারী','The Ever-Reckoner, The Sufficient'],
['Al-Jalīl','মহিমান্বিত','The Majestic, The Grand'],
['Al-Karīm','দানশীল, মহান','The Most Generous, The Noble'],
['Ar-Raqīb','নজরদার, পর্যবেক্ষক','The Watchful, The Observer'],
['Al-Mujīb','দোয়া কবুলকারী','The Responsive, The Answerer'],
['Al-Wāsiʿ','বিস্তৃত, সর্বব্যাপী','The Vast, The All-Encompassing'],
['Al-Ḥakīm','প্রজ্ঞাবান','The Most Wise'],
['Al-Wadūd','অতি স্নেহশীল','The Most Loving, The Affectionate'],
['Al-Majīd','মহিমান্বিত, সম্মানিত','The Most Glorious, The Illustrious'],
['Al-Bāʿiṯ','পুনরুত্থানদাতা','The Resurrector, The Awakener'],
['Ash-Shahīd','সর্বসাক্ষী','The Witness, The Testifier'],
['Al-Ḥaqq','সত্য ও প্রকৃত','The Absolute Truth, The Reality'],
['Al-Wakīl','নির্ভরযোগ্য পৃষ্ঠপোষক','The Trustee, The Guardian'],
['Al-Qawiyy','পরাক্রমশালী','The All-Strong'],
['Al-Matīn','দৃঢ় ও অটল','The Firm, The Steadfast'],
['Al-Waliyy','বন্ধু ও অভিভাবক','The Protecting Friend, The Helper'],
['Al-Ḥamīd','সকল প্রশংসার যোগ্য','The All-Praiseworthy'],
['Al-Muḥsī','গণক, পরিমাপকারী','The Accounter, The Numberer'],
['Al-Mubdiʾ','সূচনাকারী, উদ্ভাবক','The Originator, The Initiator'],
['Al-Muʿīd','পুনরুদ্ধারকারী','The Restorer, The Reinstate'],
['Al-Muḥyī','জীবনদাতা','The Giver of Life'],
['Al-Mumīt','মৃত্যুদাতা','The Bringer of Death'],
['Al-Ḥayy','চিরজীবী','The Ever-Living'],
['Al-Qayyūm','স্বয়ংস্থিত, নিজেই সমর্থ','The Self-Subsisting, The Sustainer'],
['Al-Wājid','পাওয়া যায় এমন, লাভকারী','The Perceiver, The Finder'],
['Al-Mājid','মহিমাময়, সম্মানজনক','The Illustrious, The Magnificent'],
['Al-Wāḥid','একক, অদ্বিতীয়','The One, The Unique'],
['Al-ʾAḥad','সম্পূর্ণ একক, অবিভাজ্য','The One, The Indivisible'],
['Aṣ-Ṣamad','চিরস্থায়ী, সর্বনির্ভর','The Eternal Refuge, The Self-Sufficient'],
['Al-Qādir','সর্বশক্তিমান','The All-Powerful'],
['Al-Muqtadir','সর্ব-নির্ধারক, প্রবল','The All-Dominant, The Determiner'],
['Al-Muqaddim','অগ্রসারক, এগিয়ে আনারকারী','The Expediter, He Who Brings Forward'],
['Al-Muʾakhkhir','বিলম্বকারী, পশ্চাদসারক','The Delayer, He Who Puts Far Away'],
['Al-ʾAwwal','প্রথম, আদিহীন','The First, The Beginning-less'],
['Al-ʾĀkhir','শেষ, চিরন্তন','The Last, The Endless'],
['Aẓ-Ẓāhir','প্রকাশিত, বাহ্য','The Manifest, The Evident'],
['Al-Bāṭin','গোপন, অন্তর্নিহিত','The Hidden, The Inner'],
['Al-Wali','পৃষ্ঠপোষক, শাসনকর্তা','The Patron, The Governing Lord'],
['Al-Mutaʿālī','সর্বোচ্চ মহিমান্বিত','The Supremely Exalted'],
['Al-Barr','উপকারী, দয়ার উৎস','The Source of Goodness, The Beneficent'],
['At-Tawwāb','অনুতপ্ত গ্রহণকারী','The Ever-Accepting of Repentance'],
['Al-Muntaqim','অত্যাচারীর প্রতিশোধী','The Avenger of the Wrong'],
['Al-ʿAfuww','ক্ষমাকারী, মুছে দেয় এমন','The Pardoner, The Effacer'],
['Ar-Raʾūf','অতি সদয়, করুণাময়','The Very Kind, The Compassionate'],
['Mālik al-Mulk','রাজ্যের স্বামী','The Owner of All Sovereignty'],
['Ḏhū l-Jalāli wa-l-ʾIkrām','মহিমা ও সম্মানের ধনী','The Lord of Majesty and Honour'],
['Al-Muqsiṭ','ন্যায়পরায়ণ, সুষম বিচারকারী','The Equitable, The Just'],
['Al-Jāmiʿ','সমবেতকারী, ঐক্য সাধনকারী','The Gatherer, The Unifier'],
['Al-Ghāniyy','অভাবহীন, স্বয়ংসম্পন্ন','The Self-Sufficient, The Rich'],
['Al-Mughniyy','সমৃদ্ধকারী, মুক্তিদাতা','The Enricher, The Emancipator'],
['Al-Māniʿ','প্রতিরোধক, বাধাদাতা','The Preventer, The Withholder'],
['Aḍ-Ḍār','পরীক্ষার জন্য ক্ষতিকর','The Distressor, The Harm-Bringer'],
['An-Nāfiʿ','উপকারী, কল্যাণকারী','The Benefactor, The Source of Good'],
['An-Nūr','আলো','The Light'],
['Al-Hādī','পথপ্রদর্শক','The Guide, The Way'],
['Al-Badīʿ','অনন্য সৃষ্টিকর্তা, অতুলনীয়','The Originator, The Incomparable'],
['Al-Bāqī','চিরস্থায়ী, অনন্ত','The Everlasting, The Infinite'],
['Al-Wāriṯ','উত্তরাধিকারী','The Heir, The Inheritor of All'],
['Ar-Rashīd','সঠিক পথের পথপ্রদর্শক','The Guide to the Right Path'],
['Aṣ-Ṣabūr','অত্যন্ত ধৈর্যশীল','The Patient, The Timeless']
];

const N = D.length;                 // 99
const STEP = 360 / N;
const dial = document.getElementById('dial');
const wheel = document.getElementById('wheel');
const ticksBox = document.getElementById('ticks');
const nm = document.getElementById('nm');
const mn = document.getElementById('mn');
const mnBn = document.getElementById('mnBn');
const core = document.getElementById('core');
const stressVal = document.getElementById('stressVal');
const stressFill = document.getElementById('stressFill');

let rot = 0;                        // current wheel rotation (deg)
let current = 2;                    // default : Al-Malik
let audio = null;

/* ─── persistence : which names have been heard ─── */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
let heard = new Set(store.get('dial-heard', []));

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
    const r = (i % 2 === 0) ? Rl : Rl - size * 0.055;   // two staggered rows
    el.style.transform =
      `rotate(${i * STEP}deg) translateY(${-r}px) translate(-50%,-50%)`;
  });
  [...ticksBox.children].forEach((el, i) => {
    el.style.transform =
      `rotate(${i * STEP}deg) translateY(${-Rt}px) translate(-50%,-50%)`;
  });
}

/* ─── rotation ─── */
function applyRotation(duration) {
  wheel.style.transition = duration
    ? `transform ${duration}s cubic-bezier(.12,.72,.15,1)` : 'none';
  wheel.style.transform = `rotate(${rot}deg)`;
}

function paintName() {
  const [t, b, e] = D[current];
  nm.textContent = t;
  mn.textContent = e;
  mnBn.textContent = b;
  labels.forEach((el, i) => el.classList.toggle('on', i === current));
}

/* ─── sound ─── */
const say = t => t.normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[ʿʾʼ]/g, '')
  .replace(/-/g, ' ').trim();

function playName(i) {
  if (audio) { audio.onended = audio.onerror = null; audio.pause(); }
  const url = `assets/audio/names/n${String(i + 1).padStart(2, '0')}.mp3`;
  audio = new Audio(url);
  let done = false;
  const started = () => {
    core.classList.add('playing');
    markHeard(i);
  };
  const stop = () => { core.classList.remove('playing'); };
  audio.onplaying = started;
  audio.onended = stop;
  audio.onerror = () => {
    if (done) return; done = true;
    if ('speechSynthesis' in window) {
      try {
        const u = new SpeechSynthesisUtterance(say(D[i][0]));
        u.lang = 'en-US'; u.rate = .8;
        u.onend = stop; u.onerror = stop;
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
        core.classList.add('playing');
      } catch { stop(); }
    } else stop();
    markHeard(i);
  };
  audio.play().catch(() => audio.onerror());
}

function markHeard(i) {
  if (!heard.has(i)) {
    heard.add(i);
    store.set('dial-heard', [...heard]);
    paintStress();
  }
}

/* ─── select a name (spin the wheel so it lands under the needle) ─── */
function select(i, spin) {
  current = ((i % N) + N) % N;
  const desired = -current * STEP;
  let delta = (((desired - rot) % 360) + 360) % 360;
  if (spin) delta += 360 * (2 + Math.floor(Math.random() * 2));
  rot += delta;
  const dur = spin ? 1.5 + (delta / 360) * .35 : .8;
  applyRotation(dur);
  paintName();
  playName(current);
}

/* wheel background click = random spin */
wheel.addEventListener('click', () => {
  select(Math.floor(Math.random() * N), true);
});
/* centre = repeat current name */
core.addEventListener('click', ev => { ev.stopPropagation(); playName(current); });
/* keyboard */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') select(current + 1, false);
  if (e.key === 'ArrowLeft') select(current - 1, false);
});

/* ─── boot ─── */
layout();
let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(layout, 120); });
rot = -current * STEP;      // park Al-Malik under the needle (like the reference)
applyRotation(0);
paintName();
paintStress();
