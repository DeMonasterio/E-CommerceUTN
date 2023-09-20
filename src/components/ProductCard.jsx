import "./css/ProductCard.css";





function ProductCard({ p, searchedText, RangeValue }) {

  if (!p.title.toLowerCase().includes(searchedText.toLowerCase())) {
    return <></>;
  }

  if (p.price > RangeValue) {
    return <></>
  }

  return (
    <>
      <article>
        <div className="product--container">
        <h2 className="titles">{p.title}</h2>
          <img className="product--image" src={p.image} alt={p.title} />
          <div className="product-description">
            <p className="pcategory">{p.category}</p>
            <p className="pprice">${p.price}</p>
            <button className="buttoncart">Añadir al carrito</button>
          </div>
        </div>
      </article>
    </>
  )
}

export default ProductCard;