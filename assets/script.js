/* =========================================================
   INDAIÁ EVENTOS — Interações
   ========================================================= */

const DIET_LABELS = { glu: 'Sem Glúten', lac: 'Sem Lactose', veg: 'Vegano' };
let TIERS = {};

/* ---------- Render tier panel ---------- */
function renderTier(tier) {
  const data = TIERS[tier];
  if (!data) return '';

  const waMessage = encodeURIComponent(`Olá, estou olhando o Menu ${tier.toString().padStart(2, '0')} · ${data.name} e quero fazer uma cotação.`);
  const waLink = `https://wa.me/5547992007914?text=${waMessage}`;

  const includesBlock = data.includes.length
    ? `
      <div class="tier-includes">
        <div class="tier-includes-head">Serviços inclusos</div>
        <ul class="tier-includes-list">
          ${data.includes.map(i => {
            const lower = i.toLowerCase();
            if (lower.includes('lanche da madrugada')) {
              return `<li data-modal-trigger="lanche" role="button" tabindex="0">${i}</li>`;
            }
            if (lower.includes('mesa mediterr')) {
              return `<li data-modal-trigger="mesa" role="button" tabindex="0">${i}</li>`;
            }
            return `<li>${i}</li>`;
          }).join('')}
        </ul>
      </div>`
    : '';

  return `
    <div class="tier-panel-head">
      <div>
        <span class="tier-panel-name">Menu ${tier.toString().padStart(2, '0')} · ${data.name}</span>
        <h3>${data.tagline}</h3>
      </div>
      <div class="price-block">
        <span class="price-currency">R$</span><span class="price-value">${data.price.value}</span><span class="price-cents">,${data.price.cents}</span>
        <span class="price-unit">por pessoa</span>
      </div>
    </div>

    <div class="tier-progress">
      <div class="tier-progress-label">
        <span>Você está a <strong>um passo</strong> de fechar este menu</span>
        <span>Nível <strong>${tier}</strong> de 5</span>
      </div>
      <div class="tier-progress-bar" style="--progress: ${data.progress}%"></div>
    </div>

    <div class="tier-features">
      ${data.features.map((f, idx) => {
        const opts = `${f.num} opç${Number(f.num) === 1 ? 'ão' : 'ões'}`;
        return `
        <button type="button" class="tier-feature tier-feature-btn" data-cat-trigger data-cat-tier="${tier}" data-cat-idx="${idx}" aria-label="Ver todas as opções de ${f.label}">
          <span class="tier-feature-label">${f.label}</span>
          <span class="tier-feature-choose">Escolha ${opts}*</span>
          <span class="tier-feature-count">${f.items.length} opções disponíveis</span>
          <span class="tier-feature-more">Ver opções <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </button>`;
      }).join('')}
    </div>

    ${includesBlock}

    <div class="tier-cta">
      <p class="tier-motivation">${data.motivation}</p>
      <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary" data-tier-cta>
        <span>Quero este menu</span>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
  `;
}

/* ---------- Tier selector ---------- */
const tierButtons = document.querySelectorAll('.tier-btn');
const tierPanel = document.getElementById('tierPanel');
const tierFill = document.getElementById('tierFill');

/* ---------- Serviços inclusos — estado conforme menu ---------- */
const servicesGrid = document.getElementById('servicesGrid');
const servicesEyebrow = document.getElementById('servicesEyebrow');

function updateServicesForTier(tier) {
  if (!servicesGrid) return;
  const lanche = servicesGrid.querySelector('[data-service="lanche"]');
  const mesa = servicesGrid.querySelector('[data-service="mesa"]');
  if (!lanche || !mesa) return;

  const setCard = (card, { hidden = false, tierLabel, ribbon, ribbonHidden = true, exclusive = false }) => {
    card.hidden = hidden;
    card.classList.toggle('is-exclusive', exclusive);
    const tierEl = card.querySelector('[data-service-tier]');
    const ribbonEl = card.querySelector('[data-service-ribbon]');
    if (tierEl && tierLabel) tierEl.textContent = tierLabel;
    if (ribbonEl) {
      ribbonEl.hidden = ribbonHidden;
      if (!ribbonHidden && ribbon) ribbonEl.textContent = ribbon;
    }
  };

  if (tier === 5) {
    servicesEyebrow.textContent = 'Inclusos no seu menu Excellence';
    setCard(lanche, { tierLabel: 'Incluso · Excellence', ribbon: 'Incluso no seu menu', ribbonHidden: false });
    setCard(mesa, { tierLabel: 'Incluso · Excellence', ribbon: 'Exclusivo Excellence', ribbonHidden: false, exclusive: true });
    servicesGrid.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))';
    servicesGrid.style.maxWidth = '820px';
  } else if (tier === 4) {
    servicesEyebrow.textContent = 'Incluso no seu menu Privilege';
    setCard(lanche, { tierLabel: 'Incluso · Privilege', ribbon: 'Incluso no seu menu', ribbonHidden: false });
    setCard(mesa, { hidden: true });
    servicesGrid.style.gridTemplateColumns = 'minmax(0, 1fr)';
    servicesGrid.style.maxWidth = '420px';
  } else {
    servicesEyebrow.textContent = 'Adicionais opcionais para o seu menu';
    setCard(lanche, { tierLabel: 'Adicional sob consulta', ribbon: 'Pode ser adicionado', ribbonHidden: false });
    setCard(mesa, { tierLabel: 'Adicional sob consulta', ribbon: 'Pode ser adicionado', ribbonHidden: false });
    servicesGrid.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))';
    servicesGrid.style.maxWidth = '820px';
  }
}

function setTier(tier) {
  tierButtons.forEach(b => {
    const isActive = Number(b.dataset.tier) === tier;
    b.setAttribute('aria-selected', isActive);
  });

  updateServicesForTier(tier);

  if (!tierPanel) return;

  tierPanel.classList.add('is-changing');
  setTimeout(() => {
    tierPanel.innerHTML = renderTier(tier);
    tierPanel.classList.remove('is-changing');
  }, 220);

  const fillMap = { 1: 0, 2: 25, 3: 50, 4: 75, 5: 100 };
  if (tierFill) tierFill.style.width = `${fillMap[tier]}%`;
}

tierButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tier = Number(btn.dataset.tier);
    setTier(tier);
  });
});

/* ---------- Load data from data.json, then initialize ---------- */
fetch('/data.json?_=' + Date.now())
  .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
  .then(json => {
    TIERS = Object.fromEntries(
      Object.entries(json.tiers).map(([k, v]) => [Number(k), v])
    );
    setTier(4);
  })
  .catch(() => {
    if (tierPanel) tierPanel.innerHTML = '<p style="padding:24px 20px;color:#999;font-size:14px">Erro ao carregar cardápio. Recarregue a página.</p>';
  });

/* ---------- Reveal on scroll ---------- */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${Math.min(idx * 60, 240)}ms`;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => io.observe(el));

/* ---------- Nav scroll state ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 30);
}, { passive: true });

/* ---------- Year in footer ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Smooth scroll ---------- */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href');
  if (id === '#' || id.length < 2) return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* =========================================================
   MODALS — Lanche da Madrugada e Mesa Mediterrânea
   ========================================================= */
const MODAL_MAP = {
  lanche:   document.getElementById('modalLanche'),
  mesa:     document.getElementById('modalMesa'),
  category: document.getElementById('modalCategory'),
};

function openCategoryModal(tier, catIdx) {
  const data = TIERS[tier];
  if (!data) return;
  const cat = data.features[catIdx];
  if (!cat) return;

  const opts = `${cat.num} opç${Number(cat.num) === 1 ? 'ão' : 'ões'}`;
  document.getElementById('modalCatEyebrow').textContent = `Menu ${tier.toString().padStart(2, '0')} · ${data.name}`;
  document.getElementById('modalCatTitle').innerHTML = cat.label;
  document.getElementById('modalCatChoose').textContent = `Escolha ${opts}* dentro da seleção abaixo`;

  const itemsEl = document.getElementById('modalCatItems');
  itemsEl.innerHTML = cat.items.map((item, i) => `
    <li class="modal-cat-item" style="--i: ${i}">
      <span class="modal-cat-item-name">${item.name}</span>
      ${item.tags.length ? `<span class="diet-dots">${item.tags.map(t => `<span class="diet-dot diet-dot--${t}" aria-label="${DIET_LABELS[t]}" title="${DIET_LABELS[t]}"></span>`).join('')}</span>` : ''}
    </li>
  `).join('');

  openModalByKey('category');
}

function openModalByKey(key) {
  const m = MODAL_MAP[key];
  if (!m) return;
  m.classList.add('is-open');
  m.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  const closeBtn = m.querySelector('.modal-lanche-close');
  if (closeBtn) setTimeout(() => closeBtn.focus(), 200);
}

function closeAllModals() {
  Object.values(MODAL_MAP).forEach(m => {
    if (!m) return;
    m.classList.remove('is-open');
    m.setAttribute('aria-hidden', 'true');
  });
  document.body.classList.remove('modal-open');
}

function anyModalOpen() {
  return Object.values(MODAL_MAP).some(m => m && m.classList.contains('is-open'));
}

/* =========================================================
   PHOTO POPUP
   ========================================================= */
const photoPopup = document.getElementById('photoPopup');
const photoPopupImg = document.getElementById('photoPopupImg');
const photoPopupCaption = document.getElementById('photoPopupCaption');

function openPhotoPopup(src, caption) {
  if (!photoPopup || !photoPopupImg) return;
  photoPopupImg.src = src;
  photoPopupImg.alt = caption || '';
  if (photoPopupCaption) photoPopupCaption.textContent = caption || '';
  photoPopup.classList.add('is-open');
  photoPopup.setAttribute('aria-hidden', 'false');
}

function closePhotoPopup() {
  if (!photoPopup) return;
  photoPopup.classList.remove('is-open');
  photoPopup.setAttribute('aria-hidden', 'true');
  setTimeout(() => { if (!photoPopup.classList.contains('is-open')) photoPopupImg.src = ''; }, 400);
}

function isPhotoPopupOpen() {
  return photoPopup && photoPopup.classList.contains('is-open');
}

/* =========================================================
   Delegação geral de clicks
   ========================================================= */
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-photo-close]')) {
    closePhotoPopup();
    return;
  }
  const photoTrigger = e.target.closest('[data-photo]');
  if (photoTrigger) {
    e.preventDefault();
    openPhotoPopup(photoTrigger.dataset.photo, photoTrigger.dataset.photoName);
    return;
  }
  const catTrigger = e.target.closest('[data-cat-trigger]');
  if (catTrigger) {
    e.preventDefault();
    openCategoryModal(Number(catTrigger.dataset.catTier), Number(catTrigger.dataset.catIdx));
    return;
  }
  const trigger = e.target.closest('[data-modal-trigger]');
  if (trigger) {
    e.preventDefault();
    openModalByKey(trigger.dataset.modalTrigger);
    return;
  }
  const closer = e.target.closest('[data-modal-close]');
  if (closer && anyModalOpen()) {
    closeAllModals();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (isPhotoPopupOpen()) { closePhotoPopup(); return; }
    if (anyModalOpen()) { closeAllModals(); return; }
  }
  if ((e.key === 'Enter' || e.key === ' ')) {
    if (e.target.matches('[data-photo]')) {
      e.preventDefault();
      openPhotoPopup(e.target.dataset.photo, e.target.dataset.photoName);
      return;
    }
    if (e.target.matches('[data-modal-trigger]')) {
      e.preventDefault();
      openModalByKey(e.target.dataset.modalTrigger);
    }
  }
});
