import { SEO_INDEX_STATE } from "./seo.js";

export const buildMode = process.env.VNEXT_BUILD_MODE === "production" ? "production" : "preview";
export const isProductionBuild = buildMode === "production";
export const publicRobots = isProductionBuild ? SEO_INDEX_STATE.INDEX : SEO_INDEX_STATE.NOINDEX;
export const outputDirectoryName = process.env.VNEXT_OUTPUT_DIR || (isProductionBuild ? "dist-release" : "dist");
