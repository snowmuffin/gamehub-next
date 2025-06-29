#!/bin/bash

# Yarn 캐시 정리 및 재설치 스크립트
# 패키지 관련 문제가 발생했을 때 사용

set -e

echo "🧹 Yarn 캐시 정리 및 재설치..."

# 색상 정의
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 현재 디렉토리 확인
PROJECT_DIR=$(pwd)
echo -e "${BLUE}📂 프로젝트 디렉토리: $PROJECT_DIR${NC}"

# node_modules 삭제
echo -e "${YELLOW}🗑️ node_modules 폴더 삭제...${NC}"
rm -rf node_modules

# yarn 캐시 정리
echo -e "${YELLOW}🧹 yarn 캐시 정리...${NC}"
yarn cache clean

# .next 빌드 폴더 삭제
echo -e "${YELLOW}🗑️ .next 빌드 폴더 삭제...${NC}"
rm -rf .next

# yarn.lock 파일 확인
if [ -f "yarn.lock" ]; then
    echo -e "${GREEN}✅ yarn.lock 파일이 존재합니다${NC}"
else
    echo -e "${YELLOW}⚠️ yarn.lock 파일이 없습니다. 새로 생성됩니다.${NC}"
fi

# 새로 설치
echo -e "${YELLOW}📦 의존성 새로 설치...${NC}"
yarn install

# 빌드
echo -e "${YELLOW}🔨 프로젝트 빌드...${NC}"
yarn build

echo -e "${GREEN}✅ Yarn 캐시 정리 및 재설치 완료!${NC}"
echo -e "${BLUE}💡 이제 다음 명령어로 애플리케이션을 시작할 수 있습니다:${NC}"
echo -e "${BLUE}   ./deploy.sh${NC}"
