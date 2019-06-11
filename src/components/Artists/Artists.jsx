import React from "react";
import Header from "../Header/Header";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./Artists.css";
import Search from "../Search/Search";

class Artists extends React.Component {
  render() {
    return (
      <>
        <Header title="Browse artists" />
        <ul className="artist-list">
          {this.props.artists.map(artist => (
            <li key={artist.slug} className="artist-item">
              <Link
                to={"artists/" + artist.slug + "/lyrics"}
                className="artist-item__link"
              >
                <img
                  src={API_CONSTANTS.image(artist.slug)}
                  alt={artist.firstName + " " + artist.lastName}
                  className="artist-item__avatar"
                />
                {artist.firstName} {artist.lastName}
              </Link>
            </li>
          ))}
        </ul>
        <Search search={this.props.search} />
      </>
    );
  }
}

export default Artists;
