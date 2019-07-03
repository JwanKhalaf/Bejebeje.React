import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import LyricHeader from "../LyricHeader/LyricHeader";

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

function Lyric(props) {
  const [lyric, setLyric] = useState({});
  const [artist, setArtist] = useState({});

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
        })
      );
  }, []);

  return (
    <>
      <LyricHeader artist={artist} title={lyric.title} />
      <LyricBody dangerouslySetInnerHTML={createMarkup(lyric)} />
    </>
  );
}

export default Lyric;
