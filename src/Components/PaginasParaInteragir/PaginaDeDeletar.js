import { useState } from "react"
import "./paginaDeInteracao.css"
import remover from "../../Services/remover"

function PaginaDeDeletar() {
    const [numero, setnumero] = useState()

    const obternumero = (event) => {
        setnumero(event.target.value)
    }
    const excluir = () => {
        if(!numero){
            alert("Digite o número do item que deseja ser removido")
            return
        }
        let id = numero - 1
        remover(id)
        window.location.reload()
    }
    return(
        <>
        <div id="centralizarfelx">
            <div className="pagina" id="pagina-de-remover">
            <h2 className="titulo" id="titulo-de-remover">Remover</h2>
            <h3>Número:</h3>
            <input onChange={obternumero} placeholder="Digite o número do produto..."></input>
            <button onClick={() => {excluir()}} id="btn-de-remover" className="btn-de-confirmar">Remover</button>
            </div>
        </div>
        </>
    )
}
export default  PaginaDeDeletar