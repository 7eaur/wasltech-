/**
 * =====================================================
 * WASL TECH - FAQ ACCORDION JS
 * نظام الأسئلة والأجوبة التفاعلي
 * =====================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-q');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // إغلاق جميع الأسئلة المفتوحة (Accordion سليم)
      faqItems.forEach(i => i.classList.remove('active'));

      // فتح السؤال الحالي إذا لم يكن مفتوحاً
      if (!isOpen) item.classList.add('active');
    });
  });
});
