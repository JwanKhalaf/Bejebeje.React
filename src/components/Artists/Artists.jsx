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
      <div className="artists__list">
        {props.artists.map(artist => {
          const primarySlug = getPrimaryArtistSlug(artist.slugs);
          return <ArtistCard artist={artist} primarySlug={primarySlug} />;
        })}
      </div>
    </>
  );
}

export default Artists;
