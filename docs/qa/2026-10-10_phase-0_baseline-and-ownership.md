# Wasl Tech — Phase 0 Baseline & Branch Ownership

Date: **2026-10-10**. Scope: **documentation and safety only**, not runtime changes.

## Fresh baseline from GitHub and Vercel

- Main at audit: `1cb5d939b58c1e03ff63fce5b27d476d116e7a90`. VNext is already merged in PR #35, then PRs #38, #39, #40.
- Last confirmed READY Production: `dpl_5R9RFVYhWtCVbdQ6t6HhhodvUkno` on SHA `c775391550e8359eda4d4eb4ec47b3dba23aa419`; differences to main are CI/performance-check related. Production != exact main.
- Current Vercel project `prj_tp7lDumOID2XusRHkPvYayybihVe` domain list has `vercel.app` domains but does **not** establish canonical www/apex mapping. Domain ownership/routing remains UNVERIFIED, not presumed broken.
- Media branch `media/final-site-images-20261007`: 2 of 8 required WebP committed; originals missing; `.media-upload/three/` staging present; Vercel build ENOENT on `process-hero.webp`.
- 404 design branch `design/standalone-404-20261010`: 6 unique commits, not integrated, not accepted by build+runtime review.
- At this time the repository has **45 branches**. This is a dated snapshot, not a permanent limit.

## Ownership map

| Branches | Responsible party | Allowed operations |
|---|---|---|
| `main` | Production | Read only until explicit approval |
| `plan/site-stabilization-closure-20261010`, PR #42 | Stabilization | Canonical docs/status/closure register |
| `media/final-site-images-20261007` | Stabilization | WT-003–005; complete missing media and remove staging |
| `design/standalone-404-20261010` | Stabilization | WT-007; verify existing standalone 404 |
| `seo/search-visibility-foundation-20260925`, `seo/search-visibility-foundation-20260925-v2`; PRs #36, #37 | **Other SEO/AI team** | **NO WRITE / MERGE / DELETE / TAKEOVER** |
| `design/wasl-logo-motion-preview-20261009`; PR #41 | **Other animation team** | **NO WRITE / MERGE / DELETE / TAKEOVER** |
| Older `design/*`, `quality/*`, `refine/*`, `research/*`, `audit/*`, `vnext` | Historical, owner unconfirmed | Assess unique commits before any suggested cleanup |
| `fix/responsive-header-product-grid-20260924` | Old experiment | Review its lone unique commit before any cleanup decision |

## File collision gates for later handoffs

- Media vs SEO: `src/config/hero-media.js` and `src/data/articles.js`.
- Media vs logo animation: `scripts/build.mjs`.
- SEO vs logo animation: `package.json`.
- Documentation and SEO branches: `PROJECT_STATUS.md`, `PROJECT_HANDOFF.md`, `docs/README.md`.

Before touching these in another phase, fetch **current** head SHA, compare changes, preserve owner boundaries and reconcile into main only via approved review. Never blind-merge historic branches.

## Phase 0 evidence and acceptance

- [x] Github main, branches and PR snapshot checked.
- [x] Actual Vercel READY Production SHA distinguished from main.
- [x] Historical contradictory active STATUS/HANDOFF batons removed (preserved by Git history).
- [x] AGENTS and docs index updated to current stabilization rules.
- [x] Full WT-001..WT-020 register retained; other-team ownership excluded.
- [x] Changes scoped to documents; no code, media binaries, DNS or production deployment changed.
- [ ] User-approved integration into main and fresh post-merge check.

**Disposition: WT-001/WT-002 = VERIFIED (branch only), NOT CLOSED or DEPLOYED. Phase 1 starts only after phase acceptance.**
