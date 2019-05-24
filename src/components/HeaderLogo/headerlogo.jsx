import React from "react";
import { Link } from "@reach/router";
import logo from "../../images/logo.svg";

function HeaderLogo() {
  return (
    <Link to="/" className="is-logo-link">
      <img src={logo} alt="ace logo" className="is-logo" />
    </Link>
  );
}

export default HeaderLogo;
