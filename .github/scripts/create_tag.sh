#!/usr/bin/env bash

TAG_NAME="releases/${VERSION}";

git tag "${TAG_NAME}";
git push --tags "https://${GITHUB_TOKEN}@github.com/ofer987/danofer.git";
