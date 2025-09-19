// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Nécessaire pour GitHub Pages
  images: {
    unoptimized: true, // Désactive l'optimisation automatique des images (obligatoire pour export statique)
  },
  basePath: '/projet-site-Agence-Num-rique-de-l-tat', // ⚠️ adapte au nom de ton repo GitHub
  assetPrefix: '/projet-site-Agence-Num-rique-de-l-tat',
};

export default nextConfig;
