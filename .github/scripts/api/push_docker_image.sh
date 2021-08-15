#!/usr/bin/env bash

set -ex;

script_directory="$(dirname ${BASH_SOURCE[0]})";
create_version_script="${script_directory}/../create_version.sh";

# Creates the VERSION variable
source "${create_version_script}";

docker login --username="${DOCKER_USERNAME}" --password="${DOCKER_PASSWORD}";

docker push "${DOCKER_USERNAME}/${IMAGE_NAME}:${VERSION}";
