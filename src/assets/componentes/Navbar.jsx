import SideBar from "./assets/componentes/SideBar.jsx"
import Logo from '../imagem/LogoMarca.png'
import compras from '../imagem/compras.png'
import Procurar from '../imagem/procurar.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img  className="logo" src={Logo} alt="Logo da Empresa"/>
      
      <div className="pesquisar-box">
      <input id="barra-pesq" type="text" placeholder="Pesquisar"/>
      <button onClick={()=> {props.openCart(true)}} className="navbar-cart">Carinho ({props.cartCount})<img src={Procurar} alt="" /></button>
      </div>

      <span className="navbar-cart"> Carrinho <img src={compras} alt="carrinho" /> (0)</span>
    </nav>
  );
}

export default Navbar;