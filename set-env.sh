#!/bin/bash

# EC2 환경 변수 설정 스크립트
# 환경 변수를 설정하고 애플리케이션을 재시작합니다

set -e

echo "🔧 EC2 환경 변수 설정..."

# 색상 정의
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 현재 디렉토리 확인
PROJECT_DIR=$(pwd)
echo -e "${BLUE}📂 프로젝트 디렉토리: $PROJECT_DIR${NC}"

# .env.production 파일 생성
echo -e "${YELLOW}📝 .env.production 파일 생성...${NC}"
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

echo -e "${GREEN}✅ .env.production 파일이 생성되었습니다:${NC}"
cat .env.production

# 환경 변수 로드
echo -e "${YELLOW}📝 환경 변수 로드...${NC}"
export $(grep -v '^#' .env.production | xargs)

# 환경 변수 확인
echo -e "${BLUE}🔍 설정된 환경 변수:${NC}"
echo "NODE_ENV: $NODE_ENV"
echo "PORT: $PORT"
echo "NEXT_PUBLIC_FRONTEND_URL: $NEXT_PUBLIC_FRONTEND_URL"
echo "NEXT_PUBLIC_FRONTEND_DOMAIN: $NEXT_PUBLIC_FRONTEND_DOMAIN"
echo "NEXT_PUBLIC_API_URL: $NEXT_PUBLIC_API_URL"
echo "NEXT_PUBLIC_API_DOMAIN: $NEXT_PUBLIC_API_DOMAIN"
echo "NEXT_PUBLIC_STEAM_AUTH_URL: $NEXT_PUBLIC_STEAM_AUTH_URL"
echo "NEXT_PUBLIC_ALLOWED_ORIGINS: $NEXT_PUBLIC_ALLOWED_ORIGINS"

# PM2에 환경 변수 전달하여 재시작
if pm2 list | grep -q "gamehub-next"; then
    echo -e "${YELLOW}🔄 PM2 애플리케이션 재시작 (환경 변수 포함)...${NC}"
    
    # 환경 변수와 함께 PM2 재시작
    NODE_ENV=production \
    PORT=3000 \
    NEXT_PUBLIC_FRONTEND_URL=https://yourdomain.com \
    NEXT_PUBLIC_FRONTEND_DOMAIN=yourdomain.com \
    NEXT_PUBLIC_API_URL=https://api.yourdomain.com \
    NEXT_PUBLIC_API_DOMAIN=api.yourdomain.com \
    NEXT_PUBLIC_STEAM_AUTH_URL=https://api.yourdomain.com/auth/steam \
    pm2 restart gamehub-next --update-env
    
    echo -e "${GREEN}✅ PM2 애플리케이션이 새로운 환경 변수로 재시작되었습니다${NC}"
else
    echo -e "${YELLOW}⚠️ PM2 애플리케이션이 실행 중이지 않습니다${NC}"
    echo -e "${BLUE}💡 다음 명령어로 애플리케이션을 시작하세요:${NC}"
    echo -e "${BLUE}   ./deploy.sh${NC}"
fi

# PM2 상태 확인
echo -e "${BLUE}📋 PM2 상태:${NC}"
pm2 status

echo -e "${GREEN}🎉 환경 변수 설정 완료!${NC}"
echo -e "${BLUE}💡 브라우저에서 /debug/api 페이지를 확인해보세요${NC}"
