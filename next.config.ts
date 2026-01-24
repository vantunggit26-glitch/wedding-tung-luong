import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Tắt optimization cho Netlify
  },
};

export default nextConfig;
