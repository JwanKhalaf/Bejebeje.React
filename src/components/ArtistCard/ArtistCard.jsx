import React from "react";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./ArtistCard.css";

function ArtistCard(props) {
  return (
    <div className="artist-card" ref={props.itemRef}>
      <Link
        to={"artists/" + props.primarySlug + "/lyrics"}
        className="artist-card__link"
      >
        <img
          src={API_CONSTANTS.image(props.primarySlug)}
          alt={props.artist.firstName + " " + props.artist.lastName}
          className="artist-card__avatar"
        />
        {props.artist.firstName} {props.artist.lastName}
      </Link>
    </div>
  );
}

export default ArtistCard;
