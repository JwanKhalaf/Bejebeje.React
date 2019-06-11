import React from "react";
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
    fetch(
      API_CONSTANTS.singleLyric(this.props.artistSlug, this.props.lyricSlug)
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            lyricIsLoaded: true,
            lyric: result
          });
        },
        error => {
          this.setState({
            lyricIsLoaded: true,
            error
          });
        }
      );

    fetch(API_CONSTANTS.singleArtist(this.props.artistSlug))
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            artistIsLoaded: true,
            artist: result
          });
        },
        error => {
          this.setState({
            artistIsLoaded: true,
            error
          });
        }
      );
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
