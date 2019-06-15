import React from "react";
import { Link } from "@reach/router";
import logo from "../../images/logo.svg";
import "./HeaderLogo.css";

function HeaderLogo() {
  return (
    <Link to="/" className="top-header__logo-link">
      <img src={logo} alt="ace logo" className="top-header__logo" />
    </Link>
  );
}

export default HeaderLogo;
