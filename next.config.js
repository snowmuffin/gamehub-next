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
    // 개발 환경과 프로덕션 환경 구분
    const isProd = process.env.NODE_ENV === 'production';
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.snowmuffingame.com';
    
    console.log('🔧 Rewrite 설정:', {
      environment: process.env.NODE_ENV,
      isProd,
      apiUrl,
      timestamp: new Date().toISOString()
    });

    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/:path*`,
        // 모든 환경에서 rewrite 적용
        has: undefined,
        permanent: false,
        // 내부 rewrite로 설정하여 브라우저에서 URL이 변경되지 않도록 함
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
