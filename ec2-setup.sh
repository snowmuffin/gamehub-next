#!/bin/bash

# EC2 environment setup script
# Use this when deploying to an EC2 instance for the first time

set -e

echo "🚀 Initializing GameHub Next.js on EC2..."

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Show current directory
PROJECT_DIR=$(pwd)
echo -e "${BLUE}📂 Project directory: $PROJECT_DIR${NC}"

# Print environment variables
echo -e "${BLUE}🔍 Environment variables:${NC}"
echo "NODE_ENV: ${NODE_ENV:-'production'}"
echo "PORT: ${PORT:-'3000'}"

# Show system/runtime info
echo -e "${BLUE}🔍 System info:${NC}"
echo "OS: $(uname -a)"
echo "Node.js: $(node --version 2>/dev/null || echo '❌ Node.js not installed')"
echo "yarn: $(yarn --version 2>/dev/null || echo '❌ yarn not installed')"
echo "PM2: $(pm2 --version 2>/dev/null || echo '❌ PM2 not installed')"

# Install yarn if missing
if ! command -v yarn &> /dev/null; then
    echo -e "${YELLOW}📦 Installing yarn...${NC}"
    npm install -g yarn
fi

# Install PM2 if missing
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}📦 Installing PM2...${NC}"
    yarn global add pm2
fi

# Create logs directory
echo -e "${YELLOW}📁 Creating logs directory...${NC}"
mkdir -p logs

# Check for .env file
if [ -f ".env" ]; then
    echo -e "${GREEN}✅ .env file found${NC}"
else
    echo -e "${YELLOW}⚠️ .env file not found. Using defaults.${NC}"
fi

# Create .env.production (for EC2)
echo -e "${YELLOW}📝 Creating .env.production...${NC}"
cat > .env.production << 'EOF'
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_API_URL=https://api.domain.com
NEXT_PUBLIC_STEAM_AUTH_URL=${NEXT_PUBLIC_STEAM_AUTH_URL:-}
EOF

echo -e "${GREEN}✅ .env.production has been created${NC}"
cat .env.production

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
yarn install

# Build
echo -e "${YELLOW}🔨 Building project...${NC}"
yarn build

# PM2 startup (auto start on boot)
echo -e "${YELLOW}⚙️ Configuring PM2 startup...${NC}"
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME || true

echo -e "${GREEN}✅ EC2 setup completed!${NC}"
echo -e "${BLUE}💡 You can now start the application with:${NC}"
echo -e "${BLUE}   ./deploy.sh${NC}"
