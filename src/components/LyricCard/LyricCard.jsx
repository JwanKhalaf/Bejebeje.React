import React from "react";
import { Link } from "@reach/router";
import "./LyricCard.css";

function LyricCard(props) {
  return (
    <li className="lyric-item">
      <Link to={props.lyric.slug} className="lyric-item__link">
        {props.lyric.title}
      </Link>
    </li>
  );
}

export default LyricCard;
