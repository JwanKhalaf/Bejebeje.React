import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Authorisation from "./components/authorisation/Authorisation";
import Artists from "./components/artists/Artists";
import ArtistLyrics from "./components/artistlyrics/ArtistLyrics";
import Lyric from "./components/lyric/Lyric";
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
    const artistFetchDate = localStorage.getItem("artistsFetchTimestamp");
    const date = artistFetchDate && new Date(parseInt(artistFetchDate, 10));
    const currentDate = Date.now();

    const dataAgeInMinutes = Math.round((currentDate - date) / (1000 * 60));

    const tooOld = dataAgeInMinutes >= 15;

    if (tooOld) {
      if (!this.state.isLoading) {
        this.fetchArtists();
      }
    } else {
      console.log(
        `Using data from local storage that is ${dataAgeInMinutes} minutes old.`
      );
    }
  }

  fetchArtists() {
    this.setState({
      artists: [],
      isLoaded: false,
      isLoading: true
    });

    fetch(API_CONSTANTS.artists)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            isLoading: false,
            artists: result
          });

          localStorage.setItem("artists", JSON.stringify(this.state.artists));
          localStorage.setItem("artistsFetchTimestamp", Date.now());
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
          <Artists path="/" artists={this.state.artists} />
          <ArtistLyrics path="artists/:artist/lyrics" />
          <Lyric path="artists/:artist/lyrics/:lyric" />
          <Authorisation path="/callback" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
