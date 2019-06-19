import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <h1 className="header__title">{props.title}</h1>
    </header>
  );
}

export default Header;
