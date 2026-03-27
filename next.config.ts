import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/latent-bridge-lp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
