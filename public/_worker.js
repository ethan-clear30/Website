export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // SPA directories that need client-side routing fallback
    const spaRoots = ['/influencers', '/panel', '/school-portal'];

    for (const root of spaRoots) {
      if (path.startsWith(root + '/') || path === root) {
        // Try serving the exact asset first
        const assetResponse = await env.ASSETS.fetch(request);
        if (assetResponse.status !== 404) {
          return assetResponse;
        }

        // Asset not found — fall back to the SPA's index.html
        return env.ASSETS.fetch(new URL(root + '/index.html', url.origin));
      }
    }

    // Everything else: serve static assets normally
    return env.ASSETS.fetch(request);
  },
};
