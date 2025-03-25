/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  // Trailing slash is important for GitHub Pages
  trailingSlash: true,
  // Configure base path to match repo name
  basePath: '/portofolio_ibet',
  assetPrefix: '/portofolio_ibet/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 