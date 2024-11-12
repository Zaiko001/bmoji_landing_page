/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bmoji_landing_page/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/bmoji_landing_page' : '',
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
