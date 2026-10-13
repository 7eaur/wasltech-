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
