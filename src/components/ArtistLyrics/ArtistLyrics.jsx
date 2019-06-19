import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "@reach/router";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./ArtistLyrics.css";
import ArtistHeader from "../ArtistHeader/ArtistHeader";

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

  if (artist && lyrics.length === 0) {
    return (
      <>
        <ArtistHeader artist={artist} artistLyricCount={lyrics.length} />
        <div className="info-text__wrap">
          <h2 className="info-text__heading">Sorry!</h2>
          <h3 className="info-text__body">
            No lyrics have been submitted yet.
          </h3>
        </div>
      </>
    );
  }

  return (
    <>
      <ArtistHeader artist={artist} artistLyricCount={lyrics.length} />
      <ul className="lyrics-list">
        {lyrics.map(lyric => (
          <li key={lyric.slug} className="lyric-item">
            <Link to={lyric.slug} className="lyric-item__link">
              {lyric.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ArtistLyrics;
