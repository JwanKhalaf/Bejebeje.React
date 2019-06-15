import React from "react";
import Header from "../Header/Header";
import { Link } from "@reach/router";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./ArtistLyrics.scss";
import ArtistHeader from "../ArtistHeader/ArtistHeader";

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
    axios
      .get(API_CONSTANTS.artistLyrics(this.props.artistSlug))
      .then(result => {
        this.setState({
          isLoaded: true,
          lyrics: result.data
        });
      });

    axios
      .get(API_CONSTANTS.singleArtist(this.props.artistSlug))
      .then(result => {
        this.setState({
          isLoaded: true,
          artist: result.data
        });
      });
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
    } else if (isLoaded && lyrics.length === 0) {
      return (
        <>
          <ArtistHeader artist={artist} artistLyricCount={lyrics.length} />
          <div className="info-text__wrap">
            <h2 className="info-text__heading">Sorry!</h2>
            <h3 className="info-text__body">
              No lyrics have been submitted yet.
            </h3>
          </div>
        </>
      );
    } else {
      return (
        <>
          <ArtistHeader artist={artist} artistLyricCount={lyrics.length} />
          <ul className="lyrics-list">
            {lyrics.map(lyric => (
              <li key={lyric.slug} className="lyric-list-item">
                <Link to={lyric.slug} className="lyric-list-item__a">
                  {lyric.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default ArtistLyrics;
