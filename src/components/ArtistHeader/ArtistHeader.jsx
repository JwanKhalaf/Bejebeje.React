import React from "react";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SidebarToggle from "../SidebarToggle/SidebarToggle";
import "../Header/Header.css";
import "./ArtistHeader.css";

class ArtistHeader extends React.Component {
  determineIfWordIsPluralOrNot() {
    if (this.props.artistLyricCount === 1) {
      return "Lyric";
    } else {
      return "Lyrics";
    }
  }

  render() {
    return (
      <div className="top-header artist-header">
        <div className="top-header__brand">
          <HeaderLogo />
          <SidebarToggle />
        </div>

        <h2 className="is-artist-name">
          {this.props.artist.firstName}
          <br />
          {this.props.artist.lastName}
        </h2>

        <div className="is-artist-meta-information">
          <img
            className="is-artist-image"
            src={API_CONSTANTS.image(this.props.artist.slug)}
            alt={this.props.artist.firstName + " " + this.props.artist.lastName}
          />

          <h4 className="is-artist-lyric-count">
            {this.props.artistLyricCount} {this.determineIfWordIsPluralOrNot()}
          </h4>
        </div>
      </div>
    );
  }
}

export default ArtistHeader;
