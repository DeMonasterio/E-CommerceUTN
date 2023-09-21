import { useEffect, useState } from "react";

// Custom hook para cargar productos desde una API falsa.
function useProductData() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((prod) => setProducts(prod));
    }, []);
  
    return products;
  }

export default useProductData;
