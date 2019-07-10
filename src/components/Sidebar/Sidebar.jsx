import React from "react";
import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  padding: 20px;
  background-color: wheat;
  height: 100vh;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
`;

function Sidebar(props) {
  return (
    <Aside>
      <h1>Hello from Sidebar!</h1>
    </Aside>
  );
}

export default Sidebar;
