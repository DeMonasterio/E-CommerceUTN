import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prod) => setProducts(prod));
  }, []);
  return (
    <div>
      <header>
        <h1>TienditaUwUr</h1>
        <SearchBar/>
      </header>
      <main>
        <div className="products--container">

        {products
          .filter((prod) =>
            prod.title
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase())
          )
          .map((p) => (
            <ProductCard p={p} key={p.id} />
          ))}
          </div>
      </main>
    </div>
  );
}

export default App;