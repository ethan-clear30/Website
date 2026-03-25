/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Fewer file watchers in dev (helps macOS EMFILE when ulimit is low)
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/.git/**', '**/public/**'],
      };
    }
    return config;
  },
};

export default nextConfig;
