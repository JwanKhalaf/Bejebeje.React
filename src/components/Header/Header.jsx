import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SidebarToggle from "../SidebarToggle/SidebarToggle";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="top-header home-header">
        <div className="top-header__brand">
          <HeaderLogo />
          <SidebarToggle />
        </div>

        <h2 className="top-header__title">{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
