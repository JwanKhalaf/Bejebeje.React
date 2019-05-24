import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SidebarToggle from "../SidebarToggle/SidebarToggle";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="is-header is-home-header">
        <div className="is-top-header">
          <HeaderLogo />
          <SidebarToggle />
        </div>

        <h2 className="is-page-title">{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
