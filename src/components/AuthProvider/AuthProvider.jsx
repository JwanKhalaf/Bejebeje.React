import React, { useState } from "react";
import { UserManager, WebStorageStateStore } from "oidc-client";
import AuthContext from "../../contexts/AuthContext";
import { IDENTITY_CONFIG } from "../../utils/authConfig";

IDENTITY_CONFIG.userStore = new WebStorageStateStore({
  store: window.localStorage
});

const userManager = new UserManager(IDENTITY_CONFIG);

const login = () => {
  console.log("Login button click handled.");
  userManager.signinRedirect();
};

const logout = () => {
  userManager.signoutRedirect();
};

const loginCallback = () => {
  console.log("login call back fired");
  const queryResponseTypeUserManager = new UserManager({
    response_mode: "query"
  })
    .signinRedirectCallback()
    .then(
      user => {
        console.log("login callback was called.");
        console.log(user);
        window.location.href = "http://localhost:1234";
      },
      error => {
        console.error(error);
      }
    );
};

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const providerValue = {
    login: login,
    logout: logout,
    loginCallback: loginCallback,
    isAuthenticated: () => ({})
  };

  const Provider = () => {
    if (user) {
      return (
        <AuthContext.Provider value={providerValue}>
          {props.children}
        </AuthContext.Provider>
      );
    } else {
      return <div className="auth-provider">{props.children}</div>;
    }
  };

  return (
    <>
      <AuthContext.Provider value={providerValue}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}

export const AuthConsumer = AuthContext.Consumer;
