#!/usrb/bin/env bash

set -ex

# Permit read/write access to server
script_directory=$(dirname ${BASH_SOURCE[0]});
source "${script_directory}/../create_server_rsa.sh"

# Deploy the static files to the remote server
scp \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    -r \
    index.html dist icons  \
    "root@${OFER_TO_IP_ADDRESS}:/var/www/ofer_to"

# Restart NGINX just in case
ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${SERVER_RSA} \
    "root@${OFER_TO_IP_ADDRESS}" \
    service nginx restart
