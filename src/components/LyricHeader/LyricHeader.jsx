import React from "react";
import styled from "styled-components";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import Header from "../Header/Header";
import { APP_SECTIONS } from "../../helpers/appSections";
import NavigateBack from "../NavigateBack/NavigateBack";

const ArtistInformation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ArtistNameContainer = styled.div``;

const ArtistNameLabel = styled.h5`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Merriweather", serif;
  margin-bottom: 5px;
`;

const ArtistName = styled.h3`
  font-family: "Roboto", sans-serif;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.33rem;
`;

const ArtistImage = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  margin-right: 15px;
`;

const LyricTitle = styled.h1`
  font-size: 3.33rem;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
`;

function LyricHeader(props) {
  const navigationLink = `/artists/${props.artist.slug}/lyrics`;

  return (
    <Header
      section={APP_SECTIONS.lyric}
      navigateBack={navigationLink}
      sidebarToggle={props.sidebarToggle}
    >
      <ArtistInformation>
        <ArtistImage
          src={API_CONSTANTS.image(props.artist.slug)}
          alt={props.artist.firstName + " " + props.artist.lastName}
        />

        <ArtistNameContainer>
          <ArtistNameLabel>Artist</ArtistNameLabel>
          <ArtistName>
            {props.artist.firstName} {props.artist.lastName}
          </ArtistName>
        </ArtistNameContainer>
      </ArtistInformation>

      <LyricTitle>{props.title}</LyricTitle>
    </Header>
  );
}

export default LyricHeader;
