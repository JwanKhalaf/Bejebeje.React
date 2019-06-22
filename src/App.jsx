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
  const [total, setTotal] = useState(0);
  const artists = useRef([]);
  const loading = useRef(false);
  const offset = useRef(0);
  const limit = useRef(10);

  const loadMore = useCallback(() => {
    if (loading.current) {
      return;
    }
    loading.current = true;

    axios
      .get(API_CONSTANTS.artists(offset.current, limit.current))
      .then(result => {
        const artistsArray = result.data.artists;
        artists.current = [...artists.current, ...artistsArray];
        loading.current = false;
        setTotal(artists.current.length);
        offset.current += 10;
      });
  }, []);

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div>
      <Router>
        <Artists
          path="/"
          artists={artists.current}
          loadMore={loadMore}
          total={total}
        />
        <ArtistLyrics path="artists/:artistSlug/lyrics" />
        <Lyric path="artists/:artistSlug/lyrics/:lyricSlug" />
        <Authorisation path="/callback" />
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
