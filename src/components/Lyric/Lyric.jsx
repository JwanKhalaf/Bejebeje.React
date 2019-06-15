import React from "react";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import LyricHeader from "../LyricHeader/LyricHeader";
import "./lyric.css";

class Lyric extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      lyricIsLoaded: false,
      artistIsLoaded: false,
      lyric: null,
      artist: null
    };

    console.log(this.props);
  }

  componentDidMount() {
    const artistSlug = this.props.artistSlug;
    const lyricSlug = this.props.lyricSlug;

    axios.get(API_CONSTANTS.singleLyric(artistSlug, lyricSlug)).then(result => {
      this.setState({
        lyricIsLoaded: true,
        lyric: result.data
      });
    });

    axios.get(API_CONSTANTS.singleArtist(artistSlug)).then(result => {
      this.setState({
        artistIsLoaded: true,
        artist: result.data
      });
    });
  }

  createMarkup() {
    return { __html: this.state.lyric.body };
  }

  render() {
    const { error, lyricIsLoaded, artistIsLoaded, artist } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!lyricIsLoaded && artistIsLoaded) {
      return <LyricHeader artist={artist} />;
    } else if (lyricIsLoaded && artistIsLoaded) {
      return (
        <>
          <LyricHeader artist={artist} />
          <div
            className="is-lyric"
            dangerouslySetInnerHTML={this.createMarkup()}
          />
        </>
      );
    } else {
      return <h2>not loaded!</h2>;
    }
  }
}

export default Lyric;
