/* Shared browser speech synthesis for the names and meanings. */
(() => {
  'use strict';

  let runId = 0;
  let activeUtterance = null;

  function available() {
    return typeof window !== 'undefined'
      && 'speechSynthesis' in window
      && typeof window.SpeechSynthesisUtterance === 'function';
  }

  function locale(value) {
    return String(value || '').replace(/_/g, '-').toLowerCase();
  }

  function voices() {
    if (!available()) return [];
    try { return window.speechSynthesis.getVoices() || []; }
    catch { return []; }
  }

  function voiceGender(voice) {
    const label = `${voice?.gender || ''} ${voice?.name || ''} ${voice?.voiceURI || ''}`.toLowerCase();
    if (/\b(female|woman|girl)\b/.test(label)) return 'female';
    if (/\b(male|man|boy)\b/.test(label)) return 'male';
    return '';
  }

  function pickVoice(language, gender) {
    const wanted = locale(language);
    const languagePrefix = wanted.split('-')[0];
    const matching = voices().filter(voice => locale(voice.lang).split('-')[0] === languagePrefix);
    const preferred = matching.find(voice => voiceGender(voice) === gender);
    return preferred || matching.find(voice => voice.default) || matching[0] || null;
  }

  function cleanText(text, language) {
    let value = String(text).trim().replace(/[ʿʾʼ’‘]/g, '').replace(/[-‐‑]/g, ' ');
    if (locale(language).startsWith('en')) {
      value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    return value;
  }

  function cancel() {
    runId++;
    activeUtterance = null;
    if (available()) {
      try { window.speechSynthesis.cancel(); } catch {}
    }
  }

  function speak(text, options = {}) {
    cancel();
    if (!available()) return false;

    const thisRun = runId;
    const language = options.lang || 'en-US';
    let utterance;
    try {
      utterance = new window.SpeechSynthesisUtterance(cleanText(text, language));
      utterance.lang = language;
      utterance.rate = Number.isFinite(options.rate) ? options.rate : 0.86;
      utterance.pitch = 1;

      const voice = pickVoice(language, options.gender);
      if (voice) {
        utterance.voice = voice;
        if (voice.lang) utterance.lang = voice.lang;
      }

      activeUtterance = utterance;
      utterance.onend = () => {
        if (thisRun !== runId) return;
        activeUtterance = null;
        if (typeof options.onend === 'function') options.onend();
      };
      utterance.onerror = event => {
        if (thisRun !== runId) return;
        activeUtterance = null;
        if (event?.error === 'canceled' || event?.error === 'interrupted') return;
        if (typeof options.onerror === 'function') options.onerror(event);
      };

      window.speechSynthesis.speak(utterance);
      return true;
    } catch (error) {
      if (thisRun === runId) activeUtterance = null;
      if (typeof options.onerror === 'function') options.onerror(error);
      return false;
    }
  }

  function hasGenderVoice(language, gender) {
    const languagePrefix = locale(language).split('-')[0];
    return voices().some(voice =>
      locale(voice.lang).split('-')[0] === languagePrefix && voiceGender(voice) === gender
    );
  }

  if (available()) {
    try { window.speechSynthesis.getVoices(); } catch {}
  }

  window.IlmHubNameSpeech = Object.freeze({ available, speak, cancel, hasGenderVoice });
})();
