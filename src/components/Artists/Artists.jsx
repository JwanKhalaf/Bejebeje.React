import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import "./Artists.css";
import ArtistCard from "../ArtistCard/ArtistCard";

function Artists(props) {
  const getPrimaryArtistSlug = slugs => {
    return slugs.filter(slug => slug.isPrimary)[0].name;
  };

  const singleRefs = props.artists.reduce((acc, value) => {
    acc[getPrimaryArtistSlug(value.slugs)] = React.createRef();
    return acc;
  }, {});

  const observer = new IntersectionObserver(props.intersectionCallback, {
    root: null,
    threshold: 0.8
  });

  useEffect(() => {
    console.log("useEffect is called.");
    if (props.artists.length > 0) {
      observer.observe(singleRefs["howling-wolf"].current);
    }
  }, [props.artists]);

  return (
    <>
      <Header title="Browse" />
      <div className="artists__list">
        {props.artists.map(artist => {
          const primarySlug = getPrimaryArtistSlug(artist.slugs);
          return (
            <ArtistCard
              key={primarySlug}
              artist={artist}
              primarySlug={primarySlug}
              itemRef={singleRefs[primarySlug]}
            />
          );
        })}
      </div>
    </>
  );
}

export default Artists;
