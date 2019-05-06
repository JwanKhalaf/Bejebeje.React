import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Authorisation from "../authorisation/Authorisation";
import Artists from "../artists/Artists";
import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Artists path="/" />
          <Authorisation path="/callback" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
