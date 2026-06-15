import ProdutoCard from "./ProdutoCard";

function ProdutoLista({produtos, onAddAoCart,}) {
  return (
    <div className="produto-grid">

      {produtos.map((produto) => (
        <ProdutoCard
          key={produto.id}
          imagem={produto.imagem}
          nome={produto.nome}
          preco={produto.preco}
          onAddAoCart={onAddAoCart}
        />
      ))}

    </div>
  );
}

export default ProdutoLista;
