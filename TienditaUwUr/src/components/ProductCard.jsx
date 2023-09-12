import "./css/ProductCard.css";
import { useState } from "react";
function ProductCard({ p }) {
  const [isFullDescription, setIsFullDescription] = useState(false);
  const handleExpand = () => {
    setIsFullDescription(!isFullDescription);
  };
  return (

    <article>
      <h2 className="titles">{p.title}</h2>
      <div className="product--container">
        <img className="product--image" src={p.image} alt={p.title}/>
        <div className="product-description">
          <p>{p.category}</p>
          <p>${p.price}</p>
          <button>Añadir al carrito</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;