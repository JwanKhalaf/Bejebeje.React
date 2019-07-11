import React from "react";
import AuthService from "../Authorisation/AuthService";

const authenticationService = new AuthService();

function LoginControls(props) {
  const handleLoginClick = () => {
    authenticationService.login();
  };

  const handleLogoutClick = () => {
    authenticationService.logout();
  };

  return (
    <>
      <button id="login-button" onClick={handleLoginClick}>
        Login
      </button>
      <button id="logout-button" onClick={handleLogoutClick}>
        Logout
      </button>
    </>
  );
}

export default LoginControls;
