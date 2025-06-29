#!/bin/bash

# EC2 환경 설정 스크립트
# EC2 인스턴스에서 처음 배포할 때 사용

set -e

echo "🚀 EC2 환경에서 GameHub Next.js 초기 설정..."

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 현재 디렉토리 확인
PROJECT_DIR=$(pwd)
echo -e "${BLUE}📂 프로젝트 디렉토리: $PROJECT_DIR${NC}"

# 환경 변수 확인
echo -e "${BLUE}🔍 환경 변수 확인:${NC}"
echo "NODE_ENV: ${NODE_ENV:-'production'}"
echo "PORT: ${PORT:-'3000'}"

# Node.js 및 npm 버전 확인
echo -e "${BLUE}🔍 시스템 정보:${NC}"
echo "운영체제: $(uname -a)"
echo "Node.js 버전: $(node --version 2>/dev/null || echo '❌ Node.js가 설치되지 않음')"
echo "npm 버전: $(npm --version 2>/dev/null || echo '❌ npm이 설치되지 않음')"
echo "PM2 버전: $(pm2 --version 2>/dev/null || echo '❌ PM2가 설치되지 않음')"

# PM2가 설치되어 있지 않다면 설치
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}📦 PM2 설치 중...${NC}"
    npm install -g pm2
fi

# 로그 디렉토리 생성
echo -e "${YELLOW}📁 로그 디렉토리 생성...${NC}"
mkdir -p logs

# 환경 파일 확인
if [ -f ".env" ]; then
    echo -e "${GREEN}✅ .env 파일이 존재합니다${NC}"
else
    echo -e "${YELLOW}⚠️ .env 파일이 없습니다. 기본값을 사용합니다.${NC}"
fi

# 의존성 설치
echo -e "${YELLOW}📦 의존성 설치...${NC}"
npm install

# 빌드
echo -e "${YELLOW}🔨 프로젝트 빌드...${NC}"
npm run build

# PM2 startup 설정 (부팅시 자동 시작)
echo -e "${YELLOW}⚙️ PM2 startup 설정...${NC}"
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME || true

echo -e "${GREEN}✅ EC2 환경 설정이 완료되었습니다!${NC}"
echo -e "${BLUE}💡 이제 다음 명령어로 애플리케이션을 시작할 수 있습니다:${NC}"
echo -e "${BLUE}   ./deploy.sh${NC}"
