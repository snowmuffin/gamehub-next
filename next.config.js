/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  basePath: undefined,
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
        destination: 'http://3.35.196.88:4000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
