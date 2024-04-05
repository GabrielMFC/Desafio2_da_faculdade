import { useState } from "react"
import "./paginaDeInteracao.css"
import AdicionarProdutos from "../../Services/adicionar"
import Swal from "sweetalert2"

function PaginaDeAdicionar() {
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
        AdicionarProdutos(produto)
        window.location.reload()
    }
    return(
        <>
        <div id="centralizarfelx">
            <div className="pagina">
            <h2 className="titulo" id="titulo-de-adicionar">Adicionar</h2>
            <h3>Nome:</h3>
            <input onChange={obterNome} placeholder="Digite o nome..."></input>
            <h3>Valor:</h3>
            <input onChange={obtervalor}  placeholder="Digite o valor..."></input>
            <h3>Quantidade:</h3>
            <input onChange={obterqtd}  placeholder="Digite a quantidade..."></input>
            <button onClick={() => {VazarDados()}} className="btn-de-confirmar" id="btn-de-adicionar">Confirmar</button>
            </div>
        </div>
        </>
    )
}
export default  PaginaDeAdicionar