import React from "react";
import { AuthConsumer } from "../AuthProvider/AuthProvider";

function AuthHandshake(props) {
  return <AuthConsumer>{value => value.loginCallback()}</AuthConsumer>;
}

export default AuthHandshake;
