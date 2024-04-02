import { useState } from "react"
import "./paginaDeInteracao.css"
import AdicionarProdutos from "../../Services/adicionar"
import Swal from "sweetalert2"

function PaginaDeAdicionar({desaparecer}) {
    const [nome, setnome] = useState()
    const [valor, setvalor] = useState()
    const [qtd, setqtd] = useState()

    const obterNome = (event) => {
        setnome(event.target.value)
    }
    const obtervalor = (event) => {
        setvalor(event.target.value)
    }
    const obterqtd = (event) => {
        setqtd(event.target.value)
    }
    const VazarDados = () => {
        if(!nome || !valor || !qtd){
            Swal.fire({
                popup:"background-color: blue;",
                icon: "error",
                title: "Oops...",
                text: "Preencha tudo"
              });
              return
        }
        let produto = {
            "nome": nome,
            "valor": valor,
            "quantidadeEstoque": qtd,
            "dataCadastro": new Date()
        }
        desaparecer()
        AdicionarProdutos(produto)
    }
    return(
        <>
        <div id="centralizarfelx">
            <div id="pagina-de-add">
            <h2 id="titulo">Adicionar</h2>
            <h3>Nome:</h3>
            <input onChange={obterNome} placeholder="Digite o nome..."></input>
            <h3>Valor:</h3>
            <input onChange={obtervalor}  placeholder="Digite o valor..."></input>
            <h3>Quantidade:</h3>
            <input onChange={obterqtd}  placeholder="Digite a quantidade..."></input>
            <button onClick={() => {VazarDados(); desaparecer(true)}} id="btn-de-confirmar">Confirmar</button>
            </div>
        </div>
        </>
    )
}
export default  PaginaDeAdicionar