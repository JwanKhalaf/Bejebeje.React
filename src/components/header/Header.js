import React from "react";
import { Link } from "@reach/router";
import logo from "../../images/logo.svg";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="is-header">
        <Link to="/">
          <img src={logo} alt="ace logo" className="is-logo" />
        </Link>
      </div>
    );
  }
}

export default Header;
