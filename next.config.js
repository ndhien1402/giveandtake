/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hanoicomputercdn.com"],
  },
};

module.exports = nextConfig;
