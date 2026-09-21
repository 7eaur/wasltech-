process.env.VNEXT_BUILD_MODE = "production";
process.env.VNEXT_OUTPUT_DIR = "dist-release";
await import("./build.mjs");
