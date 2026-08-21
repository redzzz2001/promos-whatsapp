import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS ? "/promos-whatsapp" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
