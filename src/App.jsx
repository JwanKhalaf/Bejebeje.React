import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import axios from "axios";
import Authorisation from "./components/Authorisation/Authorisation";
import Artists from "./components/Artists/Artists";
import ArtistLyrics from "./components/ArtistLyrics/ArtistLyrics";
import Lyric from "./components/Lyric/Lyric";
import { API_CONSTANTS } from "./helpers/apiEndpoints";
import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    const artists = JSON.parse(localStorage.getItem("artists"));

    this.state = {
      error: null,
      isLoaded: false,
      isLoading: false,
      artists: artists || []
    };
  }

  componentDidMount() {
    this.fetchArtists();
  }

  fetchArtists() {
    this.setState({
      artists: [],
      isLoaded: false,
      isLoading: true
    });

    axios.get(API_CONSTANTS.artists).then(result => {
      this.setState({
        isLoaded: true,
        isLoading: false,
        artists: result.data.artists
      });
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Artists path="/" artists={this.state.artists} />
          <ArtistLyrics path="artists/:artistSlug/lyrics" />
          <Lyric path="artists/:artistSlug/lyrics/:lyricSlug" />
          <Authorisation path="/callback" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
