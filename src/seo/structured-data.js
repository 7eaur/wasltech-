import { site } from "../config/site.js";
import { absoluteUrl } from "../config/seo.js";

export const organizationEntityId = absoluteUrl("/#organization");
export const websiteEntityId = absoluteUrl("/#website");

const organizationReference = () => Object.freeze({ "@id": organizationEntityId });
const websiteReference = () => Object.freeze({ "@id": websiteEntityId });

export function organizationSchema() {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationEntityId,
    name: site.brand.name.en,
    alternateName: site.brand.name.ar,
    url: site.origin,
    logo: absoluteUrl(site.brand.assets.logo),
    email: site.contact.email,
    telephone: site.contact.phoneUri,
    areaServed: Object.freeze(["Yemen", "Gulf region"]),
    sameAs: Object.freeze(Object.values(site.contact.social)),
    contactPoint: Object.freeze({
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.contact.email,
      telephone: site.contact.phoneUri,
      areaServed: Object.freeze(["Yemen", "Gulf region"]),
      availableLanguage: Object.freeze(["ar", "en"])
    })
  });
}

export function websiteSchema() {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteEntityId,
    name: site.brand.name.en,
    alternateName: site.brand.name.ar,
    url: site.origin,
    inLanguage: Object.freeze(["ar", "en"]),
    publisher: organizationReference()
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
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: locale,
    provider: organizationReference(),
    isPartOf: websiteReference(),
    areaServed: Object.freeze(["Yemen", "Gulf region"])
  });
}

export function creativeWorkSchema({ locale = "ar", name, description, path, image }) {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(path)}#creative-work`,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: locale,
    creator: organizationReference(),
    isPartOf: websiteReference(),
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
  updatedAt,
  relatedServices = []
}) {
  return Object.freeze({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
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
      "@id": organizationEntityId,
      name: author || site.brand.name[locale],
      url: site.origin
    }),
    publisher: organizationReference(),
    isPartOf: websiteReference(),
    about: relatedServices.length ? Object.freeze(
      relatedServices.map((service) => Object.freeze({
        "@type": "Service",
        "@id": `${absoluteUrl(service.path)}#service`,
        name: service.name,
        url: absoluteUrl(service.path)
      }))
    ) : undefined
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
    "@id": `${absoluteUrl(path)}#job`,
    title,
    description,
    url: absoluteUrl(path),
    datePosted: publishedAt || undefined,
    employmentType: employmentType || undefined,
    inLanguage: locale,
    hiringOrganization: organizationReference(),
    isPartOf: websiteReference(),
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
