#!/usr/bin/env bash

set -ex;

docker build \
    --file Danofer.build.Dockerfile \
    --tag "${DOCKER_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}" \
    .;
