import React from "react";
import styled from "styled-components";

import Header from "../Header/Header";
import NavigateBack from "../NavigateBack/NavigateBack";
import { APP_SECTIONS } from "../../helpers/appSections";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";

const AuthorName = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-size: 3.33rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const AuthorImage = styled.img`
  width: 70px;
  height: 70px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  margin-right: 20px;
`;

function AuthorHeader(props) {
  const navigationLink = `/artists/${props.artistSlug}/lyrics/${props.lyricSlug}`;

  return (
    <Header section={APP_SECTIONS.author}>
      <NavigateBack to={navigationLink} />
      <AuthorName>
        {props.author.firstName}
        <br />
        {props.author.lastName}
      </AuthorName>

      <AuthorImage
        src={API_CONSTANTS.image(props.author.slug)}
        alt={props.author.authorSlug}
      />
    </Header>
  );
}

export default AuthorHeader;
