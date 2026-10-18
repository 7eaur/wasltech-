# تيك زون الإلكتروني | Tech Zone E-commerce App

> **مسودة تحريرية للمراجعة — غير منشورة.** نحتفظ بالتمييز بين ما ورد في البيانات القديمة (النطاق والمخرجات) وبين تفسير قرارات التصميم المقترح. تُراجع الوظائف وحقوق الصور معك قبل اعتماد المحتوى.

**عنوان المشروع:** `/portfolio/tech-zone/` — **صورة المشروع:** `/assets/works/project_5.webp` — **نوع العمل:** app

## دراسة الحالة بالعربية

### المشروع
تيك زون مشروع تطبيق متجر على الجوال، يدور حول رحلة التسوق من استعراض المنتجات إلى السلة ومتابعة الطلب. في هذه الدراسة لا نعامل كل شاشة على أنها إنجاز مستقل؛ الأهم كيف يخدم ترتيب الشاشات قرار الشراء، وكيف ينتقل المستخدم بينها مع الحفاظ على وضوح ما اختاره.

### التحدي والسياق
على شاشة الهاتف يكون لدى المتسوق مساحة محدودة لرؤية تفاصيل المنتج والانتقال إلى السلة. ومع كثرة الخيارات قد ينفصل الاستكشاف عن قرار الطلب إذا لم يكن ترتيب المعلومات والخطوة التالية واضحين. التحدي هو بناء رحلة مترابطة لتصفح الكتالوج والسلة وحالة الطلب بدل واجهات متجاورة بلا منطق استخدام.

### مساهمة وصل تك ونهج الحل
يسجل معرض وصل تك تصميم وتطوير تجربة تطبيق تتضمن كتالوجًا وسلة ومتابعة للطلبات. لذلك تركز هذه المسودة على تسلسل اختيار المنتج، وتجميع المختارات في السلة، ثم تمكين العميل من التعرف على حالة الطلب. لا نفترض بوابة دفع أو مخزونًا آنيًا أو عروضًا محددة دون توثيقها.

### قرارات تصميمية مقترحة للتحقق
1. إبراز تصنيفات المنتجات وتفاصيلها قبل الانتقال للسلة.
2. الحفاظ على ارتباط السلة بما اختاره المستخدم أثناء التصفح.
3. توضيح مرحلة الطلب ومتابعته دون ادعاء خصائص إشعارات غير مؤكدة.

### النطاق المسجل في المستودع
- عرض وتصفح المنتجات
- إدارة السلة
- متابعة الطلبات

### المخرجات بحسب وصف المعرض
- كتالوج منتجات
- سلة مشتريات
- متابعة حالة الطلب

## English editorial draft

### The project
Tech Zone is a mobile shopping application built around product browsing, basket management and order tracking. The case study focuses on how those steps form one purchasing journey, rather than treating each screen as an isolated deliverable.

### The challenge
On smaller screens, product information, browsing and the basket compete for attention. The central task is making the progression from discovery to order follow-up understandable and continuous.

### The approach
The portfolio records a product catalog, basket and order-status experience. We describe those components without asserting an unverified payment gateway, live inventory, promotion engine or availability on both mobile platforms.

### Suggested design rationale
1. Prioritize product discovery and details before the basket.
2. Keep basket actions connected to browsing choices.
3. Make the order-follow-up step recognizable.

### Existing recorded scope
- Product browsing
- Cart management
- Order tracking

## سجل الأدلة والقيود

- سجل المشروع في `src/data/projects.js` (project-05): يثبت أن **وصف العمل مسجل**، ولا يكفي منفردًا لإثبات أن كل وظيفة منشورة أو عاملة.
- [صورة العرض الحالية](../../../assets/works/project_5.webp): دليل بصري على مادة العرض، لا على النتائج والأرقام أو عمل الخادم.
- مراجع المصدر القديمة المسجلة: `main:js/portfolio.js`، `main:/assets/works/project_5.webp`. **المرجع `main:js/portfolio.js` غير موجود في HEAD الحالي**، لذا ينبغي الحصول على النسخة التاريخية إن لزم إثبات تفاصيله.

## أسئلة المراجعة قبل النشر
- [ ] هل التطبيق يعمل على Android وiOS أم أحدهما فقط؟
- [ ] كيف تتم عملية الدفع والطلب، وهل يوجد مخزون آني؟
- [ ] هل الواجهة المعروضة من التطبيق المنشور أم نموذج تصميم؟
- [ ] هل الوصف يطابق مساهمة وصل تك وتاريخ نطاق العمل؟
- [ ] هل المادة البصرية مرخصة للعرض العام؟
- [ ] هل الإصدار المعروض منشور أم تجربة/نموذج؟

**قرار الاعتماد:** النص مسودة ذات أساس في السجل الموجود؛ لا تُحوَّل قرارات التصميم المقترحة أو النتائج إلى حقائق منشورة دون مراجعتك.
