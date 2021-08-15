#!/usr/bin/env bash

set -ex;

GITHUB_REF="refs/heads/releases/4.50.1";

MAJOR="$(echo ${GITHUB_REF} | sed -E 's/.*([0-9]+)\.([0-9]+)\.([0-9]+)$/\1/')";
MINOR="$(echo ${GITHUB_REF} | sed -E 's/.*([0-9]+)\.([0-9]+)\.([0-9]+)$/\2/')";
PATCH="$(echo ${GITHUB_REF} | sed -E 's/.*([0-9]+)\.([0-9]+)\.([0-9]+)$/\3/')";

VERSION="${MAJOR}.${MINOR}.${PATCH}";
