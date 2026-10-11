const SVG_NS = "http://www.w3.org/2000/svg";
const DURATION = 3600;
const NAVY = "#14305F";
const TEAL = "#0E8889";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const range = (value, start, end) => clamp((value - start) / (end - start));
const easeOut = (value) => 1 - Math.pow(1 - clamp(value), 3);
const easeInOut = (value) => {
  const t = clamp(value);
  return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
const spring = (value) => {
  const t = clamp(value);
  return t === 1 ? 1 : 1 - Math.cos(t * Math.PI * 4.5) * Math.exp(-t * 7);
};

function svgElement(name, attributes = {}) {
  const node = document.createElementNS(SVG_NS, name);
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, String(value)));
  return node;
}

function splitContours(pathData) {
  return pathData.match(/M[\s\S]*?Z/gi) || [];
}

function contains(outer, inner) {
  return outer.x <= inner.x + .1 && outer.y <= inner.y + .1 &&
    outer.x + outer.width >= inner.x + inner.width - .1 &&
    outer.y + outer.height >= inner.y + inner.height - .1;
}

function sampleContour(svg, data, transform = "") {
  const probe = svgElement("path", { d: data, transform, visibility: "hidden" });
  svg.append(probe);
  const length = probe.getTotalLength();
  const box = probe.getBBox();
  const count = Math.max(36, Math.min(120, Math.ceil(length / 7)));
  const points = Array.from({ length: count }, (_, index) => {
    const point = probe.getPointAtLength(length * index / count);
    return [point.x, point.y];
  });
  probe.remove();
  return { data, box, points };
}

function groupContours(svg, sourcePath) {
  const transform = sourcePath.getAttribute("transform") || "";
  const contours = splitContours(sourcePath.getAttribute("d") || "")
    .map((data, index) => ({ ...sampleContour(svg, data, transform), index, parent: -1 }));

  contours.forEach((item, index) => {
    let smallest = Infinity;
    contours.forEach((candidate, candidateIndex) => {
      if (index === candidateIndex) return;
      const area = candidate.box.width * candidate.box.height;
      const ownArea = item.box.width * item.box.height;
      if (area > ownArea && area < smallest && contains(candidate.box, item.box)) {
        item.parent = candidateIndex;
        smallest = area;
      }
    });
  });

  return contours.filter((item) => item.parent === -1).map((root) => {
    const members = contours.filter((item) => {
      if (item.index === root.index) return true;
      let parent = item.parent;
      while (parent !== -1) {
        if (parent === root.index) return true;
        parent = contours[parent].parent;
      }
      return false;
    }).sort((a, b) => a.index - b.index);

    const path = svgElement("path", {
      d: members.map((item) => item.data).join(" "),
      transform,
      fill: sourcePath.getAttribute("fill") || NAVY,
      "fill-rule": "evenodd"
    });
    svg.append(path);
    const box = path.getBBox();
    path.remove();
    return { members, box, transform };
  });
}

function circlePoints(center, count, radius = 3) {
  return Array.from({ length: count }, (_, index) => {
    const angle = index / count * Math.PI * 2;
    return [center[0] + Math.cos(angle) * radius, center[1] + Math.sin(angle) * radius];
  });
}

function morphData(members, progress, center) {
  if (progress >= .999) return members.map((item) => item.data).join(" ");
  return members.map((item) => {
    const source = circlePoints(center, item.points.length, 2.5);
    const points = item.points.map(([x, y], index) => {
      const [startX, startY] = source[index];
      return [startX + (x - startX) * progress, startY + (y - startY) * progress];
    });
    return points.map(([x, y], index) => `${index ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`).join(" ") + " Z";
  }).join(" ");
}

function createTrail(svg, data, color) {
  const path = svgElement("path", {
    d: data,
    fill: "none",
    stroke: color,
    "stroke-width": 2.2,
    "stroke-linecap": "round",
    opacity: .18,
    "vector-effect": "non-scaling-stroke"
  });
  svg.append(path);
  return path;
}

function pointOn(path, progress) {
  return path.getPointAtLength(path.getTotalLength() * clamp(progress));
}

async function loadMaster() {
  const response = await fetch("/assets/brand/wasl-tech-horizontal.svg");
  if (!response.ok) throw new Error("تعذر تحميل الشعار الرسمي");
  const source = new DOMParser().parseFromString(await response.text(), "image/svg+xml");
  return source.documentElement;
}

function buildMotion(master, mount, { onFrame = () => {}, autoplay = true } = {}) {
  const svg = master.cloneNode(true);
  svg.removeAttribute("width");
  svg.removeAttribute("height");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "تشكّل شعار وصل تك من أربع نقاط");
  mount.replaceChildren(svg);

  const originalGroup = svg.querySelector("g");
  const originalIconPaths = [...originalGroup.querySelectorAll(":scope > path")];
  const originalWordPath = [...svg.children].find((node) => node.tagName?.toLowerCase() === "path");
  const defs = svg.querySelector("defs");

  const animatedLayer = svgElement("g", { "aria-hidden": "true" });
  const trailLayer = svgElement("g", { "aria-hidden": "true" });
  const nodeLayer = svgElement("g", { "aria-hidden": "true" });
  svg.insertBefore(trailLayer, originalGroup);
  svg.insertBefore(animatedLayer, originalGroup);
  svg.append(nodeLayer);

  const iconParts = originalIconPaths.flatMap((path, pathIndex) => {
    const fill = path.getAttribute("fill") || (pathIndex ? TEAL : NAVY);
    const transform = originalGroup.getAttribute("transform") || "";
    return groupContours(svg, path).map((group, index) => {
      const element = svgElement("path", { fill, "fill-rule": "evenodd", transform, opacity: 0 });
      animatedLayer.append(element);
      return { ...group, element, fill, index, pathIndex, center: [group.box.x + group.box.width / 2, group.box.y + group.box.height / 2] };
    });
  });

  const wordGroups = groupContours(svg, originalWordPath);
  const arabicGroups = wordGroups.filter((group) => group.box.y < 710).sort((a, b) => b.box.x - a.box.x);
  const englishGroups = wordGroups.filter((group) => group.box.y >= 710).sort((a, b) => a.box.x - b.box.x);
  const makeGlyph = (group, kind, index) => {
    const element = svgElement("path", {
      fill: NAVY,
      "fill-rule": "evenodd",
      transform: group.transform,
      opacity: 0
    });
    animatedLayer.append(element);
    return { ...group, element, kind, index, center: [group.box.x + group.box.width / 2, group.box.y + group.box.height / 2] };
  };
  const arabic = arabicGroups.map((group, index) => makeGlyph(group, "arabic", index));
  const english = englishGroups.map((group, index) => makeGlyph(group, "english", index));

  originalGroup.setAttribute("opacity", "0");
  originalWordPath.setAttribute("opacity", "0");

  const trails = [
    createTrail(svg, "M565 176 C650 65 930 35 1002 154 C1050 230 945 310 820 276", NAVY),
    createTrail(svg, "M565 176 C690 285 905 328 985 208 C1028 144 942 100 824 129", TEAL),
    createTrail(svg, "M565 176 C500 118 377 95 292 128 C210 160 133 164 55 158", NAVY),
    createTrail(svg, "M565 176 C477 238 360 274 247 259 C188 251 139 249 92 252", TEAL)
  ];

  const nodes = [NAVY, TEAL, NAVY, TEAL].map((fill) => {
    const halo = svgElement("circle", { r: 11, fill, opacity: .1 });
    const dot = svgElement("circle", { r: 5.5, fill });
    nodeLayer.append(halo, dot);
    return { dot, halo };
  });

  const hub = svgElement("circle", { cx: 565, cy: 176, r: 2.6, fill: TEAL, opacity: 0 });
  nodeLayer.prepend(hub);

  const orbitOffsets = [[0, -30], [30, 0], [0, 30], [-30, 0]];
  let progress = 0;
  let request = 0;
  let started = performance.now();
  let playing = false;

  function positionNode(node, x, y, opacity = 1, scale = 1) {
    node.dot.setAttribute("cx", x.toFixed(2));
    node.dot.setAttribute("cy", y.toFixed(2));
    node.dot.setAttribute("opacity", opacity.toFixed(3));
    node.dot.setAttribute("r", (5.5 * scale).toFixed(2));
    node.halo.setAttribute("cx", x.toFixed(2));
    node.halo.setAttribute("cy", y.toFixed(2));
    node.halo.setAttribute("opacity", (.1 * opacity).toFixed(3));
    node.halo.setAttribute("r", (11 * scale).toFixed(2));
  }

  function render(nextProgress) {
    progress = clamp(nextProgress);
    const connection = range(progress, 0, .18);
    const travel = easeInOut(range(progress, .16, .38));
    const orbit = progress * Math.PI * 8;

    hub.setAttribute("opacity", String(1 - range(progress, .13, .23)));
    hub.setAttribute("r", String(2.6 + Math.sin(connection * Math.PI) * 7));

    trails.forEach((trail, index) => {
      const reveal = range(progress, .15 + index * .018, .34 + index * .018);
      trail.style.strokeDasharray = String(trail.getTotalLength());
      trail.style.strokeDashoffset = String(trail.getTotalLength() * (1 - reveal));
      trail.setAttribute("opacity", String(.2 * (1 - range(progress, .62, .88))));
    });

    nodes.forEach((node, index) => {
      const offset = orbitOffsets[index];
      const radius = 4 + connection * 26;
      const startX = 565 + Math.cos(orbit + index * Math.PI / 2) * radius + offset[0] * (1 - connection);
      const startY = 176 + Math.sin(orbit + index * Math.PI / 2) * radius + offset[1] * (1 - connection);
      const trailPoint = pointOn(trails[index], travel);
      const x = startX + (trailPoint.x - startX) * travel;
      const y = startY + (trailPoint.y - startY) * travel;
      const fadeWindows = [[.48, .62], [.50, .65], [.69, .82], [.82, .94]][index];
      const opacity = 1 - range(progress, fadeWindows[0], fadeWindows[1]);
      positionNode(node, x, y, opacity, 1 + Math.sin(travel * Math.PI) * .24);
    });

    iconParts.forEach((part, index) => {
      const order = part.pathIndex * 3 + index;
      const local = easeOut(range(progress, .31 + order * .022, .58 + order * .018));
      part.element.setAttribute("d", morphData(part.members, local, part.center));
      part.element.setAttribute("opacity", String(local > .01 ? 1 : 0));
      part.element.style.transformBox = "fill-box";
      part.element.style.transformOrigin = "center";
      part.element.style.transform = `scale(${.985 + .015 * spring(local)})`;
    });

    arabic.forEach((glyph, index) => {
      const local = easeOut(range(progress, .45 + index * .026, .73 + index * .021));
      glyph.element.setAttribute("d", morphData(glyph.members, local, glyph.center));
      glyph.element.setAttribute("opacity", String(local > .015 ? 1 : 0));
    });

    english.forEach((glyph, index) => {
      const local = easeOut(range(progress, .66 + index * .018, .89 + index * .012));
      glyph.element.setAttribute("d", morphData(glyph.members, local, glyph.center));
      glyph.element.setAttribute("opacity", String(local > .015 ? 1 : 0));
    });

    const settle = spring(range(progress, .88, 1));
    animatedLayer.style.transformBox = "fill-box";
    animatedLayer.style.transformOrigin = "center";
    animatedLayer.style.transform = `scale(${.992 + .008 * settle})`;
    onFrame(progress);
  }

  function tick(now) {
    if (!playing) return;
    const elapsed = now - started;
    const next = elapsed / DURATION;
    render(next);
    if (next < 1) request = requestAnimationFrame(tick);
    else playing = false;
  }

  function play(from = progress >= 1 ? 0 : progress) {
    cancelAnimationFrame(request);
    progress = from;
    started = performance.now() - progress * DURATION;
    playing = true;
    request = requestAnimationFrame(tick);
  }

  function pause() {
    playing = false;
    cancelAnimationFrame(request);
  }

  function seek(value) {
    pause();
    render(value);
  }

  render(matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0);
  if (autoplay && !matchMedia("(prefers-reduced-motion: reduce)").matches) play(0);
  return { play, pause, seek, get playing() { return playing; }, get progress() { return progress; } };
}

const phaseLabel = document.getElementById("phase-label");
const scrubber = document.getElementById("scrubber");
const output = document.getElementById("time-output");
const pauseButton = document.getElementById("pause");

function updateUi(progress) {
  scrubber.value = Math.round(progress * 1000);
  output.value = `${(progress * DURATION / 1000).toFixed(1)}s`;
  phaseLabel.textContent = progress < .18 ? "الاتصال" : progress < .42 ? "التوزيع" : progress < .88 ? "البناء" : "الاستقرار";
  if (progress >= 1) pauseButton.textContent = "تشغيل";
}

try {
  const master = await loadMaster();
  const controller = buildMotion(master, document.getElementById("motion-mount"), { onFrame: updateUi });

  document.getElementById("replay").addEventListener("click", () => {
    pauseButton.textContent = "إيقاف مؤقت";
    controller.play(0);
  });

  pauseButton.addEventListener("click", () => {
    if (controller.playing) {
      controller.pause();
      pauseButton.textContent = "متابعة";
    } else {
      controller.play(controller.progress);
      pauseButton.textContent = "إيقاف مؤقت";
    }
  });

  scrubber.addEventListener("input", () => {
    controller.seek(Number(scrubber.value) / 1000);
    pauseButton.textContent = "متابعة";
  });

  const shell = document.querySelector(".stage-shell");
  document.getElementById("theme").addEventListener("click", (event) => {
    const dark = shell.dataset.theme !== "dark";
    shell.dataset.theme = dark ? "dark" : "light";
    event.currentTarget.textContent = dark ? "خلفية فاتحة" : "خلفية داكنة";
  });

  const dialog = document.getElementById("intro-dialog");
  let dialogController = null;
  document.getElementById("fullscreen").addEventListener("click", () => {
    dialog.showModal();
    dialogController = buildMotion(master, document.getElementById("dialog-mount"));
  });
  document.getElementById("dialog-close").addEventListener("click", () => {
    dialogController?.pause();
    dialog.close();
  });
} catch (error) {
  document.getElementById("motion-mount").innerHTML = `<p class="load-error">${error.message}</p>`;
}
