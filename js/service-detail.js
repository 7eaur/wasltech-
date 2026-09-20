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
  const ui = presentation[id] || {
    group: 'خدمات وصل تك',
    label: 'خدمة رقمية',
    mode: 'product',
    related: []
  };

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
  if (canonical) {
    canonical.href = `https://www.wasl-tech.com/service-web.html?id=${encodeURIComponent(id)}`;
  }

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

  const whatsappUrl = `https://wa.me/967775377979?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن خدمة: ${data.title}`)}`;
  const heroCta = byId('serviceHeroCta');
  heroCta.href = whatsappUrl;
  heroCta.target = '_blank';
  heroCta.rel = 'noopener';

  const highlights = byId('serviceHighlights');
  highlights.innerHTML = data.heroCards.map((card, highlightIndex) => `
    <article class="service5-highlight">
      <span>${String(highlightIndex + 1).padStart(2, '0')}</span>
      <div><strong>${card.title}</strong><small>${card.desc}</small></div>
    </article>
  `).join('');

  byId('serviceFitTitle').textContent = `لمن يمكن أن تكون ${data.title} مناسبة؟`;
  const targets = byId('serviceTargets');
  targets.innerHTML = data.targets.map((item, targetIndex) => `
    <div class="service5-target">
      <span>${String(targetIndex + 1).padStart(2, '0')}</span>
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
      intro: 'نركز على الوظائف والبيانات والتكاملات التي يحتاجها العمل، بدون إضافة تعقيد غير ضروري.'
    },
    presence: {
      title: 'ما الذي يمكن أن تستلمه ضمن هذه الخدمة؟',
      intro: 'يتغير نطاق التسليم حسب احتياج المشروع، وهذه أبرز المخرجات التي يمكن أن تدخل ضمن العمل.'
    }
  };

  const deliverableText = deliverableCopy[ui.mode] || deliverableCopy.product;
  byId('deliverablesTitle').textContent = deliverableText.title;
  byId('deliverablesIntro').textContent = deliverableText.intro;

  const deliverables = byId('serviceDeliverables');
  deliverables.innerHTML = data.features.map((item, featureIndex) => `
    <article class="service5-deliverable">
      <span>${String(featureIndex + 1).padStart(2, '0')}</span>
      <div><h3>${item.title}</h3><p>${item.desc}</p></div>
    </article>
  `).join('');

  const relatedSection = byId('serviceRelatedSection');
  const relatedWork = byId('serviceRelatedWork');
  const related = ui.related || [];

  if (related.length && relatedSection && relatedWork) {
    relatedWork.innerHTML = related.map(item => `
      <a class="service5-related-card" href="portfolio.html" aria-label="عرض ${item.title} ضمن معرض الأعمال">
        <img src="${item.image}" alt="${item.title}" width="760" height="500" loading="lazy" />
        <div><span>${item.category}</span><strong>${item.title}</strong></div>
      </a>
    `).join('');
    relatedSection.hidden = false;
  }

  const steps = byId('serviceSteps');
  steps.innerHTML = data.steps.map((item, stepIndex) => `
    <li>
      <span>${String(stepIndex + 1).padStart(2, '0')}</span>
      <strong>${item.title}</strong>
      <small>${item.desc}</small>
    </li>
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
  previousLink.href = `service-web.html?id=${previousId}`;
  previousLink.querySelector('strong').textContent = servicesData[previousId].title;

  const nextLink = byId('serviceNext');
  nextLink.href = `service-web.html?id=${nextId}`;
  nextLink.querySelector('strong').textContent = servicesData[nextId].title;
});
