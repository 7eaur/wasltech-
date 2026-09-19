/** WASL TECH — shared header/footer */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const useV2 = document.body?.dataset.shell === 'v2';
    if (useV2) {
      const main = document.querySelector('main');
      if (main && !main.id) main.id = 'main-content';
      const mainTarget = main?.id || 'main-content';

      this.innerHTML = `
        <a class="skip-link" href="#${mainTarget}">تجاوز إلى المحتوى الرئيسي</a>
        <header class="header v2-header" id="header">
          <div class="container">
            <nav class="header-shell" aria-label="التنقل الرئيسي">
              <a href="index.html" class="logo" aria-label="وصل تك - الرئيسية">
                <img src="assets/brand/wasl-tech-horizontal.svg" alt="وصل تك | Wasl Tech" class="logo-img logo-light" width="190" height="72" />
                <img src="assets/brand/wasl-tech-horizontal-white.svg" alt="" class="logo-img logo-dark" width="190" height="72" aria-hidden="true" />
              </a>

              <ul class="nav-links" id="navLinks">
                <li><a href="index.html" class="nav-link">الرئيسية</a></li>
                <li><a href="services.html" class="nav-link">الخدمات</a></li>
                <li><a href="portfolio.html" class="nav-link">الأعمال</a></li>
                <li><a href="process.html" class="nav-link">كيف نعمل</a></li>
                <li><a href="about.html" class="nav-link">من نحن</a></li>
                <li class="mobile-only mobile-contact">
                  <a href="contact.html" class="v2-btn v2-btn-primary">ناقش مشروعك</a>
                </li>
              </ul>

              <div class="nav-actions">
                <button class="theme-toggle" id="themeToggle" type="button" aria-label="تفعيل الوضع الداكن" aria-pressed="false">
                  <i class="far fa-moon" aria-hidden="true"></i>
                </button>
                <a href="contact.html" class="nav-btn">ناقش مشروعك</a>
                <button class="hamburger" id="hamburger" type="button" aria-label="فتح القائمة" aria-controls="navLinks" aria-expanded="false">
                  <span></span><span></span><span></span>
                </button>
              </div>
            </nav>
          </div>
        </header>
        <div class="nav-scrim" id="navScrim" hidden></div>
      `;
      return;
    }

    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main-content';
    const mainTarget = main?.id || 'main-content';

    this.innerHTML = `
      <a class="skip-link" href="#${mainTarget}">تجاوز إلى المحتوى الرئيسي</a>
      <header class="header" id="header">
        <div class="container">
          <nav class="navbar header-shell" aria-label="التنقل الرئيسي">
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
              <li class="mobile-only mobile-contact">
                <a href="contact.html" class="btn btn-primary">ابدأ مشروعك</a>
                <div class="mobile-contact-links" role="group" aria-label="قنوات تواصل سريعة">
                  <a href="https://wa.me/967775377979" target="_blank" rel="noopener"><i class="fab fa-whatsapp" aria-hidden="true"></i> واتساب</a>
                  <a href="mailto:wasltechp@gmail.com"><i class="far fa-envelope" aria-hidden="true"></i> البريد</a>
                </div>
              </li>
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
    const useV2 = document.body?.dataset.shell === 'v2';
    if (useV2) {
      const year = new Date().getFullYear();
      this.innerHTML = `
        <footer class="v2-footer">
          <div class="container">
            <div class="v2-footer-main">
              <section class="v2-footer-brand" aria-labelledby="v2FooterBrand">
                <img src="assets/brand/wasl-tech-horizontal-white.svg" alt="وصل تك | Wasl Tech" class="footer-logo" width="220" height="84" loading="lazy" />
                <h2 id="v2FooterBrand" class="sr-only">وصل تك</h2>
                <p>تصميم وتطوير منتجات وحضور رقمي للمشاريع في اليمن والخليج.</p>
              </section>

              <nav class="v2-footer-links" aria-label="روابط الموقع">
                <a href="services.html">الخدمات</a>
                <a href="portfolio.html">الأعمال</a>
                <a href="process.html">كيف نعمل</a>
                <a href="about.html">من نحن</a>
                <a href="faq.html">الأسئلة الشائعة</a>
                <a href="contact.html">ابدأ مشروعك</a>
              </nav>

              <section class="v2-footer-contact" aria-label="بيانات التواصل">
                <strong>تواصل معنا</strong>
                <a href="https://wa.me/967775377979" target="_blank" rel="noopener">واتساب: <span dir="ltr">+967 775 377 979</span></a>
                <a href="mailto:wasltechp@gmail.com">wasltechp@gmail.com</a>
                <a href="https://www.wasl-tech.com/">www.wasl-tech.com</a>
              </section>
            </div>

            <div class="v2-footer-bottom">
              <span>© ${year} وصل تك — جميع الحقوق محفوظة.</span>
              <span>نبني حضورك الرقمي باحتراف.</span>
            </div>
          </div>
        </footer>
      `;
      return;
    }

    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <section class="footer-brand" aria-labelledby="footerBrandTitle">
              <img src="assets/brand/wasl-tech-horizontal-white.svg" alt="وصل تك | Wasl Tech" class="footer-logo" width="220" height="84" loading="lazy" />
              <h2 id="footerBrandTitle" class="sr-only">وصل تك</h2>
              <p>نبني حضورك الرقمي باحتراف؛ من الفكرة إلى تجربة رقمية أوضح وأسهل في الاستخدام.</p>
              <div class="social-links" aria-label="شبكات التواصل">
                <a href="https://www.facebook.com/share/1DtjBgZgad/?mibextid=qi2Omg" target="_blank" rel="noopener" aria-label="فيسبوك"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                <a href="https://x.com/50lxt" target="_blank" rel="noopener" aria-label="إكس"><i class="fab fa-x-twitter" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/wasltech.yem" target="_blank" rel="noopener" aria-label="انستغرام"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                <a href="https://t.me/wasltechyem" target="_blank" rel="noopener" aria-label="تيليجرام"><i class="fab fa-telegram-plane" aria-hidden="true"></i></a>
                <a href="https://www.tiktok.com/@wasltech.yem" target="_blank" rel="noopener" aria-label="تيك توك"><i class="fab fa-tiktok" aria-hidden="true"></i></a>
              </div>
            </section>

            <nav class="footer-col" aria-label="روابط سريعة">
              <h2>استكشف</h2>
              <ul>
                <li><a href="services.html">الخدمات</a></li>
                <li><a href="portfolio.html">الأعمال</a></li>
                <li><a href="process.html">كيف نعمل</a></li>
                <li><a href="about.html">من نحن</a></li>
                <li><a href="faq.html">الأسئلة الشائعة</a></li>
              </ul>
            </nav>

            <nav class="footer-col footer-services" aria-label="خدمات مختارة">
              <h2>خدمات مختارة</h2>
              <ul>
                <li><a href="service-web.html?id=web">تطوير المواقع</a></li>
                <li><a href="service-web.html?id=app">تطبيقات الجوال</a></li>
                <li><a href="service-web.html?id=store">المتاجر الإلكترونية</a></li>
                <li><a href="service-web.html?id=programming">البرمجة والأنظمة</a></li>
                <li><a href="service-web.html?id=design">الهوية والتصميم</a></li>
                <li><a href="services.html">جميع الخدمات</a></li>
              </ul>
            </nav>

            <section class="footer-col footer-contact" aria-labelledby="footerContactTitle">
              <h2 id="footerContactTitle">تواصل معنا</h2>
              <a class="footer-whatsapp" href="https://wa.me/967775377979" target="_blank" rel="noopener"><i class="fab fa-whatsapp" aria-hidden="true"></i><span>واتساب مباشر</span></a>
              <a href="tel:+967775377979"><i class="fas fa-phone" aria-hidden="true"></i><span dir="ltr">+967 775 377 979</span></a>
              <a href="mailto:wasltechp@gmail.com"><i class="far fa-envelope" aria-hidden="true"></i><span>wasltechp@gmail.com</span></a>
              <a href="contact.html" class="footer-contact-cta">ابدأ مشروعك <i class="fas fa-arrow-left" aria-hidden="true"></i></a>
            </section>
          </div>

          <div class="footer-bottom">
            <p>© ${year} وصل تك | Wasl Tech — جميع الحقوق محفوظة.</p>
            <a href="https://www.wasl-tech.com/" aria-label="موقع وصل تك">www.wasl-tech.com</a>
          </div>
        </div>
      </footer>

      <div class="floating-widgets" aria-label="إجراءات سريعة">
        <a href="https://wa.me/967775377979" target="_blank" rel="noopener" class="fw-btn fw-whatsapp" aria-label="تواصل عبر واتساب"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>
        <button id="scrollToTopBtn" class="fw-btn fw-totop" type="button" aria-label="العودة للأعلى"><i class="fas fa-chevron-up" aria-hidden="true"></i></button>
      </div>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
