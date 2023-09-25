#!/usr/bin/env bash

set -ex;

# TODO: maybe use a less privileged user?
server_user='root';

# First stop the existing container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${IP_ADDRESS}" \
    "docker compose down";

# Then start up a new container
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "${server_user}@${IP_ADDRESS}" \
    "docker compose up --detach";
