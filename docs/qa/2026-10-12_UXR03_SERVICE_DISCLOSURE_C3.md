# UXR-03 C3 — Accessible reading of long service-type lists

Date: 2026-10-12 | Branch: `fix/independent-site-recovery-20261010` | Draft PR #46 only.

## Root cause and code change

Long bilingual service detail pages showed every optional subservice description at once, even when five options pushed the process and FAQ far below the first viewport. The existing deliverable panel already has a keyboard-operable native HTML disclosure pattern.

- For lists of **more than three** subservice types, retain every option heading; descriptions use native `<details>` and the first example begins open. Keyboard Enter and zero-JS browsing remain functional.
- For short lists (two web-development options), retain full text in place without an unnecessary extra click.
- Reuse a **single** `.service-disclosure` style for existing deliverables and the optional subservice details, rather than duplicating CSS rules.
- Remove the verified empty media block from Portfolio CSS; no behavioral change.
- All original service content (headings, descriptions, deliverables, audiences, constraints, SEO/FAQ, CTAs) is retained in both locales.

## Validation and limits

`scripts/check-service-details.mjs` now checks all 16 service routes, semantic preservation and long/short disclosure output. The Chromium route matrix checks the five app options in Arabic/English at 320px, open initial example, keyboard toggling and horizontal reflow.

**IMPLEMENTED, awaiting exact-SHA CI and human review**. Do not equate viewport reflow with an actual 400% browser zoom, user study, real-device screen-reader verification or Production acceptance. This is isolated to the recovery branch, with no merge or changes to SEO/Logo/DNS.
