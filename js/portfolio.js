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

// 2. دالة عرض الأعمال في الشبكة
function renderPortfolio(filter = 'all', limit = null) {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return; // الخروج إذا لم تكن في صفحة تحتوي على معرض أعمال

  // تصفية الأعمال بناءً على التصنيف
  let filteredData = portfolioData;
  if (filter !== 'all') {
    filteredData = portfolioData.filter(item => item.category === filter);
  }

  // هل نحن في وضع السلايدر؟ (الصفحه الرئيسية)
  const isSlider = grid.getAttribute('data-mode') === 'slider';

  if (isSlider) {
    grid.classList.add('pf-slider-mode');
    // جلب عمل واحد فقط من كل تصنيف
    const uniqueCategories = new Set();
    filteredData = portfolioData.filter(item => {
      if (!uniqueCategories.has(item.category)) {
        uniqueCategories.add(item.category);
        return true;
      }
      return false;
    });
  } else {
    grid.classList.remove('pf-slider-mode');
    // تحديد عدد الأعمال المراد عرضها فقط إذا لم نكن في السلايدر
    if (limit) {
      filteredData = filteredData.slice(0, limit);
    }
  }

  // توليد كود الـ HTML وإدخاله في الحاوية
  grid.innerHTML = filteredData.map((item, index) => {
    // توزيع تأخير الحركة بشكل جمالي
    const delayClass = index % 3 === 1 ? 'delay-100' : index % 3 === 2 ? 'delay-200' : '';
    
    return `
      <div class="pf-card fade-up ${delayClass}" data-category="${item.category}">
        <div class="pfc-img">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="pfc-content">
          <h3>${item.title}</h3>
          <div class="pfc-cat"><i class="fas ${item.icon}"></i> ${item.categoryName}</div>
          <p>${item.description || 'تصميم وتطوير احترافي يعكس رؤيتك ويحقق أهدافك.'}</p>
          <a href="${item.link}" target="_blank" class="btn-pf-details">اطلب مثل هذا <i class="fas fa-chevron-left"></i></a>
        </div>
      </div>
    `;
  }).join('');

  // إظهار البطاقات فوراً لأنها تولدت برمجياً وقد يفوتها IntersectionObserver
  setTimeout(() => {
    const newCards = grid.querySelectorAll('.pf-card');
    newCards.forEach(card => card.classList.add('visible'));
  }, 50);
}

// 3. تهيئة الفلتر والعرض
function initPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  // إضافة بعض التنسيقات للانتقال السلس
  grid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  // هل نحن في الصفحة الرئيسية ونحتاج لعدد محدود؟ (مثلاً 6 أعمال فقط)
  const isHome = grid.hasAttribute('data-limit');
  const limit = isHome ? parseInt(grid.getAttribute('data-limit')) : null;

  // العرض المبدئي
  renderPortfolio('all', limit);

  // منطق أزرار الفلترة
  const filterBtns = document.querySelectorAll('.pf-filter');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // إزالة الكلاس النشط من جميع الأزرار
      filterBtns.forEach(f => f.classList.remove('active'));
      // إضافة الكلاس للزر المضغوط
      btn.classList.add('active');

      // جلب نوع الفلتر وتحديث العرض
      const filterValue = btn.getAttribute('data-filter');
      
      // إضافة تأثير إخفاء وإظهار سريع
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        renderPortfolio(filterValue, limit);
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }, 300); // 300ms للانتظار حتى ينتهي التأثير
    });
  });
}

// تشغيل التهيئة فوراً (بما أن السكربت موجود في أسفل الصفحة)
initPortfolio();
