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

// screenshots viewer
const shotTabs = document.querySelectorAll('[data-shot-tab]');
shotTabs.forEach((t) => (t.onclick = () => {
  shotTabs.forEach((x) => x.setAttribute('aria-selected', x === t));
  document.querySelectorAll('[data-pane]').forEach((p) => {
    const on = p.dataset.pane === t.dataset.shotTab;
    p.classList.toggle('opacity-0', !on);
    p.classList.toggle('pointer-events-none', !on);
    p.toggleAttribute('aria-hidden', !on);
  });
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
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((e) => io.observe(e));

document.getElementById('year').textContent = new Date().getFullYear();
