import "./Home.css";
import "../../Components/lista/lista.css"
import lerProdutos from "../../Services/lerProdutos";
import React, {useState, useEffect } from "react"
import Minhalista from "../../Components/lista/itemDaLista";
import PaginaDeAdicionar from "../../Components/PaginasParaInteragir/PaginaDeAdicionar";

function Home() {
  const [resposta, setResposta] = useState([])
  const [sumir, setSumir] = useState(true)
  const [luz, setluz] = useState("")

  useEffect(() => {
    function obterProdutos() {
      lerProdutos()
      .then((response) => setResposta(response))
    }
    obterProdutos()
  }, [])
  
  function Desaparecer() {
    setSumir(!sumir)
  }
  return (
    <>
      <nav className={luz}>
        <button className="botoes" onMouseOver={() => setluz("navAdicionar")} onMouseLeave={() => setluz("")} id="adicionar-btn" onClick={Desaparecer}>Adicionar</button>
        <button className="botoes" onMouseOver={() => setluz("navEditar")} onMouseLeave={() => setluz("")} id="editar-btn">Editar</button>
        <button className="botoes" onMouseOver={() => setluz("navRemover")} onMouseLeave={() => setluz("")} id="remover-btn">Remover</button>
      </nav>
      <div id="posicaoflex">
<table>
<thead>
    <tr>
      <th>Número</th>
      <th>Nome</th>
      <th>Valor</th>
      <th>Quantidade</th>
      <th>Data de cadastro</th>
    </tr>
  </thead>
      {resposta.map((item, indice) => (
          <Minhalista key={indice} numero={item.id} nome={item.nome} valor={item.valor} qtd={item.quantidadeEstoque} data={item.dataCadastro}/>
        ))}
</table>
</div>
{sumir ? null : <PaginaDeAdicionar desaparecer={Desaparecer
}/>}
    </>
  );
}

export default Home