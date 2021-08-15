#!/usr/bin/env bash

set -ex;

script_directory="$(dirname ${BASH_SOURCE[0]})";
server_ip="167.99.181.5";
server_user="root";

# Permit read/write access to server
source "${script_directory}/../create_server_rsa.sh";

# First kill the existing container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${server_ip}" \
    "docker-compose stop danofer_api";

# Then start up a new container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${server_ip}" \
    "docker-compose up --detach danofer_api";
