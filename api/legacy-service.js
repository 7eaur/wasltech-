import { resolveHistoricalService } from "../src/seo/resolve-historical-service.js";

/**
 * Spike only. A single server-side resolver avoids many same-path
 * conditional 'has' rules. Must pass same-SHA Vercel Preview acceptance.
 */
export default {
  fetch(request) {
    const url = new URL(request.url);
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
    }
    const locale = url.searchParams.get("language");
    const ids = url.searchParams.getAll("id");
    const destination = ids.length === 1
      ? resolveHistoricalService({ id: ids[0], locale })
      : null;
    if (!destination) {
      return new Response(null, {
        status: 404,
        headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" }
      });
    }
    return new Response(null, {
      status: 308,
      headers: {
        Location: destination,
        "Cache-Control": "public, max-age=600"
      }
    });
  }
};
