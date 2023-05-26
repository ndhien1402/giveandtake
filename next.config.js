/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hanoicomputercdn.com", "wallpaperaccess.com"],
  },
};

module.exports = nextConfig;
