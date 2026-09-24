# Wasl Tech VNext — Footer + Service Media Handoff

Date: 2026-09-24  
Repository: `7eaur/wasltech-`  
Active branch: `rebuild/vnext-foundation-20260921`  
Implementation HEAD covered by this record: `4e11e5e9c13e4f9a8c477a21ce62a0e1f21d8d4f`

## Purpose

This record preserves the exact state needed to continue in a new conversation without restarting analysis or falsely claiming that pending service media has already been uploaded.

## 1. Branch / deployment truth

Implementation checkpoint:
- VNext HEAD: `4e11e5e9c13e4f9a8c477a21ce62a0e1f21d8d4f`
- commit: `fix(footer): align email with live legacy site`
- VNext verify run `35990862213`: **SUCCESS**
- responsive route matrix run `35990862361`: **SUCCESS**
- VNext preview deployment `dpl_76PAUqyTasFFvTgHUzLCzQGnn1GH`: **READY**

Production remains unchanged:
- branch: `main`
- SHA: `a4ed507defe5e7831f3459e12752a89fe0d225fc`
- deployment: `dpl_8SBJ3gBagT7V9jgeHuKqjDbskaT9`
- state: **READY**

No production cutover occurred.

## 2. Footer implementation completed

User requested:
- restore contact presentation using icons similar to the old site;
- take contact information from `wasl-tech.com`;
- replace the short Footer copy with the supplied long copy.

Implemented brand copy:

> وصل تك وجهتك لبناء حضور رقمي احترافي. نساعدك على تحويل أفكارك إلى مشاريع ناجحة بجمع التقنية، التصميم، التسويق، والابتكار.

English counterpart is implemented for LTR parity.

Contact data now used by VNext:
- phone: `+967 775 377 979`
- WhatsApp: `https://wa.me/967775377979`
- email: `info@wasl-tech.com`
- website: `www.wasl-tech.com`
- Instagram: `@wasltech.yem`

Social icon URLs restored from legacy shared Footer:
- Facebook: `https://www.facebook.com/share/1DtjBgZgad/?mibextid=qi2Omg`
- X: `https://x.com/50lxt`
- Instagram: `https://www.instagram.com/wasltech.yem`
- Telegram: `https://t.me/wasltechyem`
- TikTok: `https://www.tiktok.com/@wasltech.yem`

The live old website was chosen over stale legacy-source email when they differed, because that is what the user explicitly requested.

Files touched across the Footer batch:
- `src/config/site.js`
- `src/components/icons.js`
- `src/components/Footer.js`
- `src/styles/layout.css`
- `scripts/check-shell.mjs`
- `scripts/check-public-surfaces.mjs`

Footer commit sequence:
- `c3e7c58e...` — legacy social contact sources
- `c6b9927d...` — contact/social icons
- `f93ce69d...` — Footer content/layout structure
- `fcd89ba5...` — icon-led contact styling
- `6f4dd24d...` — spacing-token correction
- `2b41175a...` — new Footer shell contract
- `1826dc12...` — exact approved Footer claim allowance
- `4e11e5e9...` — email aligned with live old site

Intermediate CI failures were fixed at the root:
- undefined spacing token;
- stale Footer test expecting the old markup;
- public-claim guard rejecting the user's exact approved Footer sentence globally.

The final exact implementation is green in both VNext verify and the responsive route matrix.

## 3. User publishing rule

The user explicitly said not to publish every change because repeated deployments can exhaust limits.

Required behavior from now on:
- no manual Vercel deploy per small change;
- collect multiple approved edits;
- run code/CI checks;
- manually publish only when the user says `انشر` or explicitly asks for a review deployment;
- because Git integration can still auto-create Preview deployments on every pushed commit, prepare changes first and prefer one consolidated commit per batch.

## 4. Eight service originals received

The user supplied eight primary service images and approved the semantic mapping.

### Locked mapping

| Slug | Visual |
|---|---|
| `web-development` | Wasl website displayed on laptop |
| `mobile-app-development` | Wasl mobile app displayed on phone |
| `ecommerce` | e-commerce storefront displayed on laptop |
| `custom-software` | code editor displayed on laptop |
| `technical-solutions` | cloud/server infrastructure |
| `company-profiles` | printed company profile/brochure |
| `brand-design` | Wasl Tech identity/stationery mockup |
| `digital-marketing` | analytics/dashboard interface |

### Prepared web derivatives

Target filenames:
- `web-development.webp` — about 50 KB
- `mobile-app-development.webp` — about 41 KB
- `ecommerce.webp` — about 46 KB
- `custom-software.webp` — about 46 KB
- `technical-solutions.webp` — about 77 KB
- `company-profiles.webp` — about 49 KB
- `brand-design.webp` — about 49 KB
- `digital-marketing.webp` — about 48 KB

Derivative dimensions:
`1280 × 720`

The user approved using these as the canonical service visuals for both primary service presentation and the corresponding service-detail pages.

## 5. Critical unfinished work

Despite earlier local preparation, **nothing from the new eight-image set is committed to GitHub yet**.

As of the covered implementation HEAD:
- `assets/services/source/*` does not contain these originals;
- `assets/services/*.webp` does not contain these derivatives;
- `src/data/services.js` still references old `/assets/works/project_*.jpg` service images.

The attempted binary upload via connected GitHub tooling did not complete because attached image reads exposed asset pointers rather than the raw file bytes required by the Git blob write action.

Therefore the next worker must **not** say the files are uploaded until GitHub is queried after the commit and all eight files are visible.

## 6. Exact next task

1. Obtain the same eight original image files.
   - If current-conversation attachments are unavailable in the new conversation, ask the user to re-upload them.
2. Commit originals unchanged under:
   `assets/services/source/<service-slug>.jpeg`
3. Commit optimized WebP runtime derivatives under:
   `assets/services/<service-slug>.webp`
4. Query GitHub and verify all 16 media files actually exist.
5. Update `src/data/services.js` image fields to:
   `/assets/services/<service-slug>.webp`
6. Confirm service-detail Hero consumes the canonical service image instead of creating a second conflicting media map.
7. Build/check all Arabic + English service routes.
8. Run VNext verify once for the whole batch.
9. Run the responsive route matrix once for the whole batch.
10. Do not manually publish to Vercel unless the user explicitly requests it.

## 7. Do not reopen

Unless a real regression appears, do not restart:
- design architecture;
- Homepage structure;
- Services IA;
- Portfolio architecture;
- About/Process;
- Contact/Planner;
- Insights/Careers/legal;
- final audit Stages 0–18;
- Footer redesign.

Continue from service-media repository integration.

## 8. Media still pending after services

The eight-service set only closes Section C of `FINAL_MEDIA_INVENTORY.md`.

Still pending unless supplied later:
- Home Hero / Home About media;
- generic primary/secondary page Heroes;
- published article covers.

Project media remains out of scope unless the user explicitly asks to replace it.
