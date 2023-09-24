#!/usr/bin/env bash

set -ex;

server_user='root';

# Build the Docker image
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i "../${SERVER_RSA}" \
    "${server_user}@${IP_ADDRESS}" \
    "docker build \
        --file Danofer.run.Dockerfile \
        --build-arg DOCKER_USERNAME=${DOCKER_USERNAME} \
        --build-arg IMAGE_NAME=${IMAGE_NAME} \
        --build-arg VERSION=${VERSION} \
        --tag "${IMAGE_NAME}_run:latest" \
        ./;";
