FROM node:8.16.0-jessie AS node_base

# getting dependencies
FROM node_base as deps
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# building the assets
FROM node_base as build
WORKDIR /app
COPY --from=deps /app/node_modules ./
COPY . /app
RUN yarn build

# final assets
FROM scratch AS ui
COPY --from=build /app/dist /app