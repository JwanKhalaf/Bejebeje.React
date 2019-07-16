import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../utils/apiEndpoints";
import { APP_COLOURS } from "../../utils/appColours";

const Card = styled.div`
  background-color: ${APP_COLOURS.darkPurple};
  margin-bottom: 20px;
  min-height: 80px;
  display: flex;
  align-items: center;
`;

const ArtistLink = styled(Link)`
  height: 100%;
  width: 100%;
  color: #ffffff;
  padding: 15px;
  display: block;
  display: flex;
  align-items: center;
  font-size: 1.33rem;
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
      <ArtistLink to={"artists/" + props.primarySlug + "/lyrics"}>
        <ArtistImage
          src={API_CONSTANTS.image(props.primarySlug)}
          alt={props.artist.firstName + " " + props.artist.lastName}
        />
        {props.artist.firstName} {props.artist.lastName}
      </ArtistLink>
    </Card>
  );
}

export default ArtistCard;
