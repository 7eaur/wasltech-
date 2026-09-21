const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-primary-nav]");
const header = document.querySelector("[data-site-header]");

if (toggle && nav && header) {
  const desktopQuery = window.matchMedia("(min-width: 53.8125rem)");

  const setOpenState = (open, { restoreFocus = false, focusFirst = false } = {}) => {
    const openLabel = toggle.dataset.openLabel || "Open menu";
    const closeLabel = toggle.dataset.closeLabel || "Close menu";

    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? closeLabel : openLabel);
    nav.toggleAttribute("data-open", open);
    header.toggleAttribute("data-menu-open", open);

    if (focusFirst && open) {
      nav.querySelector("a")?.focus();
    } else if (restoreFocus && !open) {
      toggle.focus();
    }
  };

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  toggle.addEventListener("click", () => {
    const nextOpen = !isOpen();
    setOpenState(nextOpen, { focusFirst: false });
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpenState(false);
  });

  document.addEventListener("pointerdown", (event) => {
    if (isOpen() && !header.contains(event.target)) {
      setOpenState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpenState(false, { restoreFocus: true });
    }
  });

  const handleDesktopChange = (event) => {
    if (event.matches && isOpen()) setOpenState(false);
  };

  desktopQuery.addEventListener?.("change", handleDesktopChange);

  setOpenState(false);
}
