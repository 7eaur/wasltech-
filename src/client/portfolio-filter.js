const browser = document.querySelector("[data-portfolio-browser]");
const controls = document.querySelector("[data-portfolio-filters]");
const status = document.querySelector("[data-portfolio-status]");

if (browser && controls) {
  const buttons = [...controls.querySelectorAll("[data-portfolio-filter]")];
  const cards = [...browser.querySelectorAll("[data-project-card]")];

  controls.removeAttribute("hidden");

  const applyFilter = (filter) => {
    let visible = 0;

    for (const card of cards) {
      const show = filter === "all" || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visible += 1;
    }

    for (const button of buttons) {
      button.setAttribute("aria-pressed", String(button.dataset.portfolioFilter === filter));
    }

    if (status) {
      status.textContent = "";
      requestAnimationFrame(() => {
        status.textContent = status.dataset.message || "Results updated.";
      });
    }
  };

  for (const button of buttons) {
    button.addEventListener("click", () => applyFilter(button.dataset.portfolioFilter));
  }
}
