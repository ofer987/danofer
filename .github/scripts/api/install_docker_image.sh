#!/usr/bin/env bash

source "${BASH_SOURCE[0]}/../create_server_rsa.sh";

server_ip="167.99.181.5";
server_user="root";
target_dir="/var/www/danofer/api";

# Deploy the Dockerfile
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${SERVER_USER}@${SERVER_IP}" \
    "mkdir -p -- ${target_dir}";

scp \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    Danofer.run.Dockerfile
    "${server_user}@${server_ip}:${target_dir}";
