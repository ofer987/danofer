#!/usr/bin/env bash

set -ex;

# TODO: maybe use a less privileged user?
server_user='root';
container_name='danofer_run';

# First stop the existing container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i "../${SERVER_RSA}" \
    "${server_user}@${IP_ADDRESS}" \
    "docker stop ${container_name}";

# Then remove it
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i "../${SERVER_RSA}" \
    "${server_user}@${IP_ADDRESS}" \
    'docker system prune --force';

# Then start up a new container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i "../${SERVER_RSA}" \
    "${server_user}@${IP_ADDRESS}" \
    "docker run --publish 5000:80 --detach --name ${container_name} ${IMAGE_NAME}:latest";
