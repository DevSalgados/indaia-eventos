/* =========================================================
   INDAIÁ EVENTOS — Interações
   ========================================================= */

/* ---------- Tier data (extraído do PDF Indaiá) ---------- */
const it = (name, tags = []) => ({ name, tags });

const PRIVILEGE_EXCELLENCE_FEATURES = [
  { num: '4', label: 'Entrada', items: [
    it('Bolinho de peixe'),
    it('Pães caseiros c/ patês (linguiça e truta)'),
    it('Mini risoto de salmão', ['glu']),
    it('Escondidinho de camarão c/ catupiry'),
    it('Mini paella de frutos do mar', ['glu', 'lac']),
    it('Batata Noissete ao molho tártaro', ['veg']),
    it('Queijo de colono em cubos', ['glu']),
    it('Mini caldeirada de frutos do mar', ['glu', 'lac']),
  ]},
  { num: '4', label: 'Pratos principais', items: [
    it('Frango — Bechamel c/ Bacon'),
    it('Frango — Strogonoff'),
    it('Picanha Suína — Mostarda e Mel', ['glu', 'lac']),
    it('Picanha Suína — Barbecue c/ Cebola', ['glu', 'lac']),
    it('Salmão — A Belle Meunière', ['glu']),
    it('Salmão — Molho de camarão'),
    it('Filet — Ao molho mostarda', ['glu']),
    it('Filet — Ao molho madeira'),
    it('Camarão — Ao molho catupiry'),
    it('Camarões ao creme de moranga, dendê e alho poró'),
    it('Carré de Cordeiro — Vinho e ervas', ['glu']),
    it('Carré de Cordeiro — Manteiga e alho', ['glu']),
  ]},
  { num: '2', label: 'Massas', items: [
    it('Gnocchi ao molho suíço'),
    it('Gnocchi ao molho de champignons'),
    it('Caneloni de frango c/ catupiry'),
    it('Caneloni de camarão c/ catupiry'),
    it('Penne ao molho de camarão c/ limão'),
    it('Penne na manteiga'),
    it('Spaghetti ao frutos do mar c/ açafrão', ['lac']),
    it('Spaghetti c/ bacon e manjericão'),
  ]},
  { num: '5', label: 'Guarnições', items: [
    it('Paella de frutos do mar', ['glu', 'lac']),
    it('Arroz branco na manteiga', ['glu', 'lac']),
    it('Purê de aipim c/ bacon'),
    it('Batata palha'),
    it('Arroz à grega', ['glu', 'lac']),
    it('Arroz c/ brócolis e nozes', ['glu', 'veg']),
    it('Farofa de camarão / Arroz c/ nozes'),
    it('Farofa de pão, bacon, castanhas e passas'),
    it('Purê de batata c/ ervas finas'),
    it('Batatas assadas c/ alecrim', ['glu', 'veg']),
    it('Legumes ao vapor c/ tomilho', ['glu', 'lac', 'veg']),
    it('Legumes salteados c/ bacon e tomilho', ['glu', 'lac']),
    it('Coração de palmito in natura ao vapor', ['glu', 'lac', 'veg']),
  ]},
  { num: '6', label: 'Saladas', items: [
    it('Pupunha laminada c/ camarões e vinagrete de frutas amarelas', ['glu', 'lac']),
    it('Burrata artesanal c/ folhas baby, parma e tomates ao pesto', ['glu']),
    it('Salada de folhas c/ camarões e tomate seco', ['glu', 'lac', 'veg']),
    it('Mix de folhas c/ mostarda, mel e gorgonzola', ['glu']),
    it('Folhas c/ palmito, frango, bacon e parmesão'),
    it('Tomate cereja c/ azeitona e champignon', ['glu', 'lac', 'veg']),
    it('Folhas c/ peras, gorgonzola e nozes', ['glu']),
    it('Carpaccio de Filet c/ rúcula e alcaparras', ['glu']),
    it('Salada de maçã'),
    it('Salpicão de frango'),
    it('Ovos de codorna', ['glu', 'lac']),
    it('Salada de frutos do mar', ['glu', 'lac']),
  ]},
];

const TIERS = {
  1: {
    name: 'Superior',
    tagline: 'O essencial servido com sofisticação Indaiá.',
    price: { value: '149', cents: '90' },
    features: [
      { num: '3', label: 'Pratos principais', items: [
        it('Frango — Bechamel c/ Bacon'),
        it('Frango — Strogonoff'),
        it('Picanha Suína — Mostarda e Mel', ['glu', 'lac']),
        it('Picanha Suína — Barbecue c/ Cebola', ['glu', 'lac']),
        it('Filet — Strogonoff'),
      ]},
      { num: '1', label: 'Massa', items: [
        it('Spaghetti ao molho Pomodoro c/ manjericão', ['veg']),
        it('Spaghetti ao pesto de manjericão', ['veg']),
        it('Penne ao molho suíço', ['veg']),
        it('Penne na manteiga'),
      ]},
      { num: '3', label: 'Guarnições', items: [
        it('Arroz branco na manteiga', ['glu', 'lac']),
        it('Batatas assadas c/ alecrim', ['glu', 'veg']),
        it('Batata palha'),
        it('Arroz à grega', ['glu', 'lac']),
        it('Arroz c/ brócolis e nozes', ['glu', 'veg']),
        it('Legumes ao vapor c/ tomilho', ['glu', 'lac', 'veg']),
        it('Farofa de pão, bacon, castanhas e passas'),
        it('Purê de batata c/ ervas finas'),
      ]},
      { num: '4', label: 'Saladas', items: [
        it('Salada de maçã'),
        it('Salpicão de frango'),
        it('Mix de folhas verdes', ['glu', 'lac', 'veg']),
        it('Rúcula c/ tomate seco', ['glu', 'lac', 'veg']),
        it('Mix de folhas c/ mostarda, mel e gorgonzola', ['glu']),
        it('Folhas nobres c/ amêndoas, parmesão e balsâmico', ['glu']),
      ]},
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
      { num: '2', label: 'Entrada', items: [
        it('Escondidinho de Carne Seca'),
        it('Pães caseiros c/ patês (linguiça e truta)'),
        it('Mini Risoto de alecrim c/ cogumelos', ['glu']),
        it('Batata Noissete ao molho tártaro', ['veg']),
        it('Queijo de colono em cubos', ['glu']),
        it('Mini Risoto Gorgonzola', ['glu']),
      ]},
      { num: '3', label: 'Pratos principais', items: [
        it('Frango — Bechamel c/ Bacon'),
        it('Frango — Strogonoff'),
        it('Picanha Suína — Mostarda e Mel', ['glu', 'lac']),
        it('Picanha Suína — Barbecue c/ Cebola', ['glu', 'lac']),
        it('Camarão — Ao molho catupiry'),
        it('Camarão — Na Moranga'),
        it('Filet — Molho Mostarda', ['glu']),
        it('Filet — Molho Madeira'),
      ]},
      { num: '2', label: 'Massas', items: [
        it('Gnocchi ao molho Suíço'),
        it('Gnocchi ao molho de Champignons'),
        it('Spaghetti ao Frutos do Mar c/ Açafrão', ['lac']),
        it('Spaghetti c/ Bacon e manjericão'),
        it('Penne ao molho de Camarões c/ limão'),
        it('Penne na Manteiga'),
      ]},
      { num: '4', label: 'Guarnições', items: [
        it('Arroz branco na manteiga', ['glu', 'lac']),
        it('Batatas assadas c/ alecrim', ['glu', 'veg']),
        it('Batata palha'),
        it('Arroz à grega', ['glu', 'lac']),
        it('Arroz c/ brócolis e nozes', ['glu', 'veg']),
        it('Legumes ao vapor c/ tomilho', ['glu', 'lac', 'veg']),
        it('Farofa de pão, bacon, castanhas e passas'),
        it('Purê de batata c/ ervas finas'),
        it('Purê de aipim c/ bacon'),
      ]},
      { num: '5', label: 'Saladas', items: [
        it('Salada de maçã'),
        it('Salpicão de frango'),
        it('Ovos de codorna', ['glu', 'lac']),
        it('Salada de folhas c/ camarões e tomate seco', ['glu', 'lac', 'veg']),
        it('Mix de folhas c/ mostarda, mel e gorgonzola', ['glu']),
        it('Folhas c/ palmito, frango, bacon e parmesão'),
        it('Tomate cereja c/ azeitona e champignon', ['glu', 'lac', 'veg']),
        it('Folhas nobres c/ amêndoas, parmesão e balsâmico', ['glu']),
      ]},
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
      { num: '3', label: 'Entrada', items: [
        it('Bolinho de peixe'),
        it('Pães caseiros c/ patês (linguiça e truta)'),
        it('Mini risoto de alecrim c/ cogumelos', ['glu']),
        it('Batata Noissete ao molho tártaro', ['veg']),
        it('Escondidinho de Filet'),
        it('Mini risoto de alho poró', ['glu']),
      ]},
      { num: '4', label: 'Pratos principais', items: [
        it('Frango — Bechamel c/ Bacon'),
        it('Frango — Strogonoff'),
        it('Picanha Suína — Mostarda e Mel', ['glu', 'lac']),
        it('Picanha Suína — Barbecue c/ Cebola', ['glu', 'lac']),
        it('Camarão — Ao molho catupiry'),
        it('Camarões ao creme de moranga, dendê e crocante de alho poró'),
        it('Filet — Ao molho mostarda', ['glu']),
        it('Filet — Ao molho madeira'),
      ]},
      { num: '2', label: 'Massas', items: [
        it('Gnocchi ao molho suíço'),
        it('Gnocchi ao molho de champignons'),
        it('Spaghetti ao frutos do mar c/ açafrão', ['lac']),
        it('Spaghetti c/ bacon e manjericão'),
        it('Penne ao molho de camarão c/ limão'),
        it('Penne na manteiga'),
        it('Caneloni de frango c/ catupiry'),
        it('Caneloni de Camarão c/ catupiry'),
      ]},
      { num: '5', label: 'Guarnições', items: [
        it('Paella de frutos do mar', ['glu', 'lac']),
        it('Arroz branco na manteiga', ['glu', 'lac']),
        it('Batatas assadas c/ alecrim', ['glu', 'veg']),
        it('Batata palha'),
        it('Arroz à grega', ['glu', 'lac']),
        it('Arroz c/ brócolis e nozes', ['glu', 'veg']),
        it('Legumes ao vapor c/ tomilho', ['glu', 'lac', 'veg']),
        it('Farofa de pão, bacon, castanhas e passas'),
        it('Purê de batata c/ ervas finas'),
        it('Purê de aipim c/ bacon'),
      ]},
      { num: '5', label: 'Saladas', items: [
        it('Pupunha laminada c/ camarões e vinagrete de frutas amarelas', ['glu', 'lac']),
        it('Burrata artesanal c/ folhas baby, parma e tomates ao pesto', ['glu']),
        it('Salada de maçã'),
        it('Salpicão de frango'),
        it('Ovos de codorna', ['glu', 'lac']),
        it('Salada de folhas c/ camarões e tomate seco', ['glu', 'lac', 'veg']),
        it('Mix de folhas c/ mostarda, mel e gorgonzola', ['glu']),
        it('Folhas c/ palmito, frango, bacon e parmesão'),
        it('Tomate cereja c/ azeitona e champignon', ['glu', 'lac', 'veg']),
      ]},
    ],
    includes: [],
    motivation: 'Mais variedade, mais sabor, mais autoria — sem subir para o nível executivo.',
    progress: 60,
  },
  4: {
    name: 'Privilege',
    tagline: 'Carré de Cordeiro, Salmão e Lanche da Madrugada inclusos.',
    price: { value: '249', cents: '90' },
    features: PRIVILEGE_EXCELLENCE_FEATURES,
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
    features: PRIVILEGE_EXCELLENCE_FEATURES,
    includes: [
      'Lanche da Madrugada — Tipo III',
      'Mesa Mediterrânea',
    ],
    motivation: 'A Mesa Mediterrânea recebe seus convidados. Você cuida do brinde — o resto fica conosco.',
    progress: 100,
    badge: 'Experiência completa',
  },
};

const DIET_LABELS = { glu: 'Sem Glúten', lac: 'Sem Lactose', veg: 'Vegano' };

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

// Triggers e closers via delegação
document.addEventListener('click', (e) => {
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
