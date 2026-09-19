#!/usr/bin/env python3
"""Dependency-free static quality gate for the Wasl Tech public site."""

from __future__ import annotations

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PAGES = [
    "index.html",
    "services.html",
    "service-web.html",
    "portfolio.html",
    "about.html",
    "process.html",
    "contact.html",
    "faq.html",
    "blog.html",
    "404.html",
]
NOINDEX_PAGES = {"blog.html", "404.html"}
SERVICE_IDS = ["web", "app", "store", "programming", "tech", "profiles", "design", "marketing"]
PUBLIC_RUNTIME_JS = [
    "js/components.js",
    "js/main.js",
    "js/contact-v2.js",
    "js/faq.js",
    "js/portfolio.js",
    "js/service-detail.js",
]
ERRORS: list[str] = []


def fail(scope: str, message: str) -> None:
    ERRORS.append(f"{scope}: {message}")


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.h1 = 0
        self.main = 0
        self.ids: set[str] = set()
        self.images: list[dict[str, str]] = []
        self.local_refs: list[tuple[str, str]] = []
        self.anchors: list[str] = []
        self.stylesheets: list[str] = []
        self.meta: list[dict[str, str]] = []
        self.canonicals: list[str] = []
        self.html_attrs: dict[str, str] = {}

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = {key: value or "" for key, value in attrs}
        if tag == "html":
            self.html_attrs = data
        if tag == "h1":
            self.h1 += 1
        if tag == "main":
            self.main += 1
        if "id" in data:
            self.ids.add(data["id"])
        if tag == "img":
            self.images.append(data)
        if tag == "meta":
            self.meta.append(data)
        if tag == "link":
            rel = set(data.get("rel", "").split())
            href = data.get("href", "")
            if "stylesheet" in rel:
                self.stylesheets.append(href)
            if "canonical" in rel:
                self.canonicals.append(href)
            if href and ({"stylesheet", "icon", "manifest"} & rel):
                self.local_refs.append(("href", href))
        if tag == "script" and data.get("src"):
            self.local_refs.append(("src", data["src"]))
        if tag == "img" and data.get("src"):
            self.local_refs.append(("src", data["src"]))
        if tag == "a" and data.get("href"):
            self.anchors.append(data["href"])
            self.local_refs.append(("href", data["href"]))


def is_external_or_protocol(ref: str) -> bool:
    return (
        not ref
        or ref.startswith(("http://", "https://", "mailto:", "tel:", "data:", "javascript:"))
        or ref.startswith("#")
    )


def resolve_local(ref: str) -> Path:
    path = urlsplit(ref).path
    if path.startswith("/"):
        path = path[1:]
    return ROOT / path


def meta_content(parser: PageParser, name: str) -> str | None:
    for item in parser.meta:
        if item.get("name", "").lower() == name.lower():
            return item.get("content", "")
    return None


for page in PAGES:
    source = (ROOT / page).read_text(encoding="utf-8")
    parser = PageParser()
    parser.feed(source)

    if parser.html_attrs.get("lang") != "ar":
        fail(page, 'html lang must be "ar"')
    if parser.html_attrs.get("dir") != "rtl":
        fail(page, 'html dir must be "rtl"')
    if parser.h1 != 1:
        fail(page, f"expected exactly one h1, found {parser.h1}")
    if parser.main != 1:
        fail(page, f"expected exactly one main landmark, found {parser.main}")

    description = meta_content(parser, "description")
    if not description:
        fail(page, "missing meta description")

    robots = (meta_content(parser, "robots") or "").lower()
    if page in NOINDEX_PAGES:
        if "noindex" not in robots:
            fail(page, "utility/unpublished page must be noindex")
        if parser.canonicals:
            fail(page, "noindex utility page should not advertise a canonical")
    else:
        if "noindex" in robots:
            fail(page, "public indexable page must not be noindex")
        if len(parser.canonicals) != 1:
            fail(page, f"expected one canonical, found {len(parser.canonicals)}")

    if not any(href.endswith("css/icons.css") for href in parser.stylesheets):
        fail(page, "minimal icon stylesheet is not loaded")
    if any("fontawesome/css/all.min.css" in href for href in parser.stylesheets):
        fail(page, "legacy broken Font Awesome bundle is still loaded")
    if any(href.endswith("css/fonts.css") for href in parser.stylesheets):
        fail(page, "Google Fonts @import waterfall is still loaded")
    if not parser.stylesheets or not parser.stylesheets[-1].endswith("css/responsive-normalization.css"):
        fail(page, "responsive-normalization.css must be the last stylesheet")

    for index, image in enumerate(parser.images, start=1):
        if "alt" not in image:
            fail(page, f"image #{index} is missing alt")
        if not image.get("width") or not image.get("height"):
            fail(page, f"image #{index} needs explicit width and height")

    for href in parser.anchors:
        if href == "#":
            fail(page, 'dead href="#" is forbidden')
        if href.startswith("#") and href[1:] and href[1:] not in parser.ids:
            fail(page, f"fragment target does not exist: {href}")

    for kind, ref in parser.local_refs:
        if is_external_or_protocol(ref):
            continue
        target = resolve_local(ref)
        if not target.exists():
            fail(page, f"missing local resource from {kind}: {ref}")

# Motion / runtime invariants.
main_js = (ROOT / "js/main.js").read_text(encoding="utf-8")
base_css = (ROOT / "css/base.css").read_text(encoding="utf-8")
if "IntersectionObserver" in main_js or "initFadeUpAnimation" in main_js:
    fail("motion", "decorative reveal observer must stay removed")
if "@keyframes" in base_css or re.search(r"\banimation\s*:", base_css):
    fail("motion", "base.css must not contain continuous/decorative animation")
if (ROOT / "js/particles.js").exists():
    fail("motion", "unused particle runtime must not exist")

# Dynamic service metadata must remain unique per service id.
service_js = (ROOT / "js/service-detail.js").read_text(encoding="utf-8")
for required in ("document.title", "serviceMetaDescription", "serviceOgTitle", "serviceOgDescription", "serviceCanonical"):
    if required not in service_js:
        fail("service-detail", f"dynamic metadata hook missing: {required}")

# Minimal icon subset must cover every icon class used by rendered public HTML/runtime scripts.
icon_css = (ROOT / "css/icons.css").read_text(encoding="utf-8")
used_icons: set[str] = set()
for page in PAGES:
    used_icons.update(re.findall(r"\\bfa-[a-z0-9-]+\\b", (ROOT / page).read_text(encoding="utf-8")))
for script in PUBLIC_RUNTIME_JS:
    used_icons.update(re.findall(r"\\bfa-[a-z0-9-]+\\b", (ROOT / script).read_text(encoding="utf-8")))
mapped_icons = set(re.findall(r"\\.(fa-[a-z0-9-]+)::before\\s*\\{", icon_css))
for icon in sorted(used_icons - mapped_icons):
    fail("icons", f"runtime icon is not mapped by css/icons.css: {icon}")

# Sitemap: indexable core pages + exactly all 8 service query routes; never blog/404.
sitemap = ET.parse(ROOT / "sitemap.xml")
ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
locs = [node.text or "" for node in sitemap.findall("sm:url/sm:loc", ns)]
service_locs = [loc for loc in locs if "/service-web.html?id=" in loc]
actual_ids = [urlsplit(loc).query.removeprefix("id=") for loc in service_locs]
if len(actual_ids) != len(SERVICE_IDS) or set(actual_ids) != set(SERVICE_IDS):
    fail("sitemap.xml", f"service routes differ from approved ids: {actual_ids}")
for forbidden in ("blog.html", "404.html"):
    if any(forbidden in loc for loc in locs):
        fail("sitemap.xml", f"{forbidden} must not be indexed in sitemap")

# FAQ visible questions and FAQPage schema must stay aligned.
faq_source = (ROOT / "faq.html").read_text(encoding="utf-8")
visible_questions = [
    re.sub(r"<[^>]+>", "", match).strip()
    for match in re.findall(r"<summary>([\s\S]*?)</summary>", faq_source, flags=re.IGNORECASE)
]
schema_match = re.search(
    r'<script\s+type="application/ld\+json">([\s\S]*?)</script>',
    faq_source,
    flags=re.IGNORECASE,
)
if not schema_match:
    fail("faq.html", "FAQPage JSON-LD is missing")
else:
    try:
        schema = json.loads(schema_match.group(1))
        schema_questions = [item["name"] for item in schema.get("mainEntity", [])]
        if visible_questions != schema_questions:
            fail("faq.html", "visible FAQ questions and JSON-LD are out of sync")
    except (json.JSONDecodeError, KeyError, TypeError) as exc:
        fail("faq.html", f"invalid FAQ JSON-LD: {exc}")

if ERRORS:
    print("SITE QUALITY CHECK: FAILED")
    for item in ERRORS:
        print(f"- {item}")
    sys.exit(1)

print("SITE QUALITY CHECK: PASSED")
print(f"Audited {len(PAGES)} public pages, {len(SERVICE_IDS)} service routes, sitemap, FAQ schema, motion and local resources.")
