import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import axios from "axios";
import Authorisation from "./components/Authorisation/Authorisation";
import Artists from "./components/Artists/Artists";
import ArtistLyrics from "./components/ArtistLyrics/ArtistLyrics";
import Lyric from "./components/Lyric/Lyric";
import { API_CONSTANTS } from "./helpers/apiEndpoints";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.searchArtists = this.searchArtists.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);

    const artists = JSON.parse(localStorage.getItem("artists"));

    this.state = {
      error: null,
      isLoaded: false,
      isLoading: false,
      artists: artists || [],
      searchTerm: ""
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

  handleSearchInput(searchTerm) {
    if (searchTerm.length >= 3) {
      this.searchArtists(searchTerm);
    } else {
      this.fetchArtists();
    }
  }

  searchArtists(name) {
    this.setState({
      artists: [],
      isLoaded: false,
      isLoading: true
    });

    fetch(API_CONSTANTS.searchArtists(name))
      .then(res => res.json())
      .then(
        result => {
          console.table(result);
          this.setState({
            isLoaded: true,
            isLoading: false,
            artists: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            isLoading: false,
            error
          });
        }
      );
  }

  render() {
    return (
      <div>
        <Router>
          <Artists
            path="/"
            artists={this.state.artists}
            search={this.handleSearchInput}
          />
          <ArtistLyrics path="artists/:artistSlug/lyrics" />
          <Lyric path="artists/:artistSlug/lyrics/:lyricSlug" />
          <Authorisation path="/callback" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
