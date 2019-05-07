import React from "react";
import { Link } from "@reach/router";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="is-header">
        <Link to="/">
          <img src="images/logo.svg" alt="bejebeje logo" className="is-logo" />
        </Link>
      </div>
    );
  }
}

export default Header;
