/** Evidence-safe commercial search-intent differentiation. 
 * The claims below are decision criteria, NOT assertions about project results.
 * Aligned to the eight services in src/data/services.js and used by service-detail.js.
 */
export const serviceChoices = Object.freeze({
  "web": Object.freeze({
    alternativeServiceId: "store",
    ar: Object.freeze({"heading":"موقع تعريفي أم متجر إلكتروني؟","guidance":"إذا كان هدفك التعريف بالشركة وعرض الخدمات واستقبال الاستفسارات، فالموقع التعريفي أقرب لاحتياجك. أما إذا كنت تحتاج سلة وطلبات ودفعًا أو تنظيم شحن، ففكّر في متجر إلكتروني.","link":"اطّلع على خدمة المتاجر الإلكترونية"}),
    en: Object.freeze({"heading":"Business website or online store?","guidance":"Choose a business website to explain services, present work, and receive enquiries. If customers must manage carts, place orders or pay online, consider e-commerce instead.","link":"Explore e-commerce development"})
  }),
  "app": Object.freeze({
    alternativeServiceId: "web",
    ar: Object.freeze({"heading":"تطبيق جوال أم موقع إلكتروني؟","guidance":"عندما يحتاج المستخدم إلى العودة المتكررة للخدمة، أو إشعارات ووظائف مخصصة للجوال، فقد يناسبه التطبيق. إذا كان الهدف الأساسي التعريف بالخدمة والوصول إليها عبر رابط، فابدأ بدراسة الموقع.","link":"قارن مع خدمة تطوير المواقع"}),
    en: Object.freeze({"heading":"Mobile app or website?","guidance":"An app may fit recurring user tasks, notifications and mobile-specific experiences. If people mainly need information and an easy shareable link, first assess a website.","link":"Compare with website development"})
  }),
  "store": Object.freeze({
    alternativeServiceId: "web",
    ar: Object.freeze({"heading":"هل تحتاج متجرًا أم موقع شركة؟","guidance":"المتجر مناسب عندما تريد إدارة المنتجات والمخزون والطلبات وخطوة شراء واضحة. أما إذا كنت تعرض خدماتك وتستقبل طلبات التواصل فقط، فقد يكون موقع الشركة أبسط وأنسب.","link":"تعرف على تصميم مواقع الشركات"}),
    en: Object.freeze({"heading":"Do you need a store or a company website?","guidance":"An online store supports catalogs, carts, orders and the buying journey. If you only present services and receive enquiries, a business website may be a better scope.","link":"Explore business website design"})
  }),
  "programming": Object.freeze({
    alternativeServiceId: "tech",
    ar: Object.freeze({"heading":"نظام مخصص أم ربط حلول قائمة؟","guidance":"إذا كانت المشكلة تتطلب صلاحيات مستخدمين وبيانات وتدفقات عمل لا توفرها الأدوات الحالية، فالنظام المخصص خيار يستحق الدراسة. إن كانت الأدوات موجودة لكن لا تتبادل البيانات، فقد يكفي الربط التقني.","link":"اطّلع على خدمات التكامل والحلول التقنية"}),
    en: Object.freeze({"heading":"Custom system or integration?","guidance":"A custom system can fit workflows, user permissions and data needs that existing tools cannot cover. If your tools already work separately but need to exchange information, integration may be sufficient.","link":"Explore technical integration services"})
  }),
  "tech": Object.freeze({
    alternativeServiceId: "programming",
    ar: Object.freeze({"heading":"ربط الأنظمة أم بناء نظام جديد؟","guidance":"ابدأ بفحص الأدوات الموجودة وواجهات الربط قبل إعادة بنائها. إذا أمكن ربطها لتقليل العمل المتكرر، فقد يكون التكامل هو الحل. أما احتياجات التشغيل الجديدة تمامًا فقد تستلزم نظامًا مخصصًا.","link":"تعرف على تطوير الأنظمة المخصصة"}),
    en: Object.freeze({"heading":"Integrate existing tools or build new software?","guidance":"Review existing systems and available APIs before replacing them. Integrations can connect information and reduce repeated work, while a new workflow with its own roles and data may need custom software.","link":"Explore custom systems"})
  }),
  "profiles": Object.freeze({
    alternativeServiceId: "design",
    ar: Object.freeze({"heading":"ملف تعريفي أم هوية بصرية؟","guidance":"البروفايل يرتب قصة الشركة وخدماتها وأعمالها في مستند قابل للمشاركة. أما الهوية البصرية فتحدد الشعار والألوان والخطوط وطريقة استخدامها؛ وقد تحتاج الشركة الاثنين لكن لكل واحد هدف مستقل.","link":"تعرف على تصميم الهوية البصرية"}),
    en: Object.freeze({"heading":"Company profile or brand identity?","guidance":"A company profile organizes your services, background and work into a shareable document. Brand identity defines the logo, colors, typography and their use. They serve distinct purposes.","link":"Explore brand identity design"})
  }),
  "design": Object.freeze({
    alternativeServiceId: "profiles",
    ar: Object.freeze({"heading":"هوية بصرية أم بروفايل شركة؟","guidance":"إذا كان المطلوب توحيد مظهر العلامة عبر القنوات، فابدأ بنظام الهوية. وإذا كانت الهوية جاهزة وتحتاج مستندًا يقدم الشركة للعملاء أو الجهات، فالبروفايل هو المخرج الأقرب.","link":"اطّلع على خدمة البروفايلات"}),
    en: Object.freeze({"heading":"Brand identity or company profile?","guidance":"Start with brand identity when you need a consistent visual system across channels. If your identity is ready but you need a document presenting your business, a company profile is the closer fit.","link":"Explore company profiles"})
  }),
  "marketing": Object.freeze({
    alternativeServiceId: "web",
    ar: Object.freeze({"heading":"هل تحتاج تسويقًا أم تحسين موقعك أولًا؟","guidance":"قبل إطلاق حملة، تأكد أن الصفحة المقصودة تعرض الخدمة بوضوح وتسهل التواصل. قد تحتاج تحسين تجربة الموقع أو صفحة هبوط قبل زيادة الزيارات المدفوعة، بحسب جاهزية المشروع.","link":"اطّلع على تصميم المواقع وصفحات الهبوط"}),
    en: Object.freeze({"heading":"Marketing campaign or website improvement first?","guidance":"Before launching a campaign, check that the landing page clearly explains the offer and makes contact easy. Improving the website or landing page may be the right first step.","link":"Explore websites and landing pages"})
  })
});

export function getServiceChoice(serviceId, locale = "ar") {
  const item = serviceChoices[serviceId];
  return item ? Object.freeze({ alternativeServiceId: item.alternativeServiceId, ...item[locale] }) : null;
}
