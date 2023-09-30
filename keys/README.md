## Keys

1. Use `the star key`
1. Use `ofer_to.private.pem`
1. Use `dhparam.pem` with
TODO: renew and store in SECRETS
TODO: create new CERTIFICATE REQUEST with `openssl req -new -newkey rsa:2048 -sha256 -nodes -out ofer_to.csr -keyout ofer_to.private.pem -subj "/C=CA/ST=OnhN/L=Toronto/CN=*.ofer.to"`
TODO: Create new dhparam.pem with `openssl dhparam -out /etc/nginx/dhparam.pem 2048`
TODO: Create CI/CD actions that copy the NGINX conf files
TODO: Create a **server** for api.ofer.to
