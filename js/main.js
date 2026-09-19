/** WASL TECH — shared runtime behavior */
function motionReduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initFadeUpAnimation() {
  const items = [...document.querySelectorAll('.fade-up')];
  if (!items.length) return;
  if (motionReduced() || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
  items.forEach(el => observer.observe(el));
}

function initActiveNavLink() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const target = (link.getAttribute('href') || '').split('?')[0];
    const serviceRoute = current === 'service-web.html' && target === 'services.html';
    const active = target === current || serviceRoute;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  const top = document.getElementById('scrollToTopBtn');
  const sync = () => {
    header?.classList.toggle('scrolled', window.scrollY > 32);
    top?.classList.toggle('visible', window.scrollY > 420);
  };
  sync();
  window.addEventListener('scroll', sync, { passive: true });
  top?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: motionReduced() ? 'auto' : 'smooth' }));
}

function initTheme() {
  const button = document.getElementById('themeToggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const saved = localStorage.getItem('wt-theme');

  const apply = (theme, persist = false) => {
    const dark = theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    themeMeta?.setAttribute('content', dark ? '#0B1320' : '#FFFFFF');
    if (persist) localStorage.setItem('wt-theme', dark ? 'dark' : 'light');

    if (!button) return;
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن');
    button.innerHTML = dark
      ? '<i class="far fa-sun" aria-hidden="true"></i>'
      : '<i class="far fa-moon" aria-hidden="true"></i>';
  };

  apply(saved || (media.matches ? 'dark' : 'light'));

  button?.addEventListener('click', () => {
    apply(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });

  media.addEventListener?.('change', event => {
    if (!localStorage.getItem('wt-theme')) apply(event.matches ? 'dark' : 'light');
  });
}

function initMobileMenu() {
  const button = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  const scrim = document.getElementById('navScrim');
  if (!button || !nav) return;

  let lastFocused = null;

  const setOpen = open => {
    if (open) lastFocused = document.activeElement;

    nav.classList.toggle('active', open);
    button.classList.toggle('active', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
    if (scrim) scrim.hidden = !open;
    document.body.classList.toggle('menu-open', open);

    if (open) {
      requestAnimationFrame(() => nav.querySelector('a[href]')?.focus());
    } else if (lastFocused instanceof HTMLElement) {
      lastFocused.focus();
      lastFocused = null;
    }
  };

  button.addEventListener('click', () => setOpen(!nav.classList.contains('active')));
  scrim?.addEventListener('click', () => setOpen(false));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && nav.classList.contains('active')) setOpen(false);
  }, { passive: true });

  document.addEventListener('keydown', event => {
    if (!nav.classList.contains('active')) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = [...nav.querySelectorAll('a[href], button:not([disabled])')]
      .filter(element => element.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initActiveNavLink();
  initHeaderScroll();
  initMobileMenu();
  initFadeUpAnimation();
});
