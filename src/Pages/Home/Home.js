import "./Home.css";
import lerProdutos from "../../Services/lerProdutos";
import { useState, useEffect } from "react";
import Minhalista from "../../Components/lista/itemDaLista";
import PaginaDeAdicionar from "../../Components/PaginasParaInteragir/PaginaDeAdicionar";

function Home() {
  const [resposta, setResposta] = useState([]);
  const [sumir, setSumir] = useState(true)

  useEffect(() => {
    function obterProdutos() {
      lerProdutos().then((response) => setResposta(response));
    }
    obterProdutos();
  }, []);

  function Desaparecer() {
    setSumir(!sumir)
  }
  return (
    <>
      <nav>
        <button id="adicionar-btn" onClick={Desaparecer}>Adicionar</button>
        <button id="editar-btn">Editar</button>
        <button id="remover-btn">Remover</button>
      </nav>
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
          <Minhalista key={indice}  numero={item.id} nome={item.nome} valor={item.valor} qtd={item.quantidadeEstoque} data={item.dataCadastro}/>
        ))}
</table>
{sumir ? null : <PaginaDeAdicionar desaparecer={Desaparecer
}/>}
{/* <PaginaDeAdicionar/> */}
    </>
  );
}

export default Home;