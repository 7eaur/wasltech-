// Signature Reveal adapted from Update Card: once on a visitor's first landing,
// across both locales, then no overlay on subsequent page visits or refreshes.
const intro = document.querySelector("[data-brand-intro]");
if (intro) {
  const root = document.documentElement;
  const eligible = root.dataset.brandIntroEligible === "true";
  delete root.dataset.brandIntroEligible;

  if (!eligible) {
    root.classList.remove("brand-intro-pending");
    intro.remove();
  } else {
    // Expose the first-visit overlay only after its progressive enhancement is active.
    intro.hidden = false;
    let disposed = false;
    let timeout;
    let imageTimeout;
    const markSeen = () => {
      try { localStorage.setItem("wasl-tech-intro-v1", "seen"); } catch (_) {}
    };
    const disposeIntro = (completed = false) => {
      if (disposed) return;
      disposed = true;
      if (completed) markSeen();
      window.clearTimeout(timeout);
      window.clearTimeout(imageTimeout);
      root.classList.remove("brand-intro-pending", "brand-intro-active",
        "brand-intro-static", "brand-intro-fallback");
      intro.removeEventListener("animationend", onAnimationEnd);
      intro.removeEventListener("pointerdown", skipIntro);
      document.removeEventListener("keydown", onKeydown);
      window.removeEventListener("pagehide", onPageHide);
      intro.remove();
    };
    const onAnimationEnd = (event) => {
      if (event.target === intro && ["wt-intro-out", "wt-intro-fallback-out"].includes(event.animationName)) {
        disposeIntro(true);
      }
    };
    const skipIntro = () => disposeIntro(true);
    const onKeydown = (event) => {
      if (["Escape", "Enter", " "].includes(event.key)) skipIntro();
    };
    const onPageHide = () => disposeIntro(false);

    intro.addEventListener("animationend", onAnimationEnd);
    intro.addEventListener("pointerdown", skipIntro);
    document.addEventListener("keydown", onKeydown);
    window.addEventListener("pagehide", onPageHide, { once: true });

    const startIntro = async () => {
      while (document.hidden && !disposed) {
        await new Promise(resolve => document.addEventListener("visibilitychange", resolve, { once: true }));
      }
      if (disposed) return;
      const logo = intro.querySelector(".brand-intro__layer--finished");
      const assetReady = logo && typeof logo.decode === "function"
        ? logo.decode().then(() => true, () => false)
        : new Promise(resolve => {
            if (!logo) { resolve(false); return; }
            if (logo.complete) { resolve(Boolean(logo.naturalWidth)); return; }
            logo.addEventListener("load", () => resolve(true), { once: true });
            logo.addEventListener("error", () => resolve(false), { once: true });
          });
      const ready = await Promise.race([
        assetReady,
        new Promise(resolve => { imageTimeout = window.setTimeout(() => resolve(false), 3000); })
      ]);
      window.clearTimeout(imageTimeout);
      if (disposed) return;

      root.classList.remove("brand-intro-pending");
      if (!ready) {
        root.classList.add("brand-intro-fallback");
        timeout = window.setTimeout(() => disposeIntro(true), 1500);
        return;
      }
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      root.classList.add(reduced ? "brand-intro-static" : "brand-intro-active");
      // Guaranteed cleanup if animationend is suppressed or CSS fails.
      timeout = window.setTimeout(() => disposeIntro(true), reduced ? 1100 : 2100);
    };
    void startIntro();
  }
}
