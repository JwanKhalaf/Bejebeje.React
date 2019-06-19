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
      <header>
        <div className="is-lyric-meta-information">
          <img
            className="artist-meta__image"
            src={API_CONSTANTS.image(this.props.artist.slug)}
            alt={this.props.artist.firstName + " " + this.props.artist.lastName}
          />

          <div className="is-artist-information">
            <h3 className="artist-meta__name">
              {this.props.artist.firstName} {this.props.artist.lastName}
            </h3>
          </div>
        </div>
      </header>
    );
  }
}

export default LyricHeader;
