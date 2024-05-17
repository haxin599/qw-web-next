/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // 忽略 TypeScript 检查
  }
}

module.exports = nextConfig
