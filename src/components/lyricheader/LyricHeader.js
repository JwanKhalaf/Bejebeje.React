import React from "react";
import HeaderLogo from "../headerlogo/headerlogo";
import SidebarToggle from "../sidebartoggle/SidebarToggle";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "../header/header.scss";
import "./lyricheader.scss";

class LyricHeader extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <div className="is-header is-lyric-header">
        <div className="is-top-header">
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
