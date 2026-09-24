import { brand } from "./brand.js";
import { defaultLocale, locales } from "./locales.js";

export const site = Object.freeze({
  origin: "https://www.wasl-tech.com",
  brand,
  locale: locales[defaultLocale],
  market: Object.freeze({ ar: "اليمن + الخليج", en: "Yemen + Gulf" }),
  contact: Object.freeze({
    phoneDisplay: "+967 775 377 979",
    phoneUri: "+967775377979",
    whatsapp: "https://wa.me/967775377979",
    email: "info@wasl-tech.com",
    instagram: Object.freeze({
      handle: "@wasltech.yem",
      url: "https://www.instagram.com/wasltech.yem"
    }),
    social: Object.freeze({
      facebook: "https://www.facebook.com/share/1DtjBgZgad/?mibextid=qi2Omg",
      x: "https://x.com/50lxt",
      instagram: "https://www.instagram.com/wasltech.yem",
      telegram: "https://t.me/wasltechyem",
      tiktok: "https://www.tiktok.com/@wasltech.yem"
    }),
    domain: "www.wasl-tech.com"
  })
});
