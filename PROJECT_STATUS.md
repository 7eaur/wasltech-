# Wasl Tech VNext — Current Project Status

## 2026-10-10 — CURRENT LIVE STATUS (supersedes historical checkpoints below)

**Repository:** 7eaur/wasltech-  
**GitHub main at audit:** 1cb5d939b58c1e03ff63fce5b27d476d116e7a90  
**Current stabilization planning branch:** plan/site-stabilization-closure-20261010  
**Single stabilization issue register:** docs/qa/2026-10-10_site-stabilization-closure-register.md  
**Execution state:** Phase 0 VERIFIED (branch only) / pending authorized main integration; remaining phases OPEN; no production release.

**Corrected production history:** VNext was merged into main via PR #35 on 2026-09-24, followed by merged PRs #38 (subservices), #39 (motion/performance), and #40 (performance gate). Older statements below that VNext was never merged, main remains a legacy-only runtime, or cutover never started are historical and **not current**. Vercel's latest confirmed READY Production build uses commit c775391550e8359eda4d4eb4ec47b3dba23aa419; main is two commits newer with CI/performance-related differences. The canonical domain's association with the inspected Vercel project is not verified (project Domains showed only vercel.app hosts).

**Open stabilization blockers:** image branch media/final-site-images-20261007 has 2/8 final WebP assets only, lacks new original assets and contains temporary .media-upload parts; its Vercel build reports missing process-hero.webp. Existing 404 implementation in design/standalone-404-20261010 is unmerged/unverified. Published Home AR/EN CTA texts and targets mismatch. Historical STATUS/HANDOFF/README were reconciled on the stabilization work branch. Additional UI, loader, font and mobile observations are explicitly **TO VERIFY**, not confirmed new bugs. Vercel Hobby build rate limit must be distinguished from missing-asset build failures.

**Isolation of other teams:** SEO/AI Search belongs exclusively to the owners of seo/search-visibility-foundation-20260925*, PR #36/#37. Logo motion/animation belongs exclusively to design/wasl-logo-motion-preview-20261009, PR #41. Do not edit, merge or delete their work. Separate integration only after their official handoff.

**Execution order:** Phase 0: documentation/scope → Phase 1: final media/build → Phase 2: 404, CTA, UX/visual → Phase 3: loading/font/performance → Phase 4: CI/repo hardening → Phase 5: approved domain/release → Phase 6: final cross-route QA/closure. Exact WT-001..WT-020 tickets, states and closure evidence are maintained only in the register above.

**Release guard:** No production push, main merge, DNS changes or deletion of branches without explicit approval. Batch changes and verify exact SHA; do not spend Vercel builds on every minor commit. The QA release contract remains docs/core/QA_RELEASE.md.

---



### Current Phase 0 checkpoint

WT-001 and WT-002 are **VERIFIED on the plan branch only**, not CLOSED on main. The old contradictory September status is preserved in Git history, not the active current-status file.

- Canonical open issue register: [WT-001..WT-020](docs/qa/2026-10-10_site-stabilization-closure-register.md).
- Ownership verification: [2026-10-10 Phase 0 evidence](docs/qa/2026-10-10_phase-0_baseline-and-ownership.md).
- **Other teams untouched:** SEO/AI Search PRs #36/#37; logo-animation PR #41.
- **Next phase:** WT-003–005 final-media completion and build repair, only after phase transition approval.
- No main merge, production deployment, DNS change or branch deletion was performed for phase 0.
- Before any further action refresh current GitHub SHAs and Vercel; recorded baseline is not a live pointer.

**Note:** historical copies of this document remain available from Git history; older QA/rebuild plans are not current instructions.
