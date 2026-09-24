const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const lowPowerDevice = Boolean(connection?.saveData)
  || (Number.isFinite(navigator.deviceMemory) && navigator.deviceMemory <= 2);

const canAnimate = !reducedMotion.matches
  && !lowPowerDevice
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

  const viewportCutoff = window.innerHeight * 0.92;
  const targets = [...document.querySelectorAll(selectors.join(","))]
    .filter((node) => node.getBoundingClientRect().top > viewportCutoff);

  targets.forEach((node, index) => {
    node.classList.add("motion-reveal");
    node.dataset.motionOrder = String(index % 4);
  });

  const reveal = (node) => {
    node.classList.add("motion-reveal--visible");
    observer.unobserve(node);
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) reveal(entry.target);
    }
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -8% 0px"
  });

  targets.forEach((node) => observer.observe(node));

  reducedMotion.addEventListener?.("change", (event) => {
    if (!event.matches) return;
    document.documentElement.classList.remove("motion-enabled");
    for (const node of targets) {
      node.classList.remove("motion-reveal", "motion-reveal--visible");
      delete node.dataset.motionOrder;
      observer.unobserve(node);
    }
    observer.disconnect();
  });
}
