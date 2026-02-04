FROM node:lts AS base
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Development stage
FROM base AS development
EXPOSE 80
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "80"]

# Production build
FROM base AS build
RUN pnpm run build

# Production runtime
FROM nginx:mainline-alpine-slim AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80