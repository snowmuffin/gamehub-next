/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  basePath: "",
  assetPrefix: "",

  // Allow access from external hosts (HTTPS supported)
  experimental: {
    allowedRevalidateHeaderKeys: ["host", "x-forwarded-host"]
  },

  // Security headers suitable for HTTPS environments
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          }
        ]
      }
    ];
  },

  images: {
    unoptimized: true,
    loader: "default",
    path: "/"
  },

  // Sass configuration to suppress @import deprecation warnings
  sassOptions: {
    quietDeps: true,
    charset: false,
    silenceDeprecations: ["import"]
  },

  typescript: {
    ignoreBuildErrors: isProd
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@/shared": path.resolve(__dirname, "shared")
    };

    // Ignore macOS hidden files
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^\._/
      })
    );

    // Improve Sass loader config - reduce deprecation warnings
    const rules = config.module.rules;
    const oneOfRule = rules.find(rule => typeof rule.oneOf === "object");

    if (oneOfRule) {
      oneOfRule.oneOf.forEach(rule => {
        if (rule.test && rule.test.toString().includes("scss|sass")) {
          if (Array.isArray(rule.use)) {
            rule.use.forEach(loader => {
              if (typeof loader === "object" && loader.loader && loader.loader.includes("sass-loader")) {
                loader.options = {
                  ...loader.options,
                  sassOptions: {
                    ...loader.options?.sassOptions,
                    quietDeps: true,
                    silenceDeprecations: ["import", "legacy-js-api"]
                  }
                };
              }
            });
          }
        }
      });
    }

    return config;
  },

  async rewrites() {
    // Distinguish development vs production
    const isProd = process.env.NODE_ENV === "production";
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.yourdomain.com";

    console.log("🔧 Rewrite config:", {
      environment: process.env.NODE_ENV,
      isProd,
      apiUrl,
      frontendUrl: process.env.NEXT_PUBLIC_FRONTEND_URL,
      timestamp: new Date().toISOString()
    });

    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/:path*`
      }
    ];
  }
};

module.exports = nextConfig;
