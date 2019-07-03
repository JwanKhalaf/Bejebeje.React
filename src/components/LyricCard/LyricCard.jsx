import React from "react";
import { Link } from "@reach/router";
import "./LyricCard.css";

function LyricCard(props) {
  return (
    <div className="lyric-card">
      <Link to={props.lyric.slug} className="lyric-card__link">
        {props.lyric.title}
      </Link>
    </div>
  );
}

export default LyricCard;
