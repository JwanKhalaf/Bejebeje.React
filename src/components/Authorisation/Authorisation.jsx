import React, { useEffect } from "react";
import { UserManager } from "oidc-client";

const defaultConfig = {
  authority: process.env.IDENTITY_AUTHORITY,
  client_id: process.env.IDENTITY_CLIENT_ID,
  redirect_uri: process.env.IDENTITY_REDIRECT_URI,
  response_type: process.env.IDENTITY_RESPONSE_TYPE,
  scope: process.env.IDENTITY_SCOPE,
  post_logout_redirect_uri: process.env.IDENTITY_POST_LOGOUT_REDIRECT_URI
};

function Authorisation(props, config) {
  const userManager = new UserManager({ ...defaultConfig, config });

  useEffect(() => {
    userManager
      .signinRedirectCallback()
      .then(() => {
        window.location = "/";
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
  });

  return <h1>hi!</h1>;
}

export default Authorisation;
