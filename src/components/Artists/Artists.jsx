import React from "react";
import Header from "../Header/Header";
import "./Artists.css";
import ArtistCard from "../ArtistCard/ArtistCard";

function Artists(props) {
  const getPrimaryArtistSlug = slugs => {
    return slugs.filter(slug => slug.isPrimary)[0].name;
  };

  const observer = new IntersectionObserver(props.intersectionCallback, {
    root: null,
    threshold: 0.8
  });

  return (
    <>
      <Header title="Browse" />
      <div className="artists__list">
        {props.artists.map((artist, index) => {
          const primarySlug = getPrimaryArtistSlug(artist.slugs);
          const artistCard = artist => {
            return <ArtistCard artist={artist} primarySlug={primarySlug} />;
          };
          if (index === 8) {
            observer.observe(artistCard);
          }
          return artistCard;
        })}
      </div>
    </>
  );
}

export default Artists;
