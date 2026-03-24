export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // SPA directories that need client-side routing fallback
    const spaRoots = ['/influencers', '/panel', '/school-portal'];

    for (const root of spaRoots) {
      if (path.startsWith(root + '/') || path === root) {
        // Let static asset requests pass through
        if (path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|eot|json|webmanifest|map|txt)$/)) {
          return env.ASSETS.fetch(request);
        }

        // Serve the SPA's index.html for all other routes
        return env.ASSETS.fetch(new URL(root + '/index.html', url.origin));
      }
    }

    // Everything else: serve static assets normally
    return env.ASSETS.fetch(request);
  },
};
