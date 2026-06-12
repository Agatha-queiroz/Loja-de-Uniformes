function ProdutoCard({ imagem, nome, preco }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} />

      <div className="produto-info">
        <h2>{nome}</h2>

        <p className="produto-preco">
          R$ {preco}
        </p>

        <button className="botao-add">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default ProdutoCard;