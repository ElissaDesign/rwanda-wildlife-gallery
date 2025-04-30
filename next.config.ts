import { NextConfig } from "next";

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ]
  },
  ppr: true,
} satisfies NextConfig;

export default nextConfig;
