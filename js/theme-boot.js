/** WASL TECH — apply saved theme before first paint */
(() => {
  try {
    const saved = localStorage.getItem('wt-theme');
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = saved || preferred;
  } catch {
    document.documentElement.dataset.theme = 'light';
  }
})();
