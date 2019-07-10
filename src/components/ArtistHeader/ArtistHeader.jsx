import React from "react";
import styled from "styled-components";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import Header from "../Header/Header";
import { APP_SECTIONS } from "../../helpers/appSections";
import NavigateBack from "../NavigateBack/NavigateBack";

const determineIfWordIsPluralOrNot = lyricCount => {
  if (lyricCount === 1) {
    return "Lyric";
  } else {
    return "Lyrics";
  }
};

const ArtistName = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-size: 3.33rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ArtistMetaInformation = styled.div`
  display: flex;
  align-items: center;
`;

const ArtistImage = styled.img`
  width: 70px;
  height: 70px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  margin-right: 20px;
`;

const LyricCount = styled.h4`
  font-family: "Roboto", sans-serif;
  font-size: 1.33rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: normal;
`;

function ArtistHeader(props) {
  return (
    <Header section={APP_SECTIONS.artist} navigateBack="/">
      <ArtistName>
        {props.artist.firstName}
        <br />
        {props.artist.lastName}
      </ArtistName>

      <ArtistMetaInformation>
        <ArtistImage
          src={API_CONSTANTS.image(props.artist.slug)}
          alt={props.artist.firstName + " " + props.artist.lastName}
        />

        <LyricCount>
          {props.artistLyricCount}{" "}
          {determineIfWordIsPluralOrNot(props.artistLyricCount)}
        </LyricCount>
      </ArtistMetaInformation>
    </Header>
  );
}

export default ArtistHeader;
