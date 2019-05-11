import React from "react";
import Header from "../header/Header";
import { Link } from "@reach/router";
import "./artistlyrics.scss";

class ArtistLyrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      lyrics: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5010/artists/" + this.props.artist + "/lyrics")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            lyrics: result
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
    const { error, isLoaded, lyrics: items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <>
          <Header />
          <ul className="is-preload-list">
            <li className="is-list-item-preload" />
            <li className="is-list-item-preload" />
            <li className="is-list-item-preload" />
            <li className="is-list-item-preload" />
          </ul>
        </>
      );
    } else {
      return (
        <>
          <Header display={this.props.header} />
          <ul className="is-lyrics-list">
            {items.map(item => (
              <li key={item.slug} className="is-lyric-list-item">
                <Link to={item.slug}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default ArtistLyrics;
