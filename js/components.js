/** WASL TECH — shared header/footer */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header" id="header">
        <div class="container">
          <nav class="navbar" aria-label="التنقل الرئيسي">
            <a href="index.html" class="logo" aria-label="وصل تك - الرئيسية">
              <img src="assets/brand/wasl-tech-horizontal.svg" alt="وصل تك | Wasl Tech" class="logo-img logo-light" width="190" height="72" />
              <img src="assets/brand/wasl-tech-horizontal-white.svg" alt="" class="logo-img logo-dark" width="190" height="72" aria-hidden="true" />
            </a>
            <ul class="nav-links" id="navLinks">
              <li><a href="index.html" class="nav-link">الرئيسية</a></li>
              <li><a href="services.html" class="nav-link">خدماتنا</a></li>
              <li><a href="portfolio.html" class="nav-link">أعمالنا</a></li>
              <li><a href="process.html" class="nav-link">كيف نعمل</a></li>
              <li><a href="about.html" class="nav-link">من نحن</a></li>
              <li class="mobile-only mobile-contact"><a href="contact.html" class="btn btn-primary">ابدأ مشروعك</a></li>
            </ul>
            <div class="nav-actions">
              <button class="theme-toggle" id="themeToggle" type="button" aria-label="تفعيل الوضع الداكن" aria-pressed="false">
                <i class="far fa-moon" aria-hidden="true"></i>
              </button>
              <a href="contact.html" class="btn btn-primary nav-btn">ابدأ مشروعك</a>
              <button class="hamburger" id="hamburger" type="button" aria-label="فتح القائمة" aria-controls="navLinks" aria-expanded="false">
                <span></span><span></span><span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div class="nav-scrim" id="navScrim" hidden></div>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <img src="assets/brand/wasl-tech-horizontal-white.svg" alt="وصل تك | Wasl Tech" class="footer-logo" width="220" height="84" loading="lazy" />
              <p>نبني حضورك الرقمي باحتراف؛ من الفكرة إلى تجربة رقمية واضحة وسريعة وقابلة للنمو.</p>
              <div class="social-links" aria-label="شبكات التواصل">
                <a href="https://www.facebook.com/share/1DtjBgZgad/?mibextid=qi2Omg" target="_blank" rel="noopener" aria-label="فيسبوك"><i class="fab fa-facebook-f"></i></a>
                <a href="https://x.com/50lxt" target="_blank" rel="noopener" aria-label="إكس"><i class="fab fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/wasltech.yem" target="_blank" rel="noopener" aria-label="انستغرام"><i class="fab fa-instagram"></i></a>
                <a href="https://t.me/wasltechyem" target="_blank" rel="noopener" aria-label="تيليجرام"><i class="fab fa-telegram-plane"></i></a>
                <a href="https://www.tiktok.com/@wasltech.yem" target="_blank" rel="noopener" aria-label="تيك توك"><i class="fab fa-tiktok"></i></a>
              </div>
            </div>
            <div class="footer-col">
              <h2>استكشف</h2>
              <ul>
                <li><a href="services.html">الخدمات</a></li>
                <li><a href="portfolio.html">الأعمال</a></li>
                <li><a href="process.html">كيف نعمل</a></li>
                <li><a href="about.html">من نحن</a></li>
                <li><a href="faq.html">الأسئلة الشائعة</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h2>خدمات مختارة</h2>
              <ul>
                <li><a href="service-web.html?id=web">تطوير المواقع</a></li>
                <li><a href="service-web.html?id=app">تطبيقات الجوال</a></li>
                <li><a href="service-web.html?id=store">المتاجر الإلكترونية</a></li>
                <li><a href="service-web.html?id=tech">الحلول التقنية</a></li>
                <li><a href="service-web.html?id=design">الهوية والتصميم</a></li>
                <li><a href="service-web.html?id=marketing">التسويق الرقمي</a></li>
              </ul>
            </div>
            <div class="footer-col footer-contact">
              <h2>تواصل معنا</h2>
              <a href="mailto:wasltechp@gmail.com"><i class="far fa-envelope" aria-hidden="true"></i> wasltechp@gmail.com</a>
              <a href="https://wa.me/967775377979" target="_blank" rel="noopener"><i class="fab fa-whatsapp" aria-hidden="true"></i> 775377979</a>
              <a href="contact.html" class="footer-contact-cta">ابدأ استشارتك <i class="fas fa-arrow-left" aria-hidden="true"></i></a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© ${year} وصل تك | Wasl Tech — جميع الحقوق محفوظة.</p>
            <span>www.wasl-tech.com</span>
          </div>
        </div>
      </footer>
      <div class="floating-widgets" aria-label="إجراءات سريعة">
        <a href="https://wa.me/967775377979" target="_blank" rel="noopener" class="fw-btn fw-whatsapp" aria-label="تواصل عبر واتساب"><i class="fab fa-whatsapp"></i></a>
        <button id="scrollToTopBtn" class="fw-btn fw-totop" type="button" aria-label="العودة للأعلى"><i class="fas fa-chevron-up"></i></button>
      </div>
    `;
  }
}
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
