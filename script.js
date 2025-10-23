document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeBtn');
  const icon = document.getElementById('icon');
  const mainImg = document.getElementById('mainImg');
  const inputS = document.getElementById('inputS');
  const reklamaImg = document.getElementById('reklamaImg');
  const reklamaImg2 = document.getElementById('reklamaImg2');
  const tg = document.getElementById('tg');
  const vk = document.getElementById('vk');
  const donate = document.getElementById('donate');
  const support = document.getElementById('support');

  const swapSingle = document.getElementById('swap'); 
  const swapButtons = Array.from(document.querySelectorAll('.swap, [id="swap"]'));
  const allButtons = Array.from(document.querySelectorAll('button'));

  const assets = {
    moon: {
      bg: '#fdfdfd',
      text: '#000000',
      icon: 'images/moon.png',
      mainImg: 'images/white.png',
      reklama: 'images/white-reklama.jpg',
      reklama2: 'images/white-reklama.jpg',
      tg: 'images/tg-white.svg',
      vk: 'images/vk-white.svg',
      donate: 'images/donate-white.svg',
      support: 'images/support-white.svg',
      swapBg: '#fdfdfd',
      swapColor: '#111'
    },
    sun: {
      bg: '#bebebe',
      text: '#111111',
      icon: 'images/sun.png',
      mainImg: 'images/gray.png',
      reklama: 'images/gray-reklama.png',
      reklama2: 'images/gray-reklama.png',
      tg: 'images/tg-gray.svg',
      vk: 'images/vk-gray.svg',
      donate: 'images/donate-gray.svg',
      support: 'images/support-gray.svg',
      swapBg: '#bebebe',
      swapColor: '#000'
    }
  };

  function safeSetSrc(el, src) {
    if (!el || !src) return;
    el.src = src;
    el.onerror = () => console.warn('Failed to load image:', src, 'for element', el);
  }

  function safeSetClass(el, cls) {
    if (!el) return;
    el.classList.remove('moon', 'sun');
    el.classList.add(cls);
  }

  let state = (() => {
    try { return localStorage.getItem('themeState') || 'moon'; }
    catch (e) { return 'moon'; }
  })();

  function applyState(newState) {
    state = newState;

    document.body.classList.remove('moon', 'sun');
    document.body.classList.add(state);

    allButtons.forEach(b => safeSetClass(b, state));

    if (swapSingle) safeSetClass(swapSingle, state);
    swapButtons.forEach(b => safeSetClass(b, state));

    safeSetClass(inputS, state);

    const a = assets[state];
    document.body.style.backgroundColor = a.bg;
    document.body.style.color = a.text;

    safeSetSrc(icon, a.icon);
    safeSetSrc(mainImg, a.mainImg);
    safeSetSrc(reklamaImg, a.reklama);
    safeSetSrc(reklamaImg2, a.reklama2);
    safeSetSrc(tg, a.tg);
    safeSetSrc(vk, a.vk);
    safeSetSrc(donate, a.donate);
    safeSetSrc(support, a.support);

    if (swapSingle) {
      swapSingle.style.transition = 'background-color .45s ease, color .45s ease';
      swapSingle.style.backgroundColor = a.swapBg;
      swapSingle.style.color = a.swapColor;
    }

    swapButtons.forEach(b => {
      b.style.transition = 'background-color .45s ease, color .45s ease';
      b.style.backgroundColor = a.swapBg;
      b.style.color = a.swapColor;
    });

    try { localStorage.setItem('themeState', state); } catch (e) {}
  }

  applyState(state);

  if (btn) {
    btn.addEventListener('click', () => {
      applyState(state === 'moon' ? 'sun' : 'moon');
    });
  } else {
    console.warn('themeBtn не найден — переключатель темы не подключён на этой странице.');
  }
});
