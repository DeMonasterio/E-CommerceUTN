import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Filters from "./components/Filters.jsx"

function App() {
  const [products, setProducts] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prod) => setProducts(prod));
  }, []);
  return (
    <>
        <NavBar />
        <SearchBar
        setSearchedText={setSearchedText}
        />
      <main>
        <Filters />
        <div className="products--container">
          {products.map((p) => (
          <ProductCard 
          p={p} 
          key={p.id}
          searchedText={searchedText}
          />))}
        </div>
      </main>
    </>
  );
}

export default App;