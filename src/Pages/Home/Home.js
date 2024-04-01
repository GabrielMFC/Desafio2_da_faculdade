import "./Home.css";
import lerProdutos from "../../Services/lerProdutos";
import { useState, useEffect } from "react";
import Minhalista from "../../Components/lista/itemDaLista";

function Home() {
  const [resposta, setResposta] = useState([]);

  useEffect(() => {
    function obterProdutos() {
      lerProdutos().then((response) => setResposta(response));
    }
    obterProdutos();
  }, []);

  return (
    <>
      <nav>
        <button id="adicionar-btn">Adicionar</button>
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
      {resposta.map((item, index) => (
          <Minhalista key={index}  numero={item.id} nome={item.nome} valor={item.valor} qtd={item.quantidadeEstoque} data={item.dataCadastro}/>
        ))}
</table>
    </>
  );
}

export default Home;