import React from "react";
import styled from "styled-components";
import { APP_COLOURS } from "../../utils/appColours";

const SearchButton = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: ${APP_COLOURS.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function Search(props) {
  return <SearchButton></SearchButton>;
}

export default Search;
