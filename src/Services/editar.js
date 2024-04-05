import axios from "axios";
import lerProdutos from "./lerProdutos";

function  editar(id, produto) {
  lerProdutos().then(response => {
    const itemAserEditado = response[id]
    let token = localStorage.getItem("token")
    return axios.put(`http://localhost:3400/produtos/${itemAserEditado.id}`, produto, {
        headers: {
            'Authorization': `${token}`
          }
    })
    .then(() => {
      window.location.reload()
      })
    })
}
export default editar