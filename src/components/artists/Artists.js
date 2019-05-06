import React from "react";
import Header from "../header/Header";
import "./artists.scss";

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      artists: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5010/artists")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            artists: result
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
    const { error, isLoaded, artists: items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header />
          <ul className="is-artist-list">
            {items.map(item => (
              <li key={item.slug} className="is-artist-list-item">
                {item.firstName} {item.lastName}
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default Artists;
