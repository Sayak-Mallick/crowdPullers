import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // For static export if needed
    domains: [], // Add any external domains if you're loading images from external sources
    formats: ['image/webp', 'image/avif'],
  },
  /* config options here */
};

export default nextConfig;
