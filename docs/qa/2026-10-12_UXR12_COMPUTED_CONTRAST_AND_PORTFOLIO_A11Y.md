# UXR-12 — Computed contrast and Portfolio filter feedback

Date: 2026-10-12 | Branch: `fix/independent-site-recovery-20261010` | Parent: `ea18821c34e2483d60ae0bc2d698afef2eb7611e` | Draft PR #46 only.

## Cause and fix

Portfolio category controls updated live status with a generic phrase that did not identify the selected filter. The shared browser client now appends the *visible localized active filter label* to the already approved count-free message. This keeps the user's choice explicit for screen readers and does not publish numerical work counts. AR/EN, keyboard filters, `aria-pressed`, progressive disclosure and no-JS project access are unchanged.

## Browser acceptance

The existing Playwright route matrix asserts the active filter label is present in live status while remaining count-free. It also computes foreground/background contrast with `getComputedStyle` and ancestor transparency compositing for selected normal text on Home, Contact, FAQ and service detail at 390px for both locales, requiring >= 4.5:1. Source check `check-portfolio.mjs` guards the localized announcement contract.

**IMPLEMENTED — verify on exact HEAD before calling preview accepted.** Sampling computed contrast is not a full WCAG 2.2 AA audit, physical-device zoom test, NVDA/VoiceOver session or field Core Web Vitals. Those remain release gates. No Production, DNS, main, SEO/Logo or branch merge.
