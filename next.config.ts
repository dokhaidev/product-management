import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.s99.vn", "gcs.tripi.vn", "media.istockphoto.com", "img.tripi.vn", "images.unsplash.com" ],
  },
};

export default nextConfig;
