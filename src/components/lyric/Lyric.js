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
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  createMarkup() {
    return { __html: this.state.lyric.body };
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Header />;
    } else {
      return (
        <>
          <Header display={this.props.header} />
          <div
            className="is-lyric"
            dangerouslySetInnerHTML={this.createMarkup()}
          />
        </>
      );
    }
  }
}

export default Lyric;
