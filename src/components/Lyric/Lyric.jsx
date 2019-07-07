import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import LyricHeader from "../LyricHeader/LyricHeader";
import { APP_COLOURS } from "../../helpers/appColours";

const createMarkup = lyric => {
  return { __html: lyric.body };
};

const LyricBody = styled.main`
  padding: 25px 25px 0 25px;
  font-family: "Merriweather", serif;
  font-weight: bold;

  p {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #212121;
    margin-bottom: 20px;
  }
`;

const TempHeading = styled.h1`
  background-color: ${APP_COLOURS.olive};
  font-size: 2rem;
  display: block;
  padding: 20px;
`;

function Lyric(props) {
  const [lyric, setLyric] = useState(null);
  const [artist, setArtist] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const artistSlug = props.artistSlug;
    const lyricSlug = props.lyricSlug;

    axios
      .all([
        axios.get(API_CONSTANTS.singleArtist(artistSlug)),
        axios.get(API_CONSTANTS.singleLyric(artistSlug, lyricSlug))
      ])
      .then(
        axios.spread((artistResponse, lyricResponse) => {
          setArtist(artistResponse.data);
          setLyric(lyricResponse.data);
          fetchAuthorDetails(lyricResponse.data.authorSlug);
        })
      );
  }, []);

  const fetchAuthorDetails = authorSlug => {
    axios.get(API_CONSTANTS.authorDetails(authorSlug)).then(result => {
      setAuthor(result.data);
    });
  };

  const Header = () => {
    if (artist && lyric) {
      return <LyricHeader artist={artist} title={lyric.title} />;
    }
    return "";
  };

  return (
    <>
      <Header />
      {lyric && <LyricBody dangerouslySetInnerHTML={createMarkup(lyric)} />}
    </>
  );
}

export default Lyric;
