import axios from "axios";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="ui container">
        <SearchBar />
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
