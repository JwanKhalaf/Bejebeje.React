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
      lyrics: [],
      artist: {}
    };
  }

  componentDidMount() {
    fetch(API_CONSTANTS.artistLyrics(this.props.artist))
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

    fetch(API_CONSTANTS.singleArtist(this.props.artist))
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            artist: result
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
    const { error, isLoaded, lyrics, artist } = this.state;
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
          <ArtistHeader artist={artist} artistLyricCount={lyrics.length} />
          <ul className="is-lyrics-list">
            {lyrics.map(lyric => (
              <li key={lyric.slug} className="is-lyric-list-item">
                <Link to={lyric.slug}>{lyric.title}</Link>
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default ArtistLyrics;
