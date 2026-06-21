import ProdutoCard from "./ProdutoCard";

function ProdutoLista({produtos, onAddAoCart,filtrados,novoItem, apagar }) {
  return (
    <div className="produto-grid">

      {filtrados.map((produto) => (
        <ProdutoCard
          key={produto.id}
          imagem={produto.imagem}
          nome={produto.nome}
          preco={produto.preco}
          onAddAoCart={onAddAoCart}
          novoItem={novoItem}
          onApagar={() => apagar(produto.id)}
          onEditar={() => iniciarEdicao(produto)}
         
          
        /> 
       
        
      ))} 

    </div>
  );
}

export default ProdutoLista;
