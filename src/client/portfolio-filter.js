const browser = document.querySelector("[data-portfolio-browser]");
const controls = document.querySelector("[data-portfolio-filters]");
const status = document.querySelector("[data-portfolio-status]");
const moreWrap = document.querySelector("[data-portfolio-more-wrap]");
const moreButton = document.querySelector("[data-portfolio-more]");

if (browser && controls) {
  const buttons = [...controls.querySelectorAll("[data-portfolio-filter]")];
  const cards = [...browser.querySelectorAll("[data-project-card]")];
  const initialCount = 6;
  let expanded = false;
  let currentFilter = "all";

  const applyFilter = (filter, announce = true) => {
    currentFilter = filter;

    cards.forEach((card, index) => {
      const matchesCategory = filter === "all" || card.dataset.category === filter;
      card.hidden = !(matchesCategory && (filter !== "all" || expanded || index < initialCount));
    });

    for (const button of buttons) {
      button.setAttribute("aria-pressed", String(button.dataset.portfolioFilter === filter));
    }

    if (moreWrap) {
      moreWrap.hidden = !(filter === "all" && !expanded && cards.length > initialCount);
    }

    if (announce && status) {
      status.textContent = "";
      requestAnimationFrame(() => {
        status.textContent = status.dataset.message || "Results updated.";
      });
    }
  };

  for (const button of buttons) {
    button.addEventListener("click", () => {
      expanded = false;
      applyFilter(button.dataset.portfolioFilter);
    });
  }

  if (moreButton) {
    moreButton.addEventListener("click", () => {
      expanded = true;
      applyFilter(currentFilter);
      // Return keyboard focus to the relevant visible content, never to a hidden control.
      const nextCard = cards[initialCount];
      nextCard?.querySelector("a")?.focus({ preventScroll: true });
      nextCard?.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }

  controls.removeAttribute("hidden");
  applyFilter("all", false);
}
