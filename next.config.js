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
        destination: 'https://api.snowmuffingame.com/:path*',
      },
    ];
  },

  async headers() {
    return [
      {
        // 모든 API 경로에 대해 CORS 헤더 적용
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://13.125.32.159:4000, https://api.snowmuffingame.com, http://se.snowmuffingame.com, https://se.snowmuffingame.com'
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
          }
        ]
      }
    ];
  },
};

module.exports = nextConfig;