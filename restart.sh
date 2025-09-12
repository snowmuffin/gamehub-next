#!/bin/bash

# Quick restart script
# Use this after code changes for a fast restart

set -e

echo "🔄 GameHub Next.js quick restart..."

# Color definitions
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Use current directory as project directory
PROJECT_DIR=$(pwd)
cd "$PROJECT_DIR"

echo "📂 Project directory: $PROJECT_DIR"

# Build
echo -e "${YELLOW}🔨 Building project...${NC}"
npm run build

# PM2 restart
echo -e "${YELLOW}🔄 Restarting PM2 application...${NC}"
pm2 restart gamehub-next

# Check status
echo -e "${GREEN}✅ PM2 process status:${NC}"
pm2 status

echo -e "${GREEN}🎉 Restart complete!${NC}"
