#!/usr/bin/env bash

set -ex;

script_directory="$(dirname ${BASH_SOURCE[0]})";
server_ip="167.99.181.5";
server_user="root";

# Permit read/write access to server
source "${script_directory}/../create_server_rsa.sh";

ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${server_ip}" \
    "docker-compose up danofer_api";
