import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar.jsx";
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
    <>
    {/*<BrowserRouter> 
         <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/products' element={<ProductsList />}></Route>
        </Routes> */}
      <header>
        <div className="hero__title">
          <h1>TienditaUwUr</h1>
          <h2>C</h2>
        </div>
        <NavBar />
        <SearchBar/>
      </header>
      <main>
        <div className="products--container">
          {products.map((p) => (<ProductCard p={p} key={p.id}/>)) }
        </div>
      </main>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;