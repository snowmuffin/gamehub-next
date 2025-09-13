# Environment Variables Configuration

This project uses environment variables to support different domains and URLs per environment.

## Environment variable files

- `.env.example` - Environment variable template (committed to VCS)
- `.env.local` - Development environment settings (excluded from VCS)
- `.env.production` - Production environment settings (used on the server)

## How to configure

### 1. Development configuration

```bash
# .env.local file is already created
cp .env.example .env.local
```

Edit the `.env.local` file to match your development environment:

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

### 2. Production configuration

On the server, create a `.env.production` file or set environment variables directly:

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

## Environment variables explained

| Variable                      | Description         | Development example                     | Production example                      |
| ----------------------------- | ------------------- | --------------------------------------- | --------------------------------------- |
| `NODE_ENV`                    | Node.js environment | `development`                           | `production`                            |
| `PORT`                        | Server port         | `3000`                                  | `3000`                                  |
| `NEXT_PUBLIC_FRONTEND_URL`    | Frontend full URL   | `http://localhost:3000`                 | `https://yourdomain.com`                |
| `NEXT_PUBLIC_FRONTEND_DOMAIN` | Frontend domain     | `localhost:3000`                        | `yourdomain.com`                        |
| `NEXT_PUBLIC_API_URL`         | API base URL        | `https://api.yourdomain.com`            | `https://api.yourdomain.com`            |
| `NEXT_PUBLIC_API_DOMAIN`      | API domain          | `api.yourdomain.com`                    | `api.yourdomain.com`                    |
| `NEXT_PUBLIC_STEAM_AUTH_URL`  | Steam auth URL      | `https://api.yourdomain.com/auth/steam` | `https://api.yourdomain.com/auth/steam` |

## Usage

In the application, use the utility functions in `shared/utils/environment.ts` to access environment variables:

```typescript
import {
  getFrontendUrl,
  getApiUrl,
  getSteamAuthUrl,
  createUrl,
  createApiUrl
} from "@/shared/utils/environment";

// Example of URL creation
const homeUrl = createUrl("/dashboard");
const apiEndpoint = createApiUrl("/auth/steam");
```

## API routing

- Development: API requests are sent directly to the API server configured via environment variables
- Production: Requests are proxied through the `/api` path using Next.js rewrites

## Run dev server

```bash
npm run dev
```

When the server starts, you'll see environment configuration details in the console:

```
🔧 Rewrite config: {
  environment: 'development',
  isProd: false,
  apiUrl: 'https://api.yourdomain.com',
  timestamp: '2025-01-12T08:57:54.205Z'
}
```

You can also inspect environment configuration in the browser DevTools:

```
🌍 Environment Configuration: {
  NODE_ENV: 'development',
  FRONTEND_URL: 'http://localhost:3000',
  API_URL: 'https://api.yourdomain.com',
  STEAM_AUTH_URL: 'https://api.yourdomain.com/auth/steam',
  ...
}
```
