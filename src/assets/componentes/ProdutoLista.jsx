import ProdutoCard from "./ProdutoCard";

function ProdutoLista({produtos, onAddAoCart,filtrados}) {
  return (
    <div className="produto-grid">

      {filtrados.map((produto) => (
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
