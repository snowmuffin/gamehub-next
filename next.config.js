/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  basePath: '',
  assetPrefix: '',

  images: {
    unoptimized: true,
    loader: 'default',
    path: '/',
  },

  typescript: {
    ignoreBuildErrors: isProd,
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://13.125.32.159:4000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;