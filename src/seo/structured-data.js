import { site } from "../config/site.js";
import { absoluteUrl } from "../config/seo.js";

const ORGANIZATION_ID = `${site.origin}/#organization`;

export function organizationSchema() {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: site.brand.name.en,
    alternateName: site.brand.name.ar,
    url: site.origin,
    logo: absoluteUrl(site.brand.assets.logo),
    email: site.contact.email,
    telephone: site.contact.phoneUri,
    contactPoint: Object.freeze({
      "@type": "ContactPoint",
      telephone: site.contact.phoneUri,
      email: site.contact.email,
      contactType: "customer service",
      availableLanguage: Object.freeze(["ar", "en"])
    }),
    sameAs: Object.freeze([...new Set(Object.values(site.contact.social))])
  });
}

export function websiteSchema(locale = "ar") {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand.name[locale],
    alternateName: site.brand.name[locale === "ar" ? "en" : "ar"],
    url: site.origin,
    inLanguage: locale,
    publisher: Object.freeze({ "@id": ORGANIZATION_ID })
  });
}

export function breadcrumbSchema(items = []) {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: Object.freeze(
      items.map((item, index) => Object.freeze({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path)
      }))
    )
  });
}

export function serviceSchema({ locale = "ar", name, description, path }) {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: Object.freeze({
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: site.brand.name[locale],
      url: site.origin
    }),
    areaServed: Object.freeze(["Yemen", "Gulf region"])
  });
}

export function creativeWorkSchema({ locale = "ar", name, description, path, image }) {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: locale,
    creator: Object.freeze({
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: site.brand.name[locale],
      url: site.origin
    }),
    image: image ? absoluteUrl(image) : undefined
  });
}

export function articleSchema({
  locale = "ar",
  headline,
  description,
  path,
  image,
  author,
  publishedAt,
  updatedAt
}) {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: locale,
    image: image ? absoluteUrl(image) : undefined,
    datePublished: publishedAt || undefined,
    dateModified: updatedAt || publishedAt || undefined,
    author: Object.freeze({
      "@type": "Organization",
      name: author || site.brand.name[locale],
      url: site.origin
    }),
    publisher: Object.freeze({
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: site.brand.name[locale],
      url: site.origin,
      logo: Object.freeze({
        "@type": "ImageObject",
        url: absoluteUrl(site.brand.assets.logo)
      })
    })
  });
}

export function jobPostingSchema({
  locale = "ar",
  title,
  description,
  path,
  publishedAt,
  employmentType,
  location
}) {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    url: absoluteUrl(path),
    datePosted: publishedAt || undefined,
    employmentType: employmentType || undefined,
    inLanguage: locale,
    hiringOrganization: Object.freeze({
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: site.brand.name[locale],
      sameAs: site.origin,
      logo: absoluteUrl(site.brand.assets.logo)
    }),
    jobLocation: location ? Object.freeze({
      "@type": "Place",
      address: Object.freeze({
        "@type": "PostalAddress",
        addressLocality: location
      })
    }) : undefined
  });
}

export function faqPageSchema(items = []) {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Object.freeze(
      items.map((item) => Object.freeze({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: Object.freeze({
          "@type": "Answer",
          text: item.answer
        })
      }))
    )
  });
}

export function serializeStructuredData(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
