#!/bin/bash

echo "🔧 HTTPS 지원 도메인 접속을 위한 nginx 설정 중..."

# nginx 설정 파일 경로
NGINX_CONF="/opt/homebrew/etc/nginx/nginx.conf"
PROJECT_DIR="/Volumes/X31/Documents/snowmuffin/gamehub-next"
DOMAIN="yourdomain.com"

# SSL 인증서 생성 함수
create_ssl_certificate() {
    echo "🔐 SSL 인증서 생성 중..."
    
    # SSL 디렉토리 생성
    sudo mkdir -p /etc/ssl/certs
    sudo mkdir -p /etc/ssl/private
    
    # 임시 openssl 설정 파일 생성
    cat > /tmp/openssl.conf << EOF
[req]
distinguished_name = req_distinguished_name
x509_extensions = v3_req
prompt = no

[req_distinguished_name]
C = KR
ST = Seoul
L = Seoul
O = SnowMuffin
OU = GameHub
CN = $DOMAIN

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = $DOMAIN
DNS.2 = *.$DOMAIN
EOF

    # 자체 서명 SSL 인증서 생성
    sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout /etc/ssl/private/$DOMAIN.key \
        -out /etc/ssl/certs/$DOMAIN.crt \
        -config /tmp/openssl.conf \
        -extensions v3_req
    
    # 임시 설정 파일 삭제
    rm /tmp/openssl.conf
    
    # SSL 파일 권한 설정
    sudo chmod 600 /etc/ssl/private/$DOMAIN.key
    sudo chmod 644 /etc/ssl/certs/$DOMAIN.crt
    
    echo "✅ SSL 인증서 생성 완료: /etc/ssl/certs/$DOMAIN.crt"
}

# 기존 nginx 중지
echo "📛 기존 nginx 프로세스 중지 중..."
sudo nginx -s stop 2>/dev/null || true

# nginx 설정 백업
echo "💾 nginx 설정 백업 중..."
sudo cp "$NGINX_CONF" "$NGINX_CONF.backup" 2>/dev/null || true

# SSL 인증서 생성
create_ssl_certificate

# nginx 설정 생성
echo "📝 nginx HTTPS 설정 파일 생성 중..."
sudo tee "$NGINX_CONF" > /dev/null << 'EOF'
events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    # HTTP to HTTPS redirect
    server {
        listen 80;
        server_name test.yourdomain.com;
        return 301 https://$server_name$request_uri;
    }

    # HTTPS server
    server {
        listen 443 ssl;
        http2 on;
        server_name test.yourdomain.com;

        # SSL Certificate paths
        ssl_certificate /etc/ssl/certs/test.yourdomain.com.crt;
        ssl_certificate_key /etc/ssl/private/test.yourdomain.com.key;

        # SSL configuration
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384;
        ssl_prefer_server_ciphers off;
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;

        # Security headers
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";

        # Next.js 개발 서버로 프록시
        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
            proxy_cache_bypass $http_upgrade;
        }

        # Next.js Hot Reload를 위한 WebSocket 지원 (HTTPS)
        location /_next/webpack-hmr {
            proxy_pass http://localhost:3000/_next/webpack-hmr;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
        }
    }
}
EOF

# nginx 설정 테스트
echo "🧪 nginx 설정 테스트 중..."
if sudo nginx -t; then
    echo "✅ nginx 설정 검증 완료"
else
    echo "❌ nginx 설정 오류 발생"
    echo "🔄 백업 설정으로 복원 중..."
    sudo cp "$NGINX_CONF.backup" "$NGINX_CONF"
    exit 1
fi

# nginx 시작
echo "🚀 nginx 시작 중..."
sudo nginx

echo ""
echo "🎉 HTTPS 설정 완료!"
echo ""
echo "🌐 이제 다음 URL로 안전하게 접속할 수 있습니다:"
echo "   https://test.yourdomain.com (HTTPS - 권장)"
echo "   http://test.yourdomain.com (HTTP - 자동으로 HTTPS로 리다이렉트)"
echo ""
echo "📋 추가 정보:"
echo "   - Next.js 개발 서버: http://localhost:3000"
echo "   - nginx 설정 파일: $NGINX_CONF"
echo "   - SSL 인증서: /etc/ssl/certs/$DOMAIN.crt"
echo "   - SSL 개인키: /etc/ssl/private/$DOMAIN.key"
echo ""
echo "🔧 nginx 관리 명령어:"
echo "   - nginx 중지: sudo nginx -s stop"
echo "   - nginx 재시작: sudo nginx -s reload"
echo "   - 설정 복원: sudo cp $NGINX_CONF.backup $NGINX_CONF"
echo ""
echo "⚠️  브라우저에서 자체 서명 인증서 경고가 나타날 수 있습니다."
echo "    개발 환경에서는 '고급' > '안전하지 않은 사이트로 이동'을 클릭하세요."
