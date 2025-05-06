/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: "",
  assetPrefix: "",
  images: {
    loader: "imgix",
    path: "/",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy all requests starting with /api
        destination: "http://3.35.196.88:4000/:path*", // Target backend server
      },
    ];
  },
};

module.exports = nextConfig;
