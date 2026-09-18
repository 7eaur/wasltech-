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


function initPortfolioV2() {
  const grid = document.getElementById('portfolioGrid');
  const filters = document.getElementById('portfolioFilters');
  const overlay = document.getElementById('projectDrawerOverlay');
  const drawerClose = document.getElementById('drawerClose');
  const drawerCloseSecondary = document.getElementById('drawerCloseSecondary');
  if (!grid || !filters || !overlay) return;

  const categories = [...new Map(portfolioData.map(item => [item.category, item.categoryName])).entries()];
  let current = 'all';
  let lastTrigger = null;

  function renderFilters() {
    const items = [['all', 'الكل'], ...categories];
    filters.innerHTML = items.map(([value, label]) => `
      <button class="filter-btn ${value === current ? 'active' : ''}" type="button" data-filter="${value}" aria-pressed="${value === current}">${label}</button>
    `).join('');
  }

  function render() {
    const items = current === 'all' ? portfolioData : portfolioData.filter(item => item.category === current);
    grid.innerHTML = items.map(item => `
      <article class="project-card-v2">
        <div class="project-image-v2">
          <img src="${item.image}" alt="${item.title}" loading="lazy" width="900" height="560" />
        </div>
        <div class="project-body-v2">
          <span class="project-meta-v2">${item.categoryName}</span>
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <div class="project-actions">
            <button class="btn btn-outline js-project-details" type="button" data-id="${item.id}">استعرض التفاصيل</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  function openDrawer(item, trigger) {
    lastTrigger = trigger;
    const image = document.getElementById('drawerImage');
    image.src = item.image;
    image.alt = item.title;
    document.getElementById('drawerCategory').textContent = item.categoryName;
    document.getElementById('drawerTitle').textContent = item.title;
    document.getElementById('drawerDescription').textContent = item.description;
    const cta = document.getElementById('drawerCta');
    cta.href = item.link;
    cta.target = '_blank';
    cta.rel = 'noopener';
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
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

  drawerClose?.addEventListener('click', closeDrawer);
  drawerCloseSecondary?.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', event => { if (event.target === overlay) closeDrawer(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && overlay.classList.contains('active')) closeDrawer();
  });

  renderFilters();
  render();
}

document.addEventListener('DOMContentLoaded', initPortfolioV2);
