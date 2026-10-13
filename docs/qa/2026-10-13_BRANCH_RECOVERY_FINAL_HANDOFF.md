# وصل تك | إغلاق مهام فرع الإصلاح تقنيًا — التقرير المرجعي وبوابات القبول

**التاريخ:** 2026-10-13 (Asia/Aden)  
**المستودع:** `7eaur/wasltech-`  
**فرع العمل الوحيد:** `fix/independent-site-recovery-20261010`  
**طلب دمج:** [#46 Draft](https://github.com/7eaur/wasltech-/pull/46) → `integration/site-stabilization-20261010`، و[#45 Draft](https://github.com/7eaur/wasltech-/pull/45) → `main`. **لم يحدث دمج أو نشر رسمي أو تعديل DNS أو فروع SEO/الشعار.**  
**آخر SHA للتطبيق والاختبارات:** `9c9cdb73db69e743e0eda5be1037c8e1886f10e1` (الـHEAD قد يتحرك لاحقًا بتحديثات توثيق فقط).  
**معاينة التطبيق المتحقق منها:** `https://wasltech-jkvs0roe3-wasl15.vercel.app/`، حالة Vercel **READY**.  
**الفرق بين الحالات:** `IMPLEMENTED` ≠ `VERIFIED_PREVIEW` ≠ `VERIFIED_PRODUCTION` ≠ `CLOSED`.

## 2026-10-13 — Live Preview HTTP mismatch found and remediated in branch

The previous checkpoint marked headers **CONFIG VERIFIED** only. Read-only Vercel Preview HTTP inspection on `https://wasltech-jkvs0roe3-wasl15.vercel.app/` and a localized unknown route observed that the actual responses **did not include** `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` or `X-Frame-Options` although these existed in top-level `headers` in `vercel.json`. The localized unknown route correctly returned 404. This is a **real runtime/config mismatch**, not a source-check pass.

**Root cause:** the release uses explicit legacy Vercel `routes` with `handle: "filesystem"` for localized 404s. Under that routing mode, attach the shared headers as a `src: "/(.*)"`, `headers: {...}`, `continue: true` **route before** the filesystem handler. Remove ineffective top-level headers and have `check-source-ownership.mjs` assert the ordering and preserve both 404 fallbacks. Source: Vercel official project configuration docs (2026). No Production/DNS/SEO/Logo change.

**Verification rule:** Re-fetch the *new deployment* HTML, AR/EN 404 and a static asset, confirm HTTP status (200 or 404) and **all four actual response headers**. Only then mark `VERIFIED_PREVIEW`. Code CI success alone is insufficient. If live headers still absent, keep issue OPEN and investigate project-level config instead of asserting success.

## 1. ما أُنجز ضمن هذا الفرع

| الدفعة | التنفيذ والسبب الجذري | الدليل وحالة قبول المصدر |
|---|---|---|
| P0 — ملكية العمل | HEAD حي، فرع معزول وDraft PR، تمييز SEO/Logo/Main والتداخل دون دمج | VERIFIED_PREVIEW للحالة المرجعية |
| P1 — حماية البيانات والتنقل | Planner no-JS لا يرسل البيانات بطريقة GET، تفعيل المدخلات فقط بعد ربط السلوك، بديل تواصل مباشر وقائمة جوال تعمل بلا JS | اختبارات المصدر والمتصفح AR/EN PASS |
| P2 — روابط/404 | روابط المشروع/الخدمة وCTA، صفحة 404 مستقلة باللغتين وحالة Preview HTTP 404 والتحويلات داخل النطاق | VERIFIED_PREVIEW؛ إنتاج ليس ضمن الاختبار |
| P3 — تصميم المصدر | تصحيح CSS Hero الذي كان يخفي CTA موجودة بالـDOM، إزالة القص المفروض على وصف الخدمة، ضبط شبكات Home/Services/Portfolio، Contact/FAQ نصّيان وظيفيًا، الهوية محفوظة | Node24 + bilingual Chromium + لقطات مختارة PASS |
| P4 — محتوى | جميع الخدمات الثمان AR/EN والمخرجات + `<details>` بدون JS، اختيار 4–5 أنواع بصورة قابلة للفتح، منع تكرار الوصف العام، حذف تكرار سؤال الربط بين الأنظمة (FAQ 13→12 مع تحديث Home) | 16 service detail routes + FAQ/Home contracts PASS؛ قبول قراءة زائر حقيقي مفتوح |
| P4 — ملكية المصدر | 22 مصدر CSS runtime + Preview CSS واحد + marker تعليقي، أربعة JS clients لكل منها Owner واحد؛ عدم حذف legacy المنتج قبل قطع الإنتاج | `scripts/check-source-ownership.mjs` PASS؛ legacy historical cleanup BLOCKED |
| P5 — وسائط | صور 8 خدمات + 8 تحريري + Home/About + 14 عمل، WebP وsrcset/sizes وقيود الحجم، الأصول الأصلية محفوظة | media + release quality tests PASS؛ **دليل Case Study مستقل ومفقود** |
| P5 — وصولية | بعد كشف axe `target-size` على روابط Footer الإنجليزية (8 صفحات)، أصلح المالك الواحد في `layout.css`، ومعه `check-shell.mjs`؛ إعلان فلتر Portfolio باسم الفئة، قياسات تباين عيّنة | axe 8 route families × 2 locales: **0 violations** في أحدث run؛ ليست شهادة WCAG |
| P5 — أداء وبيئة | Emulated 320–1440، فحص no-JS/keyboard/reduced-motion/CPU 4x ونتائج LCP/CLS محلية، browser reflow ما يعادل 200/400% على عرض مرجعي 1280 | PASS للمحاكاة؛ real zoom/field CrUX/INP **OPEN** |
| P5 — رؤوس الحماية | رؤوس `nosniff`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` من مالك `vercel.json` مع حارس بناء | CONFIG VERIFIED؛ HTTP header smoke خارجي OPEN |
| P6 — Release | تدقيق GitHub PR overlap، توثيق كل التبعيات دون تجاوز صلاحيات الفروع | **BLOCKED/OWNER REVIEW**؛ لا Production إطلاقًا |

## 2. نتائج تشغيل محددة لا تُنسب إلى إنتاج حقيقي

- Commit `00651e8c`: خدمة التطبيق والأجزاء الطويلة في `<details>`، [Chromium #38187340370 PASS](https://github.com/7eaur/wasltech-/actions/runs/38187340370).
- Commit `af46af71`: ملكية JS client مرتبطة بمصدر HTML واحد؛ GitHub VNext [#38187398707](https://github.com/7eaur/wasltech-/actions/runs/38187398707) PASS.
- Commit `a5581e66`: تشغيل axe لأول مرة أظهر عيبًا حقيقيًا في روابط Footer EN (8 حالات في 8 مسارات)، [#38338005768 FAILED](https://github.com/7eaur/wasltech-/actions/runs/38338005768) على معيار الوصولية.
- Commit `b7b17cc6`: عالج targets من CSS المالك، وأزال FAQ duplicate؛ [#38338401184 PASS](https://github.com/7eaur/wasltech-/actions/runs/38338401184)، axe AR/EN 0 في العينة.
- Commit `9c9cdb73db69e743e0eda5be1037c8e1886f10e1`: أضاف رؤوس الحماية وLCP/CLS المخبرية؛ [VNext push #38338784632 PASS](https://github.com/7eaur/wasltech-/actions/runs/38338784632)، [VNext PR #38338789292 PASS](https://github.com/7eaur/wasltech-/actions/runs/38338789292)، [bilingual route matrix #38338784657 PASS](https://github.com/7eaur/wasltech-/actions/runs/38338784657).
- Latest artifact **#11786181079** contains **76 full-page PNG captures + `accessibility-audit.json` and `lab-diagnostics.json`**; scheduled expiry **2026-10-16**; not permanent source or manual acceptance.
- `accessibility-audit.json`: **0 automated violations** over selected Home/Services/App/Portfolio/Contact/Planner/FAQ/Privacy pages, AR+EN at 390px. Axe is an automated sample and does **not** cover all WCAG criteria or real screen readers.
- `lab-diagnostics.json`: **one synthetic local run**, 390px, modeled 180ms RTT and 4x CPU: DOM **1197ms**, LCP **1476ms**, CLS **0.031262**, max startup task **232ms**, max scroll task **58ms**. Not field LCP/INP/CLS, not speed guarantee, not real mobile measurements.
- 320/360/390/768/1024/1366/1440 AR/EN route families and full indexable routes at 390/1440, keyboard interactions, Portfolio show-more/filters, no-JS Planner, FAQ/service native `<details>`, computed selected contrast, and 640/320 effective reflow tests pass. 640/320 is **not physical browser zoom**.
- Screenshot review: inspected 390 Home/Contact/FAQ/Services/Portfolio/App and 1440 Home representative captures, plus contact-sheet overview of route families. No blocking crop/overlap observed in those samples; **not 100% human visual approval of every image**. Baseline full-page heights (older `f9dd09`, not speed metrics): Home 6841px AR / 7407px EN, Services 3513/3987, Portfolio 3627/3675; long Home is an intentional 8-service/featured work/approach/process/FAQ journey, not a diagnosed speed defect.

## 3. الفروع المتوازية وملكية الدمج — تم فحص HEAD في 2026-10-13

| PR | الحالة/المسؤولية | الملفات المتداخلة مع قائمة PR46 | القرار |
|---|---|---:|---|
| #36 — SEO v2 | Draft→main | 4 | REVIEW BEFORE MERGE |
| #37 — SEO | Draft→main، GitHub `mergeable=false` وقت الفحص | 9 | BLOCKED/OWNER REBASE؛ هذه ليست موافقة على دمج |
| #41 — Logo | Draft→VNext foundation | 1 | REVIEW BEFORE MERGE |
| #42 — plan | Draft→main | 3 | مالك الخطة |
| #43 — runtime | Draft→main | 10 | مراجعة مشتركة إن تقرر دمجه |
| #44 — media | Draft→main | 1 | تأكد من عدم إعادة رفع ملفات سبق استلامها |
| #45 — integration | Draft→main | 14 | PR46 مبني عليه؛ لا تمثل المشاركة conflict مؤكدًا |
| #46 — recovery | Draft→integration | — | **فرعنا الوحيد؛ لا دمج آلي** |

الأرقام أعلاه من تقاطع قوائم الملفات التي غيرتها PRs، وليست إثبات Git merge conflict. قد تتغير HEADs، ولذلك يلزم جلبها من جديد قبل أي Merge.

## 4. الأعمال التي لا يجوز الادعاء بأنها «مكتملة» دون طرف خارجي

| البوابة | ما ينقص بالضبط | مالك الدليل / شرط القبول |
|---|---|---|
| UXR-07 + WT-IA-12/57/72 | لقطة حقيقية لنظام منشور أو نسخة عمل + وصف الدور والسياق وحق استخدام الصورة + نتيجة قابلة للإثبات إن ذُكرت | صاحب المشروع؛ ممنوع اختلاق حالة/رقم/شهادة |
| UXR-03/08 — مسح فعلي | تجربة مستخدم يتوصل إلى المخرجات والتواصل خلال مهمة محددة، وملاحظات قراءة 390/1440 | صاحب المنتج/مراجع UX بشري؛ لا تحسب طول PNG مؤشر الأداء |
| WT-IA-27/74 + UXR-12 | **تكبير Browser حقيقي 200% و400%، NVDA/VoiceOver، Safari على iPhone وChrome/Android**، اختبار tab order ومجالات تلامس يدويًا | جهاز حقيقي/مراجع وصولية؛ CI Chromium المعادل ليس بديلًا |
| WT-IA-28/75 + WT-010/011/012 | field Core Web Vitals **LCP p75 / INP p75 / CLS p75**، cold cache وslow network على المستخدمين المستهدفين | RUM/CrUX بعد الإطلاق أو جلسة اختبار جهاز وشبكة موثقة |
| WT-IA-32 | نجاح **استلام** رسالة واتساب والبريد وصحة حساب Instagram بالفعل، لا مجرد صحة الرابط | مالك أرقام وحسابات التواصل |
| WT-IA-26 | فحص HTTP headers الفعلية من نسخة Preview ثم Production | مالك النشر؛ المصدر مضبوط وPreview READY |
| WT-IA-25/38 + WT-015/020 | مسح ملفات legacy وحذف/أرشفة ما ثبت عدم استخدامه فعليًا في Production | مالك الإصدار بعد Cutover؛ إبقاؤها الآن حماية للموقع الحالي |
| WT-IA-30 | اختيار وتوحيد WWW vs apex redirect مع canonical/hreflang/OG/sitemap، وفحص HTTP بعد الدمج | مسؤول SEO/domain؛ **ليس عمل فرع recovery** |
| P6 | نتيجة Merge Preview تشمل #45/#46 وSEO/Logo/الأصول، اعتماد العميل/UAT، إذن صريح بالدمج والنشر، Production SHA/HTTP smoke | مالك release/فروع PR الأخرى |

## 5. حالة القرار النهائي

**ما يمكن غلقه داخل نطاق الفرع:** إصلاحات المصدر المنفذة + فحوص Node24 + Playwright/axe/reflow/lab + جرد الوسائط المصدرية + توثيق العمل/الملكية: **VERIFIED_PREVIEW / SOURCE QA COMPLETE** للـSHA المحدد أعلاه.

**ما لا يُغلق:** قبول التصميم من صاحب الموقع، الأجهزة الحقيقية، field performance، حقوق/صور المشروع الحقيقية، استقبال رسائل التواصل، توافق SEO/logo، تعارض Canonical المضيف الرئيسي، حذف legacy المنتج، الدمج والنشر الرسمي: **OPEN / NEEDS EXTERNAL EVIDENCE / BLOCKED** حسب الجدول.

لا تدعِ أن PR #46 أو الموقع الرسمي «مكتمل للإطلاق» قبل تحقق تلك البوابات. لا تغيّر `main` أو DNS أو PR #36/#37/#41، ولا تحذف/تدمج الفروع. يمكن تسليم الفرع للمراجعة أو إتمام الاختبارات الخارجية لاحقًا دون إعادة إصلاح المراحل المنفذة.

**المراجع التشغيلية:** `PROJECT_STATUS.md`، `PROJECT_HANDOFF.md`، `docs/qa/2026-10-12_ROOT_CAUSE_CLOSURE_MATRIX.md`، `docs/qa/FINAL_MEDIA_INVENTORY.md`، `AGENTS.md`.
