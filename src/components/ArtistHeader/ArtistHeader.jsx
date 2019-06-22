import React from "react";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "../Header/Header.css";
import "./ArtistHeader.css";

const determineIfWordIsPluralOrNot = lyricCount => {
  if (lyricCount === 1) {
    return "Lyric";
  } else {
    return "Lyrics";
  }
};

function ArtistHeader(props) {
  return (
    <header>
      <h2 className="artist-header__artist-name">
        {props.artist.firstName}
        <br />
        {props.artist.lastName}
      </h2>

      <div className="artist-meta">
        <img
          className="artist-meta__image"
          src={API_CONSTANTS.image(props.artist.slug)}
          alt={props.artist.firstName + " " + props.artist.lastName}
        />

        <h4 className="artist-meta__lyric-count">
          {props.artistLyricCount}{" "}
          {determineIfWordIsPluralOrNot(props.artistLyricCount)}
        </h4>
      </div>
    </header>
  );
}

export default ArtistHeader;
