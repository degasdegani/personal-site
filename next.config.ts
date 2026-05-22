import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compressão automática de respostas
  compress: true,

  // Remove o header "X-Powered-By: Next.js" por segurança
  poweredByHeader: false,

  // Modo estrito do React — detecta problemas antes do deploy
  reactStrictMode: true,

  // Otimização de imagens — converte para AVIF e WebP automaticamente
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
