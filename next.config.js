/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  },

  reactStrictMode: true,
}

module.exports = nextConfig
