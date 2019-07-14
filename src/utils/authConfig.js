export const IDENTITY_CONFIG = {
  authority: process.env.IDENTITY_AUTHORITY,
  client_id: process.env.IDENTITY_CLIENT_ID,
  redirect_uri: process.env.IDENTITY_REDIRECT_URI,
  response_type: process.env.IDENTITY_RESPONSE_TYPE,
  scope: process.env.IDENTITY_SCOPE,
  post_logout_redirect_uri: process.env.IDENTITY_POST_LOGOUT_REDIRECT_URI
};

export const METADATA_OIDC = {
  issuer: "https://identityserver",
  jwks_uri:
    process.env.REACT_APP_AUTH_URL + "/.well-known/openid-configuration/jwks",
  authorization_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/authorize",
  token_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/token",
  userinfo_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/userinfo",
  end_session_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/endsession",
  check_session_iframe:
    process.env.REACT_APP_AUTH_URL + "/connect/checksession",
  revocation_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/revocation",
  introspection_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/introspect"
};
