import React, { useRef, useState, useEffect } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import AuthHandshake from "./components/AuthHandshake/AuthHandshake";
import Artists from "./components/Artists/Artists";
import ArtistLyrics from "./components/ArtistLyrics/ArtistLyrics";
import Lyric from "./components/Lyric/Lyric";
import Search from "./components/Search/Search";
import Author from "./components/Author/Author";
import Sidebar from "./components/Sidebar/Sidebar";
import Backdrop from "./components/Backdrop/Backdrop";
import LoginControls from "./components/LoginControls/LoginControls";
import {
  AuthProvider,
  AuthConsumer
} from "./components/AuthProvider/AuthProvider";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { API_CONSTANTS } from "./utils/apiEndpoints";
import { APP_COLOURS } from "./utils/appColours";

library.add(faArrowLeft, faCoffee);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700|Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
  }

  body {
    background-color: ${APP_COLOURS.wheat};
  }
`;

function App() {
  const [artists, setArtists] = useState([]);
  const [sidebarToggle, setSidebarToggle] = useState(false);
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

  const sidebarToggleButtonClickHandler = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const backdropClickHandler = () => {
    setSidebarToggle(false);
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

  let backdrop;

  if (sidebarToggle) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Artists
          path="/"
          artists={artists}
          intersectionCallback={callback}
          totalArtists={totalNumberOfArtists.current}
          sidebarToggle={sidebarToggleButtonClickHandler}
        />
        <ArtistLyrics
          path="artists/:artistSlug/lyrics"
          sidebarToggle={sidebarToggleButtonClickHandler}
        />
        <Lyric
          path="artists/:artistSlug/lyrics/:lyricSlug"
          sidebarToggle={sidebarToggleButtonClickHandler}
        />
        <Author
          path="author/:authorSlug"
          sidebarToggle={sidebarToggleButtonClickHandler}
        />
        <AuthHandshake path="/login-callback" />
      </Router>
      <Search />
      <Sidebar show={sidebarToggle}>
        <AuthConsumer>
          {value => {
            if (value.isAuthenticated) {
              return <h1>You're authenticated!</h1>;
            } else {
              return <LoginControls />;
            }
          }}
        </AuthConsumer>
      </Sidebar>
      {backdrop}
    </AuthProvider>
  );
}

render(<App />, document.getElementById("root"));
