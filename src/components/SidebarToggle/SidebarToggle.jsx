import React from "react";
import styled from "styled-components";

const SidebarToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 32px;
  height: 39px;
  border: none;
  outline: none;
  background: transparent;
`;

const ButtonBarLong = styled.div`
  height: 3px;
  width: 32px;
  background-color: #ffffff;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const ButtonBarShort = styled.div`
  height: 3px;
  width: 20px;
  background-color: #ffffff;
  border-radius: 2px;
`;

function SidebarToggle(props) {
  return (
    <SidebarToggleButton>
      <ButtonBarLong />
      <ButtonBarShort />
    </SidebarToggleButton>
  );
}

export default SidebarToggle;
