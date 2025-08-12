import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // API 요청에 대한 로깅 추가
  if (pathname.startsWith("/api/")) {
    console.log("🔄 Middleware - API 요청 감지:", {
      method: request.method,
      pathname,
      url: request.url,
      timestamp: new Date().toISOString()
    });
  }

  // CORS 설정
  const response = NextResponse.next();

  // 허용할 origin들 (환경변수 기반)
  const baseOrigins = [
    "http://REDACTED_IP:4000", // 백엔드 IP
    process.env.NEXT_PUBLIC_API_URL || "https://api.yourdomain.com", // 백엔드 도메인
    `http://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "se.yourdomain.com"}`, // 프론트 도메인 (HTTP)
    process.env.NEXT_PUBLIC_FRONTEND_URL || "https://se.yourdomain.com", // 프론트 도메인 (HTTPS)
    "http://localhost:3000", // 로컬 개발
    "https://localhost:3000" // 로컬 개발 (HTTPS)
  ];

  // 추가 허용 도메인들 (환경변수에서 읽기)
  const additionalOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS 
    ? process.env.NEXT_PUBLIC_ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
    : [];

  const allowedOrigins = [...baseOrigins, ...additionalOrigins];

  // 개발 환경에서 CORS 설정 로깅
  if (process.env.NODE_ENV === 'development' && pathname.startsWith("/api/")) {
    console.log("🔧 CORS 설정:", {
      allowedOrigins,
      requestOrigin: request.headers.get("origin"),
      timestamp: new Date().toISOString()
    });
  }

  const origin = request.headers.get("origin");

  // Origin이 허용된 목록에 있는지 확인
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT,OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
  );

  // OPTIONS 요청 처리 (preflight)
  if (request.method === "OPTIONS") {
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
    "/((?!_next/static|_next/image|favicon.ico).*)"
  ]
};
