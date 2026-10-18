import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

/**
 * Product decision: NO analytics consent banner or preferences button.
 * Keep the existing published GA4 default-denied configuration unchanged.
 * This test does NOT claim cookieless GA4 is legally exempt from consent.
 */
const script = await readFile(new URL("../src/client/analytics.js", import.meta.url), "utf8");
const build = await readFile(new URL("../scripts/build.mjs", import.meta.url), "utf8");
const { pages } = await import("../src/data/pages.js");
const failures = [];
const check = (value, message) => { if (!value) failures.push(message); };

function simulate(hostname) {
  const head = { children: [], append(child) { this.children.push(child); } };
  const body = { children: [], append(child) { this.children.push(child); } };
  const document = {
    currentScript: { dataset: { analyticsHost: "wasl-tech.com", measurementId: "G-WVH08BTS6C" } },
    head,
    body,
    createElement(tag) { return { tag, src: null, async: false }; },
    querySelector() { return null; }
  };
  const window = {};
  runInNewContext(script, {
    document, window, location: { hostname }, Date, encodeURIComponent
  });
  return { head, body, window };
}

const production = simulate("wasl-tech.com");
check(production.body.children.length === 0, "Analytics must not inject banner, modal or other customer UI");
check(production.head.children.every(node => node.tag === "script"), "Analytics must not add visible DOM elements");
check(!/createElement\(["'](?:button|aside|dialog)["']\)/.test(script), "Analytics UI is forbidden");
check(!/localStorage|previewAnalyticsConsent|analytics-consent/.test(script), "No hidden consent prompts or storage controls");
const dataLayer = production.window.dataLayer ?? [];
const consent = dataLayer.find(args => args[0] === "consent" && args[1] === "default");
check(consent?.[2]?.analytics_storage === "denied", "Baseline GA4 analytics storage must stay denied");
check(consent?.[2]?.ad_storage === "denied", "Ads storage must stay denied");
check(!dataLayer.some(args => args[0] === "consent" && args[1] === "update" && args[2]?.analytics_storage === "granted"),
  "Never silently upgrade consent to granted");
const preview = simulate("preview.vercel.app");
check(preview.body.children.length === 0 && preview.head.children.length === 0,
  "Preview must have neither GA4 remote load nor banner");
check(!build.includes("src/styles/analytics-consent.css"), "Consent CSS must not ship in the shared stylesheet");
const privacy = pages.find(page => page.id === "privacy");
check(Boolean(privacy), "Privacy policy must exist");
for (const locale of ["ar", "en"]) {
  const section = privacy?.content?.[locale]?.sections?.find(section => section.id === "tracking");
  check(Boolean(section?.support), "Missing privacy tracking section for " + locale);
  check(!/إعدادات التحليلات|Analytics preferences|السماح بالتحليلات/.test(section?.support ?? ""),
    "Privacy policy must not advertise nonexisting consent buttons in " + locale);
}

if (failures.length) {
  console.error("NO CUSTOMER ANALYTICS UI: FAILED");
  for (const error of failures) console.error("- " + error);
  process.exit(1);
}
console.log("NO CUSTOMER ANALYTICS UI: PASSED (no banner, no preferences button, default-denied GA4)");
