export const defaultLocale = "ar";

export const locales = Object.freeze({
  ar: Object.freeze({
    code: "ar",
    lang: "ar",
    dir: "rtl",
    prefix: "",
    label: "العربية"
  }),
  en: Object.freeze({
    code: "en",
    lang: "en",
    dir: "ltr",
    prefix: "/en",
    label: "English"
  })
});

export const supportedLocales = Object.freeze(Object.keys(locales));
