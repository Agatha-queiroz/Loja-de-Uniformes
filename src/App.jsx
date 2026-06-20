import { useState } from "react";

import Navbar from "./assets/componentes/Navbar.jsx";
import ProdutoLista from "./assets/componentes/ProdutoLista.jsx";
import SideBar from "./assets/componentes/SideBar.jsx";

import Banner1 from "./assets/imagem/Banner1.jpeg";
import Longa from "./assets/imagem/tabelaLonga.png";
import Curta from "./assets/imagem/tabelaCurta.png";
import BlusaPolo from "./assets/imagem/BlusaPolo.jpeg";
import Bone from "./assets/imagem/Bone.jpeg";
import Colete from "./assets/imagem/Colete.jpeg";
import Jaleco from "./assets/imagem/Jaleco.jpeg";
import Jaqueta from "./assets/imagem/Jaqueta.jpeg";
import CamisaSocialFem from "./assets/imagem/CamisaSocialFem.jpeg";
import CamisaSocialMasc from "./assets/imagem/CamisaSocialMasc.png";
import UniformeJogos from "./assets/imagem/UniformeJogos.jpeg";

const produtos = [
  {id: 1, nome: "Camisa Polo Personalizada", preco: "75,90", imagem: BlusaPolo,},
  { id: 2, nome: "Camisa Social Feminina", preco: "50,90", imagem: CamisaSocialFem,},
  {id: 3, nome: "Camisa Social Masculina", preco: "50,90", imagem: CamisaSocialMasc,},
  { id: 4, nome: "Uniforme de Jogos Personalizados", preco: "200,00", imagem: UniformeJogos,},
  {id: 5, nome: "Colete Personalizado", preco: "89,90", imagem: Colete,},
  { id: 6, nome: "Jaqueta Personalizada", preco: "190,90", imagem: Jaqueta,},
  {id: 7, nome: "Jaleco Personalizado", preco: "69,90", imagem: Jaleco,},
  { id: 8, nome: "Boné Personalizado", preco: "90,00", imagem: Bone,},
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [busca, setBusca] = useState('');
  const [items, setItems] = useState(produtos)
  const [inputNome, setInputNome]     = useState("");
  const [inputPreco, setInputPreco]   = useState("");
  const [inputImagem, setInputImagem] = useState("");
  const [editandoId, setEditandoId]= useState(null)


  const filtrados = items.filter( produto=> {
    return produto.nome.toLowerCase().includes(busca.toLowerCase())
  })


  function cadastrar() {
    if (!inputNome.trim()) return;
    const novoItem = {
      id: Date.now(),
      nome: inputNome.trim(),
      preco: Number(inputPreco) ||  0,
      imagem: inputImagem.trim(),
    };
    console.log(novoItem)
    setItems([...items, novoItem]);
    setInputNome("");
    setInputPreco("");
    setInputImagem("");
  }
  function iniciarEdicao(produto){
    setEditandoId(produto.id)
    setInputNome(produto.nome)
    setInputPreco(produto.preco)
    setInputImagem(produto.imagem)
  }

  function apagar(id) {
    const novaLIsta = items.filter((produto)=> {
      return produto.id != id
    })
   setItems(novaLIsta)
  }

  function hAddAoCart(produto) {
    setCartItems([
      ...cartItems,
      {
        ...produto,
        quantidade: 1,
        aberto: false,
        tamanho: produto.tamanho || "",
        medidas: produto.medidas || {
          largura: "",
          altura: ""
        }
      }
    ]);
  }

  function hRemoveDoCart(index) {
    setCartItems(
      cartItems.filter((_, i) => i !== index)
    );
  }

  function toggleCard(index) {
    const novos = [...cartItems];

    novos[index].aberto =
      !novos[index].aberto;

    setCartItems(novos);
  }

  function aumentarQuantidade(index) {
    const novos = [...cartItems];

    novos[index].quantidade++;

    setCartItems(novos);
  }

  function diminuirQuantidade(index) {
    const novos = [...cartItems];

    if (novos[index].quantidade > 1) {
      novos[index].quantidade--;
    }

    setCartItems(novos);
  }

  function selecionarTamanho(
    index,
    tamanho
  ) {
    const novos = [...cartItems];

    novos[index].tamanho = tamanho;

    setCartItems(novos);
  }

  function atualizarMedida(
    index,
    campo,
    valor
  ) {
    const novos = [...cartItems];

    novos[index].medidas[campo] = valor;

    setCartItems(novos);
  }

  function hAbreCart() {
    setIsCartOpen(true);
  }

  function hFechaCart() {
    setIsCartOpen(false);
  }

  return (
    <div>
      <Navbar
        cartContagem={cartItems.length}
        onCartClick={hAbreCart}
        setBusca={setBusca}
      />

      <div className="Banner">
        <img
          src={Banner1}
          alt="Banner"
        />
      </div>

      {isCartOpen && (
        <SideBar
          cartItems={cartItems}
          onRemove={apagar}
          onFecha={hFechaCart}
          toggleCard={toggleCard}
          aumentarQuantidade={
            aumentarQuantidade
          }
          diminuirQuantidade={
            diminuirQuantidade
          }
          selecionarTamanho={
            selecionarTamanho
          }
          atualizarMedida={
            atualizarMedida
          }
        />
      )}

      <main className="pagina-princ">
      <div className="conteudo-centro">
        <h2 className="titulo-pagiPrinc">Nossos Modelos</h2>
        <ProdutoLista
          produtos={produtos}
          onAddAoCart={hAddAoCart}
          filtrados={filtrados}
         
        />
        
      </div>
      </main>
        <div className="footer">
          <img src={Longa} />
          <img src={Curta} />
        </div>
        <div className="container">
          <h1>📋 Tecnologias</h1>
          <div className="form">
           <h2>{editandoId ? "Editar tecnologia" : "Cadastrar tecnologia"}</h2>

            <input
              type="text"
              placeholder="Nome da tecnologia"
              value={inputNome}
              onChange={(e) => setInputNome(e.target.value)}
            />
            <input type="number" placeholder="Valor (R$)" value={inputPreco} onChange={(e) => setInputPreco(e.target.value)}
            />
            <input
              type="text"
              placeholder="URL da imagem"
              value={inputImagem}
              onChange={(e) => setInputImagem(e.target.value)}
            />

            {editandoId ? (
              <div className="form-botoes">
                <button className="btn-salvar" onClick={salvarEdicao}>Salvar</button>
                <button className="btn-cancelar" onClick={cancelarEdicao}>Cancelar</button>
              </div>
            ) : (
              <button onClick={cadastrar}>Cadastrar</button>
            )}
          </div>
        </div>
      </div>
  );
}

export default App;
