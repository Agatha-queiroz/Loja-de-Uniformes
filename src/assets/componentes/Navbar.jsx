import Logo from '../imagem/LogoMarca.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img  className="logo" src={Logo} alt="Logo da Empresa"/>
      
      <div className="pesquisar-box">
      <input type="text" placeholder="Pesquisar"/>
      <button></button>
      </div>

      <span className="navbar-cart"> Carrinho (0)</span>
    </nav>
  );
}

export default Navbar;