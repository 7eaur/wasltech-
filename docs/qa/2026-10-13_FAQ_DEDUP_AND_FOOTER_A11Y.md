# وصل تك — إصلاح وصولية الفوتر الإنجليزي وإزالة سؤال FAQ مكرر

**التاريخ:** 2026-10-13 | **الفرع:** `fix/independent-site-recovery-20261010` | **PR #46 Draft → integration**. لا تغيير main/Production/SEO/Logo/DNS.

## نتائج فحص حقيقي أدّت للإصلاح

[Chromium axe-core baseline run #38338005768](https://github.com/7eaur/wasltech-/actions/runs/38338005768) (SHA `a5581e66`) failed by design after adding a dedicated automated a11y gate. Arabic on 390px had **0 flagged violations** in its selected eight routes; English had **8 instances** of **`target-size` (serious)**, repeated in eight routes because three short footer navigation links had insufficient click/tap height. Tested source: `src/styles/layout.css` inherited inline links from footer markup `src/components/Footer.js`.

**Root-cause fix:** changed the owner of the shared footer link presentation, not an English-only override. All navigation link targets in both locales are now inline-flex with `min-height:1.5rem` (=24px when root is 16px). Did not remove footer destinations or add icons/duplicative cards. `scripts/check-shell.mjs` prevents removal of this contract; new axe scan checks English and Arabic on eight representative routes and records details. The workflow now uploads failure evidence even when a gate fails.

## Editorial duplicate confirmed in canonical content

`src/data/faq.js` contained `product-2` ("Can the solution connect to an existing system?") and `product-3` ("Can the website/app connect to my existing system?"), with materially identical answers in Arabic and English. They asked the same integration-dependency question and added no distinct constraint. Removed only the duplicated `product-3` record. The Homepage FAQ selection points to existing `product-2`; four topic groups, integration guidance, all other topics, SEO `FAQPage` schema and links remain. Page FAQ changes from **13 to 12 distinct questions**, not a lost capability.

**Regression:** `scripts/check-secondary-legal.mjs` checks the 12 canonical records rendered in both locales and blocks the former duplicate; `scripts/check-home.mjs` still enforces three featured questions. The selected 8-route axe test will rerun on the new code SHA.

## Evidence limits / acceptance

- The baseline finding above is confirmed; the **updated code is IMPLEMENTED**, until exact new-SHA VNext + browser matrix pass do **not** mark it VERIFIED_PREVIEW.
- Automated axe does not certify WCAG 2.2 AA, real physical target ergonomics, zoom in Safari, VoiceOver/NVDA or all locale routes. Real device/field acceptance remains **OPEN**.
- Keep GitHub Actions screenshot and axe JSON artifact as expiring QA evidence, not as permanent production proof.

## Verified 2026-10-13

- `b7b17cc6` code passed VNext [#38338401266](https://github.com/7eaur/wasltech-/actions/runs/38338401266) and Chromium [#38338401184](https://github.com/7eaur/wasltech-/actions/runs/38338401184). Follow-up `9c9cdb73db69e743e0eda5be1037c8e1886f10e1` also passed [#38338784657](https://github.com/7eaur/wasltech-/actions/runs/38338784657) with **0 axe-core WCAG A/AA automated findings in 8 representative routes × AR/EN**; do not equate this with accessibility certification or physical screen-reader acceptance.
