import React from "react";
import "./css/SearchBar.css";

function SearchBar() {
  return (
    <form>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="There's a search to do"
      />
      <input type="submit" value="Buscar" />
    </form>
  );
}

export default SearchBar;