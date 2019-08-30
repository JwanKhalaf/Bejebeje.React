import React, { useState } from "react";
import { navigate } from "@reach/router";
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

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const loginCallback = () => {
    userManager.signinRedirectCallback().then(
      user => {
        debugger;
        window.history.replaceState(
          {},
          window.document.title,
          window.location.origin
        );
        setUser(user);
        navigate("/");
      },
      error => {
        console.error(error);
      }
    );
  };

  const providerValue = {
    login: login,
    logout: logout,
    loginCallback: loginCallback,
    isAuthenticated: user
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
