/**
 * =====================================================
 * WASL TECH - COMPONENTS JS
 * الهيدر والفوتر (Web Components)
 * =====================================================
 */

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header" id="header">
        <div class="container">
          <nav class="navbar">
            <!-- الشعار -->
            <a href="index.html" class="logo" aria-label="وصل تك - الرئيسية">
              <img src="assets/1.png" alt="وصل تك" class="logo-img" />
            </a>

            <!-- روابط التنقل -->
            <ul class="nav-links" id="navLinks" role="menubar">
              <li role="none"><a href="index.html"    class="nav-link" role="menuitem">الرئيسية</a></li>
              <li role="none"><a href="about.html"    class="nav-link" role="menuitem">من نحن</a></li>
              <li role="none"><a href="services.html" class="nav-link" role="menuitem">خدماتنا</a></li>
              <li role="none"><a href="portfolio.html" class="nav-link" role="menuitem">أعمالنا</a></li>
              <li role="none"><a href="process.html"  class="nav-link" role="menuitem">كيف نعمل</a></li>
              <li role="none"><a href="blog.html"     class="nav-link" role="menuitem">المدونة</a></li>
              <li role="none"><a href="contact.html"  class="nav-link" role="menuitem">تواصل معنا</a></li>
            </ul>

            <!-- الأزرار والهامبرجر -->
            <div class="nav-actions">
              <a href="https://wa.me/967775377979?text=مرحباً، أود البدء بمشروع جديد." target="_blank" class="btn btn-primary nav-btn" id="headerCta">
                ابدأ مشروعك <i class="fas fa-arrow-left" aria-hidden="true"></i>
              </a>
              <button class="hamburger" id="hamburger" aria-label="فتح القائمة" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>
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

            <!-- العلامة التجارية -->
            <div class="footer-brand">
              <img src="assets/5.png" alt="وصل تك" class="footer-logo" />
              <p>
                وصل تك وجهتك لبناء حضور رقمي احترافي. نساعدك على تحويل أفكارك إلى مشاريع ناجحة بجمع التقنية، التصميم، التسويق، والابتكار.
              </p>
              <div class="social-links">
                <a href="https://www.facebook.com/share/1DtjBgZgad/?mibextid=qi2Omg" target="_blank" aria-label="فيسبوك"><i class="fab fa-facebook-f"></i></a>
                <a href="https://x.com/50lxt" target="_blank" aria-label="إكس تويتر"><i class="fab fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/wasltech.yem" target="_blank" aria-label="انستغرام"><i class="fab fa-instagram"></i></a>
                <a href="https://t.me/wasltechyem" target="_blank" aria-label="تيليجرام"><i class="fab fa-telegram-plane"></i></a>
                <a href="https://www.tiktok.com/@wasltech.yem" target="_blank" aria-label="تيك توك"><i class="fab fa-tiktok"></i></a>
                <a href="https://wa.me/967775377979" target="_blank" aria-label="واتساب"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>

            <!-- روابط سريعة -->
            <div class="footer-col">
              <h3>روابط سريعة</h3>
              <ul>
                <li><a href="index.html"><i class="fas fa-chevron-left"></i> الرئيسية</a></li>
                <li><a href="about.html"><i class="fas fa-chevron-left"></i> من نحن</a></li>
                <li><a href="portfolio.html"><i class="fas fa-chevron-left"></i> أعمالنا</a></li>
                <li><a href="blog.html"><i class="fas fa-chevron-left"></i> المدونة</a></li>
                <li><a href="faq.html"><i class="fas fa-chevron-left"></i> الأسئلة الشائعة</a></li>
              </ul>
            </div>

            <!-- خدماتنا -->
            <div class="footer-col">
              <h3>خدماتنا</h3>
              <ul>
                <li><a href="service-web.html?id=web"><i class="fas fa-chevron-left"></i> تطوير المواقع</a></li>
                <li><a href="service-web.html?id=app"><i class="fas fa-chevron-left"></i> تطبيقات الجوال</a></li>
                <li><a href="service-web.html?id=store"><i class="fas fa-chevron-left"></i> المتاجر الإلكترونية</a></li>
                <li><a href="service-web.html?id=design"><i class="fas fa-chevron-left"></i> الهوية البصرية</a></li>
                <li><a href="service-web.html?id=marketing"><i class="fas fa-chevron-left"></i> التسويق الرقمي</a></li>
              </ul>
            </div>

            <!-- تواصل معنا -->
            <div class="footer-col">
              <h3>تواصل معنا</h3>
              <ul class="contact-info">
                <li><i class="fas fa-globe"></i> www.wasl-tech.com</li>
                <li><i class="far fa-envelope"></i> info@wasl-tech.com</li>
                <li><a href="https://wa.me/967775377979" target="_blank" style="color: inherit; text-decoration: none;"><i class="fab fa-whatsapp"></i>775377979</a></li>
                <li><i class="fas fa-map-marker-alt"></i> اليمن، صنعاء</li>
              </ul>
            </div>

          </div>

          <div class="footer-bottom">
            <p>© ${year} وصل تك | Wasl Tech — جميع الحقوق محفوظة.</p>
            <a href="https://www.wasl-tech.com" target="_blank" rel="noopener">www.wasl-tech.com</a>
          </div>
        </div>
      </footer>
      
      <!-- Floating Widgets -->
      <div class="floating-widgets">
        <a href="https://wa.me/967775377979" target="_blank" class="fw-btn fw-whatsapp" aria-label="تواصل معنا عبر واتساب">
          <i class="fab fa-whatsapp"></i>
        </a>
        <button id="scrollToTopBtn" class="fw-btn fw-totop" aria-label="العودة للأعلى">
          <i class="fas fa-chevron-up"></i>
        </button>
      </div>
    `;
  }
}

// تسجيل المكونات
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
