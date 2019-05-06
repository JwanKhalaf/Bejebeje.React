import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import LoginControls from "../logincontrols/LoginControls";
import Authorisation from "../authorisation/Authorisation";
import Artists from "../artists/Artists";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Hello from Bejebeje</h1>
        <Router>
          <LoginControls path="/" />
          <Authorisation path="/callback" />
        </Router>
        <Artists />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
