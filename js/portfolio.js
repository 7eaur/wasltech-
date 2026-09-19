/**
 * =====================================================
 * WASL TECH - PORTFOLIO DATA & LOGIC
 * ملف لإدارة وعرض بيانات الأعمال بشكل مرن (Dynamic)
 * =====================================================
 */

// 1. قائمة الأعمال (أضف، احذف، وعدل كما تشاء)
const portfolioData = [
  {
    id: 1,
    title: "منصة صوركم الرقمية",
    category: "web",
    categoryName: "مواقع",
    icon: "fa-globe",
    image: "assets/works/project_1.jpg",
    description: "منصة متخصصة لإدارة ومشاركة الصور بخصوصية عالية، تربط المصورين والعملاء بنظام وصول آمن.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع منصة مشابهة لصوركم الرقمية."
  },
  {
    id: 2,
    title: "منصة وصّل للعمل الحر",
    category: "web",
    categoryName: "مواقع",
    icon: "fa-globe",
    image: "assets/works/project_2.jpg",
    description: "منصة عربية حديثة تعمل كوسيط آمن بين مقدمي الخدمات والعملاء مع نظام محادثات ودفع متكامل.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع منصة مشابهة لوصّل."
  },
  {
    id: 3,
    title: "لوحة تحكم الميكروتيك",
    category: "web",
    categoryName: "مواقع (أنظمة)",
    icon: "fa-server",
    image: "assets/works/project_3.jpg",
    description: "نظام متقدم لإدارة وتتبع مستخدمي شبكات الواي فاي وتوليد الكروت وإدارة الجلسات برمجياً.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع نظام مشابه للوحة الميكروتيك."
  },
  {
    id: 4,
    title: "لوحة إدارة محتوى (CMS)",
    category: "web",
    categoryName: "مواقع (أنظمة)",
    icon: "fa-desktop",
    image: "assets/works/project_4.jpg",
    description: "لوحة تحكم مركزية تتيح للشركات تغيير محتوى مواقعها بالكامل ديناميكياً بكل سهولة ومرونة.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن نظام لوحة تحكم CMS مشابهة."
  },
  {
    id: 5,
    title: " تيك زون الإلكتروني",
    category: "app",
    categoryName: "تطبيقات",
    icon: "fa-shopping-cart",
    image: "assets/works/project_5.jpg",
    description: "متجر إلكتروني يركز على تجربة المستخدم مع سلة تسوق ذكية ونظام تتبع وسرعة أداء عالية.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تصميم متجر إلكتروني مشابه لتيك زون."
  },
  {
    id: 6,
    title: " أروما كافيه",
    category: "app",
    categoryName: "تطبيقات",
    icon: "fa-mobile-alt",
    image: "assets/works/project_6.jpg",
    description: "تطبيق هاتف لطلب القهوة يضم نظام ولاء وخرائط للفروع مع واجهات مميزة ومريحة للعين.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن برمجة تطبيق مشابه لأروما كافيه."
  },
  {
    id: 7,
    title: " البناء المتقن",
    category: "web",
    categoryName: "مواقع",
    icon: "fa-globe",
    image: "assets/works/project_13.jpg",
    description: "موقع احترافي لشركة مقاولات وهندسة يعرض المشاريع والخدمات بطريقة عصرية، مع تجربة استخدام متجاوبة تسهّل طلب عروض الأسعار.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع موقع مشابه للبناء المتقن."
  },
  {
    id: 8,
    title: " النخبة للإلكترونيات",
    category: "store",
    categoryName: "متاجر",
    icon: "fa-shopping-cart",
    image: "assets/works/project_10.jpg",
    description: "متجر إلكتروني متكامل لبيع الأجهزة والإلكترونيات، يوفر تجربة تسوق سريعة مع تصنيفات ذكية وسهولة في إتمام الطلبات.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن مشروع متجر إلكتروني مشابه."
  },
  {
    id: 9,
    title: "هوية بصرية لمطعم الملكي",
    category: "brand",
    categoryName: "هوية بصرية",
    icon: "fa-pen-nib",
    image: "assets/works/project_7.jpg",
    description: "هوية بصرية فاخرة صُممت لتعكس جودة المطعم ورقيه، وتشمل الشعار، والألوان، والمطبوعات، والتغليف بأسلوب يعزز حضور العلامة التجارية.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تصميم هوية بصرية."
  },
  {
    id: 10,
    title: "هوية بصرية لشركة ميلانو",
    category: "brand",
    categoryName: "هوية بصرية",
    icon: "fa-pen-nib",
    image: "assets/works/project_9.jpg",
    description: "هوية تقنية حديثة تجمع بين البساطة والابتكار، مع شعار احترافي ونظام بصري متكامل يعكس هوية الشركة ويعزز حضورها في السوق.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن تصميم هوية بصرية."
  },
  {
    id: 11,
    title: "الحملة التسويقية لمتجر فخري للعطور",
    category: "marketing",
    categoryName: "تسويق",
    icon: "fa-bullhorn",
    image: "assets/works/project_12.jpg",
    description: "حملة تسويقية رقمية متكاملة تضمنت استراتيجية المحتوى، وتصاميم الإعلانات، وحملات التواصل الاجتماعي لتعزيز الوعي بالعلامة.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن حملة تسويقية."
  },
  {
    id: 12,
    title: " فخري للعطور",
    category: "store",
    categoryName: "متاجر",
    icon: "fa-shopping-cart",
    image: "assets/works/project_8.jpg",
    description: "متجر إلكتروني فاخر للعطور بتصميم راقٍ وتجربة تسوق مميزة، يركز على إبراز المنتجات الفاخرة مع واجهة سهلة الاستخدام.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن متجر إلكتروني."
  },
  {
    id: 13,
    title: " كيدي للملابس",
    category: "store",
    categoryName: "متاجر",
    icon: "fa-shopping-cart",
    image: "assets/works/project_14.jpg",
    description: "متجر إلكتروني متخصص في ملابس الأطفال، يقدم تجربة تسوق عصرية مع تصنيفات واضحة، وعرض جذاب للمنتجات يضمن سهولة التصفح والشراء.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن متجر إلكتروني مشابه لكيدي."
  },
  {
    id: 14,
    title: " مكتب الحباري للمحاماة",
    category: "web",
    categoryName: "مواقع",
    icon: "fa-balance-scale",
    image: "assets/works/project_11.jpg",
    description: "موقع إلكتروني احترافي لمكتب محاماة واستشارات قانونية، صُمم لإبراز الخدمات القانونية وتعزيز الثقة من خلال واجهة أنيقة وتجربة استخدام سلسة.",
    link: "https://wa.me/967775377979?text=مرحباً، أود الاستفسار عن برمجة موقع مشابه لمكتب الحباري."
  }
];

const portfolioHighlights = {
  1: ['إدارة ومشاركة الصور', 'خصوصية وصول العملاء', 'منصة مخصصة للمصورين والعملاء'],
  2: ['وساطة بين مقدمي الخدمات والعملاء', 'نظام محادثات', 'نظام دفع ضمن المنصة'],
  3: ['إدارة مستخدمي شبكات الواي فاي', 'توليد الكروت', 'إدارة وتتبع الجلسات'],
  4: ['إدارة محتوى الموقع مركزيًا', 'تعديل المحتوى ديناميكيًا', 'لوحة تحكم للشركات'],
  5: ['تجربة متجر إلكتروني', 'سلة تسوق', 'تتبع الطلبات'],
  6: ['طلب القهوة من التطبيق', 'نظام ولاء', 'خرائط للفروع'],
  7: ['عرض مشاريع وخدمات شركة المقاولات', 'تجربة متجاوبة', 'تسهيل طلب عروض الأسعار'],
  8: ['عرض الأجهزة والإلكترونيات', 'تصنيفات للمنتجات', 'تجربة إتمام الطلب'],
  9: ['شعار وهوية بصرية', 'نظام ألوان', 'مطبوعات وتغليف'],
  10: ['شعار احترافي', 'نظام بصري متكامل', 'هوية بطابع تقني حديث'],
  11: ['استراتيجية محتوى', 'تصاميم إعلانية', 'حملات على شبكات التواصل'],
  12: ['عرض منتجات العطور', 'تجربة تسوق', 'واجهة تركز على المنتجات الفاخرة'],
  13: ['تصنيفات واضحة', 'عرض منتجات ملابس الأطفال', 'تجربة تصفح وشراء'],
  14: ['عرض الخدمات القانونية', 'واجهة احترافية', 'تجربة تركز على الثقة وسهولة الاستخدام']
};

const portfolioServiceMap = {
  1: { id: 'web', name: 'تطوير المواقع الإلكترونية' },
  2: { id: 'web', name: 'تطوير المواقع الإلكترونية' },
  3: { id: 'programming', name: 'البرمجة وتطوير الأنظمة' },
  4: { id: 'programming', name: 'البرمجة وتطوير الأنظمة' },
  5: { id: 'app', name: 'تطوير تطبيقات الجوال' },
  6: { id: 'app', name: 'تطوير تطبيقات الجوال' },
  7: { id: 'web', name: 'تطوير المواقع الإلكترونية' },
  8: { id: 'store', name: 'المتاجر الإلكترونية' },
  9: { id: 'design', name: 'الهوية البصرية والتصميم' },
  10: { id: 'design', name: 'الهوية البصرية والتصميم' },
  11: { id: 'marketing', name: 'التسويق الرقمي وإدارة المحتوى' },
  12: { id: 'store', name: 'المتاجر الإلكترونية' },
  13: { id: 'store', name: 'المتاجر الإلكترونية' },
  14: { id: 'web', name: 'تطوير المواقع الإلكترونية' }
};

function initPortfolioV2() {
  const grid = document.getElementById('portfolioGrid');
  const filters = document.getElementById('portfolioFilters');
  const overlay = document.getElementById('projectDrawerOverlay');
  const drawer = document.getElementById('projectDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerCloseSecondary = document.getElementById('drawerCloseSecondary');
  const drawerScroll = drawer?.querySelector('.portfolio-drawer-scroll');
  if (!grid || !filters || !overlay || !drawer) return;

  const categories = [...new Map(portfolioData.map(item => [item.category, item.categoryName])).entries()];
  let current = 'all';
  let lastTrigger = null;

  document.getElementById('portfolioProjectCount').textContent = String(portfolioData.length);
  document.getElementById('portfolioCategoryCount').textContent = String(categories.length);

  function categoryCount(value) {
    return value === 'all' ? portfolioData.length : portfolioData.filter(item => item.category === value).length;
  }

  function renderFilters() {
    const items = [['all', 'الكل'], ...categories];
    filters.innerHTML = items.map(([value, label]) => `
      <button class="filter-btn ${value === current ? 'active' : ''}" type="button" data-filter="${value}" aria-pressed="${value === current}">
        <span>${label}</span><small>${categoryCount(value)}</small>
      </button>
    `).join('');
  }

  function render() {
    const items = current === 'all' ? portfolioData : portfolioData.filter(item => item.category === current);
    grid.innerHTML = items.map((item, index) => `
      <article class="portfolio-project-card ${index === 0 ? 'portfolio-project-featured' : ''}" data-category="${item.category}">
        <div class="portfolio-project-image">
          <img src="${item.image}" alt="${item.title.trim()}" loading="lazy" width="900" height="560" />
        </div>
        <div class="portfolio-project-body">
          <div class="portfolio-project-meta">
            <span>${item.categoryName}</span>
            <small>${String(item.id).padStart(2, '0')}</small>
          </div>
          <h2>${item.title.trim()}</h2>
          <p>${item.description}</p>
          <button class="text-link portfolio-detail-trigger js-project-details" type="button" data-id="${item.id}">
            استعرض تفاصيل المشروع <i class="fas fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div>
      </article>
    `).join('');
  }

  function renderHighlights(item) {
    const highlights = portfolioHighlights[item.id] || [];
    const container = document.getElementById('drawerHighlights');
    container.innerHTML = highlights.map((highlight, index) => `
      <div class="portfolio-highlight-row">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <strong>${highlight}</strong>
      </div>
    `).join('');
  }

  function renderService(item) {
    const service = portfolioServiceMap[item.id];
    const name = document.getElementById('drawerServiceName');
    const link = document.getElementById('drawerServiceLink');
    if (!service) {
      name.textContent = 'خدمات وصل تك';
      link.href = 'services.html';
      return;
    }
    name.textContent = service.name;
    link.href = `service-web.html?id=${service.id}`;
  }

  function renderRelated(item) {
    const section = document.getElementById('drawerRelatedSection');
    const container = document.getElementById('drawerRelatedProjects');
    const related = portfolioData
      .filter(project => project.category === item.category && project.id !== item.id)
      .slice(0, 3);

    if (!related.length) {
      section.hidden = true;
      container.innerHTML = '';
      return;
    }

    container.innerHTML = related.map(project => `
      <button class="portfolio-related-item" type="button" data-related-id="${project.id}">
        <img src="${project.image}" alt="" width="220" height="150" loading="lazy" />
        <span><small>${project.categoryName}</small><strong>${project.title.trim()}</strong></span>
        <i class="fas fa-arrow-left" aria-hidden="true"></i>
      </button>
    `).join('');
    section.hidden = false;
  }

  function openDrawer(item, trigger, preserveTrigger = false) {
    if (!preserveTrigger) lastTrigger = trigger;

    const title = item.title.trim();
    const image = document.getElementById('drawerImage');
    image.src = item.image;
    image.alt = title;

    document.getElementById('drawerHeaderCategory').textContent = item.categoryName;
    document.getElementById('drawerCategory').textContent = item.categoryName;
    document.getElementById('drawerTitle').textContent = title;
    document.getElementById('drawerDescription').textContent = item.description;

    renderHighlights(item);
    renderService(item);
    renderRelated(item);

    const cta = document.getElementById('drawerCta');
    cta.href = item.link;
    cta.target = '_blank';
    cta.rel = 'noopener';
    cta.setAttribute('aria-label', `أريد مشروعًا مشابهًا لـ ${title}`);

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (drawerScroll) drawerScroll.scrollTop = 0;
    requestAnimationFrame(() => drawerClose?.focus());
  }

  function closeDrawer() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastTrigger?.focus();
  }

  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    current = button.dataset.filter;
    renderFilters();
    render();
  });

  grid.addEventListener('click', event => {
    const button = event.target.closest('.js-project-details');
    if (!button) return;
    const item = portfolioData.find(project => String(project.id) === button.dataset.id);
    if (item) openDrawer(item, button);
  });

  document.getElementById('drawerRelatedProjects')?.addEventListener('click', event => {
    const button = event.target.closest('[data-related-id]');
    if (!button) return;
    const item = portfolioData.find(project => String(project.id) === button.dataset.relatedId);
    if (item) openDrawer(item, lastTrigger, true);
  });

  drawerClose?.addEventListener('click', closeDrawer);
  drawerCloseSecondary?.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closeDrawer();
  });

  document.addEventListener('keydown', event => {
    if (!overlay.classList.contains('active')) return;

    if (event.key === 'Escape') {
      closeDrawer();
      return;
    }

    if (event.key === 'Tab') {
      const focusable = [...drawer.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
        .filter(element => !element.hidden && element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  renderFilters();
  render();
}

document.addEventListener('DOMContentLoaded', initPortfolioV2);
