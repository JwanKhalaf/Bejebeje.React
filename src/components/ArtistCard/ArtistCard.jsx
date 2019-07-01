import React from "react";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./ArtistCard.css";

function ArtistCard(props) {
  return (
    <li className="artist-item" ref={props.itemRef}>
      <Link
        to={"artists/" + props.primarySlug + "/lyrics"}
        className="artist-item__link"
      >
        <img
          src={API_CONSTANTS.image(props.primarySlug)}
          alt={props.artist.firstName + " " + props.artist.lastName}
          className="artist-item__avatar"
        />
        {props.artist.firstName} {props.artist.lastName}
      </Link>
    </li>
  );
}

export default ArtistCard;