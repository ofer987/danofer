#!/usr/bin/env bash

set -ex;

script_directory="$(dirname ${BASH_SOURCE[0]})";
# TODO: maybe use a less privileged user?
server_user="root";
image_name="danofer_run:latest"
container_name="danofer_run";

# Permit read/write access to server
source "${script_directory}/../create_server_rsa.sh";

# First stop the existing container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${OFER_TO_IP_ADDRESS}" \
    "docker stop ${container_name}";

# Then remove it
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${OFER_TO_IP_ADDRESS}" \
    "docker system prune --force";

# Then start up a new container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${OFER_TO_IP_ADDRESS}" \
    "docker run --publish 5000:80 --detach --name ${container_name} ${image_name}";
