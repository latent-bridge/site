import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
