import axios from "axios"
import lerProdutos from "./lerProdutos"

function remover(id){ 
    lerProdutos()
    .then((response) => {
        console.log(response)
        let token = localStorage.getItem("token")
        return axios.delete(`http://localhost:3400/produtos/${response[id].id}`, {
            headers: {
                'Authorization': `${token}`
            }
        })
    })
}
export default remover