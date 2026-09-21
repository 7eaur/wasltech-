import { site } from "../config/site.js";
import { absoluteUrl } from "../config/seo.js";

export function organizationSchema() {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand.name.en,
    alternateName: site.brand.name.ar,
    url: site.origin,
    logo: absoluteUrl(site.brand.assets.logo),
    email: site.contact.email,
    telephone: site.contact.phoneUri,
    sameAs: Object.freeze([site.contact.instagram.url])
  });
}

export function websiteSchema(locale = "ar") {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand.name[locale],
    alternateName: site.brand.name[locale === "ar" ? "en" : "ar"],
    url: site.origin,
    inLanguage: locale
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
      name: site.brand.name[locale],
      url: site.origin
    }),
    image: image ? absoluteUrl(image) : undefined
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
