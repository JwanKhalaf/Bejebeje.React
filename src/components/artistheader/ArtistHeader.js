import React from "react";
import Header from "../header/Header";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./artistheader.scss";

class ArtistHeader extends React.Component {
  render() {
    return (
      <>
        <img
          src={API_CONSTANTS.image(this.props.artist.imageId)}
          alt={this.props.artist.firstName + " " + this.props.artist.lastName}
        />
        <h2>
          {artist.firstName} {artist.lastName}
        </h2>
      </>
    );
  }
}

export default ArtistHeader;
