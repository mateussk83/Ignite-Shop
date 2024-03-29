/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  },

  images: {
    domains: ['files.stripe.com']
  },
  reactStrictMode: false,
}

module.exports = nextConfig
