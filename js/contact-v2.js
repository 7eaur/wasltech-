document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');
  if (!form || !status) return;

  const showStatus = (message, linkUrl = '') => {
    status.replaceChildren();

    const text = document.createElement('span');
    text.textContent = message;
    status.append(text);

    if (linkUrl) {
      status.append(' ');
      const link = document.createElement('a');
      link.href = linkUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = 'افتح واتساب لإرسالها الآن';
      status.append(link, '.');
    }

    status.classList.add('active');
    status.focus({ preventScroll: true });
  };

  form.addEventListener('input', () => {
    status.classList.remove('active');
  });

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
    const stage = String(data.get('stage') || '').trim();
    const projectLink = String(data.get('projectLink') || '').trim();
    const details = String(data.get('details') || '').trim();

    const messageParts = [
      'مرحباً وصل تك، أود مناقشة مشروع.',
      '',
      'الاسم: ' + name,
      'رقم التواصل: ' + phone,
      'الخدمة الأقرب: ' + service,
      'مرحلة المشروع: ' + stage
    ];

    if (projectLink) {
      messageParts.push('رابط المشروع الحالي: ' + projectLink);
    }

    messageParts.push('التفاصيل: ' + details);

    const message = messageParts.join('\n');
    const url = 'https://wa.me/967775377979?text=' + encodeURIComponent(message);

    showStatus('تم تجهيز تفاصيل طلبك.', url);
  });
});
