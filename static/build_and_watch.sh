#!/usr/bin/env bash

GOOGLE_TAG_ID=123;
echo "{\"google_tag_id\": \"$GOOGLE_TAG_ID\"}" > local.json;

mustache local.json templates/index.html > index.html;
npx webpack --env mode=development;
