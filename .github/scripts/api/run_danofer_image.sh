#!/usr/bin/env bash

USERNAME="ofer987";
IMAGE_NAME="danofer_run";
IMAGE_TAG="master";

source "${BASH_SOURCE[0]}/../create_server_rsa.sh";

server_ip="167.99.181.5";
server_user="root";
target_dir="/var/www/danofer/api";

ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${server_ip}" \
    "docker run danofer_run:latest";
