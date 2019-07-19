import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const BackArrow = styled(Link)`
  display: block;
  color: #ffffff;
  margin-bottom: 30px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`;

function NavigateBack(props) {
  return (
    <BackArrow to={props.to}>
      <Icon icon="arrow-left" />
    </BackArrow>
  );
}

export default NavigateBack;
