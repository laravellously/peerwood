ARG BASE_IMAGE=node:20-alpine
FROM ${BASE_IMAGE} as base

RUN mkdir /app
WORKDIR /app

# Required for building the api and web distributions
ENV NODE_ENV development

FROM base as dependencies

COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
COPY package.json package.json
COPY web/package.json web/package.json
COPY api/package.json api/package.json
COPY yarn.lock yarn.lock

RUN --mount=type=cache,target=/root/.yarn/berry/cache \
    --mount=type=cache,target=/root/.cache yarn install --immutable

COPY redwood.toml .
COPY graphql.config.js .

FROM dependencies as web_build

COPY web web
RUN yarn rw build web

FROM dependencies as api_build

COPY api api
RUN yarn rw build api

FROM dependencies

ENV NODE_ENV production

COPY --from=web_build /app/web/dist /app/web/dist
COPY --from=api_build /app/api /app/api
COPY --from=api_build /app/node_modules/.prisma /app/node_modules/.prisma

ENV REDWOOD_ENV_BASE_URL=https://peerwood.fly.dev
ENV REDWOOD_ENV_SCREENSHOT_URL=https://peerwood.fly.dev
ENV RWJS_EXP_SSR_GRAPHQL_ENDPOINT=http://127.0.0.1:8910/.redwood/functions/graphql

COPY .fly .fly

ENTRYPOINT ["sh"]
CMD [".fly/start.sh"]
