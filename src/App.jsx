import {useState} from 'react'
import Navbar from './assets/componentes/Navbar.jsx';
import BlusaPolo from './assets/imagem/BlusaPolo.jpeg'
import Bone from './assets/imagem/Bone.jpeg'
import Colete from './assets/imagem/Colete.jpeg'
import Jaleco from './assets/imagem/Jaleco.jpeg'
import Jaqueta from './assets/imagem/Jaqueta.jpeg'
import UniformeJogos from './assets/imagem/UniformeJogos.jpeg'
import ProductCard from './assets/componentes/ProductCard.jsx';

const products = [
  {
    id: 1,
    name: "Camisa Polo Personalizada ",
    price: "199,90",
    image: BlusaPolo.jpeg,
  },
  {
    id: 2,
    name: "Boné Personalizado",
    price: "149,90",
    image: Bone.jpeg,
  },
  {
    id: 3,
    name: "Colete Feminino Personalizado",
    price: "89,90",
    image: Colete.jpeg,
  },
  {
    id: 4,
    name: "Jaqueta Personalizada",
    price: "259,90",
    image: Jaqueta.jpeg,
  },
  {
    id: 5,
    name: "Jaqueta Personalizada",
    price: "59,90",
    image: Jaleco.jpeg,
  },
  {
    id: 6,
    name: "Uniforme de Jogos Internos Personalizados",
    price: "49,90",
    image: UniformeJogos.jpeg,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false)

  
  return (
    <div>
      <Navbar />
      <h1>Minha Loja</h1>
      {products.map((product) => (<ProductCard name={product.name} price={product.price} image={product.image}/>))}
      
    </div>
    
  );
}

export default App;