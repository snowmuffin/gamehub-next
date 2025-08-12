# API 요청 문제 해결 가이드

## 🔍 문제 상황

브라우저에서 API 요청이 `https://se.snowmuffingame.com/api/user/rankings`로 가고 있지만, 이는 `https://api.snowmuffingame.com/api/user/rankings`로 가야 합니다.

## 🚀 해결 방법

### 1. 디버그 페이지 확인

브라우저에서 `/debug/api` 페이지로 이동하여 API 요청이 어떻게 처리되는지 확인하세요.

### 2. 환경 변수 확인

프로덕션 환경에서 다음 환경 변수가 올바르게 설정되어 있는지 확인하세요:

```bash
# EC2 서버에서 확인
echo $NEXT_PUBLIC_API_URL
echo $NODE_ENV
```

### 3. Next.js rewrite 로그 확인

콘솔 로그에서 다음 메시지를 확인하세요:

```
🔄 Next.js rewrites 설정 적용됨
```

### 4. 브라우저 개발자 도구 확인

- Network 탭에서 실제 요청 URL 확인
- Console 탭에서 API 요청 로그 확인:
  - `📤 API 요청`
  - `✅ API 응답 성공` 또는 `❌ API 응답 실패`

### 5. 서버 재시작

rewrite 설정이 적용되지 않았을 경우:

```bash
# PM2 재시작
./restart.sh

# 또는 전체 재배포
./deploy.sh
```

### 6. 캐시 정리

브라우저 및 Next.js 캐시 문제일 경우:

```bash
# yarn 캐시 정리
./yarn-clean.sh

# 브라우저에서 강력 새로고침 (Ctrl+Shift+R 또는 Cmd+Shift+R)
```

## 🔧 대안 솔루션

만약 rewrite가 계속 작동하지 않는다면, 다음 방법을 사용할 수 있습니다:

### 1. 환경 변수로 직접 API URL 사용

`.env.production` 파일에서:

```
NEXT_PUBLIC_API_URL=https://api.snowmuffingame.com
```

### 2. Nginx 리버스 프록시 사용

EC2 서버에서 Nginx를 사용하여 `/api` 요청을 백엔드로 프록시:

```nginx
location /api/ {
    proxy_pass https://api.snowmuffingame.com/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

## 📋 체크리스트

- [ ] `/debug/api` 페이지에서 테스트 실행
- [ ] 환경 변수 `NEXT_PUBLIC_API_URL` 확인
- [ ] Next.js rewrite 로그 확인
- [ ] PM2 재시작 수행
- [ ] 브라우저 캐시 정리
- [ ] Network 탭에서 실제 요청 URL 확인

## 🐛 일반적인 원인

1. **프로덕션 빌드에서 rewrite 미적용**: 개발 환경에서는 작동하지만 프로덕션에서 작동하지 않는 경우
2. **환경 변수 문제**: NODE_ENV나 기타 환경 변수가 올바르게 설정되지 않은 경우
3. **캐시 문제**: 브라우저나 Next.js 캐시로 인해 이전 설정이 유지되는 경우
4. **CDN/프록시 설정**: CDN이나 리버스 프록시에서 rewrite 설정을 무시하는 경우
