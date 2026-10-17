# تقرير تشخيص Vercel routing جاهز للتصعيد — المرحلة 01

**التاريخ:** 17 أكتوبر 2026.  
**المشروع:** `wasltech`, `prj_tp7lDumOID2XusRHkPvYayybihVe`، حساب Vercel `wasl15`.  
**الدومين الرسمي:** `https://wasl-tech.com/`، لم يحدث نشر إنتاجي من هذه التجارب.  
**المستودع:** `7eaur/wasltech-`.

## وصف المشكلة / طلب مراجعة فنية

تحويلات URL قديمة تحمل `?id=` لا تصل إلى الوجهة الصحيحة في معاينات Vercel المختلفة، رغم تغيير إعدادات routing وبناء المعاينات من Git SHA مختلف. الأهم أن ناتج redirect للروابط القديمة يبدو ثابتًا حتى عند إزالة قواعد `redirects` العليا واستبدالها بـ`routes` ثم محاولة التعامل معها في Middleware عامة.

## حالات التشغيل الموثّقة

**التجربة الأولية:** `seo/stage01-function-routing-spike-20261017`، `b2a17a9af5ac3bf423e74f8f3d713563bb71a8a1`، نشر `dpl_9MqJMiYr4xmoChhhfmBja2JGMWze`.

**تجربة توجيه literal مبسطة:** `seo/stage01-routing-diagnostic-v2-20261017`، `549566e20f7b9b74a6a535e26cdc58369b33f516`، النشر `dpl_8vmDJ2PRxjz4Rmoh7aChmLRt3t7D`. المسارات الاختبارية الجديدة تُعالج، لكن القديمة لا تزال تتجه خطأ.

**تجربة Middleware قبل الكاش:** `seo/stage01-middleware-candidate-20261017`، `bf426545339dac1bae1166e2f6e5f41b1130aeb1`، النشر `dpl_4pJCn7ByD1LUh4bdmd8p5usvGSe5`. Middleware حقيقية في جذر مشروع Static Vercel. النتيجة القديمة باقية.

**تجربة التحقق من تشغيل Middleware نفسها:** `seo/stage01-middleware-diagnostic-20261017`، SHA `48d3770a562bd759f787979348ff400a4733e669`، `dpl_ChbA62APPJrNU6DnxiJddq5jkru3`، `https://wasltech-d5gjphyi7-wasl15.vercel.app`.

أثبتت الاستجابات:
- `/seo-middleware-probe.html` ← **202**, `X-Wasl-Middleware: active` (Middleware نُشرت وتعمل).
- `/service-web?id=unknown` ← **308** إلى `https://wasl-tech.com/services/?id=unknown` بدل 404.
- `/service-web?id=web-development` ← **308** إلى دليل الخدمات بدل تفاصيل المواقع.
- `/en/service-web.html?id=store` ← **308** إلى `/services/ecommerce/?id=store` بدون بادئة اللغة الإنجليزية.
- `/index.html` ← **200** مع Canonical للرئيسية بدل 308.
- تم اختبار Middleware أيضًا بمطابقة شاملة `matcher: ["/:path*", ...]` ضمن نفس الفرع، وتبقى هذه النتيجة غير الصحيحة للروابط التاريخية.
- بالمقابل، على `https://wasl-tech.com/service-web?id=unknown` الذي يعمل من `main` غير المحدث، كانت النتيجة السابقة **200**؛ لذلك سلوك 308 الخاطئ يظهر في المعاينات المراد إصلاحها ولا يجوز اعتباره منشورًا على الإنتاج.

### معرفات الطلب التي قد تساعد فريق Vercel

| الطلب | `x-vercel-id` |
|---|---|
| `/seo-middleware-probe.html` | `iad1:fra1:iad1:iad1::kdhgd-1792263362243-5602abf3c621` |
| `/service-web?id=unknown` | `fra1:iad1::lvjsb-1792263368749-a46494b675c7` |
| `/service-web?id=web-development` | `fra1:iad1::d8htv-1792263374387-e4a2f22b0bfb` |
| `/en/service-web.html?id=store` | `fra1:iad1::bwtrg-1792263380782-b9b986b36e57` |
| `/index.html` | `iad1:fra1:iad1:iad1::cs2tq-1792263386292-d9e2939dd2ea` |

## المطلوب من فحص البنية

نحتاج مقارنة **النسخة الفعلية لـ`routing config` في Deployment** بمصدر `vercel.json`/Middleware والـBuild Output manifest الناتج، والتحقق من أسبقية التوجيه ووجود تحويلات مخزنة في مستوى المشروع أو المعاينة تختلف عن مصدر Git. لا توجد لدينا حتى الآن أدلة تكفي للجزم بأن المشكلة سببها Cache أو Project Settings أو صلاحية matcher بعينها؛ فهذه فرضيات لا نتائج.

نحتاج first-hop HTTP على Deployment مطابق (GET وHEAD و`Location` من غير follow)، والتأكد من أن request يصل إلى Middleware/Function على المسارات التاريخية أو توضيح سبب عدم وصوله.

## قرار الإصدار

**BLOCKER:** PR #67 وPR #77 ونسخة `seo/integration-offline-gate-20261017` غير صالحة للدمج في `main` رغم نجاح GitHub CI. لا تُنشر تغييرات الـ105 redirects الفاشلة، ولا تُدخل Middleware التجريبية للإنتاج. يُعتمد إصلاح جذري **فقط بعد أن يثبت أول HTTP hop و404 المجهول وحفظ اللغة وCanonical** على Preview مطابقة.

## مصادر قواعد المنصة

- https://vercel.com/docs/project-configuration/vercel-json
- https://vercel.com/docs/routing-middleware
- https://vercel.com/docs/routing-middleware/api
