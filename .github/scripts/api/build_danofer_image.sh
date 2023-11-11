#!/usr/bin/env bash

set -ex;

# Build the Docker image
ssh \
  -o StrictHostKeyChecking=no \
  -o UserKnownHostsFile=/dev/null \
  -i "../${SERVER_RSA_PATH}" \
  "${USERNAME}@${OFER_TO_DOMAIN}" \
  "docker build \
    --file Danofer.run.Dockerfile \
    --tag "${API_IMAGE_NAME}_run:latest" \
    ./;";
