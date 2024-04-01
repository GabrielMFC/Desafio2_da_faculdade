import axios from "axios"

function  Cadastro(email, senha) {
    let usuario = {
        "email": email,
        "senha": senha
    }
    return axios.post("http://localhost:3400/login", usuario)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
    })
}
export default Cadastro