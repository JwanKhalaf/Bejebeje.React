import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import "./Artists.css";
import ArtistCard from "../ArtistCard/ArtistCard";

function Artists(props) {
  const intersectionObserver = useRef(null);

  const artistCardReferences = useRef(null);

  const totalNumberOfArtists = props.totalArtists;

  const getPrimaryArtistSlug = slugs => {
    return slugs.filter(slug => slug.isPrimary)[0].name;
  };

  artistCardReferences.current = props.artists.reduce((acc, value, index) => {
    acc[index] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    intersectionObserver.current = new IntersectionObserver(
      props.intersectionCallback,
      {
        root: null,
        threshold: 0.8
      }
    );

    if (
      props.artists.length > 0 &&
      props.artists.length !== totalNumberOfArtists
    ) {
      const indexOfLastArtist = props.artists.length - 2;
      const targetElement =
        artistCardReferences.current[indexOfLastArtist].current;

      intersectionObserver.current.observe(targetElement);
    }

    return () => {
      if (props.artists.length > 0) {
        const indexOfLastArtist = props.artists.length - 2;
        const targetElement =
          artistCardReferences.current[indexOfLastArtist].current;

        intersectionObserver.current.unobserve(targetElement);

        if (props.artists.length === totalNumberOfArtists) {
          intersectionObserver.current.disconnect();
        }
      }
    };
  }, [props.artists]);

  return (
    <>
      <Header title="Browse" />
      <main className="artists">
        {props.artists.map((artist, index) => {
          const primarySlug = getPrimaryArtistSlug(artist.slugs);
          return (
            <ArtistCard
              key={primarySlug}
              artist={artist}
              primarySlug={primarySlug}
              itemRef={artistCardReferences.current[index]}
            />
          );
        })}
      </main>
    </>
  );
}

export default Artists;
