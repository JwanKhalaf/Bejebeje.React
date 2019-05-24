import React from "react";
import Header from "../Header/Header";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./artists.scss";

class Artists extends React.Component {
  render() {
    return (
      <>
        <Header title="Browse artists" />
        <ul className="is-artist-list">
          {this.props.artists.map(artist => (
            <li key={artist.slug} className="is-artist-list-item">
              <Link to={"artists/" + artist.slug + "/lyrics"}>
                <img
                  src={API_CONSTANTS.image(artist.slug)}
                  alt={artist.firstName + " " + artist.lastName}
                />
                {artist.firstName} {artist.lastName}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Artists;
