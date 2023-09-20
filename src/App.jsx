import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Filters from "./components/Filters.jsx";








function App() {
  const [minToMaxPrice, setminToMaxPrice] = useState(0);
  const [maxToMinPrice, setmaxtoMinPrice] = useState(0);
  const [Alphab, setAlphab] = useState()
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

  const noOrderCase = (product, arrayProducts) => {
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
    //  Fin del Ordenamiento de mayor a menor
  } else {
    for (const product of products) {
      noOrderCase(product, arrayProducts)
    }
  }
  if (Alphab === true) {
    const rta = arrayProducts.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
      if (a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
      return 0;
    })
  }






  return (
    <>
        <NavBar />
      <header className="hero__fix">
        <SearchBar setSearchedText={setSearchedText} />
        <Filters RangeValue={RangeValue} setRangeValue={setRangeValue}
          setmaxtoMinPrice={setmaxtoMinPrice}
          setminToMaxPrice={setminToMaxPrice} setAlphab={setAlphab} />
      </header>
      <main>

        <div className="products--container">
          {arrayProducts.map((p) => (<ProductCard p={p} key={p.id} searchedText={searchedText} RangeValue={RangeValue} />))}
        </div>
      </main>
    </>
  );
}

export default App;
