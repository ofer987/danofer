#!/usr/bin/env bash

set -ex;

server_user='root';

# Copy configuration, Dockerfile and docker-compose
scp \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i "../${SERVER_RSA}" \
    "${CONFIGURATION_PATH} Danofer.run.Dockerfile docker-compose.yml" "${server_user}@${IP_ADDRESS}:./";

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
