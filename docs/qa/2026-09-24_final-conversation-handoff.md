# Wasl Tech VNext — Final Conversation Handoff — 2026-09-24

This file is the concise baton for starting a new ChatGPT conversation without redoing completed work.

## 1. Repository and branches
- Repository: `7eaur/wasltech-`
- Active VNext branch: `rebuild/vnext-foundation-20260921`
- Implementation HEAD at handoff time: `93b7fc58f104da20a1818ad7e9ff4147922d37ce`
- Production branch: `main`
- Production HEAD: `a4ed507defe5e7831f3459e12752a89fe0d225fc`
- Do not merge VNext into `main` or perform production cutover without explicit user approval.

## 2. Source-of-truth order
1. Live GitHub repository.
2. Live branch HEAD.
3. Current code.
4. GitHub Actions / CI.
5. Vercel deployment state.
6. Current documentation.
7. This handoff.

If anything conflicts, trust the live repository and update documentation.

## 3. Canonical content baseline
The user explicitly selected this marketing rewrite as the canonical content baseline:
- source commit: `b87872d12adcc836018fe61a7ef1556f04aa5b86`
- file: `إعادة-كتابة-نهائية-مختصرة-بدون-باقات.md`

Current live VNext has already adopted and polished that baseline.

Locked content principles:
- no packages/pricing in the public sales path;
- start from the user need/problem, not from technical jargon;
- outcome-led service copy;
- no invented metrics, testimonials, results, dates, durations, SLAs or guarantees;
- trust through real work/evidence;
- contextual CTAs rather than generic “learn more”;
- Arabic + English parity;
- process is six stages: Understand → Decide → Design → Build → Test → Launch & Evolve.

Current Home journey:
`Hero → Services → Work/Trust → About → Process → FAQ → Final CTA → Footer`

Current service-detail journey:
`need/problem → audience → deliverables → scope-dependent items → process → related work → FAQ → CTA`

## 4. Design work completed in this conversation
### Hero system
- Update Card was used only as a craft reference for density/mobile sequencing.
- Home mobile sequence is locked:
  `copy → image → actions → trust/signals`.
- Desktop Home Hero uses the same content hierarchy in a two-column composition.
- Inner-page Hero action buttons are removed; actions live in page CTAs.
- Hero media is responsive and avoids accidental crop/overflow.

### Typography and card hierarchy
- Site-wide text flow was changed from narrow fixed measures toward flexible responsive sizing.
- Core font scales use responsive values and content containers use available desktop width more intelligently.
- Card walls were reduced.
- Home service/work cards, Services directory, service-detail signals/deliverables/proof/process, Portfolio, Project detail, Insights, Contact, Process and secondary-page information hierarchy were rebalanced for mobile/desktop.
- Do not revert to tiny fixed text such as `.7rem/.78rem` without a concrete reason.

### Footer
- Contact values are compact text rows without contact icons.
- Social network icons remain.
- Contact truth:
  - WhatsApp/phone: `+967 775 377 979`
  - WhatsApp: `https://wa.me/967775377979`
  - email: `info@wasl-tech.com`
  - website: `www.wasl-tech.com`
  - Facebook: `https://www.facebook.com/share/1DtjBgZgad/?mibextid=qi2Omg`
  - X: `https://x.com/50lxt`
  - Instagram: `https://www.instagram.com/wasltech.yem`
  - Telegram: `https://t.me/wasltechyem`
  - TikTok: `https://www.tiktok.com/@wasltech.yem`

### About page
The page was rebuilt away from the earlier weak version. Current direction:
`About → Story → Vision/Mission → Principles → What we build → Final CTA`.

The final marketing rewrite then refined this copy further. Do not restore the earlier generic About text.

## 5. Media already completed
### Service media
All 8 originals + WebP derivatives are committed.

| slug | runtime |
|---|---|
| web-development | `assets/services/web-development.webp` |
| mobile-app-development | `assets/services/mobile-app-development.webp` |
| ecommerce | `assets/services/ecommerce.webp` |
| custom-software | `assets/services/custom-software.webp` |
| technical-solutions | `assets/services/technical-solutions.webp` |
| company-profiles | `assets/services/company-profiles.webp` |
| brand-design | `assets/services/brand-design.webp` |
| digital-marketing | `assets/services/digital-marketing.webp` |

Originals:
`assets/services/source/<slug>.jpeg`

One canonical mapping is owned by `src/data/services.js`; Home, Services and service-detail Hero use it.

### Home/About media
- Home Hero: `assets/media/home-hero.webp`
- About image: `assets/media/about-us.webp`
- originals: `assets/media/source/`

Earlier broken binary uploads were replaced by valid runtime WebP files. Do not recreate them.

## 6. Shared component/refactor state
Current live code includes:
- `src/components/MediaCard.js`
- `src/components/CallToAction.js`
- shared checks for card/CTA contracts.

The current design intentionally centralizes repeated image/card/CTA behavior. Avoid reintroducing page-specific duplicates unless they serve a genuinely different information job.

## 7. Verification state
At implementation HEAD `93b7fc58f104da20a1818ad7e9ff4147922d37ce`:
- VNext verify: `36052391480` — **SUCCESS**
- Route matrix: `36052391498` — **SUCCESS**
- Vercel deployment: `dpl_8j8ebNEuqtSW2kp9UMLpj8hFoz5K` — **READY**
- Preview URL: `https://wasltech-472tnx2s9-wasl15.vercel.app`

Current temporary share URL at handoff time:
`https://wasltech-472tnx2s9-wasl15.vercel.app/?_vercel_share=hknwDMDyE51nlahPYPBUEogGAwp4IcFP`

Share tokens expire; regenerate one if needed.

## 8. Vercel / publishing policy
User explicitly asked not to publish every small change.
- Batch edits.
- Git pushes may automatically create Vercel previews.
- Do not add manual Vercel deployments on top of Git integration unless asked.
- When the user says `انشر`, verify the exact HEAD and confirm deployment reaches `READY`.
- Never confuse Preview with production.

## 9. Current remaining work
There is **no pending service-image upload/binding task**.

The next conversation should:
1. fetch the live branch HEAD;
2. compare it with `93b7fc58f104da20a1818ad7e9ff4147922d37ce` because it may have advanced;
3. inspect the latest preview visually;
4. continue from the user's newest design/content request rather than restarting analysis;
5. run VNext verify after meaningful batches;
6. run full route matrix at major review points;
7. keep `main` unchanged until explicit cutover approval.

Potential later pre-production work:
- finish any remaining editorial Hero/article final-media replacements listed in `docs/qa/FINAL_MEDIA_INVENTORY.md`;
- final subjective visual review at mobile + desktop;
- final SEO/OG/media check;
- explicit user acceptance;
- only then consider Phase 14 cutover.

## 10. Key documentation to read
- `PROJECT_STATUS.md`
- `PROJECT_HANDOFF.md`
- `AGENTS.md`
- `docs/README.md`
- `docs/core/DESIGN_SYSTEM.md`
- `docs/core/CONTENT_IA.md`
- `docs/core/FINAL_AUDIT_PROTOCOL.md`
- `docs/qa/FINAL_AUDIT_CONTINUOUS_LOG.md`
- `docs/qa/FINAL_MEDIA_INVENTORY.md`
- this file

## 11. Exact resume instruction
Do not ask the user to re-explain the project. Do not redo completed media, Footer, About, typography, Hero or marketing rewrite work. Fetch live state first, then continue from the latest user feedback and keep status language precise:
`local ≠ committed ≠ verified ≠ deployed ≠ production`.
