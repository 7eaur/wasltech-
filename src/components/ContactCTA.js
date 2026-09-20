export function ContactCTA({
  title = "جاهز تبدأ من نقطة واضحة؟",
  supporting = "شاركنا احتياجك، ونرتب معك الخطوة التالية.",
  href = "/contact/",
  label = "ابدأ مشروعك"
} = {}) {
  return `
    <section class="contact-cta">
      <div class="container contact-cta__inner">
        <div>
          <h2>${title}</h2>
          <p>${supporting}</p>
        </div>
        <a class="button button--light" href="${href}">${label}</a>
      </div>
    </section>
  `;
}
