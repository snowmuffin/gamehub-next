#!/bin/bash

# Deployment script for GameHub Next.js
# Reads SSH configuration from .env file and deploys to EC2

set -e  # Stop script on error

echo "🚀 Starting GameHub deployment..."

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Load environment variables from .env file
if [ ! -f ".env" ]; then
    echo -e "${RED}❌ Error: .env file not found!${NC}"
    exit 1
fi

# Load .env file
export $(grep -v '^#' .env | grep -v '^$' | xargs)

# Validate required variables
if [ -z "$SSH_KEY_PATH" ] || [ -z "$SSH_USER" ] || [ -z "$SSH_HOST" ] || [ -z "$DEPLOY_DIR" ]; then
    echo -e "${RED}❌ Error: Missing required environment variables in .env!${NC}"
    echo -e "${RED}Required: SSH_KEY_PATH, SSH_USER, SSH_HOST, DEPLOY_DIR${NC}"
    exit 1
fi

# Expand tilde in SSH_KEY_PATH
SSH_KEY_PATH="${SSH_KEY_PATH/#\~/$HOME}"

# Validate SSH key exists
if [ ! -f "$SSH_KEY_PATH" ]; then
    echo -e "${RED}❌ Error: SSH key not found at $SSH_KEY_PATH${NC}"
    exit 1
fi

echo -e "${BLUE}📝 Configuration:${NC}"
echo -e "  SSH Key: $SSH_KEY_PATH"
echo -e "  Server: $SSH_USER@$SSH_HOST"
echo -e "  Directory: $DEPLOY_DIR"
echo ""

# Git operations
echo -e "${YELLOW}📥 Committing and pushing changes...${NC}"
git add -A
read -p "Enter commit message (or press Enter for default): " COMMIT_MSG
if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Deploy $(date '+%Y-%m-%d %H:%M:%S')"
fi
git commit -m "$COMMIT_MSG" || echo "No changes to commit"
git push

echo ""
echo -e "${YELLOW}🚀 Deploying to server...${NC}"

# SSH command to deploy
ssh -i "$SSH_KEY_PATH" "$SSH_USER@$SSH_HOST" << EOF
    set -e
    cd $DEPLOY_DIR
    echo "📥 Pulling latest code..."
    git pull
    echo "📦 Building application..."
    npm run build
    echo "🔄 Restarting PM2..."
    pm2 restart gamehub-next
    echo "✅ Deployment complete!"
EOF

echo ""
echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
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
