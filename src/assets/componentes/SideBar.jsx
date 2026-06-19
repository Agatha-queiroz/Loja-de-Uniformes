function SideBar({
  cartItems, onRemove,
  onFecha,toggleCard,
  aumentarQuantidade,diminuirQuantidade,
  selecionarTamanho,atualizarMedida,
}) {
  const total = cartItems.reduce((soma, item) => {
    const precoItem = parseFloat(
      item.preco.replace(",", ".")
    );

    return soma + precoItem * item.quantidade;
  }, 0);

  return (
    <div className="Cart-overlay">
      <div className="Cart-sidebar">

        <div className="Cart-header">
          <h2>Seu Carrinho</h2>

          <button
            className="Cart-fecha"
            onClick={onFecha}
          >
            ✕
          </button>
        </div>

        <div className="Cart-item">

          {cartItems.length === 0 ? (
            <p className="Cart-vazio">
              Nenhum item no carrinho
            </p>
          ) : (
            <ul className="cart-lista">

              {cartItems.map((item, index) => (

                <li
                  key={index}
                  className="cart-card"
                >

                  <div
                    className="cart-card-top"
                    onClick={() =>
                      toggleCard(index)
                    }
                  >

                    <div className="cart-card-image">
                      <img
                        src={item.imagem}
                        alt={item.nome}
                      />
                    </div>

                    <div className="cart-card-info">
                    <h4>
                      {item.nome}
                      {item.tamanho && ` - ${item.tamanho}`}
                    </h4>

                      {item.tamanho && (
                        <p className="cart-info">
                          <strong>Tamanho:</strong> {item.tamanho}
                        </p>
                      )}

                      {item.tamanho === "PERSONALIZADO" && (
                        <>
                          <p className="cart-info">
                            <strong>Largura:</strong> {item.medidas?.largura} cm
                          </p>

                          <p className="cart-info">
                            <strong>Altura:</strong> {item.medidas?.altura} cm
                          </p>
                        </>
                      )}

                      <strong>
                        R$ {item.preco}
                      </strong>

                      <div
                        className="cart-quantidade"
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                      >

                        <button
                          onClick={() =>
                            diminuirQuantidade(
                              index
                            )
                          }
                        >
                          -
                        </button>

                        <span>
                          {item.quantidade}
                        </span>

                        <button
                          onClick={() =>
                            aumentarQuantidade(
                              index
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>

                  </div>

                  {item.aberto && (

                    <div className="cart-details">

                      <label>
                        Escolha o tamanho
                      </label>

                      <div className="size-buttons">

                        {["P", "M", "G"].map(
                          (tam) => (
                            <button
                              key={tam}
                              className={
                                item.tamanho === tam
                                  ? "size-btn active"
                                  : "size-btn"
                              }
                              onClick={() =>
                                selecionarTamanho(
                                  index,
                                  tam
                                )
                              }
                            >
                              {tam}
                            </button>
                          )
                        )}

                        <button
                          className={
                            item.tamanho ===
                            "PERSONALIZADO"
                              ? "size-btn active"
                              : "size-btn"
                          }
                          onClick={() =>
                            selecionarTamanho(
                              index,
                              "PERSONALIZADO"
                            )
                          }
                        >
                          Personalizado
                        </button>

                      </div>

                      {item.tamanho ===
                        "PERSONALIZADO" && (

                        <div className="custom-size">

                          <input
                            type="number"
                            placeholder="Largura (cm)"
                            value={
                              item.medidas
                                .largura
                            }
                            onChange={(e) =>
                              atualizarMedida(
                                index,
                                "largura",
                                e.target.value
                              )
                            }
                          />

                          <input
                            type="number"
                            placeholder="Altura (cm)"
                            value={
                              item.medidas
                                .altura
                            }
                            onChange={(e) =>
                              atualizarMedida(
                                index,
                                "altura",
                                e.target.value
                              )
                            }
                          />

                        </div>

                      )}

                      <button className="cart-remove" onClick={() => onRemove(id)}>
                        Remover Produto
                      </button>

                    </div>

                  )}

                </li>

              ))}

            </ul>
          )}

        </div>

        <div className="total-cart">
          <strong>
            <span>Total</span>
            <span>
              R${" "}{total.toFixed(2).replace(".", ",")}
            </span>
          </strong>

          <button className="cart-checkout">
            Finalizar Compra
          </button>

        </div>

      </div>
    </div>
  );
}

export default SideBar;
