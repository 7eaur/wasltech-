# Wasl Tech VNext — Agent / Engineering Rules

Status: NON-NEGOTIABLE OPERATING RULES

## 1. Read before work

1. Fetch live `main` and current task branch; check ongoing PRs and scope.
2. Read `PROJECT_STATUS.md`, `PROJECT_HANDOFF.md`, `docs/README.md`, and the current site stabilization register.
3. Read only relevant source files and canonical engineering/brand/release docs.
4. Old VNext rebuilding and historical QA records are evidence, not instructions.
5. Never interfere with independently owned SEO/AI Search or logo-animation branches.

Do not rely on chat memory as the project source of truth.

## 2. Source-of-truth order

1. Live repository code/assets.
2. Verified runtime/browser behavior.
3. Executable tests/CI.
4. Verified business/content data.
5. Approved Wasl identity.
6. Canonical docs under `docs/core/`.
7. Research/history.
8. Conversation memory.

When evidence is absent:
`NOT VERIFIED` / `CONTENT REQUIRED`.

## 3. Current VNext stabilization rule

VNext was **already merged into `main`** in PR #35. We are fixing the current website, not restarting a pre-merge VNext rebuild.

- Preserve current adopted architecture, content, bilingual UX and brand design.
- Fix root causes in canonical source owners; do not layer legacy CSS/JS patches.
- The active phase sequence and defect ownership are in `docs/qa/2026-10-10_site-stabilization-closure-register.md`; prior rebuild plans are historical.
- SEO/AI Search PRs #36/#37 on `seo/search-visibility-foundation-20260925*` and logo animation PR #41 on `design/wasl-logo-motion-preview-20261009` are handled by separate teams. **Do not write, merge, delete, or take over their work.**
- Check conflicts in shared build and data files before integrating after owner handoff.
- No changes to `main`, DNS, production or branches deletion without explicit approval.

## 4. No-patching rule

Forbidden:
- override appended after override;
- `final-fix.css`, `mobile-fix-v2.css`, etc.;
- unexplained `!important`;
- duplicated components;
- duplicated service/project data;
- runtime monkey patches;
- page rules in token/base files;
- giant files that mix responsibilities;
- keeping dead code instead of fixing the owner.

Required:
**Find owner → fix root cause → remove obsolete code → verify.**

## 5. Engineering architecture

Authority:
`docs/core/ENGINEERING_ARCHITECTURE.md`

Core constraints:
- build-time static multipage site;
- Node 24;
- no runtime frontend framework by default;
- minimal dependencies;
- centralized config/data;
- reusable components;
- minimal functional browser JS;
- crawlable HTML;
- deterministic build.

Do not over-abstract.

## 5A. Bilingual / SEO architecture

VNext is bilingual by design, not by later duplication.

Mandatory:
- Arabic default locale at `/`;
- English under `/en/`;
- one stable entity id/slug across locales;
- Arabic RTL / English LTR;
- services/projects/jobs use shared records with localized fields;
- articles keep stable translation identity;
- no page-copy duplication to create locale variants;
- indexable content is build-time HTML;
- canonical/hreflang/sitemap/robots are generated and verified;
- unfinished translations are not silently published/indexed;
- adding a service/project/article/job must not require copying a page implementation.

SEO is a first-class product requirement, but do not create thin keyword pages or fabricate content to chase rankings.

## 6. Brand / design rules

Authority:
`docs/core/DESIGN_SYSTEM.md`

Never change without explicit approval:
- IBM Plex Sans Arabic / IBM Plex Sans;
- Navy `#14305F`;
- Teal `#0E8889`;
- Teal Dark `#096B70`;
- official logo proportions/assets;
- RTL Arabic.

Preserve UPDATE CARD-derived craft discipline:
- compact density;
- controlled surfaces;
- restrained radii/shadows;
- image-led proof;
- shared component contracts;
- edited mobile layouts.

Use SATR research for structure/writing insight only, not copying.

## 7. Anti-AI design

Reject generic:
- blue/purple gradients;
- glow/particles/blobs;
- floating icon circles;
- random 3D;
- fake dashboards;
- stock-tech scenes;
- card walls;
- centered-everything layouts;
- decorative continuous animation.

Every section needs one clear purpose and one visual idea.

## 8. Content integrity

Authority:
`docs/core/CONTENT_IA.md`

Never invent:
- metrics;
- results;
- tech stacks;
- testimonials;
- clients;
- prices;
- timelines;
- SLAs;
- certifications;
- team members.

Proof before claims.

## 9. Quality requirements

Authority:
`docs/core/QA_RELEASE.md`

Targets:
- WCAG 2.2 AA;
- LCP ≤ 2.5s;
- INP < 200ms;
- CLS < 0.1;
- no horizontal overflow;
- reduced motion;
- keyboard usability;
- semantic SEO;
- responsive image delivery;
- zero critical console/resource errors.

## 10. Execution discipline

Authority:
`docs/core/EXECUTION_PLAN.md`

For each phase:
**Understand → Architect → Implement → Run → Visual Review → Critique → Fix Root Cause → Verify → Document**

Use the active WT stabilization phase gates; the VNext rebuild phase sequence is historical.

## 11. Documentation discipline

Canonical map:
`docs/README.md`

At meaningful batch end:
- re-fetch current branch HEAD;
- update `PROJECT_STATUS.md`;
- update `PROJECT_HANDOFF.md`;
- update a core doc only when its stable rule/fact changes;
- create QA evidence only when it is meaningful.

Do not create competing status/handoff files.

## 12. Merge/release rule

No merge or production cutover based on appearance alone.

Before release:
- build/check green;
- visual matrix reviewed;
- accessibility/SEO/performance gates relevant to scope pass;
- exact deployed SHA verified;
- production smoke test passes.

Do not claim completion without evidence.
