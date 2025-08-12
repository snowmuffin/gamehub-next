# Environment Variables Configuration

이 프로젝트는 환경별로 다른 도메인과 URL을 사용할 수 있도록 환경변수로 구성되어 있습니다.

## 환경 변수 파일들

- `.env.example` - 환경변수 템플릿 (버전 관리에 포함)
- `.env.local` - 개발 환경용 설정 (버전 관리에서 제외)
- `.env.production` - 프로덕션 환경용 설정 (서버에서만 사용)

## 설정 방법

### 1. 개발 환경 설정

```bash
# .env.local 파일이 이미 생성되어 있습니다
cp .env.example .env.local
```

`.env.local` 파일에서 개발 환경에 맞게 설정을 수정하세요:

```env
# Development Environment Configuration
NODE_ENV=development
PORT=3000

# Frontend Configuration
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_FRONTEND_DOMAIN=localhost:3000

# API Configuration
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_API_DOMAIN=api.yourdomain.com

# Authentication
NEXT_PUBLIC_STEAM_AUTH_URL=https://api.yourdomain.com/auth/steam
```

### 2. 프로덕션 환경 설정

서버에서 `.env.production` 파일을 생성하거나 환경변수를 직접 설정하세요:

```env
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
```

## 환경변수 설명

| 변수명 | 설명 | 개발환경 예시 | 프로덕션 예시 |
|--------|------|---------------|---------------|
| `NODE_ENV` | Node.js 환경 | `development` | `production` |
| `PORT` | 서버 포트 | `3000` | `3000` |
| `NEXT_PUBLIC_FRONTEND_URL` | 프론트엔드 전체 URL | `http://localhost:3000` | `https://yourdomain.com` |
| `NEXT_PUBLIC_FRONTEND_DOMAIN` | 프론트엔드 도메인 | `localhost:3000` | `yourdomain.com` |
| `NEXT_PUBLIC_API_URL` | API 서버 전체 URL | `https://api.yourdomain.com` | `https://api.yourdomain.com` |
| `NEXT_PUBLIC_API_DOMAIN` | API 서버 도메인 | `api.yourdomain.com` | `api.yourdomain.com` |
| `NEXT_PUBLIC_STEAM_AUTH_URL` | Steam 인증 URL | `https://api.yourdomain.com/auth/steam` | `https://api.yourdomain.com/auth/steam` |

## 사용법

애플리케이션에서는 `shared/utils/environment.ts`의 유틸리티 함수들을 사용하여 환경변수에 접근합니다:

```typescript
import { 
  getFrontendUrl, 
  getApiUrl, 
  getSteamAuthUrl,
  createUrl,
  createApiUrl 
} from '@/shared/utils/environment';

// URL 생성 예시
const homeUrl = createUrl('/dashboard');
const apiEndpoint = createApiUrl('/auth/steam');
```

## API 라우팅

- **개발 환경**: API 요청은 환경변수에 설정된 API 서버로 직접 전송
- **프로덕션 환경**: Next.js의 rewrite 기능을 통해 `/api` 경로로 프록시

## 개발 서버 실행

```bash
npm run dev
```

서버가 시작되면 콘솔에서 환경 설정 정보를 확인할 수 있습니다:

```
🔧 Rewrite 설정: {
  environment: 'development',
  isProd: false,
  apiUrl: 'https://api.yourdomain.com',
  timestamp: '2025-01-12T08:57:54.205Z'
}
```

브라우저 개발자 도구에서도 환경 설정 정보를 확인할 수 있습니다:

```
🌍 Environment Configuration: {
  NODE_ENV: 'development',
  FRONTEND_URL: 'http://localhost:3000',
  API_URL: 'https://api.yourdomain.com',
  STEAM_AUTH_URL: 'https://api.yourdomain.com/auth/steam',
  ...
}
```
