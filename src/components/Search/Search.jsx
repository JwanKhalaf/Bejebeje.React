import React from "react";
import "./Search.scss";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      query: ""
    };
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
    });
  }

  render() {
    return (
      <div className="search__wrap">
        <form className="search__form">
          <input
            className="search__input"
            type="text"
            placeholder="Search for artists ..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
      </div>
    );
  }
}

export default Search;
