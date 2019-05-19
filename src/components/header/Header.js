import React from "react";
import { Link } from "@reach/router";
import logo from "../../images/logo.svg";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className={"is-header has-" + this.props.display}>
        <Link to="/">
          <img src={logo} alt="ace logo" className="is-logo" />
        </Link>

        <h2 className="is-page-title">{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
