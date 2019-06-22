import React from "react";
import { Link } from "@reach/router";
import { FaArrowLeft } from "react-icons/fa";
import "./NavigateBack.css";

function NavigateBack(props) {
  return (
    <Link to={props.to} className="nav__link">
      <FaArrowLeft className="nav__icon" />
      Back
    </Link>
  );
}

export default NavigateBack;
