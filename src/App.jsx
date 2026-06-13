import {useState} from 'react'
import Navbar from './assets/componentes/Navbar.jsx';
import ProdutoLista from "./assets/componentes/ProdutoLista.jsx";
import BlusaPolo from './assets/imagem/BlusaPolo.jpeg'
import Bone from './assets/imagem/Bone.jpeg'
import Colete from './assets/imagem/Colete.jpeg'
import Jaleco from './assets/imagem/Jaleco.jpeg'
import Jaqueta from './assets/imagem/Jaqueta.jpeg'
import UniformeJogos from './assets/imagem/UniformeJogos.jpeg'

const produtos = [
  {id: 1, nome: "Camisa Polo Personalizada ", preco: "199,90", imagem: BlusaPolo,},
  { id: 2, nome: "Boné Personalizado", preco: "149,90", imagem: Bone,},
  {id: 3, nome: "Colete Feminino Personalizado", preco: "89,90", imagem: Colete,},
  { id: 4, nome: "Jaqueta Personalizada", preco: "259,90", imagem: Jaqueta,},
  {id: 5, nome: "Jaleco Personalizada", preco: "59,90", imagem: Jaleco,},
  { id: 6, nome: "Uniforme de Jogos Personalizados", preco: "49,90", imagem: UniformeJogos,},
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen , setIsCartOpen] = useState(false);
  const [cartContagem, setCartContag] = useState(0)

  function hAddAoCart(produto){
    setCartContag([...cartItems, produto])
  }

  return (
    <div>
      <Navbar cartContagem={cartItems.length}/>
      <main className="pagina-princ">
        <div className="Banner">
            <img src="" alt="" />
        </div>
        <h2 className="titulo-pagiPrinc">Nossos Modelos</h2>
        <ProdutoLista produtos={produtos} onAddAoCart={hAddAoCart}/>
      </main>
    </div>
    
  );
}

export default App;