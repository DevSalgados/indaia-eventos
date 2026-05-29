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
      { num: '3', label: 'Pratos principais', desc: 'Frango, Picanha Suína e Filet em molhos clássicos da casa.' },
      { num: '1', label: 'Massa', desc: 'Spaghetti ao Pomodoro, pesto, Penne ao suíço ou na manteiga.' },
      { num: '3', label: 'Guarnições', desc: 'Arroz à grega, batatas ao alecrim, legumes ao tomilho.' },
      { num: '4', label: 'Saladas', desc: 'Folhas nobres com amêndoas e parmesão, rúcula com tomate seco.' },
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
      { num: '2', label: 'Entradas', desc: 'Escondidinho de carne seca, mini risoto Gorgonzola, queijo de colono.' },
      { num: '3', label: 'Pratos principais', desc: 'Camarão à moranga, Filet ao Madeira e os clássicos da casa.' },
      { num: '2', label: 'Massas', desc: 'Gnocchi ao Champignons, Penne ao molho de camarões com limão.' },
      { num: '4', label: 'Guarnições', desc: 'Purê de aipim com bacon entra na seleção.' },
      { num: '5', label: 'Saladas', desc: 'Folhas com camarões e tomate seco, folhas nobres com balsâmico.' },
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
      { num: '3', label: 'Entradas', desc: 'Bolinho de peixe, mini risoto de alho poró, escondidinho de Filet.' },
      { num: '4', label: 'Pratos principais', desc: 'Camarões ao creme de moranga e dendê, Filet ao Madeira.' },
      { num: '2', label: 'Massas', desc: 'Caneloni de frango e de camarão com catupiry, gnocchi e spaghetti.' },
      { num: '5', label: 'Guarnições', desc: 'Paella de frutos do mar entra como opção.' },
      { num: '5', label: 'Saladas', desc: 'Burrata artesanal com folhas baby, Pupunha laminada com camarões.' },
    ],
    includes: [],
    motivation: 'Mais variedade, mais sabor, mais autoria — sem subir para o nível executivo.',
    progress: 60,
  },
  4: {
    name: 'Privilege',
    tagline: 'Carré de Cordeiro, Salmão e decoração assinada inclusos.',
    price: { value: '249', cents: '90' },
    features: [
      { num: '4', label: 'Entradas', desc: 'Mini paella de frutos do mar, mini caldeirada, escondidinho de camarão.' },
      { num: '4', label: 'Pratos principais', desc: 'Carré de Cordeiro ao vinho, Salmão A Belle Meunière, Camarões.' },
      { num: '2', label: 'Massas', desc: 'Frutos do mar com açafrão, caneloni de camarão, gnocchi ao suíço.' },
      { num: '5', label: 'Guarnições', desc: 'Coração de palmito ao vapor, legumes salteados, paella.' },
      { num: '6', label: 'Saladas', desc: 'Carpaccio de Filet com rúcula, folhas com peras, gorgonzola e nozes.' },
    ],
    includes: [
      'Elegance Decor',
      'Lanche da Madrugada — Tipo III',
    ],
    motivation: 'O nível mais escolhido pelos noivos. Cardápio executivo + decoração assinada já inclusos.',
    progress: 80,
    badge: 'Mais escolhido',
  },
  5: {
    name: 'Excellence',
    tagline: 'A experiência Indaiá em sua forma máxima.',
    price: { value: '279', cents: '90' },
    features: [
      { num: '4', label: 'Entradas', desc: 'A mesma seleção do Privilege, com a Mesa Mediterrânea complementando.' },
      { num: '4', label: 'Pratos principais', desc: 'Carré de Cordeiro à manteiga e alho, Salmão ao molho de camarão.' },
      { num: '2', label: 'Massas', desc: 'Caneloni de camarão, frutos do mar com açafrão, gnocchi ao champignons.' },
      { num: '5', label: 'Guarnições', desc: 'Paella de frutos do mar, coração de palmito ao vapor.' },
      { num: '6', label: 'Saladas', desc: 'Burrata artesanal, Carpaccio, frutos do mar, peras com gorgonzola.' },
    ],
    includes: [
      'Elegance Decor',
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

  const includesBlock = data.includes.length
    ? `
      <div class="tier-includes">
        <div class="tier-includes-head">Serviços inclusos</div>
        <ul class="tier-includes-list">
          ${data.includes.map(i => {
            const isLanche = i.toLowerCase().includes('lanche da madrugada');
            return isLanche
              ? `<li data-modal-trigger="lanche" role="button" tabindex="0">${i}</li>`
              : `<li>${i}</li>`;
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
          <p class="tier-feature-desc">${f.desc}</p>
        </div>
      `).join('')}
    </div>

    ${includesBlock}

    <div class="tier-cta">
      <p class="tier-motivation">${data.motivation}</p>
      <a href="#contato" class="btn btn-primary" data-tier-cta>
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

function setTier(tier) {
  tierButtons.forEach(b => {
    const isActive = Number(b.dataset.tier) === tier;
    b.setAttribute('aria-selected', isActive);
  });

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
   MODAL — Lanche da Madrugada
   ========================================================= */
const modal = document.getElementById('modalLanche');

function openModal(key) {
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  // Focus management
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) setTimeout(() => closeBtn.focus(), 100);
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

// Global delegated handler: triggers and close buttons
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-modal-trigger="lanche"]');
  if (trigger) {
    e.preventDefault();
    openModal('lanche');
    return;
  }
  const closer = e.target.closest('[data-modal-close]');
  if (closer && modal && modal.classList.contains('is-open')) {
    // Allow CTAs that link to anchors to also close
    closeModal();
  }
});

// Keyboard: Enter/Space on trigger, ESC to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
    closeModal();
    return;
  }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-modal-trigger="lanche"]')) {
    e.preventDefault();
    openModal('lanche');
  }
});
