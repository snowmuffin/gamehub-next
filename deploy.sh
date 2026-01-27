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
echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
git pull || {
    echo -e "${RED}❌ Git pull failed. Please resolve conflicts manually.${NC}"
    exit 1
}

echo -e "${YELLOW}📝 Committing changes...${NC}"
git add -A
read -p "Enter commit message (or press Enter for default): " COMMIT_MSG
if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Deploy $(date '+%Y-%m-%d %H:%M:%S')"
fi

if git commit -m "$COMMIT_MSG"; then
    echo -e "${YELLOW}⬆️  Pushing to remote...${NC}"
    git push || {
        echo -e "${RED}❌ Git push failed.${NC}"
        exit 1
    }
else
    echo -e "${BLUE}ℹ️  No changes to commit${NC}"
fi

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
