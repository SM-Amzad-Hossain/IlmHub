'use strict';
(() => {
  const $ = id => document.getElementById(id);
  let chapters = [], chapter = 0, spread = 0;
  const perSpread = 8;
  const arabicNumber = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);
  function render() {
    const c = chapters[chapter];
    const start = spread * perSpread;
    ['rightPage', 'leftPage'].forEach((id, side) => {
      const page = $(id);
      page.replaceChildren();
      const heading = document.createElement('h2');
      heading.textContent = `سورة ${c.name}`;
      page.append(heading);
      const verses = document.createElement('p');
      verses.className = 'verses';
      c.verses.slice(start + side * 4, start + side * 4 + 4).forEach(v => {
        const verse = document.createElement('span');
        verse.textContent = v.text + ' ';
        const number = document.createElement('span');
        number.className = 'verse-number';
        number.textContent = arabicNumber(v.id);
        verse.append(number, document.createTextNode(' '));
        verses.append(verse);
      });
      page.append(verses);
    });
    $('surah').value = String(chapter);
    $('progress').textContent = `${spread + 1} / ${Math.ceil(c.verses.length / perSpread)}`;
    $('status').textContent = `${c.transliteration} · Ayahs ${start + 1}–${Math.min(start + perSpread, c.verses.length)} of ${c.verses.length}`;
    $('previous').disabled = chapter === 0 && spread === 0;
    $('next').disabled = chapter === chapters.length - 1 && start + perSpread >= c.verses.length;
  }
  $('surah').addEventListener('change', e => { chapter = Number(e.target.value); spread = 0; render(); });
  $('size').addEventListener('change', e => document.querySelector('.book').style.setProperty('--verse-size', `${e.target.value}px`));
  $('previous').addEventListener('click', () => {
    if (spread > 0) spread--;
    else if (chapter > 0) { chapter--; spread = Math.ceil(chapters[chapter].verses.length / perSpread) - 1; }
    render();
  });
  $('next').addEventListener('click', () => {
    if ((spread + 1) * perSpread < chapters[chapter].verses.length) spread++;
    else if (chapter < chapters.length - 1) { chapter++; spread = 0; }
    render();
  });
  async function load() {
    $('retry').hidden = true;
    $('status').textContent = 'Loading Quran text…';
    document.querySelector('.book').setAttribute('aria-busy', 'true');
    try {
      const response = await fetch('assets/quran/quran.json');
      if (!response.ok) throw new Error('Unable to load Quran');
      const data = await response.json();
      if (data.length !== 114 || data.some(c => !Array.isArray(c.verses) || c.verses.length !== c.total_verses)) throw new Error('Incomplete Quran data');
      chapters = data;
      $('surah').replaceChildren(...chapters.map((c, i) => {
        const option = document.createElement('option');
        option.value = String(i);
        option.textContent = `${c.id}. ${c.transliteration} — ${c.name}`;
        return option;
      }));
      $('surah').disabled = false;
      render();
    } catch (error) {
      $('status').textContent = 'Could not load Quran text. Please try again.';
      $('retry').hidden = false;
    } finally { document.querySelector('.book').setAttribute('aria-busy', 'false'); }
  }
  $('retry').addEventListener('click', load);
  load();
})();
