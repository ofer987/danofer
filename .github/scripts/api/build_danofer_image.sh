#!/usr/bin/env bash

set -ex;

# Build the Docker image
ssh \
  -o StrictHostKeyChecking=no \
  -o UserKnownHostsFile=/dev/null \
  -i "../${SERVER_RSA_PATH}" \
  "${USERNAME}@${OFER_TO_DOMAIN}" \
  "docker build \
    --file api/Danofer.run.Dockerfile \
    --build-arg DOCKER_USERNAME=${DOCKER_USERNAME} \
    --build-arg IMAGE_NAME=${API_IMAGE_NAME} \
    --build-arg VERSION=${VERSION} \
    --tag "${API_IMAGE_NAME}_run:latest" \
    ./;";
