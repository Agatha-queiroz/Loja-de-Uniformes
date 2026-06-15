import Logo from '../imagem/LogoMarca.png'
import compras from '../imagem/compras.png'
import Procurar from '../imagem/procurar.png'

function Navbar({cartContagem ,onCartClick}) {
  return (
    <nav className="navbar">
      <img  className="logo" src={Logo} alt="Logo da Empresa"/>
      
      <div className="pesquisar-box">
      <input id="barra-pesq" type="text" placeholder="Pesquisar"/>
      <button  className="btn-pesq"><img src={Procurar} alt="" /></button>
      </div>

      <div className="navbar-cart" onClick={onCartClick}> Carrinho <img src={compras} alt="carrinho" /> 
        <span className="Cont-carr"> {cartContagem} </span>
      </div>
    </nav>
  );
}

export default Navbar;
