/**
 * =====================================================
 * WASL TECH - MAIN JS (مشترك بين جميع الصفحات)
 * =====================================================
 */

/**
 * تأثير الظهور عند التمرير (Scroll Animation)
 * يستخدم IntersectionObserver لأداء عالي
 */
function initFadeUpAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // توقف عن المراقبة بعد الظهور
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/**
 * تمييز رابط الصفحة الحالية في الهيدر
 */
function initActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * سلوك الهيدر عند التمرير (Sticky Shadow)
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
    if (scrollToTopBtn) {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });
  
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * قائمة الجوال (Hamburger Menu)
 */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    const spans  = hamburger.querySelectorAll('span');

    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 6px)' : '';
    spans[1].style.opacity   = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -6px)' : '';
    
    // Prevent background scrolling when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // إغلاق القائمة عند النقر على الروابط
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.querySelectorAll('span').forEach(s => s.style = '');
      document.body.style.overflow = '';
    });
  });
}

// ── تشغيل جميع الدوال عند اكتمال تحميل الصفحة ──
document.addEventListener('DOMContentLoaded', () => {
  initFadeUpAnimation();
  initActiveNavLink();
  initHeaderScroll();
  initMobileMenu();
});

// ── إخفاء شاشة التحميل عند اكتمال تحميل كل شيء ──
// تمت الإزالة بناءً على طلب المستخدم
