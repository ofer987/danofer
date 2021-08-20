#!/usr/bin/env bash

set -ex;

script_directory="$(dirname ${BASH_SOURCE[0]})";
server_ip="167.99.181.5";
server_user="root";
image_name="danofer_run:latest"
container_name="danofer_run";

# Permit read/write access to server
source "${script_directory}/../create_server_rsa.sh";

# First kill the existing container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${server_ip}" \
    "docker stop ${container_name}";

# Then start up a new container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${server_ip}" \
    "docker run --publish 5000:80 --detach --name ${container_name} ${image_name}";
