module.exports = {
  apps: [
    {
      name: "gamehub-next",
      script: "npm",
      args: "start",
      cwd: process.cwd(), // Use current execution directory
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
        NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || "https://domain.com",
        NEXT_PUBLIC_FRONTEND_DOMAIN: process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "domain.com",
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.domain.com",
        NEXT_PUBLIC_API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN || "api.domain.com",
        NEXT_PUBLIC_STEAM_AUTH_URL:
          process.env.NEXT_PUBLIC_STEAM_AUTH_URL || "https://api.domain.com/auth/steam",
        NEXT_PUBLIC_ALLOWED_ORIGINS:
          process.env.NEXT_PUBLIC_ALLOWED_ORIGINS || "http://domain.com,https://domain.com"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
        NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || "https://domain.com",
        NEXT_PUBLIC_FRONTEND_DOMAIN: process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "domain.com",
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.domain.com",
        NEXT_PUBLIC_API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN || "api.domain.com",
        NEXT_PUBLIC_STEAM_AUTH_URL:
          process.env.NEXT_PUBLIC_STEAM_AUTH_URL || "https://api.domain.com/auth/steam",
        NEXT_PUBLIC_ALLOWED_ORIGINS:
          process.env.NEXT_PUBLIC_ALLOWED_ORIGINS || "http://domain.com,https://domain.com"
      },
      log_date_format: "YYYY-MM-DD HH:mm Z",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true
    }
  ]
};
