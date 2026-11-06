import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // builds /city/it-services/index.html so the URLs work on Apache or Cloudflare
  images: { unoptimized: true },
};

export default nextConfig;
