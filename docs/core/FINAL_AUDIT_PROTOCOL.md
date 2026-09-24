# Wasl Tech VNext — Continuous Final Audit Protocol

Status: ACTIVE
Repository: 7eaur/wasltech-
Branch under audit: rebuild/vnext-foundation-20260921
Production branch: main
Execution model: alternating two-pass audit, one pass every 30 minutes
Primary rule: never restart from zero; always continue from the shared audit log.

---

## 1. Purpose

This protocol governs the final pre-production review of Wasl Tech VNext.

The objective is not to produce another design iteration from scratch. The objective is to prove that the existing VNext implementation is coherent, complete, maintainable, visually consistent, bilingual, crawlable, accessible, performant, and safe to cut over after final imagery is supplied.

The audit must:
- inspect code, generated output, tests, CI, content, SEO, visuals, interactions, and documentation;
- compare Arabic and English behavior;
- review representative desktop/tablet/mobile widths;
- identify root causes rather than symptoms;
- fix issues when safe and in scope;
- re-run the relevant gates after every meaningful fix;
- document every finding and action in one shared log;
- leave final imagery replacement until the end.

---

## 2. Source-of-truth hierarchy

Every audit pass must use this order:

1. live branch HEAD;
2. generated preview/release output;
3. executable CI/tests/check scripts;
4. canonical data/config;
5. runtime/browser behavior;
6. canonical docs;
7. audit log;
8. historical notes only as background.

Never trust an old status statement over live code or a current failing check.

---

## 3. Files every audit pass must read first

1. PROJECT_STATUS.md
2. PROJECT_HANDOFF.md
3. AGENTS.md
4. docs/README.md
5. docs/core/DESIGN_SYSTEM.md
6. docs/core/CONTENT_IA.md
7. docs/core/EXECUTION_PLAN.md
8. docs/core/QA_RELEASE.md
9. docs/qa/FINAL_AUDIT_CONTINUOUS_LOG.md
10. this protocol file

The next worker must read the shared log before doing anything else.

---

## 4. Audit execution rules

Each pass must follow:

READ LAST LOG → FETCH LIVE HEAD → VERIFY STATE → SELECT NEXT UNFINISHED CHECKPOINT → INSPECT → FIX ROOT CAUSE → VERIFY → VISUAL REVIEW → DOCUMENT → HAND OFF

Never:
- skip ahead while an earlier checkpoint has an unresolved P0/P1 problem;
- create workaround CSS when a shared root cause exists;
- invent business facts, client data, project outcomes, metrics, timelines, prices, testimonials, technologies, or job openings;
- expose service/project count counters;
- mix Arabic and English taxonomy;
- alter final image requirements during this audit;
- merge to main or deploy production during this protocol.

---

## 5. Severity model

P0 — Release blocker
- broken build/release;
- route missing;
- production-dangerous CI;
- data loss;
- invalid critical form behavior;
- indexing/canonical catastrophe;
- major runtime exception;
- severe accessibility failure blocking use.

P1 — Must fix before images/cutover
- broken navigation;
- significant visual/layout failure;
- major bilingual mismatch;
- incorrect SEO metadata/schema;
- unusable mobile state;
- broken internal links;
- duplicated architecture creating real conflict;
- performance regression likely to violate budgets.

P2 — Quality defect
- weak spacing/hierarchy;
- inconsistent copy or component behavior;
- minor a11y issue;
- dead code/CSS;
- documentation drift;
- minor SEO/content issue.

P3 — Polish/deferred
- subjective micro-polish;
- final imagery/crop work;
- non-blocking copy refinement.

All P0/P1 must be resolved before the final media stage.

---

## 6. Stage plan

### Stage 0 — Repository / branch / CI safety
Review:
- main vs VNext HEAD;
- branch protection assumptions;
- workflows and triggers;
- stale/legacy workflows;
- workflows able to write to main;
- duplicate verification pipelines;
- release vs preview separation;
- artifacts;
- cancellation/concurrency rules;
- production cutover hazards.

Verify:
- VNext verify is canonical;
- preview cannot be indexed;
- release build is deterministic;
- no obsolete legacy CI will fail or mutate main after cutover.

Deliverable:
- CI/repository safety marked PASS or issues fixed.

### Stage 1 — Architecture / dependency graph
Review:
- src structure;
- scripts;
- config/data/templates/components/pages separation;
- dead modules;
- duplicate components;
- dead CSS;
- placeholder/foundation leftovers;
- imported-but-unused architecture;
- duplicated page templates;
- data-driven route generation;
- release-only vs preview-only assets/styles.

Verify:
- one owner per responsibility;
- no legacy placeholder paths;
- no duplicate page implementation;
- no obvious dead dependency shipped to production.

### Stage 2 — Canonical data integrity
Review:
- services;
- projects;
- FAQ;
- articles;
- jobs;
- pages;
- content contracts;
- stable ids/slugs;
- relations;
- asset paths;
- publication state;
- locale completeness.

Check:
- duplicate ids/slugs;
- invalid relations;
- missing required fields;
- unsupported claims;
- accidental counters;
- leaked NOT VERIFIED / CONTENT REQUIRED;
- empty published entities;
- drafts entering sitemap.

### Stage 3 — Arabic content review
Review every public page:
- Home;
- Services;
- each service family and representative service detail;
- Portfolio;
- project detail;
- About;
- Process;
- Contact;
- Planner;
- FAQ;
- Insights;
- every published article;
- Careers;
- Privacy;
- Terms;
- 404.

Check:
- customer-facing wording;
- no internal justification language;
- no robotic/AI copy;
- heading/support duplication;
- unnecessary verbosity;
- CTA clarity;
- grammar/punctuation;
- market fit for Yemen + Gulf;
- no service/project count claims;
- no unsupported superiority claims.

### Stage 4 — English content and parity review
For every Arabic route, compare the English route.

Check:
- same meaning, not mechanical translation;
- no missing section;
- no Arabic leakage;
- no English leakage into Arabic;
- equivalent CTA intent;
- service/project/article identity remains stable;
- terminology consistency;
- title/description quality;
- long English text does not break layout;
- language switch preserves entity identity.

Document any deliberate wording differences.

### Stage 5 — Shared shell visual audit
Review Header / Navigation / Footer at:
- 360;
- 390;
- 768;
- 1024;
- 1366;
- 1440.

Both RTL and LTR.

Inspect:
- logo proportions;
- header height;
- menu;
- mobile drawer;
- active states;
- language switch;
- focus;
- footer density;
- contact icons;
- social links;
- CTA/footer separation;
- no accidental excessive footer height;
- no visual regression from final homepage baseline.

### Stage 6 — Homepage visual + structural audit
Use approved Homepage as baseline.

Review:
- Hero hierarchy;
- service presentation;
- project cards;
- About;
- Why;
- Process;
- FAQ;
- final CTA;
- Footer.

Compare Arabic/English and all canonical widths.

Do not redesign the approved structure unless a real defect is found.

### Stage 7 — Services system audit
#### Services directory
Review:
- group hierarchy;
- mobile two-up card behavior;
- odd-card handling;
- readability;
- CTA;
- Hero;
- no service count.

#### Service detail
Review representative states:
- service with related projects;
- service without strong proof;
- short copy;
- long copy;
- Arabic/English.

Check:
- decision strip;
- deliverables;
- proof;
- process;
- FAQ;
- constraints;
- CTA;
- structured data.

Then verify all generated service routes resolve.

### Stage 8 — Portfolio / project system audit
Review:
- filters;
- keyboard behavior;
- all/each category filtering;
- equal project hierarchy;
- no oversized lead project;
- card summaries;
- project Hero;
- case-study story;
- scope;
- deliverables;
- related services/projects;
- no year/live URL/stack/gallery reintroduced;
- canonical project image remains single primary media source.

Check all project routes AR/EN.

### Stage 9 — About + Process audit
About:
- positioning;
- team wording;
- service-family references;
- qualitative claims;
- no public counts.

Process:
- sequence;
- outcome clarity;
- no invented duration;
- mobile phase density;
- dark principle panel;
- CTA.

Check pages do not duplicate each other.

### Stage 10 — Contact + Project Planner functional audit
Contact:
- WhatsApp;
- email;
- Instagram;
- safe external link behavior;
- RTL/LTR values.

Planner:
- all fields;
- required/optional behavior;
- keyboard;
- validation;
- review state;
- edit state;
- generated WhatsApp text;
- no fake submit;
- no localStorage/sessionStorage;
- no network POST;
- no private data persisted.

Test invalid and valid flows in AR/EN, mobile/desktop.

### Stage 11 — FAQ / Insights / Careers / Legal / 404
FAQ:
- visible FAQ = schema FAQ;
- groups;
- accordion keyboard semantics;
- deep page readability.

Insights:
- listing;
- card summaries;
- article links;
- article long-form readability;
- related services;
- publish states.

Articles:
- all published articles AR/EN;
- author/date/category;
- heading order;
- internal links;
- Article schema.

Careers:
- honest no-openings state;
- no invented role;
- future Job detail architecture remains valid.

Legal:
- privacy/terms match actual runtime behavior;
- no claims about cookies/storage/processing that code contradicts.

404:
- useful recovery;
- correct language;
- noindex as appropriate if designed that way.

### Stage 12 — Technical SEO deep audit
Check generated RELEASE output, not source assumptions.

Every indexable route:
- unique title;
- useful description;
- canonical;
- reciprocal hreflang;
- x-default;
- correct lang/dir;
- exactly one H1;
- Open Graph;
- Twitter metadata;
- social image resolves;
- schema valid and matches visible content;
- internal links resolve;
- no orphan important page;
- sitemap includes all publishable routes only;
- robots production/preview differ correctly;
- no duplicate titles at scale;
- no thin keyword pages;
- article/service/project relations crawlable.

Check legacy redirects/cutover mapping separately before Phase 14.

### Stage 13 — Accessibility audit
Target WCAG 2.2 AA.

Check:
- skip link;
- keyboard-only use;
- focus visibility;
- logical order;
- mobile menu focus/close;
- form labels;
- aria-describedby;
- aria-invalid;
- accordion semantics;
- button/link naming;
- icon-only control labels;
- color contrast;
- touch targets;
- reduced motion;
- heading hierarchy;
- landmarks;
- alt text purpose;
- decorative images empty alt;
- no hover-only information.

### Stage 14 — Performance / Core Web Vitals audit
Review:
- production CSS size;
- JS size;
- dead CSS/JS;
- third-party fonts;
- Google Fonts behavior;
- render-blocking resources;
- LCP asset strategy;
- Hero fetch priority;
- duplicate eager images;
- below-fold lazy images;
- intrinsic dimensions;
- CLS risks;
- animation cost;
- dependency footprint;
- caching-ready static output.

Targets:
- LCP <= 2.5s;
- INP < 200ms;
- CLS < 0.1.

Do not claim real production CWV before production measurement.

### Stage 15 — Runtime/link/scenario audit
Crawl representative preview/release output.

Check:
- all navigation links;
- all cards;
- all CTAs;
- all language switches;
- all related links;
- fragments;
- mailto;
- WhatsApp;
- Instagram;
- portfolio filters;
- planner;
- 404 behavior;
- no JS page errors;
- no failed local resource requests.

### Stage 16 — Visual audit matrix
Perform full visual review after structural fixes.

Required widths:
- 360;
- 390;
- 768;
- 1024;
- 1366;
- 1440.

Both AR/EN.

Capture representative route families:
- Home;
- Services;
- Service Detail;
- Portfolio;
- Project Detail;
- About;
- Process;
- Contact;
- Planner;
- FAQ;
- Insights;
- Article Detail;
- Careers;
- Privacy;
- Terms;
- 404 if possible.

Review:
- hierarchy;
- whitespace;
- rhythm;
- cards;
- type scale;
- line length;
- wrapping;
- crop placeholder role only;
- CTA/footer;
- header;
- long vs short pages;
- mobile density;
- RTL/LTR;
- visual consistency;
- no generic template/AI feel.

### Stage 17 — Documentation / drift cleanup
Reconcile:
- PROJECT_STATUS.md;
- PROJECT_HANDOFF.md;
- canonical core docs;
- historical phase text;
- stale "next phase" statements;
- old counts/empty-state statements;
- obsolete workflow references;
- obsolete artifact references.

Do not erase useful history; clearly mark historical facts as historical.

### Stage 18 — Pre-final-media gate
Before asking for final images:
- all P0/P1 = 0;
- all verify/release gates green;
- responsive matrix green;
- SEO checks green;
- content parity reviewed;
- runtime flows tested;
- documentation aligned.

Then produce the exact final image inventory.

### Stage 19 — Final media stage (DEFERRED)
Only after all earlier stages pass:
- receive final images;
- crop/focal point;
- responsive formats;
- WebP/AVIF where appropriate;
- dimensions;
- file-size budget;
- Hero LCP strategy;
- social preview checks;
- final 390/1440 visual review.

### Stage 20 — Phase 14 cutover
Not part of the recurring audit until user explicitly approves.

Then:
- merge approved VNext;
- deploy exact SHA;
- verify production routes/metadata/assets/redirects;
- measure runtime;
- confirm production SHA;
- update final documentation.

---

## 7. Alternating worker protocol

Two recurring workers operate on the same branch and same log.

### Worker A — Architecture / Arabic / implementation owner
Runs at the first half-hour slot.

Primary emphasis:
- architecture;
- code;
- CI;
- Arabic content;
- shared visual system;
- functional flows;
- root-cause fixes.

Worker A must:
1. read the last Worker B handoff;
2. verify live HEAD;
3. continue the earliest unfinished checkpoint;
4. fix issues;
5. run relevant checks;
6. add a complete log entry;
7. leave explicit next action for Worker B.

### Worker B — English / SEO / parity / verification owner
Runs 30 minutes after Worker A.

Primary emphasis:
- English parity;
- SEO;
- structured data;
- accessibility;
- performance;
- visual comparison;
- regression verification.

Worker B must:
1. read Worker A's newest log entry;
2. fetch the current HEAD after A's commits;
3. verify A's fixes did not regress other routes/locales;
4. continue the next unfinished checkpoint;
5. fix issues in scope;
6. run relevant checks;
7. document exact evidence;
8. leave explicit next action for Worker A.

Neither worker may repeat a completed checkpoint unless:
- regression evidence appears;
- a new fix affects that checkpoint;
- the log explicitly requests re-verification.

---

## 8. Shared log format

Every pass appends ONE entry to:
`docs/qa/FINAL_AUDIT_CONTINUOUS_LOG.md`

Required fields:

### [timestamp] Worker A/B — Pass N
- Starting HEAD:
- Ending HEAD:
- Stage/checkpoint:
- Files/code inspected:
- Pages/routes inspected:
- Viewports/locales inspected:
- Findings:
  - P0:
  - P1:
  - P2:
  - P3:
- Fixes applied:
- Checks run:
- Visual evidence/artifacts:
- SEO/a11y/performance evidence:
- Remaining blockers:
- Exact next checkpoint:
- Handoff note for next worker:

A worker must never claim PASS without evidence.

---

## 9. Conflict handling

If the next worker finds HEAD changed since the prior log:
- use live HEAD;
- inspect the commits;
- do not revert newer valid work;
- note the divergence in the log.

If a fix conflicts with canonical rules:
- stop that specific fix;
- document the conflict;
- continue independent checks;
- do not invent a product decision.

If CI fails:
- root-cause CI/build failure before continuing visual polish.

---

## 10. Completion definition

Continuous audit is complete only when:
- every Stage 0–18 checkpoint has PASS evidence;
- no P0/P1 remains;
- Preview verify PASS;
- Release verify PASS;
- AR/EN responsive matrix PASS;
- content parity reviewed;
- SEO output reviewed;
- accessibility reviewed;
- runtime flows reviewed;
- stale architecture/CI/docs cleaned;
- exact final media list is ready.

Then recurring audit tasks may be disabled before the final media replacement/cutover work begins.
