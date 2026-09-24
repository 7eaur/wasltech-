const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const lowMemory = Number.isFinite(navigator.deviceMemory) && navigator.deviceMemory <= 4;
const lowCpu = Number.isFinite(navigator.hardwareConcurrency) && navigator.hardwareConcurrency <= 4;
const constrainedNetwork = Boolean(connection?.saveData)
  || ["slow-2g", "2g"].includes(connection?.effectiveType);

const canAnimate = !reducedMotion.matches
  && !lowMemory
  && !lowCpu
  && !constrainedNetwork
  && "IntersectionObserver" in window;

if (canAnimate) {
  document.documentElement.classList.add("motion-enabled");

  const selectors = [
    ".section-header",
    ".media-card",
    ".service-subservice",
    ".service-deliverable",
    ".service-process__step",
    ".home-process__step",
    ".home-why__item",
    ".article-body__section"
  ];

  let observer = null;
  let targets = [];

  const initializeReveals = () => {
    if (reducedMotion.matches) return;

    const viewportCutoff = window.innerHeight * 0.92;
    targets = [...document.querySelectorAll(selectors.join(","))]
      .filter((node) => node.getBoundingClientRect().top > viewportCutoff);

    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("motion-reveal--visible");
        observer?.unobserve(entry.target);
      }
    }, {
      threshold: 0.06,
      rootMargin: "0px 0px 14% 0px"
    });

    targets.forEach((node, index) => {
      node.classList.add("motion-reveal");
      node.dataset.motionOrder = String(index % 4);
      observer.observe(node);
    });
  };

  const scheduleReveals = () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(initializeReveals, { timeout: 1200 });
    } else {
      window.setTimeout(initializeReveals, 320);
    }
  };

  if (document.readyState === "complete") scheduleReveals();
  else window.addEventListener("load", scheduleReveals, { once: true });

  reducedMotion.addEventListener?.("change", (event) => {
    if (!event.matches) return;
    document.documentElement.classList.remove("motion-enabled");
    observer?.disconnect();
    for (const node of targets) {
      node.classList.remove("motion-reveal", "motion-reveal--visible");
      delete node.dataset.motionOrder;
    }
    targets = [];
  });
}
