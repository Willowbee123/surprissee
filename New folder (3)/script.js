// Generate floating petals
const emojis = ['🌸','🌹','💕','✨','🌺','💗'];
for (let i = 0; i < 18; i++) {
  const el = document.createElement('div');
  el.className = 'petal';
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (.7 + Math.random() * .😎 + 'rem';
  el.style.animationDuration = (7 + Math.random() * 10) + 's';
  el.style.animationDelay = (Math.random() * 😎 + 's';
  document.body.appendChild(el);
}