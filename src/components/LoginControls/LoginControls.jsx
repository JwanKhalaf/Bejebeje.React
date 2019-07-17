import React from "react";
import styled from "styled-components";
import { AuthConsumer } from "../AuthProvider/AuthProvider";

const LoginButton = styled.button`
  background-color: green;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  color: #ffffff;
  margin-right: 15px;
  font-weight: bold;
`;

const LogoutButton = styled.button`
  background-color: red;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  color: #ffffff;
  margin-right: 15px;
  font-weight: bold;
`;

function LoginControls(props) {
  return (
    <AuthConsumer>
      {value => (
        <>
          <LoginButton id="login-button" onClick={value.login}>
            Login
          </LoginButton>
          <LogoutButton id="logout-button" onClick={value.logout}>
            Logout
          </LogoutButton>
        </>
      )}
    </AuthConsumer>
  );
}

export default LoginControls;
