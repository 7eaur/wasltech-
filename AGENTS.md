# Wasl Tech VNext — Agent / Engineering Rules

Status: NON-NEGOTIABLE OPERATING RULES

## 1. Read before work

For every new session:

1. Fetch live `main`.
2. Fetch the active branch from `PROJECT_STATUS.md`.
3. Read `PROJECT_STATUS.md`.
4. Read `PROJECT_HANDOFF.md`.
5. Read `docs/README.md`.
6. Read only the canonical core docs relevant to the task.
7. Use old phase/QA docs only as historical evidence.

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

## 3. VNext rebuild rule

VNext is a clean architecture rebuild.

- Do not implement VNext by piling fixes onto legacy CSS/JS.
- Legacy production stays intact until cutover.
- Build new structure on the active VNext branch.
- Migrate verified content/assets deliberately.
- Remove superseded code when cutover is approved.

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

Do not skip architecture/data phases to rush into visual polish.

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
