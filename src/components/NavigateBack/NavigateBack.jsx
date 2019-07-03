import React from "react";
import { Link } from "@reach/router";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

const BackArrow = styled(Link)`
  color: #ffffff;
`;

const Icon = styled(FaArrowLeft)`
  font-size: 2rem;
`;

function NavigateBack(props) {
  return (
    <BackArrow to={props.to}>
      <Icon />
    </BackArrow>
  );
}

export default NavigateBack;
