import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import axios from "axios";
import Authorisation from "./components/Authorisation/Authorisation";
import Artists from "./components/Artists/Artists";
import ArtistLyrics from "./components/ArtistLyrics/ArtistLyrics";
import Lyric from "./components/Lyric/Lyric";
import { API_CONSTANTS } from "./helpers/apiEndpoints";
import "./App.css";

function App() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get(API_CONSTANTS.artists).then(result => {
      setArtists(result.data.artists);
    });
  });

  return (
    <div>
      <Router>
        <Artists path="/" artists={artists} />
        <ArtistLyrics path="artists/:artistSlug/lyrics" />
        <Lyric path="artists/:artistSlug/lyrics/:lyricSlug" />
        <Authorisation path="/callback" />
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
