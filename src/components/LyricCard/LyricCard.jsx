import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { APP_COLOURS } from "../../utils/appColours";

const Card = styled.div`
  background-color: ${APP_COLOURS.grey};
  margin-bottom: 20px;
  min-height: 80px;
  display: flex;
  align-items: center;
`;

const LyricLink = styled(Link)`
  color: #ffffff;
  font-size: 1.33rem;
  padding: 15px;
  display: block;
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

function LyricCard(props) {
  return (
    <Card>
      <LyricLink to={props.lyric.slug}>{props.lyric.title}</LyricLink>
    </Card>
  );
}

export default LyricCard;
