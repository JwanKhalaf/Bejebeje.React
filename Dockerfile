# set base image as alpine-node version 11.
FROM mhart/alpine-node:11 AS builder

# fontawesome pro auth token
ARG FONTAWESOME_NPM_AUTH_TOKEN

# set the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD
# instructions that follows the WORKDIR instruction.
WORKDIR /app

# remember, our current working directory within the container is /app
# we now copy everything (except stuff listed in .dockerignore)
# from local machine to /app (in the container).
COPY . .

# export the fontawesome secret key
RUN export FONTAWESOME_NPM_AUTH_TOKEN=$FONTAWESOME_NPM_AUTH_TOKEN

# install dependencies as normal.
RUN yarn install

# run the command for building deployment assets.
RUN yarn run build

# create a fresh image, this will be a light image because we are only
# going to put in it the built assets and nothing else.
FROM mhart/alpine-node

# install a light-weight server of static files.
# https://www.npmjs.com/package/serve
RUN yarn global add serve

# set the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD
# instructions that follows the WORKDIR instruction.
WORKDIR /app

# copy our built assets from the first container to the current one we are in.
COPY --from=builder /app/dist .

# copy the robots.txt file into the current /app directory of the image.
COPY --from=builder /app/robots.txt .

# run the light-weight server on port 80.
CMD ["serve", "-p", "80", "-s", "."]