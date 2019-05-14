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
    this.state = {
      error: null,
      isLoaded: false,
      artists: []
    };
  }

  componentWillMount() {
    localStorage.getItem("artists") &&
      this.setState({
        artists: JSON.parse(localStorage.getItem("artists")),
        isLoaded: true
      });
  }

  componentDidMount() {
    const artistFetchDate = localStorage.getItem("artistsFetchTimestamp");
    const date = artistFetchDate && new Date(parseInt(artistFetchDate));
    const currentDate = Date.now();

    const dataAge = Math.round((currentDate - date) / (1000 * 60));

    const tooOld = dataAge >= 15;

    if (tooOld) {
      this.fetchArtists();
    } else {
      console.log(
        `Using data from local storage that is ${dataAge} minutes old.`
      );
    }
  }

  fetchArtists() {
    this.setState({
      artists: [],
      isLoaded: false
    });

    fetch(API_CONSTANTS.artists)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            artists: result
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

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("artists", JSON.stringify(nextState.artists));
    localStorage.setItem("artistsFetchTimestamp", Date.now());
  }

  render() {
    return (
      <div>
        <Router>
          <Artists path="/" artists={this.state.artists} />
          <ArtistLyrics path="artists/:artist/lyrics" header="artist" />
          <Lyric path="artists/:artist/lyrics/:lyric" header="lyric" />
          <Authorisation path="/callback" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
