#!/bin/bash

# EC2 environment variable setup script
# Sets environment variables and restarts the application

set -e

echo "🔧 Setting EC2 environment variables..."

# Color definitions
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Show current directory
PROJECT_DIR=$(pwd)
echo -e "${BLUE}📂 Project directory: $PROJECT_DIR${NC}"

# Create .env.production file
echo -e "${YELLOW}📝 Creating .env.production...${NC}"
cat > .env.production << 'EOF'
# Production Environment Configuration
NODE_ENV=production
PORT=3000

# Frontend Configuration
NEXT_PUBLIC_FRONTEND_URL=https://yourdomain.com
NEXT_PUBLIC_FRONTEND_DOMAIN=yourdomain.com

# API Configuration  
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_API_DOMAIN=api.yourdomain.com

# Authentication
NEXT_PUBLIC_STEAM_AUTH_URL=https://api.yourdomain.com/auth/steam

# CORS Configuration
NEXT_PUBLIC_ALLOWED_ORIGINS=http://yourdomain.com,https://yourdomain.com
EOF

echo -e "${GREEN}✅ .env.production has been created:${NC}"
cat .env.production

# Load environment variables
echo -e "${YELLOW}📝 Loading environment variables...${NC}"
export $(grep -v '^#' .env.production | xargs)

# Print environment variables
echo -e "${BLUE}🔍 Effective environment variables:${NC}"
echo "NODE_ENV: $NODE_ENV"
echo "PORT: $PORT"
echo "NEXT_PUBLIC_FRONTEND_URL: $NEXT_PUBLIC_FRONTEND_URL"
echo "NEXT_PUBLIC_FRONTEND_DOMAIN: $NEXT_PUBLIC_FRONTEND_DOMAIN"
echo "NEXT_PUBLIC_API_URL: $NEXT_PUBLIC_API_URL"
echo "NEXT_PUBLIC_API_DOMAIN: $NEXT_PUBLIC_API_DOMAIN"
echo "NEXT_PUBLIC_STEAM_AUTH_URL: $NEXT_PUBLIC_STEAM_AUTH_URL"
echo "NEXT_PUBLIC_ALLOWED_ORIGINS: $NEXT_PUBLIC_ALLOWED_ORIGINS"

# Restart PM2 app with new environment variables
if pm2 list | grep -q "gamehub-next"; then
    echo -e "${YELLOW}🔄 Restarting PM2 application (with environment variables)...${NC}"
    
    # Restart with environment variables
    NODE_ENV=production \
    PORT=3000 \
    NEXT_PUBLIC_FRONTEND_URL=https://yourdomain.com \
    NEXT_PUBLIC_FRONTEND_DOMAIN=yourdomain.com \
    NEXT_PUBLIC_API_URL=https://api.yourdomain.com \
    NEXT_PUBLIC_API_DOMAIN=api.yourdomain.com \
    NEXT_PUBLIC_STEAM_AUTH_URL=https://api.yourdomain.com/auth/steam \
    pm2 restart gamehub-next --update-env
    
    echo -e "${GREEN}✅ PM2 application restarted with new environment variables${NC}"
else
    echo -e "${YELLOW}⚠️ PM2 application is not running${NC}"
    echo -e "${BLUE}💡 Start the application with:${NC}"
    echo -e "${BLUE}   ./deploy.sh${NC}"
fi

# Show PM2 status
echo -e "${BLUE}📋 PM2 status:${NC}"
pm2 status

echo -e "${GREEN}🎉 Environment configuration completed!${NC}"
echo -e "${BLUE}💡 Check the /debug/api page in your browser${NC}"
