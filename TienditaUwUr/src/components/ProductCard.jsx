import "./css/ProductCard.css";



function ProductCard({ p, searchedText}) {
  if (!p.title.toLowerCase().includes(searchedText.toLowerCase()) ) {
    return <></>;
  }

  return (
    <>
    <article>
      <h2 className="titles">{p.title}</h2>
      <div className="product--container">
        <img className="product--image" src={p.image} alt={p.title} />
        <div className="product-description">
          <p>{p.category}</p>
          <p>${p.price}</p>
          <button>Añadir al carrito</button>
        </div>
      </div>
    </article>
    </>
  )}

  export default ProductCard;