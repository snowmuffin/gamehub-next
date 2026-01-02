#!/bin/bash

# PM2 redeployment script
# This script redeploys the Next.js application using PM2.

set -e  # Stop script on error

echo "🚀 Starting GameHub Next.js PM2 redeployment..."

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Use current directory as project directory
PROJECT_DIR=$(pwd)
cd "$PROJECT_DIR"

echo -e "${BLUE}📂 Project directory: $PROJECT_DIR${NC}"

# Git pull (optional - uncomment to use)
# echo -e "${YELLOW}📥 Fetching latest code...${NC}"
# git pull origin main

# Check and load environment variables file
if [ -f ".env.production" ]; then
    echo -e "${BLUE}📝 Loading .env.production file${NC}"
    export $(grep -v '^#' .env.production | xargs)
    echo "NEXT_PUBLIC_FRONTEND_URL: $NEXT_PUBLIC_FRONTEND_URL"
    echo "NEXT_PUBLIC_API_URL: $NEXT_PUBLIC_API_URL"
    echo "NODE_ENV: $NODE_ENV"
    echo "PORT: $PORT"
elif [ -f ".env" ]; then
    echo -e "${BLUE}📝 Loading .env file${NC}"
    export $(grep -v '^#' .env | xargs)
    echo "NEXT_PUBLIC_FRONTEND_URL: $NEXT_PUBLIC_FRONTEND_URL"
    echo "NEXT_PUBLIC_API_URL: $NEXT_PUBLIC_API_URL"
    echo "NODE_ENV: $NODE_ENV"
    echo "PORT: $PORT"
else
    echo -e "${RED}❌ Error: No environment variable file found!${NC}"
    echo -e "${RED}Required: .env.production or .env file${NC}"
    echo -e "${RED}Deployment aborted.${NC}"
    exit 1
fi

# Check Node.js and npm versions
echo -e "${BLUE}🔍 Environment information:${NC}"
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Validate environment variables
echo -e "${BLUE}🔍 Environment validation:${NC}"
if [ -z "$NEXT_PUBLIC_FRONTEND_URL" ]; then
    echo -e "${YELLOW}⚠️ NEXT_PUBLIC_FRONTEND_URL is not set${NC}"
fi
if [ -z "$NEXT_PUBLIC_API_URL" ]; then
    echo -e "${YELLOW}⚠️ NEXT_PUBLIC_API_URL is not set${NC}"
fi
echo -e "${GREEN}✅ Environment variables loaded${NC}"

# Install/update node modules
echo -e "${YELLOW}📦 Installing/updating dependencies...${NC}"
npm install --production=false

# Clean macOS hidden files before build
echo -e "${YELLOW}🧹 Cleaning macOS hidden files...${NC}"
npm run clean:macos

# Build with increased Node.js memory
echo -e "${YELLOW}🔨 Building project (with increased memory allocation)...${NC}"
NODE_OPTIONS="--max-old-space-size=2048" npm run build

# Create log directory
mkdir -p logs

# Stop PM2 application (if exists)
echo -e "${YELLOW}⏹️ Stopping existing PM2 application...${NC}"
pm2 stop gamehub-next 2>/dev/null || echo "No existing app is running."

# Delete PM2 application (if exists)
echo -e "${YELLOW}🗑️ Deleting existing PM2 application...${NC}"
pm2 delete gamehub-next 2>/dev/null || echo "No app to delete."

# Start new application with PM2
echo -e "${YELLOW}🚀 Starting new application with PM2...${NC}"
pm2 start ecosystem.config.js --env production

# Save PM2 process list
echo -e "${YELLOW}💾 Saving PM2 process list...${NC}"
pm2 save

# Check PM2 status
echo -e "${GREEN}✅ PM2 process status:${NC}"
pm2 status

# Log check (optional)
echo -e "${BLUE}📋 Useful PM2 commands:${NC}"
echo -e "${BLUE}  View logs: pm2 logs gamehub-next${NC}"
echo -e "${BLUE}  Monitor: pm2 monit${NC}"
echo -e "${BLUE}  Restart: pm2 restart gamehub-next${NC}"
echo -e "${BLUE}  Stop: pm2 stop gamehub-next${NC}"
echo -e "${BLUE}  Delete: pm2 delete gamehub-next${NC}"

echo -e "${GREEN}🎉 Redeployment complete!${NC}"
echo -e "${GREEN}Application is running at ${NEXT_PUBLIC_FRONTEND_URL:-http://localhost:3000}${NC}"
echo -e "${BLUE}API endpoint: ${NEXT_PUBLIC_API_URL:-https://api.domain.com}${NC}"
