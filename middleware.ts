import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // API 요청에 대한 로깅 추가
  if (pathname.startsWith('/api/')) {
    console.log('🔄 Middleware - API 요청 감지:', {
      method: request.method,
      pathname,
      url: request.url,
      timestamp: new Date().toISOString()
    });
  }

  // CORS 설정
  const response = NextResponse.next();

  // 허용할 origin들
  const allowedOrigins = [
    'http://REDACTED_IP:4000',           // 백엔드 IP
    'https://REDACTED_API',      // 백엔드 도메인  
    'http://REDACTED_DOMAIN',        // 프론트 도메인
    'https://REDACTED_DOMAIN',       // 프론트 도메인 (HTTPS)
    'http://localhost:3000',               // 로컬 개발
    'https://localhost:3000',              // 로컬 개발 (HTTPS)
  ];

  const origin = request.headers.get('origin');

  // Origin이 허용된 목록에 있는지 확인
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET,DELETE,PATCH,POST,PUT,OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // OPTIONS 요청 처리 (preflight)
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: response.headers });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths including API routes for CORS handling
     * - /((?!_next/static|_next/image|favicon.ico).*)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
