/**
 * 환경변수 기반 URL 설정 유틸리티
 */

// 프론트엔드 URL 가져오기
export const getFrontendUrl = (): string => {
  return process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
};

// API URL 가져오기
export const getApiUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_URL || '';
};

// Steam 인증 URL 가져오기
export const getSteamAuthUrl = (): string => {
  return process.env.NEXT_PUBLIC_STEAM_AUTH_URL || `${getApiUrl()}/auth/steam`;
};

// 도메인 정보 가져오기
export const getFrontendDomain = (): string => {
  return process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || 'localhost:3000';
};

export const getApiDomain = (): string => {
  return process.env.NEXT_PUBLIC_API_DOMAIN || '';
};

// 환경별 설정 확인
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};

// URL 생성 헬퍼
export const createUrl = (path: string, baseUrl?: string): string => {
  const base = baseUrl || getFrontendUrl();
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

export const createApiUrl = (path: string): string => {
  const base = getApiUrl();
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

// 환경변수 상태 로깅 (개발 모드에서만)
export const logEnvironmentInfo = (): void => {
  if (isDevelopment() && typeof window !== 'undefined') {
    console.log('🌍 Environment Configuration:', {
      NODE_ENV: process.env.NODE_ENV,
      FRONTEND_URL: getFrontendUrl(),
      FRONTEND_DOMAIN: getFrontendDomain(),
      API_URL: getApiUrl(),
      API_DOMAIN: getApiDomain(),
      STEAM_AUTH_URL: getSteamAuthUrl(),
      IS_DEVELOPMENT: isDevelopment(),
      IS_PRODUCTION: isProduction(),
    });
  }
};
