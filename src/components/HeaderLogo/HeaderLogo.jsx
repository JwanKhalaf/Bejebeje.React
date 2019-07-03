import React from "react";
import { Link } from "@reach/router";
import logo from "../../images/logo.svg";
import styled from "styled-components";

const Logo = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 25px;
  cursor: pointer;
`;

function HeaderLogo() {
  return (
    <Logo to="/">
      <Image src={logo} alt="bejebeje logo" />
    </Logo>
  );
}

export default HeaderLogo;
