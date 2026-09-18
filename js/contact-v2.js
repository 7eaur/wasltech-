document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');
  if (!form || !status) return;

  const showStatus = html => {
    status.innerHTML = html;
    status.classList.add('active');
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    status.classList.remove('active');

    if (!form.checkValidity()) {
      form.reportValidity();
      showStatus('راجع الحقول المطلوبة ثم حاول مرة أخرى.');
      return;
    }

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const service = String(data.get('service') || '').trim();
    const details = String(data.get('details') || '').trim();

    const message = [
      'مرحباً وصل تك، أود مناقشة مشروع جديد.',
      '',
      'الاسم: ' + name,
      'رقم التواصل: ' + phone,
      'نوع المشروع: ' + service,
      'التفاصيل: ' + details
    ].join('\n');

    const url = 'https://wa.me/967775377979?text=' + encodeURIComponent(message);
    showStatus('تم تجهيز تفاصيل طلبك. <a href="' + url + '" target="_blank" rel="noopener">افتح واتساب لإرسالها الآن</a>.');
  });
});
