#!/bin/bash

# 포트 80에서 3000으로 포워딩하는 스크립트
# 사용법: sudo ./port-forward.sh

echo "포트 80에서 3000으로 포워딩을 설정합니다..."

# 기존 규칙 제거 (오류가 있어도 무시)
echo "기존 포워딩 규칙 제거 중..."
sudo pfctl -F nat 2>/dev/null || true

# 포트 포워딩 규칙 생성
echo "포트 포워딩 규칙 생성 중..."
echo "rdr pass on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 3000" | sudo pfctl -ef - 2>/dev/null || {
    echo "pfctl을 사용한 포워딩에 실패했습니다."
    echo ""
    echo "대신 다음 방법들을 사용할 수 있습니다:"
    echo ""
    echo "1. nginx 리버스 프록시 설정:"
    echo "   brew install nginx"
    echo "   sudo nginx -s stop 2>/dev/null || true"
    echo ""
    echo "2. 도메인에 포트 번호 포함:"
    echo "   http://test.yourdomain.com:3000"
    echo ""
    echo "3. 개발용 HTTPS 서버 실행:"
    echo "   npm run dev:https"
    echo ""
    exit 1
}

echo "✅ 포트 포워딩이 설정되었습니다!"
echo "이제 http://test.yourdomain.com 으로 접속할 수 있습니다."
echo ""
echo "포워딩 해제하려면:"
echo "sudo pfctl -F nat"
