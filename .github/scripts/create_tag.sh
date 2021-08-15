#!/usr/bin/env bash

set -ex;

script_directory="$(dirname ${BASH_SOURCE[0]})";

# Create the VERSION variable
source "${script_directory}/create_version.sh";

TAG_NAME="${VERSION}";

git tag "${TAG_NAME}";
git push --tags "${GITHUB_TOKEN}@github.com/ofer987/danofer.git";
