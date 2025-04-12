import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true
  },
  compress: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    domains: [
      'skillicons.dev', 
      'user-images.githubusercontent.com',
      'camo.githubusercontent.com'  // Added this domain
    ],
  },
      typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;