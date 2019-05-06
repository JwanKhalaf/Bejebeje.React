import React from "react";

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
        <ul>
          {items.map(item => (
            <li key={item.slug}>
              {item.firstName} {item.lastName}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Artists;
