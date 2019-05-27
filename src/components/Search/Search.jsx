import React from "react";
import posed from "react-pose";
import "./Search.scss";

const SearchButton = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.1 },
  expanded: {
    transition: { duration: 30 },
    width: 700,
    radius: 3
  },
  hidden: {
    width: 55,
    radius: 50
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
      <SearchButton
        className="search__wrap"
        pose={isActive ? "expanded" : "hidden"}
      >
        <form className="search__form">
          <input type="text" className="search__input" />
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
