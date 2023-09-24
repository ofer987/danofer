#!/usrb/bin/env bash

set -ex

# Deploy the static files to the remote server
scp \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    -r \
    index.html _app  \
    "root@${IP_ADDRESS}:/var/www/ofer_to"

# Restart NGINX just in case
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "root@${IP_ADDRESS}" \
    service nginx restart
