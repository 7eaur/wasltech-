# البناء المتقن | Al Benaa Al Motqin Website

> **مسودة تحريرية للمراجعة — غير منشورة.** نحتفظ بالتمييز بين ما ورد في البيانات القديمة (النطاق والمخرجات) وبين تفسير قرارات التصميم المقترح. تُراجع الوظائف وحقوق الصور معك قبل اعتماد المحتوى.

**عنوان المشروع:** `/portfolio/albenaa-almotqin/` — **صورة المشروع:** `/assets/works/project_13.webp` — **نوع العمل:** web

## دراسة الحالة بالعربية

### المشروع
البناء المتقن موقع تعريفي لقطاع المقاولات والهندسة. دراسة الحالة تقترح النظر إليه بوصفه وسيلة لعرض خبرة الشركة وتنظيم الخدمات والمشاريع في تسلسل يساعد الزائر على تكوين صورة عن النشاط قبل طلب التواصل أو عرض السعر.

### التحدي والسياق
عميل المقاولات يريد عادة معرفة نوع الأعمال التي تنفذها الشركة وما إذا كانت قريبة من مشروعه، ثم الانتقال إلى خطوة استفسار مناسبة. عرض قائمة خدمات بلا مشاريع، أو معرض صور بلا سياق، قد يصعّب اتخاذ القرار. التحدي هو وصل الخدمات بأعمال مرئية ومسار تواصل مفهوم.

### مساهمة وصل تك ونهج الحل
يسجل الموقع الحالي ثلاث مجموعات واضحة للنطاق: خدمات الشركة، معرض المشاريع، وطلب عرض سعر. لذلك تشرح المسودة تنظيم واجهة تعرّف النشاط أولًا ثم تتيح استعراض الأعمال ثم تتجه إلى التواصل، دون الادعاء بإدارة عروض أسعار آلية أو حسابات عملاء.

### قرارات تصميمية مقترحة للتحقق
1. بدء الصفحة بتوضيح تخصص الشركة والخدمات المقدمة.
2. توظيف معرض الأعمال لتقديم سياق بصري يدعم ما تعرضه الخدمات.
3. إبراز وسيلة طلب عرض السعر دون إيهام الزائر بوجود نظام تسعير فوري.

### النطاق المسجل في المستودع
- عرض الخدمات
- معرض المشاريع
- طلب عرض سعر

### المخرجات بحسب وصف المعرض
- صفحات للخدمات
- عرض المشاريع
- طلب عرض سعر

## English editorial draft

### The project
Al Benaa Al Motqin is a company website for contracting and engineering work. The proposed case study presents it as a way to connect service information, visible projects and a straightforward quotation-enquiry path.

### The challenge
Prospective clients want to understand the contractor's scope, see relevant work and know how to enquire. Isolated lists of services or unexplained photos can make that decision harder.

### The approach
The recorded scope includes service pages, a project portfolio and quote enquiries. The draft describes an information hierarchy rather than implying an automated pricing engine or client portal.

### Suggested design rationale
1. Clarify the company's field and service areas first.
2. Use project presentation to give context to those services.
3. Provide a clear quotation enquiry path without claiming instant quotes.

### Existing recorded scope
- Service presentation
- Project showcase
- Quotation requests

## سجل الأدلة والقيود

- سجل المشروع في `src/data/projects.js` (project-07): يثبت أن **وصف العمل مسجل**، ولا يكفي منفردًا لإثبات أن كل وظيفة منشورة أو عاملة.
- [صورة العرض الحالية](../../../../assets/works/project_13.webp): دليل بصري على مادة العرض، لا على النتائج والأرقام أو عمل الخادم.
- مراجع المصدر القديمة المسجلة: `main:js/portfolio.js`، `main:/assets/works/project_13.webp`. **المرجع `main:js/portfolio.js` غير موجود في HEAD الحالي**، لذا ينبغي الحصول على النسخة التاريخية إن لزم إثبات تفاصيله.

## أسئلة المراجعة قبل النشر
- [ ] ما أقسام الخدمات والمشاريع المنشورة فعليًا؟
- [ ] هل طلب عرض السعر نموذج يرسل استفسارًا أم نظام عروض؟
- [ ] هل الصور وبيانات المشاريع موافق على نشرها؟
- [ ] هل الوصف يطابق مساهمة وصل تك وتاريخ نطاق العمل؟
- [ ] هل المادة البصرية مرخصة للعرض العام؟
- [ ] هل الإصدار المعروض منشور أم تجربة/نموذج؟

**قرار الاعتماد:** النص مسودة ذات أساس في السجل الموجود؛ لا تُحوَّل قرارات التصميم المقترحة أو النتائج إلى حقائق منشورة دون مراجعتك.
