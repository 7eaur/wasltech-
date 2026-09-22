const icons = Object.freeze({
  connected: '<path d="M8.5 12a3.5 3.5 0 0 1 3.5-3.5h2.5a3.5 3.5 0 1 1 0 7H12"/><path d="M15.5 12A3.5 3.5 0 0 1 12 15.5H9.5a3.5 3.5 0 1 1 0-7H12"/>',
  checklist: '<path d="m5 7 1.5 1.5L9 6"/><path d="M11 7h8"/><path d="m5 12 1.5 1.5L9 11"/><path d="M11 12h8"/><path d="m5 17 1.5 1.5L9 16"/><path d="M11 17h8"/>',
  message: '<path d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4.5 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"/><path d="M7.5 10h9"/><path d="M7.5 13h6"/>',
  discover: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
  plan: '<path d="M5 4h14v16H5z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/>',
  build: '<path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/>',
  launch: '<path d="M14 5c2.5-1.5 4.8-1.8 6-1-0.2 2.4-1.2 4.7-3 6.5l-4.5 4.5-3.5-3.5L14 5Z"/><path d="m9 12-3 1-2 3 5 1 1 5 3-2 1-3"/><circle cx="16.5" cy="7.5" r="1"/>'
});

export function icon(name, className = "") {
  const paths = icons[name];
  if (!paths) throw new Error(`Unknown icon: ${name}`);
  const extra = className ? ` ${className}` : "";
  return `<svg class="wt-icon${extra}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}
