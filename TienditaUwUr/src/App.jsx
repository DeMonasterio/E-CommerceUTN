import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Filters from "./components/Filters.jsx";

function App() {
  const [minToMaxPrice, setminToMaxPrice] = useState(0);
  const [maxToMinPrice, setmaxtoMinPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [RangeValue, setRangeValue] = useState(1000);
  const arrayProducts = [];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prod) => setProducts(prod));
  }, []);

//  Ordenamiento de mayor a menor
const sortProducts = (product, arrayProducts) => {
  arrayProducts.push(product);
    arrayProducts.sort((a, b) => a.price - b.price);
  }

  const sortProductsMax = (product, arrayProducts) => {
    arrayProducts.push(product);
    arrayProducts.sort((a, b) => b.price - a.price);
  }

  const noOrderCase = (product, arrayProducts) =>{
    arrayProducts.push(product);
  }

  if (maxToMinPrice || minToMaxPrice === true) {
    if (minToMaxPrice === true && maxToMinPrice === false) {
      for (const product of products) {
        sortProducts(product, arrayProducts)
      }
    }
    else if (maxToMinPrice === true && minToMaxPrice == false) {
      for (const product of products) {
        sortProductsMax(product, arrayProducts)
      }
      
    }
  } else {
    for (const product of products) {
      noOrderCase(product, arrayProducts)
    }
  }
  
  //  Fin del Ordenamiento de mayor a menor
  
  return (
    <>
      <NavBar />
      <SearchBar setSearchedText={setSearchedText} />
      <main>
        <Filters
          RangeValue={RangeValue}
          setRangeValue={setRangeValue}
          setmaxtoMinPrice={setmaxtoMinPrice}
          setminToMaxPrice={setminToMaxPrice}
        />

        <div className="products--container">
          {arrayProducts.map((p) => (
            <ProductCard
              p={p}
              key={p.id}
              searchedText={searchedText}
              RangeValue={RangeValue}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
