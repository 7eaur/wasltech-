# وصل تك — رؤوس حماية ثابتة ومقاييس أداء مخبرية

**التاريخ:** 2026-10-13 | **الفرع:** `fix/independent-site-recovery-20261010` | PR #46 فقط.

## السبب والإصلاح

المراجعة التاريخية `WT-IA-26` لاحظت غياب إعدادات Response Headers من `vercel.json`. الموقع VNext ثابت، ولا يحتاج الكاميرا/المايكروفون/الموقع الجغرافي أو تضمينه في مواقع خارجية.

أضفنا في المصدر المشترك `vercel.json` وتحت wildcard:
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `X-Frame-Options: SAMEORIGIN`

لا CSP صلبة قبل تدقيق المحتوى المضمن وGoogle Fonts وPreview؛ لا تعديل DNS أو canonical أو فروع SEO. اختبار `check-source-ownership.mjs` يضمن بقاء الرؤوس في إعدادات الإصدار، لكن **يلزم اختبار HTTP response Headers للـPreview وبعد الإطلاق** — نجاح build وحده لا يثبت تسليم الرؤوس عبر الشبكة.

## قياس الأداء

أضيف `lab-diagnostics.json` إلى مخرجات فحص Chromium البطيء. يجمع وقت DOM وlong tasks الحالية، ويضيف **LCP تجريبي وCLS تجريبي** باستخدام PerformanceObserver مع عرض شروط التجربة: `390px`، اتصال محاكى `180ms`، CPU مقيد 4x، سيرفر ملفات محلي. لا قيم Field RUM/CrUX أو INP p75؛ عندما لا تتوفر LCP تبقى null بدل رقم مفترض.

**التنفيذ:** مطبق في المصدر، يحتاج CI+Vercel على SHA الجديد، ثم مراجعة بشرية وHTTP عملي. P5 field CWV وUAT الأجهزة تبقى مفتوحة. لا تعديل `main` أو نشر Production.

## Verified on 2026-10-13 implementation `9c9cdb73db69e743e0eda5be1037c8e1886f10e1`

- [VNext verify #38338784632](https://github.com/7eaur/wasltech-/actions/runs/38338784632) and [PR verify #38338789292](https://github.com/7eaur/wasltech-/actions/runs/38338789292): **SUCCESS**. [Chromium #38338784657](https://github.com/7eaur/wasltech-/actions/runs/38338784657): **SUCCESS**, with 76 screenshots plus `accessibility-audit.json` (0 reported findings) and `lab-diagnostics.json` in artifact `11786181079` (expires 2026-10-16).
- **One local emulation sample:** DOM 1197ms, LCP 1476ms, CLS 0.031262, startup long task 232ms, interaction long task 0ms, scroll long task 58ms; LCP and CLS are **NOT real-user field measurements** and cannot establish Core Web Vitals compliance in production.
- Vercel Preview for the code SHA is **READY**: `https://wasltech-jkvs0roe3-wasl15.vercel.app/`. Actual response-header HTTP probing and end-user network measurements are **not performed** here; remain in release acceptance.
