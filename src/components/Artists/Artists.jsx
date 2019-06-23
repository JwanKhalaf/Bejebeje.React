import React from "react";
import Header from "../Header/Header";
import { Virtuoso } from "react-virtuoso";
import "./Artists.css";
import ArtistCard from "../ArtistCard/ArtistCard";

function Artists(props) {
  const getPrimaryArtistSlug = slugs => {
    return slugs.filter(slug => slug.isPrimary)[0].name;
  };

  const generateArtistCard = index => {
    const artist = props.artists[index];
    const primarySlug = getPrimaryArtistSlug(artist.slugs);
    return <ArtistCard artist={artist} primarySlug={primarySlug} />;
  };

  return (
    <>
      <Header title="Browse" />
      <Virtuoso
        style={{ margin: "15px" }}
        overscan={50}
        totalCount={props.total}
        item={generateArtistCard}
        endReached={() => props.loadMore()}
        footer={() => props.renderFooter()}
        className="artists__container"
      />
    </>
  );
}

export default Artists;
