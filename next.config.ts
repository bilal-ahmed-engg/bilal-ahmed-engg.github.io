import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Set basePath for GitHub Pages project page (e.g. username.github.io/portfolio)
  // If deploying to a custom domain or user page (username.github.io), set to ""
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
  // Trailing slash ensures proper routing on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
