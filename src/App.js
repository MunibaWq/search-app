import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import ImageList from "./components/imageList/ImageList";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (inpt) => {
    //add axios to fetch data from API
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: inpt },
      headers: {
        Authorization: process.env.REACT_APP_UNSPLASH_API_KEY,
      },
    });
    // console.log(response);
    // console.log(response.data.results);
    setImages(response.data.results);
    // console.log(images);
  };

  return (
    <div className="App">
      <div className="ui container">
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageList images={images} />
        {/* We are going to add these components: <br />
      The search function props will be passed down from App.js
      <br />
      1.SearchBar.js <br />
      2.ImageList.js <br />
      3.ImageCard.js <br /> */}
      </div>
    </div>
  );
};

export default App;
