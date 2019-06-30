import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import "./Artists.css";
import ArtistCard from "../ArtistCard/ArtistCard";

function Artists(props) {
  const getPrimaryArtistSlug = slugs => {
    return slugs.filter(slug => slug.isPrimary)[0].name;
  };

  const singleRefs = props.artists.reduce((acc, value, index) => {
    acc[index] = React.createRef();
    return acc;
  }, {});

  const observer = new IntersectionObserver(props.intersectionCallback, {
    root: null,
    threshold: 0.8
  });

  useEffect(() => {
    if (props.artists.length > 0) {
      const indexOfLastArtist = props.artists.length - 2;
      observer.observe(singleRefs[indexOfLastArtist].current);
      const entries = observer.takeRecords();
    }
  }, [props.artists]);

  return (
    <>
      <Header title="Browse" />
      <div className="artists__list">
        {props.artists.map((artist, index) => {
          const primarySlug = getPrimaryArtistSlug(artist.slugs);
          return (
            <ArtistCard
              key={primarySlug}
              artist={artist}
              primarySlug={primarySlug}
              itemRef={singleRefs[index]}
            />
          );
        })}
      </div>
    </>
  );
}

export default Artists;
