/* ════════════════════════════════════════════════════════════
   APP — Navegación principal y arranque de la aplicación.
   Depende de closePanel/openPanel (ui.js), debe cargarse después.
════════════════════════════════════════════════════════════ */

/* ════════ NAVEGACIÓN ════════ */
const hideBrandOn = ['home','contacto','ge-explorador','moto-explorador','electro-explorador'];
function nav(id) {
  const prev = document.querySelector('.slide.active');
  const next = document.getElementById(id);
  if (!next || prev === next) return;
  if (prev) prev.classList.remove('active');
  next.classList.add('active');
  next.scrollTop = 0;
  closePanel();
  const brand = document.querySelector('.brand-tag');
  if (brand) brand.style.display = hideBrandOn.includes(id) ? 'none' : 'flex';
}

/* ════════ EVENTOS — conecta los elementos data-nav / data-panel / data-action ════════ */
document.addEventListener('click', e => {
  const navEl = e.target.closest('[data-nav]');
  if (navEl) { nav(navEl.dataset.nav); return; }
  const panelEl = e.target.closest('[data-panel]');
  if (panelEl) { openPanel(panelEl.dataset.panel); return; }
  const actionEl = e.target.closest('[data-action="close-panel"]');
  if (actionEl) { closePanel(); return; }
});

/* ════════ PRELOAD IMÁGENES ════════ */
[ 'assets/backgrounds/fondo.jpeg','assets/img/grupoelectrogeno.jpeg','assets/img/grupoelectrogenoabierto.jpeg',
  'assets/img/electrocompresor.jpg','assets/img/motocompresores.jpg','assets/img/motocompresorabierto.jpg',
  'assets/img/electrocompresorabierto.jpg','assets/img/sheltercerrado.jpg','assets/img/shelterabierto.jpg',
  'assets/img/secadora.jpg','assets/img/torredeiluminacion.jpg','assets/img/vru.JPG','assets/img/todoslosequipo.jpg'
].forEach(src => { const img = new Image(); img.src = src; });

/* Estado inicial: home arranca activo, ocultamos la barra de marca si corresponde */
(function initBrand() {
  const active = document.querySelector('.slide.active');
  const brand = document.querySelector('.brand-tag');
  if (brand && active) brand.style.display = hideBrandOn.includes(active.id) ? 'none' : 'flex';
})();
