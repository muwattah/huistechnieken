import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Live preview: https://muwattah.github.io/huistechnieken/
  basePath: isProd ? "/huistechnieken" : "",
  assetPrefix: isProd ? "/huistechnieken/" : "",
};

export default nextConfig;
