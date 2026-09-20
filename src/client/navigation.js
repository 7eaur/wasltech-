const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-primary-nav]");

if (toggle && nav) {
  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.removeAttribute("data-open");
  };

  toggle.addEventListener("click", () => {
    const nextOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(nextOpen));
    nav.toggleAttribute("data-open", nextOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
      toggle.focus();
    }
  });
}
