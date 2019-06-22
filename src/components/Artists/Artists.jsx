import React from "react";
import Header from "../Header/Header";
import "./Artists.css";
import ArtistCard from "../ArtistCard/ArtistCard";

function Artists(props) {
  const getPrimaryArtistSlug = slugs => {
    return slugs.filter(slug => slug.isPrimary)[0].name;
  };

  return (
    <>
      <Header title="Browse" />
      <ul className="artist-list">
        {props.artists.map(artist => {
          const primarySlug = getPrimaryArtistSlug(artist.slugs);
          return (
            <ArtistCard
              key={primarySlug}
              artist={artist}
              primarySlug={primarySlug}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Artists;
