FROM node:20-alpine as node-builder

WORKDIR /app
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# RUN npm config set registry https://registry.npmmirror.com

COPY .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:stable-alpine as nginx-server

COPY --from=node-builder /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
