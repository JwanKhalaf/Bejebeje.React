import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import { APP_COLOURS } from "../../helpers/appColours";

const Card = styled.div`
  background-color: ${APP_COLOURS.darkPurple};
  margin-bottom: 20px;
`;

const ArtistLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  color: #ffffff;
  padding: 15px;
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

const ArtistImage = styled.img`
  display: block;
  margin-right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ffffff;
`;

function ArtistCard(props) {
  return (
    <Card ref={props.itemRef}>
      <ArtistLink
        to={"artists/" + props.primarySlug + "/lyrics"}
        className="artist-card__link"
      >
        <ArtistImage
          src={API_CONSTANTS.image(props.primarySlug)}
          alt={props.artist.firstName + " " + props.artist.lastName}
          className="artist-card__avatar"
        />
        {props.artist.firstName} {props.artist.lastName}
      </ArtistLink>
    </Card>
  );
}

export default ArtistCard;
