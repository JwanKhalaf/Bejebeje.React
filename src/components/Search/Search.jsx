import React from "react";
import posed from "react-pose";
import "./Search.css";

const SearchButton = posed.div({
  active: {
    width: "calc(100vw - 70px)",
    borderRadius: 3
  },
  inactive: {
    width: "auto",
    borderRadius: 50
  }
});

const SearchInput = posed.input({
  active: {
    width: "calc(100vw - 25px)",
    padding: 15
  },
  inactive: {
    width: 0,
    padding: 0
  }
});

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
      isActive: !this.state.isActive
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
      <SearchButton
        className="search__wrap"
        pose={isActive ? "active" : "inactive"}
      >
        <form className="search__form">
          <SearchInput
            type="text"
            className="search__input"
            pose={isActive ? "active" : "inactive"}
          />
          <button
            className="search__button"
            onClick={this.handleSearchButtonClick}
          >
            <i className="fal fa-search search__icon" />
          </button>
        </form>
      </SearchButton>
    );
  }
}

export default Search;
