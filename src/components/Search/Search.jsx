import React from "react";
import "./Search.scss";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);

    this.state = {
      query: "",
      isActive: false
    };
  }

  handleSearchButtonClick(event) {
    event.preventDefault();
    this.setState({
      isActive: true
    });
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className={["search__wrap", isActive && "is-active"].join(" ")}>
        <form className="search__form">
          <input type="text" className="search__input" />
          <button
            className="search__button"
            onClick={this.handleSearchButtonClick}
          >
            <i className="fal fa-search search__icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
