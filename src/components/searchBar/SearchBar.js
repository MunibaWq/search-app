import "./SearchBar.css";
import React from "react";

const SearchBar = () => {
  return (
    <div className="ui container">
      <div className="ui search">
        <input className="prompt" type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SearchBar;
