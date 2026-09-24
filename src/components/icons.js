const icons = Object.freeze({
  connected: '<path d="M8.5 12a3.5 3.5 0 0 1 3.5-3.5h2.5a3.5 3.5 0 1 1 0 7H12"/><path d="M15.5 12A3.5 3.5 0 0 1 12 15.5H9.5a3.5 3.5 0 1 1 0-7H12"/>',
  checklist: '<path d="m5 7 1.5 1.5L9 6"/><path d="M11 7h8"/><path d="m5 12 1.5 1.5L9 11"/><path d="M11 12h8"/><path d="m5 17 1.5 1.5L9 16"/><path d="M11 17h8"/>',
  message: '<path d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4.5 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"/><path d="M7.5 10h9"/><path d="M7.5 13h6"/>',
  discover: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
  plan: '<path d="M5 4h14v16H5z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/>',
  build: '<path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/>',
  launch: '<path d="M14 5c2.5-1.5 4.8-1.8 6-1-0.2 2.4-1.2 4.7-3 6.5l-4.5 4.5-3.5-3.5L14 5Z"/><path d="m9 12-3 1-2 3 5 1 1 5 3-2 1-3"/><circle cx="16.5" cy="7.5" r="1"/>',
  whatsapp: '<path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z"/><path d="M8.4 7.8c.3-.4.6-.4.9-.1l1.1 1.5c.2.3.2.6 0 .9l-.6.8c.8 1.5 1.9 2.6 3.4 3.4l.8-.6c.3-.2.6-.2.9 0l1.5 1.1c.3.2.3.6-.1.9-.7.6-1.5.9-2.3.8-3.7-.5-6.5-3.3-7-7-.1-.8.2-1.6.8-2.3Z"/>',
  mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
  phone: '<path d="M7.2 4.8 9.5 8c.3.4.3.9 0 1.3l-1.1 1.4c1.2 2.2 2.8 3.8 5 5l1.4-1.1c.4-.3.9-.3 1.3 0l3.1 2.3c.5.4.6 1 .2 1.5-.8 1.1-2 1.7-3.3 1.6C10 19.4 4.6 14 4 7.9c-.1-1.3.5-2.5 1.6-3.3.6-.4 1.2-.3 1.6.2Z"/>',
  globe: '<circle cx="12" cy="12" r="8"/><path d="M4.5 12h15"/><path d="M12 4c2 2.2 3 4.9 3 8s-1 5.8-3 8c-2-2.2-3-4.9-3-8s1-5.8 3-8Z"/>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.25"/><circle cx="17.3" cy="6.8" r=".75" fill="currentColor" stroke="none"/>',
  facebook: '<path d="M13.5 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.6 1.7-1.6H16V4.1c-.4-.1-1.1-.1-1.9-.1-2.5 0-4.1 1.5-4.1 4.3V10H8v3h2v7"/>',
  x: '<path d="M5 4 19 20"/><path d="M19 4 5 20"/>',
  telegram: '<path d="m4 11 16-6-4.5 14-4-4-2.5 2 .6-4.1L17 7.7 8.2 12.5 4 11Z"/>',
  tiktok: '<path d="M14 4v10.2a4.2 4.2 0 1 1-3.5-4.1"/><path d="M14 4c.7 2.3 2.1 3.7 4.5 4.2"/>'
});

export function icon(name, className = "") {
  const paths = icons[name];
  if (!paths) throw new Error(`Unknown icon: ${name}`);
  const extra = className ? ` ${className}` : "";
  return `<svg class="wt-icon${extra}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}
