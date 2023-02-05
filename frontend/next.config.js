/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'localhost',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
    ],
  },
};

module.exports = nextConfig;
