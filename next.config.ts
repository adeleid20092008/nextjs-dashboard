import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    cssChunking: "loose", // default
  },
  images: {
    localPatterns: [
      {
        pathname: "/assets/imges/**",
        search: "",
      },
    ],
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**.example.com',
        port: '',
        pathname:'/image/upload/**',

      },
    ],
  },
} satisfies NextConfig;

export default nextConfig;
