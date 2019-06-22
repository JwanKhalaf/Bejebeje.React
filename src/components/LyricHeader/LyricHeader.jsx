import React from "react";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "../Header/Header.css";
import "./LyricHeader.css";

function LyricHeader(props) {
  return (
    <header>
      <div className="is-lyric-meta-information">
        <img
          className="artist-meta__image"
          src={API_CONSTANTS.image(props.artist.slug)}
          alt={props.artist.firstName + " " + props.artist.lastName}
        />

        <div className="is-artist-information">
          <h3 className="artist-meta__name">
            {props.artist.firstName} {props.artist.lastName}
          </h3>
        </div>
      </div>
    </header>
  );
}

export default LyricHeader;
