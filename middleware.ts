import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // CORS 설정
  const response = NextResponse.next();

  // 허용할 origin들
  const allowedOrigins = [
    'http://13.125.32.159:4000',           // 백엔드 IP
    'https://api.snowmuffingame.com',      // 백엔드 도메인  
    'http://se.snowmuffingame.com',        // 프론트 도메인
    'https://se.snowmuffingame.com',       // 프론트 도메인 (HTTPS)
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
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
