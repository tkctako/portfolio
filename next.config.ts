import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 忽略構建過程中的 ESLint 錯誤
  },
};

export default nextConfig;
