#!/usr/bin/env bash

# GOOGLE_TAG_ID should already be set
# (maybe by the CI/CD system?)
echo "{\"google_tag_id\": \"$GOOGLE_TAG_ID\"}" > local.json;

mustache local.json templates/index.html > index.html;
npx webpack --env mode=production;
