import React from "react";
import styled from "styled-components";
import { APP_SECTIONS } from "../../helpers/appSections";
import { APP_COLOURS } from "../../helpers/appColours";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

const HeaderContainer = styled.header`
  background-color: ${props => {
    if (props.section === APP_SECTIONS.home) {
      return APP_COLOURS.red;
    } else if (props.section === APP_SECTIONS.artist) {
      return APP_COLOURS.darkPurple;
    } else if (props.section === APP_SECTIONS.lyric) {
      return APP_COLOURS.grey;
    } else if (props.section === APP_SECTIONS.lyric) {
      return APP_COLOURS.olive;
    }
  }};
  padding: 20px;
`;

function Header(props) {
  return (
    <HeaderContainer section={props.section}>{props.children}</HeaderContainer>
  );
}

export default Header;
