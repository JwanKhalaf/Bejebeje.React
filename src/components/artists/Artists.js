import React from "react";
import Header from "../header/Header";
import { Link } from "@reach/router";
import { API_CONSTANTS } from "../../helpers/apiEndpoints";
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
    fetch(API_CONSTANTS.artists)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            artists: result
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

  render() {
    const { error, isLoaded, artists: items } = this.state;
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
          <ul className="is-artist-list">
            {items.map(item => (
              <li key={item.slug} className="is-artist-list-item">
                <Link to={item.slug + "/lyrics"}>
                  <img src={API_CONSTANTS.image(item.slug)} alt={item.slug} />
                  {item.firstName} {item.lastName}
                </Link>
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default Artists;
