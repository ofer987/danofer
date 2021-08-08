#!/usr/bin/env bash

set -ex;

docker login --username="${DOCKER_USERNAME}" --password="${DOCKER_PASSWORD}";

docker push "${DOCKER_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}";
