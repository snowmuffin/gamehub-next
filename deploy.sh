#!/bin/bash

# PM2 재배포 스크립트
# 이 스크립트는 Next.js 애플리케이션을 PM2로 재배포합니다.

set -e  # 에러 발생시 스크립트 중단

echo "🚀 GameHub Next.js PM2 재배포 시작..."

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 현재 디렉토리를 프로젝트 디렉토리로 사용
PROJECT_DIR=$(pwd)
cd "$PROJECT_DIR"

echo -e "${BLUE}📂 프로젝트 디렉토리: $PROJECT_DIR${NC}"

# Git pull (선택사항 - 주석 해제하여 사용)
# echo -e "${YELLOW}📥 최신 코드 가져오기...${NC}"
# git pull origin main

# Node.js 및 npm 버전 확인
echo -e "${BLUE}🔍 환경 정보:${NC}"
echo "Node.js 버전: $(node --version)"
echo "npm 버전: $(npm --version)"

# Node modules 설치/업데이트
echo -e "${YELLOW}📦 의존성 설치/업데이트...${NC}"
npm install

# 빌드
echo -e "${YELLOW}🔨 프로젝트 빌드...${NC}"
npm run build

# 로그 디렉토리 생성
mkdir -p logs

# PM2로 애플리케이션 중지 (존재하는 경우)
echo -e "${YELLOW}⏹️ 기존 PM2 애플리케이션 중지...${NC}"
pm2 stop gamehub-next 2>/dev/null || echo "기존 앱이 실행 중이지 않습니다."

# PM2로 애플리케이션 삭제 (존재하는 경우)
echo -e "${YELLOW}🗑️ 기존 PM2 애플리케이션 삭제...${NC}"
pm2 delete gamehub-next 2>/dev/null || echo "삭제할 앱이 없습니다."

# PM2로 새 애플리케이션 시작
echo -e "${YELLOW}🚀 PM2로 새 애플리케이션 시작...${NC}"
pm2 start ecosystem.config.js --env production

# PM2 프로세스 저장
echo -e "${YELLOW}💾 PM2 프로세스 목록 저장...${NC}"
pm2 save

# PM2 상태 확인
echo -e "${GREEN}✅ PM2 프로세스 상태:${NC}"
pm2 status

# 로그 확인 (선택사항)
echo -e "${BLUE}📋 실시간 로그를 보려면 다음 명령어를 사용하세요:${NC}"
echo -e "${BLUE}pm2 logs gamehub-next${NC}"

echo -e "${GREEN}🎉 재배포 완료!${NC}"
echo -e "${GREEN}애플리케이션이 http://localhost:3000 에서 실행 중입니다.${NC}"
