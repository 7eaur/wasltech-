import { brand } from "./brand.js";
import { defaultLocale, locales } from "./locales.js";

const social = Object.freeze({
  facebook: "https://www.facebook.com/share/1DtjBgZgad/?mibextid=qi2Omg",
  x: "https://x.com/50lxt",
  instagram: "https://www.instagram.com/wasltech.yem",
  telegram: "https://t.me/wasltechyem",
  tiktok: "https://www.tiktok.com/@wasltech.yem"
});

export const site = Object.freeze({
  origin: "https://www.wasl-tech.com",
  brand,
  locale: locales[defaultLocale],
  market: Object.freeze({ ar: "اليمن + الخليج", en: "Yemen + Gulf" }),
  entity: Object.freeze({
    displayName: "وصل تك | Wasl Tech",
    description: "Wasl Tech (وصل تك) is a digital solutions team serving projects in Yemen and the Gulf through wasl-tech.com, with website, mobile app, e-commerce, custom software, technical solutions, company profile, brand identity, and digital marketing services.",
    disambiguatingDescription: "Wasl Tech (وصل تك) at wasl-tech.com — digital products, systems, brand, and marketing services for projects in Yemen and the Gulf.",
    sameAs: Object.freeze([
      social.x,
      social.instagram,
      social.telegram,
      social.tiktok
    ])
  }),
  contact: Object.freeze({
    phoneDisplay: "+967 775 377 979",
    phoneUri: "+967775377979",
    whatsapp: "https://wa.me/967775377979",
    email: "info@wasl-tech.com",
    instagram: Object.freeze({
      handle: "@wasltech.yem",
      url: social.instagram
    }),
    social,
    domain: "www.wasl-tech.com"
  })
});
