/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Voor betere prestaties
  swcMinify: true,
  // Voor Docker deployment
  output: 'standalone',
}

module.exports = nextConfig
