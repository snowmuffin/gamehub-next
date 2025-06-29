module.exports = {
  apps: [{
    name: 'gamehub-next',
    script: 'yarn',
    args: 'start',
    cwd: process.cwd(), // Use current execution directory
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: process.env.PORT || 3000,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://REDACTED_API',
      NEXT_PUBLIC_STEAM_AUTH_URL: process.env.NEXT_PUBLIC_STEAM_AUTH_URL || 'https://REDACTED_API/auth/steam'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: process.env.PORT || 3000,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://REDACTED_API',
      NEXT_PUBLIC_STEAM_AUTH_URL: process.env.NEXT_PUBLIC_STEAM_AUTH_URL || 'https://REDACTED_API/auth/steam'
    },
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
