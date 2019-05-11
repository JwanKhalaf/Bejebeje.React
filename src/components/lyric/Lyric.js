import React from "react";
import Header from "../header/Header";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
import "./lyric.scss";

class Lyric extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      lyric: null
    };
  }

  componentDidMount() {
    fetch(API_CONSTANTS.lyric(this.props.artist, this.props.lyric))
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            lyric: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, lyric } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Header />;
    } else {
      return (
        <>
          <Header display={this.props.header} />
          <div className="is-lyric">
            <h1>{lyric.title}</h1>
            {lyric.body}
          </div>
        </>
      );
    }
  }
}

export default Lyric;
