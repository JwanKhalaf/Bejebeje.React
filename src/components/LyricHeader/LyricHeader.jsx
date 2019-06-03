import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SidebarToggle from "../SidebarToggle/SidebarToggle";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "../Header/Header.css";
import "./LyricHeader.css";

class LyricHeader extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <div className="top-header lyric-header">
        <div className="top-header__brand">
          <HeaderLogo />
          <SidebarToggle />
        </div>

        <div className="is-lyric-meta-information">
          <img
            className="is-artist-image"
            src={API_CONSTANTS.image(this.props.artist.slug)}
            alt={this.props.artist.firstName + " " + this.props.artist.lastName}
          />

          <div className="is-artist-information">
            <h3 className="is-lyric-page-artist-name-label">Artist</h3>

            <h3 className="is-lyric-page-artist-name">
              {this.props.artist.firstName} {this.props.artist.lastName}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default LyricHeader;
