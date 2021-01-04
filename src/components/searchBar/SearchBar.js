import "./SearchBar.css";
import React from "react";

const SearchBar = () => {
  return (
    <div className="ui segment">
      <div className="ui search icon input">
        <input className="prompt" type="text" placeholder="Search..." />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;
