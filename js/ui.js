/* ════════════════════════════════════════════════════════════
   UI — Comportamientos de interfaz: panel lateral, gestos,
   fallback de imágenes y accesibilidad.
   Depende de panelData (data.js), debe cargarse después.
════════════════════════════════════════════════════════════ */

/* ════════ PANEL LATERAL ════════ */
function buildItems(arr) {
  if (!arr || !arr.length) return '';
  return arr.map(i => `<li><span class="pdot"></span><span>${i}</span></li>`).join('');
}
function openPanel(key) {
  const d = panelData[key];
  if (!d) return;
  document.getElementById('panelDiv').textContent = d.div || '';
  document.getElementById('panelTitle').textContent = d.t;
  document.getElementById('panelSol').innerHTML = buildItems(d.s);
  document.getElementById('sidePanel').classList.add('open');
  document.getElementById('panelOverlay').classList.add('open');
}
function closePanel() {
  document.getElementById('sidePanel').classList.remove('open');
  document.getElementById('panelOverlay').classList.remove('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

/* ════════ SWIPE PARA CERRAR PANEL ════════ */
let _tx = 0;
document.addEventListener('touchstart', e => { _tx = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  if (e.changedTouches[0].clientX - _tx > 70) closePanel();
}, { passive: true });

/* ════════ FALLBACK DE IMÁGENES ════════ */
document.querySelectorAll('.home-logo, .qr-image').forEach(img => {
  img.addEventListener('error', function () { this.style.display = 'none'; });
});

/* ════════ A11Y ════════ */
document.querySelectorAll('[data-nav], [data-panel], [data-action]').forEach(el => {
  if (el.tagName !== 'BUTTON' && el.tagName !== 'A') {
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.addEventListener('keypress', e => { if (e.key === 'Enter') el.click(); });
  }
});
