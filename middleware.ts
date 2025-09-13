import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Log API requests
  if (pathname.startsWith("/api/")) {
    console.log("🔄 Middleware - API request detected:", {
      method: request.method,
      pathname,
      url: request.url,
      timestamp: new Date().toISOString()
    });
  }

  // CORS configuration
  const response = NextResponse.next();

  // Allowed origins (from environment variables)
  const baseOrigins = [
    process.env.NEXT_PUBLIC_BACKEND_URL || "",
    process.env.NEXT_PUBLIC_API_URL || "https://api.yourdomain.com", // backend domain
    `http://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "se.yourdomain.com"}`, // frontend domain (HTTP)
    process.env.NEXT_PUBLIC_FRONTEND_URL || "https://se.yourdomain.com", // frontend domain (HTTPS)
    "http://localhost:3000", // local development
    "https://localhost:3000" // local development (HTTPS)
  ];

  // Additional allowed origins (comma-separated in env var)
  const additionalOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS
    ? process.env.NEXT_PUBLIC_ALLOWED_ORIGINS.split(",").map((origin) => origin.trim())
    : [];

  const allowedOrigins = [...baseOrigins, ...additionalOrigins];

  // Log CORS config in development
  if (process.env.NODE_ENV === "development" && pathname.startsWith("/api/")) {
    console.log("🔧 CORS config:", {
      allowedOrigins,
      requestOrigin: request.headers.get("origin"),
      timestamp: new Date().toISOString()
    });
  }

  const origin = request.headers.get("origin");

  // Apply Access-Control-Allow-Origin only for allowed origins
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT,OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
  );

  // Handle OPTIONS preflight requests
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
