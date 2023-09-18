import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Filters from "./components/Filters.jsx"

function App() {
  const [maxPrice, setmaxPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [RangeValue, setRangeValue] = useState(999.99)

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
        <Filters RangeValue={RangeValue} setRangeValue={setRangeValue} />
        <div className="products--container">
          {products.map((p) => (
          <ProductCard 
          p={p} 
          key={p.id}
          searchedText={searchedText}
          RangeValue={RangeValue}
          />))}
        </div>
      </main>
    </>
  );
}

export default App;