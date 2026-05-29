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
      { num: '3', label: 'Pratos principais', desc: 'Frango, Picanha Suína e Filet com molhos à escolha.' },
      { num: '1', label: 'Massa', desc: 'Spaghetti ou Penne em variações clássicas.' },
      { num: '3', label: 'Guarnições', desc: 'De arroz à grega a purê de batata com ervas finas.' },
      { num: '4', label: 'Saladas', desc: 'Folhas, salpicão, mix de rúcula com tomate seco.' },
    ],
    includes: [],
    motivation: 'Escolha cada item com a equipe e monte o cardápio perfeito para a sua celebração.',
    progress: 20,
  },
  2: {
    name: 'Superior II',
    tagline: 'Variedade ampliada — incluindo camarão e entradas quentes.',
    price: { value: '169', cents: '90' },
    features: [
      { num: '2', label: 'Entradas', desc: 'Mini risoto de alecrim, escondidinho de carne seca e mais.' },
      { num: '3', label: 'Pratos principais', desc: 'Frango, Picanha Suína, Camarão e Filet.' },
      { num: '2', label: 'Massas', desc: 'Gnocchi suíço, frutos do mar, manteiga e mais.' },
      { num: '4', label: 'Guarnições', desc: 'Inclui purê de aipim com bacon.' },
      { num: '5', label: 'Saladas', desc: 'Camarões com tomate seco, folhas nobres com gorgonzola.' },
    ],
    includes: [],
    motivation: 'Um menu com mais escolhas e ingredientes nobres na entrada e nas saladas.',
    progress: 40,
  },
  3: {
    name: 'Premium',
    tagline: 'Onde paella e caneloni encontram a sua mesa.',
    price: { value: '179', cents: '90' },
    features: [
      { num: '3', label: 'Entradas', desc: 'Bolinho de peixe, risotos selecionados, escondidinho de filet.' },
      { num: '4', label: 'Pratos principais', desc: 'Frango, Picanha, Camarão e Filet com novos molhos.' },
      { num: '2', label: 'Massas', desc: 'Inclui caneloni de frango e de camarão com catupiry.' },
      { num: '5', label: 'Guarnições', desc: 'Paella de frutos do mar entra como opção.' },
      { num: '5', label: 'Saladas', desc: 'Folhas, peras, gorgonzola, palmito e parmesão.' },
    ],
    includes: [],
    motivation: 'Mais variedade, mais sabor, mais autoria — sem subir para o nível executivo.',
    progress: 60,
  },
  4: {
    name: 'Privilege',
    tagline: 'Carré de cordeiro, salmão e Elegance Decor inclusos.',
    price: { value: '249', cents: '90' },
    features: [
      { num: '4', label: 'Entradas', desc: 'Mini paella, caldeirada e queijo de colono em cubos.' },
      { num: '4', label: 'Pratos principais', desc: 'Carré de Cordeiro, Salmão, Camarão e cortes nobres.' },
      { num: '2', label: 'Massas', desc: 'Frutos do mar, açafrão, caneloni e gnocchi.' },
      { num: '5', label: 'Guarnições', desc: 'Coração de palmito, legumes salteados, paella.' },
      { num: '6', label: 'Saladas', desc: 'Carpaccio de filet com rúcula, peras com gorgonzola.' },
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
      { num: '4', label: 'Entradas', desc: 'Tudo o que o Privilege oferece, com toques de assinatura.' },
      { num: '4', label: 'Pratos principais', desc: 'Carré de Cordeiro, Salmão, Camarão, Filet, Frango e Picanha.' },
      { num: '2', label: 'Massas', desc: 'Caneloni de camarão, frutos do mar com açafrão e mais.' },
      { num: '5', label: 'Guarnições', desc: 'Paella de frutos do mar, coração de palmito ao vapor.' },
      { num: '6', label: 'Saladas', desc: 'Carpaccio, frutos do mar, peras com gorgonzola e nozes.' },
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
          ${data.includes.map(i => `<li>${i}</li>`).join('')}
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
