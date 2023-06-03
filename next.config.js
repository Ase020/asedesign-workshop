/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.pexels.com", "bikozulu.co.ke"],
  },
};

module.exports = nextConfig;
