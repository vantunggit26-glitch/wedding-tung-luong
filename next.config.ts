import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    formats: ['image/webp'], // Chỉ dùng WebP, bỏ AVIF để giảm processing
    deviceSizes: [640, 750, 828, 1080, 1200], // Giảm max size xuống 1200px
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
