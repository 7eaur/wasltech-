document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  let id = params.get('id');
  if (typeof servicesData === 'undefined') return;
  if (!id || !servicesData[id]) id = 'web';

  const data = servicesData[id];
  const byId = value => document.getElementById(value);

  document.title = `${data.title} | وصل تك — Wasl Tech`;
  const meta = byId('serviceMetaDescription');
  if (meta) meta.setAttribute('content', data.desc);

  byId('sd-title').textContent = data.title;
  byId('sd-subtitle').textContent = data.subtitle;
  byId('sd-desc').textContent = data.desc;

  const hero = byId('sd-hero-image');
  hero.src = data.heroImage;
  hero.alt = data.title;

  const highlights = byId('serviceHighlights');
  highlights.innerHTML = data.heroCards.map(card => `
    <article class="service-highlight">
      <h3><i class="${card.icon}" aria-hidden="true"></i> ${card.title}</h3>
      <p>${card.desc}</p>
    </article>
  `).join('');

  const targets = byId('serviceTargets');
  targets.innerHTML = data.targets.map(item => `
    <span class="target-chip"><i class="${item.icon}" aria-hidden="true"></i>${item.title}</span>
  `).join('');

  const deliverables = byId('serviceDeliverables');
  deliverables.innerHTML = data.features.map(item => `
    <article class="deliverable">
      <span class="icon"><i class="${item.icon}" aria-hidden="true"></i></span>
      <div><h3>${item.title}</h3><p>${item.desc}</p></div>
    </article>
  `).join('');

  const steps = byId('serviceSteps');
  steps.innerHTML = data.steps.map(item => `
    <article class="service-step">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </article>
  `).join('');

  const faqs = byId('serviceFaqs');
  faqs.innerHTML = data.faqs.map(item => `
    <details>
      <summary>${item.q}</summary>
      <p>${item.a}</p>
    </details>
  `).join('');

  byId('sd-cta-title').textContent = data.cta.title;
  byId('sd-cta-desc').textContent = data.cta.desc;
  const cta = byId('sd-cta-btn');
  cta.textContent = data.cta.btnText;
  const text = encodeURIComponent(`مرحباً، أود الاستفسار عن خدمة: ${data.title}`);
  cta.href = `https://wa.me/967775377979?text=${text}`;
  cta.target = '_blank';
  cta.rel = 'noopener';

  document.body.dataset.service = id;
});
