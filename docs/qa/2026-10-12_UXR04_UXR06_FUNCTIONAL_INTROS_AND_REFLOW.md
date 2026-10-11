# UXR-04/06 — Functional page entries and narrow-screen supporting copy (2026-10-12)

Branch: `fix/independent-site-recovery-20261010`. Baseline: `4d6b506254b3bdc715502a6ffa8e6f788a848bd0`. Draft PR #46; no Production, main, DNS, SEO or Logo change.

## Root causes and evidence

- Source and 390/1440 screenshots from [successful route matrix 38182293145](https://github.com/7eaur/wasltech-/actions/runs/38182293145) showed Contact/FAQ using the generic image-led hero before the actual visitor decisions and FAQ categories. Changed `src/pages/contact.js` and `src/pages/faq.js` to use reusable, source-owned `PageIntro`. Their supplied original images remain preserved and still serve Planner/Insights as well as the existing OG references; no media assets deleted.
- On narrow phones, `home.css` suppressed three About value descriptions and, jointly with `hero-responsive.css`, hid three Hero supporting descriptions. This is not real reflow. Restored readable descriptions via an editorial one-column About list and a stacked Hero-signal layout at <=360px. Corrected physical padding + RTL override of Home FAQ to logical inline end.
- Removed obsolete Contact Hero/secondary media CSS selectors from original owners. The shared visual Hero remains for Home/Services/Portfolio/Planner/Insights and the text-first Legal pattern is unchanged.

## Regression and acceptance

- Source/build guards: `check-public-surfaces`, `check-contact-planner`, `check-secondary-legal`, `check-home`.
- AR/EN Chromium route matrix now checks text-first Contact/FAQ DOM and no hero image, home supporting descriptions visible at 320/360/390, no horizontal overflow. Existing route matrix/reduced motion/keyboard/no-JS checks remain.
- **IMPLEMENTED — latest SHA CI and screenshot/QA outcomes pending.** Browser Chromium is not physical iPhone Safari/Android Chrome, real browser zoom 200/400%, VoiceOver/NVDA or field CWV. Those and UXR-08 remain open.
