import { useState } from "react"
import "./paginaDeInteracao.css"
import editar from "../../Services/editar"
import lerProdutos from "../../Services/lerProdutos"
import Swal from "sweetalert2"

function PaginaDeEditar() {
    const [numero, setnumero] = useState()
    const [nome, setnome] = useState()
    const [valor, setvalor] = useState()
    const [qtd, setqtd] = useState()

    const obternumero = (event) => {
        setnumero(event.target.value)
    }
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
        lerProdutos().then(response => {
        if(!numero){
            Swal.fire({
                popup:"background-color: blue;",
                icon: "error",
                title: "Oops...",
                text: "Preencha o número"
              });
            return
        }
        let id = numero - 1
        var produto = {
            "nome": nome,
            "valor": valor,
            "quantidadeEstoque": qtd,
            "dataCadastro": response[id].dataCadastro
        }
        if(!nome){
            produto.nome = response[id].nome
        }
        if(!valor){
            produto.valor = response[id].valor
        }
        if(!qtd){
            produto.quantidadeEstoque = response[id].quantidadeEstoque
        }
        editar(id, produto)
    })
}
    return(
        <>
        <div id="centralizarfelx">
            <div className="pagina" id="pagina-de-editar">
            <h2 className="titulo" id="titulo-de-editar">Editar</h2>
            <h3>Número:</h3>
            <input onChange={obternumero} placeholder="Digite o número do produto..."></input>
            <h3>Nome:</h3>
            <input onChange={obterNome} placeholder="Digite o nome..."></input>
            <h3>Valor:</h3>
            <input onChange={obtervalor}  placeholder="Digite o valor..."></input>
            <h3>Quantidade:</h3>
            <input onChange={obterqtd}  placeholder="Digite a quantidade..."></input>
            <button onClick={VazarDados} id="btn-de-editar" className="btn-de-confirmar">Editar</button>
            </div>
        </div>
        </>
    )
}
export default  PaginaDeEditar