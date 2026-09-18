import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Project site: https://muwattah.github.io/huistechnieken/
  basePath: process.env.NODE_ENV === "production" ? "/huistechnieken" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/huistechnieken" : "",
};

export default nextConfig;
