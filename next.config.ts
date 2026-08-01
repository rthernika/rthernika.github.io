import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // No basePath needed — site deploys at the apex: rthernika.github.io
  // (repo must be named rthernika.github.io for this to work)

  images: {
    // Next.js Image Optimization is server-only; required for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'app.notion.com',
      },
      {
        protocol: 'https',
        hostname: 'www.notion.so',
      },
    ],
  },
};

export default nextConfig;
