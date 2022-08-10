/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  "pagesDir": './src/pages'
}

module.exports = nextConfig
