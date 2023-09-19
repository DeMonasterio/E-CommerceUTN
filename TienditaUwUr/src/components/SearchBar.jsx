
import React, { useState } from "react";
import "./css/SearchBar.css";

function SearchBar({setSearchedText}) {

  const [UnLujoAsiatico, setUnLujoAsiatico] = useState("")
  const handleInputChange = (e) => {
    setUnLujoAsiatico(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
      setSearchedText(UnLujoAsiatico)
    } 


  return (
    <form onSubmit={handleSubmit} className="searchbarform">
      <input
      className="searchbarinput"
        type="search"
        name="search"
        id="search"
        placeholder="There's a search to do"
        onChange={handleInputChange}
      />
      <button className="submitbtn" type="submit">Buscar!</button>
    </form>
  );
}
export default SearchBar;