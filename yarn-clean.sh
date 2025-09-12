#!/bin/bash

# Yarn cache clean and reinstall script
# Use when package-related issues occur

set -e

echo "🧹 Cleaning Yarn cache and reinstalling..."

# Color definitions
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Show current directory
PROJECT_DIR=$(pwd)
echo -e "${BLUE}📂 Project directory: $PROJECT_DIR${NC}"

# Remove node_modules
echo -e "${YELLOW}🗑️ Removing node_modules folder...${NC}"
rm -rf node_modules

# Clean yarn cache
echo -e "${YELLOW}🧹 Cleaning yarn cache...${NC}"
yarn cache clean

# Remove .next build folder
echo -e "${YELLOW}🗑️ Removing .next build folder...${NC}"
rm -rf .next

# Check for yarn.lock
if [ -f "yarn.lock" ]; then
    echo -e "${GREEN}✅ yarn.lock file exists${NC}"
else
    echo -e "${YELLOW}⚠️ yarn.lock file missing. It will be created.${NC}"
fi

# Fresh install
echo -e "${YELLOW}📦 Installing dependencies fresh...${NC}"
yarn install

# Build
echo -e "${YELLOW}🔨 Building project...${NC}"
yarn build

echo -e "${GREEN}✅ Yarn cache clean and reinstall complete!${NC}"
echo -e "${BLUE}💡 You can now start the application with:${NC}"
echo -e "${BLUE}   ./deploy.sh${NC}"
