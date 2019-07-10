import React from "react";
import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  padding: 20px;
  background-color: #5b5847;
  height: 100vh;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 3;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(102%)")};
  transition: transform 0.2s ease-out;

  h1 {
    color: #ffffff;
  }
`;

function Sidebar(props) {
  return (
    <Aside show={props.show}>
      <h1>Hello from Sidebar!</h1>
    </Aside>
  );
}

export default Sidebar;
