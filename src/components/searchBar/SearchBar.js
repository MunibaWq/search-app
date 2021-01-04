import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  //   console.log(input);
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  return (
    <div className="ui segment">
      <form onSubmit={(e) => onFormSubmit}>
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
      </form>
    </div>
  );
};

export default SearchBar;
