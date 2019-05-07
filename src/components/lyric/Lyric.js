import React from "react";

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
        "/lyrics" +
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
    return <h1>The lyric man!</h1>;
  }
}

export default Lyric;
