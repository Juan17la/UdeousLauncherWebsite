// theme: system default, toggle remembered when storage is available; screenshots follow it
const root = document.documentElement, btn = document.getElementById('theme');
const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
const set = (t) => {
  root.dataset.theme = t; btn.innerHTML = t === 'dark' ? SUN : MOON;
  btn.title = t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  document.querySelectorAll('[data-shot]').forEach((i) => (i.src = `assets/${t}_${i.dataset.shot}.png`));
  try { localStorage.theme = t; } catch {}
};
let saved; try { saved = localStorage.theme; } catch {}
set(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
btn.onclick = () => set(root.dataset.theme === 'dark' ? 'light' : 'dark');

// floating items; light and dark use the launcher's own THEME_DECOR sets
const ITEMS = { light: ['diamond_pickaxe','diamond','apple','grass_block_side','emerald','iron_sword','golden_apple'],
                dark: ['ender_pearl','netherite_sword','netherite_ingot','golden_apple','end_crystal','nether_star','obsidian'] };
const SLOTS = [[4,2,80,-14],[28,52,64,12],[62,6,96,8],[12,33,56,-8],[78,44,72,-20],[46,24,60,16],[88,16,52,-6],
               [20,86,72,10],[58,90,64,-16],[6,70,56,14],[70,70,48,-10]];
const decor = document.getElementById('decor');
const paint = () => { decor.innerHTML = SLOTS.map(([t,l,s,r],i) => {
  const items = ITEMS[root.dataset.theme];
  return `<img src="assets/items/${items[i % items.length]}.png" alt="" style="top:${t}%;left:${l}%;width:${s}px;--r:${r}deg;">`; }).join(''); };
paint(); new MutationObserver(paint).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

// gallery arrows: one picture per click, wraps around at the ends
const track = document.getElementById('track');
const mid = track.children[1];
track.style.scrollBehavior = 'auto';
track.scrollLeft = mid.offsetLeft - track.offsetLeft - (track.clientWidth - mid.offsetWidth) / 2;
track.style.scrollBehavior = '';
document.querySelectorAll('[data-slide]').forEach((b) => (b.onclick = () => {
  const step = track.firstElementChild.offsetWidth + 16, end = track.scrollWidth - track.clientWidth;
  const dir = +b.dataset.slide;
  if (dir > 0 && track.scrollLeft >= end - 4) track.scrollLeft = 0;
  else if (dir < 0 && track.scrollLeft <= 4) track.scrollLeft = end;
  else track.scrollBy({ left: dir * step });
}));

// install tabs: start on the visitor's system (download.js sets data-os)
const tabs = document.querySelectorAll('[data-tab]');
const show = (os) => {
  tabs.forEach((t) => t.setAttribute('aria-selected', t.dataset.tab === os));
  document.querySelectorAll('[data-panel]').forEach((p) => (p.hidden = p.dataset.panel !== os));
};
tabs.forEach((t) => (t.onclick = () => show(t.dataset.tab)));
show(root.dataset.os || 'windows');

// rise-in on scroll
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .15 });
document.querySelectorAll('.reveal').forEach((e) => io.observe(e));

// footer year never goes stale
document.getElementById('year').textContent = new Date().getFullYear();
