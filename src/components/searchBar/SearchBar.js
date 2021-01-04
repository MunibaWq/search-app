import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  //   console.log(input);
  return (
    <div className="ui segment">
      <div className="ui search icon input">
        <input
          className="prompt"
          type="text"
          value={input}
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
        />

        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;
