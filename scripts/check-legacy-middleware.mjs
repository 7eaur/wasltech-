import middleware, { config } from "../middleware.js";
import { services } from "../src/data/services.js";
import { routes } from "../src/config/routes.js";

const base = "https://preview.example";
const failures = [];
let count = 0;

function expect(condition, message) {
  count++;
  if (!condition) failures.push(message);
}
async function test(path, status, destination = null, method = "GET") {
  const response = await middleware(new Request(base + path, { method }));
  expect(Boolean(response), path + ": middleware returned no response");
  if (!response) return;
  expect(response.status === status, method + " " + path + ": HTTP " + response.status + " expected " + status);
  const location = response.headers.get("location");
  if (destination) {
    expect(location === base + destination, method + " " + path + ": unexpected Location " + location);
  } else {
    expect(!location, method + " " + path + ": undesired Location");
  }
}
const htmlAliases = [
  ["/index.html",routes.home("ar")],
  ["/en/index.html",routes.home("en")],
  ["/about.html",routes.about("ar")],
  ["/contact.html",routes.contact("ar")],
  ["/services.html",routes.services("ar")],
  ["/portfolio.html",routes.portfolio("ar")],
  ["/process.html",routes.process("ar")],
  ["/faq.html",routes.faq("ar")],
  ["/blog.html",routes.insights("ar")]
];
for (const [source,target] of htmlAliases) {
  await test(source,308,target);
  await test(source,308,target,"HEAD");
}
for (const locale of ["ar","en"]) {
  const prefix=locale==="en"?"/en":"";
  for (const suffix of ["/service-web","/service-web/","/service-web.html"]) {
    for (const service of services) {
      for (const id of new Set([service.slug,service.id])) {
        await test(prefix+suffix+"?id="+id,308,routes.service(service.slug,locale));
      }
    }
    for (const query of ["","?id=invalid","?id=web&id=app","?id=Web","?id=%2e%2e%2f"]) {
      await test(prefix+suffix+query,404);
    }
  }
}
await test("/service-web?id=web",308,routes.service("web-development","ar"),"HEAD");
await test("/service-web?id=web",405,null,"POST");

const allowed = new Set(htmlAliases.map(([src])=>src).concat(
  ["/service-web","/service-web/","/service-web.html","/en/service-web","/en/service-web/","/en/service-web.html"]
));
for (const p of allowed) {
  expect(config.matcher.includes(p), "Missing middleware matcher: "+p);
}
const ignored = await middleware(new Request(base+"/services/web-development/"));
expect(ignored === undefined, "Middleware must not touch canonical services or other pages");
expect(config.matcher.length===allowed.size+2 && config.matcher.includes("/:path*") && config.matcher.includes("/seo-middleware-probe.html"),"Unexpected global matcher diagnostic configuration");
if (failures.length) {
  console.error("LEGACY MIDDLEWARE AUDIT: FAILED");
  failures.forEach(x=>console.error("- "+x));
  process.exit(1);
}
console.log("LEGACY MIDDLEWARE AUDIT: PASSED ("+count+" assertions, "+services.length+" services, 2 locales, 3 path variants and 9 HTML aliases).");
