#!/usr/bin/env bash

set -ex;

image_name="danofer";
image_tag="master";

docker login --username="${DOCKER_USERNAME}" --password="${DOCKER_PASSWORD}";

docker push "${DOCKER_USERNAME}/${image_name}:${image_tag}";

# Send build_script with environment variables set up from GitHub Actions

# Convert the image into a container

# Start the container
# ssh \
#     -o StrictHostKeyChecking=no \
#     -o UserKnownHostsFile=/dev/null \
#     -i ${server_rsa} \
#     "docker compose up danofer_api";
