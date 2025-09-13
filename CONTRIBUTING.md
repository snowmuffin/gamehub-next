# Contributing

Thanks for contributing to this project! This guide covers local setup and quality checks.

## Prerequisites

- Node.js 20+
- Yarn (via corepack) or npm

## Install

```
yarn install
```

## Run locally

```
yarn dev
```

## Quality checks

- Lint: `yarn lint`
- Fix lint: `yarn lint:fix`
- Format: `yarn format`
- Type-check: `yarn type-check`

Commits run pre-commit hooks (lint-staged) to keep the codebase tidy.

## Environment

Provide `.env.local`. See `ENVIRONMENT_SETUP.md` for more.

## Conventions

- Use TypeScript and type imports where possible.
- Keep logs quiet in production. Prefer `console.warn`/`console.error` only for important events.
- Prefer `shared/api/request.ts` for HTTP calls.
