#!/usr/bin/env bash

set -ex;

script_directory="$(dirname ${BASH_SOURCE[0]})";
create_version_script="${script_directory}/../create_version.sh";

# Create the VERSION variable
source "${create_version_script}";

docker build \
    --file Danofer.build.Dockerfile \
    --tag "${DOCKER_USERNAME}/${IMAGE_NAME}:${VERSION}" \
    .;
