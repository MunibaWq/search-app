import axios from "axios";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  const onSearchSubmit = (input) => {
    //add axios to fetch data from API
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: input },
        headers: {
          Authorization: process.env.REACT_APP_UNSPLASH_API_KEY,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <div className="ui container">
        <SearchBar onSubmit={onSearchSubmit} />
        {/* We are going to add these components: <br />
      The search function props will be passed down from App.js
      <br />
      1.SearchBar.js <br />
      2.ImageList.js <br />
      3.ImageCard.js <br /> */}
      </div>
    </div>
  );
}

export default App;
