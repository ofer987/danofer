#!/usr/bin/env bash

set -ex;

script_directory="$(dirname ${BASH_SOURCE[0]})";
server_user="root";
server_ip="167.99.181.5";
configuration_file="configuration.json";

# Create the configuration
ruby "${script_directory}/build_configuration" > "${configuration_file}";

# Permit read/write access to server
source "${script_directory}/../create_server_rsa.sh";

# Create the VERSION variable
source "${script_directory}/../create_version.sh";

# Copy the configuration
scp \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${configuration_file}" "${server_user}@${server_ip}:./";

# Copy Dockerfile
scp \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "Danofer.run.Dockerfile" "${server_user}@${server_ip}:./";

# Build the Docker image
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${server_ip}" \
    "docker build \
        --file Danofer.run.Dockerfile \
        --build-arg DOCKER_USERNAME=${DOCKER_USERNAME} \
        --build-arg IMAGE_NAME=${IMAGE_NAME} \
        --build-arg VERSION=${VERSION} \
        --tag danofer_run:latest \
        ./;";
