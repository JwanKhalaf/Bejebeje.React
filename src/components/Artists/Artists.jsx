import React from "react";
import Header from "../Header/Header";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./Artists.css";
import Search from "../Search/Search";

function Artists(props) {
  const getPrimaryArtistSlug = slugs => {
    return slugs.filter(slug => slug.isPrimary)[0].name;
  };

  return (
    <>
      <Header title="Browse" />
      <ul className="artist-list">
        {props.artists.map(artist => {
          const primarySlug = getPrimaryArtistSlug(artist.slugs);
          return (
            <li key={primarySlug} className="artist-item">
              <Link
                to={"artists/" + primarySlug + "/lyrics"}
                className="artist-item__link"
              >
                <img
                  src={API_CONSTANTS.image(primarySlug)}
                  alt={artist.firstName + " " + artist.lastName}
                  className="artist-item__avatar"
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
