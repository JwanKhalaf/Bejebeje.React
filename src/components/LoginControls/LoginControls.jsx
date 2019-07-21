import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthConsumer } from "../AuthProvider/AuthProvider";

const LoginLink = styled.a`
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  color: #ffffff;
  margin-right: 15px;
  font-weight: bold;
`;

const LogoutLink = styled.a`
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  color: #ffffff;
  margin-right: 15px;
  font-weight: bold;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  margin-right: 10px;
`;

function LoginControls(props) {
  return (
    <AuthConsumer>
      {value => {
        if (value.isAuthenticated) {
          return (
            <LogoutLink id="logout-button" onClick={value.logout}>
              <Icon icon={["fas", "power-off"]} />
              Logout
            </LogoutLink>
          );
        } else {
          return (
            <LoginLink id="login-button" onClick={value.login}>
              <Icon icon={["fas", "power-off"]} />
              Login
            </LoginLink>
          );
        }
      }}
    </AuthConsumer>
  );
}

export default LoginControls;
