DOCKER_TAG='latest'

# log into docker hub.
docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD

# build the docker image.
docker build -f ./Dockerfile -t bejebeje/react:$DOCKER_TAG -t bejebeje/react:$TRAVIS_BUILD_NUMBER --build-arg FONTAWESOME_NPM_AUTH_TOKEN=$FONTAWESOME_NPM_AUTH_TOKEN . --no-cache

# tag the docker image with latest.
docker tag bejebeje/react:$DOCKER_TAG $DOCKER_USERNAME/bejebeje/react:$DOCKER_TAG

# tag the docker image with build number.
docker tag bejebeje/react:$DOCKER_TAG $DOCKER_USERNAME/bejebeje/react:$TRAVIS_BUILD_NUMBER

# push the docker image (tagged latest) to docker hub.
docker push bejebeje/react:$DOCKER_TAG

# push the docker image (tagged with build number) to docker hub.
docker push bejebeje/react:$TRAVIS_BUILD_NUMBER