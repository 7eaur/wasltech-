# مراجعة Vercel Preview التكاملية قبل النشر — وصل تك

**التاريخ:** 17 أكتوبر 2026 — **بيئة Preview فقط**.  
**الفرع:** `seo/integration-offline-gate-20261017`، SHA `ab77f7121fc03af7904cf1cc9952ed0f1e5f8fd7`.  
**النشر الاختباري:** `dpl_8BzTmbra3HcZXR3mpv1U2hziRhmY`، `https://wasltech-a20btwkxu-wasl15.vercel.app` — **READY**.  
**الإنتاج:** لا تغيير على `main` ولا على الدومين الرسمي؛ هذا فرع تجميع غير مخصص للدمج المباشر.

## فحص صفحة فعلية من الفئات الرئيسية (15 مسارًا)

| المجموعة | المسارات المختبرة | النتيجة الفعلية |
|---|---|---|
| الرئيسية | `/`, `/en/` | HTTP 200، عناوين مناسبة للخدمات، self-canonical، روابط hreflang |
| الخدمات | `/services/web-development/`, EN؛ `/services/ecommerce/`, EN؛ `/services/company-profiles/`, EN | **6/6 HTTP 200** مع عنوان خاص للخدمة وself-canonical وhreflang وعرض قسم `id="service-choice"` |
| المشروع Update Card | `/portfolio/update-card-digital-services/`، EN | **2/2 HTTP 200** مع قسم `project-decisions` ومحتوى عربي/إنجليزي |
| مقالة الموقع/النظام | `/insights/website-or-web-system/`، EN | **2/2 HTTP 200** مع روابط المشاريع `article-project-examples` وكيان `#editorial-team` |
| صفحات Google الأربع غير المفهرسة | `/portfolio/aroma-cafe/`، `/portfolio/elite-electronics/`، `/en/portfolio/cms-dashboard/`، المقال أعلاه | جميعها استجابت HTTP 200 وself-canonical في **Preview**، دون إثبات فهرسة Google |

## نتائج CI لنسخة التجميع

- `run 38997942284` على `e368865...`: SUCCESS، ونجح Building Preview/Release وMedia/88-route internal discovery/Portfolio Evidence/Article to Project Links/Analytics Consent/Legacy Config.
- `run 38998524617` على `ab77f712...`: SUCCESS لنفس الشفرة مع تقرير التجميع.
- جميع فحوص الروابط القديمة المذكورة أعلاه **هي فحوص Source static فقط** وليست تأكيدًا لتحويلات HTTP.

## أسباب منع النشر

**المرحلة 01 لا تزال مانعًا مُثبتًا:** PR #67 وPR #77 واختبارات routing التجريبية لم تجتز فعليًا استجابات `/index.html` ولا mapping للمصادر `/service-web`. لذلك **لا دمج لهذا الفرع حتى مع نجاح 15 صفحة ونظام CI**.

### تجربة حية جديدة على SHA الخاص بـPR #77

- المعاينة `https://wasltech-qjzb20fn6-wasl15.vercel.app` READY.
- `/api/legacy-service?language=ar&id=unknown` أعادت **404** سليمًا؛ طلب `id=app` المباشر ينتج صفحة تطبيقات صحيحة بعد تحويل موقعه.
- `/service-web?id=unknown` بقي **308 خاطئًا إلى `/services/?id=unknown`**.
- `/en/service-web.html?id=store` بقي **308 خاطئًا إلى `/services/ecommerce/?id=store`** وفقد EN.
- `/index.html` و`/en/index.html` بقيتا **200** بدل تحويل دائم، مع self-canonical صحيح.
- تجربتا `seo/stage01-edge-diagnostic-20261017` و`seo/stage01-routing-diagnostic-v2-20261017` اختبرتا قواعد مسارات مبكرة ومعزولة في Vercel. `/legacy-edge-check.html` وصلت إلى `/about/` و`/legacy-func-check.html` وصلت إلى صفحة متجر EN، لكن **المسارات التاريخية نفسها** ما زالت تتصرف بشكل مختلف.
- هذا يرجح تضاربًا في أسبقية مطابقة مسارات Legacy ومراحل معالجة Vercel، **وليس عطلًا في أسماء الخدمات**. التشخيص النهائي للطبقة التي تعترض المسار لم يثبت بعد.

## بوابة التسليم التالية

1. تحري مصدر القواعد التي تعالج `/service-web` أثناء النشر، ومقارنتها بمخرجات Build Output API وVercel routing manifest، قبل إضافة ترقيعات جديدة.
2. لا تغير الـ105 redirects المولدة أو تستبدلها بحل آخر من دون **HTTP first-hop** صريح من مصدر لا يتبع Redirect تلقائيًا.
3. بعد إثبات الحل على معاينة SHA مطابق، نفّذ مصفوفة GET/HEAD/308/404 وCanonical، ثم انقل التصحيح إلى PR #67.
4. راجع PRs #68–#76 تباعًا على HEAD الرسمي الجديد، وأعد CI/Preview ومراجعة المحتوى/الخصوصية البصرية قبل الدمج.

**الحالة:** نجحت المعاينة التكاملية للمحتوى والروابط المقروءة في عينة 15 صفحة؛ **التحويلات التاريخية لم تنجح وتظل مانع نشر**. لا يجوز وصف المرحلة 01 بأنها مكتملة أو اعتبار الأربع مفهرسة.
