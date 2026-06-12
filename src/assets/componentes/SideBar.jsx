function SideBar(props) {
    const total = props.cartItems.reduce((soma, item) => {
      const precoItem = parseFloat(item.preco.replace(',', '.'));
      return soma + preco;
    }, 0);
  
    return (
      <div className="Cart-overlay">
        <div className="Cart-sidebar">
          <div className="Cart-header">
            <h2> Seu Carrinho</h2>
            <button
              className="Cart-fecha"
              onClick={() => {
                props.closeCart(false);
              }} >
              X
            </button>
          </div>
          <div className="Cart-item">
            {props.cartItems.length == 0 ? (
              <p className="Cart-vazio">Nenhum item no carrinho</p>
            ) : (
              props.cartItems.map((item, index) => (
                <p key={index}>
                  {item.title} - R${item.preco}
                </p>
              ))
            )}
          </div>
          <div className="total-cart">
            <strong>
              <h1> TOTAL</h1>
              <h2>R${total}</h2>
            </strong>
          </div>
        </div>
      </div>
    );
  }
  export default SideBar;