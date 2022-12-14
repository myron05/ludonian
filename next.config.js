/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
        unoptimized: true
    }
},
  reactStrictMode: true,
  
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
