// Synchronous, tiny head bootstrap prevents a flash before the first paint.
// Like Update Card, completion is remembered across visits in localStorage.
(() => {
  try {
    if (localStorage.getItem("wasl-tech-intro-v1") === "seen") return;
  } catch (_) {
    // Storage may be disabled: let the intro play but never block the site.
  }
  document.documentElement.dataset.brandIntroEligible = "true";
  document.documentElement.classList.add("brand-intro-pending");
  const preload = document.createElement("link");
  preload.rel = "preload";
  preload.as = "image";
  preload.type = "image/svg+xml";
  preload.href = "/assets/brand/wasl-tech-horizontal.svg";
  preload.fetchPriority = "high";
  document.head.append(preload);
})();
