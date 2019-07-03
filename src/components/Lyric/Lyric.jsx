import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import LyricHeader from "../LyricHeader/LyricHeader";
import NavigateBack from "../NavigateBack/NavigateBack";
import "./lyric.css";

const createMarkup = lyric => {
  return { __html: lyric.body };
};

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
      <NavigateBack to="/" />
      <LyricHeader artist={artist} />
      <main className="lyric" dangerouslySetInnerHTML={createMarkup(lyric)} />
    </>
  );
}

export default Lyric;
