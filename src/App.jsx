import React, { useRef, useCallback, useState, useEffect } from "react";
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
  const totalNumberOfArtists = useRef(0);
  const offset = useRef(0);
  const limit = 10;

  const callback = entries => {
    if (entries[0].isIntersecting) {
      if (artists.length !== totalNumberOfArtists) {
        fetchArtists(offset, limit);
      }
    }
  };

  const fetchArtists = (offset, limit) => {
    axios.get(API_CONSTANTS.artists(offset.current, limit)).then(result => {
      const artistsArray = result.data.artists;
      setArtists([...artists, ...artistsArray]);
      offset.current += artistsArray.length;
      totalNumberOfArtists.current = result.data.paging.total;
      console.log(`offset is now at ${offset.current}.`);
    });
  };

  useEffect(() => {
    fetchArtists(offset, limit);
  }, []);

  return (
    <div>
      <Router>
        <Artists
          path="/"
          artists={artists}
          intersectionCallback={callback}
          totalArtists={totalNumberOfArtists.current}
        />
        <ArtistLyrics path="artists/:artistSlug/lyrics" />
        <Lyric path="artists/:artistSlug/lyrics/:lyricSlug" />
        <Authorisation path="/callback" />
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
