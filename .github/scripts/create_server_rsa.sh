if [[ -f "${SERVER_RSA}" ]]
then
  return;
fi

# Copy SSH private key
echo "${STATIC_SERVER_PRIVATE_KEY}" > "${SERVER_RSA}";

# Remove its permissions
chmod g-r "${SERVER_RSA}";
chmod g-w "${SERVER_RSA}";
chmod g-x "${SERVER_RSA}";
chmod o-r "${SERVER_RSA}";
chmod o-w "${SERVER_RSA}";
chmod o-x "${SERVER_RSA}";
