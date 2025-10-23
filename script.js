document.addEventListener('DOMContentLoaded', () => {
  const swapButtons = Array.from(document.querySelectorAll('.swap, [id="swap"]'));

  const icon = document.getElementById('icon');
  const mainImg = document.getElementById('mainImg');
  const reklamaImg = document.getElementById('reklamaImg');
  const reklamaImg2 = document.getElementById('reklamaImg2');
  const tg = document.getElementById('tg');
  const vk = document.getElementById('vk');
  const donate = document.getElementById('donate');
  const support = document.getElementById('support');

  const assets = {
    icon: 'images/half-moon.png',
    mainImg: 'images/aurora.png',
    reklama: 'images/reklama.png',
    reklama2: 'images/reklama.png',
    tg: 'images/tg-white.svg',
    vk: 'images/vk-white.svg',
    donate: 'images/donate-white.svg',
    support: 'images/support-white.svg'
  };

  function safeSetSrc(el, src) {
    if (!el || !src) return;
    el.src = src;
    el.onerror = () => console.warn('Failed to load image:', src, 'for element', el);
  }

  safeSetSrc(icon, assets.icon);
  safeSetSrc(mainImg, assets.mainImg);
  safeSetSrc(reklamaImg, assets.reklama);
  safeSetSrc(reklamaImg2, assets.reklama2);
  safeSetSrc(tg, assets.tg);
  safeSetSrc(vk, assets.vk);
  safeSetSrc(donate, assets.donate);
  safeSetSrc(support, assets.support);
});

function showRecipe(n) {
  const recipes = document.querySelectorAll('.recipe');
  recipes.forEach(r => r.classList.remove('active')); 
  const current = document.getElementById(`recipe${n}`);
  if (current) current.classList.add('active');     
}
