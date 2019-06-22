import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./ArtistLyrics.css";
import ArtistHeader from "../ArtistHeader/ArtistHeader";
import LyricCard from "../LyricCard/LyricCard";
import NavigateBack from "../NavigateBack/NavigateBack";

function ArtistLyrics(props) {
  const [lyrics, setLyrics] = useState([]);
  const [artist, setArtist] = useState();

  useEffect(() => {
    axios
      .all([
        axios.get(API_CONSTANTS.singleArtist(props.artistSlug)),
        axios.get(API_CONSTANTS.artistLyrics(props.artistSlug))
      ])
      .then(
        axios.spread((artistResponse, lyricsResponse) => {
          setArtist(artistResponse.data);
          setLyrics(lyricsResponse.data);
        })
      );
  }, []);

  if (artist == null && lyrics.length === 0) {
    return (
      <>
        <Header />
        <ul className="is-preload-list">
          <li className="is-list-item-preload" />
          <li className="is-list-item-preload" />
          <li className="is-list-item-preload" />
          <li className="is-list-item-preload" />
        </ul>
      </>
    );
  }

  return (
    <>
      <NavigateBack to="/" />
      <ArtistHeader artist={artist} artistLyricCount={lyrics.length} />
      <ul className="lyrics-list">
        {lyrics.map(lyric => (
          <LyricCard key={lyric.slug} lyric={lyric} />
        ))}
      </ul>
    </>
  );
}

export default ArtistLyrics;
