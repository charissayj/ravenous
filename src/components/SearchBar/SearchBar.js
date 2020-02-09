import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

  renderSearchByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>this.renderSearchByOptions()</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
            Let's Go
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
