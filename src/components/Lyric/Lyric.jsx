import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import LyricHeader from "../LyricHeader/LyricHeader";
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

    axios.get(API_CONSTANTS.singleLyric(artistSlug, lyricSlug)).then(result => {
      setLyric(result.data);
    });

    axios.get(API_CONSTANTS.singleArtist(artistSlug)).then(result => {
      setArtist(result.data);
    });
  });

  return (
    <>
      <LyricHeader artist={artist} />
      <div className="is-lyric" dangerouslySetInnerHTML={createMarkup(lyric)} />
    </>
  );
}

export default Lyric;
