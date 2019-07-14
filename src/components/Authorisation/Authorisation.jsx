import React, { useEffect } from "react";
import { UserManager } from "oidc-client";
import { IDENTITY_CONFIG } from "../../utils/authConfig";

function Authorisation(props, config) {
  const userManager = new UserManager({ ...IDENTITY_CONFIG, config });

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
