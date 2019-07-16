import React from "react";
import { AuthConsumer } from "../AuthProvider/AuthProvider";

function LoginControls(props) {
  return (
    <AuthConsumer>
      {value => (
        <>
          <button id="login-button" onClick={value.login}>
            Login
          </button>
          <button id="logout-button" onClick={value.logout}>
            Logout
          </button>
        </>
      )}
    </AuthConsumer>
  );
}

export default LoginControls;
