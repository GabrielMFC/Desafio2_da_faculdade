import { useState } from "react"
import "./login.css"
import Cadastro from "../../Services/cadastro"
import {useNavigate, useHistory} from "react-router-dom"
import Swal from "sweetalert2"

function Login() {
    const navigate = useNavigate()
    const [email, setemail] = useState()
    const [senha, setsenha] = useState()

    const obteremail = (event) => {
        setemail(event.target.value)
    }
    const obtersenha = (event) => {
        setsenha(event.target.value)
    }
    const verificar = () => {
        if(!email || !senha) {
            Swal.fire({
                popup:"background-color: blue;",
                icon: "error",
                title: "Oops...",
                text: "E-mail ou senha incorretos, tente novamente!",
                confirmButtonColor: "green"
              });
            return
        }
        Cadastro(email, senha)
        .then(() => {
            navigate("/Home", {replace: true})
        })
        .catch(() => {
            Swal.fire({
                popup:"background-color: blue;",
                icon: "error",
                title: "Oops...",
                text: "E-mail ou senha incorretos, tente novamente!",
                confirmButtonColor: "green"
              });
            return
        })
    }
    return(
        <>
    <div className="centralizarflex">
    <div id="teladelogin">
        <h1 id="titulo-login">Login</h1>
        <input  onChange={obteremail} type="email" placeholder="Digite seu e-mail..." id="email" email={email}/>
        <input onChange={obtersenha} type="password" placeholder="Digite sua senha..." id="senha" senha={senha}/>
        <button id="botaodeentrar" onClick={verificar}>Entrar</button>
        <div id="detalhe"></div>
    </div>
    <div id="blur">
    <div className="efeito1" id="posicao1"></div>
        <div className="efeito1" id="posicao2"></div>
        <div className="efeito1" id="posicao3"></div>
    </div>
    </div>
    </>
    )
}
export default Login