function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h2>{name}</h2>
        <p className="product-price">R$ {price}</p>
        <button className="btn-add">Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

export default ProductCard;






