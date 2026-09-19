document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const serviceOrder = ['web', 'app', 'store', 'programming', 'tech', 'design', 'profiles', 'marketing'];

  const presentation = {
    web: {
      group: 'المنتج والتقنية',
      label: 'موقع ومنصة',
      mode: 'product',
      related: [
        { title: 'منصة صوركم الرقمية', category: 'منصة ويب', image: 'assets/works/project_1.jpg' },
        { title: 'البناء المتقن', category: 'موقع شركة', image: 'assets/works/project_13.jpg' },
        { title: 'مكتب الحباري للمحاماة', category: 'موقع خدمات', image: 'assets/works/project_11.jpg' }
      ]
    },
    app: {
      group: 'المنتج والتقنية',
      label: 'تطبيق جوال',
      mode: 'product',
      related: [
        { title: 'تيك زون الإلكتروني', category: 'تطبيق', image: 'assets/works/project_5.jpg' },
        { title: 'أروما كافيه', category: 'تطبيق', image: 'assets/works/project_6.jpg' }
      ]
    },
    store: {
      group: 'المنتج والتقنية',
      label: 'متجر إلكتروني',
      mode: 'product',
      related: [
        { title: 'النخبة للإلكترونيات', category: 'متجر إلكتروني', image: 'assets/works/project_10.jpg' },
        { title: 'فخري للعطور', category: 'متجر إلكتروني', image: 'assets/works/project_8.jpg' },
        { title: 'كيدي للملابس', category: 'متجر إلكتروني', image: 'assets/works/project_14.jpg' }
      ]
    },
    programming: {
      group: 'المنتج والتقنية',
      label: 'برمجة مخصصة',
      mode: 'system',
      related: [
        { title: 'لوحة تحكم الميكروتيك', category: 'نظام ويب', image: 'assets/works/project_3.jpg' },
        { title: 'لوحة إدارة محتوى (CMS)', category: 'لوحة تحكم', image: 'assets/works/project_4.jpg' }
      ]
    },
    tech: {
      group: 'الحلول التقنية',
      label: 'حل تقني',
      mode: 'system',
      related: [
        { title: 'لوحة تحكم الميكروتيك', category: 'نظام ويب', image: 'assets/works/project_3.jpg' },
        { title: 'لوحة إدارة محتوى (CMS)', category: 'لوحة تحكم', image: 'assets/works/project_4.jpg' }
      ]
    },
    design: {
      group: 'الهوية والحضور',
      label: 'هوية بصرية',
      mode: 'presence',
      related: [
        { title: 'هوية بصرية لمطعم الملكي', category: 'هوية بصرية', image: 'assets/works/project_7.jpg' },
        { title: 'هوية بصرية لشركة ميلانو', category: 'هوية بصرية', image: 'assets/works/project_9.jpg' }
      ]
    },
    profiles: {
      group: 'الهوية والحضور',
      label: 'بروفايل شركة',
      mode: 'presence',
      related: []
    },
    marketing: {
      group: 'الهوية والحضور',
      label: 'تسويق رقمي',
      mode: 'presence',
      related: [
        { title: 'الحملة التسويقية لمتجر فخري للعطور', category: 'تسويق رقمي', image: 'assets/works/project_12.jpg' }
      ]
    }
  };

  let id = params.get('id');
  if (typeof servicesData === 'undefined') return;
  if (!id || !servicesData[id]) id = 'web';

  const data = servicesData[id];
  const ui = presentation[id] || { group: 'خدمات وصل تك', label: 'خدمة رقمية', mode: 'product', related: [] };
  const byId = value => document.getElementById(value);
  const index = serviceOrder.indexOf(id);
  const absoluteImage = path => 'https://www.wasl-tech.com/' + path.replace(/^\//, '');

  document.body.dataset.service = id;
  document.body.dataset.serviceMode = ui.mode;

  document.title = `${data.title} | وصل تك — Wasl Tech`;
  byId('serviceMetaDescription')?.setAttribute('content', data.desc);
  byId('serviceOgTitle')?.setAttribute('content', `${data.title} | وصل تك`);
  byId('serviceOgDescription')?.setAttribute('content', data.desc);
  byId('serviceOgImage')?.setAttribute('content', absoluteImage(data.heroImage));
  const canonical = byId('serviceCanonical');
  if (canonical) canonical.href = `https://www.wasl-tech.com/service-web.html?id=${encodeURIComponent(id)}`;

  byId('serviceBreadcrumbCurrent').textContent = data.title;
  byId('serviceGroupLabel').textContent = ui.group;
  byId('serviceIndex').textContent = `${String(index + 1).padStart(2, '0')} / ${String(serviceOrder.length).padStart(2, '0')}`;
  byId('serviceLabelTitle').textContent = ui.label;

  byId('sd-title').textContent = data.title;
  byId('sd-subtitle').textContent = data.subtitle;
  byId('sd-desc').textContent = data.desc;

  const hero = byId('sd-hero-image');
  hero.src = data.heroImage;
  hero.alt = data.heroAlt || data.title;

  const related = ui.related || [];

  const ctaText = encodeURIComponent(`مرحباً، أود الاستفسار عن خدمة: ${data.title}`);
  const whatsappUrl = `https://wa.me/967775377979?text=${ctaText}`;
  const heroCta = byId('serviceHeroCta');
  heroCta.href = whatsappUrl;
  heroCta.target = '_blank';
  heroCta.rel = 'noopener';

  const highlights = byId('serviceHighlights');
  highlights.innerHTML = data.heroCards.map(card => `
    <article class="craft-service-highlight">
      <span class="craft-service-highlight-icon"><i class="${card.icon}" aria-hidden="true"></i></span>
      <div><h3>${card.title}</h3><p>${card.desc}</p></div>
    </article>
  `).join('');

  byId('serviceFitTitle').textContent = `لمن يمكن أن تكون ${data.title} مناسبة؟`;
  const targets = byId('serviceTargets');
  targets.innerHTML = data.targets.map((item, targetIndex) => `
    <div class="craft-service-target-row">
      <span class="craft-service-target-index">${String(targetIndex + 1).padStart(2, '0')}</span>
      <span class="craft-service-target-icon"><i class="${item.icon}" aria-hidden="true"></i></span>
      <strong>${item.title}</strong>
    </div>
  `).join('');

  const deliverableCopy = {
    product: {
      title: 'ما الذي يمكن أن يدخل ضمن تنفيذ هذه الخدمة؟',
      intro: 'يتم تحديد النطاق النهائي بعد فهم المشروع، وهذه أبرز العناصر التي يمكن أن تكون جزءًا من التنفيذ.'
    },
    system: {
      title: 'ما الذي يمكن أن نبنيه أو نربطه ضمن هذه الخدمة؟',
      intro: 'التركيز هنا على الوظائف والبيانات والتكاملات التي يحتاجها العمل فعليًا، وليس إضافة تعقيد غير ضروري.'
    },
    presence: {
      title: 'ما الذي يمكن أن تستلمه ضمن هذه الخدمة؟',
      intro: 'يتغير نطاق التسليم حسب احتياج المشروع، وهذه أهم المخرجات التي يمكن أن تدخل ضمن العمل.'
    }
  };
  const deliverableText = deliverableCopy[ui.mode] || deliverableCopy.product;
  byId('deliverablesTitle').textContent = deliverableText.title;
  byId('deliverablesIntro').textContent = deliverableText.intro;

  const deliverables = byId('serviceDeliverables');
  deliverables.innerHTML = data.features.map((item, featureIndex) => `
    <article class="craft-service-deliverable">
      <span class="craft-service-deliverable-index">${String(featureIndex + 1).padStart(2, '0')}</span>
      <span class="craft-service-deliverable-icon"><i class="${item.icon}" aria-hidden="true"></i></span>
      <div><h3>${item.title}</h3><p>${item.desc}</p></div>
    </article>
  `).join('');

  const relatedSection = byId('serviceRelatedSection');
  const relatedWork = byId('serviceRelatedWork');
  if (related.length && relatedSection && relatedWork) {
    relatedWork.innerHTML = related.map(item => `
      <article class="craft-service-related-card">
        <a href="portfolio.html" aria-label="عرض ${item.title} ضمن معرض الأعمال">
          <div class="craft-service-related-media"><img src="${item.image}" alt="${item.title}" width="760" height="500" loading="lazy" /></div>
          <div class="craft-service-related-copy"><span>${item.category}</span><h3>${item.title}</h3><strong>عرض ضمن الأعمال <i class="fas fa-arrow-left" aria-hidden="true"></i></strong></div>
        </a>
      </article>
    `).join('');
    relatedSection.hidden = false;
  }

  const steps = byId('serviceSteps');
  steps.innerHTML = data.steps.map((item, stepIndex) => `
    <article class="craft-service-step">
      <span class="craft-service-step-number">${String(stepIndex + 1).padStart(2, '0')}</span>
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
  cta.href = whatsappUrl;
  cta.target = '_blank';
  cta.rel = 'noopener';

  const previousId = serviceOrder[(index - 1 + serviceOrder.length) % serviceOrder.length];
  const nextId = serviceOrder[(index + 1) % serviceOrder.length];
  const previousLink = byId('servicePrev');
  const nextLink = byId('serviceNext');
  previousLink.href = `service-web.html?id=${previousId}`;
  previousLink.querySelector('strong').textContent = servicesData[previousId].title;
  nextLink.href = `service-web.html?id=${nextId}`;
  nextLink.querySelector('strong').textContent = servicesData[nextId].title;
});
