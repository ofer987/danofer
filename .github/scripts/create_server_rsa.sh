# Copy SSH private key
echo "${STATIC_SERVER_PRIVATE_KEY}" > "${SERVER_RSA}";

# Remove its permissions
chmod g-rwx "${SERVER_RSA}";
chmod o-rwx "${SERVER_RSA}";
