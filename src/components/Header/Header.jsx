import React from "react";
import styled from "styled-components";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import NavigateBack from "../NavigateBack/NavigateBack";
import SidebarToggle from "../SidebarToggle/SidebarToggle";
import { APP_SECTIONS } from "../../utils/appSections";
import { APP_COLOURS } from "../../utils/appColours";

const HeaderContainer = styled.header`
  background-color: ${props => {
    if (props.section === APP_SECTIONS.home) {
      return APP_COLOURS.red;
    } else if (props.section === APP_SECTIONS.artist) {
      return APP_COLOURS.darkPurple;
    } else if (props.section === APP_SECTIONS.lyric) {
      return APP_COLOURS.grey;
    } else if (props.section === APP_SECTIONS.author) {
      return APP_COLOURS.olive;
    }
  }};
  padding: 20px;
`;

const TopHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

function Header(props) {
  let leftElement;

  if (props.navigateBack) {
    leftElement = <NavigateBack to={props.navigateBack} />;
  } else {
    leftElement = <HeaderLogo />;
  }

  return (
    <HeaderContainer section={props.section}>
      <TopHeaderContainer>
        {leftElement}
        <SidebarToggle sidebarToggle={props.sidebarToggle} />
      </TopHeaderContainer>

      {props.children}
    </HeaderContainer>
  );
}

export default Header;
