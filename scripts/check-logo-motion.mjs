import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { Script } from "node:vm";

const root = process.cwd();
const source = await readFile(resolve(root, "prototypes/wasl-logo-motion.html"), "utf8");
const officialSvg = await readFile(resolve(root, "assets/brand/wasl-tech-horizontal.svg"), "utf8");
const preview = await readFile(resolve(root, "dist/__logo-motion/index.html"), "utf8");
const choices = ["sequence", "sweep", "converge", "outline", "quiet"];
const fail = (message) => { throw new Error("WASL LOGO MOTION: " + message); };

if (preview !== source) fail("built preview differs from approved source");
if (!source.includes('name="robots" content="noindex,nofollow"')) fail("preview indexing is not disabled");
if (!source.includes('src="/assets/brand/wasl-tech-horizontal.svg"')) fail("official SVG is not used");
if ((officialSvg.match(/<path\b/g) ?? []).length !== 3) fail("official SVG path structure changed");
if ((officialSvg.match(/<g\b/g) ?? []).length !== 1) fail("official symbol group structure changed");
if (!source.includes("sourceSvg.cloneNode(true)") ||
    !source.includes("const text = svg.querySelector('svg > path')") ||
    !source.includes("paths.length !== 2") ||
    !source.includes("text.classList.add('wordmark')")) {
  fail("full official symbol and independent wordmark are not preserved");
}
const cardMotions = [...source.matchAll(/<article class="card[^"]*" data-card="([^"]+)"/g)]
  .map((match) => match[1]);
if (JSON.stringify(cardMotions) !== JSON.stringify(choices)) {
  fail("expected five distinct cards in the agreed order: " + JSON.stringify(cardMotions));
}
for (const choice of choices) {
  if (!source.includes('data-motion="' + choice + '"') ||
      !source.includes('data-preview="' + choice + '"') ||
      !source.includes('data-replay="' + choice + '"')) {
    fail("missing replay/preview controls for " + choice);
  }
}
for (const img of source.match(/<img\b[^>]*>/g) ?? []) {
  if (!/\balt="[^"]*"/.test(img) || !/\bwidth="\d+"/.test(img) || !/\bheight="\d+"/.test(img)) {
    fail("image lacking a11y/intrinsic dimensions");
  }
}
for (const button of source.match(/<button\b[^>]*>/g) ?? []) {
  if (!/\btype="button"/.test(button)) fail("button lacks explicit type");
}
if (!source.includes("prefers-reduced-motion:reduce") || !source.includes("reduceMotion.matches")) {
  fail("reduced-motion safety missing");
}
if (!source.includes("The native logo image remains visible if the vector cannot be fetched.")) {
  fail("error fallback missing");
}
if (!source.includes('data-demo-close') || !source.includes("event.key === 'Escape'")) {
  fail("dismissible first-entry simulation missing");
}
const scripts = [...source.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (scripts.length !== 1) fail("unexpected inline script count");
new Script(scripts[0][1], { filename: "wasl-logo-motion.js" });
const html = await stat(resolve(root, "dist/__logo-motion/index.html"));
if (!html.isFile()) fail("preview build output missing");
console.log("WASL LOGO MOTION: PASSED — five animations, official SVG, standalone route, semantics, syntax.");
