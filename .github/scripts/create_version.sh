#!/usr/bin/env bash

set -ex;

MAJOR="$(echo ${GITHUB_REF} | sed -E 's/.*([0-9]+)\.([0-9]+)\.([0-9]+)$/\1/')";
MINOR="$(echo ${GITHUB_REF} | sed -E 's/.*([0-9]+)\.([0-9]+)\.([0-9]+)$/\2/')";
PATCH="$(echo ${GITHUB_REF} | sed -E 's/.*([0-9]+)\.([0-9]+)\.([0-9]+)$/\3/')";

VERSION="${MAJOR}.${MINOR}.${PATCH}";

ls -ltr *;
echo "VERSION is ${VERSION}";
