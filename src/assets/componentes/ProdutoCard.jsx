import { useState } from "react";

function ProdutoCard({
  imagem,
  nome,
  preco,
  onAddAoCart,
  onApagar,
  onEditar
}) {

  const [tamanho, setTamanho] = useState("");
  const [largura, setLargura] = useState("");
  const [altura, setAltura] = useState("");

  const adicionarProduto = () => {

    onAddAoCart({
      nome,
      preco,
      imagem,
      tamanho,
      medidas: {
        largura,
        altura
      }
    });

  };


 


  return (
    <div className="produto-card">

      <div className="produto-img">
        <img src={imagem} alt={nome} />
      </div>

      <div className="produto-info">
        <h3>{nome}</h3>
        <div className="size-buttons">
          {["P", "M", "G"].map((tam) => (
            <button key={tam}
              className={
                tamanho === tam
                  ? "size-btn active"
                  : "size-btn"
              }
              onClick={() => setTamanho(tam)}
            >
              {tam}
            </button>
          ))}

          <button
            className={
              tamanho === "PERSONALIZADO"
                ? "size-btn active"
                : "size-btn"
            }
            onClick={() => setTamanho("PERSONALIZADO")}
          >
            Personalizado
          </button>
        </div>

        <div className="tamanho-info">
          {!tamanho && (
            <p>Selecione um tamanho acima</p>
          )}

          {tamanho === "P" && (
            <>
              <strong>Tamanho P</strong>

              <p>Ombro: 40cm</p>
              <p>Comprimento: 67cm</p>
              <p>Tórax: 48cm</p>

              <p>Material: Poliéster Premium</p>
            </>
          )}

          {tamanho === "M" && (
            <>
              <strong>Tamanho M</strong>

              <p>Ombro: 42cm</p>
              <p>Comprimento: 69cm</p>
              <p>Tórax: 50cm</p>

              <p>Material: Poliéster Premium</p>
            </>
          )}

          {tamanho === "G" && (
            <>
              <strong>Tamanho G</strong>

              <p>Ombro: 44cm</p>
              <p>Comprimento: 71cm</p>
              <p>Tórax: 52cm</p>

              <p>Material: Poliéster Premium</p>
            </>
          )}
          {tamanho === "PERSONALIZADO" && (
            <div className="custom-size">

              <input
                type="number"
                placeholder="Largura (cm)"
                value={largura}
                onChange={(e) => setLargura(e.target.value)}
              />

              <input type="number"
                placeholder="Altura (cm)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />

            </div>
          )}
        </div>
        <p className="produto-preco">
          R$ {preco}
        </p>

        <button className="botao-add" onClick={adicionarProduto}>
          Adicionar ao Carrinho
        </button>

        <div className="acoes"> 
        <button className="btn-apagar" onClick={onApagar}>
        Apagar
        </button>
        </div>
        
        <button onClick={onEditar}>
         Editar
         </button>



      </div>

    </div>
  );
}

export default ProdutoCard;
