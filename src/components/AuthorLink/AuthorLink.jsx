import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import { APP_COLOURS } from "../../helpers/appColours";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";

const AuthorAnchorLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${APP_COLOURS.olive};
  padding: 20px;
`;

const AuthorNameLabel = styled.h5`
  font-size: 0.8rem;
  color: #ffffff;
  font-family: "Merriweather", serif;
  margin-bottom: 5px;
`;

const AuthorName = styled.h2`
  font-size: 1.33rem;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
`;

const AuthorImage = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 2px solid #ffffff;
  margin-right: 25px;
`;

function AuthorLink(props) {
  const authorDetailsNavigationLink = `/author/${props.author.slug}`;

  return (
    <AuthorAnchorLink to={authorDetailsNavigationLink}>
      <AuthorImage
        src={API_CONSTANTS.image(props.author.slug)}
        alt={props.author.slug}
      />
      <div>
        <AuthorNameLabel>Author</AuthorNameLabel>
        <AuthorName>
          {props.author.firstName} {props.author.lastName}
        </AuthorName>
      </div>
    </AuthorAnchorLink>
  );
}

export default AuthorLink;
