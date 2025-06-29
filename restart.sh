#!/bin/bash

# 빠른 재시작 스크립트
# 코드 변경 후 빠르게 재시작할 때 사용

set -e

echo "🔄 GameHub Next.js 빠른 재시작..."

# 색상 정의
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 현재 디렉토리를 프로젝트 디렉토리로 사용
PROJECT_DIR=$(pwd)
cd "$PROJECT_DIR"

echo "📂 프로젝트 디렉토리: $PROJECT_DIR"

# 빌드
echo -e "${YELLOW}🔨 프로젝트 빌드...${NC}"
yarn build

# PM2 재시작
echo -e "${YELLOW}🔄 PM2 애플리케이션 재시작...${NC}"
pm2 restart gamehub-next

# 상태 확인
echo -e "${GREEN}✅ PM2 프로세스 상태:${NC}"
pm2 status

echo -e "${GREEN}🎉 재시작 완료!${NC}"
