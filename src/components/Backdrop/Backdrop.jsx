import React from "react";
import styled from "styled-components";

const DarkDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
`;

function Backdrop(props) {
  return <DarkDiv onClick={props.click} />;
}

export default Backdrop;
