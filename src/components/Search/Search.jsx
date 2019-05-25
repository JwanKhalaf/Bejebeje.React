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
          <button className="search__button">
            <i className="fal fa-search search__icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
