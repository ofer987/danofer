#!/usrb/bin/env bash

set -ex;

# Copy SSH private key
server_rsa="./server_rsa";
echo ${STATIC_SERVER_PRIVATE_KEY} > ${server_rsa};

# Remove its permissions
chmod g-r "${server_rsa}";
chmod g-w "${server_rsa}";
chmod g-x "${server_rsa}";
chmod o-r "${server_rsa}";
chmod o-w "${server_rsa}";
chmod o-x "${server_rsa}";

# Deploy the static files to the remote server
scp \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i ${server_rsa} \
    -r \
    index.html dist \
    root@167.99.181.5:/var/www/danofer;

# Restart NGINX just in case
ssh \
    -i ${server_rsa} \
    root@167.99.181.5 \
    service nginx restart;
