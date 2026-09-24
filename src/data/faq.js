/**
 * Wasl Tech VNext — Canonical general FAQ data.
 * Source facts: visible FAQ content and matching FAQPage schema in legacy faq.html.
 * Arabic and English wording follows the 2026-09-24 final marketing rewrite baseline without packages.
 */

export const faqGroups = Object.freeze([
  {
    "id": "start",
    "order": 1,
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "قبل بدء المشروع"
      },
      "en": {
        "title": "Before starting"
      }
    },
    "items": [
      {
        "id": "start-1",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
        },
        "content": {
          "ar": {
            "question": "لدي فكرة، لكن لا أعرف أي خدمة أحتاج. ماذا أفعل؟",
            "answer": "لا تحتاج إلى اختيار الخدمة من البداية. أخبرنا ما الذي تريد تحقيقه أو المشكلة التي تريد حلها، وسنحدد معك هل تحتاج موقعًا أو تطبيقًا أو متجرًا أو نظامًا أو مزيجًا من ذلك."
          },
          "en": {
            "question": "I have an idea, but I do not know which service I need. What should I do?",
            "answer": "You do not need to choose the service first. Tell us what you want to achieve or the problem you want to solve, and we will help determine whether the right path is a website, app, store, system, or a combination."
          }
        }
      },
      {
        "id": "start-2",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
        },
        "content": {
          "ar": {
            "question": "هل تعملون مع مشروع قائم؟",
            "answer": "نعم. نراجع الموجود، نحدد ما يستحق الاحتفاظ به، ثم نقرر هل الأفضل تحسينه أو ربطه أو إعادة بناء جزء منه."
          },
          "en": {
            "question": "Do you work with existing projects?",
            "answer": "Yes. We review what already exists, identify what is worth keeping, then decide whether the better path is improvement, integration, or rebuilding a specific part."
          }
        }
      },
      {
        "id": "start-3",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
        },
        "content": {
          "ar": {
            "question": "هل يمكن تنفيذ المشروع على مراحل؟",
            "answer": "نعم، وغالبًا يكون ذلك أفضل عندما يحتوي المشروع على أكثر من أولوية. نبدأ بالجزء الذي يحقق القيمة الأسرع، ثم نبني المرحلة التالية على ما تعلمناه."
          },
          "en": {
            "question": "Can the project be delivered in stages?",
            "answer": "Yes, and that is often the better approach when a project has several priorities. We start with the part that creates value first, then shape the next stage around what we learn."
          }
        }
      }
    ]
  },
  {
    "id": "product",
    "order": 2,
    "localeStatus": {
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "المواقع والتطبيقات والمتاجر"
      },
      "en": {
        "title": "Websites, apps & e-commerce"
      }
    },
    "items": [
      {
        "id": "product-1",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
        },
        "content": {
          "ar": {
            "question": "هل الموقع أو المتجر يعمل على الجوال؟",
            "answer": "نعم. نبدأ بتجربة متجاوبة من أول التصميم، ونراجعها على الجوال والتابلت والكمبيوتر."
          },
          "en": {
            "question": "Will the website or store work on mobile?",
            "answer": "Yes. Responsive behavior is considered from the design stage and reviewed across mobile, tablet, and desktop."
          }
        }
      },
      {
        "id": "product-2",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
        },
        "content": {
          "ar": {
            "question": "هل يمكن ربط الحل بنظام موجود؟",
            "answer": "نعم إذا كانت البنية ووسائل الوصول تسمح بذلك. نراجع النظام الحالي أولًا، ثم نحدد طريقة الربط التي لا تزيد التعقيد على فريقك."
          },
          "en": {
            "question": "Can the solution connect to an existing system?",
            "answer": "Yes, when the current architecture and access methods allow it. We review the existing system first, then define an integration approach that does not add unnecessary complexity for the team."
          }
        }
      },
      {
        "id": "product-3",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
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
          "ar": "ready",
          "en": "ready"
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
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "الهوية والبروفايلات والتسويق"
      },
      "en": {
        "title": "Brand, profiles & marketing"
      }
    },
    "items": [
      {
        "id": "presence-1",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
        },
        "content": {
          "ar": {
            "question": "هل تقدمون الهوية أو البروفايل وحدهما؟",
            "answer": "نعم. يمكن تنفيذ الهوية أو البروفايل أو خطة المحتوى كمشروع مستقل، أو ربطها بموقع ومتجر وحملة أكبر."
          },
          "en": {
            "question": "Can you deliver brand identity or a company profile as a standalone project?",
            "answer": "Yes. Identity, company profiles, or a content plan can be delivered independently or connected to a larger website, store, or campaign."
          }
        }
      },
      {
        "id": "presence-2",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
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
          "ar": "ready",
          "en": "ready"
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
      "ar": "ready",
      "en": "ready"
    },
    "content": {
      "ar": {
        "title": "التنفيذ وطريقة العمل"
      },
      "en": {
        "title": "Delivery & working process"
      }
    },
    "items": [
      {
        "id": "workflow-1",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
        },
        "content": {
          "ar": {
            "question": "كم تستغرق المشاريع؟",
            "answer": "المدة تعتمد على نوع الحل، حجمه، جاهزية المحتوى، وسرعة القرارات والمراجعات. نحدد المدة بعد تثبيت النطاق بدل إعطاء رقم عام لا يناسب كل مشروع."
          },
          "en": {
            "question": "How long do projects take?",
            "answer": "Timing depends on the solution type, scope, content readiness, and review speed. We define the timeline after the scope is clear instead of giving one generic number for every project."
          }
        }
      },
      {
        "id": "workflow-2",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
        },
        "content": {
          "ar": {
            "question": "ماذا يحدث بعد أن أتواصل؟",
            "answer": "نفهم الهدف والوضع الحالي، نسأل عن المعلومات التي تنقصنا، ثم نوضح المسار والنطاق والخطوة التالية. لن نبدأ بالحل قبل أن نفهم المشكلة."
          },
          "en": {
            "question": "What happens after I contact you?",
            "answer": "We understand the goal and current situation, ask for the missing context, then explain the path, scope, and next step. We do not start with a solution before understanding the problem."
          }
        }
      },
      {
        "id": "workflow-3",
        "localeStatus": {
          "ar": "ready",
          "en": "ready"
        },
        "content": {
          "ar": {
            "question": "ماذا لو ظهرت فكرة جديدة أثناء التنفيذ؟",
            "answer": "نراجع فائدتها وتأثيرها على النطاق، ثم نقرر هل تدخل في المرحلة الحالية أو تذهب إلى مرحلة لاحقة. هكذا نحمي الأولويات ولا نترك الأفكار الجيدة تضيع."
          },
          "en": {
            "question": "What if a new idea appears during implementation?",
            "answer": "We review its value and impact on scope, then decide whether it belongs in the current stage or a later one. This protects priorities without losing useful ideas."
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
