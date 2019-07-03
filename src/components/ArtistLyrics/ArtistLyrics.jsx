import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import ArtistHeader from "../ArtistHeader/ArtistHeader";
import LyricCard from "../LyricCard/LyricCard";

const LyricsContainer = styled.main`
  padding: 25px 0 0 20px;
`;

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
      <ArtistHeader artist={artist} artistLyricCount={lyrics.length} />
      <LyricsContainer className="lyrics">
        {lyrics.map(lyric => (
          <LyricCard key={lyric.slug} lyric={lyric} />
        ))}
      </LyricsContainer>
    </>
  );
}

export default ArtistLyrics;
