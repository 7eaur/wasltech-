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

## Automated checkpoint

Implementation SHA `00651e8ccd0260ab4817a8dc1a2de943860dcc2c` passed GitHub Actions VNext verify (push `38187340392`, PR `38187342809`) and the bilingual Chromium route matrix `38187340370`. The owner-graph-only follow-up `af46af71` passed VNext verify (push `38187398707`, PR `38187401848`). A newer QA-only browser workflow adds app-specific screenshots and disabled-JavaScript keyboard checks; its pass/fail is not implied by earlier runs. **Code is verified in CI and browser simulation; the owner visual acceptance and production gates remain open.**
