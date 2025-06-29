/** @type {import('next').NextConfig} */
const path = require('path');
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

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/shared': path.resolve(__dirname, 'shared'),
    };
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.snowmuffingame.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
