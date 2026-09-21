/**
 * Wasl Tech VNext — Canonical general FAQ data.
 * Source facts: visible FAQ content and matching FAQPage schema in legacy faq.html.
 * Arabic and English wording are VNext editorial rewrites and remain draft until final review.
 */

export const faqGroups = Object.freeze([
  {
    "id": "start",
    "order": 1,
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "قبل بدء المشروع"
      },
      "en": { "title": "Before starting" }
    },
    "items": [
      {
        "id": "start-1",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "عندي فكرة، لكن ما أعرف أي خدمة أحتاج. من أين أبدأ؟",
            "answer": "ابدأ بالهدف أو المشكلة التي تريد حلها. نحن نرتب معك الاحتياج أولًا ثم نحدد هل الأنسب موقعًا أو تطبيقًا أو متجرًا أو نظامًا أو خدمة أخرى."
          },
          "en": {
            "question": "I have an idea, but I do not know which service I need. Where do I start?",
            "answer": "Start with the goal or the problem you want to solve. We help organize the need first, then determine whether the right path is a website, app, store, system, or another service."
          }
        }
      },
      {
        "id": "start-2",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "هل لازم نبدأ المشروع من الصفر؟",
            "answer": "لا. إذا كان لديك مشروع قائم نراجع الموجود أولًا، ثم نحدد ما يستحق الاحتفاظ به وما يحتاج تحسينًا أو إعادة بناء."
          },
          "en": {
            "question": "Do we have to start the project from scratch?",
            "answer": "No. If you already have a project, we review what exists first and decide what is worth keeping, improving, integrating, or rebuilding."
          }
        }
      },
      {
        "id": "start-3",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "هل يمكن تنفيذ المشروع على مراحل بدل تنفيذه كاملًا مرة واحدة؟",
            "answer": "نعم. يمكن ترتيب المشروع حسب الأولوية والبدء بالجزء الأكثر أهمية، ثم التوسع على مراحل عندما يكون ذلك أنسب للنطاق."
          },
          "en": {
            "question": "Can the project be delivered in phases instead of all at once?",
            "answer": "Yes. The work can be prioritized so the most important part is built first, then expanded in stages when that fits the project better."
          }
        }
      }
    ]
  },
  {
    "id": "product",
    "order": 2,
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "المواقع والتطبيقات والمتاجر"
      },
      "en": { "title": "Websites, apps & e-commerce" }
    },
    "items": [
      {
        "id": "product-1",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "هل الموقع سيعمل بشكل جيد على الجوال؟",
            "answer": "نعم. نبني الواجهة بصورة متجاوبة من البداية ونراجع التجربة على الجوال والتابلت والكمبيوتر."
          },
          "en": {
            "question": "Will the website work well on mobile?",
            "answer": "Yes. Responsive behavior is designed from the beginning and reviewed across mobile, tablet, and desktop."
          }
        }
      },
      {
        "id": "product-2",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "هل أستطيع إدارة المحتوى أو البيانات بنفسي؟",
            "answer": "إذا كان المشروع يحتاج تحديثًا مستمرًا يمكن إضافة لوحة تحكم أو نظام إدارة يناسب المحتوى والعمليات المطلوبة."
          },
          "en": {
            "question": "Can I manage the content or data myself?",
            "answer": "If the project needs regular updates, we can include an admin dashboard or content management experience suited to the content and workflows involved."
          }
        }
      },
      {
        "id": "product-3",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "هل يمكن ربط الموقع أو التطبيق بنظام موجود عندي؟",
            "answer": "نعم إذا كانت البنية تسمح بذلك. نراجع النظام الحالي ووسائل الربط المتاحة، ثم نحدد طريقة التكامل المناسبة."
          },
          "en": {
            "question": "Can the website or app connect to a system I already use?",
            "answer": "Yes, when the current architecture supports it. We review the existing system and available integration methods, then define the right connection approach."
          }
        }
      },
      {
        "id": "product-4",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "هل المتجر يدعم الدفع والشحن؟",
            "answer": "يمكن تجهيز خيارات الدفع والشحن أو التوصيل وفق المزوّدات المتاحة وطريقة تشغيل المتجر وسوقه."
          },
          "en": {
            "question": "Can an online store support payments and delivery?",
            "answer": "Payment and shipping or delivery options can be configured according to the providers available in the target market and the way the store operates."
          }
        }
      }
    ]
  },
  {
    "id": "presence",
    "order": 3,
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "الهوية والبروفايلات والتسويق"
      },
      "en": { "title": "Brand, profiles & marketing" }
    },
    "items": [
      {
        "id": "presence-1",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "هل أقدر أطلب هوية بصرية فقط بدون موقع أو تطبيق؟",
            "answer": "نعم. الهوية خدمة مستقلة ويمكن تنفيذها وحدها أو ضمن مشروع أوسع حسب ما يحتاجه نشاطك."
          },
          "en": {
            "question": "Can I request brand identity only, without a website or app?",
            "answer": "Yes. Brand identity can be delivered as a standalone project or as part of a wider digital project, depending on what the business needs."
          }
        }
      },
      {
        "id": "presence-2",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "عندي محتوى جاهز للشركة، هل يمكن تحويله إلى بروفايل أفضل؟",
            "answer": "نعم. نراجع المحتوى ونختصر التكرار ونرتبه ثم نبني له إخراجًا بصريًا متناسقًا مع الهوية."
          },
          "en": {
            "question": "We already have company content. Can you turn it into a better company profile?",
            "answer": "Yes. We review the material, remove unnecessary repetition, reorganize the story, and build a visual presentation aligned with the brand."
          }
        }
      },
      {
        "id": "presence-3",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "هل يمكن طلب خطة محتوى فقط بدون إدارة الصفحات؟",
            "answer": "نعم. يمكن أن يكون نطاق العمل خطة ومحاور ورسائل واضحة فقط، أو يمتد إلى الكتابة والتصميم والإدارة حسب احتياج المشروع."
          },
          "en": {
            "question": "Can I request only a content plan without full page management?",
            "answer": "Yes. The scope can be limited to a content plan, messaging, and content pillars, or expanded to writing, design, publishing, and management if needed."
          }
        }
      }
    ]
  },
  {
    "id": "workflow",
    "order": 4,
    "localeStatus": {
      "ar": "draft",
      "en": "draft"
    },
    "content": {
      "ar": {
        "title": "التنفيذ وطريقة العمل"
      },
      "en": { "title": "Delivery & working process" }
    },
    "items": [
      {
        "id": "workflow-1",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "كم يحتاج المشروع من وقت؟",
            "answer": "يعتمد ذلك على نوع المشروع ونطاقه والوظائف المطلوبة. نحدد المدة بعد فهم المتطلبات وترتيب ما سيدخل في التنفيذ."
          },
          "en": {
            "question": "How long does a project take?",
            "answer": "It depends on the project type, scope, and required functionality. We define the timeline after understanding and organizing the work that will be included."
          }
        }
      },
      {
        "id": "workflow-2",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "ماذا يحدث بعد أن أتواصل معكم؟",
            "answer": "نبدأ بفهم الهدف والوضع الحالي وما تريد الوصول إليه، ثم نرتب النطاق والأسئلة المهمة قبل اقتراح الخطوة التالية."
          },
          "en": {
            "question": "What happens after I contact you?",
            "answer": "We start by understanding the goal, current situation, and what you want to achieve, then organize the scope and the important questions before recommending the next step."
          }
        }
      },
      {
        "id": "workflow-3",
        "localeStatus": {
          "ar": "draft",
          "en": "draft"
        },
        "content": {
          "ar": {
            "question": "ماذا لو ظهرت متطلبات جديدة أثناء التنفيذ؟",
            "answer": "نراجعها أولًا ونوضح أثرها على النطاق الحالي. إذا كانت إضافة مفيدة نرتبها ضمن المرحلة المناسبة بدل إدخالها عشوائيًا."
          },
          "en": {
            "question": "What if new requirements appear during the project?",
            "answer": "We review them first and explain how they affect the current scope. If the addition is useful, we place it in the right stage instead of inserting it randomly into ongoing work."
          }
        }
      }
    ]
  }
]);

export const faqs = Object.freeze(
  faqGroups.flatMap((group) =>
    group.items.map((item) => Object.freeze({ ...item, groupId: group.id }))
  )
);

export function getFaqGroup(id) {
  return faqGroups.find((group) => group.id === id) ?? null;
}
