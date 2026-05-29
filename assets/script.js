/* =========================================================
   INDAIÁ EVENTOS — Interações
   ========================================================= */

/* ---------- Tier data (extraído do PDF Indaiá) ---------- */
const TIERS = {
  1: {
    name: 'Superior',
    tagline: 'O essencial servido com sofisticação Indaiá.',
    price: { value: '149', cents: '90' },
    features: [
      { num: '3', label: 'Pratos principais', items: ['Frango', 'Picanha Suína', 'Filet em molhos clássicos da casa'] },
      { num: '1', label: 'Massa', items: ['Spaghetti ao Pomodoro', 'Spaghetti ao Pesto', 'Penne ao Suíço', 'Penne na Manteiga'] },
      { num: '3', label: 'Guarnições', items: ['Arroz à grega', 'Batatas ao alecrim', 'Legumes ao tomilho'] },
      { num: '4', label: 'Saladas', items: ['Folhas nobres com amêndoas e parmesão', 'Rúcula com tomate seco'] },
    ],
    includes: [],
    motivation: 'Escolha cada item com a equipe e monte o cardápio perfeito para a sua celebração.',
    progress: 20,
  },
  2: {
    name: 'Superior II',
    tagline: 'Variedade ampliada — entradas quentes e camarão à mesa.',
    price: { value: '169', cents: '90' },
    features: [
      { num: '2', label: 'Entradas', items: ['Escondidinho de carne seca', 'Mini risoto Gorgonzola', 'Queijo de colono'] },
      { num: '3', label: 'Pratos principais', items: ['Camarão à moranga', 'Filet ao Madeira', 'Clássicos da casa'] },
      { num: '2', label: 'Massas', items: ['Gnocchi ao Champignons', 'Penne ao molho de camarões com limão'] },
      { num: '4', label: 'Guarnições', items: ['Purê de aipim com bacon', 'Arroz à grega', 'Batatas ao alecrim', 'Legumes ao tomilho'] },
      { num: '5', label: 'Saladas', items: ['Folhas com camarões e tomate seco', 'Folhas nobres com balsâmico'] },
    ],
    includes: [],
    motivation: 'Um menu com mais escolhas e ingredientes nobres na entrada e nas saladas.',
    progress: 40,
  },
  3: {
    name: 'Premium',
    tagline: 'Onde Burrata e Pupunha encontram a sua mesa.',
    price: { value: '179', cents: '90' },
    features: [
      { num: '3', label: 'Entradas', items: ['Bolinho de peixe', 'Mini risoto de alho poró', 'Escondidinho de Filet'] },
      { num: '4', label: 'Pratos principais', items: ['Camarões ao creme de moranga e dendê', 'Filet ao Madeira'] },
      { num: '2', label: 'Massas', items: ['Caneloni de frango com catupiry', 'Caneloni de camarão com catupiry', 'Gnocchi', 'Spaghetti'] },
      { num: '5', label: 'Guarnições', items: ['Paella de frutos do mar', 'Arroz à grega', 'Batatas ao alecrim', 'Legumes ao tomilho'] },
      { num: '5', label: 'Saladas', items: ['Burrata artesanal com folhas baby', 'Pupunha laminada com camarões'] },
    ],
    includes: [],
    motivation: 'Mais variedade, mais sabor, mais autoria — sem subir para o nível executivo.',
    progress: 60,
  },
  4: {
    name: 'Privilege',
    tagline: 'Carré de Cordeiro, Salmão e Lanche da Madrugada inclusos.',
    price: { value: '249', cents: '90' },
    features: [
      { num: '4', label: 'Entradas', items: ['Mini paella de frutos do mar', 'Mini caldeirada', 'Escondidinho de camarão'] },
      { num: '4', label: 'Pratos principais', items: ['Carré de Cordeiro ao vinho', 'Salmão A Belle Meunière', 'Camarões'] },
      { num: '2', label: 'Massas', items: ['Frutos do mar com açafrão', 'Caneloni de camarão', 'Gnocchi ao Suíço'] },
      { num: '5', label: 'Guarnições', items: ['Coração de palmito ao vapor', 'Legumes salteados', 'Paella'] },
      { num: '6', label: 'Saladas', items: ['Carpaccio de Filet com rúcula', 'Folhas com peras, gorgonzola e nozes'] },
    ],
    includes: [
      'Lanche da Madrugada — Tipo III',
    ],
    motivation: 'O nível mais escolhido pelos noivos. Cardápio executivo com Lanche da Madrugada já incluso.',
    progress: 80,
    badge: 'Mais escolhido',
  },
  5: {
    name: 'Excellence',
    tagline: 'A experiência Indaiá em sua forma máxima.',
    price: { value: '279', cents: '90' },
    features: [
      { num: '4', label: 'Entradas', items: ['Mini paella de frutos do mar', 'Mini caldeirada', 'Escondidinho de camarão', 'Mesa Mediterrânea complementando'] },
      { num: '4', label: 'Pratos principais', items: ['Carré de Cordeiro à manteiga e alho', 'Salmão ao molho de camarão'] },
      { num: '2', label: 'Massas', items: ['Caneloni de camarão', 'Frutos do mar com açafrão', 'Gnocchi ao Champignons'] },
      { num: '5', label: 'Guarnições', items: ['Paella de frutos do mar', 'Coração de palmito ao vapor'] },
      { num: '6', label: 'Saladas', items: ['Burrata artesanal', 'Carpaccio', 'Frutos do mar', 'Peras com gorgonzola'] },
    ],
    includes: [
      'Lanche da Madrugada — Tipo III',
      'Mesa Mediterrânea',
    ],
    motivation: 'A Mesa Mediterrânea recebe seus convidados. Você cuida do brinde — o resto fica conosco.',
    progress: 100,
    badge: 'Experiência completa',
  },
};

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
      ${data.features.map(f => `
        <div class="tier-feature">
          <div class="tier-feature-num">${f.num}</div>
          <span class="tier-feature-label">${f.label}</span>
          <ul class="tier-feature-list">
            ${f.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
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

  // Fill progress track
  const fillMap = { 1: 0, 2: 25, 3: 50, 4: 75, 5: 100 };
  if (tierFill) tierFill.style.width = `${fillMap[tier]}%`;
}

tierButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tier = Number(btn.dataset.tier);
    setTier(tier);
  });
});

// Initial render — start on Privilege (the most-chosen one)
setTier(4);

/* ---------- Reveal on scroll ---------- */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Stagger lightly
      entry.target.style.transitionDelay = `${Math.min(idx * 60, 240)}ms`;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => io.observe(el));

/* ---------- Nav scroll state ---------- */
const nav = document.getElementById('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (nav) nav.classList.toggle('is-scrolled', y > 30);
  lastScroll = y;
}, { passive: true });

/* ---------- Year in footer ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Smooth focus on tier CTA scroll ---------- */
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
  lanche: document.getElementById('modalLanche'),
  mesa:   document.getElementById('modalMesa'),
};

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

// Triggers e closers via delegação
document.addEventListener('click', (e) => {
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

// Teclado: Enter/Espaço no trigger, ESC pra fechar
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && anyModalOpen()) {
    closeAllModals();
    return;
  }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-modal-trigger]')) {
    e.preventDefault();
    openModalByKey(e.target.dataset.modalTrigger);
  }
});
