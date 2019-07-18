import React from "react";
import styled from "styled-components";
import { AuthConsumer } from "../AuthProvider/AuthProvider";

const LoginButton = styled.a`
  background-color: green;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  color: #ffffff;
  margin-right: 15px;
  font-weight: bold;
`;

const LogoutButton = styled.a`
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
      {value => {
        if (value.isAuthenticated) {
          return (
            <LogoutButton id="logout-button" onClick={value.logout}>
              Logout
            </LogoutButton>
          );
        } else {
          return (
            <LoginButton id="login-button" onClick={value.login}>
              Login
            </LoginButton>
          );
        }
      }}
    </AuthConsumer>
  );
}

export default LoginControls;
