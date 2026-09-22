# Wasl Tech VNext — Continuous Final Audit Log

Status: ACTIVE
Protocol: `docs/core/FINAL_AUDIT_PROTOCOL.md`
Branch: `rebuild/vnext-foundation-20260921`

This is the single shared audit ledger for Worker A and Worker B.

Rules:
- append; do not create parallel audit logs;
- always read the newest entry before work;
- use live HEAD as source of truth;
- include exact commits/runs/artifacts where available;
- do not mark stages complete without evidence;
- final imagery is deferred until Stage 19.

---

## Baseline before recurring workers

Date: 2026-09-22

Known completed setup before scheduled passes:
- Homepage accepted by user.
- VNext bilingual architecture exists.
- Published Insights + Article detail architecture exists.
- Public service/project counters removed.
- Image-led Hero contract exists using temporary media.
- `main` remains production and is not cut over.
- Architecture review already removed obsolete pre-VNext workflows, legacy main quality workflow, foundation placeholders, obsolete foundation components/CSS, duplicate homepage screenshot workflow, and obsolete Python quality script.
- Canonical VNext verification workflow is intended to remain valid after cutover.
- Full final audit remains open.

### Next checkpoint
Worker A must start at Stage 0 and validate the recent CI/architecture cleanup against the live HEAD, then proceed to Stage 1/2 without redoing already-proven work unnecessarily.

---

### 2026-09-22 07:04 +03 Worker A — Pass 1
- Starting HEAD: `5d226b4f9dbf614e4a868ee5af6ccbf4a8e48382`.
- Ending implementation HEAD: `4d52792dd4911ce8d0ace83f3fc58cc1b58d1814` (this ledger update is documentation-only and is excluded from push verification).
- Stage/checkpoint: Stage 0 — repository / branch / CI safety; investigated the first live blocker before advancing to architecture/data.
- Files/code inspected: `docs/core/FINAL_AUDIT_PROTOCOL.md`, this shared log, `.github/workflows/vnext-verify.yml`, `.github/workflows/capture-vnext-route-matrix.yml`, `package.json`, `scripts/check-links.mjs`, `scripts/check-quality.mjs`; also inspected live branch metadata, recent commits, workflow runs/jobs, and the last known-green preview artifact.
- Pages/routes inspected: generated preview artifact from last known-green commit `d6979cdc527742232e13cbdf94eb99541719d2de`; link crawl covered the generated public HTML set and isolated failures to internal showcase routes only.
- Viewports/locales inspected: no new visual PASS claimed in this pass; route-matrix workflow configuration covers AR/EN at 360/390/768/1024/1366/1440 and remains pending re-verification after the CI fix.
- Findings:
  - P0: VNext verify had regressed from green at run `35684426302` / commit `d6979cdc...` to failure after `scripts/check-links.mjs` was added to the canonical verify chain. Latest failing run before the fix: `35684706315` at `5d226b4f...`, failing during `Build and check VNext preview`.
  - P1: none newly proven.
  - P2: internal-link gate incorrectly treated non-public `__showcase/` and `en/__showcase/` diagnostic pages as public site routes. Reproduction against the last known-green generated artifact found 10 false-positive missing `#showcase-actions` fragment findings, five per showcase locale; public generated routes had no equivalent finding. The audit ledger itself also triggered the canonical push workflow, which could cancel an implementation verification run under the intended concurrency policy.
  - P3: none.
- Fixes applied: commit `24982779abf1c659a88587f6a1c72d97b56010a9` scopes `scripts/check-links.mjs` to public generated HTML while preserving target/fragment validation. Commit `4d52792dd4911ce8d0ace83f3fc58cc1b58d1814` adds a push `paths-ignore` only for `docs/qa/FINAL_AUDIT_CONTINUOUS_LOG.md`, so recurring ledger commits no longer cancel or churn the canonical implementation verification; runtime/code/core-doc changes still trigger verification.
- Checks run: traced workflow history to last green VNext verify run `35684426302`; downloaded artifact `wasltech-vnext-foundation` (artifact `10676246672`) from that green run; independently crawled generated anchors/fragments and reproduced exactly 10 showcase-only false positives; confirmed the link-gate fix removes only non-public showcase pages. Fresh verification is triggered by the CI-safety commit and must complete before Stage 0 is closed.
- Visual evidence/artifacts: last known-green preview artifact `10676246672`; no new screenshots claimed in this pass.
- SEO/a11y/performance evidence: canonical workflow remains read-only (`contents: read`), has concurrency cancellation, verifies preview + release, and uploads both artifacts. Only two workflows remain on the branch: canonical `VNext verify` and the VNext route matrix. VNext branch itself is unprotected, so cutover safety still depends on not merging/deploying until the final gate; no production mutation was performed.
- Remaining blockers: Stage 0 cannot be marked PASS until the fresh VNext verify on implementation HEAD `4d52792d...` completes successfully. Route-matrix regression verification is also required because recent interaction/language-switch guards were added after the last successful matrix evidence.
- Exact next checkpoint: Worker B must first inspect the latest VNext verify run for implementation HEAD `4d52792d...`. If green, verify the latest route-matrix evidence and continue Stage 0 English/SEO safety checks. If it fails, inspect the failing step and fix root cause before moving to Stage 1.
- Handoff note for next worker: do not revert the new internal-link gate. Its failure was a scope bug, not evidence that public routes were broken. Preserve public link/fragment validation, keep `__showcase` outside public-route assertions consistent with `check-quality.mjs`, and keep the ledger-only workflow exclusion so alternating audit documentation cannot cancel real verification.
