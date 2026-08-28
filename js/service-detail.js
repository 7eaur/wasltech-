document.addEventListener('DOMContentLoaded', () => {
  // Get ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  let serviceId = urlParams.get('id');
  
  // Default to web if no id or invalid id
  if (!serviceId || !servicesData[serviceId]) {
    serviceId = 'web';
  }
  
  const data = servicesData[serviceId];
  
  // Populate Title, Subtitle, Desc
  document.title = `${data.title} | وصل تك`;
  document.getElementById('sd-title').innerText = data.title;
  document.getElementById('sd-subtitle').innerText = data.subtitle;
  document.getElementById('sd-desc').innerText = data.desc;
  document.getElementById('sd-hero-image').src = data.heroImage;
  document.getElementById('sd-hero-image').alt = data.title;
  
  // Populate Hero Cards
  const heroCardsContainer = document.getElementById('sd-hero-cards');
  heroCardsContainer.innerHTML = '';
  data.heroCards.forEach(card => {
    heroCardsContainer.innerHTML += `
      <div class="sdh-card">
        <div class="sdh-card-icon"><i class="${card.icon}"></i></div>
        <div class="sdh-card-text">
          <h4>${card.title}</h4>
          <p>${card.desc}</p>
        </div>
      </div>
    `;
  });
  
  // Populate Targets
  const targetsContainer = document.getElementById('sd-targets');
  targetsContainer.innerHTML = '';
  data.targets.forEach(target => {
    targetsContainer.innerHTML += `
      <div class="sdt-card"><i class="${target.icon} sdt-icon"></i><h4>${target.title}</h4></div>
    `;
  });
  
  // Populate Features
  const featuresContainer = document.getElementById('sd-features');
  featuresContainer.innerHTML = '';
  data.features.forEach(feature => {
    featuresContainer.innerHTML += `
      <div class="sdf-card">
        <div class="sdf-icon"><i class="${feature.icon}"></i></div>
        <div class="sdf-text"><h4>${feature.title}</h4><p>${feature.desc}</p></div>
      </div>
    `;
  });
  
  // Populate Steps
  const stepsContainer = document.getElementById('sd-steps');
  stepsContainer.innerHTML = '';
  data.steps.forEach((step, index) => {
    const num = (index + 1).toString().padStart(2, '0');
    stepsContainer.innerHTML += `
      <div class="sds-card">
        <div class="sds-number">${num}</div>
        <div class="sds-icon"><i class="${step.icon}"></i></div>
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    `;
  });
  
  // Populate FAQs
  const faqContainer = document.getElementById('sd-faqs');
  faqContainer.innerHTML = '';
  data.faqs.forEach(faq => {
    faqContainer.innerHTML += `
      <details class="faq-details">
        <summary>${faq.q}</summary>
        <p>${faq.a}</p>
      </details>
    `;
  });
  
  // Populate CTA
  document.getElementById('sd-cta-title').innerText = data.cta.title;
  document.getElementById('sd-cta-desc').innerText = data.cta.desc;
  
  const waText = encodeURIComponent(`مرحباً، أود الاستفسار عن خدمة: ${data.title}`);
  const ctaBtn = document.getElementById('sd-cta-btn');
  ctaBtn.href = `https://wa.me/967775377979?text=${waText}`;
  ctaBtn.target = '_blank';
  ctaBtn.innerHTML = `${data.cta.btnText} <i class="fas fa-chevron-left" style="font-size: 1rem;"></i>`;
});
