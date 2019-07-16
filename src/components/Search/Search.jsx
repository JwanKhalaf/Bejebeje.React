import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
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

const Icon = styled(FaSearch)`
  font-size: 1.5rem;
  color: #ffffff;
`;

function Search(props) {
  return (
    <SearchButton>
      <Icon />
    </SearchButton>
  );
}

export default Search;
