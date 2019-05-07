import React from "react";
import Header from "../header/Header";
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
    fetch(
      "http://localhost:5010/artists/" +
        this.props.artist +
        "/lyrics/" +
        this.props.lyric
    )
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
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header />
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
