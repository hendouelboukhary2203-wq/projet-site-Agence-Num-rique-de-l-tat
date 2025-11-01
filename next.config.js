

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },

 basePath: "/projet-site-Agence-Num-rique-de-l-tat",  
  assetPrefix: "/projet-site-Agence-Num-rique-de-l-tat",
  trailingSlash: true
};
module.exports = nextConfig;