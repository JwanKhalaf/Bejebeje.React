import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: bold;
`;

function Title(props) {
  return <SectionTitle>{props.text}</SectionTitle>;
}

export default Title;
