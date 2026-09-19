# Wasl Tech Website — Conversation Handoff

Last updated: 2026-09-19  
Repository: `7eaur/wasltech-`  
Official branch: `main`  
Verified HEAD when this handoff was written: `9a0204f28c3075f0cddae3b5ae94c45ec84c7a39`

---

# 1. Purpose of this handoff

This file exists so a new ChatGPT conversation can take over the Wasl Tech website **without repeating the discovery/design work** and without relying on chat memory.

The next conversation must:
1. verify live `main` first,
2. read this file and `PROJECT_STATUS.md`,
3. read design authority files,
4. continue from **Phase 12**, unless the live repository proves that newer work already exists.

Do not restart from Phase 1.
Do not redesign already-approved pages from scratch without new evidence.

---

# 2. Source of truth

Use this order:

1. Live repository code and assets on `main`
2. Actual runtime/browser behavior
3. Executable checks and QA
4. Verified business content in repository
5. Approved Wasl Tech identity
6. Current project documentation
7. This handoff
8. Conversation memory

If live HEAD differs from the HEAD written above, trust the newer live repository and reconcile this handoff.

When information is missing:
- write `NOT VERIFIED`, or
- write `CONTENT REQUIRED`.

Never invent facts to make a page feel complete.

---

# 3. Project identity

Brand:
**وصل تك | Wasl Tech**

Positioning direction:
**The Tech-Forward Partner — الشريك التقني الذكي**

The website should feel:
- elegant,
- deliberate,
- modern,
- calm,
- credible,
- technically polished,
- human-designed,
- organized,
- easy to scan.

Official identity values:
- Primary Navy: `#14305F`
- Accent Teal: `#0E8889`
- Accessible Teal Dark: `#096B70`
- Arabic: IBM Plex Sans Arabic
- English: IBM Plex Sans

Important:
- Navy leads.
- Teal is a controlled accent.
- Base Teal `#0E8889` must not be used for normal-size body/link text on white; use `#096B70`.
- Use approved logo assets only.
- Do not redraw/stretch/retype/recolor the wordmark with CSS filters.

---

# 4. Design inspiration and governing craft

The user explicitly asked that Wasl Tech reach the same **level of elegance, organization and design craft** found in:

`7eaur/update_card`

What was transferred from UPDATE CARD:
- compact controlled density,
- disciplined surfaces,
- restrained radius/shadows,
- image-led storytelling,
- reusable visual contracts,
- editorial composition,
- intentional typography,
- one visual idea per section,
- controlled light/soft/navy rhythm,
- edited mobile layouts,
- systematic component behavior.

What must NOT be copied:
- UPDATE CARD branding,
- UPDATE CARD logo,
- UPDATE CARD page layouts as templates,
- UPDATE CARD content.

Authoritative craft document:
`docs/design/WASL_REFINED_WEB_CRAFT_STANDARD.md`

Read it before touching UI.

---

# 5. Anti-template / anti-AI rules

Reject:
- purple/blue marketing gradients,
- decorative gradients by default,
- glow,
- particles,
- floating icon circles,
- floating badges,
- random blobs,
- generic 3-column icon-card sections,
- all-content-as-cards,
- fake dashboards,
- fake UI,
- random 3D,
- generic stock imagery,
- centered text everywhere,
- identical page compositions,
- oversized empty heroes,
- motion with no function,
- auto-playing carousel,
- decorative parallax,
- glassmorphism as a default.

Bento is not a design requirement.

Prefer:
- editorial rows,
- split layouts,
- structured lists,
- showcase compositions,
- timelines,
- image-led proof,
- restrained asymmetric layouts.

---

# 6. Architecture of the current styling system

The refined rebuild intentionally separated global responsibilities.

## `css/variables.css`
Central tokens.

Current refined token decisions include:
- main container around `1220px`,
- major panel radius `20px`,
- standard panel radius around `14px`,
- controls around `10px`,
- compact section rhythm,
- short motion durations,
- subtle ambient shadows.

## `css/craft-system.css`
**Global primitives only.**

Do not add page-specific layout rules here.

It owns shared:
- container,
- section rhythm,
- typography,
- buttons,
- surfaces,
- media primitives,
- generic split,
- CTA baseline,
- reduced-motion baseline.

A previous attempt accidentally turned this file into a multi-thousand-line page-specific file. That was corrected before Phase 1 merge. Do not repeat that mistake.

## `css/shell.css`
Shared:
- header,
- navigation,
- mobile drawer,
- footer,
- floating utilities.

## `css/responsive-normalization.css`
Final cross-page responsive/dark guard layer.

It is intentionally loaded last.

It handles:
- safe-area positioning,
- minimum touch targets,
- mobile form font sizing,
- wrapping,
- fixed/modal guardrails,
- dark form controls,
- focus-visible,
- reduced-motion reveal fallback,
- scroll-margin anchors.

## Page-specific CSS
Page architecture belongs in scoped/page CSS, not the global craft layer.

---

# 7. Current public information architecture

Primary navigation:
- الرئيسية
- خدماتنا
- أعمالنا
- كيف نعمل
- من نحن
- CTA: ابدأ مشروعك

Contact is reached by CTA rather than another primary text link.

Blog is intentionally not in primary navigation until real content exists.

Supporting:
- FAQ
- 404
- Blog/knowledge placeholder, noindex

---

# 8. Current service architecture

Current live service keys in `js/services-data.js`:

1. `web`
2. `app`
3. `store`
4. `programming`
5. `tech`
6. `profiles`
7. `design`
8. `marketing`

The current implementation deliberately restored eight independent service routes.

Important distinctions:
- Programming is not merged into Technical Solutions.
- Profiles is a standalone service.
- Dynamic service route remains:
  `service-web.html?id=<service-id>`

Do not replace this with 8 duplicated static HTML service pages without a strong engineering reason.

The sitemap currently includes all 8 service routes.

---

# 9. Current portfolio architecture

`js/portfolio.js` contains 14 project records.

The portfolio:
- preserves the verified records,
- supports filtering,
- uses an in-site project drawer,
- maps projects to related services,
- can show same-category projects,
- uses repository-supported information only.

Do not invent:
- project metrics,
- conversion results,
- revenue gains,
- client problems not documented,
- tech stacks not documented,
- delivery duration,
- testimonials.

Unmapped/ambiguous old images should not be assigned to projects based on guessing.

---

# 10. Contact architecture

The contact experience is intentionally truthful.

Current behavior:
- WhatsApp is primary.
- Email and Instagram are secondary.
- Project-context form asks for:
  - name,
  - phone,
  - service,
  - stage,
  - optional current project link,
  - details.
- The form does not send to a backend.
- It validates and prepares a structured WhatsApp message.
- The user chooses whether to open/send it.
- There is no fake “message sent successfully” state.

Do not add a backend/provider silently.
Do not invent response times.
Do not claim “100% secure/private”.

---

# 11. Completed Refined Craft phases

## Phase 1 — Global Design System & Layout Architecture
Merged commit:
`3640e35ecbd7fbf6039253118a2500919fa525b6`

Created/refined:
- design authority,
- rebuild plan,
- tokens,
- global craft primitives.

QA:
`docs/design/PHASE_1_FOUNDATION_QA.md`

## Phase 2 — Shared Header / Navigation / Footer
Merged commit:
`fab4c0abc5b0bbe3b770179be400a8e5ed08c1da`

Key outcome:
- compact shared shell,
- 5 primary links,
- clear CTA,
- solid mobile drawer,
- concise footer,
- accessible navigation behavior.

QA:
`docs/design/PHASE_2_SHELL_QA.md`

## Phase 3 — Homepage
Merged commit:
`d22278c4e97ae00a17a7b4ccf39862e3e569bee5`

Key outcome:
- compact contained hero,
- all 8 services discoverable,
- verified work proof,
- concise process,
- contextual FAQ,
- closing CTA,
- no generic card-wall design.

QA:
`docs/design/PHASE_3_HOMEPAGE_QA.md`

## Phase 4 — Services Directory
Merged commit:
`dd690aa48de01a285216e7bc86d5d1695623e6c3`

Key outcome:
- 8 official services,
- editorial directory,
- decision guidance,
- proof/context,
- programming vs tech distinction,
- Profiles standalone.

QA:
`docs/design/PHASE_4_SERVICES_QA.md`

## Phase 5 — Adaptive Service Detail
Merged commit:
`0ec3eb4d5f38708f612a6b2a249e9cd5c6ed0927`

Key outcome:
one dynamic service route, with adaptive hierarchy by service mode.

Service modes:
- Product: web/app/store
- System: programming/tech
- Presence: design/profiles/marketing

Journey:
Understand → Fit → Deliverables → Proof → Process → FAQ → Contact

QA:
`docs/design/PHASE_5_SERVICE_DETAIL_QA.md`

## Phase 6 — Portfolio
Merged commit:
`23bcb5d795e3ee07ad7ba7f49e8735a74f7211e6`

Key outcome:
- work-first design,
- all 14 projects preserved,
- filtering,
- accessible project drawer,
- related service/projects.

QA:
`docs/design/PHASE_6_PORTFOLIO_QA.md`

## Phase 7 — About
Merged commit:
`c345254c7aa0a4b5e109154df95df933aa1ceeb5`

Key outcome:
- restrained story,
- beliefs,
- scope,
- decision philosophy,
- no duplicated Process page,
- reduced decorative media.

QA:
`docs/design/PHASE_7_ABOUT_QA.md`

## Phase 8 — Process
Merged commit:
`6b89ce7f0a8544b48976e1161271504ec8070aa7`

Key outcome:
- six-stage methodology is the page structure,
- pre-start context,
- project clarity principles,
- workflow FAQ,
- no invented timelines/SLAs.

QA:
`docs/design/PHASE_8_PROCESS_QA.md`

## Phase 9 — Contact
Merged commit:
`8393a9b9a9022faab58fb29555ead7d4068663a6`

Key outcome:
- WhatsApp-primary,
- compact composition,
- contextual form,
- no fake submission.

QA:
`docs/design/PHASE_9_CONTACT_QA.md`

## Phase 10 — FAQ + Secondary/Public Utility Pages
Merged commit:
`99171be786a640f291bb81aa3ca3d703a7af9153`

Key outcome:
- FAQ grouped into 4 topics,
- 12 visible questions,
- matching FAQ JSON-LD,
- Blog remains noindex and unpublished,
- branded 404 added,
- scoped `secondary.css`.

QA:
`docs/design/PHASE_10_SECONDARY_QA.md`

## Phase 11 — Mobile + Dark Mode Normalization
Merged commit:
`9a0204f28c3075f0cddae3b5ae94c45ec84c7a39`

Key outcome:
- `responsive-normalization.css` loaded last,
- safe areas,
- 44px touch targets,
- 16px mobile form controls,
- dark native controls,
- focus-visible,
- fixed/modal guards,
- long-text wrapping,
- reduced motion fallback,
- theme-color synchronization.

QA:
`docs/design/PHASE_11_MOBILE_DARK_QA.md`

---

# 12. Remaining work

Only Phases 12–13 remain in the current rebuild plan.

## Phase 12 — Motion, Accessibility, Performance, Core Web Vitals, SEO/Semantics

Start here.

### Motion
Audit all CSS/JS animation/transition behavior.
Remove anything:
- decorative,
- continuous,
- unnecessary,
- expensive,
- blocking content reveal.

Keep:
- short functional micro-interactions,
- drawers/menus,
- clear hover/focus feedback.

Verify `prefers-reduced-motion`.

### Accessibility
Audit:
- semantic landmarks,
- headings,
- labels,
- ARIA only where necessary,
- focus order,
- focus trapping,
- Escape behavior,
- keyboard navigation,
- mobile drawer,
- portfolio drawer,
- forms,
- details/summary,
- contrast,
- touch targets,
- link names,
- alt text.

Target WCAG 2.2 AA.

### Performance / Core Web Vitals
Audit:
- LCP candidate,
- image loading,
- fetchpriority/eager/lazy,
- dimensions,
- unused assets,
- duplicate CSS,
- dead JS,
- render-blocking resources,
- font behavior,
- layout shift risks,
- long tasks / interaction overhead where measurable.

Do not claim CWV numbers unless they are actually measured.

### SEO / Semantics
Audit:
- title,
- description,
- canonical,
- OG,
- structured data,
- sitemap,
- robots behavior,
- noindex pages,
- heading hierarchy,
- crawlable content,
- organization schema,
- FAQ schema consistency.

Do not invent local business fields or business claims.

### Phase 12 output
Create:
`docs/design/PHASE_12_QUALITY_QA.md`

Use a dedicated branch and PR.
Merge only after fixes/checks pass.

---

# 13. Final Phase 13 release gate

Phase 13 is not another redesign.

It is:
**Cross-Page Craft Normalization + Final Runtime QA**

Review the whole public product against:
- `WASL_REFINED_WEB_CRAFT_STANDARD.md`,
- Wasl identity,
- UPDATE CARD-level craft discipline,
- live runtime evidence.

Pages/routes:
- Home
- Services
- all 8 service ids
- Portfolio
- About
- Process
- Contact
- FAQ
- Blog placeholder/noindex
- 404

Required viewport coverage when runtime/browser is available:
- 1440×900
- 1366×768
- 1024×768
- 768×1024
- 390×844
- 360×740

Required states:
- Light
- Dark
- RTL
- menu closed/open
- portfolio drawer
- all service modes
- contact form validation
- reduced motion

Check:
- horizontal overflow,
- image crop/focal points,
- text wrapping,
- page density,
- page-to-page consistency,
- no repetitive template feel,
- no console errors,
- no missing resources,
- no dead links,
- keyboard flows,
- CTA hierarchy,
- no design regressions.

Final fix loop:
**Inspect → Critique → Fix → Re-run → Verify**

Only after this gate can the website be described as complete.

Create:
`docs/design/PHASE_13_FINAL_QA.md`
and update:
`PROJECT_STATUS.md`

---

# 14. Runtime/browser limitation already encountered

During earlier work, exact full-browser screenshot automation for the newest state was not reliably available in the connected environment.

Important:
- some earlier visual reviews existed for older/intermediate states,
- Phase 11 explicitly does **not** claim screenshot-based final approval,
- do not pretend that the current Phase 1–11 state has passed a fresh hosted-browser release gate.

If browser or preview access becomes available in the new conversation, use it in Phase 13.

If unavailable:
- say so explicitly,
- perform all static/runtime-adjacent checks possible,
- do not claim final production visual approval.

---

# 15. Historical branch correction

A previous refined-craft branch was created from an unmerged contact branch and became mixed with earlier work.

That path was intentionally abandoned/closed.

The implementation was corrected by:
- creating clean phase branches from `main`,
- keeping global craft primitives separate,
- merging phases independently.

Do not revive superseded mixed branches.

Use live `main` only.

---

# 16. Documentation hierarchy

Read in this order:
1. `PROJECT_STATUS.md`
2. `PROJECT_HANDOFF.md`
3. `AGENTS.md`
4. `docs/design/WASL_REFINED_WEB_CRAFT_STANDARD.md`
5. `docs/design/REFINED_CRAFT_REBUILD_PLAN.md`
6. `docs/design/PHASE_11_MOBILE_DARK_QA.md`
7. relevant earlier `PHASE_*_QA.md`

Legacy warning:
`docs/design/QA_REPORT.md` belongs to the older Tech-Forward rebuild stage and contains stale facts such as a 6-service taxonomy. It is historical evidence only and must not override current live code or current phase QA.

---

# 17. Definition of done

The project is **not done yet**.

Done requires:
- Phase 12 merged,
- Phase 13 final cross-page QA completed,
- current live code and docs reconciled,
- no known critical visual/interaction/accessibility issues,
- final runtime/browser visual gate when available,
- final status document updated.

No completion claim before that.
