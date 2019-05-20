import React from "react";
import Header from "../header/Header";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./artistlyrics.scss";
import ArtistHeader from "../artistheader/ArtistHeader";

class ArtistLyrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      lyrics: []
    };
  }

  componentDidMount() {
    fetch(API_CONSTANTS.artist(this.props.artist))
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            lyrics: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, lyrics: items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <>
          <Header />
          <ul className="is-preload-list">
            <li className="is-list-item-preload" />
            <li className="is-list-item-preload" />
            <li className="is-list-item-preload" />
            <li className="is-list-item-preload" />
          </ul>
        </>
      );
    } else {
      return (
        <>
          <ArtistHeader artist={location.state.artist} />
          <ul className="is-lyrics-list">
            {items.map(item => (
              <li key={item.slug} className="is-lyric-list-item">
                <Link to={item.slug}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default ArtistLyrics;
