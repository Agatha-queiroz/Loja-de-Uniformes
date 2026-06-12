import ProdutoCard from "./ProdutoCard";

function ProdutoLista({produtos}){
    return(
        <div className="produto-grid">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
          />
        ))}
      </div>
    );
}
export default ProdutoLista;