import React from "react";
import Header from "../Header/Header";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./Artists.scss";

function Artists(props) {
  const getPrimaryArtistSlug = slugs => {
    return slugs.filter(slug => slug.isPrimary)[0].name;
  };

  return (
    <>
      <Header title="Browse artists" />
      <ul className="is-artist-list">
        {props.artists.map(artist => {
          const primarySlug = getPrimaryArtistSlug(artist.slugs);
          return (
            <li key={primarySlug} className="is-artist-list-item">
              <Link to={"artists/" + primarySlug + "/lyrics"}>
                <img
                  src={API_CONSTANTS.image(primarySlug)}
                  alt={artist.firstName + " " + artist.lastName}
                />
                {artist.firstName} {artist.lastName}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Artists;
