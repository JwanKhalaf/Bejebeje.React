import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import AuthorHeader from "../AuthorHeader/AuthorHeader";

const Biography = styled.main`
  padding: 20px;
`;

const createMarkup = author => {
  return { __html: author.biography };
};

function Author(props) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    axios
      .get(API_CONSTANTS.authorDetails(props.authorSlug))
      .then(result => setAuthor(result.data));
  }, []);

  const AuthorBiography = () => {
    if (author) {
      return (
        <Biography dangerouslySetInnerHTML={createMarkup(author)}></Biography>
      );
    }
    return <p>no author</p>;
  };

  const Header = () => {
    const artistSlug = props.location.state.artistSlug;
    const lyricSlug = props.location.state.lyricSlug;

    if (author) {
      return (
        <>
          <AuthorHeader
            author={author}
            artistSlug={artistSlug}
            lyricSlug={lyricSlug}
            sidebarToggle={props.sidebarToggle}
          />
        </>
      );
    }
    return "";
  };

  return (
    <>
      <Header />
      <AuthorBiography />
    </>
  );
}

export default Author;
