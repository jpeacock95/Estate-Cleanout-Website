import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/reviews",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
