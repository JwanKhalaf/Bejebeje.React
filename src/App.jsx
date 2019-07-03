import React, { useRef, useState, useEffect } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import Authorisation from "./components/Authorisation/Authorisation";
import Artists from "./components/Artists/Artists";
import ArtistLyrics from "./components/ArtistLyrics/ArtistLyrics";
import Lyric from "./components/Lyric/Lyric";
import { API_CONSTANTS } from "./helpers/apiEndpoints";
import { APP_COLOURS } from "./helpers/appColours";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700|Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
    font-size: 16px;
  }

  body {
    background-color: ${APP_COLOURS.wheat};
  }
`;

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
    });
  };

  useEffect(() => {
    fetchArtists(offset, limit);
  }, []);

  return (
    <div>
      <GlobalStyle />
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
